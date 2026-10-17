# gusniax

Página tipo Linktree con fondo oscuro y detalles dorados que reúne todos los enlaces de **gusniax** en un solo lugar.

## Características

- Enlaces principales: Instagram, YouTube, TikTok, Threads y X.
- Footer con GitHub, LinkedIn, Email y portfolio personal.
- Avatar placeholder con inicial dorada.
- Diseño responsive (mobile-first) y modo oscuro.
- Configurado como Progressive Web App (PWA) con `manifest.json` e iconos.

## Stack

- React 19
- Vite
- JavaScript (ES6+)
- CSS plano
- `react-icons`
- pnpm

## Instalación

```bash
pnpm install
```

## Scripts

```bash
pnpm dev       # servidor de desarrollo
pnpm build     # build de producción
pnpm preview   # previsualizar el build
```

## Estructura

```text
src/
├── components/
│   ├── Profile/
│   ├── SocialLinks/
│   └── Footer/
├── data/
│   └── links.jsx
├── styles/
│   └── variables.css
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Personalización

- Enlaces: edita `src/data/links.jsx`.
- Colores y tokens de diseño: `src/styles/variables.css`.
- Enlaces del footer: `src/components/Footer/Footer.jsx`.

## Contacto

- Email: irenealcainealvarez@gmail.com
- LinkedIn: https://www.linkedin.com/in/irenealcaine/
- GitHub: https://github.com/irenealcaine
