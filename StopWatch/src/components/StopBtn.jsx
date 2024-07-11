import React from "react";

function StopBtn({ startDisabled, setStartDisabled, handleStop }) {
  return (
    <button
      className="stop"
      onClick={() => {
        setStartDisabled(false);
        handleStop();
      }}
      disabled={!startDisabled}
    >
      Stop
    </button>
  );
}

export default StopBtn;
