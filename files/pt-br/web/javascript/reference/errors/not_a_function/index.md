---
title: 'TypeError: "x" is not a function'
slug: Web/JavaScript/Reference/Errors/Not_a_function
---

{{jsSidebar("Errors")}}

## Mensagem

```
TypeError: Object doesn't support property or method {x} (Edge)
TypeError: "x" is not a function
```

## Tipo do erro

{{jsxref("TypeError")}}.

## O que deu errado?

Houve a tentativa de obter um valor de uma função, mas o valor não é exatamente uma função. Algum código espera que você forneça uma função, mas não foi o que acontenceu.

Talvez exista um erro de digitação no nome da função? Talvez o objeto no qual você está chamando o método não tenha essa função? Por exemplo, objetos no JavaScript não tem a função `map`, mas o objeto Array tem.

Existem várias funções internas que precisam de uma função (callback). Você terá que prover uma função para obter esses métodos funcionando corretamente:

- Quando estiver trabalhando com os objetos {{jsxref("Array")}} ou {{jsxref("TypedArray")}}:

  - {{jsxref("Array.prototype.every()")}}, {{jsxref("Array.prototype.some()")}}, {{jsxref("Array.prototype.forEach()")}}, {{jsxref("Array.prototype.map()")}}, {{jsxref("Array.prototype.filter()")}}, {{jsxref("Array.prototype.reduce()")}}, {{jsxref("Array.prototype.reduceRight()")}}, {{jsxref("Array.prototype.find()")}}

- Quando estiver trabalhando com os objetos {{jsxref("Map")}} ou {{jsxref("Set")}}:

  - {{jsxref("Map.prototype.forEach()")}} e {{jsxref("Set.prototype.forEach()")}}

## Exemplos

### Um erro de digitação no nome da função

Nesse caso, que ocorre com bastante frequência, existe um erro de digitação no nome do método:

```js example-bad
var x = document.getElementByID("foo");
// TypeError: document.getElementByID is not a function
```

O nome correto da função é `getElementById`:

```js example-good
var x = document.getElementById("foo");
```

### Função chamada no objeto errado

Para alguns métodos, é necessário fornecer a função (callback) que irá funcionar apenas em objetos específicos. Nesse exemplo, é utilizado {{jsxref("Array.prototype.map()")}} que irá funcionar apenas em objetos {{jsxref("Array")}}.

```js example-bad
var obj = { a: 13, b: 37, c: 42 };

obj.map(function (num) {
  return num * 2;
});

// TypeError: obj.map is not a function
```

Ao invés disso, use uma array:

```js example-good
var numbers = [1, 4, 9];

numbers.map(function (num) {
  return num * 2;
});

// Array [2, 8, 18]
```

### Função compartilha o nome com uma propriedade pré-existente

Algumas vezes, ao criar uma classe, pode haver uma propriedade e função com os mesmos nomes. Ao chamar a função, o compilador não consegue identificar a função.

```js example-bad
var Dog = function () {
  this.age = 11;
  this.color = "black";
  this.name = "Ralph";
  return this;
};

Dog.prototype.name = function (name) {
  this.name = name;
  return this;
};

var myNewDog = new Dog();
myNewDog.name("Cassidy"); //Uncaught TypeError: myNewDog.name is not a function
```

Então, use um nome diferente para a propriedade

```js example-good
var Dog = function () {
  this.age = 11;
  this.color = "black";
  this.dogName = "Ralph"; //Using this.dogName instead of .name
  return this;
};

Dog.prototype.name = function (name) {
  this.dogName = name;
  return this;
};

var myNewDog = new Dog();
myNewDog.name("Cassidy"); //Dog { age: 11, color: 'black', dogName: 'Cassidy' }
```

## Veja também

- [Funções](/pt-BR/docs/Web/JavaScript/Reference/Functions)
