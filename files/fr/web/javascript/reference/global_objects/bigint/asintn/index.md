---
title: "BigInt : méthode statique asIntN()"
short-title: asIntN()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/asIntN
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`asIntN()`** des valeurs {{JSxRef("BigInt")}} tronque une valeur `BigInt` au nombre donné de bits les moins significatifs et retourne cette valeur sous la forme d'un entier signé.

{{InteractiveExample("Démonstration JavaScript&nbsp;: BigInt.asIntN()")}}

```js interactive-example
const I64_CEIL = 2n ** 63n;

console.log(BigInt.asIntN(64, I64_CEIL - 1n));
// 9223372036854775807n (2n ** 64n - 1n, le maximum sans dépassement)
console.log(BigInt.asIntN(64, I64_CEIL));
// -9223372036854775808n (dépassement vers la valeur minimale)
console.log(BigInt.asIntN(64, I64_CEIL + 1n));
// -9223372036854775807n (valeur minimale + 1n)
console.log(BigInt.asIntN(64, I64_CEIL * 2n));
// 0n (retour à zéro)
console.log(BigInt.asIntN(64, -I64_CEIL * -42n));
// 0n (retour à zéro sur les multiples négatifs)
```

## Syntaxe

```js-nolint
BigInt.asIntN(bits, bigint)
```

### Paramètres

- `bits`
  - : Le nombre de bits disponibles pour le `BigInt` retourné. Doit être un entier compris entre 0 et 2<sup>53</sup> - 1 inclus.
- `bigint`
  - : La valeur `BigInt` à tronquer pour tenir dans le nombre de bits fourni.

### Valeur de retour

La valeur de `bigint` modulo `2 ** bits` comme entier signé.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si `bits` est négatif ou supérieur à 2<sup>53</sup> - 1.

## Description

La méthode `BigInt.asIntN` tronque une valeur `BigInt` au nombre de bits donné et interprète le résultat comme un entier signé. Par exemple, pour `BigInt.asIntN(3, 25n)`, la valeur `25n` est tronquée à `1n`&nbsp;:

```plain
25n = 00011001 (base 2)
          ^=== On ne garde que les trois bits restants
===>       001 (base 2) = 1n
```

Si le bit de poids fort du nombre restant est `1`, le résultat est négatif. Par exemple, `BigInt.asIntN(4, 25n)` donne `-7n`, car `1001` est le codage de `-7` en complément à deux&nbsp;:

```plain
25n = 00011001 (base 2)
         ^==== On ne garde que les quatre bits restants
===>      1001 (base 2) = -7n
```

> [!NOTE]
> Les valeurs `BigInt` sont toujours codées en binaire selon le complément à deux.

Contrairement aux API de langages similaires comme {{JSxRef("Number.prototype.toExponential()")}}, `asIntN` est une propriété statique de {{JSxRef("BigInt")}}, donc vous l'utilisez toujours comme `BigInt.asIntN()`, plutôt que comme une méthode d'une valeur `BigInt`. Exposer `asIntN()` comme « fonction de la bibliothèque standard » permet [l'interopérabilité avec asm.js <sup>(angl.)</sup>](https://github.com/tc39/proposal-bigint/blob/master/ADVANCED.md#dont-break-asmjs).

## Exemples

### Rester dans les plages 64 bits

La méthode `BigInt.asIntN()` peut être utile pour rester dans une arithmétique sur 64 bits&nbsp;:

```js
const max = 2n ** (64n - 1n) - 1n;

BigInt.asIntN(64, max); // 9223372036854775807n

BigInt.asIntN(64, max + 1n); // -9223372036854775807n
// négatif car dépassement sur le nombre de bits
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La valeur {{JSxRef("BigInt")}}
- La méthode statique {{JSxRef("BigInt.asUintN()")}}
