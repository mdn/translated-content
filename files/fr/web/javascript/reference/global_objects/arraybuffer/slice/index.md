---
title: "ArrayBuffer : méthode slice()"
short-title: slice()
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/slice
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`slice()`** des instances de {{JSxRef("ArrayBuffer")}} retourne un nouvel objet `ArrayBuffer` dont le contenu est une copie des octets de cet `ArrayBuffer` depuis `start` (inclus) jusqu'à `end` (exclu). Si `start` ou `end` est négatif, cela indique un indice à partir de la fin du tableau, plutôt qu'à partir du début.

{{InteractiveExample("Démonstration JavaScript&nbsp;: ArrayBuffer.prototype.slice()")}}

```js interactive-example
// Crée un objet ArrayBuffer avec une taille en octets
const buffer = new ArrayBuffer(16);
const int32View = new Int32Array(buffer);
// Produit Int32Array [0, 0, 0, 0]

int32View[1] = 42;
const sliced = new Int32Array(buffer.slice(4, 12));
// Produit Int32Array [42, 0]

console.log(sliced[0]);
// Résultat attendu : 42
```

## Syntaxe

```js-nolint
slice()
slice(start)
slice(start, end)
```

### Paramètres

- `start` {{Optional_Inline}}
  - : L'indice à partir de 0 auquel vous commencez l'extraction, [converti en entier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#conversion_entière).
    - Un indice négatif compte à partir de la fin du tampon — si `-buffer.length <= start < 0`, on utilise la valeur `start + buffer.length`.
    - Si la valeur de l'indice `start` est inférieure à la longueur négative du tampon ou si l'indice `start` est omis, on utilise la valeur `0`.
    - Si la valeur de l'indice `start` est supérieure ou égale à la longueur du tampon, un tampon vide est retourné.
- `end` {{Optional_Inline}}
  - : L'indice à partir de 0 auquel vous terminez l'extraction, [converti en entier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#conversion_entière). `slice()` extrait jusqu'à (sans inclure) la valeur de l'indice `end`.
    - Un indice négatif compte à partir de la fin du tampon — si `-buffer.length <= end < 0`, on utilise la valeur `end + buffer.length`.
    - Si la valeur de l'indice `end` est inférieure à la longueur négative du tampon, on utilise la valeur `0`.
    - Si la valeur de l'indice `end` est supérieure ou égale à la longueur du tampon, ou si l'indice `end` est omis ou vaut `undefined`, on utilise la valeur de la longueur du tampon (tous les éléments jusqu'à la fin sont extraits).
    - Si la valeur de l'indice `end` implique une position avant ou égale à celle de l'indice `start`, un tampon vide est retourné.

### Valeur de retour

Un nouvel objet {{JSxRef("ArrayBuffer")}} contenant les éléments extraits. Il n'est pas [redimensionnable](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/resizable), même si l'original l'était.

## Exemples

### Copier un `ArrayBuffer`

```js
const buf1 = new ArrayBuffer(8);
const buf2 = buf1.slice(0);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet global {{JSxRef("ArrayBuffer")}}
- La méthode {{JSxRef("SharedArrayBuffer.prototype.slice()")}}
