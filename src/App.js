//Primeira coisa a fazer em todos os componentes React
import React, { useState } from 'react';

import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import './App.css';

const App = () => {
  //para mudar a mensagem, precisa ser um state
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar Programação',
      completed: false
    },
    {
      id: '2',
      title: 'Ler Livros',
      completed: true
    },
    {
      id: '3',
      title: 'Ver Filmes',
      completed: true
    }
  ]);


  //classe no react é 'className'
  //só pode retornar apenas um elemento, senão da erro
  //<></> <- esta tag é chamada de fragments e funciona
  return (
    <>
      <div className="container">
        <AddTask />
        <Tasks tasks={tasks}/>
      </div>
      
    </>
    
  )
}

export default App;//pq o index.js importa o App, aí a gente precisa exportar
