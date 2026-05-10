(function () {

  /* === NAVBAR === */
  var navbar = document.getElementById('navbar');

  function actualizarNavbar() {
    if (window.scrollY > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', actualizarNavbar, { passive: true });
  actualizarNavbar();


  /* === MENÚ HAMBURGUESA === */
  var hamburger = document.querySelector('.nav-hamburger');
  var navMenu   = document.getElementById('nav-menu');

  hamburger.addEventListener('click', function () {
    var estaAbierto = navMenu.classList.toggle('open');
    hamburger.classList.toggle('open', estaAbierto);
    hamburger.setAttribute('aria-expanded', estaAbierto);
  });

  navMenu.querySelectorAll('a').forEach(function (enlace) {
    enlace.addEventListener('click', function () {
      navMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });


  /* === SMOOTH SCROLL === */
  document.querySelectorAll('a[href^="#"]').forEach(function (enlace) {
    enlace.addEventListener('click', function (e) {
      var destino = document.querySelector(this.getAttribute('href'));
      if (!destino) return;
      e.preventDefault();
      destino.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });


  /* === BLOBS — REPULSIÓN + FLOAT (rAF) ===
     Los blobs huyen del cursor cuando está a menos de 300px.
     El float es una onda sinusoidal distinta por blob, manejada en JS
     para no interferir con la animación CSS de morphing (border-radius).
     La posición final se aplica via CSS custom props --blob-tx / --blob-ty.
  */
  var hero       = document.querySelector('.hero');
  var blobs      = document.querySelectorAll('.blob');
  var tieneRaton = window.matchMedia('(hover: hover)').matches;
  var reducido   = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Gradiente de cursor en el ::before del hero */
  if (hero && tieneRaton) {
    document.addEventListener('mousemove', function (e) {
      var rect = hero.getBoundingClientRect();
      var x = ((e.clientX - rect.left) / rect.width)  * 100;
      var y = ((e.clientY - rect.top)  / rect.height) * 100;
      hero.style.setProperty('--cursor-x', x + '%');
      hero.style.setProperty('--cursor-y', y + '%');
    }, { passive: true });
  }

  if (blobs.length && !reducido) {
    /* Parámetros individuales de cada blob */
    var BLOB_PARAMS = [
      { floatAmp: 18, floatPeriod: 22000, floatPhase: 0 },
      { floatAmp: 20, floatPeriod: 25000, floatPhase: Math.PI * 0.7 },
      { floatAmp: 15, floatPeriod: 19000, floatPhase: Math.PI * 1.4 },
      { floatAmp: 10, floatPeriod: 28000, floatPhase: Math.PI * 0.3 }
    ];

    var REPULSION_RADIUS = 300;
    var REPULSION_MAX    = 60;
    var INTERP_FACTOR    = 0.04;

    /* Estado de desplazamiento por blob */
    var blobOffsets = Array.from(blobs).map(function () {
      return { x: 0, y: 0, targetX: 0, targetY: 0 };
    });

    var cursorX = -9999;
    var cursorY = -9999;

    /* Solo escuchar mousemove si el dispositivo tiene puntero real */
    if (tieneRaton) {
      document.addEventListener('mousemove', function (e) {
        cursorX = e.clientX;
        cursorY = e.clientY;
      }, { passive: true });
    }

    function rAFLoop(timestamp) {
      blobs.forEach(function (blob, i) {
        var params = BLOB_PARAMS[i] || BLOB_PARAMS[0];
        var state  = blobOffsets[i];

        /* Cálculo de repulsión: el blob calcula su centro actual */
        if (tieneRaton && cursorX > -9000) {
          var rect  = blob.getBoundingClientRect();
          var blobCX = rect.left + rect.width  / 2;
          var blobCY = rect.top  + rect.height / 2;
          var dx    = blobCX - cursorX;
          var dy    = blobCY - cursorY;
          var dist  = Math.sqrt(dx * dx + dy * dy);

          if (dist < REPULSION_RADIUS && dist > 0) {
            var fuerza = (1 - dist / REPULSION_RADIUS) * REPULSION_MAX;
            state.targetX = (dx / dist) * fuerza;
            state.targetY = (dy / dist) * fuerza;
          } else {
            state.targetX = 0;
            state.targetY = 0;
          }
        }

        /* Interpolación suave hacia el objetivo */
        state.x += (state.targetX - state.x) * INTERP_FACTOR;
        state.y += (state.targetY - state.y) * INTERP_FACTOR;

        /* Componente de float (onda sinusoidal por blob) */
        var floatY = params.floatAmp * Math.sin(
          (timestamp / params.floatPeriod) * Math.PI * 2 + params.floatPhase
        );

        /* Aplicar vía CSS custom properties — no toca la animación de morphing */
        blob.style.setProperty('--blob-tx', state.x + 'px');
        blob.style.setProperty('--blob-ty', (state.y + floatY) + 'px');
      });

      requestAnimationFrame(rAFLoop);
    }

    requestAnimationFrame(rAFLoop);
  }


  /* === REVELACIONES AL HACER SCROLL === */
  var elementosReveal = document.querySelectorAll('.reveal');

  var observer = new IntersectionObserver(
    function (entries) {
      var contadorLote = 0;
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var delay = contadorLote * 80;
        contadorLote++;
        setTimeout(function () {
          entry.target.classList.add('visible');
        }, delay);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
  );

  elementosReveal.forEach(function (el) { observer.observe(el); });


  /* === CONTADOR ANIMADO DE STATS ===
     Al entrar la sección about en viewport, los números suben de 0
     al valor final con easing cúbico en 1.2s. No se repite.
  */
  var aboutSection = document.querySelector('.about');
  var statEls      = document.querySelectorAll('.stat-value');
  var statsListo   = false;

  /* Formatos: plus-es → "+1.000", k → "10K", plain → "2" */
  function formatStat(n, formato) {
    var redondeado = Math.round(n);
    if (formato === 'plus-es') {
      return '+' + redondeado.toLocaleString('es-ES');
    }
    if (formato === 'k') {
      return redondeado + 'K';
    }
    return redondeado.toString();
  }

  /* Easing cúbico ease-out */
  function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

  function animarStats() {
    if (statsListo) return;
    statsListo = true;

    var duracion = 1200;
    var inicio   = null;

    function paso(timestamp) {
      if (!inicio) inicio = timestamp;
      var transcurrido = timestamp - inicio;
      var progreso     = Math.min(transcurrido / duracion, 1);
      var eased        = easeOut(progreso);

      statEls.forEach(function (el) {
        var target  = parseFloat(el.getAttribute('data-target'));
        var formato = el.getAttribute('data-format') || 'plain';
        if (isNaN(target)) return;
        el.textContent = formatStat(target * eased, formato);
      });

      if (progreso < 1) {
        requestAnimationFrame(paso);
      }
    }

    requestAnimationFrame(paso);
  }

  if (aboutSection && statEls.length) {
    /* En prefers-reduced-motion mostramos el valor final directamente */
    if (reducido) {
      statEls.forEach(function (el) {
        var target  = parseFloat(el.getAttribute('data-target'));
        var formato = el.getAttribute('data-format') || 'plain';
        if (!isNaN(target)) el.textContent = formatStat(target, formato);
      });
    } else {
      var statsObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animarStats();
            statsObserver.disconnect();
          }
        });
      }, { threshold: 0.3 });

      statsObserver.observe(aboutSection);
    }
  }

})();
