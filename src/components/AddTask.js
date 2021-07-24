import React from 'react';
import Button from './Button';
import './AddTask.css'

const AddTask = () => {
   const [inputData, setInputData] = useState('');

   //handle = lidar, convenção do react colocar handle em funções passadas para onChange
   const handleInputChange = (event) => {
      console.log(event)
   }

   return ( 
      <div className="add-task-container">
         <input onChange={handleInputChange} className="add-task-input" type="text" />
         <div className="add-task-button-container">
            <Button>Adicionar</Button>
         </div>
      </div>
    );
}
 
export default AddTask;