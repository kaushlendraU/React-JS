import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, updateTodo } from '../features/todo/todoSlice';

function AddTodo() {
    const [input, setInput] = useState('');
    const isTodoEditable = useSelector(state => state.todos.some(todo => todo.isEditable));
    const todos = useSelector(state => state.todos);
    const selectedTodoText = useSelector(state => state.todos.find(todo => todo.isEditable))?.text;

    const dispatch = useDispatch();

    useEffect(() => {
        // Set input value when the selected todo changes
        setInput(selectedTodoText || '');
    }, [selectedTodoText]);


    const addTodoHandler = (e) => {
        e.preventDefault();
        // Check if the input is not empty
        if (input !== '') {
            dispatch(addTodo(input));
            setInput('');
        }
    }

    const updateTodoHandler = (e) => {
        e.preventDefault();
        const editableTodo = todos.find(todo => todo.isEditable);
        const currTodoText = selectedTodoText;
        if (editableTodo && currTodoText && input !== '') {
            dispatch(updateTodo({
                id: editableTodo.id,
                newText: input,
            }));
            setInput('');
        }
    }

    return (
        <div className='flex justify-center'>
            <form className="space-x-3 mt-12">
                <input
                    type="text"
                    className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    placeholder="Enter a Todo..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                {isTodoEditable ? (
                    <button
                        onClick={updateTodoHandler}
                        type="submit" 
                        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                    >
                        Update
                    </button>
                ) : (
                    <button
                        type="submit"
                        onClick={addTodoHandler}
                        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                    >
                        Add Todo
                    </button>
                )}
            </form>
        </div>
    )
}

export default AddTodo;
