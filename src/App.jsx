import React, { useState } from 'react';
import Stage1 from './components/Stage1.jsx';
import Stage2 from './components/Stage2.jsx';
import Stage3 from './components/Stage3.jsx';
import Stage4 from './components/Stage4.jsx';
import Stage5 from './components/Stage5.jsx';
import LanguageSwitcher from './components/LanguageSwitcher.jsx';
import { translations } from './translations.js';

export default function App() {
  const [lang, setLang] = useState('ar');
  const [stage, setStage] = useState(() => Number(localStorage.getItem('mystic_stage')) || 1);

  const goToStage = (n) => {
    setStage(n);
    localStorage.setItem('mystic_stage', n);
  };

  const t = translations[lang];

  let content;
  switch (stage) {
    case 1:
      content = <Stage1 t={t.stage1} goToStage={goToStage} />;
      break;
    case 2:
      content = <Stage2 t={t.stage2} goToStage={goToStage} />;
      break;
    case 3:
      content = <Stage3 t={t.stage3} goToStage={goToStage} />;
      break;
    case 4:
      content = <Stage4 t={t.stage4} goToStage={goToStage} />;
      break;
    case 5:
      content = <Stage5 t={t.stage5} goToStage={goToStage} />;
      break;
    default:
      content = <Stage1 t={t.stage1} goToStage={goToStage} />;
  }

  return (
    <div>
      <LanguageSwitcher lang={lang} setLang={setLang} />
      {content}
    </div>
  );
}
