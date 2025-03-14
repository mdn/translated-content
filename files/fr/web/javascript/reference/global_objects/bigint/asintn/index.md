---
title: BigInt.asIntN()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/asIntN
---

{{JSRef}}

La méthode statique **`BigInt.asIntN()`** permet d'écréter un nombre `BigInt` pour obtenir un entier signé entre 2^(largeur-1) et 2^(largeur-1)-1.

{{InteractiveExample("JavaScript Demo: BigInt.asIntN()")}}

```js interactive-example
const I64_CEIL = 2n ** 63n;

console.log(BigInt.asIntN(64, I64_CEIL - 1n));
// 9223372036854775807n (2n ** 64n - 1n, the maximum non-wrapping value)
console.log(BigInt.asIntN(64, I64_CEIL));
// -9223372036854775808n (wraps to min value)
console.log(BigInt.asIntN(64, I64_CEIL + 1n));
// -9223372036854775807n (min value + 1n)
console.log(BigInt.asIntN(64, I64_CEIL * 2n));
// 0n (wrapped around to zero)
console.log(BigInt.asIntN(64, -I64_CEIL * -42n));
// 0n (also wraps on negative multiples)
```

## Syntaxe

```js
var resultat = BigInt.asIntN(largeur, bigint);
```

### Paramètres

- `largeur`
  - : La quantité de bits disponible pour stocker l'entier.
- `bigint`
  - : L'entier qu'on souhaite stocker sur le nombre de bits indiqués.

### Valeur de retour

La valeur de `bigint` modulo 2^`largeur` comme entier signé.

## Exemples

La méthode `BigInt.asIntN()` peut être utile pour rester dans une arithmétique sur 64 bits :

```js
const max = 2n ** (64n - 1n) - 1n;

BigInt.asIntN(64, max);
// ↪ 9223372036854775807n

BigInt.asIntN(64, max + 1n);
// ↪ -9223372036854775807n
// négatif car dépassement sur le nombre de bits
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{JSxRef("BigInt")}}
- {{JSxRef("BigInt.asUintN()")}}
