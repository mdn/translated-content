---
title: DataView.prototype.setUint16()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setUint16
---

{{JSRef}}

La méthode **`setUint16()`** permet d'enregister un entier non-signé sur 16 bits (type _unsigned short_ par analogie avec C) à l'octet indiqué par rapport au début de la {{jsxref("DataView")}}.

{{InteractiveExample("JavaScript Demo: DataView.setUint16()")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer);
view.setUint16(1, 65535); // Max unsigned 16-bit integer

console.log(view.getUint16(1));
// Expected output: 65535
```

## Syntaxe

```js
dataview.setUint16(positionOctet, valeur [, littleEndian])
```

### Paramètres

- `positionOctet`
  - : La position, exprimée en numéro d'octet, à partir du début de la vue à laquelle enregistrer la donnée.
- `valeur`
  - : La valeur à enregistrer
- `littleEndian`
  - : {{optional_inline}} Indique si la donnée sur 16 bits est enregistrée {{Glossary("Endianness", "dans l'ordre des octets de poids faibles")}}. Si ce paramètre vaut `false` ou `undefined`, l'ordre sera celui des octets de poids forts.

### Valeur de retour

{{jsxref("undefined")}}.

### Erreurs renvoyées

- {{jsxref("RangeError")}}
  - : Renvoyée si `positionOctet` est tel que l'enregistrement sera fait en dehors de la vue.

## Exemples

### Utilisation de la méthode `setUint16`

```js
var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.setUint16(1, 3);
dataview.getUint16(1); // 3
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
