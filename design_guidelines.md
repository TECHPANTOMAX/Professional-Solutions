# Design Guidelines: Professional Solutions – Accounting & Compliance

## Design Approach
**Reference-Based Approach**: Draw inspiration from premium B2B SaaS platforms like Stripe, Freshbooks, and Zoho, emphasizing trust, professionalism, and modern aesthetics tailored for the Indian MSME market.

## Core Design Principles
- Premium corporate aesthetic with trust and authority
- Modern glassmorphism and subtle gradient treatments
- Professional yet approachable for small business owners
- Information-rich sections showcasing expertise

## Typography System
**Font Families** (via Google Fonts CDN):
- **Primary (Headings)**: Poppins (500, 600, 700)
- **Secondary (Body)**: Inter (400, 500, 600)

**Hierarchy**:
- H1 (Hero): text-5xl md:text-6xl lg:text-7xl, font-bold
- H2 (Section): text-4xl md:text-5xl, font-semibold
- H3 (Card/Feature): text-2xl md:text-3xl, font-semibold
- Body Large: text-lg md:text-xl, leading-relaxed
- Body: text-base, leading-relaxed
- Small/Caption: text-sm

## Layout System
**Spacing Primitives**: Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Section padding: py-16 md:py-24 lg:py-32
- Container: max-w-7xl mx-auto px-6 md:px-8
- Card spacing: p-8 md:p-10
- Gap utilities: gap-6, gap-8, gap-12

## Component Library

### Navigation
- Sticky header with backdrop blur (backdrop-blur-lg bg-white/80)
- Logo + horizontal menu (desktop) with CTA button
- Hamburger menu (mobile) with slide-in drawer
- Smooth scroll to sections

### Hero Section
**Layout**: Full-width with gradient background overlay
- **Large Hero Image**: Yes - use professional Indian business/office imagery showing collaboration, success, or modern workspace
- Image with gradient overlay (blue to white fade)
- Centered content with max-w-4xl
- H1 headline + subheadline + dual CTAs
- Trust indicators below (client count, years, certifications)
- Buttons on images: Use backdrop-blur-md bg-white/20 border-white/30 for glass effect

### Services Section
- 2-column grid (md:grid-cols-2 lg:grid-cols-3)
- Glassmorphism cards: backdrop-blur-md bg-white/60 border border-white/40
- Icon (from Heroicons) + title + description + "Learn More" link
- Hover: transform scale-105, shadow-xl, smooth transition-all duration-300
- Services: GST Filing, Income Tax, Bookkeeping, Payroll, Audit, Business Registration

### About/Why Choose Us
- 2-column layout: Left (content) + Right (stats/image)
- 4 key trust factors in grid
- Numbers/stats with counter animation feel (large bold figures)

### Team Section (if applicable)
- 3-4 column grid of team cards
- Professional headshots (circular with border)
- Name + designation + credentials (CA, CS, etc.)

### Testimonials
- 3-column grid of client testimonial cards
- Company logo + quote + client name/business
- Glassmorphism treatment

### Contact Section
- 2-column split: Form (left) + Info/Map placeholder (right)
- Form fields: Name, Email, Phone, Service Interest (dropdown), Message
- Validation states with clear error messages
- Submit button with loading state

### Footer
- 4-column layout: About, Services, Quick Links, Contact Info
- Newsletter signup form
- Social media icons (LinkedIn, Twitter, Instagram)
- Trust badges (ISO, CA certified, etc.)
- Copyright + privacy links

## Glassmorphism Implementation
```
backdrop-blur-lg bg-white/70 
border border-white/50 
shadow-xl shadow-blue-500/10
rounded-2xl
```

## Animations
- Hover elevations: hover:shadow-2xl hover:-translate-y-1
- Smooth transitions: transition-all duration-300
- Fade-in on scroll (implement with Intersection Observer)
- Minimal use - only on cards and buttons

## Icons
**Library**: Heroicons (via CDN)
- Use outline style for nav/cards
- Use solid style for buttons/CTAs

## Images Section
**Hero Image**: Professional Indian office environment, collaboration, or success-oriented business setting with modern aesthetic. Overlay with gradient (blue-600/80 to transparent)

**Services Icons**: Use Heroicons - DocumentText, Calculator, CurrencyRupee, Users, ClipboardDocument, Building

**Team Photos**: Professional headshots with neutral backgrounds

**Testimonial Logos**: Client company logos in grayscale, color on hover

## Responsive Breakpoints
- Mobile: base (single column, stacked)
- Tablet: md: (2-column grids)
- Desktop: lg: (3-4 column grids, full layouts)