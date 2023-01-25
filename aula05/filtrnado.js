const cliente = require("./clientes.json");

function filtrarApartamentosSemComplemento(cliente) {
  return cliente.filter((cliente) => {
    return (
      cliente.endereco.apartamento &&
      !cliente.endereco.hasOwnProperty("complemento")
    );
  });
}

const filtrados = filtrarApartamentosSemComplemento(cliente);

console.log(filtrados);
