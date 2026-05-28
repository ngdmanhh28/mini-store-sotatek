# mini-store-sotatek

## Overview

`mini-store-sotatek` is a shop landing page for a modern Vietnamese sneaker store. It includes a product catalog, search and filter controls, sorting options, a shopping cart panel, and a checkout confirmation modal.

The UI is built with:
- `index.html` for structure and content
- `style.css` for visual design, layout, and responsive behavior
- `script.js` for interactive features and data handling (expected but not included in this readme analysis)

## Requirements

1. Display a brand header with shop name and tagline.
2. Provide search, category filter, and sort controls for product discovery.
3. Show a hero section with a promotional card, sale badge, and action buttons:
   - `Làm mới dữ liệu`
   - `Tải lại mẫu`
4. Render a grid of product cards with image, category tag, name, description, price, rating, and add-to-cart button.
5. Maintain a cart sidebar with:
   - item list
   - quantity controls
   - subtotal, shipping, total
   - checkout button
6. Show toast notifications and a modal confirmation for checkout.
7. Preserve responsive layout for desktop and mobile screens.

## Business Flow

1. User lands on the shop homepage.
2. User can search for products using the search input.
3. User can filter products by category using the category drop-down.
4. User can sort products by featured, price ascending, price descending, or name A-Z.
5. User reviews product cards and clicks the add-to-cart button to add items.
6. Added products appear in the cart panel with current quantity and line total.
7. User increments or decrements quantity using cart controls.
8. Cart totals update dynamically with subtotal, shipping fee, and grand total.
9. User clicks `Thanh toán` to open checkout confirmation modal.
10. User chooses to stay on the homepage or proceed to checkout.
11. User can refresh sample data using the hero buttons if product data is reset or cleared.

## WBS (Work Breakdown Structure)

1. Project Setup
   1.1. Review existing HTML and CSS files.
   1.2. Define feature and UI requirements.

2. UI / Layout Design
   2.1. Build the header with brand and controls.
   2.2. Create the hero section and promotional card.
   2.3. Design the product grid layout and card template.
   2.4. Design the cart sidebar and summary section.
   2.5. Add toast and modal markup.

3. Styling and Responsive Behavior
   3.1. Apply global typography and color variables.
   3.2. Style header controls, buttons, and cards.
   3.3. Style the cart panel and responsive grid.
   3.4. Add sticky cart support for desktop.
   3.5. Implement responsive breakpoints for tablets and mobile.

4. Interactive Functionality
   4.1. Seed and reset sample product data.
   4.2. Implement search filtering.
   4.3. Implement category filtering.
   4.4. Implement sorting logic.
   4.5. Render product cards from data.
   4.6. Add items to cart and manage cart state.
   4.7. Update quantity controls and totals.
   4.8. Show toast messages for cart actions.
   4.9. Open and close checkout modal.

5. Testing and Validation
   5.1. Verify desktop layout and behavior.
   5.2. Verify tablet/mobile responsive layout.
   5.3. Test cart actions and totals calculation.
   5.4. Test search, filter, and sort flows.
   5.5. Validate modal and toast interactions.

6. Documentation
   6.1. Write project README with requirements.
   6.2. Document expected JS behavior and file dependencies.

## Task List

- [ ] Define product data structure and sample items.
- [ ] Build header section with search, category, and sort controls.
- [ ] Build hero section with announcement, CTA buttons, and featured promo card.
- [ ] Create product card template and render grid.
- [ ] Create cart sidebar with item list, quantity buttons, and totals.
- [ ] Add toast notification container.
- [ ] Add checkout modal markup and actions.
- [ ] Write CSS for branding, cards, buttons, cart, toast, and modal.
- [ ] Write responsive CSS for screens below 900px and 640px.
- [ ] Implement JavaScript for product loading and rendering.
- [ ] Implement search/filter/sort user interactions.
- [ ] Implement cart state management and quantity updates.
- [ ] Implement checkout confirmation workflow.
- [ ] Test and fix layout issues on different screen sizes.

## Notes

- The current HTML and CSS define a complete front-end shop layout, but the interactive logic depends on `script.js`.
- The design emphasizes a clean sneaker store experience with sticky cart behavior and smooth product card animation.
