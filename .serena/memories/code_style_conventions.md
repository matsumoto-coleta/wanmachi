# Code Style and Conventions

## TypeScript Configuration
- **Target**: ES2017
- **Strict mode**: Enabled
- **Path aliases**: `@/*` maps to `./src/*`
- **JSX**: preserve (handled by Next.js)
- **Module system**: ESNext with bundler resolution
- **Import style**: ES modules preferred

## Code Style Guidelines
- **File naming**: 
  - React components: camelCase (e.g., `page.tsx`, `layout.tsx`)
  - Configuration files: kebab-case with extensions (e.g., `next.config.ts`, `eslint.config.mjs`)
- **Component structure**: Function components with default exports
- **Import organization**: External imports first, then relative imports

## ESLint Configuration
- Extends Next.js core web vitals and TypeScript rules
- Uses flat config format with `eslint.config.mjs`
- Enforces Next.js best practices

## React/Next.js Patterns
- **App Router**: Uses Next.js 13+ App Router structure
- **Metadata**: Exported from layout components
- **Fonts**: Loaded via `next/font/google` with CSS variables
- **Styling**: Tailwind CSS with utility classes
- **Images**: Use Next.js `Image` component for optimization

## Component Examples
Based on existing code:
- Default export functions for page components
- Proper TypeScript typing for props (e.g., `Readonly<{children: React.ReactNode}>`)
- CSS class naming follows Tailwind utility patterns
- Semantic HTML structure with accessibility considerations