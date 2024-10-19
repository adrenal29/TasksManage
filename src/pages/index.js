import { useState, useEffect } from "react";
import { filterTasks, sortTasks } from "@/utils/Task";
import SearchBar from "@/components/SearchBar";
import Tasks from "@/components/Tasks";
import Topbar from "@/components/globals/Topbar"; 
import TodaysTasks from "@/components/helper/TodaysTasks";

export default function Home({ initialTasks }) {
  const [tasks, setTasks] = useState(initialTasks);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all'); 
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(storedTasks !== "undefined" ? JSON.parse(storedTasks) : []);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks, isLoading]);

  const addTask = (newTask) => {
    const task = { ...newTask, id: Date.now().toString() };
    setTasks(prevTasks => [...prevTasks, task]);
  };

  const updateTask = (updatedTask) => {
    setTasks(prevTasks =>
      prevTasks.map(task => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const deleteTask = (id) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Use the single filterTasks function to handle both filtering and search
  const filteredTasks = filterTasks(tasks, searchTerm, filter);
  const finalTasks = sortTasks(filteredTasks)

  if (isLoading) {
    return <div>Loading tasks...</div>;
  }

  return (
    <div className="container mx-auto px-4 md:px-8">
      <TodaysTasks onAddTask={addTask} />

      <Topbar
        allCount={tasks.length}
        openCount={tasks.filter(task => !task.completed).length}
        closedCount={tasks.filter(task => task.completed).length}
        currentFilter={filter}
        setFilter={setFilter}
      />

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <Tasks
        tasks={finalTasks}
        onUpdateTask={updateTask}
        onDeleteTask={deleteTask}
        onToggleComplete={toggleComplete}
        filter={filter}
      />
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      initialTasks: []
    }
  };
}
