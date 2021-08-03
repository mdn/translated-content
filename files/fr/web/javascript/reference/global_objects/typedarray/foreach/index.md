---
title: TypedArray.prototype.forEach()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/forEach
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Reference
  - TypedArray
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/TypedArray/forEach
original_slug: Web/JavaScript/Reference/Objets_globaux/TypedArray/forEach
---
{{JSRef}}

La méthode **`forEach()`** permet d'exécuter une fonction donnée sur chaque élément du tableau. Cette méthode implémente le même algorithme que {{jsxref("Array.prototype.forEach()")}}.

## Syntaxe

    tableauTypé.forEach(callback[, thisArg])

### Paramètres

- `callback`

  - : La fonction à utiliser pour chaque élément du tableau typé. Elle prend trois arguments :

    - `valeurÉlément`
      - : La valeur de l'élément traité actuellement.
    - `indiceÉlément`
      - : L'indice de l'élément traité actuellement.
    - `tableau`
      - : Le tableau parcouru par `forEach()`.

- `thisArg`
  - : Optionnel. La valeur utilisée pour `this` lors de l'appel à `callback()`.

### Valeur de retour

{{jsxref("undefined")}}.

## Description

La méthode `forEach()` exécute la fonction `callback()` une fois pour chaque élément présent dans le tableau typé, par ordre d'indice croissant. Cette fonction n'est pas appelée pour les indices sur lesquels les éléments ont été supprimés ou n'ont pas été définis. `callback()` est cependant appelée pour les éléments qui portent la valeur {{jsxref("undefined")}}.

`callback()` accepte **trois arguments** :

- la **valeur de l'élément**
- l'**indice de l'élément**
- le **le tableau typé traversé**

Si le paramètre `thisArg` est fourni à `forEach()`, il sera la valeur du `this` utilisé par chaque exécution de `callback()`. Dans le cas contraire, la valeur {{jsxref("undefined")}} sera utilisée par défaut. Pour déterminer la valeur de `this` véritablement visible par `callback()` durant son exécution, les règles habituelles pour {{jsxref("Operators/this", "déterminer la valeur de this du point de vue d'une fonction")}} sont appliquées.

L'ensemble des éléments visités par `forEach()` est fixé avant le premier appel à `callback`. Ainsi, les éléments qui sont ajoutés au tableau typé après que l'exécution de `forEach()` soit lancée ne seront pas traités. Cependant, si la valeur d'un élément à traiter est modifiée pendant l'exécution de `forEach()`, la valeur passée à `callback()` sera celle de l'élément au moment où il est traité. Si un élément est supprimé avant d'être visité, il ne sera pas traité.

`forEach()` lance un appel à la fonction `callback()` pour chaque élément du tableau typé ; à la différence de {{jsxref("TypedArray.prototype.every()", "every()")}} et {{jsxref("TypedArray.prototype.some()", "some()")}} cette méthode renvoie toujours {{jsxref("undefined")}}.

## Exemples

### Exemple: Affichage du contenu d'un tableau typé

Le code ci-dessous affiche une ligne pour chaque élément du tableau typé :

```js
function affichageContenuTableau(élément, index, tableau) {
  console.log('a[' + index + '] = ' + élément);
}

new Uint8Array([0, 1, 2, 3]).forEach(affichageContenuTableau);
// log :
// a[0] = 0
// a[1] = 1
// a[2] = 2
// a[3] = 3
```

## Spécifications

| Spécification                                                                                                                    | État                         | Commentaires         |
| -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-%typedarray%.prototype.foreach', '%TypedArray%.prototype.forEach')}} | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-%typedarray%.prototype.foreach', '%TypedArray%.prototype.forEach')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.TypedArray.forEach")}}

## Voir aussi

- {{jsxref("TypedArray.prototype.map()")}}
- {{jsxref("TypedArray.prototype.every()")}}
- {{jsxref("TypedArray.prototype.some()")}}
- {{jsxref("Array.prototype.forEach()")}}
