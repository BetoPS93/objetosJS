const dados = require("./cliente.json");

console.log(dados);
console.log(typeof dados);

const clienteEmString = JSON.stringify(dados);

//transformar em string
console.log(clienteEmString);
console.log(typeof clienteEmString);

//transformar em objeto novamente
const objetoCliente = JSON.parse(clienteEmString);
console.log(objetoCliente);
