import React, { useEffect, useRef, useState } from 'react';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import backgroundMusic from '../assets/background.mp3';

const BackgroundAudio = () => {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    // Auto-play background sound
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch((e) => {
        console.log("Auto-play blocked by browser, waiting for user interaction.");
      });
    }
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div style={{ position: 'fixed', top: 20, right: 20, zIndex: 1000 }}>
      <audio ref={audioRef} loop autoPlay>
        <source src={backgroundMusic} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <button className='text-white' onClick={toggleMute}>
        {isMuted ? <FaVolumeMute size={24} /> : <FaVolumeUp size={24} />}
      </button>
    </div>
  );
};

export default BackgroundAudio;
