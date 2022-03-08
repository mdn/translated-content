---
title: Array.prototype.some()
slug: Web/JavaScript/Reference/Global_Objects/Array/some
tags:
  - Array
  - ECMAScript 5
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Array/some
original_slug: Web/JavaScript/Reference/Objets_globaux/Array/some
---
{{JSRef}}

La méthode **`some()`** teste si au moins un élément du tableau passe le test implémenté par la fonction fournie. Elle renvoie un booléen indiquant le résultat du test.

> **Note :** Cette méthode renverra `false`, quelle que soit la condition, si elle est utilisée sur un tableau vide.

{{EmbedInteractiveExample("pages/js/array-some.html")}}

## Syntaxe

    arr.some(callback[, objetThis])

### Paramètres

- `callback`

  - : La fonction à tester pour chaque élément du tableau. Cette fonction utilise trois arguments :

    - `valeurCourante`
      - : L'élément du tableau à traiter par la fonction.
    - `index` {{optional_inline}}
      - : L'indice de l'élément qui est traité par la fonction.
    - `array` {{optional_inline}}
      - : Le tableau sur lequel on a appelé la méthode `some`.

- `objetThis` {{optional_inline}}
  - : Paramètre optionnel. Il correspond à la valeur à utiliser pour `this` lors de l'exécution de la fonction `callback`.

### Valeur de retour

`true` si la fonction `callback` renvoie une valeur équivalente à `true` pour au moins un des éléments du tableau, sinon elle renvoie `false`.

## Description

La méthode `some()` exécute la fonction `callback` une seule fois pour chaque élément présent dans le tableau jusqu'à ce qu'elle en trouve un pour lequel `callback` renvoie une valeur équivalente à `true` dans un contexte booléen. Si un tel élément est trouvé, `some()` renvoie immédiatement `true`. Dans le cas contraire, `some` renvoie `false`. `callback` n'est invoquée que pour les indices du tableau auxquels des valeurs sont assignées ; elle n'est pas invoquée pour les indices qui ont été supprimés ou auxquels aucune valeur n'a jamais été assignée.

La fonction `callback` est invoquée avec trois paramètres : la valeur de l'élément, l'indice de l'élément et l'objet `Array` parcouru.

Si un paramètre `objetThis` est fourni à `some()`, il sera utilisé comme valeur de `this` pour chaque invocation du `callback`. Sinon, la valeur  {{jsxref("undefined")}} sera passée pour utilisation comme valeur `this`. La valeur `this` finalement utilisée par `callback` est déterminée en fonction [des règles habituelles pour déterminer `this` pour une fonction](/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/L_op%C3%A9rateur_this).

La méthode `some()` ne modifie pas le tableau sur lequel elle est appelée.

La liste des éléments traités par `some()` est définie avant la première invocation du `callback`. Les éléments qui sont ajoutés au tableau après le début de l'appel à `some` ne seront pas visités par `callback`. Si un élément existant non encore visité est modifié par `callback`, sa valeur passée à `callback` sera sa valeur au moment où `some` visite l'indice de cet élément ; les éléments supprimés ne seront pas visités.

## Exemples

### Tester la valeur des éléments d'un tableau

L'exemple suivant teste si certains éléments d'un tableau sont plus grands que 10.

```js
function estAssezGrand(element, indice, array) {
  return (element >= 10);
}
var resultat = [2, 5, 8, 1, 4].some(estAssezGrand);
// resultat vaut false
passed = [12, 5, 8, 1, 4].some(estAssezGrand);
// passed vaut true
```

### Tester la valeur des éléments avec les fonctions fléchées

[Les fonctions fléchées](/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fl%C3%A9ch%C3%A9es) permettent d'utiliser une syntaxe plus concise pour réaliser la même opération que l'exemple précédent.

```js
[2, 5, 8, 1, 4].some(elem => elem > 10); // false
[12, 5, 8, 1, 4].some(elem => elem > 10); // true
```

> **Note :** Si on veut vérifier qu'un élément est dans un tableau, on pourra utiliser la méthode {{jsxref("Array.prototype.includes()")}}.

## Spécifications

| Spécification                                                                                        | État                         | Commentaires                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.4.4.17', 'Array.prototype.some')}}                 | {{Spec2('ES5.1')}}     | Définition initiale. Implémentée avec JavaScript 1.6. |
| {{SpecName('ES6', '#sec-array.prototype.some', 'Array.prototype.some')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-array.prototype.some', 'Array.prototype.some')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Array.some")}}

## Voir aussi

- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.includes()")}}
- {{jsxref("TypedArray.prototype.some()")}}
