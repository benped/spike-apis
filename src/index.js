import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App.js";
import { createStore, combineReducers, applyMiddleware } from "redux";
// Provider allows us to use redux within our react app
import { Provider } from "react-redux";
import logger from "redux-logger";
// Import saga middleware
import createSagaMiddleware from "redux-saga";
import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery('FETCH_STOP_INFO', fetchStop);
  yield textMe('TEXT_ME',textMe)
}

function* fetchStop(action) {
  // get all movies from the DB
  try {
      console.log("stop is:", action.payload);
    const stopData = yield axios.get(`https://svc.metrotransit.org/nextripv2/${action.payload}`);
    yield put({type:'SET_STOP', payload:stopData.data.departures})
   console.log(stopData.data.departures);
   
  } catch {
    console.log("get stop error");
  }
}

function* textMe(){
    try {
        yield axios.post('/api/stops');
    } catch {
        console.log('textMe failed');
        
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

const newStop = (state = [], action) => {
  switch (action.type) {
    case "SET_STOP":
      return action.payload;
    default:
      return state;
  }
};

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
   newStop
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger)
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
