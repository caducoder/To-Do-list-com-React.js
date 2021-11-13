//Primeira coisa a fazer em todos os componentes React
import React, { useEffect, useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import TaskDetails from './components/TaskDetails';
import './App.css';
import axios from 'axios';

const App = () => {
  //para mudar a mensagem, precisa ser um state
  //a task está aqui pq o componente AddTask precisa acessá-la
  const [tasks, setTasks] = useState([]);

  //requisitando tarefas de uma API Fake para adicionar tasks na primeira vez que renderizar o componente.
  useEffect(() => {
    // const fetchTasks = async () => {
    //   const { data } = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=4');
    //   setTasks(data);
    // };

    // fetchTasks();
  }, []);//executa somente na primeira vez pq os colchetes estão vazios.

  //função para lidar com o clique na task, alternando entre true e false (borda esquerda verde)
  const handleTaskClick = (taskId) => {
    //verificando em qual task o usuário clicou, por meio do id, e mudando o 'completed'
    const newTasks = tasks.map(task => {
      if(task.id === taskId) return {...task, completed: !task.completed}

      return task;
    });

    //atualizando lista
    setTasks(newTasks);
  }

  //função que adiciona uma nova tarefa na lista
  const handleTaskAddition = (taskTitle) => {
    //verificando se o input não está vazio
    if(taskTitle !== ""){
      const newTasks = [
        ...tasks, 
        {
          title: taskTitle,
          id: uuidv4(),
          completed: false,
        }
      ];

      //atualizando lista
      setTasks(newTasks);
    } 
  };

  //função que deleta tarefa
  const handleTaskDelete = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId);

    //atualizando lista
    setTasks(newTasks);
  }


  //classe no react é 'className'
  //só pode retornar apenas um elemento, senão da erro
  //<></> <- esta tag é chamada de fragments e funciona
  return (
    <Router>
      <div className="container">
        <Header />
        <Route 
          path="/" //rota da página inicial
          exact //para a rota ser exatamente igual ao path
          render={() => (
            <>
              <AddTask handleTaskAddition = {handleTaskAddition}/>
              <Tasks 
                tasks={tasks} 
                handleTaskClick={handleTaskClick} 
                handleTaskDelete={handleTaskDelete} 
              />
            </>
          )}
        />

        {/* Rota para os detalhes da tarefa */}
        <Route path="/:taskTitle" exact component={TaskDetails} />
      </div>
    </Router>
  )
}

export default App;//pq o index.js importa o App, aí a gente precisa exportar
