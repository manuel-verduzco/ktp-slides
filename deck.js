/* Tiny slide engine: no dependencies. Keys: arrows / space / click to move, N notes, F fullscreen. */
(function () {
  var deck = document.getElementById('deck');
  var slides = Array.prototype.slice.call(deck.querySelectorAll('.slide'));
  var notes = document.getElementById('notes');
  var i = 0, step = 0, timer = null;

  function fit() {
    var s = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
    deck.style.transform = 'translate(-50%, -50%) scale(' + s + ')';
  }
  window.addEventListener('resize', fit);
  fit();

  function maxStep(s) { return parseInt(s.dataset.steps || '0', 10); }
  function applyStep(s, n) {
    for (var k = 1; k <= maxStep(s); k++) s.classList.toggle('step-' + k, k <= n);
  }
  function clean() {
    slides.forEach(function (s, idx) {
      Array.prototype.slice.call(s.classList).forEach(function (c) {
        if (/^(in|out)-/.test(c)) s.classList.remove(c);
      });
      if (idx !== i) s.classList.remove('active');
    });
  }
  function updateUi() {
    if (notes) notes.querySelector('p').textContent = slides[i].dataset.notes || '';
    history.replaceState(null, '', '#' + (i + 1));
  }

  function go(to, dir, toStep) {
    if (to < 0 || to >= slides.length) return;
    var from = slides[i], next = slides[to];
    window.clearTimeout(timer);
    clean();
    if (to === i) { applyStep(next, toStep); step = toStep; updateUi(); return; }
    var later = dir > 0 ? next : from;
    var type = later.dataset.transition || 'fade';
    var suffix = dir > 0 ? '-f' : '-b';
    applyStep(next, toStep);
    i = to; step = toStep;
    if (type === 'none') {
      from.classList.remove('active');
      next.classList.add('active');
    } else {
      next.classList.add('active', 'in-' + type + suffix);
      from.classList.add('out-' + type + suffix);
      timer = window.setTimeout(function () {
        from.classList.remove('active');
        clean();
      }, 850);
    }
    updateUi();
  }

  function next() {
    if (step < maxStep(slides[i])) { step++; applyStep(slides[i], step); }
    else go(i + 1, 1, 0);
  }
  function prev() {
    if (step > 0) { step--; applyStep(slides[i], step); }
    else if (i > 0) go(i - 1, -1, maxStep(slides[i - 1]));
  }

  document.addEventListener('keydown', function (e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    var k = e.key;
    if (k === 'ArrowRight' || k === 'ArrowDown' || k === 'PageDown' || k === ' ' || k === 'Enter') { e.preventDefault(); next(); }
    else if (k === 'ArrowLeft' || k === 'ArrowUp' || k === 'PageUp' || k === 'Backspace') { e.preventDefault(); prev(); }
    else if (k === 'Home') go(0, -1, 0);
    else if (k === 'End') go(slides.length - 1, 1, 0);
    else if (k === 'n' || k === 'N') notes.classList.toggle('on');
    else if (k === 'f' || k === 'F') {
      if (document.fullscreenElement) document.exitFullscreen(); else document.documentElement.requestFullscreen();
    }
  });
  document.addEventListener('click', function (e) {
    if (e.target.closest('#notes')) return;
    if (e.clientX < window.innerWidth * 0.18) prev(); else next();
  });
  var x0 = null;
  document.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
  document.addEventListener('touchend', function (e) {
    if (x0 === null) return;
    var dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 50) { if (dx < 0) next(); else prev(); }
    x0 = null;
  });

  var idle;
  document.addEventListener('mousemove', function () {
    document.body.classList.remove('idle');
    window.clearTimeout(idle);
    idle = window.setTimeout(function () { document.body.classList.add('idle'); }, 2500);
  });

  // start on the slide in the URL hash, if any
  var start = parseInt((location.hash || '').replace('#', ''), 10);
  i = start >= 1 && start <= slides.length ? start - 1 : 0;
  slides[i].classList.add('active');
  applyStep(slides[i], 0);
  updateUi();
})();
