---
title: "DataView : propriété buffer"
short-title: buffer
slug: Web/JavaScript/Reference/Global_Objects/DataView/buffer
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La propriété accesseur **`buffer`** des instances de {{JSxRef("DataView")}} retourne l'objet {{JSxRef("ArrayBuffer")}} ou {{JSxRef("SharedArrayBuffer")}} référencé par la vue lors de sa construction.

{{InteractiveExample("Démonstration JavaScript&nbsp;: DataView.prototype.buffer")}}

```js interactive-example
// Créer un ArrayBuffer
const buffer = new ArrayBuffer(123);

// Créer une vue
const view = new DataView(buffer);

console.log(view.buffer.byteLength);
// Résultat attendu : 123
```

## Description

La propriété `buffer` est un accesseur/mutateur dont le mutateur correspondant vaut `undefined`, cela signifie qu'il n'est possible que de lire cette propriété. Sa valeur est établie lors de la construction de l'objet `DataView` et ne peut pas être modifiée.

## Exemples

### Utiliser la propriété `buffer`

```js
const buffer = new ArrayBuffer(8);
const dataview = new DataView(buffer);
dataview.buffer; // ArrayBuffer { byteLength: 8 }
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("DataView")}}
- L'objet {{JSxRef("ArrayBuffer")}}
- L'objet {{JSxRef("SharedArrayBuffer")}}
