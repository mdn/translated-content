---
title: DataView.prototype.getFloat64()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getFloat64
---

{{JSRef}}

La méthode **`getFloat64()`** permet de lire un entier signé sur 64 bits (type _double_ par analogie avec C) à l'octet donné par rapport au début de {{jsxref("DataView")}}.

{{EmbedInteractiveExample("pages/js/dataview-getfloat64.html")}}

## Syntaxe

```js
dataview.getFloat64(positionOctet [, littleEndian])
```

### Paramètres

- `positionOctet`
  - : La position, exprimée en nombre d'octets depuis le début de la vue, à laquelle lire les données.
- `littleEndian`
  - : {{optional_inline}} indique si la valeur sur 64 bits est enregistrée dans l'ordre des octets {{Glossary("Endianness", "de poids faible")}}. Si le paramètre vaut `false` ou `undefined`, la valeur sera lue dans l'ordre des octets de poids forts.

### Valeur de retour

Un nombre flottant signé sur 64 bits.

### Erreurs renvoyées

- {{jsxref("RangeError")}}
  - : Renvoyée si `positionOctet` est tel qu'il est en dehors de la vue.

## Description

Il n'y a pas de contrainte d'alignement, les valeurs codées sur plusieurs octets peuvent être obtenues depuis n'importe quelle position.

## Exemples

### Utilisation de la méthode `getFloat64`

```js
var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.getFloat64(0); // 0
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
