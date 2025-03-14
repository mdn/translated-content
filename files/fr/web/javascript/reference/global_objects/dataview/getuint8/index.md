---
title: DataView.prototype.getUint8()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getUint8
---

{{JSRef}}

La méthode **`getUint8()`** permet de lire un entier non-signé sur 8 bits à l'octet donné par rapport au début de la {{jsxref("DataView")}}.

{{InteractiveExample("JavaScript Demo: DataView.getUint8()")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer);
view.setUint8(1, 255); // Max unsigned 8-bit integer

console.log(view.getUint8(1));
// Expected output: 255
```

## Syntaxe

```js
dataview.getUint8(positionOctet);
```

### Paramètres

- `positionOctet`
  - : La position, exprimée en nombre d'octets depuis le début de la vue, à laquelle lire les données.

### Valeur de retour

Un entier sur 8 bits, non-signé.

### Erreurs renvoyées

- {{jsxref("RangeError")}}
  - : Renvoyée si `positionOctet` est tel qu'il est en dehors de la vue.

## Description

Il n'y a pas de contrainte d'alignement, les valeurs codées sur plusieurs octets peuvent être obtenues depuis n'importe quelle position.

## Exemples

### Utilisation de la méthode `getUint8`

```js
var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.getUint8(1); // 0
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
