async function carregarProdutos() {

  const response = await fetch("produtos.json");

  const produtos = await response.json();

  const productsContainer = document.getElementById("products");

  productsContainer.style.display = "flex";
  productsContainer.style.flexWrap = "wrap";
  productsContainer.style.gap = "20px";
  productsContainer.style.padding = "30px";
  productsContainer.style.background = "#0b0b0f";

  produtos.forEach(produto => {

    const card = document.createElement("div");

    card.className = "card";

    const precoSeparado = produto.preco.split(",");

    card.innerHTML = `
    
      <div class="img-area">
        <img src="${produto.imagem}" alt="${produto.titulo}">
      </div>

      <div class="card-body">

        <p class="title">
          ${produto.titulo}
        </p>

        <p class="price-old">
          R$ ${produto.precoAntigo}
        </p>

        <p class="price-main">
          <sup>R$</sup> ${precoSeparado[0]}
          <span>,${precoSeparado[1]}</span>
        </p>

        <p class="pix-line">
          <strong>${produto.desconto}</strong> no Pix
        </p>

        <p class="pix-line" style="margin-top: 2px;">
          ${produto.parcelas}
        </p>

        <span class="badge badge-blue">
          ${produto.desconto} ${produto.loja}
        </span>

      </div>
    `;

    productsContainer.appendChild(card);

  });

}
const selected = document.querySelector(".selected");

const options = document.querySelector(".options");

const optionItems = document.querySelectorAll(".options div");

selected.addEventListener("click", () => {

    options.classList.toggle("active");

});

optionItems.forEach(item => {

    item.addEventListener("click", () => {

        selected.textContent = item.textContent;

        options.classList.remove("active");

    });

});

document.addEventListener("click", (e) => {

    if (!e.target.closest(".custom-select")) {

        options.classList.remove("active");

    }

});
carregarProdutos();
