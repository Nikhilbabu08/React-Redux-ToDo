import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

const EditTodoModal = ({ show, handleClose, todo, saveChanges }) => {
    const [text, setText] = useState('');

    useEffect(() => {
        if (todo) {
            setText(todo.text);
        }
    }, [todo]);

    const handleSave = () => {
        saveChanges(todo.id, text);
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Edit Todo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <input
                    type="text"
                    className="form-control"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSave}>
                    Save changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default EditTodoModal;
