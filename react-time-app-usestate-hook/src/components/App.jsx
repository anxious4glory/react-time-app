import React, { useState } from "react";

function App() {
  const [showTimeString, showTime] = useState("Time");

  const getTime = () => {
    let time = new Date().toLocaleTimeString();
    setTimeout(getTime, 1000);
    showTime(time);
  };

  return (
    <div className="container">
      <h1>{showTimeString}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
