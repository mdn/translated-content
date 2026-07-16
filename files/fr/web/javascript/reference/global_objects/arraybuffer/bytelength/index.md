---
title: "ArrayBuffer : propriété byteLength"
short-title: byteLength
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/byteLength
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La propriété d'accesseur **`byteLength`** des instances de {{JSxRef("ArrayBuffer")}} retourne la longueur (en octets) de ce tableau de mémoire tampon.

{{InteractiveExample("JavaScript Demo: ArrayBuffer.prototype.byteLength")}}

```js interactive-example
// Crée un objet ArrayBuffer avec une taille en octets
const buffer = new ArrayBuffer(8);

// Utilise byteLength pour vérifier la taille
const bytes = buffer.byteLength;

console.log(bytes);
// Résultat attendu : 8
```

## Description

La propriété `byteLength` est un accesseur dont le mutateur associé vaut `undefined`. Cela signifie que cette propriété est en lecture seule. La valeur est déterminée lors de la construction du tableau et ne peut pas être changée par la suite. Cette propriété retourne 0 si ce `ArrayBuffer` a été détaché.

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

- L'objet global {{JSxRef("ArrayBuffer")}}
