// Matrix rain — lightweight & recolorable via data-matrix-color on <body>
(function () {
  const canvas = document.getElementById("matrix-bg");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  // read color per-stage
  const color =
    document.body.getAttribute("data-matrix-color")?.trim() ||
    getComputedStyle(document.documentElement).getPropertyValue("--matrix-color")?.trim() ||
    "#0f0";

  const chars = "ｱｶｻﾀﾅﾊﾏﾔﾗﾜ0123456789";
  const fontSize = 16;
  let cols = Math.floor(canvas.width / fontSize);
  let drops = new Array(cols).fill(1);

  function draw() {
    // subtle trail
    ctx.fillStyle = "rgba(0,0,0,0.08)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = color;
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
      const text = chars.charAt(Math.floor(Math.random() * chars.length));
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  let raf;
  function loop() { draw(); raf = requestAnimationFrame(loop); }
  loop();

  // accessibility: pause when tab hidden
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) cancelAnimationFrame(raf);
    else loop();
  });
})();
