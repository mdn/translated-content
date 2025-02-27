---
title: String.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/String/toString
---

{{JSRef}}

O método **`toString()`** retorna uma string representando o objeto especificado.

## Sintaxe

```
str.toString()
```

## Descrição

O objeto {{jsxref("String")}} substitui o método `toString()` do objeto {{jsxref("Object")}}. Ele não herda {{jsxref("Object.prototype.toString()")}}. Para objetos {{jsxref("String")}}, o método `toString()` retorna uma representação de string do objeto e é o mesmo que o método {{jsxref("String.prototype.valueOf()")}}.

## Exemplos

### Usando `toString()`

O exemplo a seguir exibe o valor string de um objeto {{jsxref("String")}}:

```js
var x = new String("Hello world");

console.log(x.toString()); // retorna 'Hello world'
```

## Especificações

{{Specifications}}

## Navegadores compatíveis

{{Compat}}

## Veja também

- {{jsxref("Object.prototype.toSource()")}}
- {{jsxref("String.prototype.valueOf()")}}
