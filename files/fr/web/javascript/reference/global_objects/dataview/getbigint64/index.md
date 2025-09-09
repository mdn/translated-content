---
title: DataView.prototype.getBigInt64()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getBigInt64
---

{{JSRef}}

La méthode **`getBigInt64()`** permet de lire un entier signé sur 64 bits (type _long long_ par analogie avec C) à l'octet donné par rapport au début de {{jsxref("DataView")}}.

{{InteractiveExample("JavaScript Demo: DataView.getBigInt64()")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

// Highest possible BigInt value that fits in a signed 64-bit integer
const max = 2n ** (64n - 1n) - 1n;

const view = new DataView(buffer);
view.setBigInt64(1, max);

console.log(view.getBigInt64(1));
// Expected output: 9223372036854775807n
```

## Syntaxe

```js
dataview.getBigInt64(positionOctet [, littleEndian])
```

### Paramètres

- `positionOctet`
  - : La position, exprimée en nombre d'octets depuis le début de la vue, à laquelle lire les données.
- `littleEndian`
  - : {{optional_inline}} indique si la valeur sur 64 bits est enregistrée dans l'ordre des octets {{Glossary("Endianness", "de poids faible")}}. Si le paramètre vaut `false` ou `undefined`, la valeur sera lue dans l'ordre des octets de poids forts.

### Valeur de retour

Une valeur {{jsxref("BigInt")}}

### Erreurs renvoyées

- {{jsxref("RangeError")}}
  - : Renvoyée si `positionOctet` est tel qu'il est en dehors de la vue.

## Description

Il n'y a pas de contrainte d'alignement, les valeurs codées sur plusieurs octets peuvent être obtenues depuis n'importe quelle position.

## Exemples

### Utilisation de la méthode `getBigInt64()`

```js
var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.getBigInt64(0); // 0n
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("BigInt")}}
