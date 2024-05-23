import { createSlice, nanoid } from '@reduxjs/toolkit';

// Function to load todos from localStorage
const loadTodosFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('todos');
        return serializedState ? JSON.parse(serializedState) : [];
    } catch (e) {
        console.error("Could not load todos from localStorage", e);
        return [];
    }
};

// Function to save todos to localStorage
const saveTodosToLocalStorage = (todos) => {
    try {
        const serializedState = JSON.stringify(todos);
        localStorage.setItem('todos', serializedState);
    } catch (e) {
        console.error("Could not save todos to localStorage", e);
    }
};

// Initial state loading todos from localStorage
const initialState = {
    todos: loadTodosFromLocalStorage(),
};

// Create a slice with addTodo, removeTodo, and updateTodo reducers
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        // Reducer to add a new todo
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            };
            state.todos.push(todo);
            saveTodosToLocalStorage(state.todos);
        },
        // Reducer to remove a todo by id
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
            saveTodosToLocalStorage(state.todos);
        },
        // Reducer to update a todo by id
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            const todo = state.todos.find(todo => todo.id === id);
            if (todo) {
                todo.text = text;
                saveTodosToLocalStorage(state.todos);
            }
        }
    }
});

// Export the actions for use in components
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

// Export the reducer as the default export
export default todoSlice.reducer;
