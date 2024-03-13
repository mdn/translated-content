---
title: RegExp.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/toString
---

{{JSRef}}

O método **`toString()`** retorna uma string que representa uma expressão regular.

{{EmbedInteractiveExample("pages/js/regexp-prototype-tostring.html", "taller")}}

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
