---
title: Array.prototype.lastIndexOf()
slug: Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
---

{{JSRef}}

La méthode **`lastIndexOf()`** permet de renvoyer le dernier indice pour lequel une valeur donnée est présente dans un tableau. Si la valeur recherchée n'est pas présente, le résultat sera -1. Lors de la recherche, le tableau est parcouru dans le sens des index décroissants, à partir de l'index `indexDébut`.

{{EmbedInteractiveExample("pages/js/array-lastindexof.html")}}

## Syntaxe

```js
arr.lastIndexOf(élémentRecherché);
arr.lastIndexOf(élémentRecherché, indexDébut);
```

### Paramètres

- `élémentRecherché`
  - : L'élément à qu'on cherche dans le tableau.
- `indexDébut` {{optional_inline}}
  - : L'index à partir duquel commencer la recherche dans le tableau (la recherche s'effectuant à l'envers). Si le paramètre est absent, sa valeur par défaut sera la longueur du tableau moins 1 (c'est-à-dire `arr.length - 1`), le tableau sera alors parcouru dans sa totalité. Si l'index est plus grand ou égal à la longueur du tableau, le tableau sera parcouru en entier. Si l'index est négatif, la recherche commencera d'autant d'éléments à partir de la fin du tableau. À noter que, même si l'index est négatif, la recherche s'effectuera toujours de la fin jusqu'au début du tableau. Si l'index calculé est inférieur à 0, la méthode renverra -1 et le tableau ne sera pas parcouru.

### Valeur de retour

Le dernier index auquel on trouve la valeur dans le tableau, -1 si elle n'est pas trouvée.

## Description

`lastIndexOf` compare `élémentRecherché` aux éléments contenus dans le tableau en utilisant une [égalité stricte](</fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_de_comparaison#.C3.89galit.C3.A9_stricte_(.3D.3D.3D)>) (l'égalité utilisée par l'opérateur ===).

## Exemples

### Utiliser `lastIndexOf`

Dans l'exemple suivant, on utilise `lastIndexOf` afin de situer une valeur dans un tableau.

```js
var tableau = [2, 5, 9, 2];
tableau.lastIndexOf(2); // 3
tableau.lastIndexOf(7); // -1
tableau.lastIndexOf(2, 3); // 3
tableau.lastIndexOf(2, 2); // 0
tableau.lastIndexOf(2, -2); // 0
tableau.lastIndexOf(2, -1); // 3
```

### Trouver toutes les occurrences d'un élément

L'exemple suivant utilise `lastIndexOf` pour trouver tous les index (`indices`) d'un élément dans un tableau donné, en utilisant {{jsxref("Array.prototype.push", "push")}} pour les ajouter dans un autre tableau quand ils sont trouvés.

```js
var indices = [];
var tableau = ["a", "b", "a", "c", "a", "d"];
var élément = "a";
var idx = tableau.lastIndexOf(élément);
while (idx !== -1) {
  indices.push(idx);
  idx = idx > 0 ? tableau.lastIndexOf(élément, idx - 1) : -1;
}

console.log(indices);
// [4, 2, 0]
```

Remarquez que nous avons dû traiter le cas de `idx === 0` séparément (`idx > 0`) parce que l'élément sera toujours trouvé, indépendamment du paramètre de `fromIndex`, si c'est le premier élément du tableau. C'est une différence avec la méthode {{jsxref("Array.prototype.indexOf", "indexOf")}}.

## Prothèse d'émulation (_polyfill_)

`lastIndexOf` a été ajouté avec la cinquième édition du standard ECMA-262 ; il peut donc ne pas être présent dans tous les navigateurs web. Vous pouvez contourner ce problème en insérant le code suivant au début de vos scripts. Il vous permettra d'utiliser `lastIndexOf` avec les navigateurs qui ne le supportent pas nativement. L'algorithme qui suit est le même que celui spécifié par ECMAScript 5 si {{jsxref("Object", "Object")}}, {{jsxref("TypeError", "TypeError")}}, {{jsxref("Number", "Number")}}, {{jsxref("Math.floor")}}, {{jsxref("Math.abs")}}, et {{jsxref("Math.min")}} n'ont pas été modifiés et conservent leurs valeurs originales.

```js
// Production steps of ECMA-262, Edition 5, 15.4.4.15
// Reference: http://es5.github.io/#x15.4.4.15
if (!Array.prototype.lastIndexOf) {
  Array.prototype.lastIndexOf = function (searchElement /*, fromIndex*/) {
    "use strict";

    if (this === void 0 || this === null) {
      throw new TypeError();
    }

    var n,
      k,
      t = Object(this),
      len = t.length >>> 0;
    if (len === 0) {
      return -1;
    }

    n = len - 1;
    if (arguments.length > 1) {
      n = Number(arguments[1]);
      if (n != n) {
        n = 0;
      } else if (n != 0 && n != 1 / 0 && n != -(1 / 0)) {
        n = (n > 0 || -1) * Math.floor(Math.abs(n));
      }
    }

    for (k = n >= 0 ? Math.min(n, len - 1) : len - Math.abs(n); k >= 0; k--) {
      if (k in t && t[k] === searchElement) {
        return k;
      }
    }
    return -1;
  };
}
```

On notera que cette implémentation vise une compatibilité absolue de `lastIndexOf` dans Firefox et le moteur JavaScript SpiderMonkey, incluant plusieurs cas très particuliers. Si vous comptez l'utiliser dans une application, vous devriez pouvoir calculer `from` avec un code beaucoup moins compliqué.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("TypedArray.prototype.lastIndexOf()")}}
