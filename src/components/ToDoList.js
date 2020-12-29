import React, { useState, useEffect }from 'react';
import AddNewToDo from './AddNewToDo';

const ToDoList = () => {
    const [ todos, setTodos ] = useState([
        { text: 'Exercise', id: 1},
        { text: 'Water Plants', id: 2},
        { text: 'Code', id:3}
    ]);

    const [count, setCount] = useState(0);

    const addTodo = (text) => {
        setTodos([
            ...todos,
            { text, id: Math.random()}
        ]);
    };

    useEffect(() => {
        console.log('use effect', todos)
    }, [todos])

    useEffect(() => {
        console.log('use effect', count)
    }, [count])

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
            <button onClick={(e) => setCount(count+1) }>Increase: {count}</button>
        </div>
    )
}

export default ToDoList;