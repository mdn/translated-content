---
title: "SyntaxError: unparenthesized unary expression can't appear on the left-hand side of '**'"
slug: Web/JavaScript/Reference/Errors/Unparenthesized_unary_expr_lhs_exponentiation
l10n:
  sourceCommit: ac4ad443e29371b7c807051e8d10cac4d53d00c4
---

{{jsSidebar("Errors")}}

L'exception JavaScript <i lang="en">"unparenthesized unary expression can't appear on the left-hand side of '\*\*'"</i> se produit lorsqu'un opérateur unaire (parmi `typeof`, `void`, `delete`, `await`, `!`, `~`, `+`, `-`) est utilisé sur l'opérande gauche de [l'opérateur d'exponentiation](/fr/docs/Web/JavaScript/Reference/Operators/Exponentiation) sans parenthèse.

## Message

```
SyntaxError: Unary operator used immediately before exponentiation expression. Parenthesis must be used to disambiguate operator precedence (moteur JavaScript basé sur V8)
SyntaxError: unparenthesized unary expression can't appear on the left-hand side of '**' (Firefox)
SyntaxError: Unexpected token '**'. Ambiguous unary expression in the left hand side of the exponentiation expression; parentheses must be used to disambiguate the expression. (Safari)
```

## Type d'erreur

{{jsxref("SyntaxError")}}

## Quel est le problème&nbsp;?

Cela provient vraisemblablement d'une écriture comme celle-ci&nbsp;:

```js example-bad
-a ** b
```

Ici, l'expression est ambigüe et on ne sait pas si elle devrait être évaluée comme `(-a) ** b` ou comme `-(a ** b)`. En mathématiques, l'écriture -x<sup>2</sup> signifie `-(x ** 2)`, et c'est ainsi que de nombreux langages de programmation, comme Python, Haskell, et PHP, gèrent cette évaluation. Mais si la précédence de l'opérateur unaire moins l'emporte sur `**`, cela casse la symétrie avec `a ** -b`, qui s'évalue sans ambigüité comme `a ** (-b)`. Aussi, le langage interdit cette syntaxe et impose d'utiliser des parenthèses d'un côté ou de l'autre pour résoudre l'ambigüité.

```js-nolint example-good
(-a) ** b;
-(a ** b);
```

D'autres opérateurs unaires ne peuvent pas être utilisés sur l'opérande gauche non plus.

```js example-bad
await a ** b;
!a ** b;
+a ** b;
~a ** b;
```

## Exemples

Lorsqu'on écrit des expressions mathématiques complexes utilisant l'exponentiation, on peut aboutir à quelque chose comme&nbsp;:

```js example-bad
function taylorSin(x) {
  return (n) => -1 ** n * x ** (2 * n + 1) / factorial(2 * n + 1);
  // SyntaxError: unparenthesized unary expression can't appear on the left-hand side of '**'
}
```

Toutefois, le fragment `-1 ** n` est illégal en JavaScript. À la place, on utilisera des parenthèses sur l'opérande gauche&nbsp;:

```js example-good
function taylorSin(x) {
  return (n) => ((-1) ** n * x ** (2 * n + 1)) / factorial(2 * n + 1);
}
```

Cela a également l'avantage de rendre le code plus compréhensible et explicite.

## Voir aussi

- [Discussion originale à propos de la précédence de l'opérateur d'exponentiation (en anglais)](https://esdiscuss.org/topic/exponentiation-operator-precedence)
- [L'opérateur d'exponentiation](/fr/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [La précédence des opérateurs](/fr/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
