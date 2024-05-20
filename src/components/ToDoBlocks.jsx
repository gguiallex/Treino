import React from 'react'

const ToDoBlocks = ({todos, setTodos}) => {

    const ToDoBlock = todos.filter(todo => todo.Situação == 0);
    const DoingBlock = todos.filter(todo => todo.Situação == 1);
    const DoneBlock = todos.filter(todo => todo.Situação == 2);

    const MoveTask = (todoId, direção) => {
        const UpdatedTask = todos.map((todo) => {
            if(todo.id == todoId && direção == 'd'){
                todo.Situação++;
            }else if(todo.id == todoId && direção == 'e'){
                todo.Situação--;
            }
            return todo;
         });
         setTodos(UpdatedTask);
    }

  return (
    <div className='todos'>
        <div className='todo-block'>
        <div className='title_block'>TO DO</div>
        <div className='gridToDos'>
            {ToDoBlock.map((todo) =>(
            <div className='tarefa'>
                <p>{todo.Nome}</p>
                <button onClick={() => MoveTask(todo.id, 'd')} className='seta'>⇨</button>
            </div>
            ))}
        </div>
        </div>
        <div className='todo-block'>
        <div className='title_block'>DOING</div>
        <div className='gridToDos'>
            {DoingBlock.map((todo) =>(
            <div className='tarefa'>
                <button onClick={() => MoveTask(todo.id, 'e')} className='seta'>⇦</button>
                <p>{todo.Nome}</p>
                <button onClick={() => MoveTask(todo.id, 'd')} className='seta'>⇨</button>
            </div>
            ))}
        </div>
        </div>
        <div className='todo-block'>
        <div className='title_block'>DONE</div>
        <div className='gridToDos'>
            {DoneBlock.map((todo) =>(
            <div className='tarefa'>
                <button onClick={() => MoveTask(todo.id, 'e')} className='seta'>⇦</button>
                <p>{todo.Nome}</p>
            </div>
            ))}
        </div>
        </div>
    </div>
  )
}

export default ToDoBlocks