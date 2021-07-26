//Primeira coisa a fazer em todos os componentes React
import React, { useState } from 'react';

import {v4 as uuidv4} from 'uuid';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import './App.css';

const App = () => {
  //para mudar a mensagem, precisa ser um state
  //a task está aqui pq o componente AddTask precisa acessá-la
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar Programação',
      completed: false,
    },
    {
      id: '2',
      title: 'Ler Livros',
      completed: true,
    },
  ]);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if(task.id === taskId) return {...task, completed: !task.completed}

      return task;
    });

    setTasks(newTasks);
  }

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks, 
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      }
    ];

    setTasks(newTasks);
  };


  //classe no react é 'className'
  //só pode retornar apenas um elemento, senão da erro
  //<></> <- esta tag é chamada de fragments e funciona
  return (
    <>
      <div className="container">
        <AddTask handleTaskAddition = {handleTaskAddition}/>
        <Tasks tasks={tasks} handleTaskClick={handleTaskClick} />
      </div>
      
    </>
    
  )
}

export default App;//pq o index.js importa o App, aí a gente precisa exportar
