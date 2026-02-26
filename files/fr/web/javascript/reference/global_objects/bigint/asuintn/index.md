---
title: "BigInt : méthode statique asUintN()"
short-title: asUintN()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/asUintN
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`asUintN()`** des valeurs {{JSxRef("BigInt")}} tronque une valeur `BigInt` au nombre donné de bits les moins significatifs et retourne cette valeur sous la forme d'un entier non signé.

{{InteractiveExample("Démonstration JavaScript&nbsp;: BigInt.asUintN()")}}

```js interactive-example
const U64_CEIL = 2n ** 64n;

console.log(BigInt.asUintN(64, U64_CEIL - 1n));
// 18446744073709551615n (2n ** 64n - 1n, le maximum sans dépassement)
console.log(BigInt.asUintN(64, U64_CEIL));
// 0n (retour à zéro)
console.log(BigInt.asUintN(64, U64_CEIL + 1n));
// 1n
console.log(BigInt.asUintN(64, U64_CEIL * 2n));
// 0n (retour à zéro sur les multiples)
console.log(BigInt.asUintN(64, U64_CEIL * -42n));
// 0n (retour à zéro sur les multiples négatifs)
```

## Syntaxe

```js-nolint
BigInt.asUintN(bits, bigint)
```

### Paramètres

- `bits`
  - : Le nombre de bits disponibles pour le `BigInt` retourné. Doit être un entier compris entre 0 et 2<sup>53</sup> - 1 inclus.
- `bigint`
  - : La valeur du `BigInt` à tronquer pour qu'elle tienne dans les bits fournis.

### Valeur de retour

La valeur de `bigint` modulo `2 ** bits` comme entier signé.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si `bits` est négatif ou supérieur à 2<sup>53</sup> - 1.

## Description

La méthode `BigInt.asUintN` tronque une valeur `BigInt` au nombre de bits donné et interprète le résultat comme un entier non signé. Les entiers non signés n'ont pas de bits de signe et sont toujours non négatifs. Par exemple, pour `BigInt.asUintN(4, 25n)`, la valeur `25n` est tronquée à `9n`&nbsp;:

```plain
25n = 00011001 (base 2)
         ^==== On ne garde que les quatre bits restants
===>      1001 (base 2) = 9n
```

> [!NOTE]
> Les valeurs `BigInt` sont toujours codées en binaire selon le complément à deux.

Contrairement aux API de langages similaires comme {{JSxRef("Number.prototype.toExponential()")}}, `asUintN` est une propriété statique de {{JSxRef("BigInt")}}, donc vous l'utilisez toujours comme `BigInt.asUintN()`, plutôt que comme une méthode d'une valeur `BigInt`. Exposer `asUintN()` comme «&nbsp;fonction de la bibliothèque standard&nbsp;» permet [l'interopérabilité avec asm.js <sup>(angl.)</sup>](https://github.com/tc39/proposal-bigint/blob/master/ADVANCED.md#dont-break-asmjs).

## Exemples

### Rester dans les plages 64 bits

La méthode `BigInt.asUintN()` peut s'avérer utile pour rester dans une arithmétique exprimée sur 64 bits.

```js
const max = 2n ** 64n - 1n;

BigInt.asUintN(64, max); // 18446744073709551615n

BigInt.asUintN(64, max + 1n); // 0n
// zéro en raison du dépassement
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La valeur {{JSxRef("BigInt")}}
- La méthode statique {{JSxRef("BigInt.asIntN()")}}
