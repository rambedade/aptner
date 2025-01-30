import React from 'react';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import "./CounterView.css";

const CounterView = ({ count, onIncrement, onDecrement, onReset, onToggleAuto, autoIncrement }) => {
    return (
      <div className="counter-container">
        <h1 className="title">Counter App</h1>
        <h2 className="counter-value">Counter: {count}</h2>
        <div className="buttons">
          <button onClick={onIncrement} className="btn blue">+</button>
          <button onClick={onDecrement} className="btn blue">-</button>
          <button onClick={onReset} className="btn reset">RESET</button>
        </div>
        <div className="toggle">
          <FormControlLabel
            control={<Switch checked={autoIncrement} onChange={onToggleAuto} />}
            label={<span style={{ color: 'black' }}>Auto Increment</span>}
          />
        </div>
      </div>
    );
};

export default CounterView;