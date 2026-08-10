import { useState } from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'

function ListTask() {
  // grabbing the tasks straight from the redux store
  const tasks = useSelector((state) => state.tasks.tasks)

  // filter can be 'all', 'done', or 'notdone'
  const [filter, setFilter] = useState('all')

  let tasksToShow = tasks
  if (filter === 'done') {
    tasksToShow = tasks.filter((t) => t.isDone === true)
  } else if (filter === 'notdone') {
    tasksToShow = tasks.filter((t) => t.isDone === false)
  }

  return (
    <div className="list-task">
      <div className="filters">
        <button
          className={filter === 'all' ? 'active' : ''}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className={filter === 'done' ? 'active' : ''}
          onClick={() => setFilter('done')}
        >
          Done
        </button>
        <button
          className={filter === 'notdone' ? 'active' : ''}
          onClick={() => setFilter('notdone')}
        >
          Not Done
        </button>
      </div>

      {tasksToShow.length === 0 ? (
        <p>no tasks here! add one above :)</p>
      ) : (
        <ul>
          {tasksToShow.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </ul>
      )}
    </div>
  )
}

export default ListTask
