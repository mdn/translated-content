---
title: "SyntaxError: invalid BigInt syntax"
slug: Web/JavaScript/Reference/Errors/Invalid_BigInt_syntax
l10n:
  sourceCommit: ac4ad443e29371b7c807051e8d10cac4d53d00c4
---

{{jsSidebar("Errors")}}

L'exception JavaScript <i lang="en">"invalid BigInt syntax"</i> se produit lors d'une tentative de conversion d'une chaîne de caractères en [`BigInt`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt) qui échoue, parce que la chaîne de caractères ne peut pas être analysée comme un nombre entier.

## Message

```
SyntaxError: Cannot convert x to a BigInt (moteur JavaScript basé sur V8)
SyntaxError: invalid BigInt syntax (Firefox)
SyntaxError: Failed to parse String to BigInt (Safari)
```

## Type d'erreur

[`SyntaxError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError).

## Quel est le problème&nbsp;?

Lorsqu'on utilise la fonction [`BigInt()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) afin de convertir une chaîne de caractères en grand entier, la chaîne de caractères sera analysée comme du code source et la valeur résultante doit être un nombre entier.

## Exemples

### Exemples invalides

```js example-bad
const a = BigInt("1.5");
const b = BigInt("1n");
const c = BigInt.asIntN(4, "8n");
// SyntaxError: invalid BigInt syntax
```

### Exemples valides

```js example-good
const a = BigInt("1");
const b = BigInt("  1   ");
const c = BigInt.asIntN(4, "8");
```

## Voir aussi

- [`BigInt`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
