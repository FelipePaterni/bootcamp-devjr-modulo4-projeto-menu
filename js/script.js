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
          Prato: ${product.name} -
          Preço unitário: ${formatter.format(product.price)} -
          Quantidade: ${quantity} -
          Total: ${formatter.format(total)}
        </li>`;
    }
  });

  document.getElementById("recibo").innerHTML = `
    <p id="intro">Caro <span>${nome}</span></p>
    <p>Segue os dados do seu pedido</p>
    <p>O seu pedido é:</p>
    <ul id="output">${listItems}</ul>
    <p id="total">Total: ${formatter.format(totalFinal)}</p>`;
}
