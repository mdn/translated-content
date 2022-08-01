---
title: DataView.prototype.byteLength
slug: Web/JavaScript/Reference/Global_Objects/DataView/byteLength
tags:
  - DataView
  - JavaScript
  - Propriété
  - Prototype
  - Reference
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/DataView/byteLength
original_slug: Web/JavaScript/Reference/Objets_globaux/DataView/byteLength
---
{{JSRef}}

L'accesseur **`byteLength`** est une propriété représentant la longueur, exprimée en octets, de cette vue depuis le début de l'objet {{jsxref("ArrayBuffer")}} ou {{jsxref("SharedArrayBuffer")}} correspondant.

{{EmbedInteractiveExample("pages/js/dataview-bytelength.html")}}

## Syntaxe

```js
dataview.byteLength
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

| Spécification                                                                                                                        | Statut                       | Commentaires         |
| ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('ES6', '#sec-get-dataview.prototype.bytelength', 'DataView.prototype.byteLength')}}         | {{Spec2('ES6')}}         | Définition initiale. |
| {{SpecName('ESDraft', '#sec-get-dataview.prototype.bytelength', 'DataView.prototype.byteLength')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.DataView.byteLength")}}

## Voir aussi

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer")}}
