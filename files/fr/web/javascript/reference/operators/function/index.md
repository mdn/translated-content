---
title: L'opérateur function
slug: Web/JavaScript/Reference/Operators/function
---

{{jsSidebar("Operators")}}

Le mot-clé **`function`** permet de définir une fonction à l'intérieur d'une expression.

> **Note :** Il est également possible de définir des fonctions grâce au constructeur [`Function`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function) et aux [déclarations de fonction](/fr/docs/Web/JavaScript/Reference/Instructions/function).

{{EmbedInteractiveExample("pages/js/expressions-functionexpression.html")}}

## Syntaxe

```js
function [nom]([param1[, param2[, …, paramN]]]) {
  instructions
}
```

### Paramètres

- `nom`
  - : Le nom de la fonction. Peut être omis, auquel cas on parlera d'une fonction _anonyme_.
- `paramN`
  - : Le nom d'un paramètre à passer à la fonction.
- `instructions`
  - : Les instructions constituant le corps de la fonction.

> **Note :** À partir d'ES2015/ES6, on peut également former des expressions de fonction avec [des fonctions fléchées](/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fléchées).

## Description

Une expression de fonction est très similaire et a presque la même syntaxe qu'une déclaration de fonction (consultez la page sur l'instruction [`function`](/fr/docs/Web/JavaScript/Reference/Instructions/function) pour plus de détails). La différence principale entre une expression de fonction et une instruction est le nom de la fonction. En effet, pour les expressions, celui peut être omis (on parle alors d'une fonction _anonyme_). Consultez l'article [Fonctions](/fr/docs/Web/JavaScript/Guide/Fonctions) pour des informations concernant les différences entre les instructions de fonctions et les expressions de fonctions. Une fonction peut être appelée [immédiatement après sa définition (on parle alors de fonction invoquée immédiatement ou _IIFE_ pour _Immediately Invoked Function Expression_ en anglais)](/fr/docs/Glossaire/IIFE).

### Remontée (_hoisting_) des expressions de fonction

En JavaScript, les expressions de fonction ne sont pas remontées (à la différence des déclarations de fonction). Il est donc impossible d'utiliser les expressions de fonction avant leur définition :

```js
nonRemontée(); // TypeError: nonRemontée is not a function

var nonRemontée = function () {
  console.log("truc");
};
```

## Exemples

L'exemple qui suit définit une fonction anonyme et l'assigne à une variable `x`. La fonction renvoie le carré de son paramètre :

```js
var x = function (y) {
  return y * y;
};
```

### Expression nommée

Si on souhaite faire référence à une fonction au sein du corps de la fonction, il faudra créer une expression de fonction nommée. Le nom sera alors local au corps de la fonction (portée). Cela permet entre autres d'éviter d'utiliser la propriété non-standard [`arguments.callee`](/fr/docs/Web/JavaScript/Reference/Fonctions/arguments/callee).

```js
var math = {
  factorielle: function factorielle(n) {
    if (n <= 1) {
      return 1;
    }
    return n * factorielle(n - 1);
  },
};
```

La variable affectée à l'expression de fonction aura une propriété `name`. Ce nom n'est pas modifié si la variable est réaffectée. Si le nom de la fonction est absent, ce sera celui de la variable (nom « implicite »). Cela vaut également pour [les fonctions fléchées](/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fléchées) :

```js
var toto = function () {};
console.log(toto.name); // "toto"

var toto2 = toto;
console.log(toto2.name); // "toto"

var truc = function machin() {};
console.log(truc.name); // "machin"
```

### IIFE pour _Immediately Invoked Function Expression_ ou expression de fonction immédiatement appelée

On peut utiliser une expression de fonction pour créer une « IIFE », c'est-à-dire une expression de fonction qu'on appelle dès sa définition :

```js
var a = "coucou";
var b = "monde";

// IIFE
(function (x, y) {
  console.log(x + " " + y);
})(a, b);
// coucou monde
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Fonctions", "Fonctions et portée des fonctions")}}
- {{jsxref("Objets_globaux/Function","L'objet Function")}}
- {{jsxref("Instructions/function", "Instruction function")}}
- {{jsxref("Instructions/function*", "Instruction function*")}}
- {{jsxref("Opérateurs/function*", "Expression function*")}}
- {{jsxref("GeneratorFunction")}}
- [Les fonctions fléchées](/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fléchées)
- [Les expressions de fonctions asynchrones (l'opérateur `async function`)](/fr/docs/Web/JavaScript/Reference/Opérateurs/async_function)
- [Les déclarations de fonctions asynchrones (l'instruction `async function`)](/fr/docs/Web/JavaScript/Reference/Instructions/async_function)
