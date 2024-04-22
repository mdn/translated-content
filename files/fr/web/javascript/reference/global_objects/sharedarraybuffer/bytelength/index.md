---
title: SharedArrayBuffer.prototype.byteLength
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/byteLength
---

{{JSRef}}

La propriété d'accesseur **`byteLength`** représente la longueur d'un {{jsxref("SharedArrayBuffer")}} exprimée en octets.

{{EmbedInteractiveExample("pages/js/sharedarraybuffer-bytelength.html")}}

## Syntaxe

```js
sab.byteLength;
```

## Description

La propriété `byteLength` est une propriété d'accesseur dont le mutateur associé vaut `undefined`. Autrement dit, cette propriété est en lecture seule. La valeur est établie lorsque le tableau partagé est construit et elle ne peut être modifiée par la suite.

## Exemples

```js
var sab = new SharedArrayBuffer(1024);
sab.byteLength; // 1024
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("SharedArrayBuffer")}}
