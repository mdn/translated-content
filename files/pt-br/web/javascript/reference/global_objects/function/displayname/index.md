---
title: Function.displayName
slug: Web/JavaScript/Reference/Global_Objects/Function/displayName
---

{{JSRef}} {{non-standard_header}}

A propriedade **`function.displayName`** retorna o nome de exibição da função.

## Descrição

Quando definida, a propriedade `displayName` retorna o nome de exibição da função.

```js
function doSomething() {}

console.log(doSomething.displayName); // "undefined"

var popup = function (content) {
  console.log(content);
};

popup.displayName = "Show Popup";

console.log(popup.displayName); // "Show Popup"
```

Você pode definir uma função com uma nome de exibição em um {{jsxref("Functions", "function expression", "", 1)}}:

```js
var object = {
  someMethod: function () {},
};

object.someMethod.displayName = "someMethod";

console.log(object.someMethod.displayName); // logs "someMethod"

try {
  someMethod;
} catch (e) {
  console.log(e);
}
// ReferenceError: someMethod is not defined
```

Você pode mudar dinamicamente o`displayName` de uma função:

```js
var object = {
  // anonymous
  someMethod: function (value) {
    arguments.callee.displayName = "someMethod (" + value + ")";
  },
};

console.log(object.someMethod.displayName); // "undefined"

object.someMethod("123");
console.log(object.someMethod.displayName); // "someMethod (123)"
```

## Exemplos

Geralmente, é preferida por consoles e perfis em vez de {{jsxref("Function.name", "func.name")}} mostrar o nome de uma função.

Entrando com o seguinte em um console, isso deverá mostrar algo como "`function My Function()`":

```js
var a = function () {};
a.displayName = "My Function";

a; // "function My Function()"
```

## Especificações

Não faz parte de denhuma especificação.

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Function.displayName")}}
