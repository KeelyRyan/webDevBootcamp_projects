import React from "react";
import { useState } from "react";

function App() {
  setInterval(updateTime, 1000);
  const HH_MM_SS = { hour: "2-digit", minute: "2-digit", second: "2-digit" };
  const now = new Date().toLocaleTimeString("en-UK", HH_MM_SS);

  const [time, setTime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString("en-UK", HH_MM_SS);
    setTime(newTime);
  }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;

