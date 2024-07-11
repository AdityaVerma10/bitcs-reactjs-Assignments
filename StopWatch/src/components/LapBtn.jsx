import React from "react";

function LapBtn({ startDisabled, handleLap }) {
  return (
    <button className="lap" disabled={!startDisabled} onClick={handleLap}>
      Lap
    </button>
  );
}

export default LapBtn;
