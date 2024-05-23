import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/todoSlice'

const AddTodo = () => {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()

        if (input.trim() === '') {
            alert('Todo cannot be empty');
            return;
        }

        dispatch(addTodo(input))
        setInput('')
    }
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-5 mt-5">
                    <h1 className='text-center'><b>To-Do</b></h1><hr />
                    <figure class="text-center">
                        <blockquote class="blockquote">
                            <p class="mb-0">The only way to do great work is to love what you do.</p>
                        </blockquote>
                        <figcaption className="blockquote-footer text-dark">
                             <cite title="Source Title" className='text-dark'>Steve Jobs</cite>
                        </figcaption>
                    </figure>
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
