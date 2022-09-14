---
title: Array.prototype.map()
slug: Web/JavaScript/Reference/Global_Objects/Array/map
tags:
  - Array
  - ECMAScript 5
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Array/map
original_slug: Web/JavaScript/Reference/Objets_globaux/Array/map
---
{{JSRef}}

La méthode **`map()`** crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant.

{{EmbedInteractiveExample("pages/js/array-map.html")}}

## Syntaxe

```js
var nouveauTableau = arr.map(callback [, thisArg])
```

### Paramètres

- `callback`

  - : La fonction qui est utilisée pour créer un élément du nouveau tableau. Elle utilise trois arguments :

    - `valeurCourante`
      - : La valeur de l'élément du tableau à traiter.
    - `index`{{optional_inline}}
      - : L'index de l'élément qui est traité par la fonction.
    - `tableau`{{optional_inline}}
      - : Le tableau sur lequel on a appelé la méthode `map`.

- `thisArg` {{optional_inline}}
  - : La valeur à utiliser pour `this` lors de l'exécution de `callback`. La valeur par défaut est l'objet global de l'environnement (`Window` pour un navigateur).

### Valeur de retour

Un nouveau tableau composé des images de la fonction de rappel.

## Description

Lorsqu'on utilise `map`, la fonction `callback` fournie en argument est exécutée une fois pour chacun des éléments du tableau, dans l'ordre du tableau. Chaque résultat de l'opération sur un élément sera un élément du nouveau tableau. La fonction `callback` est appelée uniquement pour les indices du tableau pour lesquels il y a des valeurs affectées (y compris si cette valeur est {{jsxref("undefined")}}). Si les valeurs ont été supprimées ou qu'elles n'ont jamais été initialisées, la fonction ne sera pas appelée.

`callback` est appelée avec trois arguments : la valeur de l'élément du tableau, l'index de cet élément et l'objet {{jsxref("Array")}} qui est parcouru.

> **Attention :** `map()` construit un nouveau tableau. Si on utilise cette méthode sans utiliser le résultat, mieux vaudra utiliser [`forEach`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/forEach) ou [`for...of`](/fr/docs/Web/JavaScript/Reference/Instructions/for...of).  Pour mieux décider si `map()`est adéquat, regardez si vous utilisez la valeur de retour et/ou si vous renvoyez une valeur avec la fonction `callback` : si ce n'est pas le cas, il ne faut pas utiliser `map()`.

Si le paramètre `thisArg` est utilisé, il sera utilisé en tant que `this` par la fonction `callback` lorsqu'elle sera appelée. S'il n'est pas utilisé, ce sera la valeur {{jsxref("undefined")}} qui sera utilisée pour définir `this`. La valeur `this` finalement prise en compte par la fonction `callback` est définie [selon les règles usuelles qui déterminent la valeur `this` observée par une fonction](/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/L_op%C3%A9rateur_this).

`map` ne modifie pas le tableau sur lequel elle est appelée (bien que la fonction `callback`, si elle est appelée, puisse modifier le tableau).

La liste des éléments à traiter lors de l'opération `map` est définie avant le premier appel à `callback`. Les éléments qui sont ajoutés au tableau après que l'appel à `map` ait été initié ne seront pas traités par la fonction `callback`. Si des éléments ont été modifiés, la valeur utilisée par la fonction `callback` sera celle au moment où `map` est utilisée. Les éléments qui sont supprimés ne sont pas traités. De la même façon, si on applique `map` sur un tableau dont certains éléments sont indéfinis, le résultat possèdera également les mêmes éléments indéfinis.

## Exemples

### Créer un tableau des racines carrées d'un tableau de nombre

Dans l'exemple suivant, on crée un tableau composé des racines carrées des éléments d'un premier tableau :

```js
var nombres = [1, 4, 9];
var racines = nombres.map(Math.sqrt);
// racines vaut désormais [1, 2, 3]
// nombres vaut toujours [1, 4, 9]
```

### Créer un tableau de nombres avec une fonction à un argument

Ici, on illustre le fonctionnement de `map` avec une fonction à un argument. Cet argument sera automatiquement remplacé par chaque élément du tableau au fur et à mesure que `map` parcourt le tableau :

```js
var nombres = [1, 4, 9];
var doubles = nombres.map(function(num) {
  return num * 2;
});
// doubles vaut désormais [2, 8, 18].
// nombres vaut toujours [1, 4, 9]
```

### Utiliser `map` pour changer le format d'objets dans un tableau

Dans le code qui suit, on utilise un tableau d'objets pour créer un autre tableau contenant de nouveaux objets dans un autre format :

```js
var tableauOrig = [{clé:1, valeur:10}, {clé:2, valeur:20}, {clé:3, valeur: 30}];
var tableauFormaté = tableauOrig.map(obj => {
  var rObj = {};
  rObj[obj.clé] = obj.valeur;
  return rObj;
});
// tableauFormaté vaut maintenant [{1:10}, {2:20}, {3:30}],
// tableauOrig vaut toujours
// [{clé:1, valeur:10},
//  {clé:2, valeur:20},
//  {clé:3, valeur: 30}
// ]
```

### Utiliser `map` de façon générique

Dans cet exemple, on voit comment utiliser la fonction `map` sur une chaîne de caractères pour obtenir un tableau contenant les codes ASCII des valeurs encodées :

```js
var map = Array.prototype.map;
var a = map.call('Hello World', function(x) { return x.charCodeAt(0); });
// a vaut désormais [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]
```

### Utiliser `map` avec `querySelectorAll`

Dans cet exemple, on illustre comment utiliser la méthode map de façon générique, sur un tableau d'objets collectés grâce à `querySelectorAll` :

```js
var elems = document.querySelectorAll('select option:checked');
var values = Array.prototype.map.call(elems, function(obj) {
  return obj.value;
});
```

On aurait également pu utiliser la méthode {{jsxref("Array.from()")}} qui permet de produire un tableau à partir d'un objet itérable.

### Un résultat inattendu

[Exemple inspiré par ce billet](https://www.wirfs-brock.com/allen/posts/166) (en anglais)

Il est fréquent d'utiliser la fonction `callback` avec un seul argument (l'élément en cours). Certaines fonctions natives sont également souvent appelées avec un unique argument même si elles peuvent prendre en compte plusieurs arguments. En combinant ces deux « habitudes », on peut obtenir certains résultats inattendus :

```js
// Si on utilise :
['1', '2', '3'].map(parseInt);
// On s'attend à obtenir [1, 2, 3]
// Le résultat qu'on obtient est en fait [1, NaN, NaN]

// parseInt est souvent utilisé avec un argument mais il
// peut être utilisé avec deux arguments
// Le premier correspond à l'expression à parser et le second
// à la base dans laquelle convertir
// Array.prototype.map passe 3 arguments à callback :
// l'élément, l'index et le tableau
// Le troisième argument sera ignoré par parseInt mais pas le
// deuxième, ce qui donnera ce résultat étrange

function returnInt(element) {
  return parseInt(element, 10);
}

['1', '2', '3'].map(returnInt); // [1, 2, 3]
// Le résultat qu'on obtient avec la fonction auxiliaire

['1', '2', '3'].map(parseInt);  // [1, NaN, NaN]
// car map passe trois argument à la fonction et que parseInt
// considère le second argument comme base.
// En détails :
// Premier élément :   "1" à l'indice 0 : parseInt("1",0); donne 1
// Deuxième élément :  "2" à l'indice 1 : parseInt("2",1); donne NaN
// Troisième élément : "3" à l'indice 2 : parseInt("3",2); donne NaN


// Formulation équivalente plus concise avec
// une fonction fléchée
['1', '2', '3'].map( str => parseInt(str));

// Une autre méthode, plus simple
['1', '2', '3'].map(Number); // [1, 2, 3]
// à la différence de parseInt, cela fonctionnera pour les
// nombres décimaux ou en notation exponentielle
['1.1', '2.2e2', '3e300'].map(Number); // [1.1, 220, 3e+300]
```

## Spécifications

| Spécification                                                                                        | État                         | Commentaires                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.4.4.19', 'Array.prototype.map')}}                 | {{Spec2('ES5.1')}}     | Définition initiale. Implémentée avec JavaScript 1.6. |
| {{SpecName('ES6', '#sec-array.prototype.map', 'Array.prototype.map')}}         | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-array.prototype.map', 'Array.prototype.map')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Array.map")}}

## Voir aussi

- {{jsxref("Array.prototype.forEach()")}}
- L'objet {{jsxref("Map")}}
- {{jsxref("Array.from()")}}
