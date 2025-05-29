import React, { useEffect, useRef, useState } from 'react';
import { FaVolumeMute, FaVolumeUp, FaPlay } from 'react-icons/fa';
import backgroundMusic from '../assets/background.mp3';

const BackgroundAudio = () => {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const startAudio = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.log("User must interact to start audio:", err);
      });
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div style={{ position: 'fixed', top: 20, right: 20, zIndex: 1000 }}>
      <audio ref={audioRef} loop>
        <source src={backgroundMusic} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {!isPlaying ? (
        <button onClick={startAudio} className="text-white">
          <FaPlay size={24} />
        </button>
      ) : (
        <button onClick={toggleMute} className="text-white">
          {isMuted ? <FaVolumeMute size={24} /> : <FaVolumeUp size={24} />}
        </button>
      )}
    </div>
  );
};

export default BackgroundAudio;
