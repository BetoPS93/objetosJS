const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "012345678998",
    email: "andre@andre.com",
}

console.log(`O cliente ${cliente["nome"]} tem ${cliente["idade"]} anos`);

const chaves = ["nome", "idade", "cpf", "email"];

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`)
})
