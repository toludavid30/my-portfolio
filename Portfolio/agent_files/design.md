# Portfolio Design System & Guidelines

## 1. Vision & Concept
**Theme:** "The Creative Technologist"
This design system leverages a bold, energetic, yet highly professional aesthetic. By combining the imaginative and regal qualities of **Royal Purple** with the energetic, optimistic pop of **Sunglow Gold**, the portfolio will stand out from standard monochromatic developer sites. The off-white base ensures high readability and a clean, modern interface.

---

## 2. Color Palette
The core colors are extracted directly from the reference theme (`1000646886_a8a908.jpg`). 

### Brand Colors
*   **Primary Accent:** Royal Purple (`#723CD6`)
    *   *Usage:* Primary buttons, prominent section headings, active navigation links, and hero section illustrations or shapes.
*   **Secondary Accent:** Sunglow Gold (`#EDB158`)
    *   *Usage:* Hover states, "new" badges, skill tags, text highlights (e.g., underlining key technologies), and call-to-action (CTA) secondary elements.
*   **Background Base:** White (`#FCFFFF`)
    *   *Usage:* Main page background, card backgrounds. This slightly cool/crisp off-white prevents eye strain while allowing the purple and gold to pop.

### Supporting Neutrals (Suggested for completeness)
To make the design standard and accessible, we need supporting dark neutrals for text against the `#FCFFFF` background.
*   **Primary Text:** Dark Slate (`#1E1A2D`) - A very dark purple-tinted grey for ultimate readability while staying on theme.
*   **Secondary Text:** Muted Grey (`#6B667C`) - For dates, subtitles, and less critical body text.
*   **Subtle Borders:** Light Lavender (`#EBE8F4`) - For card outlines and section dividers.

---

## 3. Typography
To complement the bold colors, the typography should be modern, clean, and geometric.

*   **Headings:** **Plus Jakarta Sans** or **Poppins**
    *   *Weight:* Bold (700) or ExtraBold (800)
    *   *Why:* Geometric sans-serifs look inherently "tech-forward" and friendly.
*   **Body Text:** **Inter**
    *   *Weight:* Regular (400) and Medium (500)
    *   *Why:* Maximum readability across all devices.
*   **Monospace (Code Snippets & Tech Tags):** **Fira Code** or **JetBrains Mono**
    *   *Usage:* Whenever listing technical skills, API endpoints, or code snippets to emphasize your software engineering background.

---

## 4. UI Components & Elements

### Buttons
*   **Primary Button:**
    *   Background: Royal Purple (`#723CD6`)
    *   Text: White (`#FCFFFF`)
    *   Hover State: Slight scale-up (1.05x) and a soft Sunglow Gold (`#EDB158`) drop-shadow.
*   **Secondary/Outline Button:**
    *   Background: Transparent
    *   Border: 2px solid Royal Purple (`#723CD6`)
    *   Text: Royal Purple (`#723CD6`)
    *   Hover State: Background transitions to Royal Purple, text to White.

### Cards (For Projects & Experience)
*   **Background:** White (`#FCFFFF`)
    *   *Border:* 1px solid Light Lavender (`#EBE8F4`)
    *   *Shadow:* Subtle soft shadow `box-shadow: 0 4px 20px rgba(114, 60, 214, 0.08);`
    *   *Hover Interaction:* Card lifts slightly (translateY -4px) and the border changes to Sunglow Gold (`#EDB158`) to invite clicks.

### Badges & Tags (For Skills)
*   **Tech Stack Tags:** 
    *   Small, rounded pills. 
    *   Background: 10% opacity Royal Purple (`rgba(114, 60, 214, 0.1)`)
    *   Text: Royal Purple (`#723CD6`)
    *   Font: Monospace.

---

## 5. Layout Structure (Page Flow)

1.  **Navbar:**
    *   Clean and minimal. Logo/Name on the left (in Royal Purple). Links on the right.
    *   Active link gets a small 4px Sunglow Gold (`#EDB158`) dot underneath.
2.  **Hero Section:**
    *   **Headline:** "Hi, I'm [Name]. I build robust software & creative digital experiences."
    *   **Visual:** A subtle geometric pattern or a 3D abstract element blending Royal Purple and Sunglow Gold.
    *   **CTA:** "View My Work" (Primary Button) & "Get in Touch" (Secondary Button).
3.  **About Me:**
    *   A two-column layout. A crisp professional photo on one side with a subtle Sunglow Gold offset border/shadow.
    *   Brief, personable text on the other side.
4.  **Skills / Tech Stack:**
    *   A scrolling marquee or a neat grid of Tech Stack Tags. Grouped by Frontend, Backend, Tools, etc.
5.  **Featured Projects (The Core):**
    *   Grid of Cards. 
    *   Each card features a project thumbnail, title, brief description, Tech Stack Tags, and two links: "Live Demo" and "GitHub Repo".
6.  **Experience / Resume:**
    *   A vertical timeline. The central line and nodes are Royal Purple (`#723CD6`). The active/most recent node is highlighted in Sunglow Gold (`#EDB158`).
7.  **Footer:**
    *   Dark background (use the Primary Text color `#1E1A2D`) with White (`#FCFFFF`) text.
    *   Links to GitHub, LinkedIn, Twitter/X, and Email.

---

## 6. Creative Touches & Micro-interactions
*   **Custom Cursor:** A small Royal Purple dot that expands into a translucent Sunglow Gold circle when hovering over clickable elements.
*   **Text Selection:** When users highlight text on the site, the selection background should be Sunglow Gold (`#EDB158`) with dark text. (`::selection { background: #EDB158; color: #1E1A2D; }`)
*   **Code Block Accents:** Any code blocks on the site should have a left border of 4px solid Royal Purple (`#723CD6`).

## 7. Accessibility Considerations
*   Ensure all Royal Purple (`#723CD6`) text on the White (`#FCFFFF`) background passes WCAG AAA contrast ratios.
*   Use Sunglow Gold (`#EDB158`) strictly for large accents, hover states, and decorative elements, as it may not have high enough contrast for small body text against white. Use it as a background with dark text for tags or badges when text readability is required.