This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
```bash
npm install
# or
pnpm install
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Sorting Approach
```bash
const sortTasks = (tasks = []) => {
    # Initializing priority array
    const priorityList = { low: 0, medium: 1, high: 2 };

    # Separating completed and incompleted tasks
    const incompleteTasks = tasks.filter(task => !task.completed);
    const completedTasks = tasks.filter(task => task.completed);

    # sorting tasks in descending order as tasks with higher priority should come first in the list
    incompleteTasks.sort((a, b) => priorityList[b.priority] - priorityList[a.priority]);
    completedTasks.sort((a, b) => priorityList[b.priority] - priorityList[a.priority]);

    # concatenation of final result
    return [...incompleteTasks, ...completedTasks];
};
```
