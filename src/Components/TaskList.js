import { useEffect, useState } from 'react'

function TaskList() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    console.log('Fetching tasks...')
    fetch('http://localhost:6001/tasks')
      .then((res) => res.json())
      .then((data) => {
        console.log('Tasks fetched:', data)
        setTasks(data)
      })
  }, [])

  console.log('Rendering TaskList with:', tasks)

  return (
    <div>
      <h2>All Tasks</h2>
      <p>Tasks will be listed here.</p>
    </div>
  )
}

export default TaskList
