# Portfolio Site - AI Coding Agent Instructions

## Project Overview
Full-stack TypeScript portfolio website with React frontend and Express backend. Originally built on Replit, designed to showcase Kevin Rodriguez's software engineering work through interactive animations and smooth user experience.

## Architecture & Structure

### Monorepo Layout
- **client/**: React SPA with Vite build system
- **server/**: Express.js API server with custom Vite middleware for dev mode
- **shared/**: Common types and database schemas (Drizzle ORM)
- **attached_assets/**: Static assets imported via `@assets` alias

### Development vs Production Split
The app behaves differently based on `NODE_ENV`:
- **Development**: Vite middleware serves frontend with HMR ([server/vite.ts](server/vite.ts#L21-L39))
- **Production**: Express serves pre-built static files from `dist/public/`

Server always runs on port from `process.env.PORT` (default 5000) - other ports are firewalled.

## Path Aliases (Critical)
Three aliases configured in both [vite.config.ts](vite.config.ts#L20-L24) and [tsconfig.json](tsconfig.json#L18-L21):
```typescript
"@/*" → "./client/src/*"      // Frontend components/utilities
"@shared/*" → "./shared/*"    // Shared schemas/types
"@assets/*" → "./attached_assets/*"  // Static images/files
```
**Always use these aliases** - never use relative imports across these boundaries.

## Key Workflows

### Running the App
```bash
npm run dev        # Development with HMR
npm run build      # Build both client and server for production
npm start          # Run production build
npm run check      # TypeScript type checking
npm run db:push    # Push Drizzle schema changes to database
```

### Database Setup
- Uses Drizzle ORM with Neon PostgreSQL (serverless)
- Schema defined in [shared/schema.ts](shared/schema.ts) with Zod validation
- Currently has in-memory fallback storage ([server/storage.ts](server/storage.ts)) - `IStorage` interface ready for database implementation
- Run `npm run db:push` after schema changes

## Component Patterns

### shadcn/ui Components
All UI primitives live in [client/src/components/ui/](client/src/components/ui/) - these are **not to be edited** directly. They're vendor components managed by shadcn CLI (via [components.json](components.json)).

Custom page sections: [hero-section.tsx](client/src/components/hero-section.tsx), [about-section.tsx](client/src/components/about-section.tsx), etc.

### Styling Conventions
- **Tailwind CSS** with CSS variables for theming ([tailwind.config.ts](tailwind.config.ts))
- Custom animations: `animate-float` used throughout for floating elements
- Color system: Use semantic tokens (`primary`, `muted-foreground`, etc.) not raw colors
- Responsive: Mobile-first breakpoints (`md:`, `lg:` prefixes)

### Animation Pattern
AOS (Animate On Scroll) library initialized in [App.tsx](client/src/App.tsx#L22-L27):
```tsx
data-aos="fade-up"           // Add to elements for scroll animations
data-aos-delay="200"         // Stagger animations
```
Must call `AOS.refresh()` after dynamic content changes.

## Routing
- Uses **wouter** (not React Router) - see [App.tsx](client/src/App.tsx#L12-L17)
- Single-page app with smooth scroll navigation via [bubble-navigation.tsx](client/src/components/bubble-navigation.tsx)
- Routes defined in `<Switch>` component with `/` as home, catch-all for 404

## API Development
Backend routes go in [server/routes.ts](server/routes.ts#L5-L15):
- **Always prefix with `/api`** (non-API routes served by Vite/static middleware)
- Use `storage` interface for data operations (currently in-memory, ready for DB)
- Express server created via `registerRoutes()` returns `Server` instance for WebSocket support

## Asset Management
Import assets via `@assets` alias:
```tsx
import yourPhoto from '@assets/chibi_icon.png'  // See hero-section.tsx
```
Never use public paths - Vite handles bundling.

## TypeScript Configuration
Strict mode enabled with `allowImportingTsExtensions` for `.ts` imports in Vite. No emitted output - Vite/ESBuild handle compilation. Includes client, server, and shared in same config.

## Common Pitfalls
1. **Don't modify shadcn/ui components** in [client/src/components/ui/](client/src/components/ui/) - extend them instead
2. **Port 5000 only** - the app must bind to `process.env.PORT` for Replit compatibility
3. **Path aliases required** - cross-boundary imports fail with relative paths
4. **AOS initialization** - call `AOS.refresh()` when adding dynamic content
5. **API routes must be /api/** - otherwise Vite middleware catches them
