
(function(){
  const langBtn=document.getElementById('lang');
  const t={
    ar:{code:'AR', h:'بوابة اليقظة', sub:'لقد بلغت العتبة الأولى… كل اختيار سيغيّر مصيرك.', start:'ابدأ الرحلة', tip:'نصيحة: استحضر نيتك قبل العبور.'},
    en:{code:'EN', h:'Gate of Awakening', sub:'You have reached the first threshold… every choice will alter your fate.', start:'Begin the Journey', tip:'Tip: Set your intention before crossing.'}
  };
  let lang=localStorage.getItem('mystic_lang')||'ar';
  function apply(){
    if(langBtn) langBtn.textContent=t[lang].code;
    const H=document.getElementById('headline'); if(H){ H.textContent=t[lang].h; H.setAttribute('data-text',t[lang].h); }
    const S=document.getElementById('subtitle'); if(S) S.textContent=t[lang].sub;
    const B=document.getElementById('start'); if(B) B.textContent=t[lang].start;
    const N=document.getElementById('tip'); if(N) N.textContent=t[lang].tip;
    document.documentElement.lang=(lang==='ar'?'ar':'en');
    document.documentElement.dir=(lang==='ar'?'rtl':'ltr');
  }
  if(langBtn){ langBtn.addEventListener('click', ()=>{ lang=(lang==='ar')?'en':'ar'; localStorage.setItem('mystic_lang',lang); apply(); beep(); }); }
  apply();

  // SFX minimal (WebAudio)
  let ac; function ctx(){ if(!ac){ try{ ac=new (window.AudioContext||window.webkitAudioContext)(); }catch(e){} } return ac; }
  function tone(f,d,type='sine',v=0.03){ const A=ctx(); if(!A) return; const o=A.createOscillator(), g=A.createGain(); o.type=type; o.frequency.value=f; g.gain.value=v; o.connect(g).connect(A.destination); o.start(); o.stop(A.currentTime+d); g.gain.exponentialRampToValueAtTime(0.0001, A.currentTime+d); }
  window.beep=function(){ tone(660,0.1,'triangle',0.02); }
  window.chime=function(){ tone(520,0.18); setTimeout(()=>tone(780,0.2),120); }

  // Entry chime once
  if(!sessionStorage.getItem('mystic_chime')){ chime(); sessionStorage.setItem('mystic_chime','1'); }
})();
