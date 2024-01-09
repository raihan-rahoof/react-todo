import React from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';




function Form({setInputText,setTodos,todos,inputText,setStatus}) {

  const inputTextHandler = (e)=>{
    setInputText(e.target.value)
    
  }

  const formSubmitHandler = (e)=>{
    e.preventDefault()
    const checkIt = todos.some((todo)=> todo.text === inputText)

    if(inputText.trim()== ''){
      
        Swal.fire({
          title: 'Empty Task!',
          text: 'Please enter a task before adding.',
          icon: 'info',
        });
    

      }else if(checkIt){
      Swal.fire({
        title: "Wait!",
        text: "This Task Already Exists.",
        imageUrl: "https://media.giphy.com/media/8TweEdaxxfuElKkRxz/giphy-downsized-large.gif",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image"
      });
    }else{
      
      setTodos([...todos , {text:inputText,status:false,id:Math.floor(Math.random()*1000)}])
      setInputText('')
    }

   
  }

  const statusHandler = (e)=>{
    setStatus(e.target.value)
    
  }

  

  return (
      <form>
      <input onChange={inputTextHandler} type="text" value={inputText} className="todo-input" />
      <button onClick={formSubmitHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    
  )
}

export default Form