---
title: "RangeError: BigInt division by zero"
slug: Web/JavaScript/Reference/Errors/BigInt_division_by_zero
l10n:
  sourceCommit: ac4ad443e29371b7c807051e8d10cac4d53d00c4
---

{{jsSidebar("Errors")}}

L'exception JavaScript <i lang="en">"BigInt division by zero"</i> se produit lorsqu'une valeur [`BigInt`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt) est divisée par `0n`.

## Message

```
RangeError: Division by zero (moteur JavaScript basé sur V8)
RangeError: BigInt division by zero (Firefox)
RangeError: 0 is an invalid divisor value. (Safari)
```

## Type d'erreur

[`RangeError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RangeError).

## Quel est le problème&nbsp;?

Le diviseur utilisé pour une [division](/fr/docs/Web/JavaScript/Reference/Operators/Division) ou [le calcul d'un reste](/fr/docs/Web/JavaScript/Reference/Operators/Remainder) est `0n`. Pour les valeurs de type [`Number`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number), la division arithmétique par 0 produit l'infini ([`Infinity`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Infinity)), mais il n'existe pas de telle valeur infinie avec les grands entiers et une erreur est donc déclenchée. Vérifiez si le diviseur vaut `0n` avant d'effectuer la division.

## Exemples

### Division par `0n`

```js example-bad
const a = 1n;
const b = 0n;
const quotient = a / b;
// RangeError: BigInt division by zero
```

À la place, on vérifiera d'abord si le diviseur vaut `0n`, puis on produira une erreur avec un message plus spécifique ou on fournira un résultat différent avec une valeur comme `Infinity` ou `undefined`.

```js example-good
const a = 1n;
const b = 0n;
const quotient = b === 0n ? undefined : a / b;
```

## Voir aussi

- [`BigInt`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
- [Division](/fr/docs/Web/JavaScript/Reference/Operators/Division)
- [Opérateur du reste](/fr/docs/Web/JavaScript/Reference/Operators/Remainder)
