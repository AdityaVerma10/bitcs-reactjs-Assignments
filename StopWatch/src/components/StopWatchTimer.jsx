import React from "react";
import getFormattedTime from "../util/getFormatedTime";

function StopWatchTimer({ timer }) {
  return (
    <div>
      <div className="timer">{getFormattedTime(timer)}</div>
    </div>
  );
}

export default StopWatchTimer;
