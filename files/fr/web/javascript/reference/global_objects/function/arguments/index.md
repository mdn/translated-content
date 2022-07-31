---
title: Function.arguments
slug: Web/JavaScript/Reference/Global_Objects/Function/arguments
tags:
  - Déprécié
  - Function
  - JavaScript
  - Propriété
  - Reference
  - arguments
translation_of: Web/JavaScript/Reference/Global_Objects/Function/arguments
original_slug: Web/JavaScript/Reference/Objets_globaux/Function/arguments
---
{{JSRef}} {{Deprecated_header}}

La propriété **`function.arguments`** fait référence à un objet dont la structure est semblable à celle d'un tableau dont les éléments correspondent aux arguments passés à une fonction. En lieu et place, il faut désormais utiliser {{jsxref("Fonctions/arguments", "arguments")}}. Cette propriété est interdite en mode stricte à cause de [l'optimisation de la queue des appels (_tail call optimization_)](https://www.ecma-international.org/ecma-262/6.0/#sec-addrestrictedfunctionproperties).

## Description

La syntaxe `function.arguments` est obsolète.  La méthode recommandée pour accéder à l'objet {{jsxref("Fonctions/arguments", "arguments")}} disponible au sein des fonctions est simplement de faire référence à la variable {{jsxref("Fonctions/arguments", "arguments")}}.

Si on utilise la récursivité (autrement dit si une fonction `f` apparaît plusieurs fois dans la pile d'appels ou encore qu'une fonction `f` s'appelle elle-même), la valeur de `f.arguments` représentera les arguments correspondant à l'appel le plus « récent » de la fonction.

La valeur de la propriété `arguments` est normalement `null` si la fonction n'est pas « en cours » (au sens où elle aurait été appelée et qu'elle n'ait pas fini son exécution).

## Exemples

```js
function f(n) { g(n-1); }

function g(n) {
  console.log("avant : " + g.arguments[0]);
  if(n>0) f(n);
  console.log("après : " + g.arguments[0]);
}

f(2);

console.log("fonction terminée : " + g.arguments);

// On aura l'affichage de :

// avant : 1
// avant : 0
// après : 0
// après : 1
// fonction terminée : null
```

## Spécifications

| Spécification                                                                                | Statut                       | Commentaires                                                                                                                                                         |
| -------------------------------------------------------------------------------------------- | ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ES1')}}                                                                     | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.0. Dépréciée pour être remplacée par {{jsxref("Fonctions/arguments", "arguments")}} décrit par ES3. |
| {{SpecName('ES5.1', '#sec-10.6', 'arguments object')}}                     | {{Spec2('ES5.1')}}     | Objet {{jsxref("Fonctions/arguments", "arguments")}}                                                                                                   |
| {{SpecName('ES6', '#sec-arguments-object', 'arguments object')}}         | {{Spec2('ES6')}}         | Objet {{jsxref("Fonctions/arguments", "arguments")}}                                                                                                   |
| {{SpecName('ESDraft', '#sec-arguments-object', 'arguments object')}} | {{Spec2('ESDraft')}} | Objet {{jsxref("Fonctions/arguments", "arguments")}}                                                                                                   |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Function.arguments")}}

## Voir aussi

- L'objet {{jsxref("Fonctions/arguments", "arguments")}}
- {{jsxref("Fonctions", "Les fonctions et les portées de fonctions", "", 1)}}
