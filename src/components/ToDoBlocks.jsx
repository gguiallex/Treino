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
                <button className='seta'>⇨</button>
            </div>
            ))}
        </div>
        </div>
        <div className='todo-block'>
        <div className='title_block'>DOING</div>
        <div className='gridToDos'>
            {todos.map((todo) =>(
            <div className='tarefa'>
                <button className='seta'>⇦</button>
                <p>{todo.Nome}</p>
                <button className='seta'>⇨</button>
            </div>
            ))}
        </div>
        </div>
        <div className='todo-block'>
        <div className='title_block'>DONE</div>
        <div className='gridToDos'>
            {todos.map((todo) =>(
            <div className='tarefa'>
                <button className='seta'>⇦</button>
                <p>{todo.Nome}</p>
            </div>
            ))}
        </div>
        </div>
    </div>
  )
}

export default ToDoBlocks