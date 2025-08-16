# Wanmachi Project Overview

## Purpose
Wanmachi is a Next.js web application project, currently in its initial state as a standard Next.js app bootstrapped with `create-next-app`. The project appears to be in early development phase with the default Next.js template content.

## Tech Stack
- **Framework**: Next.js 15.4.6 (App Router)
- **Runtime**: Node.js 24.3.0
- **Package Manager**: pnpm 10.12.4 (preferred, as evidenced by pnpm-lock.yaml)
- **Language**: TypeScript 5.x with strict mode enabled
- **Frontend**: React 19.1.0
- **Styling**: Tailwind CSS 4.x with PostCSS
- **Fonts**: Geist font family (Sans and Mono) from Google Fonts
- **Linting**: ESLint 9.x with Next.js configuration
- **Development Environment**: mise for tool version management

## Project Structure
```
wanmachi/
├── src/
│   └── app/           # Next.js App Router structure
│       ├── page.tsx   # Main homepage component
│       ├── layout.tsx # Root layout with fonts and metadata
│       ├── globals.css # Global styles
│       └── favicon.ico
├── public/            # Static assets
├── package.json       # Project dependencies and scripts
├── tsconfig.json      # TypeScript configuration
├── eslint.config.mjs  # ESLint configuration
├── postcss.config.mjs # PostCSS configuration for Tailwind
├── next.config.ts     # Next.js configuration
└── mise.toml          # Tool version management
```

## Current State
- Freshly initialized Next.js project with default template
- Uses App Router structure (not Pages Router)
- Contains standard "Welcome to Next.js" homepage
- Ready for development with modern toolchain setup