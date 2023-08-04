---
title: "TypeError: can't convert x to BigInt"
slug: Web/JavaScript/Reference/Errors/Cant_convert_x_to_BigInt
l10n:
  sourceCommit: ac4ad443e29371b7c807051e8d10cac4d53d00c4
---

{{jsSidebar("Errors")}}

L'exception JavaScript <i lang="en">"x can't be converted to BigInt"</i> se produit lorsqu'on essaie de convertir [un symbole](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol), [`null`](/fr/docs/Web/JavaScript/Reference/Operators/null), ou [`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined) en une valeur [`BigInt`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt), ou si une opération qui s'applique à un paramètre `BigInt` reçoit un nombre.

## Message

```
TypeError: Cannot convert null to a BigInt (moteur JavaScript basé sur V8)
TypeError: can't convert null to BigInt (Firefox)
TypeError: Invalid argument type in ToBigInt operation (Safari)
```

## Type d'erreur

[`TypeError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypeError).

## Quel est le problème&nbsp;?

Lorsqu'on utilise la fonction [`BigInt()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) afin de convertir une valeur en grand entier, la valeur doit d'abord être convertie en une valeur primitive. Une fois cette conversion effectuée, si la valeur n'est pas un grand entier, une chaîne de caractères, un nombre ou un booléen, une erreur est levée.

Certaines opérations, comme [`BigInt.asIntN()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt/asIntN), prennent uniquement un grand entier en paramètre, leur passer un nombre à la place déclenchera la même erreur.

## Exemples

### Utiliser `BigInt()` sur des valeurs invalides

```js example-bad
const a = BigInt(null);
// TypeError: can't convert null to BigInt
const b = BigInt(undefined);
// TypeError: can't convert undefined to BigInt
const c = BigInt(Symbol("1"));
// TypeError: can't convert Symbol("1") to BigInt
```

```js example-good
const a = BigInt(1);
const b = BigInt(true);
const c = BigInt("1");
const d = BigInt(Symbol("1").description);
```

> **Note :** Le simple fait de convertir la valeur en un nombre ou en une chaîne de caractères à l'aide de [`String()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/String) ou [`Number()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/Number) avant de la passer à `BigInt()` ne sera généralement pas suffisant pour éviter toutes les erreurs. En effet, si la chaîne n'est pas une chaîne de caractères valide pour décrire un nombre entier, c'est une exception [`SyntaxError`](/fr/docs/Web/JavaScript/Reference/Errors/Invalid_BigInt_syntax) qui sera levée&nbsp;; si le nombre n'est pas un entier (c'est notamment le cas de [`NaN`](/fr/docs/Web/JavaScript/Reference/Global_Objects/NaN)), c'est une exception [`RangeError`](/fr/docs/Web/JavaScript/Reference/Errors/Cant_be_converted_to_BigInt_because_it_isnt_an_integer) qui sera levée. Si le domaine de la valeur d'entrée est inconnu, on veillera à la valider correctement avant d'utiliser `BigInt()`.

### Passer un nombre à une opération qui utilise un grand entier

```js example-bad
const a = BigInt.asIntN(4, 8);
// TypeError: can't convert 8 to BigInt
const b = new BigInt64Array(3).fill(3);
// TypeError: can't convert 3 to BigInt
```

```js example-good
const a = BigInt.asIntN(4, 8n);
const b = new BigInt64Array(3).fill(3n);
```

## Voir aussi

- [`BigInt()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt)
