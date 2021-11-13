import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Button from './Button';
import './TaskDetails.css'

const TaskDetails = () => {
   //useParams(): retorna os parâmetros que estão sendo utilizados na URL
   const params = useParams();
   const history = useHistory();

   //função para voltar quando usuário clicar no botão voltar
   const handleBackButtonClick = () => {
      history.goBack();
   }
   console.log("parametros: ", params)

   return ( 
      <>
         <div className="back-button-container">
            <Button onClick={handleBackButtonClick}>Voltar</Button>
         </div>
         <div className="task-details-container">
            <h2>{params.taskTitle}</h2>
            <p>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
               Accusantium beatae aliquam nulla non voluptate deleniti reprehenderit expedita quia omnis cumque. Consequuntur inventore qui dolor quae harum! Qui odit voluptatem enim.
            </p>
         </div>
      </>
    );
}
 
export default TaskDetails;