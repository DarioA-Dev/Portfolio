# MACRO-PROMPT: PORTFOLIO DARÍO ÁLVAREZ — FLUJO DE DISEÑO PREMIUM (v2)

---

## CONTEXTO DEL PROYECTO

Nombre del cliente: **Darío Álvarez Dorado**
Perfil: Desarrollador y diseñador web, 17 años, Villanueva de la Serena (Badajoz)
Objetivo: Portfolio SPA (Single Page Application) listo para producción, alojado en GitHub Pages bajo dominio `.dev`
Propósito de la web: Captación de clientes locales y regionales que buscan presencia digital desde cero o rediseño

### Perfil técnico real de Darío (datos verificados de su GitHub):
- Estudiante de **SMR — Sistemas Microinformáticos y Redes** (Grado Medio)
- **Cambridge English B2 (FCE)** — certificación oficial de nivel avanzado
- Stack actual: HTML5, CSS3, JavaScript, administración de redes locales, hardware y componentes
- Creador y arquitecto jefe de **El Nexo Center** — ecosistema IT con 4 pilares: Hardware & Builds, Software & Herramientas, Sistemas Operativos, Rendimiento Extremo
- Conocimientos avanzados: Kernel Tuning, Modo MSI, TCP CUBIC, automatización Batch/PowerShell
- Desarrollador de **Keep Your Marks** — app web fitness con BD relacionales y lógica de estadísticas de rendimiento

---

## DATOS REALES DE CONTENIDO (usar sin placeholders de texto)

| Campo | Valor |
|---|---|
| Teléfono | +34 633 585 176 |
| Email | dalvarezd7@gmail.com |
| Ubicación | Villanueva de la Serena, Badajoz |
| GitHub | https://github.com/DarioA-Dev |
| Instagram (El Nexo) | https://www.instagram.com/elnexocenter/ |
| El Nexo Center | https://elnexocenter.com/ |
| Keep Your Marks | En desarrollo (sin URL pública aún) |

**Placeholders de imagen:** Sí — usar `<img src="assets/placeholder-nexo.webp">` etc. con dimensiones reales definidas en CSS. No generar imágenes inventadas.

---

## STACK Y RESTRICCIONES ABSOLUTAS

- **Lenguajes:** HTML5, CSS3, JavaScript Vanilla puro. PROHIBIDO React, Next.js, Vue, Tailwind, Bootstrap o cualquier framework/librería externa de JS.
- **Fuentes:** Google Fonts únicamente (cargadas vía `<link>`).
- **Iconos:** Solo `<svg>` inline con trazos minimalistas. PROHIBIDOS emojis en cualquier parte del código o contenido.
- **Comentarios:** Permitidos pero con moderación profesional. Regla: un comentario de sección por bloque lógico grande (ej. `/* === HERO === */`), y comentarios inline solo cuando la lógica JS sea genuinamente compleja. PROHIBIDO comentar cada línea, cada propiedad CSS o cada elemento HTML obvio. Si el código se explica solo, no lleva comentario.
- **Idioma:** Español en todo el contenido visible.
- **Border-radius:** Máximo 4px en cualquier elemento. Diseño arquitectónico, no orgánico.

---

## FLUJO DE TRABAJO OBLIGATORIO (ejecutar en este orden exacto)

### PASO 0 — MEMORIA DE CONTEXTO
```
Revisa .claude/napkin.md para cargar preferencias previas y errores a evitar antes de escribir una sola línea de código.
```

### PASO 1 — CONSTRUCCIÓN CREATIVA (skill: impeccable) ⚡ FASE CRÍTICA

**INSTRUCCIÓN DIRECTA A IMPECCABLE:** Esta skill debe explotar su capacidad máxima de generación de animaciones y efectos visuales. El fondo de blobs animados del hero es el elemento diferenciador visual de esta web — dedica el máximo de calidad y detalle técnico a conseguir que sea fluido, visualmente impactante y con buen rendimiento. No hacer una versión simplificada. Ejecutar la versión completa con morphing, gradientes internos por blob, parallax con cursor y blur difuso. El objetivo es que quien abra la web piense inmediatamente "este chico sabe lo que hace".
Usa la skill `impeccable` para construir la estructura completa del portfolio. Directrices:

**Dirección de Arte:**
- Estética: Editorial arquitectónico — piensa en una revista de arquitectura de alto nivel fusionada con una startup de producto. Líneas limpias, tensión tipográfica, espaciado generoso pero preciso.
- Paleta base: `#F5F0E8` (hueso cálido) como fondo principal. Acento primario: `#1A1A1A` (negro casi puro). Acento secundario: un tono tierra/óxido suave como `#8B6F47` o similar para detalles que rompan la monotonía sin gritar.
- Gradientes: sutiles y cálidos en el hero, nunca en toda la página. Un gradiente radial de `#F5F0E8` a `#EDE8DC` es suficiente como base.
- Tipografía headings: **Syne** (Google Fonts) — peso 700/800. Tamaños grandes y dramáticos en hero (clamp entre 56px y 96px).
- Tipografía body: **Manrope** (Google Fonts) — peso 400/500. Legible, geométrica, sin frialdad.

**Estructura de archivos a generar:**
```
index.html
styles.css
script.js
assets/
  placeholder-nexo.webp      (referenciado pero no creado)
  placeholder-kym.webp       (referenciado pero no creado)
```

**Secciones en orden:**

#### 1. NAVBAR
- Posición: `fixed`, top 0, ancho 100%
- Altura en reposo: 72px. Al hacer scroll > 80px: reducir a 56px + activar `backdrop-filter: blur(12px)` + fondo `rgba(245,240,232,0.85)`
- Contenido: Logotipo tipográfico "D.A." en Syne bold a la izquierda + links de navegación a la derecha (Inicio · Proyectos · Servicios · Contacto)
- Sin border-radius. Borde inferior de 1px `rgba(0,0,0,0.08)` que aparece al hacer scroll.
- Transición suave de todos los cambios: `transition: all 0.3s ease`

#### 2. HERO SECTION
- Altura: `100svh`
- **REGLA CRÍTICA DE MOBILE-FIRST:** El H1 NUNCA puede desbordar el viewport. Usar `font-size: clamp(32px, 8vw, 88px)` obligatoriamente. `overflow-x: hidden` en `html` y `body`. Todo el layout del hero debe funcionar en 320px de ancho mínimo antes de diseñar para desktop.

- **Fondo animado con blobs fluidos — PALETA Y COMPORTAMIENTO EXACTOS:**

  **Colores (OBLIGATORIO — no usar morados/magentas que rompan la paleta):**
  - Blob 1: gradiente de `#4A5568` (gris azulado medio) a `#2D3748` (gris pizarra oscuro)
  - Blob 2: gradiente de `#667EEA` (índigo suave) a `#4C51BF` (índigo más profundo) con opacidad reducida
  - Blob 3: gradiente de `#718096` (gris azulado claro) a `#4A5568`
  - Blob 4 (opcional, pequeño): `#A0AEC0` (gris perla azulado) — apenas visible, actúa como acento de profundidad
  - Todos con `opacity: 0.18–0.28` y `filter: blur(55px)` — deben ser sutiles sobre el fondo hueso, no dominantes
  - El fondo base del hero: `#F5F0E8` (hueso) — los blobs son manchas de sombra/profundidad ENCIMA del fondo claro, no un fondo oscuro independiente
  - `mix-blend-mode: multiply` en el contenedor de blobs para que se integren con el fondo hueso sin saturar

  **Estructura HTML de los blobs:**
  ```html
  <div class="hero-blobs" aria-hidden="true">
    <div class="blob" data-blob="1"></div>
    <div class="blob" data-blob="2"></div>
    <div class="blob" data-blob="3"></div>
    <div class="blob" data-blob="4"></div>
  </div>
  ```

  **CSS — morphing y posicionamiento:**
  - Posición: `absolute`, `pointer-events: none`, `z-index: 0`
  - Tamaños: blob1 `500px×400px`, blob2 `400px×500px`, blob3 `350px×350px`, blob4 `200px×200px`
  - Posiciones iniciales distribuidas: blob1 top-left, blob2 top-right, blob3 center-bottom, blob4 center
  - `@keyframes morphBlob1`: animar `border-radius` entre formas irregulares distintas cada 10s
  - `@keyframes morphBlob2`: igual pero asincrónico (13s), diferente forma inicial
  - `@keyframes morphBlob3`: 17s, movimiento más lento
  - Añadir también `@keyframes floatBlob` que mueve sutilmente cada blob en Y (±20px) con duración larga (20-25s) para que se "respiren"
  - En mobile (`max-width: 768px`): reducir tamaño de blobs al 60%, reducir blur a 35px

  **JS — repulsión del cursor (los blobs huyen del cursor):**
  ```javascript
  // Comportamiento: los blobs se ALEJAN del cursor (repulsión), no lo siguen
  // Radio de influencia: 300px desde el cursor
  // Intensidad: cuanto más cerca el cursor, más se aleja el blob
  // Implementación con rAF:
  //   1. mousemove → guardar cursorX, cursorY (posición relativa al hero)
  //   2. En rAF loop: para cada blob, calcular distancia al cursor
  //   3. Si distancia < 300px: aplicar vector de repulsión proporcional
  //      repelX = (blobCenterX - cursorX) / distancia * fuerza
  //      repelY = (blobCenterY - cursorY) / distancia * fuerza
  //      fuerza máxima: 60px de desplazamiento cuando el cursor está encima
  //   4. Interpolar suavemente de vuelta a posición original cuando el cursor se aleja
  //      currentOffset += (targetOffset - currentOffset) * 0.04
  //   5. Aplicar con: blob.style.transform = `translate(${offsetX}px, ${offsetY}px)`
  //      (sin sobreescribir la animación CSS de morphing — usar una propiedad aparte)
  // En touch: desactivar completamente con matchMedia('(hover:none)')
  // Resultado percibido: las bolas "escapan" del cursor de forma orgánica y vuelven solas
  ```

  **Rendimiento obligatorio:**
  - `will-change: transform` solo en los blobs (no en todo)
  - `isolation: isolate` en `.hero-blobs`
  - No añadir event listeners de scroll innecesarios en el hero
  - En `prefers-reduced-motion: reduce`: eliminar morphing y float, mantener solo posición estática con blobs visibles

- **Contenido del hero** (z-index: 1, centrado verticalmente, padding horizontal 5% en mobile):
  - **Eyebrow (pequeño, caps, letter-spacing: 0.15em):** `DESARROLLADOR · DISEÑADOR · VILLANUEVA DE LA SERENA`
  - **H1 principal:** `No solo diseño tu web.` / `Construyo tu canal` / `de captación de clientes.` — Syne 800, `font-size: clamp(32px, 8vw, 88px)`, `line-height: 1.05`, color `#1A1A1A`
  - **Subtítulo:** `17 años. Extremadura. Y esto es solo el principio de algo grande.` — Manrope 400, color `#5A5450`, `font-size: clamp(16px, 2.5vw, 20px)`
  - **CTAs:** En mobile se apilan en columna (`flex-direction: column`, `width: 100%`), en desktop en fila. Primario: `Ver proyectos`. Secundario: `Hablemos`.
  - **Scroll indicator:** Línea vertical de 40px con animación de extensión hacia abajo, centrada en parte inferior del hero

#### 3. SECCIÓN PROYECTOS / CASOS DE ESTUDIO
- Título de sección: `Trabajo real. Resultados reales.`
- Layout asimétrico: dos cards en grid, con la primera ocupando más espacio visual (60/40 o similar). En mobile: una columna, cards apiladas.
- Cada card: fondo `#EDE8DC`, borde `1px solid rgba(0,0,0,0.1)`, `border-radius: 2px`, `padding: 48px` (en mobile `padding: 28px`)
- **Elemento dinámico — línea de acento animada:** Cada card tiene una línea horizontal de 1px en la parte superior (`#4A5568`, gris azulado) que en hover se expande de 0% a 100% de ancho con `transition: width 0.4s ease`. Esto conecta visualmente con los blobs del hero usando el mismo color.
- **Hover en cards:** `transform: translateY(-4px)` + sombra suave `box-shadow: 0 12px 40px rgba(0,0,0,0.08)`, transición 0.3s. En mobile: sin hover transform (táctil).
- **Números de proyecto flotantes:** En la esquina superior derecha de cada card, un número tipográfico grande (`01`, `02`) en Syne, `font-size: 80px`, `opacity: 0.06`, `color: #1A1A1A`, posición absolute. Decorativo, no interfiere con el contenido.

**Card 1 — El Nexo Center:**
- Tag: `DISEÑO WEB · SEO ORGÁNICO`
- Título: `El Nexo Center`
- Descripción: `Diseño web completo y estrategia de contenido orgánico para un centro de negocios. Sin publicidad de pago.`
- Métricas destacadas (tipografía grande, Syne): `+1.000 visitas` en 30 días · `10K seguidores` comunidad orgánica
- Link: `elnexocenter.com` con flecha SVG
- Imagen: `<img src="assets/placeholder-nexo.webp" alt="El Nexo Center">`

**Card 2 — Keep Your Marks:**
- Tag: `DESARROLLO · APP WEB`
- Título: `Keep Your Marks`
- Descripción: `App web de seguimiento fitness con bases de datos relacionales escalables, lógica de estadísticas de rendimiento y arquitectura técnica compleja.`
- Métricas: `BD relacional` · `Estadísticas complejas` · `En desarrollo activo`
- Badge: `PRÓXIMAMENTE` en lugar de link
- Imagen: `<img src="assets/placeholder-kym.webp" alt="Keep Your Marks">`

#### 4. SECCIÓN SOBRE MÍ / SERVICIOS
- Layout de dos columnas en desktop, columna única en mobile (columna de texto primero, servicios debajo).
- **Elemento dinámico — contador animado de stats:** Encima del bloque de texto, una fila de 3 stats que se animan con JS al entrar en viewport (IntersectionObserver). Los números suben desde 0 hasta el valor final con `requestAnimationFrame` y easing:
  - `+1.000` — Visitas orgánicas
  - `10K` — Comunidad construida
  - `2` — Proyectos activos
  - Tipografía: Syne 700, `font-size: clamp(28px, 5vw, 48px)`, color `#1A1A1A`. Label debajo en Manrope 400, pequeño, `#8B8680`.
- **Texto izquierda:**
  - H2: `Hola. Soy Darío.`
  - Párrafo 1: `Tengo 17 años, vivo en Villanueva de la Serena y estudio SMR — Sistemas Microinformáticos y Redes. Llevo tiempo construyendo webs que hacen crecer negocios reales, y combinando ese trabajo con proyectos técnicos que van desde administración de redes hasta optimización de rendimiento a nivel kernel.`
  - Párrafo 2: `No trabajo con plantillas. Cada proyecto empieza desde cero, pensado para el cliente que lo va a usar y para los clientes que lo van a encontrar en Google.`
  - Párrafo 3: `Tengo el Cambridge B2 (FCE), lo que me permite leer documentación técnica en inglés sin fricción y trabajar con herramientas internacionales sin depender de traducciones.`
  - Frase de cierre: `Si tienes un negocio local y quieres llegar a más gente, o tienes web pero no te funciona — podemos hablar.`
- **Bloque de credenciales** (entre los dos párrafos, diseño tipo "tags" o fichas pequeñas, sin emojis, con iconos SVG mínimos):
  - `SMR — Sistemas y Redes`
  - `Cambridge B2 (FCE)`
  - `HTML · CSS · JavaScript`
  - `Diseño & Desarrollo`
- **Servicios (derecha):**
  - Lista de 4 ítems con línea divisoria entre cada uno (layout de fila con número y texto):
    - `01 · Diseño web desde cero`
    - `02 · Rediseño y optimización`
    - `03 · SEO y captación orgánica`
    - `04 · Desarrollo de aplicaciones web`

#### 5. SECCIÓN CONTACTO
- Título grande: `Trabajemos juntos.`
- Subtítulo: `Sin formularios. Sin esperas. Contacto directo.`
- Grid de 3 cards de contacto en desktop, columna en mobile (líneas rectas, `border-radius: 2px`):
  - **Teléfono:** `+34 633 585 176` — icono SVG de teléfono — `href="tel:+34633585176"`
  - **Email:** `dalvarezd7@gmail.com` — icono SVG de email — `href="mailto:dalvarezd7@gmail.com"`
  - **Presencial:** `Villanueva de la Serena, Badajoz` — icono SVG de ubicación — texto informativo
- **Elemento dinámico — fondo de la sección:** Esta sección tiene un fondo ligeramente más oscuro (`#EDE8DC`) y un pequeño blob estático (sin animación) en gris azulado `#4A5568`, `opacity: 0.07`, `filter: blur(80px)`, en la esquina inferior derecha. Conecta visualmente con el hero sin repetirlo.
- Frase final: `Disponible para proyectos locales, regionales y remotos.`

#### 6. FOOTER
- Altura compacta, `padding: 32px`
- Línea superior `1px solid rgba(0,0,0,0.1)`
- Izquierda: `© 2025 Darío Álvarez Dorado`
- Centro: links GitHub + Instagram El Nexo (iconos SVG, sin texto)
- Derecha: `Hecho a mano. Sin frameworks.`

---

### PASO 2 — INTELIGENCIA Y REFINADO (skill: ui-ux-pro-max)

Una vez generado el código base, ejecutar:
```bash
python3 .agents/skills/ui-ux-pro-max/scripts/search.py "portfolio desarrollador freelance" --design-system
```

Aplicar los resultados para:
- Verificar que el contraste de color cumple **WCAG AA mínimo** (ratio 4.5:1 para texto normal, 3:1 para texto grande)
- Auditar con checklist de **Accesibilidad CRITICAL**: `aria-label` en todos los links icon-only, `alt` en todas las imágenes, focus states visibles, semántica HTML correcta (`<nav>`, `<main>`, `<section>`, `<footer>`, `<h1>`→`<h2>`→`<h3>` sin saltos)
- Verificar **interacciones**: todos los elementos clicables tienen `cursor: pointer` y `transition` definido. Hover states en cards, buttons y links con feedback visual claro.
- Asegurar que los **font-size** mínimos en mobile no bajen de 16px en body y 14px en elementos secundarios

---

### PASO 3 — ANIMACIONES Y SCROLL (implementar en script.js)

**IntersectionObserver para revelaciones de scroll:**
```javascript
// Patrón base a implementar:
// Cada sección y card arranca con opacity:0 + transform:translateY(40px)
// Al entrar en viewport (threshold: 0.15), clase .visible que aplica:
// opacity:1 + transform:translateY(0) + transition:all 0.7s cubic-bezier(0.16,1,0.3,1)
// Stagger en elementos de lista: cada ítem con delay incremental de 100ms
```

**Efecto de repulsión en blobs del hero (lógica JS):**
```javascript
// Los blobs HUYEN del cursor — repulsión, no seguimiento
// Radio de influencia: 300px. Fuerza máxima: 60px de desplazamiento
// rAF loop: calcular vector de repulsión por distancia, interpolar con factor 0.04
// Desactivar en touch: matchMedia('(hover:none)')
// transform en JS NO sobreescribe la animación CSS de morphing:
//   usar CSS custom property --blob-tx, --blob-ty en cada blob
//   y en CSS: transform: translate(var(--blob-tx, 0px), var(--blob-ty, 0px))
//   separado del animation que controla border-radius
```

**Contador animado de stats (IntersectionObserver + rAF):**
```javascript
// Al entrar la sección "sobre mí" en viewport:
// Para cada stat, animar el número de 0 al valor final con easing cuadrático
// Duración: 1.2s. No re-animar si ya se ejecutó (flag booleano)
// En prefers-reduced-motion: mostrar el valor final directamente sin animación
```

**Navbar scroll behavior:**
```javascript
// scroll event → si window.scrollY > 80: añadir clase .scrolled al nav
// .scrolled aplica: backdrop-filter, fondo semitransparente, altura reducida, borde inferior
```

**Smooth scroll en links de navegación:**
```javascript
// querySelectorAll('a[href^="#"]') → preventDefault → scrollIntoView({behavior:'smooth'})
```

---

### PASO 4 — PULIDO FINAL (skill: Web Design Guidelines)

Verificar estándares industriales:
- [ ] `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- [ ] `<meta name="description">` con copy de SEO relevante
- [ ] `<title>` descriptivo: `Darío Álvarez — Diseño y Desarrollo Web | Extremadura`
- [ ] Open Graph tags básicos (`og:title`, `og:description`, `og:type`)
- [ ] Favicon referenciado (aunque sea placeholder)
- [ ] `lang="es"` en `<html>`
- [ ] Imágenes con `loading="lazy"` excepto las above-the-fold
- [ ] No hay `console.log()` en el JS de producción
- [ ] CSS custom properties (variables) para todos los colores y tipografías
- [ ] `@media (prefers-reduced-motion: reduce)` que desactiva animaciones para usuarios que lo necesiten
- [ ] **MOBILE-FIRST OBLIGATORIO:** Diseñar y testear en 375px primero. H1 con `clamp(32px, 8vw, 88px)`. `overflow-x: hidden` en html y body. CTAs en columna en mobile. Grid de 2 columnas colapsa a 1 en mobile. Padding de secciones: `clamp(48px, 8vw, 120px)` vertical, `clamp(20px, 5vw, 80px)` horizontal.
- [ ] Navbar hamburguesa funcional en mobile (menú desplegable, no overlay completo)
- [ ] Testear que el efecto cursor no rompe en dispositivos touch (desactivarlo si `matchMedia('(hover:none)')`)

---

## NOTAS FINALES PARA CLAUDE CODE

1. **El código debe funcionar directamente al abrir `index.html` en browser sin servidor.** No usar módulos ES6 (`import/export`) a menos que se sirva desde servidor. Usar IIFE o script clásico.

2. **GitHub Pages:** El repo debe funcionar desde la raíz. El `index.html` debe estar en root, no en `/docs` ni subcarpeta.

3. **Actualizar `napkin.md`** al finalizar con: paleta usada, tipografías elegidas, patrones de animación, y cualquier decisión de diseño relevante para sesiones futuras.

4. **Entrega esperada:** Tres archivos (`index.html`, `styles.css`, `script.js`) + carpeta `assets/` con archivos `.webp` vacíos o de placeholder dimensionado correctamente para que el layout no colapse.

---

*Prompt generado para Claude Code · Portfolio Darío Álvarez Dorado · v3.0*