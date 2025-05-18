function TaskList({ tasks, setTasks }) {
  function handleDelete(id) {
    console.log('Deleting task with id:', id)
    fetch(`http://localhost:6001/tasks/${id}`, {
      method: 'DELETE'
    })
      .then(() => {
        console.log('Task deleted')
        const updatedTasks = tasks.filter((task) => task.id !== id)
        setTasks(updatedTasks)
      })
  }

  function handleComplete(id) {

    fetch(`http://localhost:6001/tasks/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ completed: true })
    })
      .then(res => res.json())
      .then(updatedTask => {
        const updatedTasks = tasks.map(task =>
          task.id === updatedTask.id ? updatedTask : task
        )
        setTasks(updatedTasks)
      })
  }

  return (
    <div>
      <h2>All Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} ({task.category}) — {task.completed ? '✅' : '❌'}
            <div>
              {!task.completed && (
                <button onClick={() => handleComplete(task.id)}>Complete</button>
              )}
              <button onClick={() => handleDelete(task.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TaskList
