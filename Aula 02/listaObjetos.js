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

cliente.enderecos.push({
  rua: "do dal",
  numero: 24,
  apto: false,
  complemnto: "",
});

console.log(cliente.enderecos);
