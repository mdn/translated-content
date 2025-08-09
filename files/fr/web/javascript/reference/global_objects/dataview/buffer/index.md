---
title: DataView.prototype.buffer
slug: Web/JavaScript/Reference/Global_Objects/DataView/buffer
---

{{JSRef}}

L'accesseur **`buffer`** est une propriété représentant l'objet {{jsxref("ArrayBuffer")}} ou {{jsxref("SharedArrayBuffer")}} référencé par la vue `DataView` lors de sa construction.

{{InteractiveExample("JavaScript Demo: DataView.buffer")}}

```js interactive-example
// Create an ArrayBuffer
const buffer = new ArrayBuffer(123);

// Create a view
const view = new DataView(buffer);

console.log(view.buffer.byteLength);
// Expected output: 123
```

## Syntaxe

```js
dataview.buffer;
```

## Description

La propriété `buffer` est un accesseur/mutateur dont le mutateur correspondant vaut `undefined`, cela signifie qu'il n'est possible que de lire cette propriété. Sa valeur est établie lors de la construction de l'objet `DataView` et ne peut pas être modifiée.

## Exemples

### Utilisation de la propriété `buffer`

```js
var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.buffer; // ArrayBuffer { byteLength: 8 }
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
