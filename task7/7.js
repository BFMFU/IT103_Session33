let cart = [];

document.addEventListener("DOMContentLoaded", function () {
    const products = [
        { id: 1, name: "Điện thoại Samsung Galaxy A54", price: 7490000, image: "https://cdn.tgdd.vn/Products/Images/42/335177/samsung-galaxy-a56-5g-green-thumb-600x600.jpg" },
        { id: 2, name: "Laptop Dell Inspiron 15", price: 15990000, image: "https://bizweb.dktcdn.net/100/446/400/products/laptop-dell-vostro-3490-1-gia-loc.jpg" },
        { id: 3, name: "Tai nghe AirPods Pro", price: 4990000, image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-pro-2-hero-select-202409_FMT_WHH" },
        { id: 4, name: "Đồng hồ thông minh Apple Watch", price: 8990000, image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXM23ref_FV99_VW_34FR" },
        { id: 5, name: "Máy ảnh Canon EOS M50", price: 12490000, image: "https://cdn.vjshop.vn/may-anh/mirrorless/canon/canon-eos-r50/black-18-45/canon-eos-r50-lens-18-45mm-500x500.jpg" },
        { id: 6, name: "Loa Bluetooth JBL Flip 5", price: 2190000, image: "https://bizweb.dktcdn.net/100/445/498/products/jbl-go-4-3-4-left-black-48178-x1.jpg" },
        { id: 7, name: "Bàn phím cơ Logitech G Pro", price: 2490000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1MvD76Mt-Ne0IC2DPMMsTZpG05xDxJOzkqw&s" },
        { id: 8, name: "Chuột không dây Logitech MX Master", price: 1890000, image: "https://product.hstatic.net/200000722513/product/h_mx_master_3_wireless__graphite_.jpg_1e5491e35f754dcc90b90582a9c3be95_ca0c63ca59de4ed1b4d46fcc5c81c1ed.png" }
    ];

    const productGrid = document.getElementById("product-grid");

    // Hiển thị danh sách sản phẩm
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-title">${product.name}</div>
            <div class="product-price">${product.price.toLocaleString()}₫</div>
            <button class="add-to-cart-btn" data-id="${product.id}">Thêm vào giỏ hàng</button>
        `;
        productGrid.appendChild(productCard);
    });

    // Thêm sản phẩm vào giỏ hàng
    document.querySelectorAll(".add-to-cart-btn").forEach(button => {
        button.addEventListener("click", function () {
            const productId = parseInt(this.getAttribute("data-id"));
            const product = products.find(p => p.id === productId);
            const existingItem = cart.find(item => item.id === productId);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ ...product, quantity: 1 });
            }

            updateCart();
        });
    });

    // Cập nhật hiển thị giỏ hàng
    function updateCart() {
        const cartItems = document.getElementById("cart-items");
        const totalPriceElement = document.getElementById("total-price");
        cartItems.innerHTML = "";
        let total = 0;

        if (cart.length === 0) {
            cartItems.innerHTML = "<p>Giỏ hàng trống</p>";
        } else {
            cart.forEach((item, index) => {
                total += item.price * item.quantity;
                const cartItem = document.createElement("div");
                cartItem.classList.add("cart-item");
                cartItem.innerHTML = `
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${item.price.toLocaleString()}₫ x ${item.quantity}</div>
                    <div class="cart-controls">
                        <button class="cart-btn" onclick="updateQuantity(${index}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="cart-btn" onclick="updateQuantity(${index}, 1)">+</button>
                        <button class="cart-btn cart-btn-remove" onclick="removeFromCart(${index})">X</button>
                    </div>
                `;
                cartItems.appendChild(cartItem);
            });
        }
        totalPriceElement.textContent = `Tổng: ${total.toLocaleString()}₫`;
    }

    // Tăng/giảm số lượng sản phẩm trong giỏ hàng
    window.updateQuantity = function (index, change) {
        if (cart[index].quantity + change > 0) {
            cart[index].quantity += change;
        } else {
            cart.splice(index, 1);
        }
        updateCart();
    };

    // Xóa sản phẩm khỏi giỏ hàng
    window.removeFromCart = function (index) {
        cart.splice(index, 1);
        updateCart();
    };

    // Xử lý sự kiện nút "Thanh toán"
    document.getElementById("checkout-btn").addEventListener("click", function () {
        if (cart.length === 0) {
            alert("Giỏ hàng trống!");
        } else {
            alert("Cảm ơn bạn đã mua hàng!");
            cart = [];
            updateCart();
        }
    });

    // Khởi tạo giỏ hàng ban đầu
    updateCart();
});
