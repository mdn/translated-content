---
title: Object.getOwnPropertySymbols()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols
---

{{JSRef}}

O **`Object.getOwnPropertySymbols()`** método retorna uma array com todas propriedades de símbolo encontradas diretamente em um determinado objeto dado.

{{EmbedInteractiveExample("pages/js/object-getownpropertysymbols.html")}}

## Sintaxe

```js
Object.getOwnPropertySymbols(obj);
```

### Parâmetro

- `obj`
  - : O objeto pelo qual as propriedades de símbolos são retornas.

### Valor retornado

Uma array com todas as propriedades de símbolos encontradas diretamente pelo o objeto dado.

## Descrição

Similar do {{jsxref("Object.getOwnPropertyNames()")}}, você pode obter todas as propriedades de símbolo de um objeto dado como um array de símbolos. Lembre que o próprio {{jsxref("Object.getOwnPropertyNames()")}} não contém as propriedades de símbolo de um objeto e somente as propriedades de string.

Como todos os objetos não possuem símbolos próprios inicialmente, o `Object.getOwnPropertySymbols()` retorna uma array vazia a menos que você tenha definido as propriedades de símbolo do seu objeto .

## Exemplos

### Usando getOwnPropertySymbols

```js
var obj = {};
var a = Symbol("a");
var b = Symbol.for("b");

obj[a] = "localSymbol";
obj[b] = "globalSymbol";

var objectSymbols = Object.getOwnPropertySymbols(obj);

console.log(objectSymbols.length); // retorno esperado 2
console.log(objectSymbols); // retorno esperado (2) [Symbol(a), Symbol(b)]
console.log(objectSymbols[0]); // retorno esperado Symbol(a)
```

## Especificações

| Especificação                                                                                |
| -------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-object.getownpropertysymbols', 'Object.getOwnPropertySymbols')}} |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Object.getOwnPropertySymbols")}}

## Veja também

- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Symbol")}}
