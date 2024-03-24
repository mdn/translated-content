---
title: Herança e cadeia de protótipos (prototype chain)
slug: Web/JavaScript/Inheritance_and_the_prototype_chain
---

{{jsSidebar("Advanced")}}

JavaScript é um pouco confuso para desenvolvedores com experiência em linguagens baseadas em classes (como Java ou C++), porque é dinâmico e não dispõe de uma implementação de uma `class` (a palavra-chave `class` foi introduzida no ES2015, mas é syntax sugar, o JavaScript permanece baseado em `prototype`).

Quando se trata de herança, o JavaScript tem somente um construtor: objetos. Cada objeto tem um link interno para um outro objeto chamado `prototype`. Esse objeto `prototype` também tem um atributo `prototype`, e assim por diante até o que o valor `null` seja encontrado como sendo o seu `prototype`. `null` que, por definição, não tem `prototype`, e age como um link final nesta **cadeia de protótipos** (prototype chain).

Isto muitas vezes é considerado como um dos pontos fracos do JavaScript, mas o modelo de herança prototipal é de fato mais potente do que o modelo clássico. É, por exemplo, relativamente trivial construir um "modelo clássico" (como na implementaçao de `class`), enquanto o contrário é uma tarefa muito mais difícil.

1 _N. da T: Como em uma implementação de fila em C, por exemplo._

## Herança com o encadeamento de protótipos

### Propriedades de heranças

Objetos em JavaScript são "sacos" dinâmicos de propriedades (a que se refere as próprias propriedades) e cada um tem um link para um objeto `prototype`. Eis o que acontece quando se tenta acessar uma propriedade:

```
// Vamos criar um objeto o da função f com suas próprias propriedades a e b:
let f = function () {
   this.a = 1;
   this.b = 2;
}
let o = new f(); // {a: 1, b: 2}

// adicionar propriedades no protótipo da função f
f.prototype.b = 3;
f.prototype.c = 4;

// não defina o protótipo f.prototype = {b: 3, c: 4}; isso vai quebrar a cadeia de protótipos
// o. [[Prototype]] possui propriedades bec.
// o. [[Prototype]]. [[Prototype]] é Object.prototype.
// Finalmente, o. [[Prototype]]. [[Prototype]]. [[Prototype]] é nulo.
// Este é o fim da cadeia de protótipos, como nulo,
// por definição, não possui [[Prototype]].
// Assim, a cadeia completa de protótipos se parece com:
// {a: 1, b: 2} ---> {b: 3, c: 4} ---> Object.prototype ---> null dfdf

console.log(o.a); // 1
// Existe uma propriedade 'a' no objeto o? Sim, e seu valor é 1.

console.log(o.b); // 2
// Existe uma propriedade própria 'b' em o? Sim, e seu valor é 2.
// O protótipo também tem uma propriedade 'b', mas não é visitado.
// Isso é chamado de sombreamento de propriedade(Property Shadowing)

console.log(o.c); // 4
// Existe uma propriedade própria 'c' em o? Não, verifique seu protótipo.
// Existe uma propriedade 'c' própria em o. [[Prototype]]? Sim, seu valor é 4.

console.log(o.d); // undefined
// Existe uma propriedade 'd' própria em o? Não, verifique seu prototype.
// Existe uma propriedade 'd' em o. [[Prototype]]? Não, verifique seu prototype.
// o. [[Prototype]]. [[Prototype]] é Object.prototype e não há propriedade 'd' por padrão, verifique seu prototype.
// o. [[Prototype]]. [[Prototype]]. [[Prototype]] é nulo, pare de pesquisar,
// nenhuma propriedade encontrada, retorne indefinido.
```

[Code Link](https://repl.it/@khaled_hossain_code/prototype)

Atribuir uma propriedade a um objeto cria uma propriedade nele. A única exceção às regras de obtenção e definição de comportamento é quando há uma propriedade herdada com um [getter or a setter](/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters).

### Herança de "métodos"

JavaScript não tem "métodos" como os que conhecemos em linguagens baseadas em classes. Em JavaScript, qualquer função pode ser adicionada em um objeto em forma de propriedade. Uma herança de funções age como a herança de quaisquer outras propriedades que não sejam funções, e podemos inclusive realizar sobre-escrita de função (_method overriding_)!

Quando uma herança de função é executada, o valor de [`this`](/pt-BR/JavaScript/Reference/Operators/this) aponta para o objeto que herdou as propriedades, não para o objeto prototype onde as propriedades foram escritas originalmente.

```js
var o = {
  a: 2,
  m: function (b) {
    return this.a + 1;
  },
};

console.log(o.m()); // 3
// Ao chamar 'o.m' neste caso, "this" refere-se a 'o'

var p = Object.create(o);
// 'p' é um objeto que foi herdado de 'o'

p.a = 12; // cria uma propriedade 'a' no objeto 'p'
console.log(p.m()); // 13
// Ao chamar 'p.m', 'this' refere-se a 'p'
// Então, quando 'p' herda a função de 'm' de 'o', 'this.a' representa 'p.a' que é a própria propriedade 'a' de 'p'
```

## Maneiras de criar objetos e resultados dos protótipos encadeados

### Objetos criados com sintaxe de construtores

```js
var o = { a: 1 };

// O recém-criado objeto 'o' tem Object.prototype como o seu [[Prototype]]
// 'o' não tem uma propriedade chamada 'hasOwnProperty'
// hasOwnProperty é uma propriedade própria de Object.prototype. Então 'o' herda hasOwnProperty de Object.prototype

// Object.prototype tem null como seu protótipo.
// o ---> Object.prototype ---> null

var a = ["yo", "whadup", "?"];

// Arrays herdam de Array.prototype (que tem métodos como indexOf, forEach, etc.)
// A cadeia de protótipos se parece com isso:
// a ---> Array.prototype ---> Object.prototype ---> null

function f() {
  return 2;
}

// Funções herdam de Function.prototype (que tem métodos como call, bind, etc.)
// f ---> Function.prototype ---> Object.prototype ---> null
```

### Com um construtor

Um "construtor" em JavaScript é "somente" uma função que passa a ser chamada com o operador [new](/pt-BR/JavaScript/Reference/Operators/new).

```js
function Graph() {
  this.vertexes = [];
  this.edges = [];
}

Graph.prototype = {
  addVertex: function (v) {
    this.vertexes.push(v);
  },
};

var g = new Graph();
// 'g' é um objeto com as propriedades 'vertexes' e 'edges'.
// g.[[Prototype]] é o valor de Graph.prototype quando new Graph() é executada.
```

### Com Object.create

ECMAScript 5 introduziu o novo método: [Object.create](/pt-BR/JavaScript/Reference/Global_Objects/Object/create). Invocando este método podemos criar novos objetos. O prototype destes novos objetos é o primeiro argumento do método:

```js
var a = { a: 1 };
// a ---> Object.prototype ---> null

var b = Object.create(a);
// b ---> a ---> Object.prototype ---> null
console.log(b.a); // 1 (inherited)

var c = Object.create(b);
// c ---> b ---> a ---> Object.prototype ---> null

var d = Object.create(null);
// d ---> null
console.log(d.hasOwnProperty); // undefined, porque não herda de Object.prototype
```

### Performance

O tempo de pesquisa para as propriedades que estão no alto da cadeia de protótipos pode ter um impacto negativo no desempenho, e isso pode ser significativo no código em que o desempenho é crítico. Além disso, tentar acessar propriedades inexistentes irá sempre atravessar a cadeia cheia do protótipo (full prototype chain).

Porém, quando estamos interagindo com as propriedades de um objeto, **toda** propriedade que está na cadeia do prototype (prototype chain) vai ser enumerada.

Para verificar se um objeto tem uma propriedade definida em si mesmo e não em algum lugar na sua cadeia de protótipo, é necessário usar o método [`hasOwnProperty`](/pt-BR/docs/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) que todos os objetos herdam do Object.prototype.

[`hasOwnProperty`](/pt-BR/docs/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) é a única alternativa em JavaScript que lida com propriedades sem atravessar a cadeia de protótipos.

> **Nota:** Observação: **Não** é suficiente apenas verificar se o valor da propriedade é [`undefined`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/undefined) para saber se ela existe. A propriedade pode muito bem existir e não ter sido inicializada, sendo assim o seu valor undefined.

### Má Pratica: Estender protótipos nativos

Um erro frequentemente cometido por programadores é estender um Object.prototype.

Esta técnica é chamada de "monkey patching" e quebra o encapsulamento. Não existe uma boa razão para desorganizar tipos nativos do JavaScript para adicionar uma nova funcionalidade ao mesmo.

O único bom motivo para estender um protótipo nativo do JavaScript é para dar suporte a novas "features" do JavaScript; por exemplo: Array.forEach, etc.

### Conclusão

É essencial entender bem "prototypal inheritance" antes de escrever códigos complexos. Tome cuidado com o tamanho da sua cadeia de protótipos, quebre a cadeia caso necessário para evitar problemas de performance. Nunca estenda protótipos nativos a menos que seja para conseguir compatibilidade com novas "features" do JavaScript.
