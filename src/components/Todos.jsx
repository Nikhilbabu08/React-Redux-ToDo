import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../redux/todoSlice'

const Todos = () => {

    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()

    return (
        <div className="container mt-2">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    {todos.map((todo) => (
                        <ul className="list-group list-group-flush" key={todo.id}>
                            <li className="list-group-item">{todo.text}<button className='btn btn-outline-danger btn-sm' onClick={()=> dispatch(removeTodo(todo.id))}><b>X</b></button></li>
                        </ul>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Todos
