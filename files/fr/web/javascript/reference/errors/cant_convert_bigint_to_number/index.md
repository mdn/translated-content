---
title: "TypeError: can't convert BigInt to number"
slug: Web/JavaScript/Reference/Errors/Cant_convert_BigInt_to_number
l10n:
  sourceCommit: ac4ad443e29371b7c807051e8d10cac4d53d00c4
---

{{jsSidebar("Errors")}}

L'exception JavaScript <i lang="en">"can't convert BigInt to number"</i> se produit lorsqu'une opération arithmétique porte sur un mélange de valeurs [`BigInt`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt) et [`Number`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number).

## Message

```
TypeError: Cannot mix BigInt and other types, use explicit conversions (moteur basé sur V8)
TypeError: BigInts have no unsigned right shift, use >> instead (moteur basé sur V8)
TypeError: can't convert BigInt to number (Firefox)
TypeError: Invalid mix of BigInt and other type in addition/multiplication/…. (Safari)
TypeError: BigInt does not support >>> operator (Safari)
```

## Type d'erreur

[`TypeError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypeError).

## Quel est le problème&nbsp;?

Les deux opérandes d'un opérateur arithmétique doivent tous les deux être des grands entiers ou tous les deux être des nombres. Si une opération porte sur un mélange des deux, on ne sait pas si le résultat devrait être un grand entier ou un nombre, car les deux cas causeraient une perte de précision.

L'erreur peut également se produire lorsque [l'opérateur de décalage non signé à droite (`>>>`)](/fr/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift) est utilisé entre deux valeurs `BigInt`. Dans Firefox, le message est le même&nbsp;: <i lang="en">"can't convert BigInt to number"</i>.

## Exemples

### Mélanger des nombres et des grands entiers dans des opérations

```js example-bad
const somme = 1n + 1;
// TypeError: can't convert BigInt to number
```

À la place, on convertira explicitement l'un des deux opérandes en nombre ou en grand entier.

```js example-good
const somme = 1n + BigInt(1);
const somme2 = Number(1n) + 1;
```

### Utiliser un décalage à droite non signé sur des grands entiers

```js example-bad
const a = 4n >>> 2n;
// TypeError: can't convert BigInt to number
```

On utilisera un décalage à droite normal à la place.

```js example-good
const a = 4n >> 2n;
```

## Voir aussi

- [`BigInt`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
