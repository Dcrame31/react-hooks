import React, { useState }from 'react';
import AddNewToDo from './AddNewToDo';

const ToDoList = () => {
    const [ todos, setTodos ] = useState([
        { text: 'Exercise', id: 1},
        { text: 'Water Plants', id: 2},
        { text: 'Code', id:3}
    ]);

    const addTodo = (text) => {
        setTodos([
            ...todos,
            { text, id: Math.random()}
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
           <AddNewToDo addTodo={addTodo}/>
        </div>
    )
}

export default ToDoList;