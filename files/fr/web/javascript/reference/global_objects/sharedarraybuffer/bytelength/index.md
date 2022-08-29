---
title: SharedArrayBuffer.prototype.byteLength
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/byteLength
tags:
  - JavaScript
  - Mémoire partagée
  - Propriété
  - Reference
  - SharedArrayBuffer
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/byteLength
original_slug: Web/JavaScript/Reference/Objets_globaux/SharedArrayBuffer/byteLength
---
{{JSRef}}

La propriété d'accesseur **`byteLength`** représente la longueur d'un {{jsxref("SharedArrayBuffer")}} exprimée en octets.

{{EmbedInteractiveExample("pages/js/sharedarraybuffer-bytelength.html")}}

## Syntaxe

```js
sab.byteLength
```

## Description

La propriété `byteLength` est une propriété d'accesseur dont le mutateur associé vaut `undefined`. Autrement dit, cette propriété est en lecture seule. La valeur est établie lorsque le tableau partagé est construit et elle ne peut être modifiée par la suite.

## Exemples

```js
var sab = new SharedArrayBuffer(1024);
sab.byteLength; // 1024
```

## Spécifications

| Spécification                                                                                                                                                | Statut                       | Commentaires                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | -------------------------------- |
| {{SpecName('ESDraft', '#sec-get-sharedarraybuffer.prototype.bytelength', 'SharedArrayBuffer.prototype.byteLength')}} | {{Spec2('ESDraft')}} | Définition initiale avec ES2017. |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.SharedArrayBuffer.byteLength")}}

## Voir aussi

- {{jsxref("SharedArrayBuffer")}}
