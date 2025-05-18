import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import NavBar from './NavBar.js'
import TaskList from './TaskList.js'
import NewTaskForm from './NewTaskForm.js'
import About from './About.js'
import '../App.css'

function App() {

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
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<TaskList tasks={tasks} setTasks={setTasks}/>} />
          <Route path="/new" element={<NewTaskForm onAddTask={setTasks} currentTasks={tasks} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
