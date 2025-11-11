---
title: Affectation après exponentiation (**=)
slug: Web/JavaScript/Reference/Operators/Exponentiation_assignment
---

{{jsSidebar("Operators")}}

L'opérateur d'exponentiation et d'affectation (`**=`) élève la valeur de la variable fournie par son opérande gauche à la puissance indiquée par son opérande droit puis affecte le résultat à la variable représentée par l'opérande gauche.

{{InteractiveExample("JavaScript Demo: Expressions - Exponentiation assignment operator")}}

```js interactive-example
let a = 3;

console.log((a **= 2));
// Expected output: 9

console.log((a **= 0));
// Expected output: 1

console.log((a **= "hello"));
// Expected output: NaN
```

## Syntaxe

```js
Opérateur: x **= y;
Signification: x = x ** y;
```

## Exemples

### Utiliser l'opérateur d'exponentiation et d'affectation

```js
let truc = 5;
truc **= 2; // 25
truc **= "toto"; // NaN
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les opérateurs d'affectation dans le guide JavaScript](/fr/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment)
- [L'opérateur d'exponentiation](/fr/docs/Web/JavaScript/Reference/Operators/Exponentiation)
