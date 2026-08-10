import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../store/tasksSlice'

function AddTask() {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault() // stop page from refreshing lol

    // dont add empty tasks
    if (text.trim() === '') {
      alert('you cant add an empty task!!')
      return
    }

    dispatch(addTask(text))
    setText('') // clear the input after adding
  }

  return (
    <form onSubmit={handleSubmit} className="add-task-form">
      <input
        type="text"
        placeholder="what do you need to do?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  )
}

export default AddTask
