---
title: "SyntaxError: cannot use `??` unparenthesized within `||` and `&&` expressions"
slug: Web/JavaScript/Reference/Errors/Cant_use_nullish_coalescing_unparenthesized
l10n:
  sourceCommit: ac4ad443e29371b7c807051e8d10cac4d53d00c4
---

{{jsSidebar("Errors")}}

L'exception JavaScript <i lang="en">"cannot use `??` unparenthesized within `||` and `&&` expressions"</i> se produit lorsque [l'opérateur de coalescence des nuls](/fr/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator) est utilisé avec [un OU logique](/fr/docs/Web/JavaScript/Reference/Operators/Logical_OR) ou avec [un ET logique](/fr/docs/Web/JavaScript/Reference/Operators/Logical_AND), dans la même expression et sans parenthèses.

## Message

```
SyntaxError: Unexpected token '??' (moteur JavaScript basé sur V8)
SyntaxError: cannot use `??` unparenthesized within `||` and `&&` expressions (Firefox)
SyntaxError: Unexpected token '??'. Coalescing and logical operators used together in the same expression; parentheses must be used to disambiguate. (Safari)
```

## Type d'erreur

[`SyntaxError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError)

## Quel est le problème&nbsp;?

[La précédence des opérateurs](/fr/docs/Web/JavaScript/Reference/Operators/Operator_Precedence) ressemble à ceci&nbsp;:

```
|   >   &&   >   ||   >   =
|   >   ??   >   =
```

Toutefois, la précédence _entre_ `??` et `&&`/`||` est intentionnellement indéfinie, car le comportement en court-circuit des opérateurs logiques peut rendre l'évaluation d'une expression contre-intuitive. Ainsi, toutes les combinaisons qui suivent entraînent des erreurs de syntaxe, car le langage ne permet pas de savoir quelle opération a la priorité&nbsp;:

```js example-bad
a ?? b || c
a || b ?? c
a ?? b && c
a && b ?? c
```

À la place, on utilisera des parenthèses pour rendre explicite l'ordre des opérations voulu&nbsp;:

```js example-good
(a ?? b) || c;
a ?? (b && c);
```

## Exemples

Lorsqu'on migre du code historique qui utilise `||` et `&&` afin de se protéger des valeurs `null` ou `undefined`, on peut aboutir à une conversion partielle&nbsp;:

```js example-bad
function getId(user, fallback) {
  // Avant, on avait : user && user.id || fallback
  return user && user.id ?? fallback; // SyntaxError: cannot use `??` unparenthesized within `||` and `&&` expressions
}
```

À la place, on privilégiera l'utilisation de parenthèses autour des opérandes de `&&`&nbsp;:

```js
function getId(user, fallback) {
  return (user && user.id) ?? fallback;
}
```

Mieux encore, on peut utiliser [le chaînage optionnel](/fr/docs/Web/JavaScript/Reference/Operators/Optional_chaining) à la place de `&&`&nbsp;:

```js example-good
function getId(user, fallback) {
  return user?.id ?? fallback;
}
```

## Voir aussi

- [Discussion originale à propos de la précédence de l'opérateur de coalescence des nuls (en anglais)](https://github.com/tc39/proposal-nullish-coalescing/issues/15)
- [L'opérateur de coalescence des nuls](/fr/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)
- [La précédence des opérateurs](/fr/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
