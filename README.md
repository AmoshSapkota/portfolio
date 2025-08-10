# Interactive 3D Portfolio

This repository is an interactive 3D portfolio template powered by React, Three.js, and Tailwind CSS, adapted from [reactjs18-3d-portfolio](https://github.com/ladunjexa/reactjs18-3d-portfolio).

## Getting Started

Install dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

## Customize

- Update your personal information, projects, and sections in `src/components/sections`.
- Replace assets in the `public` folder and `src/assets` as needed.

Happy coding!

## Logo Generation

You can generate a custom portfolio logo using the OpenAI Images API.

1. Run the logo generation script, passing your API key directly:
   ```bash
   npm run generate:logo -- YOUR_OPENAI_API_KEY
   ```

This writes the new logo to `src/assets/logo.png`, which the site imports as your header/logo asset.
