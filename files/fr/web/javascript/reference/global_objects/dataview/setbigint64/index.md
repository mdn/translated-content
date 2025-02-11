---
title: DataView.prototype.setBigInt64()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setBigInt64
---

{{JSRef}}

La méthode **`setBigInt64()`** permet d'enregister un entier signé sur 64 bits (type _long long_ par analogie avec C) à l'octet indiqué par rapport au début de la {{jsxref("DataView")}}.

{{InteractiveExample("JavaScript Demo: DataView.setBigInt64()")}}

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
dataview.setBigInt64(positionOctet, value [, littleEndian])
```

### Paramètres

- `positionOctet`
  - : La position, exprimée en numéro d'octet, à partir du début de la vue à laquelle enregistrer la donnée.
- `valeur`
  - : La valeur à enregistrer
- `littleEndian`
  - : {{optional_inline}} Indique si la donnée sur 64 bits est enregistrée {{Glossary("Endianness", "dans l'ordre des octets de poids faibles")}}. Si ce paramètre vaut `false` ou `undefined`, l'ordre sera celui des octets de poids forts.

### Valeur de retour

{{jsxref("undefined")}}.

### Erreurs renvoyées

- {{jsxref("RangeError")}}
  - : Renvoyée si `positionOctet` est tel que l'enregistrement sera fait en dehors de la vue.

## Exemples

### Utilisation de la méthode `setBigInt64()`

```js
var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.setBigInt64(0, 3n);
dataview.getInt32(0); // 3n
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("BigInt")}}
