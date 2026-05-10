# Napkin — Portfolio Darío Álvarez

## Paleta de colores
- Fondo principal: `#F5F0E8` (hueso cálido)
- Fondo cards / secciones about + contacto: `#EDE8DC`
- Texto principal: `#1A1A1A`
- Texto secundario: `#5A5450`
- Acento tierra/óxido: `#8B6F47`
- Bordes: `rgba(0,0,0,0.08)` / `rgba(0,0,0,0.10)`
- Color blob accent (línea cards + blob contacto): `#4A5568`

## Tipografías
- Headings: **Syne** 700/800 (Google Fonts)
- Body: **Manrope** 400/500 (Google Fonts)

## Decisiones de diseño relevantes
- border-radius: 2px (prácticamente sin redondeo — estética editorial/arquitectónica)
- Grid proyectos: 3fr 2fr (60/40) — asimétrico para dar jerarquía visual
- Navbar: empieza sin fondo, añade glassmorphism al hacer scroll >80px
- Blobs: `mix-blend-mode: multiply` + `isolation: isolate` en wrapper
- Animaciones reveal: cubic-bezier(0.16, 1, 0.3, 1) con 80ms de stagger
- Script: IIFE clásico, sin módulos ES6 (compatible con file:// sin servidor)
- overflow-x: hidden en html y body (evita desbordamiento horizontal)

## Blobs del hero (v3 — paleta tierra/arena, SIN mix-blend-mode)
- 4 blobs SIN `mix-blend-mode` — `isolation: isolate` solo en el wrapper `.hero-blobs`
- Colores: blob1 `#C8B89A→#A89070` (arena dorada), blob2 `#8B9BAE→#6B7F96` (gris azulado), blob3 `#BFB49A→#9E8E74` (camel), blob4 `#7A8FA8` (índigo grisáceo)
- Opacidades: 0.62 / 0.58 / 0.60 / 0.55 — visibles como manchas de acuarela sobre papel
- El `mix-blend-mode: multiply` anterior los hacía desaparecer sobre el fondo hueso claro — NO volver a usarlo
- `filter: blur(55px)` en cada blob (35px en mobile)
- En mobile: tamaño reducido al ~60%
- Morphing CSS: border-radius animado en 10s / 13s / 17s / 21s
- Float + repulsión cursor manejados en JS via CSS custom props `--blob-tx`, `--blob-ty`
  - Float: onda sinusoidal por blob (amp 10–20px, periodo 19–28s)
  - Repulsión: radio 300px, fuerza máxima 60px, interpolación factor 0.04
  - Desactivado en `prefers-reduced-motion` y en `(hover: none)` (touch)
- Gradiente cursor: radial de 600px con rgba(200,170,120,0.10) en ::before del hero

## Proyectos
- Línea de acento `#4A5568` en top de cada card: via `::before`, se expande de 0→100% al hover (0.4s)
- Número decorativo 01/02: Syne 80px, opacity 0.06, posición absolute top-right
- Card hover: translateY(-4px) + box-shadow (desactivado en mobile)

## Stats counter (sección about)
- 3 stats: `+1.000` (1000 visits), `10K` (community), `2` (proyectos activos)
- Animados con rAF + easing cúbico, 1.2s de duración, trigger IntersectionObserver
- `data-target` + `data-format` en HTML para configurar valor y formato
- En reduced-motion: valor final inmediato sin animación

## Contacto
- Fondo `#EDE8DC` (bg-card) igual que about — conecta visualmente ambas secciones
- Blob estático esquina inferior derecha: `#4A5568`, opacity 0.07, blur 80px

## Assets pendientes de añadir manualmente
- `assets/placeholder-nexo.webp` — captura de elnexocenter.com (16:9 recomendado)
- `assets/placeholder-kym.webp` — captura de Keep Your Marks (16:9 recomendado)
- `assets/favicon.ico` — placeholder oscuro 16x16, reemplazar por versión final

## Errores a evitar en próximas sesiones
- No usar import/export (no funciona desde file://)
- No añadir border-radius > 4px
- No usar frameworks externos
- El acento #8B6F47 no pasa WCAG AA en texto muy pequeño (<12px) — usarlo solo decorativo
- No usar mousemove directo para mover blobs — siempre rAF con interpolación
- No animar transform en CSS si JS también lo controla — separar responsabilidades
- NUNCA usar `mix-blend-mode: multiply` en blobs sobre fondo claro (#F5F0E8) — los hace invisibles. Usar opacity directa 0.55–0.70
- Los blobs usan `--blob-tx` / `--blob-ty` para JS y `animation` solo para border-radius
