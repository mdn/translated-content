---
title: Array.prototype.includes()
slug: Web/JavaScript/Reference/Global_Objects/Array/includes
tags:
  - Array
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Array/includes
original_slug: Web/JavaScript/Reference/Objets_globaux/Array/includes
---
{{JSRef}}

La méthode **`includes()`** permet de déterminer si un tableau contient une valeur et renvoie `true` si c'est le cas, `false` sinon.

{{EmbedInteractiveExample("pages/js/array-includes.html")}}

> **Note :** Cette méthode utilise l'algorithme de comparaison _[SameValueZero](/fr/docs/Web/JavaScript/Les_différents_tests_d_égalité#Un_modèle_pour_mieux_comprendre)_ qui fonctionne comme l'égalité stricte, à la différence que `NaN` est ici égal à lui même.

## Syntaxe

    array.includes(élémentRecherché)
    array.includes(élémentRecherché, indiceDépart)

### Paramètres

- `élémentRecherché`
  - : La valeur qu'on souhaite trouver dans le tableau (lorsqu'on manipule des caractères et des chaînes, la comparaison est sensible à la casse).
- `indiceDépart` {{optional_inline}}
  - : La position du tableau à partir de laquelle commencer à chercher `élémentRecherché`. Si on utilise une valeur négative, la recherche commencera à partir de la fin du tableau (autrement dit à l'indice `array.length - indiceDépart`). La valeur par défaut est 0.

### Valeur de retour

Un {{jsxref("Boolean","booléen","",1)}} qui vaut `true` si `élémentRecherché` est trouvé dans le tableau (à partir de l'`indiceDépart` si celui-ci est indiqué). Les valeurs -0, +0 et 0 sont considérées comme équivalentes mais `false` n'est pas considéré comme équivalent à 0.

> **Note :** Pour être tout à fait précis, `includes()` utilise l'algorithme _[SameValueZero](/fr/docs/Web/JavaScript/Les_différents_tests_d_égalité#Un_modèle_pour_mieux_comprendre)_ afin de déterminer si un élément donné est trouvé.

## Exemples

```js
[1, 2, 3].includes(2);     // true
[1, 2, 3].includes(4);     // false
[1, 2, 3].includes(3, 3);  // false
[1, 2, 3].includes(3, -1); // true
[1, 2, NaN].includes(NaN); // true

['a', 'b', 'c'].includes('c', 5);    // false
['a', 'b', 'c'].includes('c', -100); // true
```

### `indiceDépart` supérieur ou égal à la longueur du tableau

SI `indiceDépart` est supérieur ou égal à la longueur du tableau, la méthode retourne `false`. Le tableau n'est pas parcouru.

```js
var arr = ['a', 'b', 'c'];

arr.includes('c', 3);   // false
arr.includes('c', 100); // false
```

### `indiceDépart` strictement négatif

Si `indiceDépart` est strictement négatif, l'indice de départ effectif est la somme entre la taille du tableau et `indiceDépart`. Si cette somme est toujours négative, le tableau est intégralement parcouru.

```js
// Le tableau a une taille de 3
// indiceDépart vaut -2
// L'indice de départ effectif vaut is 3 + (-2) = 1

var arr = ['a', 'b', 'c'];

arr.includes('a', -2); // false
arr.includes('b', -2); // true
arr.includes('c', -100); // true
```

### Utilisation d'`includes()` comme méthode générique

`includes()` est une méhtode générique : l'objet sur lequel elle est appelée ne doit pas nécessairement être un tableau. On peut l'utiliser sur des objets semblables à des tableaux (ex. [`arguments`](/fr/docs/Web/JavaScript/Reference/Fonctions/arguments) ou des chaînes de caractères) :

```js
function argumentsContientA(){
  return [].includes.call(arguments, 'a');
}

console.log(argumentsContientA('a','b','c')); // true
console.log(argumentsContientA('d','e','f')); // false
```

## Spécifications

| Spécification                                                                                                    | État                         | Commentaires         |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES7', '#sec-array.prototype.includes', 'Array.prototype.includes')}}     | {{Spec2('ES7')}}         | Définition initiale. |
| {{SpecName('ESDraft', '#sec-array.prototype.includes', 'Array.prototype.includes')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Array.includes")}}

## Voir aussi

- {{jsxref("TypedArray.prototype.includes()")}}
- {{jsxref("String.prototype.includes()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.findIndex()")}}
