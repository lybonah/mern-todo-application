
import { useState } from 'react'
import './App.css'

function App() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])
  const [editingId, setEditingId] = useState(null)
  const [editText, setEditText] = useState('')

  function addTask() {
    if (task.trim() === '') return

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        title: task.trim(),
        completed: false
      }
    ])

    setTask('')
  }

  function toggleTask(id) {
    setTasks(tasks.map(item =>
      item.id === id
        ? { ...item, completed: !item.completed }
        : item
    ))
  }

  function deleteTask(id) {
    setTasks(tasks.filter(item => item.id !== id))

    if (editingId === id) {
      setEditingId(null)
      setEditText('')
    }
  }

  function startEdit(item) {
    setEditingId(item.id)
    setEditText(item.title)
  }

  function saveEdit(id) {
    if (editText.trim() === '') return

    setTasks(tasks.map(item =>
      item.id === id
        ? { ...item, title: editText.trim() }
        : item
    ))

    setEditingId(null)
    setEditText('')
  }

  function cancelEdit() {
    setEditingId(null)
    setEditText('')
  }

  return (
    <div className="app">
      <div className="todo-card">
        <h1>My Todo List 🎀</h1>
        <p>Organize your day, one task at a time!</p>

        <div className="task-input">
          <input
            value={task}
            onChange={(event) => setTask(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') addTask()
            }}
            placeholder="Add a task... 🎀"
          />
          <button onClick={addTask}>Add Task</button>
        </div>

        <ul>
          {tasks.map(item => (
            <li key={item.id}>
              {editingId === item.id ? (
                <div className="edit-area">
                  <input
                    className="edit-input"
                    value={editText}
                    onChange={(event) => setEditText(event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter') saveEdit(item.id)
                      if (event.key === 'Escape') cancelEdit()
                    }}
                    autoFocus
                  />

                  <button onClick={() => saveEdit(item.id)}>
                    Save
                  </button>

                  <button
                    className="delete-button"
                    onClick={cancelEdit}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <>
                  <label>
                    <input
                      type="checkbox"
                      checked={item.completed}
                      onChange={() => toggleTask(item.id)}
                    />

                    <span className={item.completed ? 'completed' : ''}>
                      {item.title}
                    </span>
                  </label>

                  <div className="task-actions">
                    <button
                      className="edit-button"
                      onClick={() => startEdit(item)}
                    >
                      Edit
                    </button>

                    <button
                      className="delete-button"
                      onClick={() => deleteTask(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>

        <p>
          {tasks.filter(item => !item.completed).length} tasks remaining ♡
        </p>
      </div>
    </div>
  )
}

export default App
