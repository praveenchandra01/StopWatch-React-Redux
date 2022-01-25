export function start(timeset) {
    return {
      type: "START",
      payload: timeset,
    };
  }
  
  export function stop(timeset) {
    return {
      type: "STOP",
      payload: timeset,
    };
  }
  
  export function resume(timeset) {
    return {
      type: "RESUME",
      payload: timeset,
    };
  }
  