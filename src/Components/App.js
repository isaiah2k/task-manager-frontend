import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './NavBar'
import TaskList from './TaskList'
import NewTaskForm from './NewTaskForm'
import About from './About'

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
