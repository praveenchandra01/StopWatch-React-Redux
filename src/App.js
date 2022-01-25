import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { resume, start, stop } from "./Redux/actions/actions.js";

function App() {

  const [time, setTime] = useState(0);
  const timerOn = useSelector((state) => state.timerOn);
  const dispatch = useDispatch();
  const [laps, setLaps] = useState([]);

  const changetime = (time) => {
    const min = ("0" + (Math.floor(time / 60000) % 60)).slice(-2);
    const sec = ("0" + (Math.floor(time / 1000) % 60)).slice(-2);
    const ms = ("0" + (Math.floor(time / 10) % 100)).slice(-2);
    return `${min}:${sec}:${ms}`;
  };

  const handleLap = async () => {
    const laptime = changetime(time);
    await setLaps((prevLap) => prevLap.concat(laptime));
    console.log(laps);
  };

  useEffect(() => {
    let interval = null;
    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <div className="App">
      <h1 className="heading">Stop Watch</h1>
      <div className="stopWatch">
        <div className="timer">
          <span>{("0" + (Math.floor(time / 60000) % 60)).slice(-2)}</span>
          <span>{("0" + (Math.floor(time / 1000) % 60)).slice(-2)}</span>
          <span>{("0" + (Math.floor(time / 10) % 100)).slice(-2)}</span>
        </div>

        {!timerOn && time === 0 && (<button onClick={() => dispatch(start(true))}>Start</button>)}

        {timerOn && <button onClick={() => dispatch(stop(false))}>Stop</button>}

        {!timerOn && time !== 0 && (<button onClick={() => { dispatch(resume(true)) }}>Resume</button>)}

        {!timerOn && time > 0 && (<button onClick={() => { setTime(0); setLaps([]); }}>Reset</button>)}

        {timerOn && <button onClick={handleLap}>Lap</button>}
        <ul className="laps">
          {laps.map((lap) => (
            <li>LapTime - {lap}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
