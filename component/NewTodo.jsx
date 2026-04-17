"use client"
import { useState, } from 'react'
import React from 'react'

export default function NewTodo({ addtodo }) {
  const [input, setinput] = useState("");
  const onSubmitForm = (e) => {
    e.preventDefault();
    if (!input.trim()) return
    addtodo(input)
    setinput("")
  }

  


  return (
    <form onSubmit={onSubmitForm} className=' w-[500] mx-auto mb-5 p[8] flex gap-2 items-center '>
      <input type="text"
        value={input} placeholder='add yes todo...' className=' w-full  p-2 rounded-[6] bg-white outline-none font-[Ubuntu]'
        onChange={e => setinput(e.target.value)} />
      <input type="submit" value={'add'} className='bg-white p-2 rounded-[6] font-[Ubuntu] w-15 cursor-pointer hover:bg-slate-600  hover:text-white' />
    </form>
  )
}
