# Admin UI Plan For Portfolio

## Goal
Build a protected admin area inside the existing Next.js app so you can sign in and manage:
- Projects page content
- Contact page content and settings
- Blog posts (including publish workflow)

## Product Decisions
- Single admin account only
- Database-backed content management
- Admin UI inside same app at `/admin`
- Blog v1 features:
  - Draft and publish status
  - Tags and categories
  - Cover images
  - Editor support for rich text and markdown compatibility
  - Comments with moderation
- Contact page admin features:
  - Intro text and contact details
  - Form labels and placeholders
  - Recipient email address
  - Auto-reply template

## Recommended Stack
- NextAuth (credentials provider) for authentication
- Prisma + PostgreSQL for data and CRUD
- Zod for input validation
- Next.js App Router route handlers or server actions for admin operations

## Implementation Roadmap

### Phase 1: Foundations
1. Add authentication for one admin user.
2. Protect all admin routes under `/admin`.
3. Add Prisma and PostgreSQL connection.
4. Create core schema entities:
   - User (admin)
   - Project
   - BlogPost
   - Tag
   - PostTag (join)
   - Comment
   - SiteSetting
   - ContactTemplate
5. Add shared Zod validation schemas for all writes.

### Phase 2: Admin APIs and Data Operations
1. Build Projects CRUD operations.
2. Build Blog CRUD operations with:
   - Draft and publish flow
   - Slug generation and uniqueness
   - Tag and category assignment
   - Cover image URL field
3. Build Contact settings CRUD operations for editable copy and email config.
4. Build Comment moderation operations:
   - Approve
   - Hide
   - Delete

### Phase 3: Public Pages Migration
1. Replace hardcoded Projects data with published DB queries.
2. Add public blog routes:
   - `/blog`
   - `/blog/[slug]`
3. Load editable Contact page content/settings from DB.
4. Keep current visual style and component patterns.

### Phase 4: Admin Interface
1. Create `/admin` dashboard with quick stats and links.
2. Add Projects management screens:
   - List
   - Create
   - Edit
   - Delete
   - Publish status controls
3. Add Blog management screens:
   - List by status
   - New post
   - Edit post
   - Taxonomy controls
4. Add Contact settings editor screen.
5. Add Comments moderation screen with filters.

### Phase 5: Quality and Launch
1. Add seed script for initial admin user and sample content.
2. Add tests:
   - Validation and helpers
   - Protected routes
   - CRUD integration
3. Run lint and typecheck.
4. Perform manual QA on desktop and mobile.

## Key Files To Reuse
- `app/projects/page.tsx`
- `components/ProjectCard.tsx`
- `app/contact/page.tsx`
- `components/ContactForm.tsx`
- `app/api/contact/route.ts`
- `components/Navbar.tsx`

## New Files and Areas To Add
- `app/admin/*` (dashboard and management screens)
- `app/blog/page.tsx`
- `app/blog/[slug]/page.tsx`
- `app/api/auth/[...nextauth]/route.ts`
- `middleware.ts`
- `prisma/schema.prisma`
- `prisma/seed.ts`
- `lib/auth.ts`
- `lib/db.ts`
- `lib/validation.ts`

## Verification Checklist
1. Sign-in works for the admin account.
2. Unauthenticated users cannot access admin pages or admin APIs.
3. Project create/edit/delete/publish updates are visible on public Projects page.
4. Draft blog posts stay private; published posts appear on blog list/detail pages.
5. Tags/categories and cover image behavior works as expected.
6. Contact settings updates are reflected in UI and contact email flow.
7. Comment moderation state changes are reflected publicly.
8. Lint, typecheck, and tests pass.
