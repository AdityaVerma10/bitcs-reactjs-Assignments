import React from "react";

function ResetBtn({ startDisabled, setStartDisabled, handleReset }) {
  return (
    <button
      className="reset"
      disabled={startDisabled}
      onClick={() => {
        setStartDisabled(false);
        handleReset();
      }}
    >
      Reset
    </button>
  );
}

export default ResetBtn;
