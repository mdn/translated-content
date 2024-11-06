---
title: DataView.prototype.getUint16()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getUint16
---

{{JSRef}}

La méthode **`getUint16()`** permet de lire un entier non-signé sur 16 bits (type _unsigned short_ par analogie avec C) à l'octet donné par rapport au début de {{jsxref("DataView")}}.

{{EmbedInteractiveExample("pages/js/dataview-getuint16.html")}}

## Syntaxe

```js
dataview.getUint16(positionOctet [, littleEndian])
```

### Paramètres

- `positionOctet`
  - : La position, exprimée en nombre d'octets depuis le début de la vue, à laquelle lire les données.
- `littleEndian`
  - : {{optional_inline}} indique si la valeur sur 16 bits est enregistrée dans l'ordre des octets {{Glossary("Endianness", "de poids faible")}}. Si le paramètre vaut `false` ou `undefined`, la valeur sera lue dans l'ordre des octets de poids forts.

### Valeur de retour

Un entier sur 16 bits non signé.

### Erreurs renvoyées

- {{jsxref("RangeError")}}
  - : Renvoyée si `positionOctet` est tel qu'il est en dehors de la vue.

## Description

Il n'y a pas de contrainte d'alignement, les valeurs codées sur plusieurs octets peuvent être obtenues depuis n'importe quelle position.

## Exemples

### Utilisation de la méthode `getUint16`

```js
var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.getUint16(1); // 0
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
