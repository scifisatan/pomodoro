import "./App.css";
import { useState } from "react";
import Buttons from "./components/Buttons.jsx";
import Timer from "./components/Timer.jsx";

export default function App() {
  const [title, setTitle] = useState("Let the countdown begin!!!");
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);

  return (
    <div className="app">
      <h2>{title}</h2>
      <Timer timeLeft={timeLeft} />
      <Buttons
        setTitle={setTitle}
        setTimeLeft={setTimeLeft}
        isRunning={isRunning}
        setIsRunning={setIsRunning}
      />
    </div>
  );
}
