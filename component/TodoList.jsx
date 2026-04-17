import React from 'react'
import Todoitem from './TodoItem'
 
export default function TodoList({ todos ,doneTodo,deletetodo}) {
    return (
        <div className=' w-[500] bg-white mx-auto p-[20] rounded-2xl shadow-2xl'>
            {
                todos.map(todo => (
                    <Todoitem key={todo.id} todo={todo}  doneTodo={doneTodo} deletetodo={deletetodo}/>
                ))
            }
        </div>
    )
}
