---
title: String.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/String/valueOf
---

{{JSRef}}

O método `valueOf()` retorna o valor primitivo de um objeto {{jsxref("String")}}.

{{InteractiveExample("JavaScript Demo: String.valueOf()")}}

```js interactive-example
const stringObj = new String("foo");

console.log(stringObj);
// Expected output: String { "foo" }

console.log(stringObj.valueOf());
// Expected output: "foo"
```

## Sintaxe

```
str.valueOf()
```

### Valor retornado

Uma string representando o valor primitivo de um objeto {{jsxref("String")}}.

## Descrição

O método `valueOf()` do objeto {{jsxref("String")}} retorna o valor primitivo de um objeto {{jsxref("String")}} como um dado do tipo string. Esse valor é equivalente a {{jsxref("String.prototype.toString()")}}.

Esse método é normalmente chamado internamente pelo JavaScript e não fica explícito no código.

## Exemplos

### Usando `valueOf()`

```js
var x = new String("Olá, mundo");
console.log(x.valueOf()); // retorna 'Olá, mundo'
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("String.prototype.toString()")}}
- {{jsxref("Object.prototype.valueOf()")}}
