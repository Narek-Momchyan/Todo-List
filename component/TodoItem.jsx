import React from 'react'

export default function Todoitem({todo,doneTodo,deletetodo}) {
  return (
    <div className= {`border-2 mb-6 p-2 flex justify-between items-center rounded-[6] shadow-2xl ${todo.done?" bg-emerald-400":""}` }>
      
        <div className=' flex gap-2 items-center'>
            <input type="checkbox" checked={todo.done} className=' w-4 cursor-pointer' onChange={()=>doneTodo(todo.id)} />
            <p className=' font-[Ubuntu] font-medium text-[20px]'>{todo.name}</p>
        </div>
        <div className=' text-red-600 text-3xl font-bold cursor-pointer' onClick={()=>deletetodo(todo.id )}>
            &times;
        </div>
    </div>
  )
}
