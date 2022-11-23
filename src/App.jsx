import './App.css';
import React from 'react';
import TaskList from './components/TaskList';
import Gif from './img/gissphy.gif'

function App() {

  return (
    <div className="App">

      <div className="gif__container">
        <img src={Gif} alt="" className="gif__container--gif" />
      </div>

      <div className="App__container">
        <div className="App__container--div">
          <h1 className="App__container--title">My Tasks</h1>
        </div>
          <TaskList />
      </div>
    </div>
  );
};

export default App;
