# Codebase Structure and Architecture

## Directory Layout
```
wanmachi/
├── src/app/              # Next.js App Router (main application code)
│   ├── page.tsx         # Homepage component (default route /)
│   ├── layout.tsx       # Root layout with fonts, metadata, HTML structure
│   ├── globals.css      # Global Tailwind CSS styles
│   └── favicon.ico      # Site icon
├── public/              # Static assets (images, icons, etc.)
├── configuration files  # Root-level config files
└── package management   # pnpm-lock.yaml, package.json
```

## Key Files and Their Roles

### Application Code
- **`src/app/page.tsx`**: Main homepage component, currently shows Next.js welcome screen
- **`src/app/layout.tsx`**: Root layout defining HTML structure, fonts (Geist), and metadata
- **`src/app/globals.css`**: Global CSS imports and Tailwind directives

### Configuration Files
- **`package.json`**: Dependencies, scripts, project metadata
- **`tsconfig.json`**: TypeScript compiler configuration with strict mode
- **`next.config.ts`**: Next.js configuration (currently minimal)
- **`eslint.config.mjs`**: ESLint rules extending Next.js standards
- **`postcss.config.mjs`**: PostCSS configuration for Tailwind CSS
- **`mise.toml`**: Development environment tool versions

### Environment Management
- **`.gitignore`**: Standard Next.js gitignore patterns
- **`pnpm-lock.yaml`**: Lock file for exact dependency versions

## Architecture Patterns
- **App Router**: Uses Next.js 13+ App Router (not Pages Router)
- **File-based routing**: Routes determined by file structure in `src/app/`
- **Component-based**: React functional components with TypeScript
- **CSS-in-JS**: Tailwind utility classes for styling
- **Font optimization**: Next.js font loading with CSS variables

## Current Development State
- Minimal setup ready for feature development
- Standard Next.js template structure maintained
- Modern toolchain configured but not heavily customized
- Ready for expansion with additional pages, components, and features