---
title: Inférieur ou égal (<=)
slug: Web/JavaScript/Reference/Operators/Less_than_or_equal
---

{{jsSidebar("Operators")}}

L'opérateur inférieur ou égal (`<=`) renvoie `true` si l'opérande gauche est inférieur ou égal à l'opérande droit et `false` sinon.

{{EmbedInteractiveExample("pages/js/expressions-less-than-or-equal.html")}}

## Syntaxe

```js
x <= y;
```

## Description

Les opérandes sont comparés avec l'algorithme de [comparaison abstraite relationnelle](https://tc39.es/ecma262/#sec-abstract-relational-comparison). Voir la documentation de [l'opérateur inférieur strict](/fr/docs/Web/JavaScript/Reference/Operators/Less_than) pour un résumé de cet algorithme.

## Exemples

### Comparaison numérique

```js
console.log(5 <= 3); // false
console.log(3 <= 3); // true
console.log(3 <= 5); // true
```

### Comparaison entre un nombre et un BigInt

```js
console.log(5n <= 3); // false
console.log(3 <= 3n); // true
console.log(3 <= 5n); // true
```

### Comparaison entre chaînes de caractères

```js
console.log("a" <= "b"); // true
console.log("a" <= "a"); // true
console.log("a" <= "3"); // false
```

### Comparaison entre nombres et chaînes de caractères

```js
console.log("5" <= 3); // false
console.log("3" <= 3); // true
console.log("3" <= 5); // true

console.log("coucou" <= 5); // false
console.log(5 <= "coucou"); // false
```

### Comparaison avec des booléens, null, undefined, NaN

```js
console.log(true <= false); // false
console.log(true <= true); // true
console.log(false <= true); // true

console.log(true <= 0); // false
console.log(true <= 1); // true

console.log(null <= 0); // true
console.log(1 <= null); // false

console.log(undefined <= 3); // false
console.log(3 <= undefined); // false

console.log(3 <= NaN); // false
console.log(NaN <= 3); // false
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'opérateur supérieur ou égal](/fr/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal)
- [L'opérateur supérieur strict](/fr/docs/Web/JavaScript/Reference/Operators/Greater_than)
- [L'opérateur inférieur strict](/fr/docs/Web/JavaScript/Reference/Operators/Less_than)
