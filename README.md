# mini-store-sotatek

## Overview

`mini-store-sotatek` is a Vietnamese sneaker shop front-end prototype. The site displays a catalog of sample shoes, supports live search, category filtering, sorting, cart management, and checkout confirmation.

The project includes:
- `index.html` — page structure, layout, product/cart templates, UI controls
- `style.css` — responsive styling, brand visuals, card layout, modal and toast styling
- `script.js` — product data seeding, localStorage persistence, search/filter/sort logic, cart rendering, checkout flow

## Requirements

1. Render the shop header with brand name and tagline.
2. Provide search input for keyword matching product name, description, or tag.
3. Provide category filter dropdown with options: all, running, street, outdoor, lifestyle.
4. Provide sort dropdown with values: featured, price ascending, price descending, name A-Z.
5. Display a hero section with promotional copy and product highlight.
6. Seed and persist a list of demo sneaker products in localStorage.
7. Render a responsive product grid from product data.
8. Each product card must include image, tag label, name, description, price, rating, and add-to-cart button.
9. Maintain a cart sidebar that shows selected products, quantities, line totals, subtotal, shipping fee, and total.
10. Allow increment/decrement quantity inside the cart and remove items when quantity reaches zero.
11. Show toast messages after cart actions and when checkout is attempted with an empty cart.
12. Open a checkout confirmation modal from the `Thanh toán` button.
13. Redirect to `checkout.html` if the user confirms checkout.
14. Support data reset and re-seeding through hero action buttons.
15. Preserve responsive layout for medium and mobile breakpoints.

## Business Flow

1. User visits the homepage and sees the shop header, hero section, product count, and empty cart.
2. The site loads product data from localStorage or seeds default demo products.
3. User enters a search keyword to filter products by name, description, or tag.
4. User selects a category to narrow product results.
5. User selects a sort option to order products by rating (featured), price, or name.
6. User clicks the add-to-cart icon on a product card.
7. The cart updates immediately with the product entry, current quantity, subtotal, and total.
8. User adjusts quantities using minus/plus buttons in the cart.
9. If quantity reaches zero, the product is removed from the cart.
10. The shipping fee is calculated dynamically: free for orders >= 2,000,000 VND or empty carts; otherwise 35,000 VND.
11. User clicks `Thanh toán`; if the cart is empty, a toast warning appears.
12. If the cart contains items, the checkout modal opens.
13. User can either stay on the homepage or proceed to the checkout page.
14. User can reset all local data or re-seed default products with the hero buttons.

## WBS (Work Breakdown Structure)

1. Project Setup
   1.1. Review `index.html`, `style.css`, and `script.js`.
   1.2. Identify required UI elements and interaction flows.
   1.3. Confirm localStorage persistence strategy.

2. Data and State
   2.1. Define sample product objects with id, name, category, description, price, rating, tag, and image.
   2.2. Implement data seeding for default products.
   2.3. Implement localStorage read/write helpers.
   2.4. Initialize app state for products and cart.

3. Product Rendering
   3.1. Create the product card template in HTML.
   3.2. Render products into the grid based on current filters.
   3.3. Update the product count display.
   3.4. Attach add-to-cart event handlers to cards.

4. Filtering and Sorting
   4.1. Implement keyword search filtering.
   4.2. Implement category filter selection.
   4.3. Implement sort logic for featured, price, and name.
   4.4. Re-render products on filter/sort change.

5. Shopping Cart
   5.1. Create the cart item template in HTML.
   5.2. Render cart entries with name, tag, quantity, and line total.
   5.3. Implement quantity increment/decrement actions.
   5.4. Remove cart items when quantity reaches zero.
   5.5. Calculate subtotal, shipping fee, total, and cart item count.
   5.6. Persist cart state in localStorage.

6. Notifications and Modal
   6.1. Implement toast notifications for success and warnings.
   6.2. Create the checkout confirmation modal markup.
   6.3. Open modal on checkout if cart has items.
   6.4. Close modal on backdrop or cancel.
   6.5. Redirect to `checkout.html` on confirm.

7. Controls and Actions
   7.1. Implement `Làm mới dữ liệu` to clear localStorage and reload state.
   7.2. Implement `Tải lại mẫu` to reseed default product data and clear cart.
   7.3. Add listeners for search, category, sort, reset, seed, and checkout actions.

8. Styling and Responsiveness
   8.1. Apply brand color palette, typography, and spacing.
   8.2. Style cards, buttons, hero section, and cart panel.
   8.3. Ensure the cart is sticky on desktop and stacked on narrower screens.
   8.4. Add responsive adjustments for 900px and 640px breakpoints.

9. Testing and QA
   9.1. Test search, category, and sort interactions.
   9.2. Test cart addition, quantity updates, and removal.
   9.3. Test shipping fee logic and total calculations.
   9.4. Test toast and modal behavior.
   9.5. Test data persistence across page reloads.

## Task List

- [ ] Review the existing HTML/CSS/JS files.
- [ ] Confirm product categories and sort options.
- [ ] Define sample shoe product data structure.
- [ ] Seed default products into localStorage.
- [ ] Create product card template and render logic.
- [ ] Create cart item template and cart render logic.
- [ ] Implement search, category filtering, and sorting.
- [ ] Implement add-to-cart and cart quantity actions.
- [ ] Implement subtotal, shipping, and total calculations.
- [ ] Implement localStorage persistence for products and cart.
- [ ] Implement toast notification system.
- [ ] Implement checkout modal and confirm/cancel actions.
- [ ] Implement data reset and reseed actions.
- [ ] Test desktop and mobile responsive layouts.
- [ ] Document behavior and expected file structure.

## Notes

- `script.js` seeds 8 demo sneaker products and stores product/cart state in `localStorage`.
- The page uses a modal-based checkout confirmation and redirects to `checkout.html` on confirmation.
- Shipping is free for orders >= 2,000,000 VND or when cart is empty; otherwise 35,000 VND.
- The product grid is searchable, filterable by category, and sortable by featured, price, or name.
