import React from 'react'

const ToDoBlocks = ({todos, setTodos}) => {
  return (
    <div className='todos'>
        <div className='todo-block'>
        <div className='title_block'>TO DO</div>
        <div className='gridToDos'>
            {todos.map((todo) =>(
            <div className='tarefa'>
                <p>{todo.Nome}</p>
                <button></button>
            </div>
            ))}
        </div>
        </div>
        <div className='todo-block'>
        <div className='title_block'>DOING</div>
        <div className='gridToDos'>
            {todos.map((todo) =>(
            <div className='tarefa'>
                <p>{todo.Nome}</p>
                <button></button>
            </div>
            ))}
        </div>
        </div>
        <div className='todo-block'>
        <div className='title_block'>DONE</div>
        <div className='gridToDos'>
            {todos.map((todo) =>(
            <div className='tarefa'>
                <p>{todo.Nome}</p>
                <button></button>
            </div>
            ))}
        </div>
        </div>
    </div>
  )
}

export default ToDoBlocks