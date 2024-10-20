import { useState } from 'react';

export const RandomComponent = () => {
  const [value, setValue] = useState(0);

  const increaseValue = () => setValue(value + 1);
  const decreaseValue = () => setValue(value > 0 ? value - 1 : 0); // Evita valores negativos
  const resetValue = () => setValue(0);

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h2>Random Component</h2>
      <p>Valor actual: {value}</p>
      <button onClick={increaseValue} style={{ marginRight: '10px' }}>Incrementar</button>
      <button onClick={decreaseValue} style={{ marginRight: '10px' }}>Disminuir</button>
      <button onClick={resetValue}>Resetear</button>
    </div>
  );
};
