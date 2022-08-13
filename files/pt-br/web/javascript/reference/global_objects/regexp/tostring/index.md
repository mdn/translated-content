---
title: RegExp.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/toString
tags:
  - JavaScript
  - Method
  - Prototype
  - Referencia
  - RegExp
  - Expressões Regulares
browser-compat: javascript.builtins.RegExp.toString
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp/toString
---
{{JSRef}}

O método **`toString()`** retorna a string representando a expressão regular
{{EmbedInteractiveExample("pages/js/regexp-prototype-tostring.html", "taller")}}

## Sintaxe

```js
toString()
```

### Valor retornado

A string que represententando o objeto dado

## Descrição

O objeto {{jsxref("RegExp")}} subscreve o método `toString()` do objeto
{{jsxref("Object")}}; ele não herda {{jsxref("Object.prototype.toString()")}}. 
Para objetos {{jsxref("RegExp")}}, o método `toString()` retorna a string que 
representa a expressão regular.

## Exemplos

### Usando toString()

O exemplo a seguir exibe o valor em tring de um objeto {{jsxref("RegExp")}}: 

```js
const myExp = new RegExp('a+b+c');
console.log(myExp.toString());  // logs '/a+b+c/'

const foo = new RegExp('bar', 'g');
console.log(foo.toString());    // logs '/bar/g'
```

### Expressões regulares vazias e escaping

Começando com o ECMAScript 5, uma expressão regular vazia retorna a string "/(?:)/"
temrinadores de linha como "\n" são inseridos:

```js
new RegExp().toString(); // "/(?:)/"

new RegExp('\n').toString() === '/\n/';  // true, prior to ES5
new RegExp('\n').toString() === '/\\n/'; // true, starting with ES5
```

## Especificacões

{{Specifications}}

## Compatibilidade com os browsers

{{Compat}}

## Veja também

- {{jsxref("Object.prototype.toString()")}}
