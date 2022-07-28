---
title: ArrayBuffer.prototype.byteLength
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/byteLength
tags:
  - ArrayBuffer
  - JavaScript
  - Propriété
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/byteLength
original_slug: Web/JavaScript/Reference/Objets_globaux/ArrayBuffer/byteLength
---
{{JSRef}}

L'accesseur **`byteLength`** est une propriété représentant la longueur d'un {{jsxref("ArrayBuffer")}} en octets.

{{EmbedInteractiveExample("pages/js/arraybuffer-bytelength.html")}}

## Syntaxe

```js
arraybuffer.byteLength
```

## Description

La propriété `byteLength` est un accesseur dont le mutateur associé vaut `undefined`. Cela signifie que cette propriété est en lecture seule. La valeur est déterminée lors de la construction du tableau et ne peut pas être changée par la suite. Cette propriété renvoie 0 si ce `ArrayBuffer` a été détaché.

## Exemples

```js
var buffer = new ArrayBuffer(8);
buffer.byteLength; // 8
```

## Spécifications

| Spécification                                                                                                                                | Statut                           | Commentaires                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------------------------------------------- |
| {{SpecName('Typed Array')}}                                                                                                         | {{Spec2('Typed Array')}} | Remplacée dans ECMAScript 2015.                 |
| {{SpecName('ES2015', '#sec-get-arraybuffer.prototype.bytelength', 'ArrayBuffer.prototype.byteLength')}}     | {{Spec2('ES2015')}}         | Définition initiale au sein d'un standard ECMA. |
| {{SpecName('ESDraft', '#sec-get-arraybuffer.prototype.bytelength', 'ArrayBuffer.prototype.byteLength')}} | {{Spec2('ESDraft')}}     |                                                 |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.ArrayBuffer.byteLength")}}

## Voir aussi

- {{jsxref("ArrayBuffer")}}
