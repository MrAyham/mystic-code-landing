import React, { useEffect } from 'react';

export default function Stage5({ t, goToStage }) {
  useEffect(() => {
    localStorage.setItem('mystic_stage', 5);
  }, []);
  const restart = () => {
    localStorage.removeItem('mystic_stage');
    goToStage(1);
  };
  return (
    <div className="fade-in">
      <h1>{t.title}</h1>
      <p>{t.story}</p>
      <img src="/assets/stage5.png" alt="stage5" className="seal glow pulse" />
      <button onClick={restart}>{t.button}</button>
    </div>
  );
}
