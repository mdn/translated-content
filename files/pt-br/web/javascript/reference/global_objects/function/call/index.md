---
title: Function.prototype.call()
slug: Web/JavaScript/Reference/Global_Objects/Function/call
---

{{JSRef}}

## Introdução

O método **`call()`** invoca uma função com um dado valor `this` e argumentos passados individualmente.

> [!NOTE]
> Apesar de a sintaxe desta função ser quase idêntica à de {{jsxref("Function.prototype.apply", "apply()")}}, a principal diferença é que `call()` aceita uma **lista de argumentos**, enquanto `apply()` aceita **um único array de argumentos.**

## Sintaxe

```
fun.call(thisArg[, arg1[, arg2[, ...]]])
```

### Parâmetros

- `thisArg`
  - : O valor de `this` proveu a chamada para _`fun`_. Note que `this` pode não ser o valor atual visto pelo método: se esse método é uma função em {{jsxref("Strict_mode", "non-strict mode", "", 1)}} code, {{jsxref("null")}} e {{jsxref("undefined")}} serão reescritos com o objeto global, e valores primitivos serão encaixados.
- `arg1, arg2, ...`
  - : Argumentos para o objeto.

## Descrição

Você pode atribuir um objeto `this` diferente quando executar uma função existente. `this` refere-se ao objeto atual, o objeto em execução. Com `call`, você pode escrever um método uma vez e então herdá-lo em outro objeto, sem ter que reescrever o método para o novo objeto.

## Exemplos

### Exemplo: Usando `call` para encadear construtores para um objeto

Você pode usar `call` para encadear construtores para um objeto, similar ao Java. No seguinte exemplo, o construtor do objeto `Product` é definido com dois parâmetros, `name` e `price`. Outras duas funções `Food` e `Toy` executam `Product` passando `this`, `name` e `price`. O Produto inicializa as propriedades `name` e `price`, ambos definem o `category`.

```js
function Product(name, price) {
  this.name = name;
  this.price = price;

  if (price < 0) {
    throw RangeError(
      "Cannot create product " + this.name + " with a negative price",
    );
  }

  return this;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = "food";
}

Food.prototype = Object.create(Product.prototype);

function Toy(name, price) {
  Product.call(this, name, price);
  this.category = "toy";
}

Toy.prototype = Object.create(Product.prototype);

var cheese = new Food("feta", 5);
var fun = new Toy("robot", 40);
```

### Exemplo: Usando o `call` para chamar funções anônimas

Neste exemplo, criamos uma função anônima que usa o `call` para executá-lo em todos os objetos em um array(vetor). O principal propósito da função anônima aqui é adicionar uma função print para todo o objeto, que está disponível para imprimir o índice correto do objeto no array. Não foi necessário passar o valor do objeto como `this` , mas isso foi feito apenas para explicação.

```js
var animais = [
  { especie: "Lion", nome: "King" },
  { especie: "Whale", nome: "Fail" },
];

for (var i = 0; i < animais.length; i++) {
  (function (i) {
    this.print = function () {
      console.log("#" + i + " " + this.especie + ": " + this.nome);
    };
    this.print();
  }).call(animais[i], i);
}
```

### Usando `call` para chamar a função e especificar o contexto de 'this'

No exemplo abaixo, quando vamos chamar a apresentação, o valor de this será associado ao objeto i.

```
function apresentacao() {
  var resposta = [this.pessoa, 'é um excelente', this.funcao].join(' ');
  console.log(resposta);
}

var i = {
  pessoa: 'Douglas Crockford', funcao: 'Desenvolvedor Javascript'
};

apresentacao.call(i); // Douglas Crockford é um excelente Desenvolvedor Javascript
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Function.prototype.bind()")}}
- {{jsxref("Function.prototype.apply()")}}
- [Introdução à JavaScript Orientado à Objetos](/pt-BR/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects)
