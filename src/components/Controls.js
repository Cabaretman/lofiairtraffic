import React from 'react';
import VolumeControl from './VolControl';

const Controls = ({ isPlaying, togglePlay, atcVolume, setAtcVolume, lofiVolume, setLofiVolume, currentSong, liveATCFeed }) => {
  return (
    <div>
      <button onClick={togglePlay}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <div>
      <VolumeControl
        label="ATC Volume"
        volume={atcVolume}
        setVolume={setAtcVolume}
      />
        <h2>Live ATC Feed: Tokyo Airport</h2>
      </div>
      <div>
      <VolumeControl
        label="Lo-fi Volume"
        volume={lofiVolume}
        setVolume={setLofiVolume}
      />
        <h2>Lofi Music</h2>
        <p>{currentSong}</p>
      </div>
    </div>
  );
};

export default Controls;
