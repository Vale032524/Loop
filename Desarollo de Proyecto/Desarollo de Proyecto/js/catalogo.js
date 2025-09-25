// ====== FILTROS ======
const filterBtns = document.querySelectorAll(".filter-btn");
const products = document.querySelectorAll(".product-card");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".filter-btn.active").classList.remove("active");
    btn.classList.add("active");

    const category = btn.getAttribute("data-category");

    products.forEach(product => {
      product.style.display = (category === "all" || product.dataset.category === category) ? "block" : "none";
    });
  });
});

// ====== MODAL ======
const modal = document.getElementById("productModal");
const closeModal = document.getElementById("closeModal");

const modalTitle = document.getElementById("modalTitle");
const modalImg = document.getElementById("modalImg");
const modalDesc = document.getElementById("modalDesc");
const modalPrice = document.getElementById("modalPrice");

const detailBtns = document.querySelectorAll(".btn-details");

detailBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".product-card");
    modalTitle.innerText = card.querySelector("h3").innerText;
    modalImg.src = card.querySelector("img").src;
    modalDesc.innerText = card.querySelector(".description").innerText;
    modalPrice.innerText = card.querySelector(".price").innerText;

    modal.style.display = "flex";
  });
});

closeModal.addEventListener("click", () => modal.style.display = "none");

window.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});
