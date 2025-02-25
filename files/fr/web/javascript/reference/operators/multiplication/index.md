---
title: Multiplication (*)
slug: Web/JavaScript/Reference/Operators/Multiplication
---

{{jsSidebar("Operators")}}

L'opérateur de multiplication (`*`) fournit le produit de la multiplication des deux opérandes.

{{InteractiveExample("JavaScript Demo: Expressions - Multiplication operator")}}

```js interactive-example
console.log(3 * 4);
// Expected output: 12

console.log(-3 * 4);
// Expected output: -12

console.log("3" * 2);
// Expected output: 6

console.log("foo" * 2);
// Expected output: NaN
```

## Syntaxe

```js
Opérateur: x * y;
```

## Exemples

### Avec des nombres

```js
2 * 2; // 4
-2 * 2; // -4
```

### Avec l'infini

```js
Infinity * 0; // NaN
Infinity * Infinity; // Infinity
```

### Avec des valeurs non-numériques

```js
"foo" * 2; // NaN
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Opérateur d'addition](/fr/docs/Web/JavaScript/Reference/Operators/Addition)
- [Opérateur de soustraction](/fr/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [Opérateur de division](/fr/docs/Web/JavaScript/Reference/Operators/Division)
- [Opérateur de reste](/fr/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Opérateur d'exponentiation](/fr/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Opérateur d'incrémentation](/fr/docs/Web/JavaScript/Reference/Operators/Increment)
- [Opérateur de décrémentation](/fr/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Opérateur de négation unaire](/fr/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Opérateur plus unaire](/fr/docs/Web/JavaScript/Reference/Operators/Unary_plus)
