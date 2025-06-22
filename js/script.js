// Máscara de telefone
$("#phone").mask("(99) 9999-99999");

const prods = [
  { id: 1, name: "Batata com bife", price: 30.0 },
  { id: 2, name: "Coxa de Frango Crocante", price: 25.0 },
  { id: 3, name: "Carne de Panela", price: 22.0 },
  { id: 4, name: "Farofa", price: 10.0 },
  { id: 5, name: "Salada", price: 8.0 },
  { id: 6, name: "Torresmo", price: 12.0 },
];

const formatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

function calc() {
  const nome = document.getElementById("name").value.trim();
  const quantities = document.getElementsByName("quantity");
  let totalFinal = 0;
  let listItems = "";

  quantities.forEach((input, index) => {
    const quantity = parseFloat(input.value) || 0;
    if (quantity > 0) {
      const product = prods[index];
      const total = product.price * quantity;
      totalFinal += total;

      listItems += `
        <li>
          <strong>Prato:</strong> ${product.name} - <strong>Preço unitário:</strong> ${formatter.format(product.price)} - <strong>Quantidade:</strong> ${quantity} - <strong>Total:</strong> ${formatter.format(total)}
        </li>`;
    }
  });

  const reciboModalLabel = document.getElementById("reciboModalLabel");
  const recibo = document.getElementById("recibo");

  if (!nome) {
    reciboModalLabel.innerHTML = "Erro ao calcular o pedido";
    recibo.innerHTML = `
      <h3 class="text-danger text-center">Por favor, preencha o seu nome.</h3>
    `;
    return;
  }

  if (!listItems) {
    reciboModalLabel.innerHTML = "Erro ao calcular o pedido";
    recibo.innerHTML = `
      <h3 class="text-danger text-center">Por favor, selecione pelo menos um item para fazer o pedido.</h3>
    `;
    return;
  }

  reciboModalLabel.innerHTML = "Recibo do Pedido";
  recibo.innerHTML = `
    <p id="intro" class="display-5">Caro <span>${nome}</span>,</p>
    <p>Segue os dados do seu pedido:</p>
    <ul id="output">${listItems}</ul>
    <p id="total"><strong>Total:</strong> ${formatter.format(totalFinal)}</p>
  `;
}
