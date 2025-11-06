---
title: "ArrayBuffer : méthode resize()"
short-title: resize()
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/resize
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`resize()`** des instances de {{JSxRef("ArrayBuffer")}} redimensionne un `ArrayBuffer` à la taille définie, en octets.

{{InteractiveExample("Démonstration JavaScript&nbsp;: ArrayBuffer.prototype.resize()")}}

```js interactive-example
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });

console.log(buffer.byteLength);
// Résultat attendu : 8

buffer.resize(12);

console.log(buffer.byteLength);
// Résultat attendu : 12
```

## Syntaxe

```js-nolint
resize(newLength)
```

### Paramètres

- `newLength`
  - : La nouvelle taille, en octets, à laquelle redimensionner `ArrayBuffer`.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée si `ArrayBuffer` est détaché ou n'est pas redimensionnable.
- {{JSxRef("RangeError")}}
  - : Levée si `newLength` est supérieur à la propriété {{JSxRef("ArrayBuffer/maxByteLength", "maxByteLength")}} de `ArrayBuffer`.

## Description

La méthode `resize()` redimensionne un `ArrayBuffer` à la taille définie par le paramètre `newLength`, à condition que l'`ArrayBuffer` soit [redimensionnable](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/resizable) et que la nouvelle taille soit inférieure ou égale à la propriété {{JSxRef("ArrayBuffer/maxByteLength", "maxByteLength")}} de l'`ArrayBuffer`. Les nouveaux octets sont initialisés à 0.

Vous pouvez utiliser `resize()` pour réduire ou agrandir un `ArrayBuffer`&nbsp;: il est permis que `newLength` soit inférieur à la propriété {{JSxRef("ArrayBuffer/byteLength", "byteLength")}} actuelle de l'`ArrayBuffer`.

## Exemples

### Utiliser `resize()`

Dans cet exemple, on crée un tampon de 8 octets qui peut être redimensionné jusqu'à une taille maximale de 16 octets, puis on vérifie sa propriété `resizable` et on le redimensionne si `resizable` retourne `true`&nbsp;:

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });

if (buffer.resizable) {
  console.log("Le tampon est redimensionnable !");
  buffer.resize(12);
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("ArrayBuffer")}}
- La propriété {{JSxRef("ArrayBuffer.prototype.resizable")}}
- La propriété {{JSxRef("ArrayBuffer.prototype.maxByteLength")}}
