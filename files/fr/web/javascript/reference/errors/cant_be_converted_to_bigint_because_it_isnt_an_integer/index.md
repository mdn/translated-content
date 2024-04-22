---
title: "RangeError: x can't be converted to BigInt because it isn't an integer"
slug: Web/JavaScript/Reference/Errors/Cant_be_converted_to_BigInt_because_it_isnt_an_integer
l10n:
  sourceCommit: ac4ad443e29371b7c807051e8d10cac4d53d00c4
---

{{jsSidebar("Errors")}}

L'exception JavaScript <i lang="en">"x can't be converted to BigInt because it isn't an integer"</i> se produit lorsque la fonction [`BigInt()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) est utilisée sur un nombre qui n'est pas entier.

## Message

```
RangeError: The number 1.5 cannot be converted to a BigInt because it is not an integer (moteur basé sur V8 et Firefox)
RangeError: Not an integer (Safari)
```

## Type d'erreur

[`RangeError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RangeError).

## Quel est le problème&nbsp;?

Lorsqu'on utilise la fonction [`BigInt()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) afin de convertir un nombre en un grand entier, le nombre doit être une valeur entière (telle que [`Number.isInteger()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger) renvoie `true`).

## Exemples

### Exemples invalides

```js example-bad
const a = BigInt(1.5);
// RangeError: The number 1.5 cannot be converted to a BigInt because it is not an integer
const b = BigInt(NaN);
// RangeError: NaN cannot be converted to a BigInt because it is not an integer
```

### Exemples valides

```js example-good
const a = BigInt(1);
```

## Voir aussi

- [`BigInt()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt)
- [`Number.isInteger()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger)
