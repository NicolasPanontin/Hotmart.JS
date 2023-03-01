// 1 - variáveis
// let nome = "Nicolas";

// console.log(nome);

// nome = "Nicolas Panontin";

// console.log(nome);

// const idade = 18;

// console.log(idade);

// idade = 19

// console.log(typeof nome);

// console.log(typeof idade)

// 2 - mais sobre variaveis
// let 2teste = "invalido"
// let @teste = "ivalido"

// let a = 10,
//     b = 20,
//     c = 30 ;

// console.log(a, b, c)

// const nomecompleto = "Nicolas Panontin";

// const nomeCompleto = "Humberto Dantas";

// console.log(nomecompleto);

// console.log(nomeCompleto);

// let _teste = "ok";

// let $teste = "ok";

// console.log(_teste, $teste)

// 3 - prompt
// const age = prompt("Digite a sua idade")

// console.log(`Você tem ${age} anos`)

// 4 - alert
// alert("Testando");

// 5 - math
// console.log(Math.max(5, 2, 1, 10))

// console.log(Math.floor(5.14))

// console.log(Math.ceil(5.14))

// 6 - console
// console.log("teste!")

// console.error("erro")

// 7 - if
// const m = 10;

// if (m > 5) {
//     console.log("M é maior que 5!")
// }

// const user = "João";

// if(user == "João") {
//     console.log("Ola João")
// }

// if (user === "Maria") {
//     console.log("ola Maria");
// }

// console.log(user === "João", user === "Maria")

// // 8 - else
// const loggedIn = false

// if(loggedIn) {
//     console.log("Está autenticado")
// } else {
//     console.log("Não está autenticado")
// }

// const q = 10
// const w = 15

// if(q > 5 && w > 20) {
//     console.log("Números mais altos");
// } else {
//     console.log("Os números não são mais altos");
// }

// // 9 - else if
// if(1 > 2) {
//     console.log("Teste")
// } else if(2 > 3) {
//     console.log("Teste 2")
// } else if (5 > 1) {
//     console.log("Agora sim")
// }

// const userName = "Nicolas"
// const userAge = 18

// if(userName === "José") {
//     console.log("Bem vindo José");
// } else if (userName === "Nicolas" && userAge === 18) {
//     console.log("Olá Nicolas, Você tem 18 anos");
// } else {
//     console.log("Nenhuma condição aceita!")
// }

// 10 - while

// let p = 0

// while(p < 5) {
//     console.log(`Repetindo ${p}`);
//     p++
// }

// loop infinito
// let x = 10

// while(x > 5) {
//     console.log(`imprimindo ${x}`)
// }

// 11 - do while
// let o = 10

// do { 
//     console.log(`Valor de o : ${o}`)
//     o--
// } while(o > 1)

// 12 - for
// for(let t = 0; t < 10; t++) {
//     console.log("Repetindo algo...")
// }

// let r = 10

// for(r; r > 0; r = r - 1) {
//     console.log(`O r esta diminuindo ${r}`)
// }

// 13 - identação
for(let u = 0; u < 10; u++) {
    if(u * 2 > 10) {
    console.log(`Maior que 10! ${u}`)
    } else {
        if (u / 2 === 0) {
            console.log("deu 0");
        }
    }
}