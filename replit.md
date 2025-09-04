# Kevin Rodriguez - Portfolio Website

## Overview

This is a modern, full-stack portfolio website for Kevin Rodriguez, a software engineer specializing in React development, game development, and cloud technologies. The application showcases projects, skills, and provides contact functionality through an elegant, animated interface.

The project is built as a single-page application with a React frontend and Express.js backend, designed to highlight technical expertise and professional experience through interactive demonstrations and comprehensive project showcases.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent, professional design
- **Animations**: AOS (Animate On Scroll) library for smooth scroll-triggered animations
- **State Management**: TanStack Query (React Query) for server state management
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for full-stack type safety
- **Development**: TSX for TypeScript execution in development
- **Production**: ESBuild for efficient server-side bundling
- **Storage**: Abstract storage interface with in-memory implementation (MemStorage class)

### Component Design
- **UI Components**: Radix UI primitives with custom styling for accessibility and consistency
- **Layout**: Responsive design with mobile-first approach
- **Navigation**: Custom bubble navigation system with smooth scrolling
- **Forms**: React Hook Form with Zod validation for type-safe form handling

### Database Integration
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Database**: Neon Database (serverless PostgreSQL) with connection pooling
- **Migrations**: Drizzle-kit for database schema management
- **Schema**: Centralized schema definitions in shared directory for type consistency

### Development Workflow
- **Hot Reload**: Vite HMR for instant development feedback
- **Type Checking**: Strict TypeScript configuration across frontend and backend
- **Path Aliases**: Configured for clean imports (@/ for client, @shared/ for shared code)
- **Error Handling**: Custom error overlay for development environment

### Production Deployment
- **Static Assets**: Client build output served from Express server
- **Server**: Bundled Node.js application with external package dependencies
- **Performance**: Optimized builds with tree-shaking and code splitting

## External Dependencies

### Core Frameworks
- **React Ecosystem**: React 18, React DOM, React Hook Form, TanStack Query for frontend functionality
- **Backend**: Express.js with TypeScript support via TSX

### UI and Styling
- **Design System**: Radix UI components for accessibility-compliant primitives
- **Styling**: Tailwind CSS for utility-first styling approach
- **Icons**: Font Awesome via CDN for consistent iconography
- **Typography**: Google Fonts (Inter) for modern, readable typography

### Database and ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **ORM**: Drizzle ORM with Zod integration for type-safe database operations
- **Session Management**: Connect-pg-simple for PostgreSQL-backed sessions

### Development Tools
- **Build Tools**: Vite for frontend, ESBuild for backend bundling
- **Animation**: AOS (Animate On Scroll) library for scroll-triggered animations
- **Development**: Replit-specific plugins for enhanced development experience

### Utilities
- **Validation**: Zod for runtime type validation and schema definition
- **Styling Utilities**: clsx and tailwind-merge for conditional styling
- **Date Handling**: date-fns for date manipulation and formatting
- **Carousel**: Embla Carousel React for interactive project showcases