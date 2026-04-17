"use client"

import React from 'react'
import { useState, useEffect } from 'react'
import TodoList from './TodoList'
import NewTodo from './NewTodo'
export default function TodoApp() {
    const [todos, setTodos] = useState([ ])
     useEffect(() => {
const data =localStorage.getItem("todos")
if(data){
    setTodos(JSON.parse(data))

}
    }, []);
useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))
    return () => {
        
    };
}, [todos]);
 const addtodo = (name) => {
        const todo = { id: Date.now(), name, done: false }
        setTodos([todo, ...todos]);
    }

    
    const deletetodo = (id) => {
        const newTodos = todos.filter(elem => elem.id !== id)
        setTodos(newTodos)
    }

    const doneTodo = (id) => {
        const newTodos = todos.map(elem => {
            if (elem.id === id) {
                elem.done = !elem.done
            } return elem
        })
        setTodos(newTodos)
    }
   
   



    return (
        <div>
            <NewTodo addtodo={addtodo} />
            {todos.length !== 0 && <TodoList todos={todos} doneTodo={doneTodo} deletetodo={deletetodo} />}

        </div>
    )
}
