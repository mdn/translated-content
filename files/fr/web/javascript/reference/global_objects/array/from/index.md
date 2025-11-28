---
title: "Array : méthode statique from()"
short-title: from()
slug: Web/JavaScript/Reference/Global_Objects/Array/from
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`Array.from()`** crée une nouvelle instance d'`Array` (copie superficielle) à partir d'un [objet itérable](/fr/docs/Web/JavaScript/Reference/Iteration_protocols#le_protocole_«_itérable_») ou d'un [objet semblable à un tableau](/fr/docs/Web/JavaScript/Guide/Indexed_collections#manipuler_des_objets_semblables_à_des_tableaux).

{{InteractiveExample("Démonstration JavaScript&nbsp;: Array.from()", "shorter")}}

```js interactive-example
console.log(Array.from("toto"));
// Sortie attendue : Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], (x) => x + x));
// Sortie attendue : Array [2, 4, 6]
```

## Syntaxe

```js-nolint
Array.from(items)
Array.from(items, mapFn)
Array.from(items, mapFn, thisArg)
```

### Paramètres

- `items`
  - : Un objet itérable ou un objet semblable à un tableau à convertir en un tableau.
- `mapFn` {{Optional_Inline}}
  - : Une fonction appelée sur chaque élément du tableau. Si elle est fournie, chaque valeur à ajouter au tableau est d'abord transmise à cette fonction, et la valeur de retour de `mapFn` est ajoutée au tableau à la place. La fonction est appelée avec les arguments suivants&nbsp;:
    - `element`
      - : L'élément en cours de traitement dans le tableau.
    - `index`
      - : L'indice de l'élément en cours de traitement dans le tableau.
- `thisArg` {{Optional_Inline}}
  - : La valeur à utiliser comme `this` lors de l'exécution de la fonction `mapFn`.

### Valeur de retour

Une nouvelle instance de {{JSxRef("Array")}}.

## Description

`Array.from()` permet de créer des tableaux à partir&nbsp;:

- [d'objets itérables](/fr/docs/Web/JavaScript/Reference/Iteration_protocols) (des objets comme {{JSxRef("Map")}} et {{JSxRef("Set")}})&nbsp;; ou, si l'objet n'est pas itérable,
- d'objets semblables à des tableaux (objets avec une propriété `length` et des éléments indexés).

Pour convertir un objet ordinaire qui n'est ni itérable ni semblable à un tableau en un tableau (en énumérant ses clés, valeurs ou les deux), utilisez {{JSxRef("Object.keys()")}}, {{JSxRef("Object.values()")}} ou {{JSxRef("Object.entries()")}}. Pour convertir un [objet itérable asynchrone](/fr/docs/Web/JavaScript/Reference/Iteration_protocols#itérateur_asynchrone_et_les_protocoles_itérables_asynchrones) en un tableau, utilisez {{JSxRef("Array.fromAsync()")}}.

`Array.from()` ne crée jamais de tableau creux. Si l'objet `items` n'a pas certaines propriétés d'index, elles deviennent `undefined` dans le nouveau tableau.

`Array.from()` possède un paramètre optionnel `mapFn`, qui permet d'exécuter une fonction sur chaque élément du tableau en cours de création, de façon similaire à {{JSxRef("Array/map", "map()")}}. Plus précisément, `Array.from(obj, mapFn, thisArg)` a le même résultat que `Array.from(obj).map(mapFn, thisArg)`, sauf qu'il ne crée pas de tableau intermédiaire, et `mapFn` ne reçoit que deux arguments (`element`, `index`) sans le tableau complet, car celui-ci est encore en construction.

> [!NOTE]
> Ce comportement est particulièrement important pour les [tableaux typés](/fr/docs/Web/JavaScript/Guide/Typed_arrays), car le tableau intermédiaire aurait nécessairement des valeurs tronquées pour correspondre au type approprié. `Array.from()` est implémenté pour avoir la même signature que {{JSxRef("TypedArray.from()")}}.

La méthode `Array.from()` est une méthode de fabrique générique. Par exemple, si une sous-classe d'`Array` hérite de la méthode `from()`, la méthode héritée retournera de nouvelles instances de la sous-classe au lieu d'instances d'`Array`. En fait, la valeur de `this` peut être n'importe quelle fonction constructeur qui accepte un seul argument représentant la longueur du nouveau tableau. Lorsqu'un objet itérable est passé comme `items`, le constructeur est appelé sans argument&nbsp;; lorsqu'un objet semblable à un tableau est passé, le constructeur est appelé avec la [longueur normalisée](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#normalisation_de_la_propriété_length) de l'objet. La longueur finale sera à nouveau définie à la fin de l'itération. Si la valeur de `this` n'est pas une fonction constructeur, le constructeur natif `Array` est utilisé à la place.

## Exemples

### Tableau à partir d'une chaîne de caractères

```js
Array.from("toto");
// [ "t", "o", "t", "o" ]
```

### Tableau à partir d'un ensemble

```js
const collection = new Set(["toto", "tata", "tati", "toto"]);
Array.from(collection);
// [ "toto", "tata", "tati" ]
```

### Tableau à partir d'une table de correspondance

```js
const map = new Map([
  [1, 2],
  [2, 4],
  [4, 8],
]);
Array.from(map);
// [[1, 2], [2, 4], [4, 8]]

const mapper = new Map([
  ["1", "a"],
  ["2", "b"],
]);
Array.from(mapper.values());
// ['a', 'b'];

Array.from(mapper.keys());
// ['1', '2'];
```

### Tableau à partir d'une `NodeList`

```js
// Créer un tableau à partir d'une propriété des éléments du DOM
const images = document.querySelectorAll("img");
const sources = Array.from(images, (image) => image.src);
const insecureSources = sources.filter((link) => link.startsWith("http://"));
```

### Tableau à partir d'un objet semblable à un tableau (arguments)

```js
function f() {
  return Array.from(arguments);
}

f(1, 2, 3);

// [ 1, 2, 3 ]
```

### Utiliser des fonctions fléchées et `Array.from()`

```js
// Utiliser une fonction fléchée comme fonction de transformation pour
// manipuler les éléments
Array.from([1, 2, 3], (x) => x + x);
// [2, 4, 6]

// Générer une séquence de nombres
// Comme le tableau est initialisé avec `undefined` à chaque position,
// la valeur de `v` ci-dessous sera `undefined`
Array.from({ length: 5 }, (v, i) => i);
// [0, 1, 2, 3, 4]
```

### Générateur de séquence (intervalle)

```js
// Fonction génératrice de séquence (souvent appelée « intervalle », cf. Python, Clojure, etc.)
const range = (start, stop, step) =>
  Array.from(
    { length: Math.ceil((stop - start) / step) },
    (_, i) => start + i * step,
  );

// Générer une séquence de nombres de 0 (inclus) à 5 (exclus), en incrémentant de 1
range(0, 5, 1);
// [0, 1, 2, 3, 4]

// Générer une séquence de nombres de 1 (inclus) à 10 (exclus), en incrémentant de 2
range(1, 10, 2);
// [1, 3, 5, 7, 9]

// Générer l'alphabet latin en profitant du fait qu'il soit ordonné comme une séquence
range("A".charCodeAt(0), "Z".charCodeAt(0) + 1, 1).map((x) =>
  String.fromCharCode(x),
);
// ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
```

### Utiliser `from()` avec d'autres fonctions constructrices que la fonction constructeur de tableau

La méthode `from()` peut être appelée sur n'importe quelle fonction constructeur qui accepte un seul argument représentant la longueur du nouveau tableau.

```js
function NotArray(len) {
  console.log("NotArray appelé avec la longueur", len);
}

// Objet itérable
console.log(Array.from.call(NotArray, new Set(["toto", "tata", "tati"])));
// NotArray appelé avec la longueur undefined
// NotArray { '0': 'toto', '1': 'tata', '2': 'tati', length: 3 }

// Objet semblable à un tableau
console.log(Array.from.call(NotArray, { length: 1, 0: "toto" }));
// NotArray appelé avec la longueur 1
// NotArray { '0': 'toto', length: 1 }
```

Lorsque la valeur de `this` n'est pas un constructeur, un objet `Array` ordinaire est retourné.

```js
console.log(Array.from.call({}, { length: 1, 0: "toto" })); // [ 'toto' ]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Guide des collections indexées](/fr/docs/Web/JavaScript/Guide/Indexed_collections)
- L'objet global {{JSxRef("Array")}}
- La méthode {{JSxRef("Array/Array", "Array()")}}
- La méthode {{JSxRef("Array.of()")}}
- La méthode {{JSxRef("Array.fromAsync()")}}
- La méthode {{JSxRef("Array.prototype.map()")}}
- La méthode {{JSxRef("TypedArray.from()")}}
- [Prothèse d'émulation de `Array.from` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-array)
- [Prothèse d'émulation es-shims de `Array.from` <sup>(angl.)</sup>](https://www.npmjs.com/package/array.from)
