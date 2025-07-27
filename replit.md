# replit.md

## Overview

This is a modern portfolio website for Shahbaz Khan, a Web Developer & Technical SEO Specialist. The application is built using a full-stack TypeScript architecture with React on the frontend and Express.js on the backend. The project implements a dark-themed, responsive portfolio with glassmorphism design elements, smooth animations, and modern UI components.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with clear separation between client, server, and shared code:

- **Frontend**: React with TypeScript, using Vite as the build tool
- **Backend**: Express.js server with TypeScript
- **Styling**: Tailwind CSS with custom glassmorphism theme and shadcn/ui components
- **Database**: Configured for PostgreSQL with Drizzle ORM (currently using in-memory storage)
- **Routing**: Wouter for client-side routing

## Key Components

### Frontend Architecture
- **React Application**: Single-page application with component-based architecture
- **UI Library**: shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS with custom dark theme and glassmorphism effects
- **State Management**: React Query for server state, local React state for UI
- **Animations**: Framer Motion for smooth animations and transitions
- **Navigation**: Custom navigation with smooth scrolling between sections

### Backend Architecture
- **Express Server**: RESTful API server with middleware setup
- **Storage**: Currently using in-memory storage with interface for database integration
- **Static Assets**: Vite development server integration for hot reloading
- **API Endpoints**: Resume download and contact form submission endpoints

### Component Structure
- **Sections**: Hero, About, Skills, Experience, Education, Projects, Contact
- **UI Components**: Reusable components from shadcn/ui library
- **Custom Components**: GlassCard for glassmorphism effects, custom Navigation
- **Layout**: Responsive design with mobile-first approach

## Data Flow

1. **Static Content**: Portfolio data is embedded in components (skills, experience, projects)
2. **Resume Download**: API endpoint serves PDF resume file
3. **Contact Form**: Form submission through API endpoint (ready for email integration)
4. **Navigation**: Client-side smooth scrolling to page sections
5. **Responsive Behavior**: Mobile-responsive navigation and layout adjustments

## External Dependencies

### Core Framework Dependencies
- **React**: Frontend framework with hooks and context
- **Express**: Backend web server framework
- **TypeScript**: Type safety across frontend and backend
- **Vite**: Build tool and development server

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Accessible component primitives
- **shadcn/ui**: Pre-built component library
- **Framer Motion**: Animation library
- **Lucide React**: Icon library

### Database and ORM
- **Drizzle ORM**: Type-safe database ORM
- **@neondatabase/serverless**: Neon database driver
- **PostgreSQL**: Database system (configured but not actively used)

### Development Tools
- **Wouter**: Lightweight routing library
- **React Query**: Server state management
- **class-variance-authority**: Component variant styling
- **clsx**: Conditional class name utility

## Deployment Strategy

### Build Process
- **Frontend Build**: Vite builds React application to `dist/public`
- **Backend Build**: esbuild bundles server code to `dist/index.js`
- **Development**: Concurrent development with Vite dev server and tsx for backend
- **Production**: Single Node.js process serving both API and static files

### Environment Configuration
- **Development**: `NODE_ENV=development` with hot reloading
- **Production**: `NODE_ENV=production` with optimized builds
- **Database**: `DATABASE_URL` environment variable for PostgreSQL connection
- **Static Assets**: Served from `dist/public` in production

### Scalability Considerations
- **Database Ready**: Drizzle ORM configured for easy PostgreSQL integration
- **API Structure**: RESTful endpoints ready for expansion
- **Component Architecture**: Modular design for easy feature additions
- **Performance**: Optimized builds with code splitting and lazy loading potential

The application is designed to be easily deployable on platforms like Replit, Vercel, or any Node.js hosting service, with the ability to scale from a simple portfolio to a more complex web application with database persistence and additional features.