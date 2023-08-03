---
title: Set
slug: Web/JavaScript/Reference/Global_Objects/Set
---

{{JSRef}}

Un objet **`Set`** permet de stocker un ensemble de valeurs uniques de n'importe quel type, qu'il s'agisse de [valeurs primitives](/fr/docs/Glossary/Primitive) ou d'objets.

## Description

Les objets `Set` sont des ensembles de valeurs. Il est possible d'itérer sur les éléments contenus dans l'objet `Set` dans leur ordre d'insertion. **Une valeur donnée ne peut apparaître qu'une seule fois par `Set`**, elle y est unique.

### Égalité des valeurs

Chaque valeur d'un `Set` doit être unique, il faut donc tester l'égalité des valeurs contenues. Dans une version antérieure de la spécification ECMAScript, cette égalité n'était pas la même que celle de l'opérateur `===`. Notamment, pour les objets `Set`, `+0` (qui, selon l'égalité stricte, est égal à `-0`) et `-0` étaient des valeurs différentes. Cela a toutefois été changé avec la dernière version d'ECMAScript 2015 (ES6). Voir [le tableau de compatibilité](#compatibilité_des_navigateurs) ci-après quant à la prise en charge de l'égalité des clés pour `0` et `-0`.

[`NaN`](/fr/docs/Web/JavaScript/Reference/Global_Objects/NaN) et [`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined) peuvent être enregistrés dans un objet `Set`. `NaN` est considéré comme `NaN` (bien que `NaN !== NaN`).

### Performance

`Set` dispose d'une méthode [`has()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Set/has) qui permet de vérifier si une valeur est contenue dans l'objet `Set` et qui utilise une approche qui est, en moyenne, plus rapide que de tester les éléments qui ont été précédemment ajoutés à `Set`. Cette méthode est, en moyenne, plus rapide que la méthode [`Array.prototype.includes()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) qui s'applique aux objets `Array` lorsque la longueur (`length`) du tableau est égale à celle de l'objet `Set` (`size`).

## Constructeur

- [`Set()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Set/Set)
  - : Crée un nouvel objet `Set`.

## Propriétés statiques

- [`get Set[@@species]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Set/@@species)
  - : La fonction de construction utilisée pour créer des objets dérivés.

## Propriétés des instances

- [`Set.prototype.size`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Set/size)
  - : Renvoie le nombre de valeurs contenues dans l'objet `Set`.

## Méthodes des instances

- [<code>Set.prototype.add(<var>valeur</var>)</code>](/fr/docs/Web/JavaScript/Reference/Global_Objects/Set/add)
  - : Ajoute une valeur à l'objet `Set` et renvoie l'objet `Set` avec la valeur ajoutée.
- [`Set.prototype.clear()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Set/clear)
  - : Supprime tous les éléments de l'objet `Set`.
- [<code>Set.prototype.delete(<var>valeur</var>)</code>](/fr/docs/Web/JavaScript/Reference/Global_Objects/Set/delete)
  - : Supprime l'élément associé à la valeur en argument et renvoie un booléen indiquant si l'élément a été retiré avec succès. Par la suite, `Set.prototype.has(valeur)` renverra `false`.
- [<code>Set.prototype.has(<var>valeur</var>)</code>](/fr/docs/Web/JavaScript/Reference/Global_Objects/Set/has)
  - : Renvoie un booléen indiquant si la valeur fournie en argument est présente dans l'ensemble représenté par l'objet `Set`.

### Méthodes d'itération

- [`Set.prototype[@@iterator]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Set/@@iterator)
  - : Renvoie un nouvel itérateur fournissant les **valeurs** de chaque élément de l'objet `Set`, selon leur ordre d'insertion.
- [`Set.prototype.values()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Set/values)
  - : Renvoie un nouvel itérateur fournissant les **valeurs** de chaque élément de l'objet `Set`, selon leur ordre d'insertion.
- [`Set.prototype.keys()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Set/values)
  - : Un alias pour [`Set.prototype.values()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Set/values).
- [`Set.prototype.entries()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Set/entries)

  - : Renvoie un nouvel objet itérateur qui contient **un tableau `[valeur, valeur]`** pour chaque élément de l'objet `Set`, selon leur ordre d'insertion.

    Il s'agit d'une méthode analogue à celle disponible pour [`Map`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Map), c'est pour ça qu'on a le doublonnement de la valeur à la place de la clé.

- [<code>Set.prototype.forEach(<var>fnRappel</var>[, <var>thisArg</var>])</code>](/fr/docs/Web/JavaScript/Reference/Global_Objects/Set/forEach)
  - : Appelle la fonction `fnRappel` une fois pour chaque valeur présente dans l'objet `Set`, selon leur ordre d'insertion. Si le paramètre `thisArg` est fourni, sa valeur sera utilisée comme valeur pour `this` pour chaque appel de `fnRappel`.

## Exemples

### Utiliser l'objet `Set`

```js
const monSet = new Set();

monSet.add(1); // { 1 }
monSet.add(5); // { 1, 5 }
monSet.add(5); // { 1, 5 }
monSet.add("du texte"); // { 1, 5, 'du texte' }

const o = { a: 1, b: 2 };
monSet.add(o);

monSet.add({ a: 1, b: 2 });
// o fait référence à un objet différent
// il n'y a pas de problème pour cet ajout

monSet.has(1); // true
monSet.has(3); // false, 3 n'a pas été ajouté à l'ensemble
monSet.has(5); // true
monSet.has(Math.sqrt(25)); // true
monSet.has("Du Texte".toLowerCase()); // true
monSet.has(o); // true

monSet.size; // 5

monSet.delete(5); // retire 5 du set
monSet.has(5); // false, 5 a été retiré de l'ensemble

monSet.size; // 4, on a retiré une valeur de l'ensemble
console.log(monSet);
// affiche Set(4) [ 1, "du texte", {…}, {…} ] pour Firefox
// affiche Set(4) { 1, "du texte", {…}, {…} } pour Chrome
```

### Itérer sur des ensembles

```js
// On itère sur les différents éléments de l'ensemble
// ici on affiche : 1, "du texte", {"a": 1, "b": 2}, {"a": 1, "b": 2}
for (let item of monSet) console.log(item);

// ici on affiche les clés de l'ensemble : 1, "du texte", {"a": 1, "b": 2}, {"a": 1, "b": 2}
for (let item of monSet.keys()) console.log(item);

// ici on affiche les valeurs de l'ensemble : 1, "du texte", {"a": 1, "b": 2}, {"a": 1, "b": 2}
for (let item of monSet.values()) console.log(item);

// ici on affiche les clés de l'ensemble : 1, "du texte", {"a": 1, "b": 2}, {"a": 1, "b": 2}
// (ici, les clés et les valeurs sont les mêmes)
for (let [clé, valeur] of monSet.entries()) console.log(clé);

// Une méthode de conversion avec Array.from
const monTableau = Array.from(monSet); // [1, "du texte", {"a": 1, "b": 2}, {"a": 1, "b": 2}]

// Cela fonctionnera également dans un document HTML
monSet.add(document.body);
monSet.has(document.querySelector("body")); // true

// convertir un tableau (Array) en ensemble (Set) et vice versa
const monSet2 = new Set([1, 2, 3, 4]);
monSet2.size; // 4
[...monSet2]; // [1, 2, 3, 4]

// L'intersection peut être calculée avec
const intersection = new Set([...set1].filter((x) => set2.has(x)));

// La différence pourra être simulée avec
const différence = new Set([...set1].filter((x) => !set2.has(x)));

// On peut itérer sur les entrées d'un ensemble avec forEach
mySet.forEach(function (value) {
  console.log(value);
});

// 1
// 2
// 3
// 4
```

### Implémenter des opérations ensemblistes

```js
function isSuperset(set, subset) {
  for (let elem of subset) {
    if (!set.has(elem)) {
      return false;
    }
  }
  return true;
}

function union(setA, setB) {
  let _union = new Set(setA);
  for (let elem of setB) {
    _union.add(elem);
  }
  return _union;
}

function intersection(setA, setB) {
  let _intersection = new Set();
  for (let elem of setB) {
    if (setA.has(elem)) {
      _intersection.add(elem);
    }
  }
  return _intersection;
}

function symmetricDifference(setA, setB) {
  let _difference = new Set(setA);
  for (let elem of setB) {
    if (_difference.has(elem)) {
      _difference.delete(elem);
    } else {
      _difference.add(elem);
    }
  }
  return _difference;
}

function difference(setA, setB) {
  let _difference = new Set(setA);
  for (let elem of setB) {
    _difference.delete(elem);
  }
  return _difference;
}

// Exemples
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 3]);
const setC = new Set([3, 4, 5, 6]);

isSuperset(setA, setB); // => true
union(setA, setC); // => Set [1, 2, 3, 4, 5, 6]
intersection(setA, setC); // => Set [3, 4]
symmetricDifference(setA, setC); // => Set {1, 2, 5, 6}
difference(setA, setC); // => Set [1, 2]
```

### Relations avec les objets `Array`

```js
let monTableau = ["valeur1", "valeur2", "valeur3"];

// On peut utiliser le constructeur Set pour transformer
// un Array en Set
let monSet = new Set(monTableau);

monSet.has("valeur1"); // renvoie true

// Et utiliser l'opérateur de décomposition pour
// transformer un Set en Array.
console.log([...monSet]); // affichera la même chose que monTableau
```

### Dédoublonner un tableau

```js
const nombres = [2, 3, 4, 4, 2, 2, 2, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5];

console.log([...new Set(nombres)]);

// affichera [2, 3, 4, 5, 6, 7, 32]
```

### Les relations avec les objets `String`

```js
let texte = "India";

const monSet = new Set(texte);
// Set(5) {'I', 'n', 'd', 'i', 'a'}

monSet.size;
// 5

// Sensibilité à la casse
new Set("Firefox");
// Set(7) { "F", "i", "r", "e", "f", "o", "x" }

new Set("firefox");
// Set(6) { "f", "i", "r", "e", "o", "x" }
```

### Utilisation de `Set` pour vérifier l'unicité des valeurs d'une liste

```js
const tableau = Array.from(document.querySelectorAll("[id]")).map(function (e) {
  return e.id;
});

const set = new Set(tableau);
console.assert(set.size == tableau.length);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Une prothèse d'émulation pour `Set` avec la bibliothèque `core-js`](https://github.com/zloirock/core-js#set)
- [`Map`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [`WeakMap`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)
- [`WeakSet`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WeakSet)
