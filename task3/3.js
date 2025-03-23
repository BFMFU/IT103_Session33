let dish = [
    { id: 1, name: 'Rau sạch', category: 'Đồ ăn' },
    { id: 2, name: 'Thịt lợn', category: 'Đồ ăn' },
    { id: 3, name: 'Pepsi không calo', category: 'Nước' },
    { id: 4, name: 'Cocacola', category: 'Nước' },
    { id: 5, name: 'Cờ lê', category: 'Dụng cụ' },
    { id: 6, name: 'Tuy vít', category: 'Dụng cụ' }
];

let ul = document.getElementById("myUl");

function renderList(filteredDish) {
    ul.innerHTML = "";
    filteredDish.forEach(item => {
        let li = `<li><b>Tên:</b> ${item.name} - <b>Danh mục:</b> ${item.category}</li>`;
        ul.innerHTML += li;
    });
}

renderList(dish);

function filterCategory() {
    let categoryValue = document.getElementById("category").value;
    
    if (categoryValue === "none") {
        renderList(dish); 
        return;
    }

    let filteredDish = dish.filter(item => item.category === categoryValue);
    renderList(filteredDish);
}
