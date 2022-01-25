const initialState = {
    timerOn: false,
    laps: [],
  };
  
  function Timer(timer = initialState, action) {
    switch (action.type) {
      case "START":
        return {
          // ...timer,
          timerOn: action.payload,
        };
      // case "Time":
      //   return {
      //     ...timer,
      //     time: timer.time + action.payload,
      //   };
      case "STOP":
        return {
          // ...timer,
          timerOn: action.payload,
        };
  
      case "RESUME":
        return {
          // ...timer,
          timerOn: action.payload,
        };
  
      default:
        return timer;
    }
  }
  
  export default Timer;
  