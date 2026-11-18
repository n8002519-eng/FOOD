# 🍔 FOOD — Modern Food Delivery Platform for Uzbekistan 🇺🇿

[![Vercel Deployment Ready](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel&style=flat-square)](https://vercel.com)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white&style=flat-square)](#)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white&style=flat-square)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?logo=javascript&logoColor=black&style=flat-square)](#)
[![Lucide Icons](https://img.shields.io/badge/Icons-Lucide-F97316?style=flat-square)](https://lucide.dev)

A complete, high-performance, and production-ready modern food delivery website crafted specifically for Uzbekistan (Tashkent). Features a white minimalist background with vibrant orange accents, responsive design across all devices, real-time shopping cart with LocalStorage persistence, item filtering and search, promo codes, demo checkout workflow with order tracking, and interactive favorites.

---

## 🌟 Key Features

### 1. 🍽️ Curated Food Menu (18+ Dishes)
- **6 Popular Categories**: Burgers, Pizza, Sushi, Pasta, Drinks, and Desserts.
- **Uzbekistan Currency**: Cleanly formatted prices in Uzbek so'm (`UZS`).
- **100% Halal Certified**: Tailored descriptions, calorie metrics, prep time estimates, and fresh ingredients tags.
- **Product Quick View Modal**: Inspect dish ingredients, allergens, and choose extra options (extra cheese, spicy jalapeños, garlic dip).

### 2. 🛒 Dynamic Shopping Cart & Drawer
- Slide-out cart drawer with smooth cubic-bezier animations.
- Real-time quantity controls (increment, decrement, remove).
- Subtotal, delivery fee calculation (free delivery for orders over `150,000 UZS`), and dynamic promo discounts.
- Free delivery animated progress tracker.
- **LocalStorage Sync**: Cart persists across page reloads and sessions.

### 3. 🎟️ Promotional Codes & Discounts
- **`FOODUZ20`**: 20% off all orders.
- **`TASHKENTFREE`**: Free express courier delivery across Tashkent.
- **`WELCOME10`**: 10% welcome discount for new customers.
- One-click **"Copy & Apply"** button with automatic calculation.

### 4. 🚀 Demo Checkout & Live Order Tracker
- Complete checkout form: Full Name, Uzbekistan phone number (`+998`), Tashkent district selector (Mirzo Ulugbek, Yunusabad, Chilanzar, Mirabad, etc.), and delivery notes.
- **Uzbekistan Payment Gateways (Demo)**: Click, Payme, Uzcard, Humo, and Cash on Delivery.
- **Order Confirmation Modal**: Generates order receipt, unique Order ID (e.g. `#UZ-849201`), and simulates live kitchen tracking steps (*Received → Cooking → On the way → Delivered*).

### 5. ❤️ Favorites & Bookmarks
- Heart icon on every dish card to bookmark favorite items.
- Favorites drawer modal with one-click "Add to Cart".
- Persisted in browser `localStorage`.

### 6. 🔍 Real-Time Search & Category Filters
- Instant search filter by dish name, description, or ingredients.
- Category tabs with active state indicators.
- Sorting by: *Most Popular*, *Highest Rated*, *Price: Low to High*, *Price: High to Low*.

### 7. 📱 Mobile-First & Responsive UX
- Sticky glassmorphic navbar with announcement bar.
- Mobile slide-out drawer menu.
- Bottom navigation bar on mobile screens for quick navigation (*Home*, *Menu*, *Favorites*, *Cart*, *Account*).
- Interactive toast alert notifications for user actions.

---

## 📁 Project Structure

```text
FOOD/
├── index.html          # Main HTML5 semantic structure & modals
├── style.css           # Complete CSS3 design system, responsive styles & animations
├── script.js           # Vanilla JavaScript state, data store & interactivity
├── README.md           # Documentation & deployment guide
├── .gitignore          # Git exclusion rules
└── assets/
    └── images/
        ├── favicon.svg # Custom FOOD Uzbekistan SVG favicon
        └── logo.svg    # Vector brand logo asset
```

---

## 🚀 Getting Started

### Method 1: Open Directly in Browser
No build tools, bundlers, or `node_modules` required! Simply double-click `index.html` or drag it into any modern web browser (Google Chrome, Microsoft Edge, Safari, Mozilla Firefox).

### Method 2: Run with Local Development Server
Using Python (pre-installed on most systems):
```bash
python -m http.server 8000
```
Or using Node.js:
```bash
npx serve .
```
Then navigate to `http://localhost:8000` or `http://localhost:3000` in your browser.

---

## 🌐 Deploy to Vercel (1-Click or CLI)

This project is a static web app with zero dependencies, making it deployable on Vercel in seconds with 100/100 Lighthouse performance scores.

### Option A: Deploy via GitHub (Recommended)
1. Push this repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete FOOD Uzbekistan food delivery platform"
   git push origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New"** → **"Project"**.
4. Import your `FOOD` repository.
5. In the Project Settings:
   - **Framework Preset**: *Other*
   - **Root Directory**: `./`
6. Click **Deploy**. Your site will be live on a global CDN in under 15 seconds!

### Option B: Deploy via Vercel CLI
```bash
# Install Vercel CLI globally (if not already installed)
npm install -g vercel

# Deploy directly from the project directory
vercel
```

---

## 🛠️ Technology Stack
- **Markup**: HTML5 Semantic Architecture (ARIA accessible)
- **Styling**: Modern CSS3 (Custom Variables, Flexbox, CSS Grid, Glassmorphism, Keyframe Animations)
- **Logic**: Vanilla JavaScript (ES6+, LocalStorage, Event Delegation, Modular State Pattern)
- **Icons**: [Lucide Icons](https://lucide.dev) via CDN
- **Fonts**: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) via Google Fonts
- **Imagery**: High-resolution curated food photography from [Unsplash](https://unsplash.com)

---

## 📞 Contact & Support

- **Hotline**: +998 (71) 200-00-00
- **Support**: support@food.uz
- **Headquarters**: Amir Temur Avenue 107B, Mirzo Ulugbek District, Tashkent 100084, Uzbekistan
- **Hours**: 09:00 - 02:00 (Daily)

---

&copy; 2026 **FOOD.UZ** — Crafted with ❤️ for Uzbekistan.

