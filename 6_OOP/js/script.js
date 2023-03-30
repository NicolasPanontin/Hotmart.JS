// 1 - métodos
const animal = {
    nome: "Bob",
    latir: function() {
        console.log("Au Au")
    }

}

console.log(animal.nome);

animal.latir();

// 2 - aprofundando em métodos
const pessoa = {
    nome: "Nicolas",

    getNome: function() {
        return this.nome;
    },

    setNome: function (novoNome) {
       this.nome = novoNome
    },
};

console.log(pessoa.nome);

console.log(pessoa.getNome());

pessoa.setNome("Joaquim")

console.log(pessoa.getNome())