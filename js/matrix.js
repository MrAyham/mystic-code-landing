
// Matrix rain — color from data-matrix-color
(function(){
  const c=document.getElementById('matrix'); if(!c) return;
  const x=c.getContext('2d');
  function resize(){ c.width=innerWidth; c.height=innerHeight; }
  addEventListener('resize',resize); resize();
  const color=document.body.getAttribute('data-matrix-color')?.trim() || '#0f0';
  const chars='ｱｶｻﾀﾅﾊﾏﾔﾗﾜ0123456789';
  const fs=16; let cols=Math.floor(c.width/fs); let drops=new Array(cols).fill(1);
  function draw(){
    x.fillStyle='rgba(0,0,0,0.08)'; x.fillRect(0,0,c.width,c.height);
    x.fillStyle=color; x.font=fs+'px monospace';
    for(let i=0;i<drops.length;i++){
      const t=chars[Math.random()*chars.length|0];
      x.fillText(t, i*fs, drops[i]*fs);
      if(drops[i]*fs>c.height && Math.random()>0.975) drops[i]=0;
      drops[i]++;
    }
  }
  let raf; (function loop(){ draw(); raf=requestAnimationFrame(loop); })();
  document.addEventListener('visibilitychange', ()=>{
    if(document.hidden) cancelAnimationFrame(raf);
    else (function loop(){ draw(); raf=requestAnimationFrame(loop); })();
  });
})();
