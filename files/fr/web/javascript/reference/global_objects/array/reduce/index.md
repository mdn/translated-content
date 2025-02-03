---
title: Array.prototype.reduce()
slug: Web/JavaScript/Reference/Global_Objects/Array/reduce
---

{{JSRef}}

La méthode **`reduce()`** applique une fonction qui est un « accumulateur » et qui traite chaque valeur d'une liste (de la gauche vers la droite) afin de la réduire à une seule valeur.

{{InteractiveExample}}

```js interactive-example
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10

```

## Syntaxe

```js
arr.reduce(callback);
arr.reduce(callback, valeurInitiale);
```

### Paramètres

- `callback`

  - : La fonction à exécuter sur chaque valeur de la liste (sauf le premier si aucune `valeurInitiale` n'est fournie), elle prend quatre arguments en entrée :

    - `accumulateur`
      - : La valeur précédemment retournée par le dernier appel du callback, ou `valeurInitiale`, si elle est fournie (voir ci-après) (c'est la valeur « accumulée » au fur et à mesure des appels
    - `valeurCourante`
      - : La valeur de l'élément courant actuellement manipulé dans le tableau.
    - `index`{{optional_inline}}
      - : L'index de l'élément courant actuellement manipulé dans le tableau.
    - `array`{{optional_inline}}
      - : Le tableau sur lequel on a appelé la méthode `reduce()`.

- `valeurInitiale`{{optional_inline}}
  - : Une valeur utilisée comme premier argument lors du premier appel de la fonction `callback`. Si aucune valeur initiale n'est fournie, le premier élément du tableau est utilisé (et la boucle de traitement ne le parcourera pas). Si on appelle `reduce()` sur un tableau vide sans fournir de valeur initiale, on aura une erreur.

### Valeur de retour

La valeur obtenue grâce à la fonction de réduction.

## Description

`reduce()` exécute la fonction `callback` une fois pour chaque élément présent dans le tableau et ignore les éléments vides du tableau. La fonction `callback` utilise quatre arguments :

1. L'accumulateur (la valeur retournée par le précédent appel de la fonction `callback`), ou la valeur initiale s'il sagit du premier appel ;
2. la valeur de l'élément courant ;
3. l'index de l'élément courant ;
4. le tableau parcouru par la méthode.

La première fois que la fonction `callback` est appelée, `valeurInitiale` et `valeurCourante` peuvent correspondre à un ou deux éléments. Si `valeurInitiale` est fournie dans l'appel de `reduce()`, alors `accumulateur` sera égale à `valeurInitiale` et `valeurCourante` sera égale à la première valeur de la liste. Si `valeurInitiale` n'est pas fournie, alors `accumulateur` sera égale à la première valeur de la liste, et `valeurCourante` sera alors égale à la seconde.

Autrement dit, si `valeurInitiale` n'est pas fournie, `reduce` exécutera la fonction de rappel à partir de l'indice 1 et la première valeur du tableau (d'indice 0) sera utilisée pour `valeurInitiale`.

En considérant le code suivant :

```js
[0, 1, 2, 3, 4].reduce(function (accumulateur, valeurCourante, index, array) {
  return accumulateur + valeurCourante;
});
```

La fonction `callback` sera appelée quatre fois, avec les arguments et les valeurs de retour de chaque appel suivant :

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col"><code>accumulateur</code></th>
      <th scope="col"><code>valeurCourante</code></th>
      <th scope="col"><code>index</code></th>
      <th scope="col"><code>array</code></th>
      <th scope="col">valeur retournée</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">premier appel</th>
      <td><code>0</code></td>
      <td><code>1</code></td>
      <td><code>1</code></td>
      <td><code>[0,1,2,3,4]</code></td>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">deuxième appel</th>
      <td><code>1</code></td>
      <td><code>2</code></td>
      <td><code>2</code></td>
      <td><code>[0,1,2,3,4]</code></td>
      <td><code>3</code></td>
    </tr>
    <tr>
      <th scope="row">troisième appel</th>
      <td><code>3</code></td>
      <td><code>3</code></td>
      <td><code>3</code></td>
      <td><code>[0,1,2,3,4]</code></td>
      <td><code>6</code></td>
    </tr>
    <tr>
      <th scope="row">quatrième appel</th>
      <td><code>6</code></td>
      <td><code>4</code></td>
      <td><code>4</code></td>
      <td><code>[0,1,2,3,4]</code></td>
      <td><code>10</code></td>
    </tr>
  </tbody>
</table>

La valeur retournée par `reduce()` sera alors celle du dernier appel de la callback (ici `10`).

Il est aussi possible d'utiliser une {{jsxref("Fonctions/Fonctions_fléchées","fonction fléchée","",1)}} au lieu d'une fonction classique. Le code suivant, par exemple, produit le même résultat que l'exemple précédent :

```js
[0, 1, 2, 3, 4].reduce(
  (accumulateur, valeurCourante) => accumulateur + valeurCourante;
);
```

Si on fournit une valeur initiale comme second argument à l'appel de `reduce()`, le résultat sera alors le suivant :

```js
[0, 1, 2, 3, 4].reduce(function (accumulateur, valeurCourante, index, array) {
  return accumulateur + valeurCourante;
}, 10);
```

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col"><code>accumulateur</code></th>
      <th scope="col"><code>valeurCourante</code></th>
      <th scope="col"><code>index</code></th>
      <th scope="col"><code>array</code></th>
      <th scope="col">valeur retournée</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">premier appel</th>
      <td><code>10</code></td>
      <td><code>0</code></td>
      <td><code>0</code></td>
      <td><code>[0,1,2,3,4]</code></td>
      <td><code>10</code></td>
    </tr>
    <tr>
      <th scope="row">deuxième appel</th>
      <td><code>10</code></td>
      <td><code>1</code></td>
      <td><code>1</code></td>
      <td><code>[0,1,2,3,4]</code></td>
      <td><code>11</code></td>
    </tr>
    <tr>
      <th scope="row">troisième appel</th>
      <td><code>11</code></td>
      <td><code>2</code></td>
      <td><code>2</code></td>
      <td><code>[0,1,2,3,4]</code></td>
      <td><code>13</code></td>
    </tr>
    <tr>
      <th scope="row">quatrième appel</th>
      <td><code>13</code></td>
      <td><code>3</code></td>
      <td><code>3</code></td>
      <td><code>[0,1,2,3,4]</code></td>
      <td><code>16</code></td>
    </tr>
    <tr>
      <th scope="row">cinquième appel</th>
      <td><code>16</code></td>
      <td><code>4</code></td>
      <td><code>4</code></td>
      <td><code>[0,1,2,3,4]</code></td>
      <td><code>20</code></td>
    </tr>
  </tbody>
</table>

Ici, la valeur renvoyée par `reduce()` serait `20`.

## Exemples

### Additionner toutes les valeurs d'un tableau

```js
var total = [0, 1, 2, 3].reduce((a, b) => a + b, 0);
// total == 6
```

### Additionner les valeurs d'une propriétés pour un tableau d'objets

Pour additionner les valeurs d'une propriété donnée des objets d'un tableau, il sera nécessaire de fournir une valeur initiale afin que tous les éléments soient parcourus :

```js
var valeurInitiale = 0;
var somme = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce(function (
  accumulateur,
  valeurCourante,
) {
  return accumulateur + valeurCourante.x;
}, valeurInitiale);

console.log(somme); // affiche 6 dans la console
```

On peut également écrire une version plus concise avec les fonctions fléchées :

```js
var valeurInitiale = 0;
var somme = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce(
  (accumulateur, valeurCourante) => accumulateur + valeurCourante.x,
  valeurInitiale,
);

console.log(somme); // affiche 6 dans la console
```

### Aplatir une liste de listes

```js
var applati = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce(function (a, b) {
  return a.concat(b);
});
// applati vaut [0, 1, 2, 3, 4, 5]
```

### Utiliser le paramètre `valeurInitiale`

```js
var amis = [
  { nom: "Quentin", livres: ["City Hall", "Harry Potter"] },
  { nom: "Alice", livres: ["L'Avare", "Les Fleurs du Mal"] },
];

var tousLivres = amis.reduce(
  function (prev, curr) {
    return [...prev, ...curr.livres];
  },
  ["Perceval"],
);

// tousLivres = ["Perceval", "City Hall", "Harry Potter",
//               "L'Avare", "Les Fleurs du Mal"]
```

### Exécuter une suite de promesses stockées dans un tableau

```js
/**
 * Exécuter un enchaînement de promesses à partir d'un tableau
 *
 * @param {array} arr - un tableau de promesses
 * @return {Object} un objet Promise
 */
function runPromiseInSequense(arr) {
  return arr.reduce((promiseChain, currentPromise) => {
    return promiseChain.then((chainedResult) => {
      return currentPromise(chainedResult).then((res) => res);
    });
  }, Promise.resolve());
}

// promise function 1
function p1() {
  return new Promise((resolve, reject) => {
    resolve(5);
  });
}

// promise function 2
function p2(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 2);
  });
}

// promise function 3
function p3(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 3);
  });
}

const promiseArr = [p1, p2, p3];
runPromiseInSequense(promiseArr).then((res) => {
  console.log(res); // 30
});
```

### Regrouper des objets selon une propriété

```js
var personnes = [
  { nom: "Alice", age: 21 },
  { nom: "Bob", age: 20 },
  { nom: "Charlie", age: 20 },
];

function groupBy(tableauObjets, propriete) {
  return tableauObjets.reduce(function (acc, obj) {
    var cle = obj[propriete];
    if (!acc[cle]) {
      acc[cle] = [];
    }
    acc[cle].push(obj);
    return acc;
  }, {});
}

var personnesParAge = groupBy(personnes, "age");
// personnesParAge aura la valeur :
// {
//    20: [
//       { nom: "Bob", age: 20 },
//       { nom: "Charlie", age: 20 }
//    ],
//    21: [{ nom: "Alice", age: 21 }]
// }
```

### Composition de fonctions

```js
// Les briques de base que nous allons composer
const double = (x) => x + x;
const triple = (x) => 3 * x;
const quadruple = (x) => 4 * x;

// Une fonction qui permet d'appliquer une composition
const pipe =
  (...functions) =>
  (input) =>
    functions.reduce((acc, fn) => fn(acc), input);

// On crée des fonctions pour multiplier par un facteur donné
const multiply6 = pipe(double, triple);
const multiply9 = pipe(triple, triple);
const multiply16 = pipe(quadruple, quadruple);
const multiply24 = pipe(double, triple, quadruple);

// Utilisation
multiply6(6); // 36
multiply9(9); // 81
multiply16(16); // 256
multiply24(10); // 240
```

### Retirer les doublons d'un tableau

#### Avec ECMAScript 2015 (ES6)

```js
let tableauAvecDoublons = [1, 2, 3, 1, 4, 5, 4, 6];
let tableauSansDoublon = Array.from(new Set(tableauAvecDoublons));
console.table(tableauSansDoublon); // [1, 2, 3, 4, 5, 6]
```

#### Avec `reduce()`

```js
var tableauAvecDoublons = [1, 2, 3, 1, 4, 5, 4, 6];
var tableauSansDoublon = tableauAvecDoublons.reduce(function (
  acc,
  valCourante,
) {
  if (acc.indexOf(valCourante) === -1) {
    acc.push(valCourante);
  }
  return acc;
}, []);

console.log(tableauSansDoublon); // [1, 2, 3, 4, 5, 6]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Array.prototype.reduceRight()")}}
