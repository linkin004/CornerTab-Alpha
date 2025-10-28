# CornerTab Color Swatches

Quick reference guide for all brand colors with hex codes, HSL values, and use cases.

---

## 🧡 CornerTab Main Brand

### Primary Colors

#### Bitcoin Orange
```
HEX: #f7931a
RGB: 247, 147, 26
HSL: 28, 95%, 54%
```
**Use for:**
- Primary CTA buttons
- Links
- Interactive elements
- Brand accents
- Focus states

**Contrast:**
- On white: 3.3:1 (AA Large) ✅
- On black: 8.1:1 (AAA) ✅

---

#### Deep Charcoal
```
HEX: #1a1a1a
RGB: 26, 26, 26
HSL: 0, 0%, 10%
```
**Use for:**
- Body text (light mode)
- Headers (light mode)
- Dark mode backgrounds
- Dark mode cards

**Contrast:**
- On white: 14.8:1 (AAA) ✅

---

#### Clean White
```
HEX: #ffffff
RGB: 255, 255, 255
HSL: 0, 0%, 100%
```
**Use for:**
- Light mode backgrounds
- Body text (dark mode)
- Headers (dark mode)
- Button text on Bitcoin orange

**Contrast:**
- On #1a1a1a: 14.8:1 (AAA) ✅
- On #0f0f0f: 19.5:1 (AAA) ✅

---

### Secondary Colors

#### Dark Gray
```
HEX: #333333
RGB: 51, 51, 51
HSL: 0, 0%, 20%
```
**Use for:**
- Secondary text
- Dark mode borders
- Supporting UI elements
- Icons

**Contrast:**
- On white: 12.6:1 (AAA) ✅

---

#### Off-White
```
HEX: #f5f5f5
RGB: 245, 245, 245
HSL: 0, 0%, 96%
```
**Use for:**
- Light mode card backgrounds
- Light mode muted sections
- Sidebar backgrounds
- Secondary surfaces

---

#### Muted Text
```
HEX: #666666
RGB: 102, 102, 102
HSL: 0, 0%, 40%
```
**Use for:**
- Tertiary text
- Captions
- Metadata
- Timestamps

**Contrast:**
- On white: 5.7:1 (AA) ✅

---

### Borders & Inputs

#### Light Border
```
HEX: #e0e0e0
RGB: 224, 224, 224
HSL: 0, 0%, 88%
```
**Use for:**
- Dividers (light mode)
- Card borders (light mode)
- Input borders (light mode)

---

#### Dark Border
```
HEX: #333333
RGB: 51, 51, 51
HSL: 0, 0%, 20%
```
**Use for:**
- Dividers (dark mode)
- Card borders (dark mode)
- Input borders (dark mode)

---

## 🔥 The Corner Sub-Brand

### Primary Colors

#### True Black
```
HEX: #000000
RGB: 0, 0, 0
HSL: 0, 0%, 0%
```
**Use for:**
- All backgrounds
- Button text on neon orange
- Maximum contrast base

---

#### Neon Orange
```
HEX: #ff6b00
RGB: 255, 107, 0
HSL: 25, 100%, 50%
```
**Use for:**
- Headers (with glow)
- Primary buttons
- Borders (with glow)
- Interactive elements
- Card titles

**Contrast:**
- On black: 8.3:1 (AAA) ✅

**Effects:**
```css
text-shadow: 0 0 10px #ff6b00, 0 0 20px #ff6b00, 0 0 30px #ff6b00;
box-shadow: 0 0 10px rgba(255, 107, 0, 0.5), 0 0 20px rgba(255, 107, 0, 0.3);
```

---

#### Pure White
```
HEX: #ffffff
RGB: 255, 255, 255
HSL: 0, 0%, 100%
```
**Use for:**
- All body text
- Card content
- Descriptions
- Maximum readability

**Contrast:**
- On black: 21:1 (AAA+) ✅

---

### Accent Colors

#### Acid Green
```
HEX: #39ff14
RGB: 57, 255, 20
HSL: 105, 100%, 54%
```
**Use for:**
- Author names
- Tags and badges
- Secondary buttons (outline)
- Supporting accents
- Alternative highlights

**Contrast:**
- On black: 13.5:1 (AAA) ✅

---

#### Electric Red
```
HEX: #ff0000
RGB: 255, 0, 0
HSL: 0, 100%, 50%
```
**Use for:**
- Warning states
- Alert icons
- Flame/fire icons
- High-priority indicators
- Danger zones

**Contrast:**
- On black: 5.25:1 (AA) ✅

**Effects:**
```css
text-shadow: 0 0 10px #ff0000, 0 0 20px #ff0000, 0 0 30px #ff0000;
```

---

### UI Elements

#### Card Background
```
HEX: #0d0d0d
RGB: 13, 13, 13
HSL: 0, 0%, 5%
```
**Use for:**
- Featured cards
- Post backgrounds
- Slightly elevated surfaces

---

#### Neon Border (with transparency)
```
RGBA: rgba(255, 107, 0, 0.3)
HEX equivalent: #ff6b004d
```
**Use for:**
- Card borders
- Input borders
- Section dividers

---

## Color Palette Charts

### Main Brand Light Mode
```
████ Background (#ffffff)
████ Body Text (#1a1a1a)
████ Bitcoin Orange (#f7931a)
████ Muted Text (#666666)
████ Borders (#e0e0e0)
```

### Main Brand Dark Mode
```
████ Background (#0f0f0f)
████ Body Text (#ffffff)
████ Bitcoin Orange (#f7931a)
████ Muted Text (#b3b3b3)
████ Borders (#333333)
```

### The Corner (Always Dark)
```
████ Background (#000000)
████ Body Text (#ffffff)
████ Neon Orange (#ff6b00) ✨
████ Acid Green (#39ff14) ✨
████ Electric Red (#ff0000) ✨
```

---

## Quick Copy Reference

### Main Brand Hex Codes
```
#f7931a  Bitcoin Orange
#1a1a1a  Deep Charcoal
#ffffff  Clean White
#333333  Dark Gray
#f5f5f5  Off-White
#666666  Muted Text
#e0e0e0  Light Border
```

### The Corner Hex Codes
```
#000000  True Black
#ff6b00  Neon Orange
#ffffff  Pure White
#39ff14  Acid Green
#ff0000  Electric Red
#0d0d0d  Card Background
```

---

## CSS Variables Quick Reference

### Main Brand
```css
/* Use these in your CSS */
hsl(var(--primary))              /* Bitcoin Orange */
hsl(var(--foreground))           /* Text color */
hsl(var(--background))           /* Background */
hsl(var(--secondary))            /* Dark Gray */
hsl(var(--muted))                /* Muted bg */
hsl(var(--muted-foreground))     /* Muted text */
hsl(var(--border))               /* Borders */
```

### The Corner
```css
/* Apply corner-theme class first, then use: */
hsl(var(--corner-background))    /* True Black */
hsl(var(--corner-primary))       /* Neon Orange */
hsl(var(--corner-accent))        /* Acid Green */
hsl(var(--corner-red))           /* Electric Red */
hsl(var(--corner-card))          /* Card bg */
```

---

## Tailwind CSS Classes

### Main Brand
```tsx
// Bitcoin Orange elements
className="text-primary"
className="bg-primary"
className="border-primary"

// Backgrounds
className="bg-background"
className="bg-card"
className="bg-muted"

// Text colors
className="text-foreground"
className="text-muted-foreground"

// Custom utilities
className="btn-premium"          // Bitcoin orange button
className="link-bitcoin"         // Orange underlined link
className="card-clean"           // High-contrast card
```

### The Corner
```tsx
// Apply theme first
className="corner-theme"

// Neon Orange
className="text-[#ff6b00]"
className="border-[#ff6b00]"

// Acid Green
className="text-[#39ff14]"
className="border-[#39ff14]"

// Electric Red
className="text-[#ff0000]"

// Effects
className="corner-glow"          // Neon text glow
className="corner-border-glow"   // Border glow
className="corner-glitch"        // Glitch animation
```

---

## Color Combinations (Tested)

### Main Brand - Do's ✅
```
✅ #f7931a on #ffffff (Bitcoin orange CTA on white)
✅ #1a1a1a on #ffffff (Black text on white)
✅ #ffffff on #1a1a1a (White text on dark)
✅ #f7931a on #1a1a1a (Orange accent on dark)
✅ #666666 on #ffffff (Muted text on white)
```

### Main Brand - Don'ts ❌
```
❌ #666666 on #f5f5f5 (Low contrast)
❌ #f7931a on #f5f5f5 (Insufficient contrast)
❌ #e0e0e0 text on #ffffff (Invisible)
```

### The Corner - Do's ✅
```
✅ #ffffff on #000000 (Maximum contrast)
✅ #ff6b00 on #000000 (Neon orange glow)
✅ #39ff14 on #000000 (Acid green accent)
✅ #ff0000 on #000000 (Electric red warning)
✅ #000000 on #ff6b00 (Black text on neon button)
```

### The Corner - Don'ts ❌
```
❌ #ff6b00 on #ff0000 (Neon on neon - unreadable)
❌ Gray text on black (Breaks aesthetic)
❌ Muted colors (Against brand identity)
```

---

## Print & Export Values

### CMYK Approximations (For Print)

**Main Brand:**
- Bitcoin Orange: C0 M41 Y89 K3
- Deep Charcoal: C0 M0 Y0 K90
- Clean White: C0 M0 Y0 K0

**The Corner:**
- Neon Orange: C0 M58 Y100 K0
- Acid Green: C78 M0 Y92 K0
- Electric Red: C0 M100 Y100 K0
- True Black: C0 M0 Y0 K100

### Pantone Approximations

**Main Brand:**
- Bitcoin Orange: PMS 144 C
- Deep Charcoal: PMS Black 6 C

**The Corner:**
- Neon Orange: PMS 1655 C
- Acid Green: PMS 802 C
- Electric Red: PMS Red 032 C

---

*Last Updated: October 28, 2025*
*For full guidelines, see STYLE_GUIDE.md*
