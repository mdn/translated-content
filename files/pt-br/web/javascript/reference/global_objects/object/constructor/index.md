---
title: Object.prototype.constructor
slug: Web/JavaScript/Reference/Global_Objects/Object/constructor
---

{{JSRef("Global_Objects", "Object")}}

## Sumário

Retorna uma referência para a função {{jsxref("Global_Objects/Object", "Object")}} que cria a instância do protótipo. Note que o valor desse protótipo é uma referência para a própria função, não uma string contendo o nome da função. O valor é apenas _read-only_ para valores primitivos como `1`, `true` e `"test"`.

## Descrição

Todos os objetos herdam a propriedade _construtor_ de seu protótipo:

```js
var o = {};
o.constructor === Object; // true

var a = [];
a.constructor === Array; // true

var n = new Number(3);
n.constructor === Number; // true
```

## Exemplos

### Exemplo: Apresentando o construtor de um objeto

O exemplo a seguir cria um protótipo, `Tree`, e um objeto desse tipo, `theTree`. O exemplo, então, apresenta a propriedade _constructor_ do objeto `theTree`.

```js
function Tree(name) {
  this.name = name;
}

var theTree = new Tree("Redwood");
console.log("theTree.constructor is " + theTree.constructor);
```

Esse exemplo apresenta a seguinte saída:

```js
theTree.constructor is function Tree(name) {
  this.name = name;
}
```

### Exemplo: Mudando o construtor de um objeto

O exemplo a seguir apresenta como modificar o valor do construtor de um objeto genérico. Apenas `true`, `1` e `"test"` não serão afetados sendo que eles tem `construtores` _read-only_ nativos. Esse exemplo apresenta que nem sempre é seguro depender da propriedade `constructor` de um objeto.

```js
function Type() {}

var types = [
  new Array(),
  [],
  new Boolean(),
  true, // remains unchanged
  new Date(),
  new Error(),
  new Function(),
  function () {},
  Math,
  new Number(),
  1, // remains unchanged
  new Object(),
  {},
  new RegExp(),
  /(?:)/,
  new String(),
  "test", // remains unchanged
];

for (var i = 0; i < types.length; i++) {
  types[i].constructor = Type;
  types[i] = [
    types[i].constructor,
    types[i] instanceof Type,
    types[i].toString(),
  ];
}

console.log(types.join("\n"));
```

Esse exemplo apresenta a seguinte saída:

```js
function Type() {},false,
function Type() {},false,
function Type() {},false,false
function Boolean() {
    [native code]
},false,true
function Type() {},false,Mon Sep 01 2014 16:03:49 GMT+0600
function Type() {},false,Error
function Type() {},false,function anonymous() {

}
function Type() {},false,function () {}
function Type() {},false,[object Math]
function Type() {},false,0
function Number() {
    [native code]
},false,1
function Type() {},false,[object Object]
function Type() {},false,[object Object]
function Type() {},false,/(?:)/
function Type() {},false,/(?:)/
function Type() {},false,
function String() {
    [native code]
},false,test
```

## Especificações

| Especificação                                                                            | Status             | Comentário                                         |
| ---------------------------------------------------------------------------------------- | ------------------ | -------------------------------------------------- |
| ECMAScript 1ª Edição.                                                                    | Padrão             | Definição inicial. Implementado no JavaScript 1.1. |
| {{SpecName('ES5.1', '#sec-15.2.4.1', 'Object.prototype.constructor')}}                   | {{Spec2('ES5.1')}} |                                                    |
| {{SpecName('ES6', '#sec-object.prototype.constructor', 'Object.prototype.constructor')}} | {{Spec2('ES6')}}   |                                                    |

## Compatibilidade de Browser

{{Compat("javascript.builtins.Object.constructor")}}
