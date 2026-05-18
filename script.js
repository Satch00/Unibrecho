const produtos = [
  {
    titulo: "Blusa Guns N Roses autografada pelo artista",
    precoAntigo: "1.239,99",
    preco: "1.126,59",
    desconto: "18% OFF",
    parcelas: "8x R$ 140,82 sem juros",
    loja: "Brechó Santa Luzia",
    imagem: "https://m.media-amazon.com/images/I/41piWsToC6L._AC_SY1000_.jpg"
  },

  {
    titulo: "Jaqueta vintage oversized anos 90",
    precoAntigo: "949,99",
    preco: "649,90",
    desconto: "29% OFF",
    parcelas: "6x R$ 41,65 sem juros",
    loja: "Vintage Street",
    imagem: "https://mail.google.com/mail/u/0?ui=2&ik=b9a5e7df0f&attid=0.1&permmsgid=msg-f:1865551297089912519&th=19e3c50545503ec7&view=fimg&fur=ip&permmsgid=msg-f:1865551297089912519&sz=s0-l75-ft&attbid=ANGjdJ_VnGzhh8Wfm2lFTpUZ8zV442rIgY7JLQHdbfyP43wvUFyorqpGW89gNGAQPMJIH-BfoakZpJBcZp_Jxsf1DAp01JOlf3N9IU3OTvySgl6h0zdEHz19H8joe8U&disp=emb&realattid=ii_mpbj2iuq0&zw"
  },

  {
    titulo: "Tênis nike retrô usado poucas vezes",
    precoAntigo: "599,99",
    preco: "429,90",
    desconto: "15% OFF",
    parcelas: "10x R$ 42,99 sem juros",
    loja: "Urban Heat",
    imagem: "https://imgnike-a.akamaihd.net/1300x1300/01113751.jpg"
  }
];

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
