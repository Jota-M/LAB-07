import { useState } from "react";

export const CompWithProps = (props) => {
  const { headingType: Heading, placeholderText } = props;
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div style={{ textAlign: 'center', margin: '15  px' }}>
      <input
        type="text"
        placeholder={placeholderText}
        value={inputValue}
        onChange={handleInputChange}
        style={{ padding: '10px', width: '80%', fontSize: '16px' }}
      />

      <div style={{ marginTop: '10px' }}>
        <p>Usuario: {inputValue}</p>
      </div>
    </div>
  );
};
