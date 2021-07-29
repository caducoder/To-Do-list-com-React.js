import React from 'react';
import {CgClose, CgInfo} from 'react-icons/cg';
import {useHistory} from 'react-router-dom';

import './Task.css';

//Componente tarefa
const Task = ({task, handleTaskClick, handleTaskDelete}) => {
   const history = useHistory();

   const handleTaskDetailsClick = () => {
      history.push(`/${task.title.split("/").join("-")}`);
      /**passando o nome da task como nome da rota que
       * ficará na URL. Fiz a substituição de todos os "/"
       * por "-", pois a URL considera a barra como uma rota.
       */
   }

   return ( 
      <div 
         className="task-container" 
         style={task.completed ? {borderLeft: '6px solid chartreuse'} : {}}
      >
         <div 
            className="task-title" 
            onClick={() => handleTaskClick(task.id)}
         >
            {task.title}
         </div>
         
         <div className="buttons-container">
            <button className="see-task-details" onClick={handleTaskDetailsClick}>
               <CgInfo /> {/* ícone de detalhes da tarefa */}
            </button>
            <button className="task-delete" onClick={() => handleTaskDelete(task.id)}>
               <CgClose /> {/* ícone de deletar tarefa */}
            </button>
         </div>
      </div>
   );
}
 
export default Task;