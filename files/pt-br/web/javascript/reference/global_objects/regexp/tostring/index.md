---
title: RegExp.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/toString
---

{{JSRef}}

O método **`toString()`** retorna uma string que representa uma expressão regular.

{{InteractiveExample("JavaScript Demo: RegExp.prototype.toString()", "taller")}}

```js interactive-example
console.log(new RegExp("a+b+c"));
// Expected output: /a+b+c/

console.log(new RegExp("a+b+c").toString());
// Expected output: "/a+b+c/"

console.log(new RegExp("bar", "g").toString());
// Expected output: "/bar/g"

console.log(new RegExp("\n", "g").toString());
// Expected output (if your browser supports escaping): "/\n/g"

console.log(new RegExp("\\n", "g").toString());
// Expected output: "/\n/g"
```

## Sintaxe

```js
toString();
```

### Valor retornado

Uma string representando o objeto dado.

## Descrição

O objeto {{jsxref("RegExp")}} subscreve o método `toString()` do objeto
{{jsxref("Object")}}; ele não herda {{jsxref("Object.prototype.toString()")}}.
Para objetos {{jsxref("RegExp")}}, o método `toString()` retorna uma
representação da expressão regular como string.

## Exemplos

### UsandotoString()

O exemplo a seguir exibe o valor em string de um objeto {{jsxref("RegExp")}}

```js
const myExp = new RegExp("a+b+c");
console.log(myExp.toString()); // logs '/a+b+c/'
const foo = new RegExp("bar", "g");
console.log(foo.toString()); // logs '/bar/g'
```

### Expressões regulares vazias e escape

Introduzindo o ECMAScript 5, uma expressão regular vazia retorna a string "/(?:)/" e
terminadores de linha como "\n" são utilizados

```js
new RegExp().toString(); // "/(?:)/"
new RegExp("\n").toString() === "/\n/"; // verdadeiro, antes do ES5
new RegExp("\n").toString() === "/\\n/"; // verdadeiro, introduzindo o ES5
```

## Especificações

{{Specifications}}

## Browsers compativeis

{{Compat}}

## Veja também

- {{jsxref("Object.prototype.toString()")}}
