---
title: BigInt.asUintN()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/asUintN
---

{{JSRef}}

La méthode statique **`BigInt.asUintN()`** permet d'écréter un `BigInt` pour ramener sa valeur sur un entier non-signé entre 0 et 2^(largeur)-1.

{{InteractiveExample("JavaScript Demo: BigInt.asUintN()")}}

```js interactive-example
const U64_CEIL = 2n ** 64n;

console.log(BigInt.asUintN(64, U64_CEIL - 1n));
// 18446744073709551615n (2n ** 64n - 1n, the maximum non-wrapping value)
console.log(BigInt.asUintN(64, U64_CEIL));
// 0n (wraps to zero)
console.log(BigInt.asUintN(64, U64_CEIL + 1n));
// 1n
console.log(BigInt.asUintN(64, U64_CEIL * 2n));
// 0n (wraps on multiples)
console.log(BigInt.asUintN(64, U64_CEIL * -42n));
// 0n (also wraps on negative multiples)
```

## Syntaxe

```js
var résultat = BigInt.asUintN(largeur, bigint);
```

### Paramètres

- `largeur`
  - : Le nombre de bits disponible pour stocker l'entier.
- `bigint`
  - : L'entier qu'on souhaite stocker sur le nombre de bits indiqués.

### Valeur de retour

La valeur de `bigint` modulo 2^`largeur` comme un entier non signé.

## Exemples

La méthode `BigInt.asUintN()` peut s'avérer utile pour rester dans une arithmétique exprimée sur 64 bits .

```js
const max = 2n ** 64n - 1n;

BigInt.asUintN(64, max);
// ↪ 18446744073709551615n

BigInt.asUintN(64, max + 1n);
// ↪ 0n
// zéro en raison du dépassement
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{JSxRef("BigInt")}}
- {{JSxRef("BigInt.asIntN()")}}
