---
title: "RangeError: BigInt negative exponent"
slug: Web/JavaScript/Reference/Errors/BigInt_negative_exponent
l10n:
  sourceCommit: ac4ad443e29371b7c807051e8d10cac4d53d00c4
---

{{jsSidebar("Errors")}}

L'exception JavaScript <i lang="en">"BigInt negative exponent"</i> se produit lorsqu'une valeur [`BigInt`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt) est élevée à une puissance négative exprimée avec une valeur `BigInt`.

## Message

```
RangeError: Exponent must be positive (moteur JavaScript basé sur V8)
RangeError: BigInt negative exponent (Firefox)
RangeError: Negative exponent is not allowed (Safari)
```

## Type d'erreur

[`RangeError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RangeError).

## Quel est le problème&nbsp;?

L'exposant utilisé pour une opération [d'exponentiation](/fr/docs/Web/JavaScript/Reference/Operators/Exponentiation) doit être positif. Un exposant négatif conduirait à prendre un inverse de la base, le résultat sera alors compris entre `-1` et `1` pour presque tous les cas, ce qui finirait arrondi en `0n`. Pour éviter de tels problèmes, les exposants négatifs ne sont pas autorisés. Vérifiez le signe de l'exposant avant de réaliser l'exponentiation.

## Exemples

### Utiliser un grand entier négatif comme exposant

```js example-bad
const a = 1n;
const b = -1n;
const c = a ** b;
// RangeError: BigInt negative exponent
```

À la place, on vérifiera au préalable si l'exposant est négatif, si c'est le cas, on produira un message d'erreur plus spécifique ou on utilisera une valeur alternative comme `0n` ou `undefined`.

```js example-good
const a = 1n;
const b = -1n;
const quotient = b >= 0n ? a ** b : 0n;
```

## Voir aussi

- [`BigInt`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
- [Exponentiation](/fr/docs/Web/JavaScript/Reference/Operators/Exponentiation)
