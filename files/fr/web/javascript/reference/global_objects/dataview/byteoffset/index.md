---
title: DataView.prototype.byteOffset
slug: Web/JavaScript/Reference/Global_Objects/DataView/byteOffset
---

{{JSRef}}

La propriété **`byteOffset`** est un accesseur représentant le décalage, exprimé en octets, entre la vue et le début de l'objet {{jsxref("ArrayBuffer")}} ou {{jsxref("SharedArrayBuffer")}} correspondant.

{{EmbedInteractiveExample("pages/js/dataview-byteoffset.html")}}

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
