function padTime(time) {
  return time.toString().padStart(2, "0");
}

// eslint-disable-next-line react/prop-types
export default function Timer({ timeLeft }) {
  const time = { timeLeft }.timeLeft;
  const minutes = padTime(Math.floor(time / 60));
  const seconds = padTime(time - minutes * 60);
  return (
    <div className="timer">
      <span>{minutes}</span>
      <span>:</span>
      <span>{seconds}</span>
    </div>
  );
}
