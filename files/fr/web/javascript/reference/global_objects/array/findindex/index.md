---
title: Array.prototype.findIndex()
slug: Web/JavaScript/Reference/Global_Objects/Array/findIndex
---

{{JSRef}}

La méthode **`findIndex()`** renvoie l'**index** du **premier élément** du tableau qui satisfait une condition donnée par une fonction. Si la fonction renvoie faux pour tous les éléments du tableau, le résultat vaut -1.

{{EmbedInteractiveExample("pages/js/array-findindex.html")}}

Voir également la méthode {{jsxref("Array.find", "find()")}} qui renvoie la **valeur** (et non l'index) d'un des éléments trouvés.

## Syntaxe

```js
arr.findIndex(callback(element[, index[, tableau]])[, thisArg])
```

### Paramètres

- `callback`

  - : Une fonction à exécuter sur chaque valeur du tableau jusqu'à ce que celle-ci renvoie `true`. Cette fonction prend trois arguments :

    - `élément`
      - : L'élément du tableau qui doit être traité.
    - `index`{{optional_inline}}
      - : L'index de l'élément du tableau en cours de traitement.
    - `tableau`{{optional_inline}}
      - : Le tableau sur lequel a été appelé `findIndex`.

- `argumentThis`{{optional_inline}}
  - : L'objet à utiliser comme contexte `this` lorsque le `callback` est exécuté.

### Valeur de retour

Un index d'un élément du tableau qui réussit le test décrit, -1 sinon.

## Description

La méthode `findIndex` exécute la fonction `callback` une fois pour chaque élément présent dans le tableau (le tableau est parcouru entre les index `0` et `length-1` compris) jusqu'à ce que `callback` renvoie une valeur vraie.

S'il existe un tel élément, `findIndex` renverra immédiatement l'index de l'élément concerné. Sinon, `findIndex` renverra -1. À la différence des autres méthodes liées aux tableaux comme `some()`, `callback` est également appelée pour les index du tableau pour lesquels aucun élément n'est défini.

`callback` possède trois arguments : la valeur de l'élément, l'index de l'élément et l'objet Array qui est parcouru

Si l'argument `argumentThis` est fourni à la méthode `findIndex`, il sera utilisé comme « contexte » [`this`](/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_this) pour chaque appel de `callback`. S'il n'est pas fourni, {{jsxref("undefined")}} sera utilisé.

`findIndex` ne modifie pas le tableau sur laquelle elle est appelée. Les éléments qui seront traités par `findIndex` sont « récoltés » avant le premier appel de `callback`. Tout élément qui sera ajouté au tableau après l'appel de `findIndex` ne sera pas utilisé avec `callback`. Si un élément existant, pas encore visité, est modifié par `callback`, la valeur qui sera passé au `callback` pour cet élément modifié sera celle que `findIndex` utilise lorsqu'elle utilise l'index de l'élément en question. Les éléments supprimés sont bien parcourus.

## Exemples

### Trouver l'index d'un nombre premier dans un tableau

L'exemple qui suit illustre comment trouver l'index d'un élément qui est un nombre premier dans un tableau (ou qui renvoie -1 s'il n'y a pas de nombre premier).

```js
function estPremier(élément, index, array) {
  var début = 2;
  while (début <= Math.sqrt(élément)) {
    if (élément % début < 1) {
      return false;
    } else {
      début++;
    }
  }
  return élément > 1;
}

console.log([4, 6, 8, 12].findIndex(estPremier)); // -1, aucun trouvé
console.log([4, 6, 7, 12].findIndex(estPremier)); // 2
```

### Trouver un index avec une fonction fléchée

Dans cet exemple, on utilise [une fonction fléchée](/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fléchées) pour trouver l'index d'un élément :

```js
const fruits = ["pomme", "banane", "melon", "fraise", "raisin"];

const index = fruits.findIndex((fruit) => fruit === "fraise");
console.log(index); // 3
console.log(fruits[index]); // fraise
```

## Prothèse d'émulation (_polyfill_)

```js
// https://tc39.github.io/ecma262/#sec-array.prototype.findindex
if (!Array.prototype.findIndex) {
  Object.defineProperty(Array.prototype, "findIndex", {
    value: function (predicate) {
      // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If IsCallable(predicate) is false, throw a TypeError exception.
      if (typeof predicate !== "function") {
        throw new TypeError("predicate must be a function");
      }

      // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
      var thisArg = arguments[1];

      // 5. Let k be 0.
      var k = 0;

      // 6. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kValue be ? Get(O, Pk).
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. If testResult is true, return k.
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
          return k;
        }
        // e. Increase k by 1.
        k++;
      }

      // 7. Return -1.
      return -1;
    },
    configurable: true,
    writable: true,
  });
}
```

S'il est vraiment nécessaire de prendre en charge les moteurs JavaScript qui ne prennent pas en charge {{jsxref("Object.defineProperty()")}}, mieux vaut ne pas ajouter de prothèse aux méthodes d'`Array.prototype` car on ne peut pas les rendre non-énumérables.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.indexOf()")}}
