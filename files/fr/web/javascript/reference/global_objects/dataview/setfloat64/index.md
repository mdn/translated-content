---
title: DataView.prototype.setFloat64()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setFloat64
tags:
  - DataView
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/DataView/setFloat64
original_slug: Web/JavaScript/Reference/Objets_globaux/DataView/setFloat64
---
{{JSRef}}

La méthode **`setFloat64()`** permet d'enregistrer un nombre flottant signé sur 64 bits (type _double_ par analogie avec C) à l'octet indiqué par rapport au début de la {{jsxref("DataView")}}.

{{EmbedInteractiveExample("pages/js/dataview-setfloat64.html")}}

## Syntaxe

```js
dataview.setFloat64(positionOctet, value [, littleEndian])
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

### Utilisation de la méthode `setFloat64`

```js
var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.setFloat64(0, 3);
dataview.getFloat64(0); // 3
```

## Spécifications

| Spécification                                                                                                                | État                             | Commentaires                                    |
| ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------------------------------------------- |
| {{SpecName('Typed Array')}}                                                                                         | {{Spec2('Typed Array')}} | Remplacée dans ECMAScript 2015.                 |
| {{SpecName('ES2015', '#sec-dataview.prototype.setfloat64', 'DataView.prototype.setFloat64')}} | {{Spec2('ES2015')}}         | Définition initiale au sein d'un standard ECMA. |
| {{SpecName('ESDraft', '#sec-dataview.prototype.setfloat64', 'DataView.prototype.setFloat64')}} | {{Spec2('ESDraft')}}     |                                                 |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.DataView.setFloat64")}}

## Voir aussi

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
