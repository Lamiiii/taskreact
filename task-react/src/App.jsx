
import { Counter } from './Components/Counter';
import { Increase } from './Components/Increase';
import { Decrease } from './Components/Decrease';
import { Timer } from './Components/Timer/Timer';
import { Button } from './Components/Timer/TimerButton';

import './App.css';
import { useState } from 'react';

function App() {
  const [state, setState] = useState(0);
  const [timerState, setTimer] = useState(60);
  const [isTimerRunning, setIsTimerRunning] = useState(false); 

  const increaseCounter = () => {
    setState((prev) => prev + 1);
  };

  const decreaseCounter = () => {
    setState((prev) => prev - 1);
  };

  const useButton = () => {
    if (isTimerRunning) ; 

    setIsTimerRunning(true); 
    let interval = timerState; 
    const intervals = setInterval(() => {
      if (interval > 0) {
      setTimer((prev) => prev - 1);
      interval--;
      }else {
      clearInterval(intervals);
      setIsTimerRunning(false); 
      }
    }, 1000); 
  };

  return (
    <div className='App'>
      <Counter name={"Counter"} counter={state} />
      <Increase click={increaseCounter} text={"Increase button"} />
      <Decrease click={decreaseCounter} text={"Decrease button"} />

      {/* Timer start */}
      <Timer text={"Timer"} TimerValue={timerState} />
      <Button text={"Click me to start Timer"} click={useButton} />

      {/* Timer end */}
    </div>
  );
}

export default App;

