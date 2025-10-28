# CornerTab Style Guide

## Brand Overview

CornerTab is a lifestyle brand for a harder future currency, with two distinct visual identities:

1. **CornerTab Main Brand**: Professional, Bitcoin-inspired, optimistic
2. **The Corner Sub-Brand**: Edgy, satirical, high-contrast neon aesthetic

---

## CornerTab Main Brand

### Color Palette

#### Primary Colors
- **Bitcoin Orange**: `#f7931a` (HSL: 28 95% 54%)
  - Primary CTA buttons
  - Brand accents and highlights
  - Links and interactive elements
  - Contrast ratio on white: 3.3:1 (AA Large)
  - Contrast ratio on dark: 8.1:1 (AAA)

- **Deep Charcoal**: `#1a1a1a` (HSL: 0 0% 10%)
  - Primary text on light backgrounds
  - Dark mode backgrounds
  - Headers and important copy
  - Contrast ratio on white: 14.8:1 (AAA)

- **Clean White**: `#ffffff` (HSL: 0 0% 100%)
  - Light mode backgrounds
  - Text on dark backgrounds
  - Card surfaces in light mode

#### Secondary Colors
- **Dark Gray**: `#333333` (HSL: 0 0% 20%)
  - Secondary text
  - Supporting UI elements
  - Contrast ratio on white: 12.6:1 (AAA)

- **Off-White**: `#f5f5f5` (HSL: 0 0% 96%)
  - Card backgrounds in light mode
  - Secondary surface colors
  - Muted sections

- **Muted Text**: `#666666` (HSL: 0 0% 40%)
  - Tertiary text
  - Captions and metadata
  - Contrast ratio on white: 5.7:1 (AA)

#### Borders & Inputs
- **Light Border**: `#e0e0e0` (HSL: 0 0% 88%)
  - Dividers and separators in light mode
  - Input borders in light mode

- **Dark Border**: `#333333` (HSL: 0 0% 20%)
  - Dividers and separators in dark mode
  - Input borders in dark mode

### Typography

#### Font Families
- **Sans-serif**: Inter Variable, Inter, system-ui, sans-serif
- **Monospace**: JetBrains Mono Variable, JetBrains Mono, monospace

#### Font Weights
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700

#### Type Scale
- **Headings**:
  - H1: 3.5rem - 4.5rem (56px - 72px) / Bold / Deep Charcoal or White
  - H2: 2rem - 2.5rem (32px - 40px) / Bold / Deep Charcoal or White
  - H3: 1.5rem - 1.75rem (24px - 28px) / Semibold / Deep Charcoal or White
  - H4: 1.25rem (20px) / Semibold / Deep Charcoal or White

- **Body Text**:
  - Large: 1.25rem (20px) / Regular / Dark Gray or White
  - Regular: 1rem (16px) / Regular / Dark Gray or White
  - Small: 0.875rem (14px) / Regular / Muted Text or White

### Component Styles

#### Buttons

**Primary Button** (Bitcoin Orange)
```css
background: #f7931a
color: #ffffff
padding: 12px 32px
font-weight: 600
border-radius: 8px
hover: background #ff9f33, transform translateY(-1px)
shadow: 0 10px 25px rgba(247, 147, 26, 0.3)
```

**Secondary Button** (Outline)
```css
background: transparent
border: 2px solid rgba(26, 26, 26, 0.2)
color: #1a1a1a (light mode) / #ffffff (dark mode)
padding: 12px 32px
font-weight: 600
border-radius: 8px
hover: background rgba(26, 26, 26, 0.05), border-color rgba(26, 26, 26, 0.4)
```

#### Cards
```css
background: #f5f5f5 (light) / #1a1a1a (dark)
border: 1px solid #e0e0e0 (light) / #333333 (dark)
border-radius: 8px
padding: 24px
hover: border-color #f7931a, transform translateY(-2px)
shadow: 0 20px 40px rgba(0, 0, 0, 0.1)
```

#### Forms & Inputs
```css
background: #ffffff (light) / #242424 (dark)
border: 2px solid #e0e0e0 (light) / #333333 (dark)
color: #1a1a1a (light) / #ffffff (dark)
padding: 12px 16px
border-radius: 6px
focus: border-color #f7931a, shadow 0 0 0 3px rgba(247, 147, 26, 0.1)
```

#### Links
```css
color: #f7931a
text-decoration: underline
text-underline-offset: 2px
font-weight: 600
hover: color #ff9f33, text-decoration-thickness 2px
```

### Accessibility Standards

- **Body Text**: Minimum 4.5:1 contrast ratio (WCAG AA)
- **Large Text** (18px+): Minimum 3:1 contrast ratio (WCAG AA)
- **Interactive Elements**: Clear focus states with 2px outline
- **Hover States**: Minimum 2-step contrast change
- **Color Independence**: Never rely on color alone; use underlines, bold, or icons

### Layout Examples

#### Hero Section
```
White/Dark background
Bitcoin orange badge
Large heading (56-72px, bold)
Subheading (20-24px, muted)
Primary CTA (Bitcoin orange button)
Secondary CTA (Outline button)
```

#### Product Card
```
Card background (#f5f5f5 / #1a1a1a)
Product image
Bitcoin orange badge/tag
Product title (20px, semibold)
Description (16px, muted)
Price (24px, bold, deep charcoal/white)
Add to Cart button (Bitcoin orange)
```

#### Article Layout
```
Full-width hero image
Article title (40-56px, bold)
Author byline (14px, muted) with Bitcoin orange accent
Body text (16px, 1.8 line-height)
Section headings (24-28px, semibold)
Pull quotes with Bitcoin orange left border
```

---

## The Corner Sub-Brand

### Color Palette

#### Primary Colors
- **True Black**: `#000000` (HSL: 0 0% 0%)
  - Background for all sections
  - Maximum contrast base

- **Neon Orange**: `#ff6b00` (HSL: 25 100% 50%)
  - Primary accents and CTAs
  - Headers and important text
  - Interactive elements
  - Neon glow effect

- **Pure White**: `#ffffff` (HSL: 0 0% 100%)
  - Body text
  - Maximum readability
  - Contrast ratio on black: 21:1 (AAA+)

#### Accent Colors
- **Acid Green**: `#39ff14` (HSL: 105 100% 54%)
  - Supporting accents
  - Author names and tags
  - Secondary interactive elements
  - Contrast ratio on black: 13.5:1 (AAA)

- **Electric Red**: `#ff0000` (HSL: 0 100% 50%)
  - Danger/warning states
  - High-priority indicators
  - Flame icons and alerts
  - Contrast ratio on black: 5.25:1 (AA)

#### UI Elements
- **Card Background**: `#0d0d0d` (HSL: 0 0% 5%)
  - Slightly lighter than true black
  - Card surfaces

- **Border**: `rgba(255, 107, 0, 0.3)`
  - Semi-transparent neon orange
  - Glowing borders

### Typography

#### Font Family
- **Monospace Only**: JetBrains Mono Variable, JetBrains Mono, monospace
  - Terminal/hacker aesthetic
  - All text uses monospace

#### Font Weights
- Regular: 400
- Semibold: 600
- Bold: 700

#### Type Scale
- **Headings**:
  - H1: 3rem - 4.5rem (48px - 72px) / Bold / Neon Orange with glow
  - H2: 2rem - 2.5rem (32px - 40px) / Bold / Neon Orange with glow
  - H3: 1.5rem (24px) / Bold / Acid Green with glow

- **Body Text**:
  - Regular: 0.875rem - 1rem (14px - 16px) / Regular / White
  - Small: 0.75rem (12px) / Semibold / White

### Special Effects

#### Neon Glow
```css
text-shadow: 
  0 0 10px currentColor,
  0 0 20px currentColor,
  0 0 30px currentColor
```

#### Border Glow
```css
box-shadow: 
  0 0 10px rgba(255, 107, 0, 0.5),
  0 0 20px rgba(255, 107, 0, 0.3)
hover: 
  0 0 15px rgba(255, 107, 0, 0.7),
  0 0 30px rgba(255, 107, 0, 0.5),
  0 0 45px rgba(255, 107, 0, 0.3)
```

#### Glitch Animation
```css
animation: glitch 3s infinite
keyframes:
  0%, 90%, 100%: no effect
  92%: text-shadow 2px 0 #ff6b00, -2px 0 #39ff14
  94%: text-shadow -2px 0 #ff6b00, 2px 0 #39ff14
```

### Component Styles

#### Primary Button (Neon Orange)
```css
background: #ff6b00
color: #000000
font: JetBrains Mono, bold
padding: 12px 32px
border-radius: 4px
box-shadow: 0 0 10px rgba(255, 107, 0, 0.5)
hover: background #ff7a1a, glow-intensify
```

#### Secondary Button (Acid Green Outline)
```css
background: transparent
border: 2px solid #39ff14
color: #39ff14
font: JetBrains Mono, bold
padding: 12px 32px
border-radius: 4px
hover: background rgba(57, 255, 20, 0.1)
```

#### Featured Card
```css
background: rgba(0, 0, 0, 0.8)
border: 2px solid rgba(255, 107, 0, 0.3)
border-radius: 8px
padding: 24px
hover: border-color #ff6b00, glow-effect
text: white, JetBrains Mono
headings: neon orange with glow
```

#### Badge
```css
background: rgba(255, 107, 0, 0.2)
border: 1px solid rgba(255, 107, 0, 0.5)
color: #ff6b00
font: JetBrains Mono, bold
padding: 4px 12px
border-radius: 4px
```

#### Input Field
```css
background: #000000
border: 2px solid rgba(255, 107, 0, 0.3)
color: #ffffff
font: JetBrains Mono
padding: 12px 16px
placeholder: rgba(255, 107, 0, 0.5)
focus: border-color #ff6b00, ring 2px rgba(255, 107, 0, 0.2)
```

### Accessibility Standards

- **Maximum Contrast**: All text white on true black (21:1)
- **Neon Effects**: Pure decorative, never essential for meaning
- **Alt Indicators**: Bold + color for all important elements
- **Focus States**: 2px solid neon orange outline
- **Colorblind Safe**: 
  - Deuteranopia: ✓ (orange + green separation)
  - Protanopia: ✓ (bright + dark separation)
  - Tritanopia: ✓ (warm + cool separation)

### Layout Examples

#### Corner Hero Section
```
True black background with red gradient overlay
Neon orange warning badge
Large glitching header (72px, neon orange)
White body text (20px, monospace)
Neon orange CTA button with glow
Acid green secondary button
```

#### Featured Post Card
```
Black background with slight transparency
Neon orange border with glow
Category badge (neon orange)
Title (20px, neon orange, glowing)
Body text (14px, white, monospace)
Author name (acid green, bold)
Tags (acid green outline badges)
Stats with electric red flame icon
```

#### Warning Section
```
Black background with neon orange tint
Electric red warning icon with glow
Neon orange heading with glow
White monospace body text
Electric red highlighted text
```

---

## Color Contrast Ratios

### CornerTab Main Brand

| Foreground | Background | Ratio | WCAG Level | Use Case |
|------------|------------|-------|------------|----------|
| #1a1a1a | #ffffff | 14.8:1 | AAA | Body text (light mode) |
| #ffffff | #0f0f0f | 19.5:1 | AAA | Body text (dark mode) |
| #f7931a | #ffffff | 3.3:1 | AA Large | CTA buttons (light) |
| #f7931a | #1a1a1a | 8.1:1 | AAA | Accents (dark mode) |
| #333333 | #ffffff | 12.6:1 | AAA | Secondary text (light) |
| #666666 | #ffffff | 5.7:1 | AA | Muted text (light) |

### The Corner Sub-Brand

| Foreground | Background | Ratio | WCAG Level | Use Case |
|------------|------------|-------|------------|----------|
| #ffffff | #000000 | 21:1 | AAA+ | All body text |
| #ff6b00 | #000000 | 8.3:1 | AAA | Headers and accents |
| #39ff14 | #000000 | 13.5:1 | AAA | Secondary accents |
| #ff0000 | #000000 | 5.25:1 | AA | Warnings and alerts |
| #000000 | #ff6b00 | 8.3:1 | AAA | Button text |

---

## Design Tokens (CSS Custom Properties)

### CornerTab Main Brand
```css
/* Light Mode */
--background: 0 0% 100%;
--foreground: 0 0% 10%;
--primary: 28 95% 54%;        /* Bitcoin Orange */
--primary-foreground: 0 0% 100%;
--secondary: 0 0% 20%;
--secondary-foreground: 0 0% 96%;
--muted: 0 0% 96%;
--muted-foreground: 0 0% 40%;
--border: 0 0% 88%;
--input: 0 0% 88%;
--ring: 28 95% 54%;

/* Dark Mode */
--background: 0 0% 6%;
--foreground: 0 0% 100%;
--primary: 28 95% 56%;
--primary-foreground: 0 0% 0%;
--secondary: 0 0% 20%;
--secondary-foreground: 0 0% 100%;
--muted: 0 0% 14%;
--muted-foreground: 0 0% 70%;
--border: 0 0% 20%;
--input: 0 0% 14%;
--ring: 28 95% 56%;
```

### The Corner Sub-Brand
```css
--corner-background: 0 0% 0%;      /* True Black */
--corner-foreground: 0 0% 100%;    /* Pure White */
--corner-card: 0 0% 5%;
--corner-primary: 25 100% 50%;     /* Neon Orange #ff6b00 */
--corner-accent: 105 100% 54%;     /* Acid Green #39ff14 */
--corner-red: 0 100% 50%;          /* Electric Red #ff0000 */
--corner-border: 25 100% 30%;
```

---

## Implementation Notes

### CSS Classes

**Main Brand**
- `.btn-premium` - Bitcoin orange button with hover effect
- `.card-clean` - High-contrast card with hover state
- `.link-bitcoin` - Underlined Bitcoin orange link
- `.gradient-text` - Bitcoin orange gradient text
- `.hover-lift` - Lift animation on hover
- `.input-bitcoin` - Form input with Bitcoin orange focus

**The Corner**
- `.corner-theme` - Apply Corner color scheme
- `.corner-glow` - Neon glow text effect
- `.corner-border-glow` - Glowing border effect
- `.corner-glitch` - Glitch animation for headers

### Responsive Considerations

- Maintain minimum 16px font size on mobile
- Reduce heading sizes by 25-35% on small screens
- Ensure touch targets minimum 44x44px
- Preserve contrast ratios across all screen sizes
- Reduce glow intensity on low-power devices

### Dark Mode Strategy

**CornerTab Main**: Inverted backgrounds with same accent colors
- Light backgrounds → Dark backgrounds
- Dark text → White text
- Bitcoin orange remains consistent
- Borders become lighter/more visible

**The Corner**: No dark mode toggle needed (always dark)
- Pure black background always
- Neon effects work best on black
- No inversion needed

---

## Brand Voice & Tone

### CornerTab Main
- **Professional yet approachable**
- **Optimistic and forward-thinking**
- **Builder-focused and solution-oriented**
- Tone: Confident, encouraging, aspirational

### The Corner
- **Satirical and irreverent**
- **Unfiltered and direct**
- **Meme-heavy and edgy**
- Tone: Biting, humorous, provocative

---

## Usage Guidelines

### DO:
✅ Use Bitcoin orange (#f7931a) for all primary CTAs in main brand
✅ Ensure all body text is white on dark OR dark on white
✅ Underline links in addition to color coding
✅ Use high contrast borders (2px minimum) on form inputs
✅ Apply neon glow effects generously in The Corner
✅ Use monospace fonts exclusively in The Corner
✅ Test all colors for colorblind accessibility

### DON'T:
❌ Use light gray text on light backgrounds
❌ Rely on color alone for information
❌ Mix main brand and Corner aesthetics
❌ Use neon effects in the main brand
❌ Apply subtle contrast changes (always bold)
❌ Use serif or script fonts
❌ Reduce hover state contrast below 2-step change

---

## File Reference

- Main CSS: `/src/index.css`
- Tailwind Config: `/tailwind.config.ts`
- Main Page: `/src/pages/Index.tsx`
- Corner Page: `/src/pages/Corner.tsx`

---

*Last Updated: October 28, 2025*
*Version: 2.0 - Bitcoin Orange & Neon Rebrand*
