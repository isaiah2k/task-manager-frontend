function NewTaskForm() {
  return (
    <form>
      <h2>Add a New Task</h2>

      <label>
        Title:
        <input/>
      </label>

      <label>
        Category:
        <select>
          <option>School</option>
          <option>Health</option>
          <option>Chores</option>
          <option>Mental</option>
          <option>Errands</option>
        </select>
      </label>

      <button>Add Task</button>
    </form>
  )
}

export default NewTaskForm
