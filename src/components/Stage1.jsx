import React, { useEffect } from 'react';

export default function Stage1({ t, goToStage }) {
  useEffect(() => {
    localStorage.setItem('mystic_stage', 1);
  }, []);
  return (
    <div className="fade-in">
      <h1>{t.title}</h1>
      <p>{t.story}</p>
      <img src="/assets/stage1.png" alt="stage1" className="seal pulse glow" />
      <button onClick={() => goToStage(2)}>{t.button}</button>
    </div>
  );
}
