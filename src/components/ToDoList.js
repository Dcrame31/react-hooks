import React, { useState }from 'react';

const ToDoList = () => {
    const [ todos, setTodos ] = useState([
        { text: 'Exercise', id: 1},
        { text: 'Water Plants', id: 2},
        { text: 'Code', id:3}
    ]);

    const addTodo = () => {
        setTodos([
            ...todos,
            { text: 'Fold laundry', id: 4}
        ]);
    };

    return (
        <div>
            <ul>
                {todos.map((todo) => {
                    return (
                        <li key={todo.id}>{todo.text}</li>
                    )
                })}
            </ul>
            <button onClick={addTodo}>Add a todo</button>
        </div>
    )
}

export default ToDoList;