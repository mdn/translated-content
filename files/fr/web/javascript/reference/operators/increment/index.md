---
title: Incrémentation (++)
slug: Web/JavaScript/Reference/Operators/Increment
---

{{jsSidebar("Operators")}}

L'opérateur d'incrémentation (`++`) permet d'incrémenter (c'est-à-dire d'ajouter un) à son opérande et de renvoyer une valeur qui est le résultat avant ou après la modification.

{{EmbedInteractiveExample("pages/js/expressions-increment.html")}}

## Syntaxe

```js
Opérateur : x++ ou ++x
```

## Description

Utilisé comme suffixe (l'opérateur étant placé après l'opérande), comme dans `x++`, l'opérateur incrémentera la valeur et renverra la valeur avant l'incrément.

Utilisé comme préfixe (l'opérateur étant placé avant l'opérande), comme dans `++x`, l'opérateur incrémentera la valeur et renverra la valeur après l'incrément.

## Exemples

### Incrément en suffixe

```js
let x = 3;
let y = x++;

// y = 3
// x = 4
```

### Incrément en préfixe

```js
let a = 2;
let b = ++a;

// a = 3
// b = 3
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
- [Opérateur de décrémentation](/fr/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Opérateur de négation unaire](/fr/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Opérateur de plus unaire](/fr/docs/Web/JavaScript/Reference/Operators/Unary_plus)
