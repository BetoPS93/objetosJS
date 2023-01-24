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

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("enderecos")) {
  console.error("Erro. é necessário ter um endereço cadastrado");
}
