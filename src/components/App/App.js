import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import StopInfo from "../StopInfo/StopInfo.jsx";

function App() {
  const [stop, setStop] = useState("");
  const [phone, setPhone] = useState();
  const newStop = useSelector((store) => store.newStop);

  const dispatch = useDispatch();

  const sendStop = () => {
    console.log(stop);
    dispatch({ type: "FETCH_STOP_INFO", payload: stop });
  };

  const sendText = () => {
    console.log("Inside sendText");
    dispatch({ type: "TEXT_ME", payload: { stop: newStop[0], phone: phone } });
    console.log("after sendText Dispatch");
  };

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
      <br />
      {newStop.length > 0 ? (<>
        <button onClick={sendText}>SEND TEST TEXT</button>
        <input type="number" value={phone} onChange={(event) => setPhone(event.target.value)}></input>
      </>
      ) : (
        <span></span>
      )}
      <StopInfo />
    </div>
  );
}

export default App;
