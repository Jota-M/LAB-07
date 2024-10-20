import { useState } from "react";

export const Button = (props) => {
  const { text } = props;
  const [count, setCount] = useState(0);
  const [randomValue, setRandomValue] = useState(null); 

  function handlerButton() {
    const randomNumber = Math.floor(Math.random() * 100) + 1; 
    alert(`Valor aleatorio: ${randomNumber}`);
    setRandomValue(randomNumber); 
  }

  return (
    <button onClick={handlerButton}>
      {text} {randomValue} 
    </button>
  );
};
