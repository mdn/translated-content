---
title: Décrémentation (--)
slug: Web/JavaScript/Reference/Operators/Decrement
---

{{jsSidebar("Operators")}}

L'opérateur de décrémentation (`--`) permet de décrémenter (c'est-à-dire de soustraire un) son opérande et renvoie une valeur qui est le résultat avant ou après la modification.

{{InteractiveExample("JavaScript Demo: Expressions - Decrement operator")}}

```js interactive-example
let x = 3;
const y = x--;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:2, y:3"

let a = 3;
const b = --a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:2, b:2"
```

## Syntaxe

```js
Opérateur : x-- ou --x
```

## Description

Utilisé comme suffixe (l'opérateur étant placé après l'opérande), comme dans `x--`, l'opérateur décrémentera la valeur et renverra la valeur avant l'incrément.

Utilisé comme préfixe (l'opérateur étant placé avant l'opérande), comme dans `--x`, l'opérateur décrémentera la valeur et renverra la valeur après l'incrément.

## Exemples

### Décrément en suffixe

```js
let x = 3;
let y = x--;

// y = 3
// x = 2
```

### Décrément en préfixe

```js
let a = 2;
let b = --a;

// a = 1
// b = 1
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
- [Opérateur de négation unaire](/fr/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Opérateur de plus unaire](/fr/docs/Web/JavaScript/Reference/Operators/Unary_plus)
