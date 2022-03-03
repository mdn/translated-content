---
title: Array.prototype.filter()
slug: Web/JavaScript/Reference/Global_Objects/Array/filter
tags:
  - Array
  - ECMAScript 5
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Array/filter
original_slug: Web/JavaScript/Reference/Objets_globaux/Array/filter
---
{{JSRef}}

La méthode **`filter()`** crée et retourne un nouveau tableau contenant tous les éléments du tableau d'origine qui remplissent une condition déterminée par la fonction `callback`.

{{EmbedInteractiveExample("pages/js/array-filter.html")}}

## Syntaxe

    arr.filter(callback); // callback(elementCourant[, index[, tableauEntier]])
    var nouveauTableau = arr.filter(callback, thisArg);

### Paramètres

- `callback`

  - : La fonction de test (ou _prédicat_) à appliquer à chaque élément du tableau. Cette fonction est appelée avec les arguments suivants :

    - `elementCourant`
      - : L'élément à traiter
    - `index`
      - : Son indice.
    - `array`
      - : Le tableau complet

    Cette fonction renvoie `true` — ou une valeur équivalente — si l'élément doit être conservé pour le tableau résultat et `false` dans le cas contraire.

- `thisArg` {{optional_inline}}
  - : Objet à utiliser en tant que `this` quand la fonction `callback` est exécutée.

### Valeur de retour

Un nouveau tableau contenant les éléments qui respectent la condition du filtre. Si aucun élément ne respecte la condition, c'est un tableau vide qui est renvoyé.

## Description

`filter()` appelle la fonction `callback` fournie pour chacun des éléments d'un tableau, et construit un nouveau tableau contenant tous les éléments pour lesquels l'appel de `callback` retourne `true` ou une valeur équivalente à `true` dans un contexte booléen. La fonction `callback` n'est utilisée que pour les éléments du tableau ayant une valeur assignée — les index supprimés ou pour lesquels il n'y a jamais eu de valeur ne sont pas pris en compte. Les éléments du tableau qui ne passent pas le test effectué par la fonction `callback` sont ignorés, ils ne sont pas inclus dans le nouveau tableau.

La fonction `callback` est appelée avec trois arguments :

1.  la valeur de l'élément courant,
2.  l'index de l'élément courant,
3.  l'objet `Array` parcouru.

Si le paramètre `thisArg` est fourni, il sera utilisé comme valeur `this` lors de l'appel de la fonction `callback`. S'il n'est pas fourni, la valeur `undefined` sera utilisée à la place. La valeur de `this` qui est finalement utilisée par la fonction `callback` est déterminée selon [les règles usuelles pour déterminer la valeur `this` au sein d'une fonction](/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/L_op%C3%A9rateur_this).

Noter que `filter()` ne modifie pas le tableau d'origine.

La liste des éléments parcourus par `filter()` est définie avant la première invocation de la fonction `callback`. Les éléments qui sont ajoutés à la liste après le début de l'appel de `filter()` (grâce à la fonction `callback` par exemple) ne seront pas concernés par le filtre. Si des éléments de la liste sont modifiés ou supprimés au cours du traitement, la valeur fournie à la fonction `callback` sera la valeur de ces éléments au moment où `filter()` les traite — les éléments supprimés ne seront pas traités par la fonction.

## Exemples

### Filtrer les petites valeurs

L'exemple suivant utilise `filter` pour créer une nouvelle liste où tous les éléments dont la valeur est inférieure à 10 ont été retirés.

```js
function suffisammentGrand(element) {
  return element >= 10;
}
var filtre = [12, 5, 8, 130, 44].filter(suffisammentGrand);
// filtre vaut [12, 130, 44]
```

### Filtrer des éléments JSON invalides et les trier en fonction d'un identifiant avec `filter()`

Dans l'exemple qui suit, on utilise `filter()` pour créer un objet JSON qui contient des éléments dont l'`id` est un entier.

```js
var arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  { },
  { id: null },
  { id: NaN },
  { id: 'undefined' }
];

var elementsInvalides = 0;

function filtrerParID(obj) {
  // Si c'est un nombre
  if (obj.id !== undefined && typeof(obj.id) === 'number' && !isNaN(obj.id)) {
    return true;
  } else {
    elementsInvalides++;
    return false;
  }
}

var arrByID = arr.filter(filtrerParID);

console.log('Tableau filtré\n', arrByID);
// Le tableau filtré est :
// [{ id: 15 }, { id: -1 }, { id: 0 }, { id: 3 }, { id: 12.2 }]

console.log('Nombre d\'éléments invalides = ', elementsInvalides);
// Nombre d'éléments invalides 4
```

### Recherche dans un tableau

Dans l'exemple qui suit, on utilise `filter()` pour filtrer le contenu d'un tableau selon un critère donné.

```js
var fruits = ['pomme', 'banane', 'raisin', 'mangue'];

function filtreTexte(arr, requete) {
  return arr.filter(function (el) {
    return el.toLowerCase().indexOf(requete.toLowerCase()) !== -1;
  })
}

console.log(filtreTexte(fruits, 'an')); // ['banane', 'mangue'];
console.log(filtreTexte(fruits, 'm')); // ['pomme', 'mangue'];
```

### Implémentation avec la syntaxe ECMAScript 2015 (ES6)

L'exemple suivant utilise [les fonctions fléchées](/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fléchées), et le mot clé [`const`](/fr/docs/Web/JavaScript/Reference/Instructions/const) disponible en ES6.

```js
const fruits = ['pomme', 'banane', 'raisin', 'mangue'];

const filtreTexte = (arr, requete) => {
  return arr.filter(el =>  el.toLowerCase().indexOf(requete.toLowerCase()) !== -1);
}

console.log(filtreTexte(fruits, 'an')); // ['banane', 'mangue'];
console.log(filtreTexte(fruits, 'm')); // ['pomme', 'mangue'];
```

## Prothèse d'émulation (_polyfill_)

`Array.prototype.filter()` a été ajoutée avec la cinquième édition du standard ECMA-262 — ainsi elle pourrait ne pas être présente dans toutes les implémentations du standard. Ce problème peut être contourné en ajoutant le code suivant au début des scripts et permettra d'utiliser `filter` au sein d'implémentations qui n'en bénéficient pas nativement. Cet algorithme est strictement celui spécifié par la cinquième édition d'ECMA-262, en considérant que `callbackfn.call` est évaluée avec la valeur d'origine de {{jsxref("Function.prototype.call")}} et que {{jsxref("Array.prototype.push")}} a sa valeur d'origine.

```js
if (!Array.prototype.filter){
  Array.prototype.filter = function(func, thisArg) {
    'use strict';
    if ( ! ((typeof func === 'Function' || typeof func === 'function') && this) )
        throw new TypeError();

    var len = this.length >>> 0,
        res = new Array(len), // preallocate array
        t = this, c = 0, i = -1;
    if (thisArg === undefined){
      while (++i !== len){
        // checks to see if the key was set
        if (i in this){
          if (func(t[i], i, t)){
            res[c++] = t[i];
          }
        }
      }
    }
    else{
      while (++i !== len){
        // checks to see if the key was set
        if (i in this){
          if (func.call(thisArg, t[i], i, t)){
            res[c++] = t[i];
          }
        }
      }
    }

    res.length = c; // shrink down array to proper size
    return res;
  };
}
```

## Spécifications

| Spécification                                                                                                | État                         | Commentaires                                          |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.4.4.20', 'Array.prototype.filter')}}                     | {{Spec2('ES5.1')}}     | Définition initiale. Implémentée avec JavaScript 1.6. |
| {{SpecName('ES2015', '#sec-array.prototype.filter', 'Array.prototype.filter')}}     | {{Spec2('ES2015')}}     |                                                       |
| {{SpecName('ESDraft', '#sec-array.prototype.filter', 'Array.prototype.filter')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Array.filter")}}

## Voir aussi

- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("Array.prototype.reduce()")}}
