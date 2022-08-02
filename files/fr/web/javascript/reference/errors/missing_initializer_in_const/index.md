---
title: 'SyntaxError: missing = in const declaration'
slug: Web/JavaScript/Reference/Errors/Missing_initializer_in_const
tags:
  - Erreurs
  - JavaScript
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Missing_initializer_in_const
original_slug: Web/JavaScript/Reference/Erreurs/Missing_initializer_in_const
---
{{jsSidebar("Errors")}}

## Message

```
SyntaxError: Const must be initalized (Edge)
SyntaxError: missing = in const declaration (Firefox)
SyntaxError: Missing initializer in const declaration (Chrome)
```

## Type d'erreur

{{jsxref("SyntaxError")}}

## Quel est le problème ?

Une constante est une valeur qui ne peut pas être modifiée par le programme pendant l'exécution. Elle ne peut pas être changée avec une réaffectation ou une redéclaration. En JavaScript, les constantes sont déclarées grâce au mot-clé [`const`](/fr/docs/Web/JavaScript/Reference/Instructions/const). Il est également nécessaire de fournir une valeur d'initialisation dans l'instruction où on déclare la constante (ce qui est logique vu qu'on ne peut pas la modifier ensuite).

## Exemples

### Valeur d'initialisation manquante

À la différence de `var` ou de `let`, il est nécessaire d'indiquer une valeur lors de la déclaration. Si aucune valeur n'est indiquée, une exception sera levée :

```js example-bad
const COLUMNS;
// SyntaxError: missing = in const declaration
```

### Résoudre le problème

On a le choix entre plusieurs options pour résoudre ce problème. Il faut comprendre le rôle de la constante en question.

#### Ajouter une valeur constante

On peut indiquer la valeur de la constante dans la même instruction :

```js example-good
const COLONNES = 80;
```

#### `const`, `let` ou `var` ?

`const` ne doit pas être utilisé si on ne souhaite pas déclarer de constante. Peut-être qu'on souhaite simplement déclarer une variable avec une portée de bloc grâce à [`let`](/fr/docs/Web/JavaScript/Reference/Instructions/let) ou une variable globale avec [`var`](/fr/docs/Web/JavaScript/Reference/Instructions/var). Ces deux instructions ne nécessitent pas de valeur initiale.

```js example-good
let colonnes;
```

## Voir aussi

- [`const`](/fr/docs/Web/JavaScript/Reference/Instructions/const)
- [`let`](/fr/docs/Web/JavaScript/Reference/Instructions/let)
- [`var`](/fr/docs/Web/JavaScript/Reference/Instructions/var)
