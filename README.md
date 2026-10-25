# TRAILKIT — Product Card (Test Assignment)

A responsive product page for the fictional gear brand **TRAILKIT**, built from a design mockup featuring interactive elements and powered by Tailwind CSS and Alpine.js.

---

## How to run the project locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/anna-volodymyrivna/trailkit.git
   cd trailkit
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start a local development server:**
   ```bash
   npm run dev
   ```
   After launching, open the link in your browser (usually `http://localhost:5173`).

4. **Production Build:**
   ```bash
   npm run build
   npm run preview
   ```

---

## Technology Stack

1. **HTML5**: Semantic markup (`<header>`, `<nav>`, `<main>`, `<picture>`, semantic buttons and accessibility `aria-*`).
2. **Tailwind CSS**: Utility classes, Mobile-First responsiveness, color token configuration.
3. **Alpine.js (+ @alpinejs/collapse)**: Reactive page state, parameter selection logic, accordions, burger menu, and shopping cart.
4. **Vite**: Building and optimization of a multi-page site (multi-page input configured for `index.html` and `error.html`).
5. **Vercel**: Hosting and automatic deployment.

---

## Implemented functionality

1. **Product Gallery**:
    - Clicking a thumbnail updates the main view. 
    - The active thumbnail is highlighted with a border. 
    - Changing the color updates the entire set of gallery images to match the selected color.
2. **Color Selection**:
    - Updates the `Color: ...` text and the active state of the color swatch (circle).
3. **Size Selection**:
    - Single-size selection with an update to the `Size: ...` text. 
    - The `XL` size is unavailable and disabled.
4. **Quantity Counter**:
    - `−` and `+` buttons with a range of 1–10; buttons are disabled when reaching the limits.
5. **Cart and Notifications**:
    - Adding an item increases the counter in the header by the selected quantity. 
    - A pop-up notification displaying order details appears and automatically disappears after 3 seconds. 
    - Validation: A warning is displayed if no color or size has been selected.
6. **Accordion**:
    - Sections open and close upon clicking, using `@alpinejs/collapse`. 
    - The *Description* section is open by default. 
    - The icon toggles between `+` and `−`.
7. **Responsiveness (Mobile & Desktop)**:
    - Fully responsive design, supporting widths from 390px to 1280px+. 
    - Mobile "burger" menu featuring a smooth slide-out navigation panel. 
    - Adaptive logo centering and dynamic layout adjustments for action buttons. 
8. **404 Page (error.html)**:
    - Implemented a responsive background using the semantic `<picture>` tag (separate, optimized images for mobile and desktop screens).

---

## Time spent and difficulties
1. **Total time spent:** 3 days, 6–8 hours each (development took place in stages, broken down into main blocks).
2. **Most challenging aspects of the process:**
3. **Git Flow:** Managing branches, transferring commits between `feature/product-card` and `feature/alpine` while preserving history, and resolving merge conflicts when merging into `develop`. 
4. **Vite Multi-page Build:** The `error.html` page worked locally but returned a 404 error when deployed on Vercel. This required a deeper dive into the `rollupOptions.input` configuration within `vite.config.js`. 
5. **Flex/Grid Responsiveness:** Adjusting the display order of elements (the "Add to Cart" button, counter, and wishlist) using `order-*` classes and `flex-wrap` to ensure the desktop and mobile layouts matched the design specifications exactly.

---

## Use of AI

During the task, artificial intelligence served as a mentor, a syntax consultant, and an assistant for debugging.

### Work Distribution:
1. **My own work: ~70%**
    - Complete base structure and layout implementation based on the design (DOM structure, Tailwind classes, spacing, dimensions, fonts). 
    - Creation of the stylesheet structure and configuration. 
    - Initial design of Alpine.js reactivity (state within the `<body>`, "add to cart" logic, inputs, accordions). 
    - Development of the navigation structure, the `error.html` page, and selection of graphics and icons.

2. **AI Assistance: ~30%**
    - **Alpine.js syntax debugging**: Fixing an issue where the `@click="setColor = ('...')"` method was being overwritten (correcting it to a proper function call) and removing duplicate CDN scripts. 
    - **Vite multi-page setup**: Assistance in configuring `vite.config.js` to ensure the `error.html` file builds correctly for deployment on Vercel. 
    - **Git guidance**: Providing commands to restore branch states (`git reset`, `git cherry-pick`). 
    - **CSS/Tailwind specifics**: Finding a solution to perfectly center the logo on mobile devices (`absolute left-1/2 -translate-x-1/2`) without disrupting the `justify-between` layout on desktop; also, a recommendation to use the native `<picture>` tag for handling background changes on `error.html`.