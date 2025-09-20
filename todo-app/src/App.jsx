import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App()
{
  const [task, setTask] = useState("")
  const [desc, setDescTask] = useState("")
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks"))
    || []
  })

const [filteredTask, setFilteredTasks] = useState(tasks)
const [filterString, SetFilterString] = useState("")

useEffect(() => {
  setFilteredTasks(tasks.filter((task) => task.name.includes(filterString)))
}, [filterString, tasks])

useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks))
}, [tasks])

const handleAdd = (e) => {
  e.preventDefault()
  const newTask = {
     id: crypto.randomUUID(),
     name: task,
     desc,
  }
setTasks((oldValue) => [newTask, ...oldValue])
    setTask("")
    setDescTask("")
}

  const [count, setCount] = useState(0)

  return (
   
     <div className="container">
        <div className="header">
            <h1>Todo App</h1>
            <p>Управляйте своими задачами</p>
        </div>

        <div className="add-todo">
            <div className="input-container">
                <input type="text" className="todo-input" placeholder="Добавить новую задачу..." id="todoInput" onChange={(value) => setTask(value.target.value)} value={tasks}/>
                <button className="add-btn" id="addBtn">Добавить</button>
            </div>
        </div>

        <div className="filters">
            <button className="filter-btn active" data-filter="all">Все</button>
            <button className="filter-btn" data-filter="active">Активные</button>
            <button className="filter-btn" data-filter="completed">Завершенные</button>
        </div>

        <div className="todo-list">
            <div className="todo-item">
                <input type="checkbox" className="todo-checkbox"/>
                <span className="todo-text">Изучить основы React</span>
                <button className="delete-btn">Удалить</button>
            </div>
            
            <div className="todo-item completed">
                <input type="checkbox" className="todo-checkbox" />
                <span className="todo-text">Настроить рабочее окружение</span>
                <button className="delete-btn">Удалить</button>
            </div>
            
            <div className="todo-item">
                <input type="checkbox" className="todo-checkbox"/>
                <span className="todo-text">Создать компонентную архитектуру</span>
                <button className="delete-btn">Удалить</button>
            </div>
            
            <div className="todo-item">
                <input type="checkbox" className="todo-checkbox"/>
                <span className="todo-text">Добавить стили и анимации</span>
                <button className="delete-btn">Удалить</button>
            </div>
        </div>

        <div className="stats">
            Всего: 4 | Активных: 3 | Завершено: 1
        </div>
    </div>

  )
}

export default App
