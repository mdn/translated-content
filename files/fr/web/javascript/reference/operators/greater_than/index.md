---
title: Supérieur strict (>)
slug: Web/JavaScript/Reference/Operators/Greater_than
---

{{jsSidebar("Operators")}}

L'opérateur supérieur strict (`>`) renvoie `true` si l'opérande gauche est strictement supérieur à l'opérande droit et `false` sinon.

{{InteractiveExample("JavaScript Demo: Expressions - Greater than operator")}}

```js interactive-example
console.log(5 > 3);
// Expected output: true

console.log(3 > 3);
// Expected output: false

// Compare bigint to number
console.log(3n > 5);
// Expected output: false

console.log("ab" > "aa");
// Expected output: true
```

## Syntaxe

```js
x > y;
```

## Description

Les opérandes sont comparés avec l'algorithme de [comparaison abstraite relationnelle](https://tc39.es/ecma262/#sec-abstract-relational-comparison). Voir la documentation de [l'opérateur inférieur strict](/fr/docs/Web/JavaScript/Reference/Operators/Less_than) pour un résumé de cet algorithme.

## Exemples

### Comparaison numérique

```js
console.log(5 > 3); // true
console.log(3 > 3); // false
console.log(3 > 5); // false
```

### Comparaison entre un nombre et un BigInt

```js
console.log(5n > 3); // true
console.log(3 > 5n); // false
```

### Comparaison entre chaînes de caractères

```js
console.log("a" > "b"); // false
console.log("a" > "a"); // false
console.log("a" > "3"); // true
```

### Comparaison entre nombres et chaînes de caractères

```js
console.log("5" > 3); // true
console.log("3" > 3); // false
console.log("3" > 5); // false

console.log("coucou" > 5); // false
console.log(5 > "coucou"); // false

console.log("5" > 3n); // true
console.log("3" > 5n); // false
```

### Comparaison avec des booléens, null, undefined, NaN

```js
console.log(true > false); // true
console.log(false > true); // false

console.log(true > 0); // true
console.log(true > 1); // false

console.log(null > 0); // false
console.log(1 > null); // true

console.log(undefined > 3); // false
console.log(3 > undefined); // false

console.log(3 > NaN); // false
console.log(NaN > 3); // false
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'opérateur supérieur ou égal](/fr/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal)
- [L'opérateur inférieur strict](/fr/docs/Web/JavaScript/Reference/Operators/Less_than)
- [L'opérateur inférieur ou égal](/fr/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal)
