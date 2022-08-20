import React, { useState } from 'react'
import Todo from './Todo'

const Form = () => {
    const [todo, setTodo] = useState({})
    const [quantity, setQuantity] = useState({})
    const [todos, setTodos] = useState([
        { todo: 'Manzanas', quantity: '5' },
        { todo: 'Gaseosas', quantity: '6'  },
        { todo: 'Detergente', quantity: '4'  }
    ])
    const handleChange = e => setTodo({ [e.target.name]: e.target.value })
    const handleChangeQ = e => setQuantity({ [e.target.name]: e.target.value })
    const handleClick = e => {
        if (Object.keys(todo).length === 0 || todo.todo.trim() === '') {
            alert('el campo no puede estar vacio')
            return
        }
        if (Object.keys(quantity).length === 0 || quantity.quantity.trim() === '') {
            alert('el campo no puede estar vacio')
            return
        }
        setTodos([...todos, {todo: todo.todo, quantity: quantity.quantity}])
    }
    const deleteTodo = indice => {
        const newTodos = [...todos]
        newTodos.splice(indice, 1)
        setTodos(newTodos)
    }
    return (
        <>
            <form onSubmit={e => e.preventDefault()}>
                <label>Agregar producto</label><br />
                <div className='form-group py-2'>
                    <label>Nombre: </label><br />
                    <input type="text" name="todo" className='form-control' onChange={handleChange}></input>
                </div>
                <div className='form-group py-2'>
                    <label>Cantidad: </label><br />
                    <input type="number" min='0' name="quantity" className='form-control' onChange={handleChangeQ}></input>
                </div>
                <button className='btn btn-primary mt-2' onClick={handleClick}>Agregar</button>
            </form>
            {
                todos.map((value, index) => (<Todo todo={value.todo} quantity={value.quantity} key={index} index={index} deleteTodo={deleteTodo}></Todo>))
            }
        </>
    )
}
export default Form