---
title: Array.prototype.indexOf()
slug: Web/JavaScript/Reference/Global_Objects/Array/indexOf
---

{{JSRef}}

La méthode **`indexOf()`** renvoie le premier indice pour lequel on trouve un élément donné dans un tableau. Si l'élément cherché n'est pas présent dans le tableau, la méthode renverra -1.

> **Note :** pour la méthode associée aux chaînes de caractères, voir la page {{jsxref("String.prototype.indexOf()")}}.

{{EmbedInteractiveExample("pages/js/array-indexof.html")}}

## Syntaxe

```js
arr.indexOf(élémentRecherché);
arr.indexOf(élémentRecherché, indiceDébut);
```

### Paramètres

- `élémentRecherché`
  - : L'élément qu'on cherche dans le tableau
- `indiceDébut` {{optional_inline}}
  - : L'index à partir duquel commencer la recherche. La valeur par défaut est 0 (le tableau sera parcouru dans sa totalité). Si l'index est plus grand ou égal à la longueur du tableau, la méthode renverra -1. Si l'index est négatif, la recherche commencera d'autant d'éléments, à partir de la fin du tableau. À noter que même si l'index est négatif, la recherche s'effectue toujours du début jusqu'à la fin du tableau. Si l'index fourni est inférieur à 0, le tableau sera entièrement parcouru.

### Valeur de retour

Le premier index de l'élément dans le tableau ou -1 si la valeur n'est pas trouvée.

## Description

`indexOf` compare `élémentRecherché` aux éléments contenus dans le tableau en utilisant une [égalité stricte](</fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_de_comparaison#.C3.89galit.C3.A9_stricte_(.3D.3D.3D)>) (la même méthode utilisée par l'opérateur `===`).

## Exemples

### Utiliser `indexOf()`

Dans l'exemple qui suit, on peut utiliser `indexOf` afin de trouver l'emplacement d'un élément dans un tableau.

```js
var tableau = [2, 9, 9];
tableau.indexOf(2); // 0
tableau.indexOf(7); // -1
tableau.indexOf(9, 2); // 2
tableau.indexOf(2, -1); // -1
tableau.indexOf(2, -3); // 0
```

### Trouver toutes les occurences d'un élément

Dans l'exemple qui suit, on utilise `indexOf()` afin de trouver tous les indices d'un élément dans un tableau. On peut utiliser la méthode {{jsxref("Array.prototype.push", "push")}} afin d'ajouter ces indices dans un autre tableau.

```js
var indices = [];
var tableau = ["a", "b", "a", "c", "a", "d"];
var élément = "a";
var idx = tableau.indexOf(élément);
while (idx != -1) {
  indices.push(idx);
  idx = tableau.indexOf(élément, idx + 1);
}
console.log(indices);
// [0, 2, 4]
```

### Trouver si un élément existe et l'ajouter dans le tableau si ce n'est pas le cas

```js
function mettreAJourLegumes(tabLégumes, légume) {
  if (tabLégumes.indexOf(légume) === -1) {
    tabLégumes.push(légume);
    console.log("Le nouveau tableau est : " + tabLégumes);
  } else if (tabLégumes.indexOf(légume) > -1) {
    console.log(légume + " existe déjà dans le tableau.");
  }
}

var tabLégumes = ["pomme de terre", "tomate", "poivron"];

mettreAJourLegumes(tabLégumes, "épinard");
// Le nouveau tableau est : pomme de terre,tomate,poivron,épinard
mettreAJourLegumes(tabLégumes, "épinard");
// épinard existe déjà dans le tableau.
```

## Prothèse d'émulation (_polyfill_)

`indexOf` fut ajouté avec la cinquième édition du standard ECMA-262 ; il peut donc ne pas être présent dans tous les navigateurs web. Vous pouvez contourner ce problème en insérant le code suivant au début de vos scripts. Il permet d'utiliser `indexOf` dans les environnements qui ne le supportent pas nativement. L'algorithme est le même que celui spécifié dans ECMAScript 5 si on a bien {{jsxref("TypeError", "TypeError")}} et {{jsxref("Math.abs")}} qui ont leurs valeurs originales :

```js
// Production steps of ECMA-262, Edition 5, 15.4.4.14
// Référence : http://es5.github.io/#x15.4.4.14
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function (searchElement, fromIndex) {
    var k;

    // 1. Soit O le résultat de l'appel à ToObject avec
    //    this en argument.
    if (this == null) {
      throw new TypeError('"this" vaut null ou n est pas défini');
    }

    var O = Object(this);

    // 2. Soit lenValue le résultat de l'appel de la
    //    méthode interne Get de O avec l'argument
    //    "length".
    // 3. Soit len le résultat de ToUint32(lenValue).
    var len = O.length >>> 0;

    // 4. Si len vaut 0, on renvoie -1.
    if (len === 0) {
      return -1;
    }

    // 5. Si l'argument fromIndex a été utilisé, soit
    //    n le résultat de ToInteger(fromIndex)
    //    0 sinon
    var n = +fromIndex || 0;

    if (Math.abs(n) === Infinity) {
      n = 0;
    }

    // 6. Si n >= len, on renvoie -1.
    if (n >= len) {
      return -1;
    }

    // 7. Si n >= 0, soit k égal à n.
    // 8. Sinon, si n<0, soit k égal à len - abs(n).
    //    Si k est inférieur à 0, on ramène k égal à 0.
    k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

    // 9. On répète tant que k < len
    while (k < len) {
      // a. Soit Pk égal à ToString(k).
      //    Ceci est implicite pour l'opérande gauche de in
      // b. Soit kPresent le résultat de l'appel de la
      //    méthode interne HasProperty de O avec Pk en
      //    argument. Cette étape peut être combinée avec
      //    l'étape c
      // c. Si kPresent vaut true, alors
      //    i.  soit elementK le résultat de l'appel de la
      //        méthode interne Get de O avec ToString(k) en
      //        argument
      //   ii.  Soit same le résultat de l'application de
      //        l'algorithme d'égalité stricte entre
      //        searchElement et elementK.
      //  iii.  Si same vaut true, on renvoie k.
      if (k in O && O[k] === searchElement) {
        return k;
      }
      k++;
    }
    return -1;
  };
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Array.prototype.lastIndexOf()")}}
- {{jsxref("TypedArray.prototype.indexOf()")}}
