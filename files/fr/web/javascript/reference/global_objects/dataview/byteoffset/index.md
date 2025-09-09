---
title: DataView.prototype.byteOffset
slug: Web/JavaScript/Reference/Global_Objects/DataView/byteOffset
---

{{JSRef}}

La propriété **`byteOffset`** est un accesseur représentant le décalage, exprimé en octets, entre la vue et le début de l'objet {{jsxref("ArrayBuffer")}} ou {{jsxref("SharedArrayBuffer")}} correspondant.

{{InteractiveExample("JavaScript Demo: DataView.byteOffset")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer, 12, 4); // From byte 12 for the next 4 bytes

console.log(view.byteOffset);
// Expected output: 12
```

## Syntaxe

```js
dataview.byteOffset;
```

## Description

La propriété `byteOffset` est un accesseur/mutateur dont la fonction du mutateur vaut `undefined`. Cela signifie que la propriété n'est accesssible qu'en lecture seule. La valeur de la propriété est définie lors de la construction de l'objet `DataView` et ne peut pas être modifiée.

## Exemples

### Utilisation de la propriété `byteOffset`

```js
var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.byteOffset; // 0 (aucun décalage)

var dataview2 = new DataView(buffer, 3);
dataview2.byteOffset; // 3 (décalage défini lors de la construction de la vue)
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer")}}
