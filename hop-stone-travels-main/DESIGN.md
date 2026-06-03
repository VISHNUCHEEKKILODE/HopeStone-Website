# Design Brief: Hope Stone Tours & Travels

**Aesthetic:** Premium travel agency with organic elegance

| Aspect | Direction |
|--------|----------|
| **Tone** | Sophisticated, aspirational, trustworthy |
| **Visual Identity** | Dark olive green primary, warm gold-olive accents, cream backgrounds, refined typography |
| **Differentiation** | Organic leaf/arch motifs in brand elements, elevated card surfaces with premium shadows |

## Palette

| Token | Light (OKLCH) | Dark (OKLCH) | Use |
|-------|---|---|---|
| primary | 0.31 0.06 121 | 0.67 0.11 97 | Brand color, CTAs, headers |
| secondary | 0.67 0.11 97 | 0.75 0.08 122 | Accents, highlights |
| accent | 0.67 0.11 97 | 0.75 0.08 122 | Interactive, service cards |
| background | 0.98 0.01 0 | 0.12 0.02 122 | Page background |
| foreground | 0.21 0.03 122 | 0.96 0.01 0 | Body text |
| muted | 0.92 0.01 0 | 0.28 0.02 122 | Secondary text, subtle dividers |

## Typography

| Role | Font | Use |
|------|------|-----|
| Display | Lora (serif) | Hero headlines, section titles |
| Body | DM Sans (sans-serif) | Body copy, UI labels |
| Mono | General Sans | Code, data |

## Structural Zones

| Zone | Background | Treatment |
|------|---|---|
| Header | card | Bordered bottom, elevated |
| Hero | background | Full-width with accent accents |
| Services | background + card | Alternating card backgrounds |
| Footer | muted/5% | Subtle divider top |
| Floating Actions | primary | Fixed buttons for WhatsApp + call |

## Elevation & Depth

- shadow-subtle: 2px 8px -1px rgba (secondary text areas)
- shadow-elevated: 8px 24px -4px rgba (card surfaces)
- shadow-premium: 12px 32px -6px rgba (hero, featured)

## Component Patterns

- Service cards: bg-card border-border rounded-lg shadow-elevated
- CTAs: bg-primary text-primary-foreground rounded-md
- Floating buttons: fixed bottom-6 right-6, stacked vertically
- Mobile-first responsive breakpoints (sm, md, lg)

## Motion

- Smooth transitions: 0.3s cubic-bezier(0.4, 0, 0.2, 1)
- Hover states on interactive elements
- Floating action buttons fade in on scroll

## Constraints

- No gradients (solid colors only for premium feel)
- No default Tailwind themes
- OKLCH tokens exclusively
- High contrast for accessibility (AA+)

## Signature Detail

Organic leaf/arch accent integrated into service card backgrounds and hero section—reinforces "Travel With Hope" and aviation themes.
