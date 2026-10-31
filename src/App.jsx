import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  const [surprise, setSurprise] = useState(false);
  const [letter, setLetter] = useState(false);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setPlaying(true);
      } catch (error) {
        console.log("Music not available yet");
      }
    }
  };

  return (
    <div className="main">
      <audio ref={audioRef} src="/music/arj-kiya-he.mp4" loop />

      <div className="floating">💗 ✨ 🌸 💕 🦋</div>

      <header>
        <p className="small">A SPECIAL SURPRISE FOR</p>

        <h1>PIYUUUUU.... 💗</h1>

        <p className="subtitle">
          Someone as special as you deserves something special!
        </p>

        <button className="music-btn" onClick={toggleMusic}>
          {playing ? "⏸ Pause Music" : "🎵 Play Music"}
        </button>
      </header>

      <section className="hero">
        <div className="tulip-bunch">
          🌷🌷🌷
          <span> Made with love 💕</span>
        </div>

        <h2>Hey Piyuuuuu....! 💕</h2>

        <p>
          This little website is specially made for you, because you are one of
          the most special people in my life.
        </p>

        <button onClick={() => setSurprise(!surprise)}>
          {surprise ? "Close Surprise 💗" : "Open Your Surprise 🎁"}
        </button>

        {surprise && (
          <div className="surprise">
            <h2>Surpriseee! 🥹💗</h2>
            <p>
              You are not just my best friend, you are a beautiful part of my
              life. Thank you for being you!
            </p>
            <h3>Stay Happy Always! 🦋</h3>
          </div>
        )}
      </section>

      <section className="gallery">
        <h2>Our Beautiful Memories 📸</h2>
        <p className="section-text">Some moments deserve to stay forever.</p>

        <div className="photo-grid">
          <div className="photo-card">
            <img src="/photos/photo1.jpeg" alt="Memory 1" />
            <p>Beautiful Memory 💗</p>
          </div>

          <div className="photo-card">
            <img src="/photos/photo2.jpeg" alt="Memory 2" />
            <p>Best Moments 🌸</p>
          </div>

          <div className="photo-card">
            <img src="/photos/photo3.jpeg" alt="Memory 3" />
            <p>Forever Memories 🦋</p>
          </div>
        </div>
      </section>

      <section className="letter-section">
        <h2>A Little Letter For You 💌</h2>

        <div className="letter-box">
          <div className="envelope">💌</div>

          <p>I have something special to tell you...</p>

          <button onClick={() => setLetter(!letter)}>
            {letter ? "Hide Letter" : "Read My Letter 💕"}
          </button>

          {letter && (
            <div className="letter-content">
              <h3>Dear Piyuuuuu.... ❤️</h3>

              <p>
                Your friendship means a lot to me. Thank you for all the smiles,
                conversations and memories. No matter where life takes us, I
                hope we always keep this beautiful friendship alive.
              </p>

              <h3>Stay Happy Always! 🌷</h3>
            </div>
          )}
        </div>
      </section>

      <footer>
        <section className="tulip-garden">
          <h2>A Little Garden For You 🌷</h2>

          <p>Every flower reminds me of your beautiful friendship 💗</p>

          <div className="garden-flowers">
            <span>🌷</span>
            <span>🌷</span>
            <span>🌷</span>
            <span>🌷</span>
            <span>🌷</span>
            <span>🌷</span>
            <span>🌷</span>
          </div>

          <h3>Keep Blooming, Piyuuuuu! 🌸</h3>
        </section>
        <h2>Forever Best Friends 💗</h2>
        <p>Made with ❤️ specially for Piyuuuuu....</p>
        <p className="end">Keep Smiling! ✨</p>
      </footer>
    </div>
  );
}

export default App;
