---
title: 'SyntaxError: for-in loop head declarations may not have initializers'
slug: Web/JavaScript/Reference/Errors/Invalid_for-in_initializer
tags:
  - Erreurs
  - JavaScript
  - Mode strict
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Invalid_for-in_initializer
original_slug: Web/JavaScript/Reference/Erreurs/Invalid_for-in_initializer
---
{{jsSidebar("Errors")}}

## Message

    SyntaxError: for-in loop head declarations cannot have an initializer (Edge)
    SyntaxError: for-in loop head declarations may not have initializers (Firefox)
    SyntaxError: for-in loop variable declaration may not have an initializer. (Chrome)

## Type d'erreur

{{jsxref("SyntaxError")}}, uniquement en [mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode).

## Quel est le problème ?

L'en-tête d'une boucle [`for...in`](/fr/docs/Web/JavaScript/Reference/Instructions/for...in) contient une expression d'initialisation, c'est-à-dire qu'une variable est déclarée et qu'on lui affecte une valeur. Ceci n'est pas autorisé en mode strict (et ignoré en mode non-strict).

## Exemples

Cet exemple déclenchera une exception `SyntaxError` :

```js example-bad
"use strict";

var obj = {a: 1, b: 2, c: 3 };

for (var i = 0 in obj) {
  console.log(obj[i]);
}

// SyntaxError: for-in loop head declarations may not have initializers
```

### Boucle for-in valide

On peut retirer l'initialisateur de l'en-tête de la boucle :

```js example-good
"use strict";

var obj = {a: 1, b: 2, c: 3 };

for (var i in obj) {
  console.log(obj[i]);
}
```

### Parcours d'un tableau

[Il ne faut pas utiliser de boucle `for...in` pour parcourir un tableau (`Array`)](/fr/docs/Web/JavaScript/Reference/Instructions/for...in#Utiliser_for...in_et_parcourir_un_tableau). Peut-être souhaitiez-vous utiliser une boucle `for` pour parcourir le tableau ? Cette boucle `for` permet également d'utiliser un initialisateur :

```js example-good
var arr = [ "a", "b", "c" ]

for (var i = 2; i < arr.length; i++) {
  console.log(arr[i]);
}

// "c"
```

## Voir aussi

- [`for...in`](/fr/docs/Web/JavaScript/Reference/Instructions/for...in)
- [`for...of`](/fr/docs/Web/JavaScript/Reference/Instructions/for...of) interdit également d'utiliser un initialisateur en mode strict et non-strict
- [`for`](/fr/docs/Web/JavaScript/Reference/Instructions/for) permet de définir un initialisateur lors de l'itération et doit être privilégié pour parcourir un tableau
