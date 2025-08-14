(function(){
  const langBtn=document.querySelector('.lang'); if(!langBtn) return;
  const t={
    ar:{code:'AR',start:'ابدأ الرحلة',paylead:'هذه البوابة لا تُفتح إلا بمفتاح ذهبي',payhint:'بعد الدفع ستنتقل تلقائيًا للبوابة التالية',go:'تابع'},
    en:{code:'EN',start:'Begin the Journey',paylead:'This gate opens only with a golden key',payhint:'After payment you will be taken to the next gate',go:'Continue'}
  };
  let lang=localStorage.getItem('mystic_lang')||'ar';
  function apply(){
    langBtn.textContent=t[lang].code;
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key=el.getAttribute('data-i18n'); if(t[lang][key]) el.textContent=t[lang][key];
    });
    document.documentElement.lang=lang==='ar'?'ar':'en';
    document.documentElement.dir=lang==='ar'?'rtl':'ltr';
  }
  langBtn.addEventListener('click',()=>{ lang=lang==='ar'?'en':'ar'; localStorage.setItem('mystic_lang',lang); apply(); });
  apply();
})();