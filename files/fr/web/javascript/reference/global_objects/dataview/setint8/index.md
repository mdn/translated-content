---
title: DataView.prototype.setInt8()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setInt8
---

{{JSRef}}

La méthode **`setInt8()`** permet d'enregister un entier signé sur 8 bits à l'octet indiqué par rapport au début de la {{jsxref("DataView")}}.

{{EmbedInteractiveExample("pages/js/dataview-setint8.html")}}

## Syntaxe

```js
dataview.setInt8(positionOctet, valeur);
```

### Paramètres

- `positionOctet`
  - : La position, exprimée en numéro d'octet, à partir du début de la vue à laquelle enregistrer la donnée.
- `valeur`
  - : La valeur à enregistrer.

### Valeur de retour

{{jsxref("undefined")}}.

### Erreurs renvoyées

- {{jsxref("RangeError")}}
  - : Renvoyée si `positionOctet` est tel que l'enregistrement sera fait en dehors de la vue.

## Exemples

### Utilisation de la méthode `setInt8`

```js
var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.setInt8(1, 3);
dataview.getInt8(1); // 3
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
