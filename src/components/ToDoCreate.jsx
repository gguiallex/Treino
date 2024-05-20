import React, {useState} from 'react'

const ToDoCreate = ({addToDo}) => {

    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value) return;
        addToDo(value);
        setValue("");
    }
    return (
        <div className='input'>
            <form className='form' onSubmit={handleSubmit}>
                <input value={value} onChange={(e) => setValue(e.target.value)} type='text' placeholder='Ex: lavar o banheiro' />
                <button type='submit' id='botaoInput' >Adicionar tarefa</button>
            </form>
        </div>
    )
}

export default ToDoCreate