---
title: Array.prototype.reduceRight()
slug: Web/JavaScript/Reference/Global_Objects/Array/ReduceRight
tags:
  - Array
  - ECMAScript 5
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Array/ReduceRight
original_slug: Web/JavaScript/Reference/Objets_globaux/Array/reduceRight
---
{{JSRef}}

La méthode **`reduceRight()`** applique une fonction sur un accumulateur et chaque valeur d'un tableau (de la droite vers la gauche) de sorte à réduire le tableau en une seule valeur.

{{EmbedInteractiveExample("pages/js/array-reduce-right.html")}}

Voir également {{jsxref("Array.prototype.reduce()")}} pour une méthode qui réduit de gauche à droite.

## Syntaxe

    arr.reduceRight(callback[, valeurInitiale])

### Paramètres

- `callback`

  - : La fonction à éxécuter sur chaque valeur de la liste. Elle utilise quatres arguments :

    - `accumulator`
      - : La valeur précédemment retournée par le dernier appel de la fonction `callback`, ou `valeurInitial` si elle est fournie. (Voir ci-après.)
    - `valeurCourante`
      - : La valeur de l'élément courant dans le tableau.
    - `index`
      - : L'index de l'élément du tableau actuellement manipulé.
    - `array`
      - : Le tableau sur lequel `reduceRight()` est appelée.

- `valeurInitiale` {{optional_inline}}
  - : C'est l'objet à utiliser comme accumulateur/premier argument lors du premier appel de la fonction `callback`. Si aucune valeur n'est fournie, c'est le dernier élément du tableau qui sera utilisé. Si on appelle `reduce()` ou `reduceRight()` sur un tableau vide sans fournir de valeur initiale, on aura une exception {{jsxref("TypeError")}}.

### Valeur de retour

La valeur obtenue grâce à la fonction de réduction.

## Description

`reduceRight` exécute la fonction `callback` une fois pour chaque élément présent dans le tableau, les éléments vides sont ignorés. La fonction `callback` utilise quatre arguments : la valeur initiale (ou la valeur retournée par le précédent appel de la fonction `callback`), la valeur de l'élément courant, l'index de l'élément courant, et le tableau qui est parcouru.

L'usage de `reduceRight` avec définition d'un `callback` devrait ressembler à ceci :

```js
array.reduceRight(function(accumulator, valeurCourante, index, array) {
    // ...
});
```

La première fois que la fonction de callback est appelée, `accumulator` et `valeurCourante` peuvent correspondre à un ou deux éléments. Si `valeurInitiale` est fournie lors de l'appel à `reduceRight`, alors `accumulator` sera égale à `valeurInitiale` et `valeurCourante` sera égale à la dernière valeur de la liste. Si `valeurInitiale` n'est pas fournie, alors `accumulator` sera égale à la dernière valeur de la liste, et `valeurCourante` sera alors égale à l'avant-dernière valeur du tableau.

Si on utilise la méthode `reduceRight` de la façon suivante :

```js
[0, 1, 2, 3, 4].reduceRight(function(accumulator, valeurCourante, index, array) {
    return accumulator + valeurCourante;
});
```

La fonction `callback` sera appelée quatre fois, avec les arguments et les valeurs de retour de chaque appel suivant :

<table>
  <thead>
    <tr>
      <th scope="col"><code>callback</code></th>
      <th scope="col"><code>accumulator</code></th>
      <th scope="col"><code>valeurCourante</code></th>
      <th scope="col"><code>index</code></th>
      <th scope="col"><code>array</code></th>
      <th scope="col">Valeur renvoyée</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">premier appel</th>
      <td>4</td>
      <td>3</td>
      <td>3</td>
      <td><code>[0,1,2,3,4]</code></td>
      <td>7</td>
    </tr>
    <tr>
      <th scope="row">second appel</th>
      <td>7</td>
      <td><code>2</code></td>
      <td><code>2</code></td>
      <td><code>[0,1,2,3,4]</code></td>
      <td>9</td>
    </tr>
    <tr>
      <th scope="row">troisième appel</th>
      <td>9</td>
      <td>1</td>
      <td>1</td>
      <td><code>[0,1,2,3,4]</code></td>
      <td>10</td>
    </tr>
    <tr>
      <th scope="row">quatrième appel</th>
      <td>10</td>
      <td>0</td>
      <td>0</td>
      <td><code>[0,1,2,3,4]</code></td>
      <td><code>10</code></td>
    </tr>
  </tbody>
</table>

La valeur retournée par `reduceRight` sera alors celle du dernier appel de la fonction `callback` (`10`).

Si vous fournissez une valeur initiale comme second argument à l'appel de `reduceRight`, le résultat sera alors le suivant :

```js
[0, 1, 2, 3, 4].reduceRight(function(accumulator, valeurCourante, index, array) {
    return accumulator + valeurCourante;
}, 10);
```

<table>
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col"><code>accumulator</code></th>
      <th scope="col"><code>valeurCourante</code></th>
      <th scope="col"><code>index</code></th>
      <th scope="col"><code>array</code></th>
      <th scope="col">Valeur renvoyée</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">premier appel</th>
      <td><code>10</code></td>
      <td>4</td>
      <td>4</td>
      <td><code>[0,1,2,3,4]</code></td>
      <td><code>14</code></td>
    </tr>
    <tr>
      <th scope="row">second appel</th>
      <td>14</td>
      <td>3</td>
      <td>3</td>
      <td><code>[0,1,2,3,4]</code></td>
      <td><code>17</code></td>
    </tr>
    <tr>
      <th scope="row">troisième appel</th>
      <td>17</td>
      <td><code>2</code></td>
      <td><code>2</code></td>
      <td><code>[0,1,2,3,4]</code></td>
      <td><code>19</code></td>
    </tr>
    <tr>
      <th scope="row">quatrième appel</th>
      <td>19</td>
      <td>1</td>
      <td>1</td>
      <td><code>[0,1,2,3,4]</code></td>
      <td>20</td>
    </tr>
    <tr>
      <th scope="row">cinquième appel</th>
      <td>20</td>
      <td>0</td>
      <td>0</td>
      <td><code>[0,1,2,3,4]</code></td>
      <td><code>20</code></td>
    </tr>
  </tbody>
</table>

La valeur renvoyée par `reduceRight` sera ici `20`.

## Exemples

### Additionner toutes les valeurs d'une liste

```js
var total = [0, 1, 2, 3].reduceRight(function(a, b) {
    return a + b;
});
// total == 6
```

### Aplatir une liste de listes

```js
var aplati = [[0, 1], [2, 3], [4, 5]].reduceRight(function(a, b) {
    return a.concat(b);
}, []);
// aplati [4, 5, 2, 3, 0, 1]
```

### Différence entre `reduce` et `reduceRight`

```js
var a = ['1', '2', '3', '4','5']
var gauche = a.reduce(function(prev, cur) {
  return prev + cur;
});

var droite = a.reduceRight(function(prev, cur) {
  return prev + cur;
});

console.log(gauche); // "12345"
console.log(droite); // "54321"
```

### Composition de fonctions à l'aide de `reduce`

La composition de fonctions consiste en l'enchaînement de n fonctions l'une après l'autre (où les appels sont généralement exécutés de droite à gauche.

```js
/**
 *
 * h(x) = f(g(x))
 *
 * https://fr.wikipedia.org/wiki/Composition_de_fonctions
 */

const compose = (...args) => (value) => args.reduceRight((acc, fn) => fn(acc), value)

// On incrémente un nombre passé en argument
const inc = (n) => n + 1

// On double la valeur passée en argument
const double = (n) => n * 2

// On compose double(inc(x))
compose(double, inc)(2) // 6

// On compose inc(double(x))
compose(inc, double)(2) // 5
```

## Spécifications

| Spécification                                                                                                            | État                         | Commentaires                                          |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.4.4.22', 'Array.prototype.reduceRight')}}                             | {{Spec2('ES5.1')}}     | Définition initiale. Implémentée avec JavaScript 1.8. |
| {{SpecName('ES6', '#sec-array.prototype.reduceright', 'Array.prototype.reduceRight')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-array.prototype.reduceright', 'Array.prototype.reduceRight')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Array.reduceRight")}}

## Voir aussi

- {{jsxref("Array.prototype.reduce()")}}
