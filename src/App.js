import React,{useState,useEffect} from 'react';
import './App.css';
// importing components
import Form from './components/Form';
import Todo from './components/Todo';


function App() {
  const [inputText , setInputText] = useState('')
  const [todos , setTodos] = useState([])
  const [status , setStatus]=useState('all')
  const [filterTodos , SetFilterTodos] = useState([])

  useEffect(()=>{
    getLocalTodos()
  },[])


  useEffect(()=>{
    
    saveLocalTodos()
    filterHandler()
    
  },[todos,status])

  const filterHandler = ()=>{
    switch (status) {
      case 'completed':
          SetFilterTodos(todos.filter(todo => todo.status === true))
        break;
      case 'uncompleted':
          SetFilterTodos(todos.filter(todo => todo.status === false))
      break;
    
      default:
        SetFilterTodos(todos)
        break;
    }
  }

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  };

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
     <header>
      <h1>Todo List</h1>
    </header>
    <Form setStatus={setStatus} todos={todos} inputText={inputText} setTodos={setTodos} setInputText={setInputText}/>
    <Todo filterTodos={filterTodos} todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
