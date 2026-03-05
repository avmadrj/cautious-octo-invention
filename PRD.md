# Ius Gentium UFSC Digital Research Library

A comprehensive digital research portal for international law studies, serving as an academic resource hub for students, researchers, and faculty at the Federal University of Santa Catarina and the broader international law community.

**Experience Qualities**:
1. **Scholarly** - Interface conveys academic rigor and institutional credibility through structured layouts and professional typography
2. **Accessible** - Information architecture prioritizes easy discovery and navigation through clear categorization and robust search
3. **Authoritative** - Design communicates trust and expertise appropriate for a university research group portal

**Complexity Level**: Light Application (multiple features with basic state)
This is a structured information portal with search, filtering, and multi-page navigation. It requires persistent data management for resources but doesn't need complex user workflows or advanced state management beyond basic CRUD operations.

## Essential Features

### Homepage & Introduction
- **Functionality**: Landing page introducing Ius Gentium UFSC and the digital library
- **Purpose**: Orient new visitors and provide quick access to major sections
- **Trigger**: User navigates to root URL
- **Progression**: View hero section with group description → Browse featured resources → Navigate to specific category or search
- **Success criteria**: Clear value proposition visible above fold, all major sections accessible within two clicks

### Resource Database & Browsing
- **Functionality**: Structured collection of 120+ international law resources organized by category, featuring specialized regional journals and country-specific institutes from around the world
- **Purpose**: Provide comprehensive global access to curated academic materials from leading institutions, with particular emphasis on regional perspectives from Latin America, Asia, Africa, Europe, and other geographical areas
- **Trigger**: User selects a category from navigation or homepage
- **Progression**: Select category → View filtered resource list → Read resource details → Click external link to access resource
- **Success criteria**: All resources properly categorized, metadata complete, external links functional, regional diversity well-represented

### Advanced Filtering
- **Functionality**: Multi-dimensional filtering by category, resource type, and institution
- **Purpose**: Allow researchers to quickly narrow down relevant materials
- **Trigger**: User applies filter controls on resource pages
- **Progression**: View all resources → Select filter criteria → View filtered results → Clear or modify filters
- **Success criteria**: Filters work in combination, results update immediately, active filters clearly indicated

### Search Functionality
- **Functionality**: Full-text search across resource titles, descriptions, keywords, institutions, and categories
- **Purpose**: Enable quick discovery without browsing hierarchies
- **Trigger**: User enters query in search bar
- **Progression**: Enter search term → View matching results → Refine query or navigate to resource
- **Success criteria**: Search returns relevant results within 100ms, handles partial matches, displays result count

### Resource Management
- **Functionality**: Ability to add, edit, and organize resources through the interface
- **Purpose**: Keep library current without code changes
- **Trigger**: Admin/researcher wants to update library contents
- **Progression**: Access resource form → Enter metadata → Save → Resource appears in appropriate category
- **Success criteria**: New resources immediately visible, validation prevents incomplete entries

## Edge Case Handling

- **Empty Search Results**: Display helpful message suggesting alternative search terms or browse by category
- **Broken External Links**: Visual indication (could add link checking in future), user can report issues
- **Missing Resource Metadata**: Graceful degradation - show available fields, mark incomplete entries
- **No Resources in Category**: Display explanatory message encouraging contributions
- **Very Long Resource Lists**: Implement pagination or virtual scrolling for performance
- **Mobile Navigation**: Collapsible sidebar, touch-friendly controls, readable text sizes

## Design Direction

The design should evoke the atmosphere of a prestigious university library - refined, timeless, and intellectually serious. It should feel like entering a well-organized academic institution where knowledge is carefully curated and presented. The interface should inspire confidence in the quality and authority of the resources while maintaining approachable usability.

## Color Selection

The palette draws from classical academic institutions - deep scholarly blues, warm parchment tones, and rich accents that reference legal tradition.

- **Primary Color**: Deep Academic Blue `oklch(0.35 0.09 250)` - Conveys institutional authority, trust, and scholarly tradition
- **Secondary Colors**: 
  - Warm Parchment `oklch(0.96 0.015 85)` - Evokes archival materials and traditional scholarship
  - Soft Slate `oklch(0.88 0.01 240)` - Provides subtle backgrounds for content sections
- **Accent Color**: Scholarly Gold `oklch(0.65 0.12 75)` - Highlights important elements and calls-to-action, references academic achievement
- **Foreground/Background Pairings**:
  - Primary (Deep Blue): White text `oklch(0.98 0 0)` - Ratio 8.2:1 ✓
  - Background (Warm Parchment): Dark Slate text `oklch(0.25 0.02 240)` - Ratio 12.5:1 ✓
  - Accent (Scholarly Gold): Dark Blue text `oklch(0.25 0.05 250)` - Ratio 6.8:1 ✓
  - Cards (White): Primary text `oklch(0.30 0.08 250)` - Ratio 9.5:1 ✓

## Font Selection

Typography should balance scholarly gravitas with modern readability, using typefaces that work well for both display hierarchy and extended reading.

- **Typographic Hierarchy**:
  - H1 (Page Titles): Crimson Pro SemiBold/42px/tight leading - Scholarly serif for authority
  - H2 (Section Headings): Crimson Pro SemiBold/32px/normal leading - Maintains hierarchy
  - H3 (Resource Titles): Inter SemiBold/20px/snug leading - Clean contrast for scannable content
  - Body (Descriptions): Inter Regular/16px/relaxed leading (1.6) - Optimized for reading
  - Small (Metadata): Inter Regular/14px/normal leading - Clear without dominance
  - Navigation: Inter Medium/15px/normal - Confident wayfinding

## Animations

Animations should be subtle and purposeful, reinforcing the sense of a well-organized space where information reveals itself gracefully. Transitions should feel considered rather than flashy - like opening a carefully indexed catalog drawer or turning to a bookmarked page.

Key moments:
- Page transitions: Subtle fade with 300ms duration
- Resource cards: Gentle lift on hover with soft shadow
- Search results: Staggered fade-in for perceived performance
- Filter application: Smooth height transitions
- Navigation drawer: Smooth slide with backdrop fade
- External link indication: Subtle icon animation on hover

## Component Selection

- **Components**:
  - `Card` (with hover states) - Resource display, featured items, category overview
  - `Input` (with search icon) - Search bar with clear button
  - `Select` - Filter dropdowns for category, type, institution
  - `Button` (primary and ghost variants) - CTAs, navigation, clear filters
  - `Sheet` or `Sidebar` - Mobile navigation drawer, desktop persistent sidebar
  - `Badge` - Resource type indicators, category tags
  - `Separator` - Visual section breaks
  - `ScrollArea` - Long resource lists, sidebar content
  - `Breadcrumb` - Navigation context on inner pages
  - `Dialog` - Add/edit resource forms (if implementing admin features)
  
- **Customizations**:
  - Custom resource card layout with metadata grid
  - Search bar with integrated icon and clear button
  - Category navigation with icon integration from Phosphor
  - Featured resource carousel/grid on homepage
  
- **States**:
  - Buttons: Subtle shadow lift on hover, slight scale on active, muted when disabled
  - Cards: Border glow transition on hover, subtle shadow elevation
  - Inputs: Border color shift on focus, icon color change
  - Links: Underline decoration on hover, color transition
  
- **Icon Selection**:
  - `Books` - Library/resource collections
  - `MagnifyingGlass` - Search functionality
  - `Scales` - Legal/justice theme
  - `GraduationCap` - Academic/teaching materials
  - `BookOpen` - Journals/publications
  - `Bank` - Institutions/organizations
  - `Gavel` - Courts/jurisprudence
  - `Globe` - International organizations
  - `FilePlus` - Add resource
  - `Funnel` - Filter controls
  - `ArrowUpRight` - External links
  
- **Spacing**:
  - Container padding: px-6 md:px-8 lg:px-12
  - Section gaps: gap-8 md:gap-12 lg:gap-16
  - Card padding: p-6
  - Grid gaps: gap-4 md:gap-6
  - Element spacing: space-y-4 for vertical stacks
  
- **Mobile**:
  - Collapsible hamburger navigation with Sheet component
  - Single column resource grid on mobile, 2 cols on tablet, 3+ on desktop
  - Stack filters vertically on mobile, horizontal on desktop
  - Touch-friendly button sizes (min 44px)
  - Readable 16px base font size on mobile
  - Fixed search bar at top on mobile for easy access
