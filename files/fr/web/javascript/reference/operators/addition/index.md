---
title: Addition (+)
slug: Web/JavaScript/Reference/Operators/Addition
---

{{jsSidebar("Operators")}}

L'opérateur d'addition (`+`) produit la somme de deux opérandes numériques ou la concaténation de deux chaînes de caractères.

{{InteractiveExample("JavaScript Demo: Expressions - Addition operator")}}

```js interactive-example
console.log(2 + 2);
// Expected output: 4

console.log(2 + true);
// Expected output: 3

console.log("hello " + "everyone");
// Expected output: "hello everyone"

console.log(2001 + ": A Space Odyssey");
// Expected output: "2001: A Space Odyssey"
```

## Syntaxe

```js
Opérateur: x + y;
```

## Exemples

### Addition numérique

```js
// Number + Number -> addition
1 + 2; // 3

// Boolean + Number -> addition
true + 1; // 2

// Boolean + Boolean -> addition
false + false; // 0
```

### Concaténation de chaînes de caractères

```js
// String + String -> concatenation
"toto" + "truc"; // "tototruc"

// Number + String -> concatenation
5 + "toto"; // "5toto"

// String + Boolean -> concatenation
"toto" + false; // "totofalse"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Opérateur de soustraction](/fr/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [Opérateur de multiplication](/fr/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [Opérateur de division](/fr/docs/Web/JavaScript/Reference/Operators/Division)
- [Opérateur de reste](/fr/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Opérateur d'exponentiation](/fr/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Opérateur d'incrémentation](/fr/docs/Web/JavaScript/Reference/Operators/Increment)
- [Opérateur de décrémentation](/fr/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Opérateur de négation unaire](/fr/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Opérateur plus unaire](/fr/docs/Web/JavaScript/Reference/Operators/Unary_plus)
