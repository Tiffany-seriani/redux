# My ToDo App

A simple ToDo app built with React + Redux (Redux Toolkit) for my checkpoint project.

## Features
- Add a new task
- Edit a task
- Mark a task as done / not done
- Filter tasks by All / Done / Not Done
- Delete a task (bonus)

## Task shape
Every task in the Redux store looks like:
```js
{ id, description, isDone }
```

## How to run

1. Install dependencies:
```
npm install
```

2. Start the dev server:
```
npm run dev
```

3. Open the URL it gives you ( http://localhost:5173)

## Project structure
```
src/
  components/
    AddTask.jsx   -> form to add a new task
    ListTask.jsx  -> shows the list of tasks + filter buttons
    Task.jsx      -> a single task (checkbox, edit, delete)
  store/
    store.js       -> redux store config
    tasksSlice.js   -> redux slice with addTask/toggleTask/editTask/deleteTask
  App.jsx
  main.jsx
  index.css
```
