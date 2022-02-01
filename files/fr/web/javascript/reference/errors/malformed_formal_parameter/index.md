---
title: 'SyntaxError: Malformed formal parameter'
slug: Web/JavaScript/Reference/Errors/Malformed_formal_parameter
tags:
  - Erreurs
  - JavaScript
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Malformed_formal_parameter
original_slug: Web/JavaScript/Reference/Erreurs/Malformed_formal_parameter
---
{{jsSidebar("Errors")}}

## Message

    SyntaxError: Expected {x} (Edge)
    SyntaxError: malformed formal parameter (Firefox)

## Type d'erreur

{{jsxref("SyntaxError")}}

## Quel est le problème ?

La méthode {{jsxref("Function()")}} a été utilisée avec au moins deux arguments. Le dernier argument correspond au code source de la nouvelle fonction qui est créée. Les autres arguments sont la liste des arguments passés à la fonction.

C'est cette liste d'arguments qui est, pour une certaine raison, invalide. Il s'agit peut-être d'un mot-clé (`if` ou `var` par exemple) utilisé comme un nom d'argument, ou d'un signe de ponctuation mal placé. Il peut également s'agir d'une valeur invalide comme un nombre ou un objet.

## OK mais pourquoi cette formulation étrange ?

En effet, "Formal parameter" est une manière étrange de dire  « argument de fonction ». Le mot "malformed" (malformé) est utilisé car les ingénieurs travaillant sur Firefox engineers apprécient énormément les romans gothiques du XIXe.

## Examples

### Exemples invalides

```js example-bad
var f = Function("x y", "return x + y;");
// SyntaxError (virgule manquante)

var f = Function("x,", "return x;");
// SyntaxError (virgule mal placée)

var f = Function(37, "console.log('OK')");
// SyntaxError (des nombres ne peuvent être des noms)
```

### Exemples valides

```js example-good
 // Ponctuation correcte
var f = Function("x, y", "return x + y;");

var f = Function("x", "return x;");

// Voici une alternative plus rapide
// si vous pouvez éviter Function
var f = function (x) { return x; };
```

## Voir aussi

- {{jsxref("Function()")}}
- [Le chapitre du Guide JavaScript sur les fonctions](/fr/docs/Web/JavaScript/Guide/Fonctions)
- [_Frankenstein_ par Mary Wollstonecraft Shelley](https://www.gutenberg.org/ebooks/84) ("_Cursed (although I curse myself) be the hands that formed you! You have made me wretched beyond expression. You have left me no power to consider whether I am just to you or not. Begone! Relieve me from the sight of your detested form._")
