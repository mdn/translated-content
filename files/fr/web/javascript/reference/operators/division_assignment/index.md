---
title: Affectation après division (/=)
slug: Web/JavaScript/Reference/Operators/Division_assignment
---

{{jsSidebar("Operators")}}

L'opérateur de division et d'affectation (`/=`) divise la variable fournie par l'opérande gauche par la valeur indiquée par l'opérande droit puis affecte le résultat à la variable représentée par l'opérande gauche.

{{InteractiveExample("JavaScript Demo: Expressions - Division assignment operator")}}

```js interactive-example
let a = 3;

a /= 2;
console.log(a);
// Expected output: 1.5

a /= 0;
console.log(a);
// Expected output: Infinity

a /= "hello";
console.log(a);
// Expected output: NaN
```

## Syntaxe

```js
Opérateur: x /= y;
Signification: x = x / y;
```

## Exemples

### Utiliser l'opérateur de division et d'affectation

```js
let truc = 5;
truc /= 2; // 2.5
truc /= 2; // 1.25
truc /= 0; // Infinity
truc /= "toto"; // NaN
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les opérateurs d'affectation dans le guide JavaScript](/fr/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment)
- [L'opérateur de division](/fr/docs/Web/JavaScript/Reference/Operators/Division)
