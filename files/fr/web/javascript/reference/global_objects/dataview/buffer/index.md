---
title: DataView.prototype.buffer
slug: Web/JavaScript/Reference/Global_Objects/DataView/buffer
tags:
  - DataView
  - JavaScript
  - Propriété
  - Prototype
  - Reference
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/DataView/buffer
original_slug: Web/JavaScript/Reference/Objets_globaux/DataView/buffer
---
{{JSRef}}

L'accesseur **`buffer`** est une propriété représentant l'objet {{jsxref("ArrayBuffer")}} ou {{jsxref("SharedArrayBuffer")}} référencé par la vue `DataView` lors de sa construction.

{{EmbedInteractiveExample("pages/js/dataview-buffer.html")}}

## Syntaxe

```js
dataview.buffer
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

| Spécification                                                                                                            | Statut                       | Commentaires         |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('ES6', '#sec-get-dataview.prototype.buffer', 'DataView.prototype.buffer')}}     | {{Spec2('ES6')}}         | Définition initiale. |
| {{SpecName('ESDraft', '#sec-get-dataview.prototype.buffer', 'DataView.prototype.buffer')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.DataView.buffer")}}

## Voir aussi

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
