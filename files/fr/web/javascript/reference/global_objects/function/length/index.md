---
title: Function.length
slug: Web/JavaScript/Reference/Global_Objects/Function/length
tags:
  - Function
  - JavaScript
  - Propriété
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Function/length
original_slug: Web/JavaScript/Reference/Objets_globaux/Function/length
---
{{JSRef}}

La propriété **`length`** définit le nombre de paramètres attendus par la fonction.

{{EmbedInteractiveExample("pages/js/function-length.html")}}{{js_property_attributes(0,0,1)}}

## Description

`length` est une propriété des fonctions qui indique le nombre d'arguments attendus par la fonction (ce qui correspond au nombre d'arguments formellement déclarés). Cette quantité n'inclue pas les {{jsxref("Fonctions/paramètres_du_reste", "paramètres du reste", "", 1)}} et ne compte que les paramètres situés avant le premier paramètre avec une valeur par défaut. Cette propriété est différente de {{jsxref("Fonctions/arguments/length", "arguments.length")}} qui est locale à la fonction et qui décrit le nombre d'arguments réellement passés à la fonction.

### Propriété du constructeur `Function`

Le constructeur {{jsxref("Function")}} est lui-même un objet {{jsxref("Function")}}. Sa propriété `length` vaut 1. Les attributs de cette propriété sont : Écrivable : `false`, Énumérable : `false`, Configurable : `true`.

### Propriété du prototype de `Function`

La propriété `length` du prototype de {{jsxref("Function")}} vaut 0.

## Exemples

```js
console.log(Function.length); /* 1 */

console.log((function()        {}).length); /* 0 */
console.log((function(a)       {}).length); /* 1 */
console.log((function(a, b)    {}).length); /* 2 etc. */
console.log((function(...args) {}).length);
// 0, le paramètre du reste n'est pas compté
console.log((function(a, b = 1, c) {}).length);
// 1, seuls les paramètres avant les valeurs par
// défaut sont comptés
```

## Spécifications

| Spécification                                                                                        | État                         | Commentaires                                                        |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------------------------------------------------------- |
| {{SpecName('ES1')}}                                                                             | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.1.               |
| {{SpecName('ES5.1', '#sec-15.3.5.1', 'Function.length')}}                         | {{Spec2('ES5.1')}}     |                                                                     |
| {{SpecName('ES6', '#sec-function-instances-length', 'Function.length')}}     | {{Spec2('ES6')}}         | L'attribut `configurable` de cette propriété vaut `true` désormais. |
| {{SpecName('ESDraft', '#sec-function-instances-length', 'Function.length')}} | {{Spec2('ESDraft')}} |                                                                     |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Function.length")}}

## Voir aussi

- {{jsxref("Function", "Function")}}
