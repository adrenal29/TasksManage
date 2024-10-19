import TaskItem from "./TaskCard";

const Tasks = ({
  tasks,
  onUpdateTask,
  onDeleteTask,
  onToggleComplete,
  filter,
}) => {
  const pendingTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <>
      {(filter === "all" || filter === "open") && (
        <div>
          <h2 style={{ fontSize: "20px" }}>Pending Tasks</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {pendingTasks.length === 0 ? (
              <p>No pending tasks. Great job!</p>
            ) : (
              pendingTasks.map((task) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  onUpdate={onUpdateTask}
                  onDelete={onDeleteTask}
                  onToggleComplete={onToggleComplete}
                />
              ))
            )}
          </div>
        </div>
      )}
      {(filter === "all" || filter === "closed") && (
        <div>
          <h2 style={{ fontSize: "20px" }}>Completed Tasks</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {completedTasks.length === 0 ? (
              <p>No completed tasks yet. Keep going!</p>
            ) : (
              completedTasks.map((task) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  onUpdate={onUpdateTask}
                  onDelete={onDeleteTask}
                  onToggleComplete={onToggleComplete}
                />
              ))
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Tasks;
