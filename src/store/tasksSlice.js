import { createSlice, nanoid } from '@reduxjs/toolkit'

// each task looks like: { id, description, isDone }

const initialState = {
  tasks: [
    // just some starter tasks so the list isn't empty when you open it
    { id: nanoid(), description: 'Finish React homework', isDone: false },
    { id: nanoid(), description: 'Study for the Redux quiz', isDone: true },
  ],
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.tasks.push(action.payload)
      },
      prepare(description) {
        // auto generate the id here so components don't have to worry about it
        return {
          payload: {
            id: nanoid(),
            description,
            isDone: false,
          },
        }
      },
    },
    toggleTask(state, action) {
      const task = state.tasks.find((t) => t.id === action.payload)
      if (task) {
        task.isDone = !task.isDone
      }
    },
    editTask(state, action) {
      const { id, description } = action.payload
      const task = state.tasks.find((t) => t.id === id)
      if (task) {
        task.description = description
      }
    },
    deleteTask(state, action) {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload)
    },
  },
})

export const { addTask, toggleTask, editTask, deleteTask } = tasksSlice.actions
export default tasksSlice.reducer
