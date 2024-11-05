import React from 'react'
import tick from "../assets/check.png"
import not_tick from "../assets/emptyCheck.png"
import delete_icon from "../assets/delete.png"

const Todoitems = ({text,id,isComplete,deleteTodo}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
<div className='flex flex-1 items-center cursor-pointer
'>
  <img className='w-7'       src={tick} alt="" />
  <p className='text-slate-700 ml-4 text-[17px]'>{text}</p>
</div>
<img  onClick={()=>{deleteTodo(id)}}  className='w-3.5 cursor-pointer'   src= {delete_icon} alt="" />

      
    </div>
  )
}

export default Todoitems