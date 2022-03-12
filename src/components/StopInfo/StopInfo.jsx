import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

export default function StopInfo() {
  const newStop = useSelector((store) => store.newStop);

  const dispatch = useDispatch();

  return (
    <>
      <h1> Departures</h1>
      {newStop.map((bus, i) => {
        return (<p>Route Name: {bus.route_short_name} <br/>
        Direction: {bus.direction_text} <br/>
        Departing at: {bus.departure_text}</p>);
      })}
    </>
  );
}
