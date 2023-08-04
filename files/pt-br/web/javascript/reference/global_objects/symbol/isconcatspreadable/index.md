---
title: Symbol.isConcatSpreadable
slug: Web/JavaScript/Reference/Global_Objects/Symbol/isConcatSpreadable
---

{{JSRef}}

O **`Symbol.isConcatSpreadable`** é um símbolo conhecido que é usado para configurar se um objeto deve ser achatado para um elemento da array quando usado o método {{jsxref("Array.prototype.concat()")}}.

{{EmbedInteractiveExample("pages/js/symbol-isconcatspreadable.html")}}

## Descrição

O `@@isConcatSpreadable` símbolo (`Symbol.isConcatSpreadable`) pode também ser definido como uma propriedade própria ou herdada e seu valor é um booleano. Ele consegue controlar o comportamento das arrays e objetos semelhantes a array:

- For array objects, the default behavior is to spread (flatten) elements. `Symbol.isConcatSpreadable` can avoid flattening in these cases.
- For array-like objects, the default behavior is no spreading or flattening. `Symbol.isConcatSpreadable` can force flattening in these cases.

{{js_property_attributes(0,0,0)}}

## Exemplos

### Arrays

Por padrão, o {{jsxref("Array.prototype.concat()")}} espalha (alinha) arrays no seus resultados:

```js
let alpha = ['a', 'b', 'c'],
let numeric = [1, 2, 3]

let alphaNumeric = alpha.concat(numeric)

console.log(alphaNumeric)  // Resultado: ['a', 'b', 'c', 1, 2, 3]
```

Quando configurando o `Symbol.isConcatSpreadable` para `false`, o comportamento padrão dele:

```js
let alpha = ['a', 'b', 'c'],
let numeric = [1, 2, 3]

numeric[Symbol.isConcatSpreadable] = false
let alphaNumeric = alpha.concat(numeric)

console.log(alphaNumeric)  // Resultado: ['a', 'b', 'c', [1, 2, 3] ]
```

### Objetos de array semelhantes

Para objetos de array semelhantes, o padrão não é espalhado. `Symbol.isConcatSpreadable`precisa ser configurado para `true` para poder conseguir um a array alinhada:

```js
let x = [1, 2, 3];

let fakeArray = {
  [Symbol.isConcatSpreadable]: true,
  length: 2,
  0: "hello",
  1: "world",
};

x.concat(fakeArray); // [1, 2, 3, "hello", "world"]
```

> **Nota:** A propriedade `length` é usada para controlar o número de propriedade dos objetos para ser adicionado. No exemplo acima, `length:2` indica que duas propriedades tem de ser adicionado.

## Especificações

| Especificação                                                                          |
| -------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-symbol.isconcatspreadable', 'Symbol.isconcatspreadable')}} |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Symbol.isConcatSpreadable")}}

## Veja também

- {{jsxref("Array.prototype.concat()")}}
