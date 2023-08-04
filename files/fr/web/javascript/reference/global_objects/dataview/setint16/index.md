---
title: DataView.prototype.setInt16()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setInt16
---

{{JSRef}}

La méthode **`setInt16()`** permet d'enregister un entier signé sur 16 bits (type short par analogie avec C) à l'octet indiqué par rapport au début de la {{jsxref("DataView")}}.

{{EmbedInteractiveExample("pages/js/dataview-setint16.html")}}

## Syntaxe

```js
dataview.setInt16(positionOctet, value [, littleEndian])
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

### Utilisation de la méthode `setInt16`

```js
var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.setInt16(1, 3);
dataview.getInt16(1); // 3
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
