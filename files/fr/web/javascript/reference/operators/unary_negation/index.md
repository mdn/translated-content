---
title: Négation unaire (-)
slug: Web/JavaScript/Reference/Operators/Unary_negation
---

{{jsSidebar("Operators")}}

L'opérateur de négation unaire (`-`) se place devant son opérande et le transforme en son opposé.

{{InteractiveExample("JavaScript Demo: Expressions - Unary negation operator")}}

```js interactive-example
const x = 4;
const y = -x;

console.log(y);
// Expected output: -4

const a = "4";
const b = -a;

console.log(b);
// Expected output: -4
```

## Syntaxe

```js
Opérateur: -x;
```

## Exemples

### Avec des nombres

```js
const x = 3;
const y = -x;

// y = -3
// x = 3
```

### Avec des valeurs non-numériques

L'opérateur de négation unaire peut être utilisé pour convertir une valeur non-numérique en nombre.

```js
const x = "4";
const y = -x;

// y = -4
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Opérateur d'addition](/fr/docs/Web/JavaScript/Reference/Operators/Addition)
- [Opérateur de soustraction](/fr/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [Opérateur de division](/fr/docs/Web/JavaScript/Reference/Operators/Division)
- [Opérateur de multiplication](/fr/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [Opérateur de reste](/fr/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Opérateur d'exponentiation](/fr/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Opérateur d'incrémentation](/fr/docs/Web/JavaScript/Reference/Operators/Increment)
- [Opérateur de décrémentation](/fr/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Opérateur plus unaire](/fr/docs/Web/JavaScript/Reference/Operators/Unary_plus)
