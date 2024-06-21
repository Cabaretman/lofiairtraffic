// src/components/VolumeControl.js
import React from 'react';

const VolumeControl = ({ label, volume, setVolume }) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input
        type="range"
        id={label}
        min="0"
        max="1"
        step="0.1"
        value={volume}
        onChange={(e) => setVolume(parseFloat(e.target.value))}
      />
    </div>
  );
};

export default VolumeControl;
