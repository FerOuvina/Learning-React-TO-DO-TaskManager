import React, { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import {v4 as uuidv4} from 'uuid';
import "../stylesheets/TaskInput.css";

function TaskInput(props) {
  const [userInput, setInput] = useState('');

  const handleUserInput = event => {
    setInput(event.target.value);
  };

  const HandleSubmit = event => {
    event.preventDefault();
    const newTask = {
      id: uuidv4(),
      text: userInput,
      isFinished: false
    };
    props.onSubmit(newTask);
  };
  
  return (
    <form className="taskForm__container" onSubmit={HandleSubmit}>
      <input type="text" className="taskForm__container--input" placeholder="New Task..." name="text" onChange={handleUserInput} />
      <button className="taskForm__container--btn"><AiOutlineCheck /></button>
    </form>
  );
};

export default TaskInput;