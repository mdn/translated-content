---
title: "Array : méthode statique isArray()"
short-title: isArray()
slug: Web/JavaScript/Reference/Global_Objects/Array/isArray
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`Array.isArray()`** détermine si la valeur passée est un {{JSxRef("Array")}}.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Array.isArray()")}}

```js interactive-example
console.log(Array.isArray([1, 3, 5]));
// Résultat attendu : true

console.log(Array.isArray("[]"));
// Résultat attendu : false

console.log(Array.isArray(new Array(5)));
// Résultat attendu : true

console.log(Array.isArray(new Int16Array([15, 33])));
// Résultat attendu : false
```

## Syntaxe

```js-nolint
Array.isArray(value)
```

### Paramètres

- `value`
  - : La valeur dont on veut vérifier le type.

### Valeur de retour

`true` si `value` est un {{JSxRef("Array")}}&nbsp;; sinon, `false`. `false` est toujours retourné si `value` est une instance de {{JSxRef("TypedArray")}}.

## Description

`Array.isArray()` vérifie si la valeur passée est un {{JSxRef("Array")}}. Elle effectue un contrôle de marque (<i lang="en">branded check</i> en anglais), similaire à l'opérateur [`in`](/fr/docs/Web/JavaScript/Reference/Operators/in), pour un champ privé initialisé par le constructeur {{JSxRef("Array/Array", "Array()")}}.

C'est une alternative plus robuste à [`instanceof Array`](/fr/docs/Web/JavaScript/Reference/Operators/instanceof), car elle évite les faux positifs et les faux négatifs&nbsp;:

- `Array.isArray()` rejette les valeurs qui ne sont pas de véritables instances de `Array`, même si elles possèdent `Array.prototype` dans leur chaîne de prototypes — `instanceof Array` accepterait ces valeurs, car il vérifie la chaîne de prototypes.
- `Array.isArray()` accepte les objets `Array` construits dans un autre environnement d'exécution (<i lang="en">realm</i> en anglais) — `instanceof Array` retourne `false` pour ceux-ci, car l'identité du constructeur `Array` est différente entre les environnements.

Voir l'article [«&nbsp;Déterminer avec une précision absolue si un objet JavaScript est un tableau&nbsp;» <sup>(angl.)</sup>](https://web.mit.edu/jwalden/www/isArray.html) pour plus de détails.

## Exemples

```js
// Tous les appels suivant renvoient true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
Array.isArray(new Array("a", "b", "c"));
Array.isArray(new Array(3));
// Une petite anecdote: Array.prototype lui même est un Array
Array.isArray(Array.prototype);

// Tous les appels suivant renvoient false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray("Array");
Array.isArray(true);
Array.isArray(false);
Array.isArray(new Uint8Array(32));
// Ceci n'est pas un tableau, car il n'a pas été créé avec
// la syntaxe littérale de tableau ou le constructeur Array
Array.isArray({ __proto__: Array.prototype });
```

### `instanceof` contre `Array.isArray()`

Lors de la vérification d'une instance de `Array`, il est préférable d'utiliser `Array.isArray()` plutôt que `instanceof`, car cela fonctionne entre différents environnements d'exécution (<i lang="en">realm</i> en anglais).

```js
const iframe = document.createElement("iframe");
document.body.appendChild(iframe);
const xArray = window.frames[window.frames.length - 1].Array;
const arr = new xArray(1, 2, 3); // [1, 2, 3]

// Vérification correcte pour Array
Array.isArray(arr); // true
// Le prototype de arr est xArray.prototype, qui est un
// objet différent de Array.prototype
arr instanceof Array; // false
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Guide des collections indexées](/fr/docs/Web/JavaScript/Guide/Indexed_collections)
- L'objet global {{JSxRef("Array")}}
- [Prothèse d'émulation de `Array.isArray` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-array)
- [Prothèse d'émulation es-shims de `Array.isArray` <sup>(angl.)</sup>](https://www.npmjs.com/package/array.isarray)
