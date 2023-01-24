const cliente = {
  nome: "Joao",
  idade: 24,
  email: "joao@firma.com",
  telefone: ["1155555550", "114444440"],
};

cliente.enderecos = [
  {
    rua: "kemel 1",
    numero: 337,
    apto: true,
    complemnto: "ap934",
  },
];

for (let chave in cliente) {
  let tipo = typeof cliente[chave];
  if (tipo != "object" && tipo != "function") {
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}.`);
  }
}
