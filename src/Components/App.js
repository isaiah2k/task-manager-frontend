import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './NavBar.js'
import TaskList from './TaskList.js'
import NewTaskForm from './NewTaskForm.js'
import About from './About.js'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/new" element={<NewTaskForm />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
