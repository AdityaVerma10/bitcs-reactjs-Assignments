import React from "react";

function Laps({ laps }) {
  if (laps.length === 0)
    return <div className="laps-container">No laps Recorded !</div>;
  return (
    <div className="laps-container">
      <h4>Laps here !</h4>

      {laps.map((lap, index) => (
        <div key={index}>
          {`${lap.hr.toString().length === 2 ? lap.hr : "0" + lap.hr} : ${
            lap.min.toString().length === 2 ? lap.min : "0" + lap.min
          } : ${lap.sec.toString().length === 2 ? lap.sec : "0" + lap.sec}  : ${
            lap.mili.toString().length === 2 ? lap.mili : "0" + lap.mili
          } `}
        </div>
      ))}
    </div>
  );
}

export default Laps;
