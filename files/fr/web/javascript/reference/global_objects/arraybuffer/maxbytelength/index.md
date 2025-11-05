---
title: "ArrayBuffer : propriété maxByteLength"
short-title: maxByteLength
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/maxByteLength
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La propriété d'accesseur **`maxByteLength`** des instances de {{JSxRef("ArrayBuffer")}} retourne la longueur maximale (en octets) à laquelle ce tableau de mémoire tampon peut être redimensionné.

{{InteractiveExample("Démonstration JavaScript&nbsp;: ArrayBuffer.prototype.maxByteLength")}}

```js interactive-example
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });

console.log(buffer.byteLength);
// Résultat attendu : 8

console.log(buffer.maxByteLength);
// Résultat attendu : 16
```

## Description

La propriété `maxByteLength` est un accesseur dont le mutateur associé vaut `undefined`, ce qui signifie que cette propriété est en lecture seule. La valeur est déterminée lors de la construction du tableau, via l'option `maxByteLength` du constructeur {{JSxRef("ArrayBuffer/ArrayBuffer", "ArrayBuffer()")}}, et ne peut pas être modifiée.

Cette propriété retourne 0 si cet `ArrayBuffer` a été détaché. Si cet `ArrayBuffer` a été construit sans valeur `maxByteLength` définie, cette propriété retourne une valeur égale à celle de la propriété {{JSxRef("ArrayBuffer/byteLength", "byteLength")}} de l'`ArrayBuffer`.

## Examples

### Utiliser `maxByteLength`

Dans cet exemple, on crée un tampon de 8 octets qui peut être redimensionné jusqu'à une taille maximale de 16 octets, puis on retourne sa propriété `maxByteLength`&nbsp;:

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });

buffer.maxByteLength; // 16
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- L'objet global {{JSxRef("ArrayBuffer")}}
- La propriété {{JSxRef("ArrayBuffer.prototype.byteLength")}}
- La méthode {{JSxRef("ArrayBuffer.prototype.resize()")}}
