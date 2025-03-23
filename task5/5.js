const products = [
    {
      id: 1,
      name: 'Laptop Dell XPS 15',
      price: 35990000,
      image: 'https://ngocnguyen.vn/cdn/images/202308/goods_img/dell-xps-15-9510-core-i7-11800h-rtx-3050ti-156-inch-fhd-G15129-1691456870705.png',
      description: 'Laptop cao cấp với màn hình 15 inch, CPU Intel Core i7 và RAM 16GB.',
    },
    {
      id: 2,
      name: 'iPhone 15 Pro Max',
      price: 32990000,
      image: 'https://th.bing.com/th/id/OIP.PO8M08Vxndz_455at0qGawHaFj?rs=1&pid=ImgDetMain',
      description: 'Điện thoại flagship của Apple với camera 48MP và chip A17 Pro.',
    },
    {
      id: 3,
      name: 'Samsung Galaxy S24 Ultra',
      price: 28990000,
      image: 'https://techworldmobile.vn/media/product/3440_s24_ultra_titanium_mau_green.jpg',
      description: 'Điện thoại Android mạnh mẽ với bút S-Pen và camera siêu zoom.',
    },
    {
      id: 4,
      name: 'Tai nghe Sony WH-1000XM5',
      price: 7990000,
      image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljv36f0uj8xuaf',
      description: 'Tai nghe chống ồn tốt nhất với thời lượng pin lên đến 30 giờ.',
    },
    {
      id: 5,
      name: 'Apple Watch Series 9',
      price: 11990000,
      image: 'https://bgr.com/wp-content/uploads/2023/09/Apple-Watch-Series-9.jpg?quality=82&strip=all',
      description: 'Đồng hồ thông minh cao cấp với tính năng đo nhịp tim và hỗ trợ thể thao.',
    },
    {
      id: 6,
      name: 'Loa JBL Charge 5',
      price: 3990000,
      image: 'https://www.g-store.vn/wp-content/uploads/2023/12/loa-jbl-charge-5-xanh-duong.webp',
      description: 'Loa Bluetooth chống nước với âm bass mạnh mẽ và pin 20 giờ.',
    }
];

function displayProducts(filter = "") {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";

    let filteredProducts = products.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()));

    if (filteredProducts.length === 0) {
        productList.innerHTML = `<p style="color: red;">Không tìm thấy sản phẩm!</p>`;
        return;
    }

    filteredProducts.forEach(product => {
        let productHTML = `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p class="price">${product.price.toLocaleString()} VNĐ</p>
                <a href="#" class="buy-btn">Buy</a>
            </div>
        `;
        productList.innerHTML += productHTML;
    });
}

function searchProduct() {
    const searchBox = document.getElementById("searchBox").value;
    displayProducts(searchBox);
}

document.getElementById("searchBox").addEventListener("input", searchProduct);

displayProducts();
