import React from 'react'
const Todo = ({ todo, quantity, index, deleteTodo }) => {
    return (
        <>
            <div className='list'>
                <h3>{quantity} - {todo}</h3> <button className='btn btn-danger mx-2' onClick={() => deleteTodo(index)}>x</button>
            </div>
        </>
    )
}
export default Todo