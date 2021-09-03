---
title: 'SyntaxError: test for equality (==) mistyped as assignment (=)?'
slug: Web/JavaScript/Reference/Errors/Equal_as_assign
tags:
  - Erreurs
  - JavaScript
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Equal_as_assign
original_slug: Web/JavaScript/Reference/Erreurs/Equal_as_assign
---
{{jsSidebar("Errors")}}

## Message

    Warning: SyntaxError: test for equality (==) mistyped as assignment (=)?

## Type d'erreur

Uniquement pour Firefox. Un avertissement sous la forme d'une exception {{jsxref("SyntaxError")}}, généré uniquement si la préférence `javascript.options.strict` vaut `true`.

## Quel est le problème ?

Le code utilise une affectation (`=`) là où on attendrait un test d'égalité (`==`). Afin d'aider au débogage, le moteur JavaScript déclenche des avertissements lorsqu'il détecte ce motif.

## Exemples

### Des affectations utilisées au sein d'expressions conditionnelles

Il est conseillé de ne pas utiliser d'affectations simples dans des expressions conditionnelles (comme le test effectué avec [`if...else`](/fr/docs/Web/JavaScript/Reference/Instructions/if...else)) car on peut confondre les deux à la lecture du code. Ainsi, on n'utilisera pas la forme suivante :

```js example-bad
if (x = y) {
  // do the right thing
}
```

Si on doit effectivement affecter une variable dans une expression conditionnelle, on entourera l'affectation d'une paire de parenthèses supplémentaires afin de montrer qu'on veut bien effectuer une affectation, comme ceci :

```js
if ((x = y)) {
  // exécuter le code
}
```

Autrement (généralement), on veut plutôt utiliser un opérateur de comparaison (`==` ou `===` par exemple) :

```js
if (x == y) {
  // exécuter le code
}
```

## Voir aussi

- [`if...else`](/fr/docs/Web/JavaScript/Reference/Instructions/if...else)
- [Les opérateurs de comparaison](/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_de_comparaison)
