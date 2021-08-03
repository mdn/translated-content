---
title: >-
  SyntaxError: a declaration in the head of a for-of loop can't have an
  initializer
slug: Web/JavaScript/Reference/Errors/Invalid_for-of_initializer
tags:
  - Erreurs
  - JavaScript
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Invalid_for-of_initializer
original_slug: Web/JavaScript/Reference/Erreurs/Invalid_for-of_initializer
---
{{jsSidebar("Errors")}}

## Message

    SyntaxError: for-of loop head declarations cannot have an initializer (Edge)
    SyntaxError: a declaration in the head of a for-of loop can't have an initializer (Firefox)
    SyntaxError: for-of loop variable declaration may not have an initializer. (Chrome)

## Type d'erreur

{{jsxref("SyntaxError")}}

## Quel est le problème ?

L'en-tête d'une boucle [`for...of`](/fr/docs/Web/JavaScript/Reference/Instructions/for...of) contient une expression d'initialisation, c'est-à-dire qu'une variable est déclarée et qu'on lui affecte une valeur. Ceci n'est pas autorisé pour les boucles `for-of`. En revanche, les boucles [`for`](/fr/docs/Web/JavaScript/Reference/Instructions/for) permettent d'avoir un initialisateur.

## Exemples

### Boucles `for-of` invalides

```js example-bad
let iterable = [10, 20, 30];

for (let value = 50 of iterable) {
  console.log(value);
}

// SyntaxError: a declaration in the head of a for-of loop can't
// have an initializer
```

### Boucles `for-of` valides

Il faut retirer l'initialisateur de l'en-tête de la boucle pour ne plus avoir l'erreur. Si cette valeur devait servir d'incrément, on peut ajouter l'addition dans le corps de la boucle.

```js example-good
let iterable = [10, 20, 30];

for (let value of iterable) {
  value += 50;
  console.log(value);
}
// 60
// 70
// 80
```

## Voir aussi

- [`for...of`](/fr/docs/Web/JavaScript/Reference/Instructions/for...of)
- [`for...in`](/fr/docs/Web/JavaScript/Reference/Instructions/for...in) interdit également d'utiliser un initialisateur en mode strict ([SyntaxError: for-in loop head declarations may not have initializers](/fr/docs/Web/JavaScript/Reference/Errors/Invalid_for-in_initializer))
- [`for`](/fr/docs/Web/JavaScript/Reference/Instructions/for) permet de définir un initialisateur lors de l'itération
