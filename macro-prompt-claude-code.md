# MACRO-PROMPT: PORTFOLIO DARÍO ÁLVAREZ — FLUJO DE DISEÑO PREMIUM

---

## CONTEXTO DEL PROYECTO

Nombre del cliente: **Darío Álvarez Dorado**
Perfil: Desarrollador y diseñador web, 17 años, Villanueva de la Serena (Badajoz)
Objetivo: Portfolio SPA (Single Page Application) listo para producción, alojado en GitHub Pages bajo dominio `.dev`
Propósito de la web: Captación de clientes locales y regionales que buscan presencia digital desde cero o rediseño

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
- **Comentarios:** CERO comentarios en el código entregado. Ni `<!-- -->`, ni `/* */`, ni `//`. Código limpio y autoexplicativo.
- **Idioma:** Español en todo el contenido visible.
- **Border-radius:** Máximo 4px en cualquier elemento. Diseño arquitectónico, no orgánico.

---

## FLUJO DE TRABAJO OBLIGATORIO (ejecutar en este orden exacto)

### PASO 0 — MEMORIA DE CONTEXTO
```
Revisa .claude/napkin.md para cargar preferencias previas y errores a evitar antes de escribir una sola línea de código.
```

### PASO 1 — CONSTRUCCIÓN CREATIVA (skill: impeccable)
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
- **Efecto cursor:** Implementar con JS un gradiente radial que sigue el cursor del usuario. Técnica: `mousemove` en `document`, actualizar CSS custom property `--mouse-x` y `--mouse-y`, aplicar como `radial-gradient` en `::before` del hero con `opacity: 0.6` y mezcla sutil. El gradiente debe ser un foco de luz cálido (`rgba(200,170,120,0.15)`) de ~600px de radio.
- Contenido centrado verticalmente con flexbox:
  - **Eyebrow (pequeño, caps):** `DESARROLLADOR · DISEÑADOR · VILLANUEVA DE LA SERENA`
  - **H1 principal:** `No solo diseño tu web.` (salto de línea) `Construyo tu canal` (salto de línea) `de captación de clientes.` — Syne 800, tamaño dramático con `clamp()`
  - **Subtítulo:** `17 años. Extremadura. Y esto es solo el principio de algo grande.` — Manrope 400, tono `#5A5450`, tamaño 18-20px
  - **CTAs:** Dos botones en línea. Primario: `Ver proyectos` (fondo `#1A1A1A`, texto blanco, sin border-radius o máximo 2px). Secundario: `Hablemos` (borde 1px `#1A1A1A`, fondo transparente).
  - **Scroll indicator:** Línea vertical animada que baja con `@keyframes` al fondo de la sección

#### 3. SECCIÓN PROYECTOS / CASOS DE ESTUDIO
- Título de sección: `Trabajo real. Resultados reales.`
- Layout asimétrico: dos cards en grid, con la primera ocupando más espacio visual (60/40 o similar)
- Cada card: fondo ligeramente diferente del body (`#EDE8DC`), borde `1px solid rgba(0,0,0,0.1)`, sin border-radius o máximo 4px, `padding: 48px`

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
- Layout de dos columnas: izquierda texto personal, derecha lista de servicios
- **Texto izquierda:**
  - H2: `Hola. Soy Darío.`
  - Párrafo: `Tengo 17 años, vivo en Villanueva de la Serena y llevo tiempo construyendo webs que hacen crecer negocios reales. No trabajo con plantillas. Cada proyecto empieza desde cero, pensado para el cliente que lo va a usar y los clientes que lo van a encontrar.`
  - Párrafo: `Si tienes un negocio local y quieres llegar a más gente, o tienes web pero no te funciona, podemos hablar.`
- **Servicios (derecha):**
  - Lista de 4 ítems con línea divisoria entre cada uno (no bullets, sino layout de fila con número y texto):
    - `01 · Diseño web desde cero`
    - `02 · Rediseño y optimización`
    - `03 · SEO y captación orgánica`
    - `04 · Desarrollo de aplicaciones web`

#### 5. SECCIÓN CONTACTO
- Título grande: `Trabajemos juntos.`
- Subtítulo: `Sin formularios. Sin esperas. Contacto directo.`
- Grid de 3 cards de contacto (líneas rectas, sin radius):
  - **Teléfono:** `+34 633 585 176` — icono SVG de teléfono — `href="tel:+34633585176"`
  - **Email:** `dalvarezd7@gmail.com` — icono SVG de email — `href="mailto:dalvarezd7@gmail.com"`
  - **Presencial:** `Villanueva de la Serena, Badajoz` — icono SVG de ubicación — texto informativo, sin link
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

**Efecto cursor hero (ya descrito, aquí la lógica JS):**
```javascript
// mousemove → leer e.clientX, e.clientY
// Actualizar --cursor-x y --cursor-y en el elemento hero
// CSS: background: radial-gradient(600px circle at var(--cursor-x) var(--cursor-y), rgba(200,170,120,0.12), transparent)
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
- [ ] Responsive completo: breakpoints en 768px y 1024px como mínimo
- [ ] En mobile: navbar colapsa a menú hamburguesa funcional
- [ ] Testear que el efecto cursor no rompe en dispositivos touch (desactivarlo si `matchMedia('(hover:none)')`)

---

## NOTAS FINALES PARA CLAUDE CODE

1. **El código debe funcionar directamente al abrir `index.html` en browser sin servidor.** No usar módulos ES6 (`import/export`) a menos que se sirva desde servidor. Usar IIFE o script clásico.

2. **GitHub Pages:** El repo debe funcionar desde la raíz. El `index.html` debe estar en root, no en `/docs` ni subcarpeta.

3. **Actualizar `napkin.md`** al finalizar con: paleta usada, tipografías elegidas, patrones de animación, y cualquier decisión de diseño relevante para sesiones futuras.

4. **Entrega esperada:** Tres archivos (`index.html`, `styles.css`, `script.js`) + carpeta `assets/` con archivos `.webp` vacíos o de placeholder dimensionado correctamente para que el layout no colapse.

---

*Prompt generado para Claude Code · Portfolio Darío Álvarez Dorado · v1.0*
