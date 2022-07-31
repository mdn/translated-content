---
title: 'SyntaxError: missing } after function body'
slug: Web/JavaScript/Reference/Errors/Missing_curly_after_function_body
tags:
  - Erreurs
  - JavaScript
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Missing_curly_after_function_body
original_slug: Web/JavaScript/Reference/Erreurs/Missing_curly_after_function_body
---
{{jsSidebar("Errors")}}

## Message

```
SyntaxError: Expected '}' (Edge)
SyntaxError: missing } after function body (Firefox)
```

## Type d'erreur

{{jsxref("SyntaxError")}}

## Quel est le problème ?

Il y a une erreur de syntaxe près d'une création de fonction. Dans ce cas, il est préférable de vérifier que les parenthèses et accolades fermantes sont bien présentes et dans le bon ordre. Indenter et formater le code peut vous aider à vous y retrouver parmi les éventuels différents niveaux d'imbrication.

## Exemples

### Oubli d'une accolade fermante

La plupart du temps, il s'agit d'une accolade manquante dans le code de la fonction :

```js example-bad
var charge = function() {
  if (soleil) {
    utiliserPanneauSolaire();
  } else {
    utiliserVelo();
};
```

La forme correcte est :

```js example-good
var charge = function() {
  if (soleil) {
    utiliserPanneauSolaire();
  } else {
    utiliserVelo();
  }
};
```

Une erreur de ce type peut être moins visible lorsqu'on utilise les fonctions qui sont appelées immédiatement, [les fermetures](/fr/docs/Web/JavaScript/Closures) ou d'autres formes qui utilisent de nombreuses parenthèses et/ou accolades comme par exemple :

```js example-bad
(function() { if (true) { return false; } );
```

Généralement, mettre en forme et vérifier l'indentation permet de repérer ces erreurs.

```js example-good
(function() {
  if (true) {
    return false;
  }
});
```

## Voir aussi

- [Les fonctions](/fr/docs/Web/JavaScript/Guide/Fonctions)
