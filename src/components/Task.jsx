import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleTask, editTask, deleteTask } from '../store/tasksSlice'

function Task({ task }) {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(task.description)

  function handleToggle() {
    dispatch(toggleTask(task.id))
  }

  function handleEditSave() {
    if (editText.trim() === '') {
      alert('task cant be empty!')
      return
    }
    dispatch(editTask({ id: task.id, description: editText }))
    setIsEditing(false)
  }

  function handleDelete() {
    // just a little confirm so you dont delete stuff by accident
    if (window.confirm('delete this task?')) {
      dispatch(deleteTask(task.id))
    }
  }

  return (
    <li className={task.isDone ? 'task done' : 'task'}>
      <input type="checkbox" checked={task.isDone} onChange={handleToggle} />

      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={handleEditSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <span className="task-text">{task.description}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </li>
  )
}

export default Task
