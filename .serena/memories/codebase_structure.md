# Codebase Structure and Architecture (Updated)

## Directory Layout
```
wanmachi/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx         # Root layout with fonts and metadata
│   │   ├── page.tsx           # Homepage with user profile
│   │   ├── login/page.tsx     # Login page (Server Component)
│   │   └── signup/page.tsx    # Signup page (Server Component)
│   ├── components/            # Reusable UI components
│   │   ├── ui/               # Basic UI components
│   │   │   ├── Button.tsx    # Reusable button component
│   │   │   └── Input.tsx     # Reusable input component
│   │   └── layout/           # Layout-related components
│   ├── features/             # Feature-specific components
│   │   └── auth/            # Authentication feature
│   │       ├── components/   # Auth-specific components
│   │       │   ├── LoginForm.tsx     # Login form (Client Component)
│   │       │   ├── SignupForm.tsx    # Signup form (Client Component)
│   │       │   └── UserProfile.tsx   # User profile display
│   │       ├── hooks/        # Auth-specific hooks (if needed)
│   │       └── types/        # Auth-related type definitions
│   ├── hooks/                # Global custom hooks
│   │   └── useAuth.ts        # Authentication state management
│   ├── lib/                  # External library configurations
│   │   └── supabase/         # Supabase client setup
│   │       ├── client.ts     # Browser client (@supabase/ssr)
│   │       └── server.ts     # Server client (@supabase/ssr)
│   └── middleware.ts         # Next.js middleware (auth protection)
├── .env.local                # Environment variables (Supabase config)
├── public/                   # Static assets
├── package.json              # Dependencies including Supabase packages
└── configuration files       # TypeScript, Biome, Next.js configs
```

## Architecture Patterns

### Feature-Based Organization
- **`components/`**: Reusable across multiple features/pages
- **`features/`**: Feature-specific components, even if page-specific
- **`hooks/`**: Global hooks that might be used across features
- **`features/*/hooks/`**: Feature-specific hooks

### Authentication System
- **Supabase Auth**: Email/password authentication
- **SSR Support**: Server and client components with @supabase/ssr
- **Auto Protection**: Middleware redirects unauthenticated users
- **Session Management**: Persistent auth state across refreshes

### Component Classification
- **Server Components**: Pages (login, signup, home) - static layouts
- **Client Components**: Interactive forms and auth hooks
- **Middleware**: Authentication checks and redirects

## Current Implementation Status
- ✅ Supabase Auth integration complete
- ✅ Feature-based directory structure implemented
- ✅ Authentication flow (signup/login/logout) working
- ✅ Auto-redirect for protected pages
- ✅ Reusable UI components (Button, Input) created
- ✅ Code quality tools (Biome) configured and passing

## Key Dependencies
- **@supabase/supabase-js**: Core Supabase client
- **@supabase/ssr**: Next.js App Router integration
- **Next.js 15**: App Router with React 19
- **TypeScript**: Strict mode enabled
- **Tailwind CSS**: Utility-first styling
- **Biome**: Linting and formatting