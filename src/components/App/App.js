import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from 'react-redux';

import StopInfo from '../StopInfo/StopInfo.jsx';

function App() {
  const [stop, setStop] = useState("");

  const dispatch = useDispatch();

  const sendStop = () => {
    console.log(stop);
    dispatch({ type: "FETCH_STOP_INFO", payload:stop });
  };

  const sendText = () => {
    console.log('Inside sendText');
    dispatch({type:"TEXT_ME"});
  }

  return (
    <div className="App">
      <h1>Select a line!</h1>
      <h2>Stop Number: {stop}</h2>
      <button onClick={(event) => setStop(event.target.value)} value="113">
        Bryant Ave S and 33rd St W. Stop 113
      </button>
      <br />
      <button onClick={(event) => setStop(event.target.value)} value="1087">
        Penn Ave S and 58th St W. Stop 1087
      </button>
      <br />
      <button onClick={sendStop}> Get Next Bus Information</button>
      <button onClick={sendText}>SEND TEST TEXT</button>
      <StopInfo /> 
    </div>
  );
}

export default App;
