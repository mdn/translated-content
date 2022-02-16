---
title: 'SyntaxError: return not in function'
slug: Web/JavaScript/Reference/Errors/Bad_return_or_yield
tags:
  - Erreurs
  - JavaScript
  - Reference
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Bad_return_or_yield
original_slug: Web/JavaScript/Reference/Erreurs/Bad_return_or_yield
---
{{jsSidebar("Errors")}}

## Message

    SyntaxError: 'return' statement outside of function (Edge)
    SyntaxError: return not in function (Firefox)
    SyntaxError: yield not in function (Firefox)

## Type d'erreur

{{jsxref("SyntaxError")}}.

## Quel est le problème ?

Une instruction [`return`](/fr/docs/Web/JavaScript/Reference/Instructions/return) ou [`yield`](/fr/docs/Web/JavaScript/Reference/Opérateurs/yield) est utilisée en dehors d'une [fonction](/fr/docs/Web/JavaScript/Guide/Fonctions). Il est possible que des accolades soient manquantes. Les mots-clés `return` et `yield` doivent être utilisés dans une fonction car ils permettent de terminer ou d'arrêter/reprendre l'exécution d'une fonction et de définir une valeur qui doit être renvoyée à l'appelant de la fonction.

## Exemples

```js example-bad
var encouragement = function(score) {
  if (score === 147)
    return "Super !";
  };
  if (score > 100) {
    return "Un record!";
  }
}

// SyntaxError: return not in function
```

À première vue, les accolades semblent correctes mais en regardant de plus près, on voit qu'il manque une accolade ouvrante ("{") après la première instruction `if`. La version correcte serait :

```js example-good
var encouragement = function(score) {
  if (score === 147) {
    return "Maximum!";
  }
  if (score > 100) {
    return "Century!";
  }
};
```

## Voir aussi

- [`return`](/fr/docs/Web/JavaScript/Reference/Instructions/return)
- [`yield`](/fr/docs/Web/JavaScript/Reference/Opérateurs/yield)
