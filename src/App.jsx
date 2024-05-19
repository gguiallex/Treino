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
      <div className='top'>
        <div className='title'><p>ToDo list</p></div>
        <div className='cab'>
          <div className='input'>
            <form className='form'>
              <input type='text' placeholder='Ex: lavar o banheiro'/>
              <button id='botaoInput' >Adicionar tarefa</button>
            </form>
          </div>
        </div>
      </div>
      <div className='bottom'>
        <div className='todo-contents'>
          <ToDoBlocks todos={todos}/>
        </div>
      </div>
    </div>
  )
}

export default App
