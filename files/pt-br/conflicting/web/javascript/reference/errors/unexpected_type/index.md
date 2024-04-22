---
title: 'TypeError: can''t access property "x" of "y"'
slug: conflicting/Web/JavaScript/Reference/Errors/Unexpected_type
---

{{jsSidebar("Errors")}}

## Mensagem

```
TypeError: Unable to get property {x} of undefined or null reference (Edge)
TypeError: can't access property {x} of {y} (Firefox)
TypeError: {y} is undefined, can't access property {x} of it (Firefox)
TypeError: {y} is null, can't access property {x} of it (Firefox)

Exemplos:
TypeError: x is undefined, can't access property "prop" of it
TypeError: x is null, can't access property "prop" of it
TypeError: can't access property "prop" of undefined
TypeError: can't access property "prop" of null
```

## Tipo de Erro

{{jsxref("TypeError")}}.

## O que deu errado?

O acesso a propriedade foi realizado com um valor {{jsxref("undefined")}} ou {{jsxref("null")}}.

## Exemplos

### Casos inválidos

```js example-bad
// casos undefined e null, onde o metódo substring não irá funcionar

var foo = undefined;
foo.substring(1); // TypeError: x is undefined, can't access property "substring" of it

var foo = null;
foo.substring(1); // TypeError: x is null, can't access property "substring" of it
```

### Corrigindo o problema

Para corrigir o problema de valores `undefined` ou `null`, você pode usar o operador [typeof](/pt-BR/docs/Web/JavaScript/Reference/Operators/typeof), como no exemplo abaixo.

```js
if (typeof foo !== 'undefined') {
  // Agora que sabemos que foo está definida, podemos prosseguir
}
```

## Veja também

- {{jsxref("undefined")}}
- {{jsxref("null")}}
