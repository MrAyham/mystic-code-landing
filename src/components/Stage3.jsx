import React, { useState, useEffect } from 'react';

export default function Stage3({ t, goToStage }) {
  const [answer, setAnswer] = useState('');
  const check = () => {
    if (answer.trim().toLowerCase() === 'mystic') {
      goToStage(4);
    } else {
      alert('✗');
    }
  };
  useEffect(() => {
    localStorage.setItem('mystic_stage', 3);
  }, []);
  return (
    <div className="fade-in">
      <h1>{t.title}</h1>
      <p>{t.story}</p>
      <img src="/assets/stage3.png" alt="stage3" className="seal rotate glow" />
      <input value={answer} onChange={e => setAnswer(e.target.value)} placeholder={t.puzzle} />
      <button onClick={check}>{t.submit}</button>
    </div>
  );
}
