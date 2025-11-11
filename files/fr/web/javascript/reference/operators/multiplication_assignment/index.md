---
title: Affectation après multiplication (*=)
slug: Web/JavaScript/Reference/Operators/Multiplication_assignment
---

{{jsSidebar("Operators")}}

L'opérateur de multiplication et d'affectation (`*=`) multiplie une variable fournie par l'opérande gauche par la valeur fournie par l'opérande droit puis affecte le résultat de l'opération à la variable représentée par l'opérande gauche.

{{InteractiveExample("JavaScript Demo: Expressions - Multiplication assignment operator")}}

```js interactive-example
let a = 2;

console.log((a *= 3));
// Expected output: 6

console.log((a *= "hello"));
// Expected output: NaN
```

## Syntaxe

```js
Opérateur: x *= y;
Signification: x = x * y;
```

## Exemples

### Utiliser l'opérateur de multiplication et d'affectation

```js
let truc = 5;
truc *= 2; // 10
truc *= "toto"; // NaN
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les opérateurs d'affectation dans le guide JavaScript](/fr/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment)
- [L'opérateur de multiplication](/fr/docs/Web/JavaScript/Reference/Operators/Multiplication)
