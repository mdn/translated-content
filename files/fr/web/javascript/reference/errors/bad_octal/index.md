---
title: 'SyntaxError: "x" is not a legal ECMA-262 octal constant'
slug: Web/JavaScript/Reference/Errors/Bad_octal
tags:
  - Erreurs
  - JavaScript
  - Mode strict
  - Reference
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Bad_octal
original_slug: Web/JavaScript/Reference/Erreurs/Bad_octal
---
{{jsSidebar("Errors")}}

## Message

    Warning: SyntaxError: 08 is not a legal ECMA-262 octal constant.
    Warning: SyntaxError: 09 is not a legal ECMA-262 octal constant.

## Type d'erreur

Un avertissement, l'exécution du script JavaScript ne sera pas interrompue.

## Quel est le problème ?

Les littéraux de nombres décimaux peuvent démarrer par un zéro suivi d'un autre chiffre. Si tous les chiffres après le 0 de tête sont inférieurs à 8, le nombre est interprété comme un nombre en notation octale. Or, cela ne peut pas être le cas avec `08` et `09` et JavaScript produit un avertissement.

Les littéraux en notation octale et les séquences d'échappement octales sont désormais dépréciées (il y a aura donc un avertissement complémentaire sur la dépréciation de ces notations). Avec ECMAScript 6 et les versions ultérieures, la syntaxe utilise un zéro initial, suivi de la lettre latine « o » en majuscule ou en minuscule ((`0o` ou `0O)`. Pour plus d'informations à ce sujet, voir la page sur [la grammaire lexicale JavaScript](/fr/docs/Web/JavaScript/Reference/Grammaire_lexicale#Octaux).

## Exemples

### Nombres invalides en notation octale

```js example-bad
08;
09;
// SyntaxError: 08 is not a legal ECMA-262 octal constant
// SyntaxError: "0"-prefixed octal literals and octal escape sequences are deprecated
```

### Nombres valides en notation octale

On utilisera un zéro suivi de la lettre « o » pour indiquer un nombre exprimé en notation octale :

```js example-good
0O755;
0o644;
```

## Voir aussi

- [La grammaire lexicale de JavaScript](/fr/docs/Web/JavaScript/Reference/Grammaire_lexicale#Octaux)
- [SyntaxError: "0"-prefixed octal literals and octal escape seq. are deprecated](/fr/docs/Web/JavaScript/Reference/Errors/Deprecated_octal)
