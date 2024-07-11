import React from "react";

function StartBtn({ startDisabled, setStartDisabled, handleStart }) {
  return (
    <button
      className="start"
      onClick={() => {
        setStartDisabled(true);
        handleStart();
      }}
      disabled={startDisabled}
    >
      Start
    </button>
  );
}

export default StartBtn;
