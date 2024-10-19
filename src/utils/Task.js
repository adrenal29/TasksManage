export const sortTasks = (tasks = []) => {
    const priorityList = { low: 0, medium: 1, high: 2 };

    const incompleteTasks = tasks.filter(task => !task.completed);
    const completedTasks = tasks.filter(task => task.completed);

    incompleteTasks.sort((a, b) => priorityList[b.priority] - priorityList[a.priority]);
    completedTasks.sort((a, b) => priorityList[b.priority] - priorityList[a.priority]);
    
    return [...incompleteTasks, ...completedTasks];
};

export const filterTasks = (tasks = [], searchTerm = '', filter = 'all') => {
    return tasks
        .filter(task => {
            if (filter === 'open') return !task.completed;
            if (filter === 'closed') return task.completed;
            return true;
        })
        .filter(task => {

            return (
                task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                task.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
        });
};

