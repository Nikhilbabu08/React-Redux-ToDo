import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/todoSlice'

const AddTodo = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()

        dispatch(addTodo(input))
        setInput('')
    }
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 mt-5">
                    <h1 className='text-center'><b>To-Do</b></h1><hr/>
                    <form action="" className="d-flex">
                        <input type="text" className="form-control me-2" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Add a Todo..." />
                        <button type="submit" className="btn btn-primary" onClick={addTodoHandler}>Add</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default AddTodo
