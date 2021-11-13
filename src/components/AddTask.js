import React, { useState } from 'react';
import Button from './Button';
import './AddTask.css';

const AddTask = ({ handleTaskAddition }) => {
   const [inputData, setInputData] = useState("");

   //handle = lidar, convenção do react colocar handle em funções passadas para onChange
   const handleInputChange = (ev) => {
      //pega o que foi digitado
      setInputData(ev.target.value);
   };

   const handlePressEnter = (ev) => {
      if(ev.keyCode === 13){
         handleAddTaskClick();
      }
      
   }

   const handleAddTaskClick = () => {
      handleTaskAddition(inputData);
      setInputData("");
   };

   return ( 
      <div className="add-task-container">
         <input 
         onChange={handleInputChange}
         onKeyUp={handlePressEnter} 
         value={inputData}  
         className="add-task-input"  
         type="text" />
         <div className="add-task-button-container">
            <Button onClick={handleAddTaskClick}>Adicionar</Button>
         </div>
      </div>
    );
}
 
export default AddTask;