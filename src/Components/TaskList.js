import { useEffect, useState } from 'react'

function TaskList() {

  return (
    <div>
      <h2>All Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} ({task.category}) — {task.completed ? '✅' : '❌'}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TaskList
