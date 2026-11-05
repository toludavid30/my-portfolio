# Motion & Interaction Guidelines

## 1. Energy & Aesthetic Vibe: "Editorial Tech"
While the reference video leans into a dark, moody aesthetic, we are extracting its **premium, high-end editorial energy** and applying it to our crisp, high-contrast light theme defined in `design.md`. 

*   **Visual Tone:** Sleek, intentional, and highly polished. The energy is confident but not frantic.
*   **Atmosphere:** We will replace the video's dark grain and glows with clean, sharp geometry. Depth will be achieved through the subtle, soft Royal Purple drop-shadows on our White base (`#FCFFFF`), creating a "floating" glass/card effect that feels both lightweight and substantial.
*   **Richness:** Instead of background noise, visual richness will come from micro-interactions (like the Sunglow Gold selection highlights and expanding cursor) and the silky smoothness of the scroll.

## 2. Motion Physics & Choreography
The motion in the reference is defined by a snappy initiation followed by a long, buttery-smooth deceleration. Nothing feels "springy" or cheap; it feels weighted and expensive.

*   **The Master Easing Curve:** All primary spatial transitions (reveals, slides, scales) should utilize a premium ease-out curve, such as `cubic-bezier(0.16, 1, 0.3, 1)` or `cubic-bezier(0.22, 1, 0.36, 1)`. 
*   **Entrance Choreography (Visual Hierarchy):**
    *   **Hero Text:** The "Hi, I'm [Name]..." headline should not just fade in. It should utilize a staggered, line-by-line reveal using a clipping mask. The text pushes up from `translateY(100%)` to `0%` with our master easing curve, creating a cascading wave of typography.
    *   **Supporting Elements:** The primary Royal Purple button and secondary outline button should fade and slide in slightly *after* the typography settles, establishing a clear hierarchy of attention.
*   **Dynamic Response (Hover & Cursors):**
    *   **The Cursor:** The Royal Purple dot from `design.md` operates on a slight delay (spring physics, `stiffness: 150, damping: 15`). When hovering over a Project Card or Primary Button, it smoothly expands by 300%, drops its opacity, and transitions to Sunglow Gold (`#EDB158`), acting as a custom spotlight.

## 3. Scroll Mechanics & Spatial Transitions
The reference video relies heavily on scroll-linked storytelling to keep the user engaged without feeling lost.

*   **Fluid Scrolling:** A smooth-scroll hijack (e.g., Lenis or Locomotive Scroll) is mandatory to ensure the deceleration physics of the user's mouse wheel match the visual on-screen easing.
*   **The "Featured Projects" Horizontal Pin:** 
    *   *Inspiration:* The video's smooth horizontal gallery scroll.
    *   *Application:* When the user reaches the Featured Projects section, vertical scroll temporarily pins. As the user continues to scroll, the Project Cards (White background, Light Lavender borders) slide in horizontally from the right. This creates a focused, immersive gallery experience before releasing the user back down the page.
*   **Parallax & Depth:** The subtle geometric patterns in the Hero section and the photo in the "About Me" section should have a slight negative parallax (moving slightly slower than the scroll speed) to create a multi-layer offset against the crisp White background.

## 4. Layout Rhythm & Density
The pacing of the portfolio must alternate between loud, bold statements and quiet, detailed information, much like the reference.

*   **Beat 1: The Shout (Hero):** Massive Dark Slate and Royal Purple typography surrounded by vast negative space (White). High impact, low density.
*   **Beat 2: The Texture (Tech Stack):** A continuous, smooth, infinite-scrolling marquee of the Tech Stack tags (10% Purple background, Monospace text). This creates a band of high-density texture and constant, slow motion.
*   **Beat 3: The Showcase (Projects):** The horizontally pinned section. Medium density, highly interactive.
*   **Beat 4: The Details (Experience & Footer):** The vertical timeline anchors the page with static precision. The motion here is limited to the Sunglow Gold highlight snapping to the active timeline node as it enters the viewport.

## 5. Specific Micro-Interactions (Cross-Referenced)

*   **Cards (Projects/Experience):** When the custom cursor enters a card, the 1px Light Lavender border transitions to Sunglow Gold. The internal project thumbnail scales up by exactly `1.03x` over `0.6s` using our master easing curve, while the card itself lifts via a `translateY(-4px)` shift.
*   **Navigation:** The navbar starts transparent. Upon scrolling past the Hero section, it smoothly blurs (backdrop-filter) and gains a subtle White/translucent background to maintain legibility over moving elements.