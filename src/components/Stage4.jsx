import React, { useState, useEffect } from 'react';

export default function Stage4({ t, goToStage }) {
  const [answer, setAnswer] = useState('');
  const check = () => {
    if (answer.trim().toLowerCase() === 'magic') {
      goToStage(5);
    } else {
      alert('✗');
    }
  };
  useEffect(() => {
    localStorage.setItem('mystic_stage', 4);
  }, []);
  return (
    <div className="fade-in">
      <h1>{t.title}</h1>
      <p>{t.story}</p>
      <img src="/assets/stage4.png" alt="stage4" className="seal pulse glow" />
      <input value={answer} onChange={e => setAnswer(e.target.value)} placeholder="Decode..." />
      <button onClick={check}>{t.submit}</button>
    </div>
  );
}
