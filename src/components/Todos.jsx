import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, updateTodo } from '../redux/todoSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import EditTodoModal from './Modal';

const Todos = () => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const [showModal, setShowModal] = useState(false);
    const [selectedTodo, setSelectedTodo] = useState(null);

    const handleShowModal = (todo) => {
        setSelectedTodo(todo);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedTodo(null);
    };

    const handleSaveChanges = (id, newText) => {
        dispatch(updateTodo({
            id,
            text: newText
        }));
        handleCloseModal();
    };

    return (
        <div className="container mt-2">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    {todos.map((todo) => (
                        <ul className="list-group list-group-flush" key={todo.id}>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                {todo.text}
                                <div className='ml-auto'>
                                    <button onClick={() => handleShowModal(todo)} className="btn btn-success btn-sm mr-1"><b> <FontAwesomeIcon icon={faEdit} /></b></button>
                                    <button className="btn btn-danger btn-sm" onClick={() => dispatch(removeTodo(todo.id))}><b>X</b></button>
                                </div>
                            </li>
                        </ul>
                    ))}
                </div>
            </div>

            {selectedTodo && (
                <EditTodoModal
                    show={showModal}
                    handleClose={handleCloseModal}
                    todo={selectedTodo}
                    saveChanges={handleSaveChanges}
                />
            )}

        </div>
    );
};

export default Todos;
