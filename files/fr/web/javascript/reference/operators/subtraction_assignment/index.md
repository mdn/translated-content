---
title: Affectation après soustraction (-=)
slug: Web/JavaScript/Reference/Operators/Subtraction_assignment
---

{{jsSidebar("Operators")}}

L'opérateur d'affectation après soustraction (`-=`) calcule la soustraction de l'opérande gauche par l'opérande droit puis affecte le résultat à la variable représentée par l'opérande gauche.

{{InteractiveExample("JavaScript Demo: Expressions - Subtraction assignment operator")}}

```js interactive-example
let a = 2;

console.log((a -= 3));
// Expected output: -1

console.log((a -= "Hello"));
// Expected output: NaN
```

## Syntaxe

```js
Opérateur: x -= y;
Signification: x = x - y;
```

## Exemples

### Utiliser l'opérateur de soustraction et d'affectation

```js
let truc = 5;
truc -= 2; // 3
truc -= "toto"; // NaN
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les opérateurs d'affectation dans le guide JavaScript](/fr/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment)
- [L'opérateur de soustraction](/fr/docs/Web/JavaScript/Reference/Operators/Subtraction)
