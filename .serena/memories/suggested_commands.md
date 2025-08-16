# Suggested Commands for Development

## Package Management
- **Install dependencies**: `pnpm install`
- **Add package**: `pnpm add <package>`
- **Add dev dependency**: `pnpm add -D <package>`

## Development Commands
- **Start dev server**: `pnpm dev` (runs on http://localhost:3000)
- **Build for production**: `pnpm build`
- **Start production server**: `pnpm start`
- **Lint code**: `pnpm lint`

## Tool Version Management (mise)
- **Install tools**: `mise install` (installs Node.js 24.3.0, npm 11.4.2, pnpm 10.12.4)
- **Check tool versions**: `mise current`

## Git Commands
- **Status**: `git status`
- **Add files**: `git add <files>`
- **Commit**: `git commit -m "message"`
- **Push**: `git push`

## System Commands (macOS/Darwin)
- **List files**: `ls -la`
- **Change directory**: `cd <path>`
- **Find files**: `find . -name "*.tsx"`
- **Search in files**: `grep -r "pattern" src/`
- **View file**: `cat <file>`

## Next.js Specific
- **Generate types**: Automatically handled by Next.js during build/dev
- **Clear cache**: `rm -rf .next` then `pnpm dev`
- **Bundle analyzer**: Would need to add `@next/bundle-analyzer` package

## TypeScript
- **Type check**: `npx tsc --noEmit` (checks types without emitting files)
- **Watch mode**: TypeScript checking is integrated with Next.js dev server