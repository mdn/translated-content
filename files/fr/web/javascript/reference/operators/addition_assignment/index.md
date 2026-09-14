---
title: Addition et affectation (+=)
slug: Web/JavaScript/Reference/Operators/Addition_assignment
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

L'opérateur **d'addition et d'affectation (`+=`)** effectue une [addition](/fr/docs/Web/JavaScript/Reference/Operators/Addition) (qui peut être une addition numérique ou une concaténation de chaînes de caractères) sur les deux opérandes et assigne le résultat à l'opérande de gauche.

{{InteractiveExample("Démonstration JavaScript&nbsp;: l'opérateur Addition et affectation (+=)")}}

```js interactive-example
let a = 2;
let b = "bonjour";

console.log((a += 3)); // Addition
// Résultat attendu : 5

console.log((b += " le monde")); // Concaténation
// Résultat attendu : "bonjour le monde"
```

## Syntaxe

```js-nolint
x += y
```

## Description

`x += y` est équivalent à `x = x + y`, sauf que l'expression `x` n'est évaluée qu'une seule fois.

## Exemples

### Additionner et affecter des nombres

```js
let truc = 5;
truc += 2; // 7
```

Les autres valeurs qui ne sont pas des chaînes de caractères, pas des grands entiers sont converties en nombres&nbsp;:

```js
let machin = true;
machin += 1; // 2
machin += false; // 2
```

### Additionner et affecter des grands entiers

```js
let x = 1n;
x += 2n; // 3n

x += 1; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

### Additionner et affecter des chaînes de caractères

```js
let toto = "toto";
toto += false; // "totofalse"
toto += "truc"; // "totofalsetruc"

let truc = 5;
truc += "toto"; // "5toto"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les opérateurs d'affectation dans le guide JavaScript](/fr/docs/Web/JavaScript/Guide/Expressions_and_operators#opérateurs_daffectation)
- L'opérateur [d'Addition (`+`)](/fr/docs/Web/JavaScript/Reference/Operators/Addition)
