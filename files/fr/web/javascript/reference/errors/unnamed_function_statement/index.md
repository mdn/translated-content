---
title: 'SyntaxError: function statement requires a name'
slug: Web/JavaScript/Reference/Errors/Unnamed_function_statement
tags:
  - Erreurs
  - JavaScript
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Unnamed_function_statement
original_slug: Web/JavaScript/Reference/Erreurs/Unnamed_function_statement
---
{{jsSidebar("Errors")}}

## Message

```
Syntax Error: Expected identifier (Edge)
SyntaxError: function statement requires a name [Firefox]
SyntaxError: Unexpected token ( [Chrome]
```

## Type d'erreur

{{jsxref("SyntaxError")}}

## Quel est le problème ?

[Une déclaration de fonction](/fr/docs/Web/JavaScript/Reference/Instructions/function) présente dans le code requiert un nom. Il faut alors vérifier la façon dont la fonction est définie et s'il est nécessaire de lui fournir un nom ou si la fonction en question est une expression de fonction, une fonction immédiatement invoquée ou si le code de la fonction est simplement bien placé dans son contexte.

## Exemples

### Déclaration / Expression

Une déclaration de fonction requiert un nom. Le fragment de code suivant ne fonctionnera pas :

```js example-bad
function () {
  return 'Coucou monde :)';
}
// SyntaxError: function statement requires a name
```

On peut utiliser [une expression de fonction](/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_function) à la place :

```js example-good
var salutations = function() {
  return 'Coucou monde :)';
};
```

Si la fonction devait être appelé immédiatement, il suffit d'ajouter des parenthèses autour :

```js example-good
(function () {

})();
```

### Fonctions étiquetées

Si vous utilisez des [fonctions étiquetées](/fr/docs/Web/JavaScript/Reference/Instructions/label), il faut toujours fournir un nom après le mot-clé `function`. Le code suivant ne fonctionnera pas :

```js example-bad
function Greeter() {
  german: function () {
    return "Moin";
  }
}
// SyntaxError: function statement requires a name
```

En revanche, ceci fonctionnera :

```js example-good
function Greeter() {
  german: function g() {
    return "Moin";
  }
}
```

### Méthodes d'un objet

Si vous souhaitez construire une méthode d'un objet, il faudra d'abord créer l'objet. Dans ce cas, la syntaxe sans le nom après le mot-clé `function` sera valide :

```js example-good
var greeter = {
  german: function () {
    return "Moin";
  }
};
```

### Syntaxe et fonctions de rappel (_callbacks_)

Lorsqu'on utilise les _callbacks_, il est facile de s'emmêler les pinceaux entre les parenthèses et les virgules :

```js example-bad
promise.then(
  function() {
    console.log("success");
  });
  function() {
    console.log("error");
}
// SyntaxError: function statement requires a name
```

La forme correcte serait :

```json example-good
promise.then(
  function() {
    console.log("success");
  },
  function() {
    console.log("error");
  }
);
```

## Voir aussi

- [Les fonctions dans le guide JavaScript](/fr/docs/Web/JavaScript/Guide/Fonctions)
- [Les déclarations de fonction](/fr/docs/Web/JavaScript/Reference/Instructions/function)
- [Les expressions de fonction](/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_function)
- [Les fonctions immédiatement invoquées (ou _IIFE_ en anglais)](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression)
- [`label`](/fr/docs/Web/JavaScript/Reference/Instructions/label)
