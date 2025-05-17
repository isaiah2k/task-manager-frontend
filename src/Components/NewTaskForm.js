import { useState } from 'react'

function NewTaskForm() {

  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('School')

  function handleSubmit(e) {
  e.preventDefault()

  const newTask = {
    title,
    category,
    completed: false
  }
  
  console.log('Submitting new task:', newTask)
  
  fetch('http://localhost:6001/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newTask)
  })
    .then((res) => res.json())
    .then((data) => {
      console.log('Task added:', data)
      setTitle('')
      setCategory('School')
    })
}

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Task</h2>

      <label>
        Title:
        <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>

      <label>
        Category:
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          >
          <option>School</option>
          <option>Health</option>
          <option>Chores</option>
          <option>Mental</option>
          <option>Errands</option>
        </select>
      </label>

      <button type='submit'>Add Task</button>
    </form>
  )
}

export default NewTaskForm
