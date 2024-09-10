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

/* CONHECENDO ESTRUTURAS CONDICIONAIS

 ● Os programas são executados de cima para baixo;
 ● Com estas estruturas podemos alterar o fluxo de 
execução;
 ● O caminho dependerá das condições e 
comparações;*/


 //USANDO IF

 /*if: Executa um bloco de código se uma condição for verdadeira.

   SINTAXE: if (condição) {} */

   // EXEMPLO 01

   let idadeMaria = 71

   let idadeJoao = 63

   if (idadeMaria > idadeJoao) {
    console.log("Exemplo 01 IF: Eita mah, a Maria é mais velha que o João.")
   }

   // EXEMPLO 02

   let usuario = "MarceloD2"

   if (usuario === "MarceloD2") {
    console.log(`Fala meu camarada ${usuario}, seu casca de bala!`)
   }

   //USANDO ELSE IF 
/* ELSE IF: Adiciona uma nova condição se a anterior for falsa.

SINTAXE: 
if (condicao) {
    
} else if (outraCondicao) {} */

// EXEMPLO 01

let logadoTiktok = false

if (logadoTiktok === true) {
  console.log("Bem-vindo meu caro desocupado!")
}

else if (logadoTiktok === false) {
  console.log("Até que enfim, foi arrumar o quarto.")
} 

// EXEMPLO 02

let nomeUser = "Letícia"

if (nomeUser === "Rita") {
  console.log("Seja bem-vinda, Rita: a coroa nota 10!")
}

else if (nomeUser === "Maria") {
  console.log("Ih rapaix, não é a Letícia. Fuja!!!")
}

else if (nomeUser === "Letícia") {
  console.log("Ah, é a Letícia, agora sim!!!")
}

//USANDO O ELSE
/*else: Executa um bloco de código se todas as condições anteriores forem falsas.
  
  SINTAXE: if (condição) {
  }

  else if (outra condição) {
  }
  
  else {}*/

  // EXEMPLO 01 

  let corEscolhida = "preta"

  if (corEscolhida === "branca") {
    console.log("Ótima escolha de cor, seu carro vai ser de cor branca.")
  }
  else if (corEscolhida === "vermelha") {
    console.log("Caraca, seu carro vai ser da cor vermelha.")
  } else {
    console.log("Só temos 2 tipos de cores disponíveis... Escolha branco ou vermelho.")
  }

  // EXEMPLO 02

  let idadeUsario = 41

  if (idadeUsario <= 17){
    console.log("Este site não é permitido o acesso à menores de idade.")
  }
else if (idadeUsario === 18) {
  console.log("Bem-vindo ao nosso site, Juízo.")
}
else if (idadeUsario >= 90) {
  console.log("Eita véi, tu morre!!")
}
else {
  console.log("Bem-vindo, boa Diversão!")
}

  /*Operadores lógicos
 ● Os operadores lógicos servem para unir duas ou 
mais comparações;
 ● O resultado final também é um boolean;
 ● && - AND - true apenas se os dois lados forem 
verdadeiros;
 ● || - OR - para ser true, um lado como true é 
suficiente;
 ● !  - NOT - este operador inverte a comparação; */

 // EXEMPLO 01 - "AND" &&

 let nomeUsuario01 = "Gustavo"
 let senhaUsuario01 = 123456

 if (nomeUsuario01 === "Gustavo" && senhaUsuario01 === 12345) {
  console.log("Login Realizado com Sucesso!")
 }
 else{
  console.log("Insira corretamente os dados de login.")
 }

 // EXEMPLO 02  - "OR" ||

 let temDinheiro = true
 let temCartao = false

 if (temDinheiro === true || temCartao === true) {
  console.log("Pode efetuar a compra!")
 }
 else {
  console.log("Tá liso feio?!?")
 }


 // EXEMPLO 03 - "NOT" !

 let estaChovendo = true

 if (!estaChovendo) {
  console.log("Parece que não está chovendo, que tal dar uma banda de bike?")
 }
 else{
  console.log("Ih, tá chovendo! Melhor ficar em casa e deixar para depois...")
 }

 // VAMOS PARA PRÁTICA

 let idadeParticipante = 17
 let temDocumento = true

 if (idadeParticipante <=17 && temDocumento) {
  console.log("Menor, mas pode participar do evento.")
 }
 else if (idadeParticipante <= 17 || !temDocumento) {
  console.log("Não pode participar!")
 } else {
  console.log("Pode Participar.")
 }

   /* Estrutura condicional: switch
 ● O switch pode ser utilizado para organização de um 
excesso de if/else;
 ● Cada if seria um case;
 ● Para cada case, temos que adicionar um break;
 ● E temos o default, que é como o else; */

 /* SINTAXE: switch (expressao) {
  case valor1:
    
    break
  case valor2:
    
    break
  
  default:
    // código a ser executado se nenhum dos casos anteriores for correspondido
} 
    
*/

// EXEMPLO 01

const job = "Motoboy"

switch (job){
  case "Programador":
    console.log("Você é um programador!")
    break
  case "Advogado":
    console.log("Você é um Advogado!")
    break
  case "Engenheiro":
    console.log("Você é um Engenheiro!")
    break
  default:
    console.log("Profissão não encontrada!")
} 

 //INCREMENTO E DECREMENTO: são usados para aumentar ou diminuir o valor de uma variável numérica em +1 OU -1

 // ANTES DA VARIÁVEL: Quando você usa o operador de incremento ou decremento antes da variável (++variavel ou --variavel), a mudança é feita imediatamente.  

 // EXEMPLO 01 - INCREMENTO 

 let contagemMais = 5
 let resultadoMais = ++contagemMais * 2
 console.log(`O resultadoMais ficou: ${resultadoMais}`)
 console.log(`O contagemMais virou: ${contagemMais}`) 

 // EXEMPLO 02 - DECREMENTO

 let contagemMenos = 5
 let resultadoMenos = --contagemMenos * 2
 console.log(`O resultadoMenos ficou: ${resultadoMenos}`)
 console.log(`O contagemMenos virou: ${contagemMenos}`)


  //DEPOIS DA VARIAVEL: Quando você usa o operador de incremento ou decremento depois da variável (variavel++), o valor inicial da variável é usado em qualquer expressão aí só depois é efetuado a mudança.

 let contagemMais2 = 6
 let resultadoMais2 = contagemMais2++ * 2
 console.log(`O resultadoMais2 ficou: ${resultadoMais2}`)
 console.log(`O contagemMais2 virou: ${contagemMais2}`) 

 let contagemMenos2 = 5
 let resultadoMenos2 = contagemMenos2-- * 2
 console.log(`O resultadoMenos2 ficou: ${resultadoMenos2}`)
 console.log(`A contagemMenos2 virou: ${contagemMenos2}`) 

 
 //ESTRUTURAS DE REPETIÇÃO
  /* O que são estruturas de repetição?
 ● Um bloco de código que se repete até uma 
condição ser satisfeita;
 ● Isso evita a repetição desnecessária do nosso 
código;
 ● A suas sintaxes são diferentes, mas as duas chegam 
no mesmo resultado;
 ● Temos que nos atentar ao loop infinito */

 //WHILE:  é usada para repetir um bloco de código enquanto uma condição especificada for verdadeira.

 /*SINTAXE: while (condição) {} */

 // EXEMPLO 01 - Feliz Ano Novo

 let contagemRegressiva = 10

 while (contagemRegressiva >= 0){
  console.log(contagemRegressiva)
  contagemRegressiva--
 }
 console.log("Feliz ano novo Negada!!!")

 // EXEMPLO 02 

 let estoque = 5

 while (estoque > 0) {
  console.log("Produto em Estoque . Quantidade restante: " + estoque)
  estoque--
 }
 console.log("Produto Esgotado!")

 //FOR: é usada quando você sabe exatamente quantas vezes deseja repetir uma ação. Ele consiste em três partes: inicialização, condição e expressão final.

/* SINTAXE: for (inicialização; condição; expressão final) {} */

// EXEMPLO 01 

for (let i = 0; i < 10; i++){
  console.log("Repetindo algo...")
}

// EXEMPLO 02 

let estoque1 = 10

for (estoque1; estoque1 > 0; estoque1 = estoque1 - 1){
  console.log(`O estoque está diminuindo: ${estoque1}`)
}
console.log(`O estoque é igual a ${estoque1}`)

/* Forçando a saída de um loop
 ● Com a instrução de break podemos parar um loop, 
fazendo que repetições cessem;
 ● Isso pode poupar memória, pois o código será 
executado menos vezes;
 ● Não é tão comum, mas é um recurso válido do javascripitis; */

 // EXEMPLO 01 

 let estoque2 = 20
 for (estoque2; estoque2 > 10; estoque2--){
  console.log(`O estoque é: ${estoque2}`)

  if (estoque2 === 12){
    console.log("Atenção! O estoque chegou a 12!")
  break
  }
 }

/* Pulando uma execução do loop
 ● A palavra reservada continue, pode pular uma ou 
mais execuções do loop;
 ● É um recurso utilizado de forma semelhante ao 
break; */

// EXEMPLO 01

for (let e = 1; e <= 5; e++){
  if (e === 3){
    continue
  }
  console.log("Contagem: " + e)
}

/* O que são funções?
 ● Estruturas de código menores, podemos dividir 
nosso código em várias funções;
 ● O ideal é que cada uma tenha apenas um único 
objetivo;
 ● Isso nos faz poupar código, pois podemos 
reaproveitá-las;
 ● A linguagem tem várias funções já criadas, e nós 
podemos criar as nossas;

    Definindo uma função
  ● A estrutura da função é um pouco mais complexa;
  ● Primeiramente utilizamos a palavra function, isso 
  inicia uma função;
  ● Precisamos depois nomeá-la;
  ● Os parâmetros, que são uma espécie de 
  configuração, ficam entre ( ) depois do nome;
  ● O corpo da função fica entre  { };
  ● Geralmente uma função retorna um valor; */

  // SINTAXE: function nomeDaFuncao () {}

  // EXEMPLO 01 

  function minhaFuncao() {
    console.log("Testando 1 2 3!!!")
  }

minhaFuncao()

// EXEMPLO 02

const minhaFuncaoEmVariavel = function (){
  console.log("Usamos uma função em uma variável!")
}

minhaFuncaoEmVariavel()

// EXEMPLO 03 

function funcaoComParametro(txt) {
  console.log(`Imprimindo: ${txt}`)
}

funcaoComParametro("Fala galera!!!")

/* Usa return é fundamental em funções porque permite que elas produzam algum resultado que pode ser usado em outras partes do código. Sem o return, não conseguimos usar o resultado dela em outra parte do código. */


const a = 10
const b = 20
const c = 30
const d = 40

function somandoNumeros (n1, n2){
  return n1 + n2
}

const resultado = somandoNumeros (a, b)

console.log(resultado)

console.log(somandoNumeros(c, d))

/* Escopo das funções:
 ● As funções tem um escopo separado do escopo do 
programa, que é o global;
 ● Este escopo faz com que variáveis de fora não 
funcionem dentro;
 ● Podemos então declarar novas variáveis, sem 
interferir nas já declaradas;*/

// EXEMPLO 01 

let varTeste = 10

function testandoEscopo (){
  let varTeste = 20
  console.log(`EXEMPLO ESCOPO: Variável dentro da função: ${varTeste}`)
}

console.log(`EXEMPLO ESCOPO: Variável fora da função: ${varTeste}`)

testandoEscopo()