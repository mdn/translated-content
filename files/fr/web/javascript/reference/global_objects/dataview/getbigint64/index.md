---
title: DataView.prototype.getBigInt64()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getBigInt64
tags:
  - BigInt
  - DataView
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/DataView/getBigInt64
original_slug: Web/JavaScript/Reference/Objets_globaux/DataView/getBigInt64
---
{{JSRef}}

La méthode **`getBigInt64()`** permet de lire un entier signé sur 64 bits (type _long long_ par analogie avec C) à l'octet donné par rapport au début de {{jsxref("DataView")}}.

{{EmbedInteractiveExample("pages/js/dataview-getbigint64.html")}}

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

| Spécification                                                                                                                     | État | Commentaires |
| --------------------------------------------------------------------------------------------------------------------------------- | ---- | ------------ |
| [Proposition pour `DataView.prototype.getBigInt64()`](https://tc39.github.io/proposal-bigint/#sec-dataview.prototype.getbigint64) |      |              |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.DataView.getBigInt64")}}

## Voir aussi

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("BigInt")}}
