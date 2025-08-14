import React from 'react';

export default function LanguageSwitcher({ lang, setLang }) {
  const toggle = () => setLang(lang === 'ar' ? 'en' : 'ar');
  return (
    <button onClick={toggle} style={{ position: 'absolute', top: 10, right: 10 }}>
      {lang === 'ar' ? 'EN' : 'AR'}
    </button>
  );
}
