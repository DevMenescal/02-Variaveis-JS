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
