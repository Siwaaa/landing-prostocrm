if (document.documentElement.clientWidth > 900) {
  const scenes = document.querySelectorAll('.parallax-scene');
  scenes.forEach(el => {
    const scene = new Parallax(el);
  });
}