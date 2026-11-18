/**
 * FOOD - Premium Food Delivery Platform for Uzbekistan
 * Core Application Logic & State Management
 */

// ==========================================
// 1. DATA REPOSITORY (Halal, Uzbekistan-ready)
// ==========================================
const PRODUCTS_DATA = [
  {
    id: 1,
    name: "Royal Tashkent Beef Burger",
    category: "burgers",
    price: 58000,
    rating: 4.9,
    reviewsCount: 184,
    description: "Premium halal beef patty, smoked beef bacon, melted cheddar, caramelized onions, and secret Uzbek house sauce on toasted brioche.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    isPopular: true,
    prepTime: "15-20 min",
    calories: "620 kcal",
    ingredients: ["100% Halal Beef", "Brioche Bun", "Aged Cheddar", "Caramelized Onions", "Smoked Bacon", "Chef's Sauce"],
    badge: "Best Seller"
  },
  {
    id: 2,
    name: "Crispy Golden Chicken Burger",
    category: "burgers",
    price: 48000,
    rating: 4.8,
    reviewsCount: 142,
    description: "Crispy buttermilk-fried chicken breast, crunchy purple slaw, jalapeño pickles, and garlic-paprika mayo.",
    image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=600&q=80",
    isPopular: true,
    prepTime: "15 min",
    calories: "550 kcal",
    ingredients: ["Crispy Chicken", "Brioche Bun", "Red Slaw", "Pickles", "Garlic Paprika Mayo"],
    badge: "Popular"
  },
  {
    id: 3,
    name: "Truffle Mushroom Smash Burger",
    category: "burgers",
    price: 64000,
    rating: 4.9,
    reviewsCount: 96,
    description: "Double smashed halal Angus patties, sautéed cremini mushrooms, Swiss Emmental cheese, and black truffle aioli.",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80",
    isPopular: true,
    prepTime: "20 min",
    calories: "680 kcal",
    ingredients: ["Double Smashed Angus", "Cremini Mushrooms", "Emmental Cheese", "Truffle Aioli", "Brioche Bun"],
    badge: "Chef Choice"
  },
  {
    id: 4,
    name: "Pepperoni Supreme Pizza",
    category: "pizza",
    price: 78000,
    rating: 4.9,
    reviewsCount: 210,
    description: "Artisan sourdough crust, rich San Marzano tomato sauce, mozzarella fior di latte, cured beef pepperoni, and fresh oregano.",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&q=80",
    isPopular: true,
    prepTime: "20-25 min",
    calories: "890 kcal",
    ingredients: ["Sourdough Crust", "Beef Pepperoni", "Fior di Latte Mozzarella", "San Marzano Sauce", "Oregano"],
    badge: "Best Seller"
  },
  {
    id: 5,
    name: "Quattro Formaggi (Four Cheese)",
    category: "pizza",
    price: 82000,
    rating: 4.8,
    reviewsCount: 128,
    description: "Indulgent blend of mozzarella, gorgonzola dolce, aged parmesan, and cream ricotta with a honey glaze crust.",
    image: "https://images.unsplash.com/photo-1573821663912-569905455b1c?auto=format&fit=crop&w=600&q=80",
    isPopular: true,
    prepTime: "20 min",
    calories: "920 kcal",
    ingredients: ["Mozzarella", "Gorgonzola Dolce", "Parmigiano Reggiano", "Ricotta", "Wild Blossom Honey"],
    badge: "Gourmet"
  },
  {
    id: 6,
    name: "BBQ Halal Chicken & Sweet Corn",
    category: "pizza",
    price: 76000,
    rating: 4.7,
    reviewsCount: 114,
    description: "Tender grilled chicken chunks, sweet kernel corn, red onions, smoked barbecue drizzle, and fresh cilantro.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80",
    isPopular: true,
    prepTime: "20 min",
    calories: "840 kcal",
    ingredients: ["Grilled Halal Chicken", "BBQ Sauce", "Mozzarella", "Sweet Corn", "Red Onions"],
    badge: "Hot"
  },
  {
    id: 7,
    name: "Philadelphia Salmon Classic",
    category: "sushi",
    price: 68000,
    rating: 5.0,
    reviewsCount: 312,
    description: "8 pieces. Fresh Norwegian salmon, silky Philadelphia cream cheese, ripe Hass avocado, Japanese cucumber, and toasted sesame.",
    image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=600&q=80",
    isPopular: true,
    prepTime: "15 min",
    calories: "480 kcal",
    ingredients: ["Norwegian Salmon", "Philadelphia Cheese", "Avocado", "Japanese Rice", "Nori"],
    badge: "Top Rated"
  },
  {
    id: 8,
    name: "California Snow Crab & Tobiko",
    category: "sushi",
    price: 62000,
    rating: 4.8,
    reviewsCount: 175,
    description: "8 pieces. Delicate snow crab meat, crisp cucumber, creamy avocado, coated with vibrant orange tobiko flying fish roe.",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80",
    isPopular: true,
    prepTime: "15 min",
    calories: "420 kcal",
    ingredients: ["Snow Crab", "Tobiko Caviar", "Hass Avocado", "Cucumber", "Kewpie Mayo"],
    badge: "Favorite"
  },
  {
    id: 9,
    name: "Dragon Unagi & Tempura Roll",
    category: "sushi",
    price: 79000,
    rating: 4.9,
    reviewsCount: 164,
    description: "8 pieces. Crispy jumbo tempura prawn inside, topped with glazed smoked unagi eel, avocado slices, and sweet eel sauce.",
    image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=600&q=80",
    isPopular: true,
    prepTime: "20 min",
    calories: "530 kcal",
    ingredients: ["Smoked Unagi", "Tiger Prawn Tempura", "Avocado", "Unagi Glaze", "Sesame Seeds"],
    badge: "Signature"
  },
  {
    id: 10,
    name: "Creamy Chicken & Mushroom Fettuccine",
    category: "pasta",
    price: 54000,
    rating: 4.8,
    reviewsCount: 153,
    description: "Fresh egg fettuccine tossed in rich garlic parmesan cream sauce, tender sautéed chicken breast, and button mushrooms.",
    image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=600&q=80",
    isPopular: true,
    prepTime: "18-20 min",
    calories: "690 kcal",
    ingredients: ["Handmade Fettuccine", "Chicken Breast", "Cremini Mushrooms", "Heavy Cream", "Parmesan"],
    badge: "Classic"
  },
  {
    id: 11,
    name: "Traditional Spaghetti Bolognese",
    category: "pasta",
    price: 56000,
    rating: 4.9,
    reviewsCount: 189,
    description: "Slow-simmered halal minced beef ragù, San Marzano tomatoes, herbs, carrots, and celery over al dente bronze-cut spaghetti.",
    image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281290?auto=format&fit=crop&w=600&q=80",
    isPopular: true,
    prepTime: "20 min",
    calories: "640 kcal",
    ingredients: ["Italian Spaghetti", "Ground Halal Beef", "San Marzano Tomatoes", "Aged Parmigiano", "Fresh Basil"],
    badge: "Best Seller"
  },
  {
    id: 12,
    name: "Spicy Penne All'Arrabbiata",
    category: "pasta",
    price: 46000,
    rating: 4.7,
    reviewsCount: 98,
    description: "Penne rigate cooked in a fiery crushed chili, garlic, ripe tomato reduction with cold-pressed Italian olive oil and basil.",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80",
    isPopular: true,
    prepTime: "15 min",
    calories: "510 kcal",
    ingredients: ["Penne Rigate", "Red Bird's Eye Chili", "Garlic", "San Marzano Tomatoes", "Extra Virgin Olive Oil"],
    badge: "Spicy"
  },
  {
    id: 13,
    name: "Fresh Mint & Lemon Iced Cooler",
    category: "drinks",
    price: 22000,
    rating: 4.9,
    reviewsCount: 240,
    description: "Hand-squeezed citrus lemons, muddled mountain mint, cane syrup, and effervescent sparkling mineral water.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80",
    isPopular: false,
    prepTime: "5 min",
    calories: "120 kcal",
    ingredients: ["Fresh Lemons", "Garden Mint", "Sparkling Water", "Natural Cane Sugar", "Ice"],
    badge: "Refreshing"
  },
  {
    id: 14,
    name: "Samarkand Wild Berry Mojito",
    category: "drinks",
    price: 26000,
    rating: 5.0,
    reviewsCount: 195,
    description: "Non-alcoholic virgin mojito with crushed blackberries, raspberries, fresh lime wedges, mint sprigs, and soda.",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
    isPopular: false,
    prepTime: "5 min",
    calories: "140 kcal",
    ingredients: ["Wild Blackberries", "Raspberries", "Fresh Lime", "Mint", "Soda"],
    badge: "Favorite"
  },
  {
    id: 15,
    name: "Cold Brew Nitro Coffee",
    category: "drinks",
    price: 28000,
    rating: 4.8,
    reviewsCount: 88,
    description: "Single-origin Ethiopian beans steeped cold for 20 hours, infused with nitrogen for a velvety stout-like foam.",
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=600&q=80",
    isPopular: false,
    prepTime: "5 min",
    calories: "15 kcal",
    ingredients: ["100% Arabica Cold Brew", "Filtered Water", "Nitrogen Foam"],
    badge: "Energizing"
  },
  {
    id: 16,
    name: "San Sebastian Basque Cheesecake",
    category: "desserts",
    price: 38000,
    rating: 5.0,
    reviewsCount: 285,
    description: "Caramelized burnt top with a rich, silky, melt-in-your-mouth custard center, accompanied by warm Belgian dark chocolate sauce.",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80",
    isPopular: false,
    prepTime: "5 min",
    calories: "450 kcal",
    ingredients: ["Cream Cheese", "Heavy Cream", "Free-range Eggs", "Vanilla Bean", "Belgian Chocolate"],
    badge: "Must Try"
  },
  {
    id: 17,
    name: "Warm Belgian Chocolate Lava Cake",
    category: "desserts",
    price: 42000,
    rating: 4.9,
    reviewsCount: 192,
    description: "Baked dark chocolate fondant with a flowing warm cocoa center, served with a scoop of Madagascar vanilla gelato.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
    isPopular: false,
    prepTime: "12 min",
    calories: "520 kcal",
    ingredients: ["70% Dark Chocolate", "Butter", "Pastry Flour", "Vanilla Gelato"],
    badge: "Hot & Sweet"
  },
  {
    id: 18,
    name: "Traditional Royal Honey Cake (Medovik)",
    category: "desserts",
    price: 32000,
    rating: 4.9,
    reviewsCount: 220,
    description: "Eight paper-thin layers of caramelized golden mountain honey biscuits filled with velvety whipped sour cream frosting.",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=600&q=80",
    isPopular: false,
    prepTime: "5 min",
    calories: "380 kcal",
    ingredients: ["Mountain Honey", "Sour Cream", "Butter Biscuit Layers", "Toasted Crumbs"],
    badge: "Traditional"
  }
];

// Valid Promotional Coupons
const PROMO_CODES = {
  "FOODUZ20": { discountPercent: 20, description: "20% Discount applied!" },
  "TASHKENTFREE": { freeDelivery: true, description: "Free Delivery applied!" },
  "WELCOME10": { discountPercent: 10, description: "10% Welcome Discount applied!" }
};

const FREE_DELIVERY_THRESHOLD = 150000; // UZS
const STANDARD_DELIVERY_FEE = 15000;    // UZS

// ==========================================
// 2. STATE OBJECT
// ==========================================
const AppState = {
  cart: [],
  favorites: [],
  user: null,
  activeCategory: "all",
  activeSearch: "",
  activeSort: "popular",
  appliedCoupon: null,
  currentQuickViewProduct: null,

  init() {
    this.loadStorage();
    this.setupListeners();
    this.render();
  },

  loadStorage() {
    try {
      const storedCart = localStorage.getItem("food_cart_uz");
      if (storedCart) this.cart = JSON.parse(storedCart);

      const storedFavs = localStorage.getItem("food_favorites_uz");
      if (storedFavs) this.favorites = JSON.parse(storedFavs);

      const storedUser = localStorage.getItem("food_user_uz");
      if (storedUser) this.user = JSON.parse(storedUser);

      const storedCoupon = localStorage.getItem("food_coupon_uz");
      if (storedCoupon && PROMO_CODES[storedCoupon]) {
        this.appliedCoupon = { code: storedCoupon, ...PROMO_CODES[storedCoupon] };
      }
    } catch (e) {
      console.error("Error reading localStorage:", e);
    }
  },

  saveCart() {
    localStorage.setItem("food_cart_uz", JSON.stringify(this.cart));
    this.updateCartBadges();
    this.renderCartDrawer();
  },

  saveFavorites() {
    localStorage.setItem("food_favorites_uz", JSON.stringify(this.favorites));
    this.updateFavoritesBadges();
    this.renderFavoritesModal();
  },

  saveUser() {
    if (this.user) {
      localStorage.setItem("food_user_uz", JSON.stringify(this.user));
    } else {
      localStorage.removeItem("food_user_uz");
    }
    this.updateUserNav();
  },

  saveCoupon() {
    if (this.appliedCoupon) {
      localStorage.setItem("food_coupon_uz", this.appliedCoupon.code);
    } else {
      localStorage.removeItem("food_coupon_uz");
    }
  }
};

// ==========================================
// 3. UTILITY FUNCTIONS
// ==========================================
function formatPrice(amount) {
  return new Intl.NumberFormat("uz-UZ").format(amount) + " UZS";
}

function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast toast-${type} animate-slide-in`;
  
  const iconName = type === "success" ? "check-circle-2" : type === "error" ? "alert-circle" : "info";
  
  toast.innerHTML = `
    <i data-lucide="${iconName}" class="toast-icon"></i>
    <span class="toast-text">${message}</span>
    <button class="toast-close" onclick="this.parentElement.remove()" aria-label="Close">
      <i data-lucide="x"></i>
    </button>
  `;

  container.appendChild(toast);
  lucide.createIcons();

  setTimeout(() => {
    toast.classList.add("fade-out");
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

// Copy promo code helper
function copyPromoCode(code) {
  navigator.clipboard.writeText(code).then(() => {
    showToast(`Promo code "${code}" copied to clipboard!`, "info");
    // Pre-fill and apply promo if cart has items
    AppState.applyPromoCode(code);
  }).catch(() => {
    AppState.applyPromoCode(code);
  });
}

// ==========================================
// 4. CART & FAVORITES MANAGEMENT
// ==========================================
AppState.addToCart = function(productId, quantity = 1, options = []) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const existingItemIndex = this.cart.findIndex(item => item.id === productId);

  if (existingItemIndex > -1) {
    this.cart[existingItemIndex].quantity += quantity;
  } else {
    this.cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      quantity: quantity,
      options: options
    });
  }

  this.saveCart();
  showToast(`Added "${product.name}" to cart!`, "success");
  
  // Animate cart button
  const cartBtn = document.getElementById("nav-cart-btn");
  if (cartBtn) {
    cartBtn.classList.add("shake-animation");
    setTimeout(() => cartBtn.classList.remove("shake-animation"), 600);
  }
};

AppState.updateCartQuantity = function(productId, delta) {
  const itemIndex = this.cart.findIndex(item => item.id === productId);
  if (itemIndex === -1) return;

  this.cart[itemIndex].quantity += delta;

  if (this.cart[itemIndex].quantity <= 0) {
    const itemName = this.cart[itemIndex].name;
    this.cart.splice(itemIndex, 1);
    showToast(`Removed "${itemName}" from cart`, "info");
  }

  this.saveCart();
};

AppState.removeFromCart = function(productId) {
  const item = this.cart.find(i => i.id === productId);
  if (item) {
    this.cart = this.cart.filter(i => i.id !== productId);
    this.saveCart();
    showToast(`Removed "${item.name}" from cart`, "info");
  }
};

AppState.clearCart = function() {
  this.cart = [];
  this.appliedCoupon = null;
  this.saveCart();
  this.saveCoupon();
  showToast("Your cart has been cleared", "info");
};

AppState.toggleFavorite = function(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const index = this.favorites.indexOf(productId);
  if (index > -1) {
    this.favorites.splice(index, 1);
    showToast(`Removed "${product.name}" from favorites`, "info");
  } else {
    this.favorites.push(productId);
    showToast(`Added "${product.name}" to favorites! ❤️`, "success");
  }

  this.saveFavorites();
  this.renderProducts(); // Update heart icons across cards
};

AppState.isFavorite = function(productId) {
  return this.favorites.includes(productId);
};

AppState.applyPromoCode = function(inputCode) {
  const code = (inputCode || "").trim().toUpperCase();
  if (!code) {
    showToast("Please enter a promo code", "error");
    return;
  }

  if (PROMO_CODES[code]) {
    this.appliedCoupon = { code, ...PROMO_CODES[code] };
    this.saveCoupon();
    this.renderCartDrawer();
    showToast(`🎉 Coupon applied: ${PROMO_CODES[code].description}`, "success");
  } else {
    showToast("Invalid promo code. Try FOODUZ20 or TASHKENTFREE", "error");
  }
};

AppState.removePromoCode = function() {
  this.appliedCoupon = null;
  this.saveCoupon();
  this.renderCartDrawer();
  showToast("Coupon removed", "info");
};

// Calculations
AppState.getCartSubtotal = function() {
  return this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
};

AppState.getDeliveryFee = function(subtotal) {
  if (subtotal === 0) return 0;
  if (this.appliedCoupon && this.appliedCoupon.freeDelivery) return 0;
  return subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : STANDARD_DELIVERY_FEE;
};

AppState.getDiscountAmount = function(subtotal) {
  if (!this.appliedCoupon || !this.appliedCoupon.discountPercent) return 0;
  return Math.round((subtotal * this.appliedCoupon.discountPercent) / 100);
};

AppState.getCartTotal = function() {
  const subtotal = this.getCartSubtotal();
  if (subtotal === 0) return 0;
  const delivery = this.getDeliveryFee(subtotal);
  const discount = this.getDiscountAmount(subtotal);
  return Math.max(0, subtotal - discount + delivery);
};

AppState.getTotalCartItemsCount = function() {
  return this.cart.reduce((count, item) => count + item.quantity, 0);
};

// ==========================================
// 5. RENDERING LOGIC
// ==========================================
function createProductCardHTML(product) {
  const isFav = AppState.isFavorite(product.id);
  const cartItem = AppState.cart.find(i => i.id === product.id);
  const inCartQty = cartItem ? cartItem.quantity : 0;

  return `
    <article class="food-card" data-id="${product.id}">
      <div class="card-media">
        <img src="${product.image}" alt="${product.name}" loading="lazy" class="card-img" />
        ${product.badge ? `<span class="card-badge">${product.badge}</span>` : ""}
        <button class="fav-btn ${isFav ? 'active' : ''}" onclick="AppState.toggleFavorite(${product.id})" aria-label="Add to favorites">
          <i data-lucide="heart" class="${isFav ? 'fill-current' : ''}"></i>
        </button>
        <button class="quick-view-btn" onclick="AppState.openQuickView(${product.id})" aria-label="Quick View">
          <i data-lucide="eye"></i> Quick View
        </button>
      </div>
      <div class="card-body">
        <div class="card-meta">
          <span class="card-category">${product.category.toUpperCase()}</span>
          <div class="card-rating">
            <i data-lucide="star" class="star-icon"></i>
            <span>${product.rating.toFixed(1)}</span>
            <span class="reviews-count">(${product.reviewsCount})</span>
          </div>
        </div>
        <h3 class="card-title" onclick="AppState.openQuickView(${product.id})">${product.name}</h3>
        <p class="card-desc">${product.description}</p>
        
        <div class="card-footer">
          <div class="price-box">
            <span class="price-label">Price</span>
            <span class="price-value">${formatPrice(product.price)}</span>
          </div>
          
          <div class="card-actions">
            ${inCartQty > 0 ? `
              <div class="quantity-stepper">
                <button onclick="AppState.updateCartQuantity(${product.id}, -1)" aria-label="Decrease">
                  <i data-lucide="minus"></i>
                </button>
                <span class="stepper-val">${inCartQty}</span>
                <button onclick="AppState.updateCartQuantity(${product.id}, 1)" aria-label="Increase">
                  <i data-lucide="plus"></i>
                </button>
              </div>
            ` : `
              <button class="btn btn-primary add-cart-btn" onclick="AppState.addToCart(${product.id})">
                <i data-lucide="shopping-bag"></i>
                <span>Add</span>
              </button>
            `}
          </div>
        </div>
      </div>
    </article>
  `;
}

AppState.renderPopularSection = function() {
  const container = document.getElementById("popular-foods-grid");
  if (!container) return;

  const popularItems = PRODUCTS_DATA.filter(p => p.isPopular);
  container.innerHTML = popularItems.map(createProductCardHTML).join("");
  lucide.createIcons();
};

AppState.renderMenuSection = function() {
  const container = document.getElementById("menu-foods-grid");
  const countDisplay = document.getElementById("menu-items-count");
  if (!container) return;

  // Filter by category
  let items = PRODUCTS_DATA;
  if (this.activeCategory !== "all") {
    items = items.filter(p => p.category.toLowerCase() === this.activeCategory.toLowerCase());
  }

  // Filter by search query
  if (this.activeSearch) {
    const q = this.activeSearch.toLowerCase();
    items = items.filter(p => 
      p.name.toLowerCase().includes(q) || 
      p.description.toLowerCase().includes(q) ||
      p.ingredients.some(ing => ing.toLowerCase().includes(q))
    );
  }

  // Sort
  if (this.activeSort === "price-low") {
    items.sort((a, b) => a.price - b.price);
  } else if (this.activeSort === "price-high") {
    items.sort((a, b) => b.price - a.price);
  } else if (this.activeSort === "rating") {
    items.sort((a, b) => b.rating - a.rating);
  } else {
    // default popular
    items.sort((a, b) => (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0));
  }

  if (countDisplay) {
    countDisplay.textContent = `Showing ${items.length} dishes`;
  }

  if (items.length === 0) {
    container.innerHTML = `
      <div class="empty-state col-span-full">
        <div class="empty-icon-wrap">
          <i data-lucide="utensils-crossed"></i>
        </div>
        <h3>No dishes found</h3>
        <p>We couldn't find anything matching "${this.activeSearch}". Try searching for burgers, sushi, or clear filters.</p>
        <button class="btn btn-outline" onclick="AppState.resetFilters()">Reset All Filters</button>
      </div>
    `;
  } else {
    container.innerHTML = items.map(createProductCardHTML).join("");
  }

  lucide.createIcons();
};

AppState.renderProducts = function() {
  this.renderPopularSection();
  this.renderMenuSection();
};

AppState.resetFilters = function() {
  this.activeCategory = "all";
  this.activeSearch = "";
  this.activeSort = "popular";

  const searchInput = document.getElementById("menu-search-input");
  if (searchInput) searchInput.value = "";

  const sortSelect = document.getElementById("menu-sort-select");
  if (sortSelect) sortSelect.value = "popular";

  // Reset category tabs
  document.querySelectorAll(".category-tab").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.category === "all");
  });

  this.renderMenuSection();
};

// ==========================================
// 6. CART DRAWER RENDERING
// ==========================================
AppState.renderCartDrawer = function() {
  const itemsContainer = document.getElementById("cart-drawer-items");
  const subtotalElem = document.getElementById("cart-subtotal");
  const deliveryElem = document.getElementById("cart-delivery");
  const discountElem = document.getElementById("cart-discount");
  const discountRow = document.getElementById("cart-discount-row");
  const totalElem = document.getElementById("cart-total");
  const emptyState = document.getElementById("cart-empty-state");
  const filledState = document.getElementById("cart-filled-state");
  const freeShippingBar = document.getElementById("free-shipping-progress");
  const freeShippingText = document.getElementById("free-shipping-text");
  const appliedCouponBadge = document.getElementById("applied-coupon-badge");
  const couponInput = document.getElementById("cart-coupon-input");

  if (!itemsContainer) return;

  const subtotal = this.getCartSubtotal();
  const delivery = this.getDeliveryFee(subtotal);
  const discount = this.getDiscountAmount(subtotal);
  const total = this.getCartTotal();

  if (this.cart.length === 0) {
    if (emptyState) emptyState.style.display = "flex";
    if (filledState) filledState.style.display = "none";
    itemsContainer.innerHTML = "";
    return;
  }

  if (emptyState) emptyState.style.display = "none";
  if (filledState) filledState.style.display = "block";

  // Free delivery progress
  if (freeShippingBar && freeShippingText) {
    if (subtotal >= FREE_DELIVERY_THRESHOLD || (this.appliedCoupon && this.appliedCoupon.freeDelivery)) {
      freeShippingBar.style.width = "100%";
      freeShippingBar.style.backgroundColor = "#10B981";
      freeShippingText.innerHTML = "🎉 <strong>Congratulations!</strong> You unlocked FREE express delivery!";
    } else {
      const remaining = FREE_DELIVERY_THRESHOLD - subtotal;
      const pct = Math.min(100, Math.round((subtotal / FREE_DELIVERY_THRESHOLD) * 100));
      freeShippingBar.style.width = `${pct}%`;
      freeShippingBar.style.backgroundColor = "#FF5722";
      freeShippingText.innerHTML = `Add <strong>${formatPrice(remaining)}</strong> more to get <strong>FREE delivery</strong> in Tashkent!`;
    }
  }

  // Render items
  itemsContainer.innerHTML = this.cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img" />
      <div class="cart-item-info">
        <h4 class="cart-item-name">${item.name}</h4>
        <span class="cart-item-price">${formatPrice(item.price)}</span>
        
        <div class="cart-item-bottom">
          <div class="quantity-stepper mini">
            <button onclick="AppState.updateCartQuantity(${item.id}, -1)" aria-label="Decrease">
              <i data-lucide="minus"></i>
            </button>
            <span class="stepper-val">${item.quantity}</span>
            <button onclick="AppState.updateCartQuantity(${item.id}, 1)" aria-label="Increase">
              <i data-lucide="plus"></i>
            </button>
          </div>
          <span class="cart-item-row-total">${formatPrice(item.price * item.quantity)}</span>
        </div>
      </div>
      <button class="cart-item-remove" onclick="AppState.removeFromCart(${item.id})" aria-label="Remove item">
        <i data-lucide="trash-2"></i>
      </button>
    </div>
  `).join("");

  // Price calculations
  if (subtotalElem) subtotalElem.textContent = formatPrice(subtotal);
  if (deliveryElem) {
    deliveryElem.innerHTML = delivery === 0 
      ? '<span class="text-free">FREE</span>' 
      : formatPrice(delivery);
  }

  if (discountRow && discountElem) {
    if (discount > 0) {
      discountRow.style.display = "flex";
      discountElem.textContent = `-${formatPrice(discount)}`;
    } else {
      discountRow.style.display = "none";
    }
  }

  if (totalElem) totalElem.textContent = formatPrice(total);

  // Coupon badge
  if (appliedCouponBadge) {
    if (this.appliedCoupon) {
      appliedCouponBadge.style.display = "flex";
      appliedCouponBadge.innerHTML = `
        <span><i data-lucide="tag"></i> Coupon: <strong>${this.appliedCoupon.code}</strong> (${this.appliedCoupon.description})</span>
        <button onclick="AppState.removePromoCode()" class="btn-remove-coupon" title="Remove coupon">&times;</button>
      `;
      if (couponInput) couponInput.value = this.appliedCoupon.code;
    } else {
      appliedCouponBadge.style.display = "none";
      if (couponInput) couponInput.value = "";
    }
  }

  lucide.createIcons();
};

AppState.updateCartBadges = function() {
  const count = this.getTotalCartItemsCount();
  const badges = document.querySelectorAll(".cart-counter-badge");
  badges.forEach(badge => {
    badge.textContent = count;
    badge.style.display = count > 0 ? "inline-flex" : "none";
  });
};

AppState.updateFavoritesBadges = function() {
  const count = this.favorites.length;
  const badges = document.querySelectorAll(".fav-counter-badge");
  badges.forEach(badge => {
    badge.textContent = count;
    badge.style.display = count > 0 ? "inline-flex" : "none";
  });
};

// ==========================================
// 7. FAVORITES DRAWER/MODAL RENDERING
// ==========================================
AppState.renderFavoritesModal = function() {
  const container = document.getElementById("favorites-list");
  const emptyState = document.getElementById("favorites-empty-state");
  if (!container) return;

  const favProducts = PRODUCTS_DATA.filter(p => this.favorites.includes(p.id));

  if (favProducts.length === 0) {
    if (emptyState) emptyState.style.display = "flex";
    container.innerHTML = "";
    return;
  }

  if (emptyState) emptyState.style.display = "none";

  container.innerHTML = favProducts.map(p => `
    <div class="fav-item">
      <img src="${p.image}" alt="${p.name}" class="fav-item-img" />
      <div class="fav-item-info">
        <h4>${p.name}</h4>
        <span class="fav-item-price">${formatPrice(p.price)}</span>
        <div class="fav-item-rating">
          <i data-lucide="star" class="star-icon"></i>
          <span>${p.rating.toFixed(1)}</span>
        </div>
      </div>
      <div class="fav-item-actions">
        <button class="btn btn-primary btn-sm" onclick="AppState.addToCart(${p.id}); AppState.closeModals();">
          <i data-lucide="shopping-bag"></i> Add
        </button>
        <button class="btn btn-ghost btn-sm text-danger" onclick="AppState.toggleFavorite(${p.id})" aria-label="Remove">
          <i data-lucide="trash-2"></i>
        </button>
      </div>
    </div>
  `).join("");

  lucide.createIcons();
};

// ==========================================
// 8. QUICK VIEW MODAL
// ==========================================
AppState.openQuickView = function(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  this.currentQuickViewProduct = product;

  const modal = document.getElementById("quick-view-modal");
  const content = document.getElementById("quick-view-content");
  if (!modal || !content) return;

  const isFav = this.isFavorite(product.id);

  content.innerHTML = `
    <div class="qv-grid">
      <div class="qv-media">
        <img src="${product.image}" alt="${product.name}" class="qv-img" />
        ${product.badge ? `<span class="card-badge">${product.badge}</span>` : ""}
      </div>
      <div class="qv-details">
        <div class="qv-header">
          <span class="card-category">${product.category.toUpperCase()}</span>
          <h2 class="qv-title">${product.name}</h2>
          <div class="qv-meta-row">
            <div class="card-rating">
              <i data-lucide="star" class="star-icon"></i>
              <span>${product.rating.toFixed(1)}</span>
              <span class="reviews-count">(${product.reviewsCount} customer reviews)</span>
            </div>
            <span class="qv-time"><i data-lucide="clock"></i> ${product.prepTime}</span>
            <span class="qv-cal"><i data-lucide="flame"></i> ${product.calories}</span>
          </div>
        </div>

        <p class="qv-desc">${product.description}</p>

        <div class="qv-ingredients">
          <h4>Fresh Ingredients</h4>
          <div class="ingredient-tags">
            ${product.ingredients.map(ing => `<span class="badge-pill">${ing}</span>`).join("")}
          </div>
        </div>

        <div class="qv-options">
          <h4>Add Extra Options (Demo)</h4>
          <label class="checkbox-label">
            <input type="checkbox" id="qv-opt-cheese" value="Extra Cheese" />
            <span>Extra Cheese (+8,000 UZS)</span>
          </label>
          <label class="checkbox-label">
            <input type="checkbox" id="qv-opt-sauce" value="Chef Special Garlic Dip" />
            <span>Chef Special Garlic Dip (+5,000 UZS)</span>
          </label>
          <label class="checkbox-label">
            <input type="checkbox" id="qv-opt-spicy" value="Extra Spicy Jalapeño" />
            <span>Extra Spicy (+3,000 UZS)</span>
          </label>
        </div>

        <div class="qv-bottom">
          <div class="qv-price-box">
            <span class="price-label">Price per portion</span>
            <span class="qv-price">${formatPrice(product.price)}</span>
          </div>
          <div class="qv-actions">
            <button class="btn btn-outline fav-qv-btn ${isFav ? 'active' : ''}" onclick="AppState.toggleFavorite(${product.id}); AppState.openQuickView(${product.id});">
              <i data-lucide="heart" class="${isFav ? 'fill-current' : ''}"></i>
            </button>
            <button class="btn btn-primary btn-lg flex-1" onclick="AppState.addQuickViewToCart()">
              <i data-lucide="shopping-bag"></i> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  modal.classList.add("open");
  document.body.classList.add("modal-open");
  lucide.createIcons();
};

AppState.addQuickViewToCart = function() {
  if (!this.currentQuickViewProduct) return;
  const p = this.currentQuickViewProduct;

  const options = [];
  if (document.getElementById("qv-opt-cheese")?.checked) options.push("Extra Cheese");
  if (document.getElementById("qv-opt-sauce")?.checked) options.push("Special Garlic Dip");
  if (document.getElementById("qv-opt-spicy")?.checked) options.push("Extra Spicy");

  this.addToCart(p.id, 1, options);
  this.closeModals();
};

// ==========================================
// 9. CHECKOUT WORKFLOW & ORDER CONFIRMATION
// ==========================================
AppState.openCheckout = function() {
  if (this.cart.length === 0) {
    showToast("Your cart is empty. Please add items to checkout.", "error");
    return;
  }

  const modal = document.getElementById("checkout-modal");
  if (!modal) return;

  // Pre-fill user data if logged in
  if (this.user) {
    const nameInput = document.getElementById("checkout-name");
    const phoneInput = document.getElementById("checkout-phone");
    if (nameInput) nameInput.value = this.user.name || "";
    if (phoneInput) phoneInput.value = this.user.phone || "";
  }

  this.renderCheckoutSummary();
  this.closeCartDrawer();
  modal.classList.add("open");
  document.body.classList.add("modal-open");
  lucide.createIcons();
};

AppState.renderCheckoutSummary = function() {
  const summaryContainer = document.getElementById("checkout-order-summary");
  const subtotalElem = document.getElementById("checkout-subtotal");
  const deliveryElem = document.getElementById("checkout-delivery");
  const discountElem = document.getElementById("checkout-discount");
  const discountRow = document.getElementById("checkout-discount-row");
  const totalElem = document.getElementById("checkout-total");

  if (!summaryContainer) return;

  const subtotal = this.getCartSubtotal();
  const delivery = this.getDeliveryFee(subtotal);
  const discount = this.getDiscountAmount(subtotal);
  const total = this.getCartTotal();

  summaryContainer.innerHTML = this.cart.map(item => `
    <div class="checkout-summary-row">
      <div class="checkout-item-name">
        <span class="checkout-qty">${item.quantity}x</span>
        <span>${item.name}</span>
      </div>
      <span class="checkout-item-price">${formatPrice(item.price * item.quantity)}</span>
    </div>
  `).join("");

  if (subtotalElem) subtotalElem.textContent = formatPrice(subtotal);
  if (deliveryElem) {
    deliveryElem.innerHTML = delivery === 0 ? '<span class="text-free">FREE</span>' : formatPrice(delivery);
  }
  if (discountRow && discountElem) {
    if (discount > 0) {
      discountRow.style.display = "flex";
      discountElem.textContent = `-${formatPrice(discount)}`;
    } else {
      discountRow.style.display = "none";
    }
  }
  if (totalElem) totalElem.textContent = formatPrice(total);
};

AppState.handleCheckoutSubmit = function(e) {
  e.preventDefault();

  const name = document.getElementById("checkout-name")?.value.trim();
  const phone = document.getElementById("checkout-phone")?.value.trim();
  const district = document.getElementById("checkout-district")?.value;
  const address = document.getElementById("checkout-address")?.value.trim();
  const paymentMethod = document.querySelector('input[name="payment_method"]:checked')?.value || "click";
  const notes = document.getElementById("checkout-notes")?.value.trim() || "No specific instructions";

  if (!name || !phone || !district || !address) {
    showToast("Please fill in all required delivery fields", "error");
    return;
  }

  // Validate phone loosely for Uzbekistan (+998...)
  if (!phone.replace(/[^0-9]/g, "").includes("998") && phone.length < 9) {
    showToast("Please provide a valid Uzbekistan phone number (+998 ...)", "error");
    return;
  }

  const submitBtn = document.getElementById("checkout-submit-btn");
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="spinner"></span> Processing your order...';
  }

  // Generate simulated order
  const orderId = "UZ-" + Math.floor(100000 + Math.random() * 900000);
  const orderedItems = [...this.cart];
  const orderTotal = this.getCartTotal();
  const orderDeliveryFee = this.getDeliveryFee(this.getCartSubtotal());

  setTimeout(() => {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<span>Confirm & Place Order (Demo)</span> <i data-lucide="check"></i>';
    }

    // Save user if not set
    if (!AppState.user) {
      AppState.user = { name, phone, district, address };
      AppState.saveUser();
    }

    // Show Confirmation Modal
    AppState.showOrderConfirmation({
      orderId,
      name,
      phone,
      district,
      address,
      paymentMethod,
      notes,
      items: orderedItems,
      total: orderTotal,
      deliveryFee: orderDeliveryFee,
      orderDate: new Date().toLocaleString("en-US", { 
        timeZone: "Asia/Tashkent",
        dateStyle: "medium", 
        timeStyle: "short" 
      })
    });

    // Clear cart
    AppState.clearCart();
    AppState.closeModals();
  }, 1200);
};

AppState.showOrderConfirmation = function(order) {
  const modal = document.getElementById("order-confirmation-modal");
  const content = document.getElementById("order-confirmation-content");
  if (!modal || !content) return;

  const paymentTitles = {
    click: "Click (Uzbekistan Mobile Pay)",
    payme: "Payme (Uzbekistan Mobile Pay)",
    cash: "Cash on Delivery",
    terminal: "Uzcard / Humo on Delivery"
  };

  content.innerHTML = `
    <div class="order-success-card">
      <div class="success-icon-wrap animate-pop">
        <i data-lucide="check-circle-2"></i>
      </div>
      <h2 class="success-title">Order Placed Successfully!</h2>
      <p class="success-subtitle">Rahmat! Your delicious meal is being prepared by our chefs in Tashkent.</p>

      <div class="order-id-badge">
        <span>Order Number:</span>
        <strong>#${order.orderId}</strong>
      </div>

      <div class="delivery-tracker-box">
        <div class="tracker-header">
          <span><i data-lucide="bike"></i> Estimated Delivery: <strong>25 - 35 mins</strong></span>
          <span class="status-live"><span class="pulse-dot"></span> Kitchen Cooking</span>
        </div>
        <div class="tracker-progress-track">
          <div class="tracker-progress-fill" style="width: 35%;"></div>
        </div>
        <div class="tracker-steps">
          <span class="step active">Received</span>
          <span class="step active">Cooking</span>
          <span class="step">On the way</span>
          <span class="step">Delivered</span>
        </div>
      </div>

      <div class="order-summary-details">
        <h4>Order Summary</h4>
        <div class="order-receipt-list">
          ${order.items.map(item => `
            <div class="receipt-row">
              <span>${item.quantity}x ${item.name}</span>
              <strong>${formatPrice(item.price * item.quantity)}</strong>
            </div>
          `).join("")}
        </div>
        
        <div class="receipt-divider"></div>
        
        <div class="receipt-total-row">
          <span>Total Paid (${paymentTitles[order.paymentMethod] || order.paymentMethod}):</span>
          <span class="receipt-grand-total">${formatPrice(order.total)}</span>
        </div>

        <div class="delivery-destination-box">
          <h5><i data-lucide="map-pin"></i> Delivery Address:</h5>
          <p><strong>${order.name}</strong> (${order.phone})</p>
          <p>${order.address}, ${order.district}, Tashkent, Uzbekistan</p>
          ${order.notes ? `<p class="receipt-note"><em>Note: ${order.notes}</em></p>` : ""}
        </div>
      </div>

      <div class="confirmation-actions">
        <button class="btn btn-primary btn-lg" onclick="AppState.closeModals()">
          <i data-lucide="shopping-bag"></i> Continue Exploring
        </button>
      </div>
    </div>
  `;

  modal.classList.add("open");
  document.body.classList.add("modal-open");
  lucide.createIcons();
  showToast(`Order #${order.orderId} placed successfully!`, "success");
};

// ==========================================
// 10. AUTHENTICATION (DEMO)
// ==========================================
AppState.updateUserNav = function() {
  const userBtn = document.getElementById("nav-user-btn");
  const userText = document.getElementById("nav-user-text");
  if (!userBtn) return;

  if (this.user) {
    if (userText) userText.textContent = this.user.name.split(" ")[0];
    userBtn.title = `Logged in as ${this.user.name}`;
  } else {
    if (userText) userText.textContent = "Login";
    userBtn.title = "Login or Register";
  }
};

AppState.handleLoginSubmit = function(e) {
  e.preventDefault();
  const name = document.getElementById("login-name")?.value.trim() || "Aziz Karimov";
  const phone = document.getElementById("login-phone")?.value.trim() || "+998 90 123 45 67";

  this.user = { name, phone };
  this.saveUser();
  this.closeModals();
  showToast(`Welcome back, ${name}! 👋`, "success");
};

AppState.quickDemoLogin = function() {
  this.user = {
    name: "Aziz Karimov",
    phone: "+998 90 123 45 67",
    district: "Mirzo Ulugbek",
    address: "Amir Temur Avenue 107B, Apt 42"
  };
  this.saveUser();
  this.closeModals();
  showToast("Logged in as demo user Aziz Karimov (Tashkent)", "success");
};

AppState.logoutUser = function() {
  this.user = null;
  this.saveUser();
  showToast("You have been logged out", "info");
};

// ==========================================
// 11. MODAL & DRAWER CONTROLLERS
// ==========================================
AppState.openCartDrawer = function() {
  const drawer = document.getElementById("cart-drawer");
  const overlay = document.getElementById("cart-drawer-overlay");
  if (drawer && overlay) {
    drawer.classList.add("open");
    overlay.classList.add("open");
    document.body.classList.add("drawer-open");
    this.renderCartDrawer();
  }
};

AppState.closeCartDrawer = function() {
  const drawer = document.getElementById("cart-drawer");
  const overlay = document.getElementById("cart-drawer-overlay");
  if (drawer && overlay) {
    drawer.classList.remove("open");
    overlay.classList.remove("open");
    document.body.classList.remove("drawer-open");
  }
};

AppState.openFavoritesModal = function() {
  const modal = document.getElementById("favorites-modal");
  if (modal) {
    this.renderFavoritesModal();
    modal.classList.add("open");
    document.body.classList.add("modal-open");
    lucide.createIcons();
  }
};

AppState.openLoginModal = function() {
  if (this.user) {
    // Already logged in: show mini profile alert or logout confirmation
    const confirmLogout = confirm(`Logged in as ${this.user.name} (${this.user.phone}). Do you want to log out?`);
    if (confirmLogout) this.logoutUser();
    return;
  }

  const modal = document.getElementById("login-modal");
  if (modal) {
    modal.classList.add("open");
    document.body.classList.add("modal-open");
    lucide.createIcons();
  }
};

AppState.closeModals = function() {
  document.querySelectorAll(".modal").forEach(m => m.classList.remove("open"));
  document.body.classList.remove("modal-open");
};

// Mobile Navigation
AppState.toggleMobileMenu = function() {
  const menu = document.getElementById("mobile-menu-drawer");
  const overlay = document.getElementById("mobile-menu-overlay");
  if (menu && overlay) {
    menu.classList.toggle("open");
    overlay.classList.toggle("open");
    document.body.classList.toggle("drawer-open");
  }
};

AppState.closeMobileMenu = function() {
  const menu = document.getElementById("mobile-menu-drawer");
  const overlay = document.getElementById("mobile-menu-overlay");
  if (menu && overlay) {
    menu.classList.remove("open");
    overlay.classList.remove("open");
    document.body.classList.remove("drawer-open");
  }
};

// ==========================================
// 12. SETUP EVENT LISTENERS
// ==========================================
AppState.setupListeners = function() {
  // Navigation & Drawers
  document.getElementById("nav-cart-btn")?.addEventListener("click", () => this.openCartDrawer());
  document.getElementById("mobile-nav-cart-btn")?.addEventListener("click", () => this.openCartDrawer());
  document.getElementById("close-cart-btn")?.addEventListener("click", () => this.closeCartDrawer());
  document.getElementById("cart-drawer-overlay")?.addEventListener("click", () => this.closeCartDrawer());

  document.getElementById("nav-fav-btn")?.addEventListener("click", () => this.openFavoritesModal());
  document.getElementById("mobile-nav-fav-btn")?.addEventListener("click", () => this.openFavoritesModal());

  document.getElementById("nav-user-btn")?.addEventListener("click", () => this.openLoginModal());
  document.getElementById("mobile-nav-user-btn")?.addEventListener("click", () => this.openLoginModal());

  document.getElementById("hamburger-btn")?.addEventListener("click", () => this.toggleMobileMenu());
  document.getElementById("close-mobile-menu-btn")?.addEventListener("click", () => this.closeMobileMenu());
  document.getElementById("mobile-menu-overlay")?.addEventListener("click", () => this.closeMobileMenu());

  // Close modals on backdrop or close button
  document.querySelectorAll(".modal-close-btn, .modal-backdrop").forEach(btn => {
    btn.addEventListener("click", () => this.closeModals());
  });

  // Category Filtering in Menu
  document.querySelectorAll(".category-tab").forEach(tab => {
    tab.addEventListener("click", (e) => {
      document.querySelectorAll(".category-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      this.activeCategory = tab.dataset.category;
      this.renderMenuSection();
    });
  });

  // Category Section Cards (clicking redirects/filters to Menu)
  document.querySelectorAll(".category-card-btn").forEach(card => {
    card.addEventListener("click", () => {
      const cat = card.dataset.category;
      this.activeCategory = cat;
      
      // Update tab active state
      document.querySelectorAll(".category-tab").forEach(tab => {
        tab.classList.toggle("active", tab.dataset.category === cat);
      });

      this.renderMenuSection();
      document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Search in Menu
  const searchInput = document.getElementById("menu-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      this.activeSearch = e.target.value.trim();
      this.renderMenuSection();
    });
  }

  // Header quick search trigger
  document.getElementById("header-search-btn")?.addEventListener("click", () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      const input = document.getElementById("menu-search-input");
      if (input) {
        input.focus();
        input.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 400);
  });

  // Sorting in Menu
  const sortSelect = document.getElementById("menu-sort-select");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      this.activeSort = e.target.value;
      this.renderMenuSection();
    });
  }

  // Cart Coupon Submit
  document.getElementById("cart-coupon-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.getElementById("cart-coupon-input");
    if (input) this.applyPromoCode(input.value);
  });

  // Checkout Triggers
  document.getElementById("cart-checkout-btn")?.addEventListener("click", () => this.openCheckout());
  document.getElementById("checkout-form")?.addEventListener("submit", (e) => this.handleCheckoutSubmit(e));

  // Login Form
  document.getElementById("login-form")?.addEventListener("submit", (e) => this.handleLoginSubmit(e));
  document.getElementById("demo-login-btn")?.addEventListener("click", () => this.quickDemoLogin());

  // Contact Form
  document.getElementById("contact-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = document.getElementById("contact-submit-btn");
    if (btn) {
      btn.disabled = true;
      btn.innerHTML = '<span class="spinner"></span> Sending...';
    }

    setTimeout(() => {
      if (btn) {
        btn.disabled = false;
        btn.innerHTML = '<span>Send Message</span> <i data-lucide="send"></i>';
      }
      showToast("Tashakkur! Your message has been sent to the FOOD team.", "success");
      e.target.reset();
      lucide.createIcons();
    }, 1000);
  });

  // Newsletter Form
  document.getElementById("newsletter-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    showToast("Subscribed! You'll receive exclusive Tashkent deals.", "success");
    e.target.reset();
  });

  // Scroll to Top Button
  const scrollTopBtn = document.getElementById("scroll-top-btn");
  window.addEventListener("scroll", () => {
    if (scrollTopBtn) {
      if (window.scrollY > 400) {
        scrollTopBtn.classList.add("visible");
      } else {
        scrollTopBtn.classList.remove("visible");
      }
    }
  });

  scrollTopBtn?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Close modals on Escape key
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      this.closeModals();
      this.closeCartDrawer();
      this.closeMobileMenu();
    }
  });
};

AppState.render = function() {
  this.renderProducts();
  this.updateCartBadges();
  this.updateFavoritesBadges();
  this.updateUserNav();
  this.renderCartDrawer();
};

// ==========================================
// 13. DOM CONTENT LOADED INITIALIZER
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  AppState.init();
  lucide.createIcons();
});
