---
title: ArrayBuffer.prototype.byteLength
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/byteLength
---

{{JSRef}}

L'accesseur **`byteLength`** est une propriété représentant la longueur d'un {{jsxref("ArrayBuffer")}} en octets.

{{EmbedInteractiveExample("pages/js/arraybuffer-bytelength.html")}}

## Syntaxe

```js
arraybuffer.byteLength;
```

## Description

La propriété `byteLength` est un accesseur dont le mutateur associé vaut `undefined`. Cela signifie que cette propriété est en lecture seule. La valeur est déterminée lors de la construction du tableau et ne peut pas être changée par la suite. Cette propriété renvoie 0 si ce `ArrayBuffer` a été détaché.

## Exemples

```js
var buffer = new ArrayBuffer(8);
buffer.byteLength; // 8
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("ArrayBuffer")}}
