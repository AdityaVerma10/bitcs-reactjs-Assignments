import React from "react";
import getFormattedTime from "../util/getFormatedTime";
function Laps({ laps }) {
  if (laps.length === 0)
    return <div className="laps-container">No laps Recorded !</div>;
  return (
    <div className="laps-container">
      <h4>Laps here !</h4>

      {laps.map((lap, index) => (
        <div key={index}>{getFormattedTime(lap)}</div>
      ))}
    </div>
  );
}

export default Laps;
