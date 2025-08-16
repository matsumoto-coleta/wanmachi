# Task Completion Checklist

When completing development tasks in this project, always run these commands in order:

## 1. Linting
```bash
pnpm lint
```
- Runs ESLint with Next.js configuration
- Checks for code style violations and potential issues
- Must pass before considering task complete

## 2. Type Checking
```bash
npx tsc --noEmit
```
- Validates TypeScript types without generating output
- Ensures type safety across the codebase
- Critical for TypeScript projects

## 3. Build Verification
```bash
pnpm build
```
- Tests production build process
- Catches build-time errors and optimizations
- Verifies all imports and dependencies resolve correctly

## 4. Development Server Test
```bash
pnpm dev
```
- Start development server and manually verify changes
- Check that the application runs without errors
- Verify new functionality works as expected

## Optional: Testing
Currently no test framework is configured. When tests are added, include:
- Unit tests: `pnpm test`
- Integration tests: `pnpm test:integration`
- E2E tests: `pnpm test:e2e`

## Git Workflow
After all checks pass:
1. `git add <files>`
2. `git commit -m "descriptive message"`
3. `git push` (if working on a branch)

## Notes
- All lint errors must be resolved before committing
- Build must succeed for production deployment
- TypeScript errors are blocking and must be fixed
- Always test manually in development mode after changes