---
title: 'TypeError: "x" is (not) "y"'
slug: Web/JavaScript/Reference/Errors/Unexpected_type
---

{{jsSidebar("Errors")}}

## Mensagem

```
Tipo do erro: "x" é (não é) "y"

Exemplos:
Tipo do erro: "x" é indefinido
Tipo do erro: "x" é nulo
Tipo do erro: "x" indefinido" não é um objeto
Tipo do erro: "x" não é um objeto ou é nulo
Tipo do erro: "x" não é um símbolo
```

## Tipo de erro

{{jsxref("TypeError")}}.

## O que deu errado?

Houve um tipo inesperado. Isso ocorre muitas vezes com valores {{jsxref("undefined")}} ou {{jsxref("null")}}.

Além disso, certos métodos, tais como {{jsxref("Object.create()")}} ou {{jsxref("Symbol.keyFor()")}}, requerem um tipo específico, que deve ser fornecido.

## Exemplos

### Casos inválidos

```js example-bad
// casos undefined e null nos quais o método substring não vai funcionar
var foo = undefined;
foo.substring(1); // TypeError: foo is undefined

var foo = null;
foo.substring(1); // TypeError: foo is null

// Certos métodos podem precisar de um tipo específico
var foo = {};
Symbol.keyFor(foo); // TypeError: foo is not a symbol

var foo = "bar";
Object.create(foo); // TypeError: "foo" is not an object or null
```

### Consertando o problema

Para consertar o pointeiro nulo para valores `undefined` ou `null`, você pode utilizar o operador [typeof](/pt-BR/docs/Web/JavaScript/Reference/Operators/typeof) , por exemplo.

```js
if (typeof foo !== "undefined") {
  // Agora nós sabemos que foo está definido, então podemos prosseguir.
}
```

## Veja também

- {{jsxref("undefined")}}
- {{jsxref("null")}}
