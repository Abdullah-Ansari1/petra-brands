
## Folder Structure

```
.
├── public ----------------- Static assets holder
│   └── images ------------- Contain all images
│   └── fonts -------------- Font resources
├── README.md -------------- Project information
├── app -------------------- Application logic
│   ├── <router> ----------- Route-specific components
│   │   └── page.jsx -------- Page JSX
│   ├── layout.jsx --------- Layout JSX
│   └── page.jsx ----------- Main Page JSX
├── components ------------- Reusable components
│   └── ui ----------------- All default ShadCN components reside here
│   └── ... ---------------- The rest of the components here are Detected Common Components
├── lib -------------------- Other non-UI related stuff
│   └── utils ----------------- Utility functions used in components/ui
├── styles ----------------- Global style config
│   ├── font.css ----------- Font styling
│   ├── index.css ---------- Main stylesheet
│   └── tailwind.css ------- Default Tailwind modules
├── next.config.mjs --------- Next.js config
├── package.json ----------- Project dependencies and scripts
├── components.json -------- Holds configuration for ShadCN components
├── postcss.config.mjs ------ PostCSS configuration
└── tailwind.config.js ----- Tailwind theme config, colors, fonts etc.
```