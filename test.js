// Map - Dobrando valores

let numbers = [1,2,3];
 
let doubledNumbers = numbers.map((el) => el * 2);
 
console.log('numeros duplicados: ' + doubledNumbers); //[2, 4, 6]

// Filter - Valores ímpares

numbers = [1, 2, 3];
 
let oddNumbers = numbers.filter(el => el % 2 === 1);
 
console.log(oddNumbers); //[1, 3]

// Filter + Map

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
 
let oddDoubledNumbers = numbers.filter(x => x % 2 === 1).map(x => x * 2);
 
console.log(oddDoubledNumbers); //[2, 6, 10, 14, 18, 22, 26, 30] - Números ímpares dobrados.

// Reduce

numbers = [1, 3, 5];

// Itera o array somando os elementos e armazenando a soma no total
// Inicia o total com 0
let average = numbers.reduce((total, currentElement) => total + currentElement, 0) / numbers.length;

console.log(average); //3

// Array.prototype.reduce(function(previousValue, currentValue, index, array)[, initialValue])

// callback: função que é executada em cada valor no array:
// previousValue: É o valor retornado na última invocação do callback, ou o argumento initialValue, se fornecido;
// currentValue: O elemento atual que está sendo processado no array;
// index: O índice do elemento atual que está sendo processado no array;
// array: O array ao qual a função reduce foi executado;
// initialValue: Objeto que será utilizado como valor do argumento previousValue no momento da primeira chamada da função de callback.


// Usando tudo junto


// Preciso de uma listagem dos alunos de determinada turma que foram aprovados ...
// (regra para aprovação: média maior ou igual 7). 
// Comparativamente, quão melhor os alunos aprovados foram que os alunos reprovados  ...
// (quantos % a média dos alunos aprovados foi superior aos alunos reprovados)?

// Objeto chamado joão que recebe um string que vai ser o nome
// Possui a nota que é um array
// Possui um método para armazenar as notas, recebendo um spread com os valores anteriores
// Armazena isso no array de notas
// No reduce ele soma as notas e depois tira a média.
let Aluno = function(nome) {
    notas: [],
    this.nome = nome,
    // (...) spread, adiciona o valor atual ao novo
    this.definirNotas = function(...n) { 
        console.log(n);
      this.notas = n;
    },
    this.calcularMedia = function() {
      return this.notas.reduce((p, c) => p + c) / this.notas.length;
    }
  }
   
  let joao = new Aluno('joao');
  let pedro = new Aluno('pedro');
  let bruna = new Aluno('bruna');
   
  joao.definirNotas(1, 4, 7);
  pedro.definirNotas(5, 8, 9);
  bruna.definirNotas(10, 6, 10);
   
  let alunos = [joao, pedro, bruna];
   
  let alunosAprovados = alunos.filter(el => el.calcularMedia() >= 7);
  let alunosReprovados = alunos.filter(el => el.calcularMedia() < 7); 
  
  // Soma todas as notas dos alunos, cada nota do aluno 
  // Aluno A = [10, 7]
  // Aluno B = [8, 9]
  // notas = [ [10, 7], [8, 9] ]

  // 1º map = el = [10, 7], Depois: el = [8, 9]
  // 1º reduce = p = [17], Depois: p = [17, 17]
  // 2º reduce = p = 34

  // / Divisão

  // 1º map = el = [2], Depois: el = [2, 2]
  // 2º reduce = 4

  // Resultado = 34 / 4 = 8,5
  let mediaDosAlunosAprovados = alunosAprovados
  .map(el => el.notas                           // el = nota única do array de alunos aprovados
    .reduce((p, e) => p + e))                   // Somando todas as notas dos alunos aprovados
    .reduce((p, e) => p + e) / alunosAprovados  // Vai dividir pela quantidade de notas totais dos alunos
    .map(el => el.notas.length)                 // percorrendo o array pegando o tamanho do array das notas por aluno
    .reduce((p, e) => p + e);                   // Somando obtendo assim o número de notas totais para fazer a divisão
   
  let mediaDosAlunosReprovados =
  alunosReprovados.map(el => el.notas
    .reduce((p, e) => p + e))
    .reduce((p, e) => p + e) / alunosReprovados
    .map(el => el.notas.length)
    .reduce((p, e) => p + e);
   
  console.log('Os alunos aprovados foram: ' + alunosAprovados.map(x => x.nome));//[Pedro, Bruna]
  console.log('A média dos alunos aprovados foi: ' + mediaDosAlunosAprovados);//8
  console.log('A média dos alunos reprovados foi: ' + mediaDosAlunosReprovados);//4
  console.log('Os alunos aprovados tiveram uma média de notas ' + ((mediaDosAlunosReprovados /mediaDosAlunosAprovados) * 100) + '%' + ' superior aos alunos reprovados');//50%
  
  let foo = [1, 1]

  foo_s = foo
  .map(f => foo.length)
  .reduce((tot, atu) => tot + atu)

  console.log(foo_s)