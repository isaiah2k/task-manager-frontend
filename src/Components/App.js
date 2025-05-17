import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './NavBar.js'
import TaskList from './TaskList.js'
import NewTaskForm from './NewTaskForm.js'
import About from './About.js'

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
      <NavBar />
      <Routes>
        <Route path="/" element={<TaskList tasks={tasks}/>} />
        <Route path="/new" element={<NewTaskForm onAddTask={setTasks} currentTasks={tasks} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
