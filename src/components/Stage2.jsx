import React, { useEffect } from 'react';

export default function Stage2({ t, goToStage }) {
  useEffect(() => {
    localStorage.setItem('mystic_stage', 2);
    const script = document.createElement('script');
    script.src = 'https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID&components=hosted-buttons&disable-funding=venmo&currency=USD';
    script.addEventListener('load', () => {
      if (window.paypal) {
        window.paypal.HostedButtons({ hostedButtonId: 'ZUXNK5M7LZPNA' }).render('#paypal-container');
      }
    });
    document.body.appendChild(script);
  }, []);
  return (
    <div className="fade-in">
      <h1>{t.title}</h1>
      <p>{t.story}</p>
      <div id="paypal-container"></div>
      <button onClick={() => goToStage(3)}>{t.button}</button>
    </div>
  );
}
