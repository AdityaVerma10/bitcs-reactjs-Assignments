import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Timer from "./components/StopWatchTimer";
import Start from "./components/StartBtn";
import Stop from "./components/StopBtn";
import Reset from "./components/ResetBtn";
import Laps from "./components/Laps";
import Lap from "./components/LapBtn.jsx";

function App() {
  const [timer, setTimer] = useState(0);
  const [startDisabled, setStartDisabled] = useState(false);
  const [laps, setLaps] = useState([]);
  const state = useRef();
  const startTimer = () => {
    state.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 10);
  };
  const stopTimer = () => {
    clearInterval(state.current);
  };
  const resetTimer = () => {
    setTimer((prev) => 0);
    setLaps([]);
  };
  const captureLap = () => {
    setLaps((prev) => [...prev, timer]);
  };
  return (
    <>
      <div className="top-container">
        <h1>StopWatch BITCS React Assignment</h1>
        <h2>Hr : Min : Sec : Msec</h2>
      </div>

      <div className="container">
        <Timer timer={timer} />
        <div className="second-container">
          <Start
            handleStart={startTimer}
            startDisabled={startDisabled}
            setStartDisabled={setStartDisabled}
          />
          <Stop
            handleStop={stopTimer}
            startDisabled={startDisabled}
            setStartDisabled={setStartDisabled}
          />
          <Reset
            startDisabled={startDisabled}
            setStartDisabled={setStartDisabled}
            handleReset={resetTimer}
          />
          <Lap startDisabled={startDisabled} handleLap={captureLap} />
        </div>
        <Laps laps={laps} />
      </div>
    </>
  );
}

export default App;
