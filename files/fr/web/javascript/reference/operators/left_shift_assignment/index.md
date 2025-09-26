---
title: Affectation après décalage à gauche (<<=)
slug: Web/JavaScript/Reference/Operators/Left_shift_assignment
---

{{jsSidebar("Operators")}}

L'opérateur de décalage à gauche et d'affectation (`<<=`) décale la séquence de bits représentée par l'opérande gauche d'autant de bits qu'indiqué par l'opérande droit puis affecte le résultat obtenu à la variable représentée par l'opérande gauche.

{{InteractiveExample("JavaScript Demo: Expressions - Left shift assignment operator")}}

```js interactive-example
let a = 5; // 00000000000000000000000000000101

a <<= 2; // 00000000000000000000000000010100

console.log(a);
// Expected output: 20
```

## Syntaxe

```js
Opérateur: x <<= y;
Signification: x = x << y;
```

## Exemples

### Utiliser l'opérateur de décalage à gauche et d'affectation

```js
let a = 5;
// 00000000000000000000000000000101

a <<= 2; // 20
// 00000000000000000000000000010100
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les opérateurs d'affectation dans le guide JavaScript](/fr/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment)
- [L'opérateur de décalage à gauche binaire](/fr/docs/Web/JavaScript/Reference/Operators/Left_shift)
