---
title: Math.max()
slug: Web/JavaScript/Reference/Global_Objects/Math/max
tags:
  - JavaScript
  - Math
  - Méthode
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/max
original_slug: Web/JavaScript/Reference/Objets_globaux/Math/max
---
{{JSRef}}

La fonction **`Math.max()`** renvoie le plus grand nombre d'une série de 0 ou plusieurs nombres.

{{EmbedInteractiveExample("pages/js/math-max.html")}}

## Syntaxe

    Math.max([valeur1[,valeur2, ...]])

### Paramètres

- `valeur1, valeur2, ...`
  - : Des nombres.

### Valeur de retour

Le plus grand des nombres passés en arguments. S'il existe un des arguments qui ne peut pas être converti en nombre, c'est {{jsxref("NaN")}} qui sera renvoyé.

## Description

`max()` est une méthode statique de `Math` et doit toujours être utilisée avec la syntaxe `Math.max()`, elle ne doit pas être appelée comme la méthode d'un autre objet qui aurait été créé (`Math` n'est pas un constructeur).

Si aucun argument n'est fourni, le résultat sera -{{jsxref("Infinity")}}.

Si au moins un des arguments ne peut pas être converti en un nombre, le résultat sera {{jsxref("NaN")}}.

## Exemple

### Utiliser `Math.max()`

```js
Math.max(10, 20);   //  20
Math.max(-10, -20); // -10
Math.max(-10, 20);  //  20
```

### Obtenir l'élément maximum d'un tableau

La méthode {{jsxref("Array.prototype.reduce()")}} peut être utilisée pour déterminer la valeur maximale d'un tableau de nombre en comparant les valeurs qui se suivent :

```js
var arr = [1, 2, 3];
var max = arr.reduce(function(a,b) {
  return Math.max(a, b);
});
```

On peut également utiliser {{jsxref("Function.prototype.apply()")}} afin de trouver le maximum parmi un tableau de nombres. `getMaxTableau([1,2,3])` sera équivalent à `Math.max(1, 2, 3)`, mais `getMaxTableau` pourra être utilisé sur des tableaux de n'importe quelle taille.

```js
function getMaxTableau(tableauNumérique) {
    return Math.max.apply(null, tableauNumérique);
}
```

Avec le nouvel {{jsxref("Opérateurs/Affecter_par_décomposition","opérateur de décomposition","","1")}}, on pourra également utiliser cette syntaxe, plus concise et plus simple :

```js
var arr = [1, 2, 3];
var max = Math.max(...arr);
```

Attention avec la décomposition et `apply()` qui pourront échouer s'il y a trop d'éléments dans le tableau (car ceux-ci seront passés en arguments). Pour plus d'informations, consulter [Utiliser apply() et les fonctions natives](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function/apply#Utiliser_apply_et_des_fonctions_natives). La méthode proposée avec `reduce()` n'a pas cette contrainte.

## Spécifications

| Spécification                                                        | État                         | Commentaires                                          |
| -------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                             | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.8.2.11', 'Math.max')}} | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-math.max', 'Math.max')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-math.max', 'Math.max')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Math.max")}}

## Voir aussi

- {{jsxref("Math.min()")}}
