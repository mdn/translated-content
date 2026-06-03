---
title: "Array : méthode fill()"
short-title: fill()
slug: Web/JavaScript/Reference/Global_Objects/Array/fill
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La méthode **`fill()`** des instances de {{JSxRef("Array")}} modifie tous les éléments d'un tableau compris dans un intervalle d'indices pour leur attribuer une valeur statique. Elle retourne le tableau modifié.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Array.prototype.fill()")}}

```js interactive-example
const array = [1, 2, 3, 4];

// Remplir avec 0 de la position 2 jusqu'à la position 4
console.log(array.fill(0, 2, 4));
// Sortie attendue : Array [1, 2, 0, 0]

// Remplir avec 5 à partir de la position 1
console.log(array.fill(5, 1));
// Sortie attendue : Array [1, 5, 5, 5]

console.log(array.fill(6));
// Sortie attendue : Array [6, 6, 6, 6]
```

## Syntaxe

```js-nolint
fill(value)
fill(value, start)
fill(value, start, end)
```

### Paramètres

- `value`
  - : Une valeur avec laquelle remplir le tableau. Notez que tous les éléments du tableau auront exactement cette valeur&nbsp;: si `value` est un objet, chaque case du tableau référencera cet objet.
- `start` {{Optional_Inline}}
  - : L'indice de début (à partir de zéro) à partir duquel commencer à remplir, [converti en entier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#conversion_entière).
    - Un indice négatif compte à rebours depuis la fin du tableau&nbsp;: si `-array.length <= start < 0`, on utilise `start + array.length`.
    - Si `start < -array.length` ou si `start` est omis, on utilise `0`.
    - Si `start >= array.length`, aucun indice n'est rempli.
- `end` {{Optional_Inline}}
  - : L'indice de fin (à partir de zéro) auquel arrêter de remplir, [converti en entier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#conversion_entière). `fill()` remplit jusqu'à mais sans inclure `end`.
    - Un indice négatif compte à rebours depuis la fin du tableau&nbsp;: si `-array.length <= end < 0`, on utilise `end + array.length`.
    - Si `end < -array.length`, on utilise `0`.
    - Si `end >= array.length` ou si `end` est omis ou `undefined`, on utilise `array.length`, ce qui fait que tous les indices jusqu'à la fin sont remplis.
    - Si `end` implique une position avant ou à la même position que celle impliquée par `start`, rien n'est rempli.

### Valeur de retour

Le tableau modifié, rempli avec `value`.

## Description

La méthode `fill()` est une [méthode de modification](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_de_copie_et_méthodes_de_mutation). Elle ne modifie pas la longueur de `this`, mais elle en modifie le contenu.

La méthode `fill()` remplit également les cases vides dans les tableaux [creux](/fr/docs/Web/JavaScript/Guide/Indexed_collections#tableaux_creux) avec `value`.

La méthode `fill()` est [générique](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_de_tableau_génériques). Elle attend seulement que la valeur de `this` possède une propriété `length`. Bien que les chaînes de caractères soient aussi assimilables à des tableaux, cette méthode ne convient pas pour les utiliser, car les chaînes sont immuables.

> [!NOTE]
> Utiliser `Array.prototype.fill()` sur un tableau vide (`length = 0`) ne le modifiera pas car il n'y a rien à modifier.
> Pour utiliser `Array.prototype.fill()` lors de la déclaration d'un tableau, assurez-vous que le tableau a une `length` non nulle.
> [Voir l'exemple](#utiliser_fill_pour_remplir_un_tableau_vide).

## Exemples

### Utilisation de `fill()`

```js
console.log([1, 2, 3].fill(4)); // [4, 4, 4]
console.log([1, 2, 3].fill(4, 1)); // [1, 4, 4]
console.log([1, 2, 3].fill(4, 1, 2)); // [1, 4, 3]
console.log([1, 2, 3].fill(4, 1, 1)); // [1, 2, 3]
console.log([1, 2, 3].fill(4, 3, 3)); // [1, 2, 3]
console.log([1, 2, 3].fill(4, -3, -2)); // [4, 2, 3]
console.log([1, 2, 3].fill(4, NaN, NaN)); // [1, 2, 3]
console.log([1, 2, 3].fill(4, 3, 5)); // [1, 2, 3]
console.log(Array(3).fill(4)); // [4, 4, 4]

// Un seul objet, référencé par chaque case du tableau :
const arr = Array(3).fill({}); // [{}, {}, {}]
arr[0].hi = "hi"; // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]
```

### Utiliser `fill()` pour créer une matrice de 1

Cet exemple montre comment créer une matrice remplie de 1, comme la fonction `ones()` d'Octave ou MATLAB.

```js
const arr = new Array(3);
for (let i = 0; i < arr.length; i++) {
  arr[i] = new Array(4).fill(1); // Création d'un tableau de taille 4 rempli de 1
}
arr[0][0] = 10;
console.log(arr[0][0]); // 10
console.log(arr[1][0]); // 1
console.log(arr[2][0]); // 1
```

### Utiliser `fill()` pour remplir un tableau vide

Cet exemple montre comment remplir un tableau en attribuant une valeur spécifique à tous les éléments.
Le paramètre `end` n'a pas besoin d'être spécifié.

```js
const tempGirls = Array(5).fill("girl", 0);
```

Notez que le tableau était initialement un [tableau creux](/fr/docs/Web/JavaScript/Guide/Indexed_collections#tableaux_creux) sans indices attribués. `fill()` peut tout de même remplir ce tableau.

### Appeler `fill()` sur des objets qui ne sont pas des tableaux

La méthode `fill()` lit la propriété `length` de `this` et définit la valeur de chaque propriété à clé entière de `start` à `end`.

```js
const objetSimilaireTableau = { length: 2 };
console.log(Array.prototype.fill.call(objetSimilaireTableau, 1));
// { '0': 1, '1': 1, length: 2 }
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Guide des collections indexées](/fr/docs/Web/JavaScript/Guide/Indexed_collections)
- L'objet global {{JSxRef("Array")}}
- La méthode {{JSxRef("TypedArray.prototype.fill()")}}
- [Prothèse d'émulation de `Array.prototype.fill` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-array)
