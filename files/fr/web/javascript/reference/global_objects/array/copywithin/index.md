---
title: "Array : méthode copyWithin()"
short-title: copyWithin()
slug: Web/JavaScript/Reference/Global_Objects/Array/copyWithin
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La méthode **`copyWithin()`** des instances de {{JSxRef("Array")}} copie superficiellement une partie de ce tableau à un autre emplacement dans le même tableau et retourne ce tableau sans en modifier la longueur.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Array.prototype.copyWithin()")}}

```js interactive-example
const array = ["a", "b", "c", "d", "e"];

// Copie à l'indice 0 l'élément à l'indice 3
console.log(array.copyWithin(0, 3, 4));
// Résultat attendu : Array ["d", "b", "c", "d", "e"]

// Copie à l'indice 1 tous les éléments de l'indice 3 à la fin
console.log(array.copyWithin(1, 3));
// Résultat attendu : Array ["d", "d", "e", "d", "e"]
```

## Syntaxe

```js-nolint
copyWithin(target, start)
copyWithin(target, start, end)
```

### Paramètres

- `target`
  - : L'indice (à partir de zéro) auquel copier la séquence, [converti en entier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#conversion_entière). Cela correspond à l'emplacement où l'élément à l'indice `start` sera copié, et tous les éléments compris entre `start` et `end` seront copiés aux indices suivants.
    - Un indice négatif compte à rebours depuis la fin du tableau — si `-array.length <= target < 0`, on utilise `target + array.length`.
    - Si `target < -array.length`, on utilise `0`.
    - Si `target >= array.length`, rien n'est copié.
    - Si `target` est positionné après `start` après normalisation, la copie ne se fait que jusqu'à la fin de `array.length` (autrement dit, `copyWithin()` n'étend jamais le tableau).
- `start`
  - : L'indice (à partir de zéro) à partir duquel commencer à copier les éléments, [converti en entier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#conversion_entière).
    - Un indice négatif compte à rebours depuis la fin du tableau — si `-array.length <= start < 0`, on utilise `start + array.length`.
    - Si `start < -array.length`, on utilise `0`.
    - Si `start >= array.length`, rien n'est copié.
- `end` {{Optional_Inline}}
  - : L'indice (à partir de zéro) auquel arrêter de copier les éléments, [converti en entier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#conversion_entière). `copyWithin()` copie jusqu'à (mais sans inclure) `end`.
    - Un indice négatif compte à rebours depuis la fin du tableau — si `-array.length <= end < 0`, on utilise `end + array.length`.
    - Si `end < -array.length`, on utilise `0`.
    - Si `end >= array.length` ou si `end` est omis ou `undefined`, on utilise `array.length`, ce qui fait que tous les éléments jusqu'à la fin sont copiés.
    - Si `end` implique une position avant ou à la même position que celle impliquée par `start`, rien n'est copié.

### Valeur de retour

Le tableau modifié.

## Description

La méthode `copyWithin()` fonctionne comme `memmove` en C et C++&nbsp;; c'est une méthode très performante pour décaler les données d'un tableau ({{JSxRef("Array")}}). Cela s'applique en particulier à la méthode {{JSxRef("TypedArray/copyWithin", "TypedArray")}} du même nom. La séquence est copiée et collée en une seule opération&nbsp;; la séquence collée aura les valeurs copiées même si les zones de copie et de collage se chevauchent.

Comme `undefined` devient `0` lorsqu'il est converti en entier, omettre le paramètre `start` a le même effet que de passer `0`, ce qui copie tout le tableau à la position cible, équivalent à un décalage vers la droite où la borne droite est tronquée et la borne gauche est dupliquée. Ce comportement peut prêter à confusion pour les lecteurs·rices de votre code&nbsp;; il est donc préférable de passer explicitement `0` comme valeur de `start`.

```js
console.log([1, 2, 3, 4, 5].copyWithin(2));
// [1, 2, 1, 2, 3] ; décale tous les éléments de 2 positions vers la droite
```

La méthode `copyWithin()` est une [méthode de mutation](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_de_copie_et_méthodes_de_mutation). Elle ne modifie pas la longueur de `this`, mais elle modifie le contenu de `this` et peut créer de nouvelles propriétés ou supprimer des propriétés existantes si nécessaire.

La méthode `copyWithin()` préserve les cases vides. Si la région à copier est [creuxe](/fr/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays), les nouveaux indices correspondants des cases vides sont [supprimés](/fr/docs/Web/JavaScript/Reference/Operators/delete) et deviennent aussi des cases vides.

La méthode `copyWithin()` est [générique](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_de_tableau_génériques). Elle attend seulement que la valeur de `this` possède une propriété `length` et des propriétés à clés entières. Bien que les chaînes de caractères soient aussi similaires à des tableaux, cette méthode n'est pas adaptée pour être appliquée sur elles, car les chaînes sont immuables.

## Exemples

### Utilisation de `copyWithin()`

```js
console.log([1, 2, 3, 4, 5].copyWithin(0, 3));
// [4, 5, 3, 4, 5]

console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));
// [4, 2, 3, 4, 5]

console.log([1, 2, 3, 4, 5].copyWithin(-2, -3, -1));
// [1, 2, 3, 3, 4]
```

### Utilisation de `copyWithin()` sur des tableaux creux

`copyWithin()` propage les cases vides.

```js
console.log([1, , 3].copyWithin(2, 1, 2)); // [1, vide, vide]
```

### Appel de `copyWithin()` sur des objets qui ne sont pas des tableaux

La méthode `copyWithin()` lit la propriété `length` de `this` puis manipule les indices entiers concernés.

```js
const objetSimilaireTableau = {
  length: 5,
  3: 1,
};
console.log(Array.prototype.copyWithin.call(objetSimilaireTableau, 0, 3));
// { '0': 1, '3': 1, length: 5 }
console.log(Array.prototype.copyWithin.call(objetSimilaireTableau, 3, 1));
// { '0': 1, length: 5 }
// La propriété '3' est supprimée car la source copiée est une case vide
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Guide des collections indexées](/fr/docs/Web/JavaScript/Guide/Indexed_collections)
- L'objet global {{JSxRef("Array")}}
- La méthode {{JSxRef("TypedArray.prototype.copyWithin()")}}
- [Prothèse d'émulation de `Array.prototype.copyWithin` dans `core-js`<sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-array)
- [Prothèse d'émulation es-shims de `Array.prototype.copyWithin`<sup>(angl.)</sup>](https://www.npmjs.com/package/array.prototype.copywithin)
