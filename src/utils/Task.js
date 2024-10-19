export const sortTasks = (tasks = []) => {
    const priorityOrder = { high: 0, medium: 1, low: 2 };
    return tasks.sort((a, b) => {
        if (a.completed !== b.completed) {
            return a.completed ? 1 : -1;
        }
        return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
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

