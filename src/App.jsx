import { useState } from 'react'
import "./App.css"

import ToDoBlocks from './components/ToDoBlocks'
import ToDoCreate from './components/ToDoCreate'

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

  const addToDo = (Nome) => {

    const newToDos = [...todos, {
      id: Math.floor(Math.random()*10000),
      Nome,
      Situação: 0
    },
  ];

  setTodos(newToDos);

  }

  return (
    <div>
      <div className='top'>
        <div className='title'><p>ToDo list</p></div>
        <div className='barra'></div>
        <div className='cab'></div>
        <ToDoCreate addToDo={addToDo}/>
      </div>
      <div className='barra2'></div>
      <div className='bottom'>
        <div className='todo-contents'>
          <ToDoBlocks todos={todos} setTodos={setTodos} />
        </div>
      </div>
      <div className='rodape'>
        <div className='logo'></div>
      </div>
    </div>
  )
}

export default App
