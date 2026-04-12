import React, { useRef, useState, useEffect } from "react";

const MusicPlayer = () => {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const song = {
    title: "Demo Song",
    url: "/songs/song.mp3",
  };

  // ▶️ Play / Pause
  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // ⏱️ Update progress
  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  // 📏 Get duration
  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  // 🎚️ Seek (when user drags bar)
  const handleSeek = (e) => {
    const newTime = e.target.value;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  return (
    <div className="p-5 bg-black text-white rounded-xl w-80">
      <h2 className="mb-3">{song.title}</h2>

      <audio
        ref={audioRef}
        src={song.url}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />

      {/* 🎚️ Progress Bar */}
      <input
        type="range"
        min="0"
        max={duration}
        value={currentTime}
        onChange={handleSeek}
        className="w-full mb-3"
      />

      {/* ⏱️ Time Display */}
      <div className="flex justify-between text-sm mb-3">
        <span>{Math.floor(currentTime)}s</span>
        <span>{Math.floor(duration)}s</span>
      </div>

      {/* ▶️ Play / Pause */}
      <button
        onClick={handlePlayPause}
        className="bg-green-500 px-4 py-2 rounded-full"
      >
        {isPlaying ? "Pause ⏸️" : "Play ▶️"}
      </button>
    </div>
  );
};

export default MusicPlayer;