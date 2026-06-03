---
title: "Array : méthode reduceRight()"
short-title: reduceRight()
slug: Web/JavaScript/Reference/Global_Objects/Array/reduceRight
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La méthode **`reduceRight()`** des instances {{JSxRef("Array")}} applique une fonction à un accumulateur et à chaque valeur du tableau (de droite à gauche) pour les réduire à une seule valeur.

Voir aussi {{JSxRef("Array.prototype.reduce()")}} pour une réduction de gauche à droite.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Array.prototype.reduceRight()")}}

```js interactive-example
const array1 = [
  [0, 1],
  [2, 3],
  [4, 5],
];

const result = array1.reduceRight((accumulator, currentValue) =>
  accumulator.concat(currentValue),
);

console.log(result);
// Résultat attendu : Array [4, 5, 2, 3, 0, 1]
```

## Syntaxe

```js-nolint
reduceRight(callbackFn)
reduceRight(callbackFn, initialValue)
```

### Paramètres

- `callbackFn`
  - : La fonction à exécuter pour chaque élément du tableau. Sa valeur de retour devient la valeur du paramètre `accumulator` lors de l'appel suivant de `callbackFn`. Pour le dernier appel, la valeur de retour devient la valeur retournée par `reduceRight()`. La fonction est appelée avec les arguments suivants&nbsp;:
    - `accumulator`
      - : La valeur résultant de l'appel précédent de `callbackFn`. Lors du premier appel, sa valeur est `initialValue` si ce dernier est défini&nbsp;; sinon, sa valeur est le dernier élément du tableau.
    - `currentValue`
      - : La valeur de l'élément courant. Lors du premier appel, sa valeur est le dernier élément si `initialValue` est défini&nbsp;; sinon, sa valeur est l'avant-dernier élément.
    - `currentIndex`
      - : L'index de `currentValue` dans le tableau. Lors du premier appel, sa valeur est `array.length - 1` si `initialValue` est défini, sinon `array.length - 2`.
    - `array`
      - : Le tableau sur lequel `reduceRight()` a été appelé.
- `initialValue` {{Optional_Inline}}
  - : La valeur à utiliser comme accumulateur lors du premier appel de la fonction `callbackFn`. Si aucune valeur initiale n'est fournie, le dernier élément du tableau sera utilisé et ignoré. Appeler `reduceRight()` sur un tableau vide sans valeur initiale lève une exception `TypeError`.

### Valeur de retour

La valeur obtenue grâce à la fonction de réduction.

## Description

La méthode `reduceRight()` est une [méthode itérative](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_itératives). Elle exécute une fonction de rappel «&nbsp;de réduction&nbsp;» sur tous les éléments du tableau, dans l'ordre décroissant des indices, et les accumule en une seule valeur. Consultez la section [méthodes itératives](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_itératives) pour plus d'informations sur le fonctionnement général de ces méthodes.

`callbackFn` n'est appelée que pour les indices du tableau qui ont des valeurs attribuées. Elle n'est pas appelée pour les cases vides dans un [tableau creux](/fr/docs/Web/JavaScript/Guide/Indexed_collections#tableaux_creux).

Contrairement aux autres [méthodes itératives](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_itératives), `reduceRight()` n'accepte pas d'argument `thisArg`. `callbackFn` est toujours appelée avec la valeur `undefined` pour `this`, qui est remplacée par `globalThis` si `callbackFn` n'est pas en mode strict.

La méthode `reduceRight()` est [générique](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_de_tableau_génériques). Elle attend seulement que la valeur de `this` possède une propriété `length` et des propriétés à clés entières.

Toutes les mises en garde concernant `reduce` évoquées dans [Quand ne pas utiliser reduce()](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#quand_ne_pas_utiliser_reduce) s'appliquent aussi à `reduceRight`. Comme JavaScript ne possède pas de sémantique d'évaluation paresseuse, il n'y a aucune différence de performance entre `reduce` et `reduceRight`.

## Exemples

### Fonctionnement de `reduceRight()` sans valeur initiale

L'appel à la fonction de rappel `callbackFn` de `reduceRight` ressemblerait à ceci&nbsp;:

```js
arr.reduceRight((accumulator, currentValue, index, array) => {
  // …
});
```

La première fois que la fonction est appelée, `accumulator` et `currentValue` peuvent prendre deux valeurs différentes. Si une `initialValue` est fournie lors de l'appel à `reduceRight`, alors `accumulator` sera égal à `initialValue` et `currentValue` sera égal à la dernière valeur du tableau. Si aucune `initialValue` n'est fournie, alors `accumulator` sera égal à la dernière valeur du tableau et `currentValue` sera égal à l'avant-dernière valeur.

Si le tableau est vide et qu'aucune `initialValue` n'est fournie, {{JSxRef("TypeError")}} sera levée. Si le tableau ne contient qu'un seul élément (peu importe sa position) et qu'aucune `initialValue` n'est fournie, ou si `initialValue` est fournie mais que le tableau est vide, la valeur unique sera retournée _sans_ appeler `callbackFn`.

Voici quelques exemples d'exécution de la fonction&nbsp;:

```js
[0, 1, 2, 3, 4].reduceRight(
  (accumulator, currentValue, index, array) => accumulator + currentValue,
);
```

La fonction de rappel sera appelée quatre fois, avec les arguments et valeurs de retour suivants à chaque appel&nbsp;:

|                 | `accumulator` | `currentValue` | `index` | Valeur retournée |
| --------------- | ------------- | -------------- | ------- | ---------------- |
| Premier appel   | `4`           | `3`            | `3`     | `7`              |
| Deuxième appel  | `7`           | `2`            | `2`     | `9`              |
| Troisième appel | `9`           | `1`            | `1`     | `10`             |
| Quatrième appel | `10`          | `0`            | `0`     | `10`             |

Le paramètre `array` ne change jamais pendant le processus&nbsp;: il reste toujours `[0, 1, 2, 3, 4]`. La valeur retournée par `reduceRight` sera celle du dernier appel de la fonction de rappel (`10`).

### Fonctionnement de `reduceRight()` avec une valeur initiale

Ici, on réduit le même tableau avec le même algorithme, mais en passant une `initialValue` de `10` comme second argument à `reduceRight()`&nbsp;:

```js
[0, 1, 2, 3, 4].reduceRight(
  (accumulator, currentValue, index, array) => accumulator + currentValue,
  10,
);
```

|                 | `accumulator` | `currentValue` | `index` | Valeur retournée |
| --------------- | ------------- | -------------- | ------- | ---------------- |
| Premier appel   | `10`          | `4`            | `4`     | `14`             |
| Deuxième appel  | `14`          | `3`            | `3`     | `17`             |
| Troisième appel | `17`          | `2`            | `2`     | `19`             |
| Quatrième appel | `19`          | `1`            | `1`     | `20`             |
| Cinquième appel | `20`          | `0`            | `0`     | `20`             |

La valeur retournée par `reduceRight` dans ce cas sera bien sûr `20`.

### Additionner toutes les valeurs d'un tableau

```js
const sum = [0, 1, 2, 3].reduceRight((a, b) => a + b);
// sum vaut 6
```

### Exécuter une liste de fonctions asynchrones avec des rappels en série, chaque résultat étant passé à la suivante

```js
const waterfall =
  (...functions) =>
  (callback, ...args) =>
    functions.reduceRight(
      (composition, fn) =>
        (...results) =>
          fn(composition, ...results),
      callback,
    )(...args);

const randInt = (max) => Math.floor(Math.random() * max);

const add5 = (callback, x) => {
  setTimeout(callback, randInt(1000), x + 5);
};
const mul3 = (callback, x) => {
  setTimeout(callback, randInt(1000), x * 3);
};
const sub2 = (callback, x) => {
  setTimeout(callback, randInt(1000), x - 2);
};
const split = (callback, x) => {
  setTimeout(callback, randInt(1000), x, x);
};
const add = (callback, x, y) => {
  setTimeout(callback, randInt(1000), x + y);
};
const div4 = (callback, x) => {
  setTimeout(callback, randInt(1000), x / 4);
};

const computation = waterfall(add5, mul3, sub2, split, add, div4);
computation(console.log, 5); // Affiche 14

// équivalent à :

const computation2 = (input, callback) => {
  const f6 = (x) => div4(callback, x);
  const f5 = (x, y) => add(f6, x, y);
  const f4 = (x) => split(f5, x);
  const f3 = (x) => sub2(f4, x);
  const f2 = (x) => mul3(f3, x);
  add5(f2, input);
};
```

### Différence entre `reduce` et `reduceRight`

```js
const a = ["1", "2", "3", "4", "5"];
const gauche = a.reduce((prev, cur) => prev + cur);
const droite = a.reduceRight((prev, cur) => prev + cur);

console.log(gauche); // "12345"
console.log(droite); // "54321"
```

### Définir des fonctions composables

La composition de fonctions est un mécanisme permettant de combiner des fonctions, où la sortie de chaque fonction est passée à la suivante, et la sortie de la dernière fonction est le résultat final. Dans cet exemple, on utilise `reduceRight()` pour implémenter la composition de fonctions.

Voir aussi [Composition de fonctions <sup>(angl.)</sup>](<https://en.wikipedia.org/wiki/Function_composition_(computer_science)>) sur Wikipédia.

```js
const compose =
  (...args) =>
  (value) =>
    args.reduceRight((acc, fn) => fn(acc), value);

// Incrémente le nombre passé en argument
const inc = (n) => n + 1;

// Double la valeur passée en argument
const double = (n) => n * 2;

// Utilisation de la fonction de composition
console.log(compose(double, inc)(2)); // 6

// Utilisation de la fonction de composition
console.log(compose(inc, double)(2)); // 5
```

### Utiliser `reduceRight()` avec des tableaux creux

`reduceRight()` ignore les éléments manquants dans les tableaux creux, mais n'ignore pas les valeurs `undefined`.

```js
console.log([1, 2, , 4].reduceRight((a, b) => a + b)); // 7
console.log([1, 2, undefined, 4].reduceRight((a, b) => a + b)); // NaN
```

### Appeler `reduceRight()` sur des objets ressemblant à des tableaux

La méthode `reduceRight()` lit la propriété `length` de `this` puis accède à chaque propriété dont la clé est un entier non négatif inférieur à `length`.

```js
const objetSimilaireTableau = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 99, // ignoré par reduceRight() car length vaut 3
};
console.log(
  Array.prototype.reduceRight.call(objetSimilaireTableau, (x, y) => x - y),
);
// -1, soit 4 - 3 - 2
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Guide des collections indexées](/fr/docs/Web/JavaScript/Guide/Indexed_collections)
- L'objet global {{JSxRef("Array")}}
- La méthode {{JSxRef("Array.prototype.map()")}}
- La méthode {{JSxRef("Array.prototype.flat()")}}
- La méthode {{JSxRef("Array.prototype.flatMap()")}}
- La méthode {{JSxRef("Array.prototype.reduce()")}}
- La méthode {{JSxRef("TypedArray.prototype.reduceRight()")}}
- La méthode {{JSxRef("Object.groupBy()")}}
- La méthode {{JSxRef("Map.groupBy()")}}
- [Prothèse d'émulation de `Array.prototype.reduceRight` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-array)
- [Prothèse d'émulation es-shims de `Array.prototype.reduceRight` <sup>(angl.)</sup>](https://www.npmjs.com/package/array.prototype.reduceright)
