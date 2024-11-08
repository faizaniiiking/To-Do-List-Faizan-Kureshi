import React, { useRef, useState } from 'react'
import Todo_Icon from "../assets/addTodo.png"
import Todoitems from './Todoitems'

const Todo = () => {
    const [todoList,setTodoList] = useState([])



    const inputRef = useRef()

    const add = ()=>{

      const  inputText = inputRef.current.value;
      if(inputText === ""){
        return null
      }

      const newTodo = {
        id: Date.now(),
        text: inputText,
        isComplete : false,
      }

      setTodoList((prev)=>{
      return  [...prev,newTodo]

      })
      inputRef.current.value = "";



    }

    const deleteTodo = (id)=>{
        setTodoList((prevTodos)=>{
           return prevTodos.filter((todo)=>todo.id !== id )

        })


    }



     

  return (
    <div className='bg-white place-self-center
    w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
      
      {/* title  */}

      <div className="flex items-center mt-7 gap-2">
        <img  className='w-8'    
         src= {Todo_Icon}     alt="" />
        <h1 className='text-3xl font-semibold'>To Do List</h1>
      </div>

      {/* input box  */}

      <div className='flex items-center my-7 bg-gray-200 rounded-full' >
        <input className='bg-transparent border-0 outline-none
        flex-1 h-14 pl-6 pr-2 placeholder:text-slate-slate-600'
        ref={inputRef}
        
        
        
        type="text" placeholder='Add your Task' name="" id="" />
        <button  onClick={add}  className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer'  >ADD +</button>
      </div>

      {/* Todo List  */}

      <div>

        {todoList.map((item,index)=>{
            return <Todoitems key={index}  text = {item.text} id = {item.id} 
            isComplete = {item.isComplete} deleteTodo = {deleteTodo}
            />

        })}
        
    

      </div>








    </div>
  )
}

export default Todo
