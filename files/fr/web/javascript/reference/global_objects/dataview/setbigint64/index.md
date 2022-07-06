---
title: DataView.prototype.setBigInt64()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setBigInt64
tags:
  - BigInt
  - DataView
  - JavaScript
  - Méthode
  - Reference
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/DataView/setBigInt64
original_slug: Web/JavaScript/Reference/Objets_globaux/DataView/setBigInt64
---
{{JSRef}}

La méthode **`setBigInt64()`** permet d'enregister un entier signé sur 64 bits (type _long long_ par analogie avec C) à l'octet indiqué par rapport au début de la {{jsxref("DataView")}}.

{{EmbedInteractiveExample("pages/js/dataview-setbigint64.html")}}

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

| Spécification                                                                                                                     | État |
| --------------------------------------------------------------------------------------------------------------------------------- | ---- |
| [Proposition pour `DataView.prototype.setBigInt64()`](https://tc39.github.io/proposal-bigint/#sec-dataview.prototype.setbigint64) |      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.DataView.setBigInt64")}}

## Voir aussi

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("BigInt")}}
