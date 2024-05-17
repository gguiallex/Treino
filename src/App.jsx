import { useState } from 'react'
import "./App.css"

import ToDoBlocks from './components/ToDoBlocks'

function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      Nome: "Criar capacitação",
      Situação: 0,
    },
    {
      id: 2,
      Nome: "Estudar para design",
      Situação: 0,
    },
    {
      id: 3,
      Nome: "Estudar para frontend",
      Situação: 0,
    },
  ])

  return (
    <div>
      <div>
        <ToDoBlocks todos={todos}/>
      </div>
    </div>
  )
}

export default App
