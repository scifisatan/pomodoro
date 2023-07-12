import { useRef } from "react";

export default function Buttons(props) {
  let intervalRef = useRef(null);

  // eslint-disable-next-line react/prop-types
  const { setTitle, setTimeLeft, isRunning, setIsRunning } = props;

  function startTimer() {
    setIsRunning(true);
    setTitle("You are doing great!");
    intervalRef.current = setInterval(() => {
      setTimeLeft((timeLeft) => {
        if (timeLeft >= 1) return timeLeft - 1;
        resetTimer();
        return 0;
      });
    }, 1000);
  }

  function stopTimer() {
    setIsRunning(false);
    if (intervalRef.current === null) return;
    clearInterval(intervalRef.current);
    setTitle("Keep it up!");
  }

  function resetTimer() {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    setTitle("Ready to go another round?");
    setTimeLeft(25 * 60);
  }

  return (
    <div className="buttons">
      {!isRunning && <button onClick={startTimer}>Start</button>}
      {isRunning && <button onClick={stopTimer}>Stop</button>}
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}
