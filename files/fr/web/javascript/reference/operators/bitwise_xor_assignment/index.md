---
title: Affectation après OU exclusif binaire (^=)
slug: Web/JavaScript/Reference/Operators/Bitwise_XOR_assignment
tags:
  - Assignment operator
  - JavaScript
  - Language feature
  - Operator
  - Reference
browser-compat: javascript.operators.bitwise_xor_assignment
---
{{jsSidebar("Operators")}}

L'opérateur d'affectation après OU exclusif (XOR) binaire (`^=`) utilise la représentation binaire des deux opérandes, effectue un OU exclusif entre chaque puis affecte le résultat obtenu à la variable représentée par l'opérande gauche.

{{EmbedInteractiveExample("pages/js/expressions-bitwise-xor-assignment.html")}}

## Syntaxe

```js
Opérateur : x ^= y
Signification :  x  = x ^ y
```

## Exemples

### Utiliser l'affectation après OU exclusif binaire

```js
let a = 5;      // 00000000000000000000000000000101
a ^= 3;         // 00000000000000000000000000000011

console.log(a); // 00000000000000000000000000000110
// 6

let b = 5;      // 00000000000000000000000000000101
b ^= 0;         // 00000000000000000000000000000000

console.log(b); // 00000000000000000000000000000101
// 5
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les opérateurs d'affectation dans le guide JavaScript](/fr/docs/Web/JavaScript/Guide/Expressions_and_Operators#assignment)
- [L'opérateur OU exclusif binaire](/fr/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR)
