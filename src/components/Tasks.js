import React from 'react';

import Task from './Task';

const Tasks = ({ tasks, handleTaskClick, handleTaskDelete }) => {
   return (
      <>
         {/* Mapeando as tasks e lançando um componente para cada uma */}
         {tasks.map((task) => (
            <Task 
               key={task.id} //key único para ajudar o React a diferenciar cada task
               task={task} 
               handleTaskClick={handleTaskClick} 
               handleTaskDelete={handleTaskDelete} 
            />
         ))}
      </>
   )
};

export default Tasks;