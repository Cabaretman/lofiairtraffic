
import React, { useState, useEffect, useRef } from 'react';
import { Howl } from 'howler';
import Controls from './Controls';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [atcVolume, setAtcVolume] = useState(0.5);
  const [lofiVolume, setLofiVolume] = useState(0.5);

  const atcAudio = useRef(null);
  const lofiAudio = useRef(null);

  useEffect(() => {
    atcAudio.current = new Howl({
      src: ['https://s1-bos.liveatc.net/rjtt_app_dep?nocache=2024062006395993620'],
      volume: atcVolume,
      html5: true,
    });

    lofiAudio.current = new Howl({
      src: ['https://stream-160.zeno.fm/0r0xa792kwzuv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiIwcjB4YTc5Mmt3enV2IiwiaG9zdCI6InN0cmVhbS0xNjAuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6Ik1jc2tXQkpUUmxhYzc5RGJwU3JKLXciLCJpYXQiOjE3MTg5NTExMzQsImV4cCI6MTcxODk1MTE5NH0.GRzbDchrUwSN_bvGP8VkzPEclXQPvnrOu9igeo35Bk4'],
      volume: lofiVolume,
      html5: true,
    });

    return () => {
      atcAudio.current.unload();
      lofiAudio.current.unload();
    };
  }, []);

  useEffect(() => {
    if (atcAudio.current) {
      atcAudio.current.volume(atcVolume);
    }
  }, [atcVolume]);

  useEffect(() => {
    if (lofiAudio.current) {
      lofiAudio.current.volume(lofiVolume);
    }
  }, [lofiVolume]);

  const togglePlay = () => {
    if (isPlaying) {
      atcAudio.current.pause();
      lofiAudio.current.pause();
    } else {
      atcAudio.current.play();
      lofiAudio.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <Controls
        isPlaying={isPlaying}
        togglePlay={togglePlay}
        atcVolume={atcVolume}
        setAtcVolume={setAtcVolume}
        lofiVolume={lofiVolume}
        setLofiVolume={setLofiVolume}
      />
    </div>
  );
};

export default AudioPlayer;
