---
title: "Array : méthode reverse()"
short-title: reverse()
slug: Web/JavaScript/Reference/Global_Objects/Array/reverse
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La méthode **`reverse()`** des instances {{JSxRef("Array")}} inverse un tableau _[en place](https://fr.wikipedia.org/wiki/Algorithme_en_place)_ et retourne la référence vers ce même tableau, le premier élément du tableau devenant le dernier, et le dernier élément devenant le premier. En d'autres termes, l'ordre des éléments du tableau est inversé par rapport à l'ordre initial.

Pour inverser les éléments d'un tableau sans modifier le tableau d'origine, utilisez {{JSxRef("Array/toReversed", "toReversed()")}}.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Array.prototype.reverse()")}}

```js interactive-example
const array = ["un", "deux", "trois"];
console.log("tableau :", array);
// Résultat attendu : "tableau :" Array ["un", "deux", "trois"]

const reversed = array.reverse();
console.log("inversé :", reversed);
// Résultat attendu : "inversé :" Array ["trois", "deux", "un"]

// Attention: reverse est destructif -- il modifie le tableau d'origine.
console.log("tableau :", array);
// Résultat attendu : "tableau :" Array ["trois", "deux", "un"]
```

## Syntaxe

```js-nolint
reverse()
```

### Paramètres

Aucun.

### Valeur de retour

La référence vers le tableau d'origine, désormais inversé. Notez que le tableau est inversé _[en place](https://fr.wikipedia.org/wiki/Algorithme_en_place)_, et qu'aucune copie n'est créée.

## Description

La méthode `reverse()` transpose les éléments du tableau appelant, modifie le tableau et retourne sa référence.

Elle préserve les cases vides. Si le tableau source est un [tableau creux](/fr/docs/Web/JavaScript/Guide/Indexed_collections#tableaux_creux), les nouveaux indices des cases vides sont [supprimés](/fr/docs/Web/JavaScript/Reference/Operators/delete) et restent vides.

La méthode `reverse()` est [générique](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_de_tableau_génériques). Elle attend uniquement que la valeur de `this` possède une propriété `length` et des propriétés indexées par des entiers. Bien que les chaînes de caractères soient également assimilables à des tableaux, cette méthode ne doit pas leur être appliquée, car les chaînes sont immuables.

## Exemples

### Inverser l'ordre des éléments d'un tableau

L'exemple suivant crée un tableau `items` contenant trois éléments, puis inverse ce tableau. L'appel à `reverse()` retourne une référence vers le tableau inversé `items`.

```js
const items = [1, 2, 3];
console.log(items); // [1, 2, 3]

items.reverse();
console.log(items); // [3, 2, 1]
```

### La méthode `reverse()` retourne la référence vers le même tableau

La méthode `reverse()` retourne la référence vers le tableau d'origine, donc toute modification du tableau retourné modifie aussi le tableau d'origine.

```js
const numbers = [3, 2, 4, 1, 5];
const reversed = numbers.reverse();
// numbers et reversed sont tous deux dans l'ordre inversé [5, 1, 4, 2, 3]
reversed[0] = 5;
console.log(numbers[0]); // 5
```

Si vous souhaitez que `reverse()` ne modifie pas le tableau d'origine mais retourne un tableau [copié superficiellement](/fr/docs/Glossary/Shallow_copy) comme d'autres méthodes de tableau (par exemple, [`map()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map)), utilisez la méthode {{JSxRef("Array/toReversed", "toReversed()")}}. Vous pouvez aussi faire une copie superficielle avant d'appeler `reverse()`, en utilisant la [syntaxe de l'opérateur de propagation](/fr/docs/Web/JavaScript/Reference/Operators/Spread_syntax) ou [`Array.from()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/from).

```js
const numbers = [3, 2, 4, 1, 5];
// [...numbers] crée une copie superficielle, donc reverse() ne modifie pas l'original
const reverted = [...numbers].reverse();
reverted[0] = 5;
console.log(numbers[0]); // 3
```

### Utiliser `reverse()` sur des tableaux creux

Les tableaux creux restent creux après l'appel à `reverse()`. Les cases vides sont copiées à leurs nouveaux indices respectifs en tant que cases vides.

```js
console.log([1, , 3].reverse()); // [3, empty, 1]
console.log([1, , 3, 4].reverse()); // [4, 3, empty, 1]
```

### Appeler `reverse()` sur des objets qui ne sont pas des tableaux

La méthode `reverse()` lit la propriété `length` de `this`. Elle parcourt ensuite chaque propriété ayant une clé entière entre `0` et `length / 2`, et échange les deux indices correspondants aux extrémités, en [supprimant](/fr/docs/Web/JavaScript/Reference/Operators/delete) toute propriété de destination pour laquelle la propriété source n'existait pas.

```js
const objetSimilaireTableau = {
  length: 3,
  unrelated: "foo",
  2: 4,
  3: 33, // ignoré par reverse() car length vaut 3
};
console.log(Array.prototype.reverse.call(objetSimilaireTableau));
// { 0: 4, 3: 33, length: 3, unrelated: 'foo' }
// L'indice 2 est supprimé car il n'y avait pas d'indice 0 à l'origine
// L'indice 3 est inchangé car length vaut 3
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Guide des collections indexées](/fr/docs/Web/JavaScript/Guide/Indexed_collections)
- L'objet global {{JSxRef("Array")}}
- La méthode {{JSxRef("Array.prototype.join()")}}
- La méthode {{JSxRef("Array.prototype.sort()")}}
- La méthode {{JSxRef("Array.prototype.toReversed()")}}
- La méthode {{JSxRef("TypedArray.prototype.reverse()")}}
- [Prothèse d'émulation de `Array.prototype.reverse` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-array)
- [Prothèse d'émulation es-shims de `Array.prototype.reverse` <sup>(angl.)</sup>](https://www.npmjs.com/package/array.prototype.reverse)
