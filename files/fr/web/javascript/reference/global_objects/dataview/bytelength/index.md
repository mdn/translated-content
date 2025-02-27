---
title: DataView.prototype.byteLength
slug: Web/JavaScript/Reference/Global_Objects/DataView/byteLength
---

{{JSRef}}

L'accesseur **`byteLength`** est une propriété représentant la longueur, exprimée en octets, de cette vue depuis le début de l'objet {{jsxref("ArrayBuffer")}} ou {{jsxref("SharedArrayBuffer")}} correspondant.

{{InteractiveExample("JavaScript Demo: DataView.byteLength")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

const view1 = new DataView(buffer);
const view2 = new DataView(buffer, 12, 4); // From byte 12 for the next 4 bytes

console.log(view1.byteLength + view2.byteLength); // 16 + 4
// Expected output: 20
```

## Syntaxe

```js
dataview.byteLength;
```

## Description

La propriété `byteLength` est une propriété accesseur/mutateur dont le mutateur vaut `undefined`. Cela signifie que cette propriété est en lecture seule. Cette valeur est déterminée lorsque l'objet `DataView` est construit et ne peut pas être changée. Si `DataView` ne définit pas de décalage avec `byteOffset` ou ne spécifie pas `byteLength`, ce sera la `byteLength` de l'objet `ArrayBuffer` ou `SharedArrayBuffer` référencé qui sera renvoyée.

## Exemples

### Utilisation de la propriété `byteLength`

```js
var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.byteLength; // 8 (correspond au byteLength du buffer)

var dataview2 = new DataView(buffer, 1, 5);
dataview2.byteLength; // 5 (correspond à la longueur utilisée pour la définition)

var dataview3 = new DataView(buffer, 2);
dataview3.byteLength; // 6 (en raison du décalage (offset) pour la construction du DataView)
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer")}}
