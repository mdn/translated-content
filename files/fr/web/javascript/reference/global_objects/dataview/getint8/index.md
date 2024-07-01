---
title: DataView.prototype.getInt8()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getInt8
---

{{JSRef}}

La méthode **`getInt8()`** permet de lire un entier signé sur 8 bits à l'octet donné par rapport au début de {{jsxref("DataView")}}.

{{EmbedInteractiveExample("pages/js/dataview-getint8.html")}}

## Syntaxe

```js
dataview.getInt8(positionOctet);
```

### Paramètres

- `positionOctet`
  - : La position, exprimée en nombre d'octets depuis le début de la vue, à laquelle lire les données.

### Valeur de retour

Un entier signé sur 8 bits.

### Erreurs renvoyées

- {{jsxref("RangeError")}}
  - : Renvoyée si `positionOctet` est tel qu'il est en dehors de la vue.

## Description

Il n'y a pas de contrainte d'alignement, les valeurs codées sur plusieurs octets peuvent être obtenues depuis n'importe quelle position.

## Exemples

### Utilisation de la méthode `getInt8`

```js
var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.getInt8(1); // 0
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
