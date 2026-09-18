# design.md

House taste. Read this before changing UI.

## Type

- Sans: Geist (`--font-sans`). Mono: Geist Mono for code only.
- Sidebar group labels only: Departure Mono (`font-departure`), uppercase. Do not use it for body or headings.
- Page title: `text-3xl font-medium tracking-tight`.
- Body: `text-base` or `text-sm`, `leading-relaxed`, `text-pretty`.
- Headings use `text-balance`. Do not introduce a display font.

## Colour

- Surfaces: `background`, `card`, `sidebar`, `muted`.
- Text: `foreground`, `muted-foreground`.
- Accent is `primary` only. Do not add a second brand colour.
- No purple glow, no gradient text, no `bg-blue-500`.

## Space

- Scale: 2, 3, 4, 6, 8, 10. Prefer `gap-*` on flex/grid.
- Article column: `max-w-2xl`, horizontal padding `px-6`, vertical `py-10`.
- No arbitrary values (`p-[13px]`, `w-[347px]`).

## Radius and chrome

- Use component radius. Cards stay `rounded-xl`.
- Borders from tokens (`border-border`, `ring-foreground/10`).
- No extra box shadows. No new CSS modules.

## Components

- Navigation: existing `Sidebar`.
- Explanations: `Card`, `Badge`, `Breadcrumb`.
- Missing topics: `Empty`.
- Actions: `Button` variants. Do not restyle Button with custom colours.

## Voice

- Short, dry, specific.
- No “unlock your potential”, no “supercharge”, no lorem.
- A kill or a never-do is a valid outcome.

## Anti-slop

- No hero blobs, glassmorphism, icon soup, or three card radii on one page.
- Prefer deleting decoration over adding it.
- If a primitive exists, compose it. Do not invent a cousin.
