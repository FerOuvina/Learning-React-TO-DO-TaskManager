import React, { useState } from "react";
import TaskInput from "./TaskInput";
import Task from "./Task";
import "../stylesheets/TaskList.css"

function TaskList() {
  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    if (task.text.trim()) {
      task.text = task.text.trim();
      const updatedTasks = [task, ...tasks];
      setTasks(updatedTasks);
    };
  };

  const deleteTask = id => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  const finishTask = id => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        task.isFinished = !task.isFinished;
      };
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <>
      <TaskInput onSubmit={addTask} />
      <div className="taskList__container">
        {
          tasks.map((task) => (
            <Task 
              key={task.id}
              id={task.id}
              text={task.text}
              isFinished={task.isFinished}
              finishTask={finishTask}
              deleteTask={deleteTask}
            />
          ))
        }
      </div>
    </>
  );
};

export default TaskList;