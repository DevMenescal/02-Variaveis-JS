/* == Criando Variaveis == 

 ● Até então estávamos colocando os valores nas 
expressões de console;
 ● Porém isso não é tão comum no dia a dia, nós 
precisamos utilizar variáveis;
 ● Que são como containers, que salvam informações 
para quando precisamos utilizar;
 ● Temos como declarar variáveis com let e const;
 

 ● Vamos ver na prática!*/

 // 1 - Variáveis

 // Variáveis LET: Recebe um valor que pode ser mudado posteriormente no código.

 let nome = "Gustavo"

 console.log(nome)

 nome = "Gustavo Menescal"

 console.log(nome)

 // Variáveis CONST: Recebe um valor que não pode ser mudado posteriormente no código.

 const idade = 41

 console.log(idade)

//  idade = 42

//  console.log(idade)

console.log(typeof nome)
console.log(typeof idade)


// Não é permitido iniciar o nome de uma variável com números ou caracteres especiais.

// let 2teste = "inválido"
// let @teste = "inválido"

// Para nomes de variaveis, é aconselhado utilizar o modelo "camel case" Ex:

let fulanoDeTal = "Fulano"
const anoNascimento = 1982

console.log(fulanoDeTal , anoNascimento)

/*Os únicos caractéres que podemos utilizar no início de nomes de variveis são: 
o underline "_" e cifrão "$"" */

let _teste = "válido"

const $teste = "válido"

console.log(_teste, $teste)

/* == Empty Values
● Temos duas palavras reservadas que pertencem a 
    este grupo de dados: undefined e null;
● Undefined geralmente é visto quando utilizamos um 
  código que ainda não foi definido;
● Já null, costuma ser imposto pelos programadores, 
  para determinar que não há ainda um valor;*/

  // Declarações de variáveis com Null e Undefined.
  let variavelNull = null
  let variavelUndefined 

  console.log(variavelNull)
  console.log(variavelUndefined)

  // Exemplos de Uso de Variáveis

  // Concatenação com Strings

  let nomezito = "Severino Aurélio"

  const idadezita = 78

  let gostaDeProgramacao = true

  let filmeFavorito = "Emanuelle"

  let gameFavorito = "Dominó com os parça"

  console.log("O Sr.(a): " + nomezito + " com a idade de: " + idadezita + " , gosta de programação? " + gostaDeProgramacao + " , diz que seu filme favorito é: " + filmeFavorito + " e seu jogo favorito é " + gameFavorito + "." )

// Operação com Variáveis

let x = 20

let y  = 30

let soma = x + y

console.log("O valor da soma entre as variáveis x e y é: " + soma)

// Comparação entre as Variáveis

x = 5
y = 10
console.log(x < y) // true
console.log(x === y) // false
console.log(x !== y) // true

/*Interpolação (Template Strings)
 ● A interpolação é um recurso semelhante a 
concatenação;
 ● Mas nos possibilita a escrever tudo na mesma 
string;
 ● E para funfar, deve ser escrita `entre crases`;
 ● Podemos executar código JavaScript com ${ algum 
código }; */

// Usando a Interpolação

// Exemplo 01

let produto = "Maçãs"
let quantidade = 10
let precoUnitario = 2.5
let total = quantidade * precoUnitario

// Ao invés de usar isso: ( Concatenação )

console.log("Você comprou: " + quantidade + " " + produto + " por " + total + " reais.")

// Use isso: ( Interpolação )

console.log(`Você comprou: ${quantidade} ${produto} por ${total} reais.`)

// Exemplo 2 

const animal1 = "gatinho"

const animal2 = "bucica"

let qtdGatos = 4

let qtdBucicas = 5

let totalAnimais = qtdGatos + qtdBucicas

let frase = `Minha vózinha carquetica prefere ${animal1} do que ${animal2}, porém ela é uma acumuladora. Possui ${qtdGatos} gatos e ${qtdBucicas} bucicas. No total, são: ${totalAnimais} bichos!`

console.log(frase)

// Exemplo 3 

// let nomeDoUsuario = window.prompt("E aí feio, quem se atreve a entrar na Matrix? Pode me dizer?")

// window.alert(`Opa, é você então meu caro ${nomeDoUsuario}, pode prosseguir, perdoe a minha insolência!`)


// CONVERTENDO VALORES DE UMA VARIÁVEL

// DE STRING PARA NÚMERO

// Usando o parseInt() para número inteiros

let stringNumero = "42"
let numero = parseInt(stringNumero)
console.log(numero)
console.log(typeof numero)

// Usando o parseFloat() para número de ponto flutuante (quebrados).

let stringNumeroQuebrado = "3.14"
let numeroQuebrado = parseFloat(stringNumeroQuebrado)
console.log(numeroQuebrado)

// Usando Number() Mais recomendado

let stringNumero10 = "37"
let numero10 = Number(stringNumero10)
console.log(numero10)

// Usando o operardor + ante do nome da variável 

let stringNumero1 = "1982"
let numeroConvertido1 = +stringNumero1

let stringNumero2 = "1.982"
let numeroConvertido2 = +stringNumero2

console.log(numeroConvertido1, numeroConvertido2)

// Convertendo de número para String

// usando toString()

let numero666 = 666
let stringNumero666 = numero666.toString()
console.log(stringNumero666)
console.log(typeof stringNumero666)

// Usando o String()

let numero33 = 33
let stringNumero33 = String(numero33)
console.log(stringNumero33)