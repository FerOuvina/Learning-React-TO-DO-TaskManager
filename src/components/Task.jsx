import React from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import '../stylesheets/Task.css'

const Task = ({id, text, isFinished, finishTask, deleteTask}) => {
  return (
    <div className={isFinished ? "task__container task__container--finished" : "task__container"}>

      <div className="task__container--text" onClick={() => finishTask(id)}>
        {text}
      </div>

      <div className="task__container--icon" onClick={() => deleteTask(id)}>
        <AiFillCloseSquare className="task__container--icon" />
      </div>
    </div>
  )
};

export default Task;