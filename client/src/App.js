import React, { useState } from "react";
import './style.css';
import axios from 'axios';

const Console = () => {
  const [output, setOutput] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const input = e.target.elements.input.value;
    try {
      const res = await axios.post('./api/sendCmd', { "data": { "input": input, "player" : "63d5bab3fd98beb213391fe6"} });
      setOutput([res.data.message, ...output]);
    } catch (err) {
      setOutput([err.toString(), ...output]);
    }
  };

  return (
    <div className="console-container">
      <form onSubmit={handleSubmit}>
        <div className="console-output-container">
          <div className="console-output">
            {output.map((line, index) => (
              <p key={index}>{line}</p>
            ))}            
          </div>
        </div>
        <div className="input-container">
          <input className="console-input" name="input" type="text" placeholder="Enter a command" />
          <button className="console-submit">Submit</button>
        </div>

      </form>
    </div>
  );
};

export default Console;
