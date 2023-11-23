// Lưu trạng thái giỏ hàng trong mảng
let cart = [];

// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(name, price) {
  cart.push({ name, price });
  updateCartUI();
}

// Hàm cập nhật giao diện giỏ hàng
function updateCartUI() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";

  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ${item.price}đ`;
    cartItems.appendChild(li);
  });
}

// Gán sự kiện click cho nút "Thêm vào giỏ hàng" trên mỗi sản phẩm
const addToCartButtons = document.querySelectorAll(".product");
addToCartButtons.forEach((product) => {
  product.addEventListener("click", () => {
    const name = product.querySelector(".name-product").textContent;
    const priceText = product.querySelector(".price-product").textContent;
    const price = parseFloat(priceText.match(/\d+\.\d+/)); // Trích xuất giá từ văn bản

    addToCart(name, price);
  });
});
