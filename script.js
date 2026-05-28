const STORAGE_KEYS = {
    products: "demo-shop-products",
    cart: "demo-shop-cart",
};

const seedProducts = () => [
    {
        id: "sw-001",
        name: "Runner Sóng Bão",
        category: "running",
        description: "Đế cao su dày, trọng lượng siêu nhẹ.",
        price: 1890000,
        rating: 4.8,
        tag: "Nóng",
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS7aLtWEsMCbb7bsqFF2R67lyepun82dq12RKLD_CMVOpfwkW_-ZKZk3ZZXApjMNLE4CCW5RTlP-ur2Z71XtO7-jXiufAnMFqvtKCHDj2IxdIurf89qJLJKUT170zuPcQd7ABMUMzDylg&usqp=CAc",
    },
    {
        id: "st-002",
        name: "Nhịp Phố Thấp",
        category: "street",
        description: "Dáng đường phố thông dụng, đế mềm.",
        price: 1450000,
        rating: 4.5,
        tag: "Bán chạy",
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQWro6VrPv_q7ktOVFUWBtOOCX76XSieQ-zIrDb5F7gGLggpVSG9tQLDLl0UZ3XGcWMkFCSX_xJKRUJbjuJTSHL9NwFn5f77qnDNvKYnZMfvhd7Q7E_Hgr393evC2iqHgkG271Fg78&usqp=CAc",
    },
    {
        id: "od-003",
        name: "Sao Mới GTX",
        category: "outdoor",
        description: "Chống nước, bám đường, leo núi.",
        price: 2490000,
        rating: 4.9,
        tag: "Chuyên",
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQEqEdnMcPjov7IbvRhDIm0pvOn9syv5aLoyYUTKQVGPxYTFOizVq7eG6ugG6t7vDOEmy-NJdZwqtmecrX1d0DZoOno5PssBUkPw4nBG4zZRs5FC1iUG4JsOj7JsBePemeRe08ZRw&usqp=CAc",
    },
    {
        id: "ls-004",
        name: "Vải Bạt Trôi",
        category: "lifestyle",
        description: "Phong cách tối giản, dễ kết đồ.",
        price: 990000,
        rating: 4.3,
        tag: "Mới",
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSWMsPgqqgvaLAEuZ7aDZSObowa4ngai2mtyqu7-4IYfbZrXdUQiOSPrh9LXEaQYvPcY2jLt_hFf98EKCou06TMdZo-lhXPEBABY8WQQAkeJeuO-nXyhsQF61HnRx5mVjjCBKOQeLNfLS4&usqp=CAc",
    },
    {
        id: "rn-005",
        name: "Nước Rút Dòng",
        category: "running",
        description: "Đệm dồi dào, phản hồi nhanh.",
        price: 1760000,
        rating: 4.6,
        tag: "Tốc độ",
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQywcyHrX5wPxwwaXqU8kaZdptG8kuW3qkeM1LFrLzJgdNHz8v_SOLT2fJgv8MBmYv7Vm2C-mA2uUrctFsMBWKy_9gA9fnuBycadvP013PM3nX2VF7ehjKPso0wxTrowAswCCShmqI5FA&usqp=CAc",
    },
    {
        id: "st-006",
        name: "Vang Bê Tông",
        category: "street",
        description: "Đầy cá tính, đế vững chống trơn.",
        price: 1580000,
        rating: 4.4,
        tag: "Phố",
        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQl5ZJrFQvZ7KRRtoaxG9r12Dsdm3-MvfukzsTxpbdQkDd6h3FDmQDHWjKWpgxpsWyG9eqriXCV-sTw8RZitzTumTG0MPgEFkV_vhPjXadYM2qTwQQ1b5wP&usqp=CAc",
    },
    {
        id: "od-007",
        name: "Bước Sống Núi",
        category: "outdoor",
        description: "Bảo vệ cổ chân, hợp leo núi.",
        price: 2290000,
        rating: 4.7,
        tag: "Bền",
        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRXfyK2cfVwNufsH5oabdyLjzSMmwEPMTCIaAcUoe73SeQSb3GUTl_1wKoSZVryKnFA-n6JCp7cdOYV0yhtPWvb3gVFx0Uodzb7nW9JAHruidQvhK9DD8zfqjP9Zs1PNDJZj_sWfw&usqp=CAc",
    },
    {
        id: "ls-008",
        name: "Đơn Linh Hoạt",
        category: "lifestyle",
        description: "Tối giản, mềm mại, linh hoạt.",
        price: 1120000,
        rating: 4.2,
        tag: "Êm",
        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRJNUJFTMU41tIh3efzqdP9xFVEMBQb61fD2HBenpxxGeGzkw00ohzGD4xElZayDdWzpMGgDr8iAExsSBTqsrK_jG8_n-8PKDEWX5zEKuGWNIlW4iAI1zXmh6rF7KwQPiNyN18bPvk&usqp=CAc",
    },
];

const getStored = (key, fallback) => {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    try {
        return JSON.parse(raw);
    } catch {
        return fallback;
    }
};

const setStored = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

const formatPrice = (value) => {
    return new Intl.NumberFormat("vi-VN").format(value) + " đ";
};

const state = {
    products: [],
    cart: {},
};

// DOM Elements
const productGrid = document.getElementById("productGrid");
const productCount = document.getElementById("productCount");
const cartList = document.getElementById("cartList");
const cartCount = document.getElementById("cartCount");
const cartSubtotal = document.getElementById("cartSubtotal");
const cartTotal = document.getElementById("cartTotal");
const shippingFee = document.getElementById("shippingFee");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const categoryFilter = document.getElementById("categoryFilter");
const resetData = document.getElementById("resetData");
const seedData = document.getElementById("seedData");
const checkout = document.getElementById("checkout");
const toast = document.getElementById("toast");
const checkoutModal = document.getElementById("checkoutModal");
const stayHome = document.getElementById("stayHome");
const goCheckout = document.getElementById("goCheckout");
const productTemplate = document.getElementById("productCardTemplate");
const cartItemTemplate = document.getElementById("cartItemTemplate");

let toastTimer = null;

const showToast = (message) => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 1800);
};

const openModal = () => {
    if (!checkoutModal) return;
    checkoutModal.classList.add("open");
    checkoutModal.setAttribute("aria-hidden", "false");
};

const closeModal = () => {
    if (!checkoutModal) return;
    checkoutModal.classList.remove("open");
    checkoutModal.setAttribute("aria-hidden", "true");
};

const loadState = () => {
    const storedProducts = getStored(STORAGE_KEYS.products, null);
    state.products = storedProducts && storedProducts.length ? storedProducts : seedProducts();
    setStored(STORAGE_KEYS.products, state.products);
    state.cart = getStored(STORAGE_KEYS.cart, {});
};

const resetAllData = () => {
    localStorage.removeItem(STORAGE_KEYS.products);
    localStorage.removeItem(STORAGE_KEYS.cart);
    loadState();
    renderProducts();
    renderCart();
};

const seedAllData = () => {
    state.products = seedProducts();
    state.cart = {};
    setStored(STORAGE_KEYS.products, state.products);
    setStored(STORAGE_KEYS.cart, state.cart);
    renderProducts();
    renderCart();
};

const getFilteredProducts = () => {
    const keyword = searchInput.value.trim().toLowerCase();
    const category = categoryFilter.value;
    let items = [...state.products];

    if (keyword) {
        items = items.filter((item) =>
            [item.name, item.description, item.tag].join(" ").toLowerCase().includes(keyword)
        );
    }
    if (category !== "all") {
        items = items.filter((item) => item.category === category);
    }

    switch (sortSelect.value) {
        case "price-asc":
            items.sort((a, b) => a.price - b.price);
            break;
        case "price-desc":
            items.sort((a, b) => b.price - a.price);
            break;
        case "name-asc":
            items.sort((a, b) => a.name.localeCompare(b.name));
            break;
        default:
            items.sort((a, b) => b.rating - a.rating);
    }
    return items;
};

const renderProducts = () => {
    const items = getFilteredProducts();
    productGrid.innerHTML = "";
    items.forEach((product) => {
        const card = productTemplate.content.cloneNode(true);
        card.querySelector(".thumb img").src = product.image;
        card.querySelector(".thumb img").alt = product.name;
        card.querySelector(".tag").textContent = product.tag;
        card.querySelector("h4").textContent = product.name;
        card.querySelector(".desc").textContent = product.description;
        card.querySelector(".price").textContent = formatPrice(product.price);
        card.querySelector(".rating").textContent = "Đánh giá " + product.rating.toFixed(1);
        card.querySelector(".btn-icon").addEventListener("click", () => addToCart(product.id));
        productGrid.appendChild(card);
    });
    productCount.textContent = items.length + " sản phẩm";
};

const addToCart = (productId) => {
    state.cart[productId] = (state.cart[productId] || 0) + 1;
    setStored(STORAGE_KEYS.cart, state.cart);
    renderCart();
    showToast("Đã thêm vào giỏ hàng");
};

const updateCartQty = (productId, delta) => {
    if (!state.cart[productId]) return;
    const next = state.cart[productId] + delta;
    if (next <= 0) {
        delete state.cart[productId];
    } else {
        state.cart[productId] = next;
    }
    setStored(STORAGE_KEYS.cart, state.cart);
    renderCart();
};

const renderCart = () => {
    const entries = Object.entries(state.cart);
    cartList.innerHTML = "";
    if (!entries.length) {
        cartList.innerHTML = '<p class="muted">Giỏ hàng trống. Thêm sản phẩm ngay!</p>';
    }

    let subtotal = 0;
    let totalItems = 0;

    entries.forEach(([productId, qty]) => {
        const product = state.products.find((item) => item.id === productId);
        if (!product) return;

        const lineTotal = product.price * qty;
        subtotal += lineTotal;
        totalItems += qty;

        const row = cartItemTemplate.content.cloneNode(true);
        row.querySelector("h4").textContent = product.name;
        row.querySelector(".muted").textContent = "x" + qty + " | " + product.tag;
        row.querySelector(".count").textContent = qty;
        row.querySelector(".line-total").textContent = formatPrice(lineTotal);
        row.querySelector('[data-action="dec"]').addEventListener("click", () => updateCartQty(productId, -1));
        row.querySelector('[data-action="inc"]').addEventListener("click", () => updateCartQty(productId, 1));
        cartList.appendChild(row);
    });

    const shipping = subtotal >= 2000000 || subtotal === 0 ? 0 : 35000;
    cartCount.textContent = totalItems + " món";
    cartSubtotal.textContent = formatPrice(subtotal);
    shippingFee.textContent = formatPrice(shipping);
    cartTotal.textContent = formatPrice(subtotal + shipping);
};

// Event Listeners
searchInput.addEventListener("input", renderProducts);
sortSelect.addEventListener("change", renderProducts);
categoryFilter.addEventListener("change", renderProducts);
resetData.addEventListener("click", resetAllData);
seedData.addEventListener("click", seedAllData);
checkout.addEventListener("click", () => {
    if (!Object.keys(state.cart).length) {
        showToast("Giỏ hàng trống. Hãy chọn sản phẩm trước.");
        return;
    }
    openModal();
});
stayHome.addEventListener("click", closeModal);
goCheckout.addEventListener("click", () => {
    closeModal();
    window.location.href = "checkout.html";
});
checkoutModal?.addEventListener("click", (event) => {
    if (event.target.classList.contains("modal-backdrop")) closeModal();
});

// Initialization
loadState();
renderProducts();
renderCart();