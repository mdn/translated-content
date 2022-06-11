---
title: DataView.prototype.setUint8()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setUint8
tags:
  - DataView
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/DataView/setUint8
original_slug: Web/JavaScript/Reference/Objets_globaux/DataView/setUint8
---
{{JSRef}}

La méthode **`setUint8()`** permet d'enregister un entier non-signé sur 8 bits à l'octet indiqué par rapport au début de la {{jsxref("DataView")}}.

{{EmbedInteractiveExample("pages/js/dataview-setuint8.html")}}

## Syntaxe

```js
dataview.setUint8(positionOctet, valeur)
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

### Utilisation de la méthode `setUint8`

```js
var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.setUint8(1, 3);
dataview.getUint8(1); // 3
```

## Spécifications

| Spécification                                                                                                            | État                             | Commentaires                                    |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ----------------------------------------------- |
| {{SpecName('Typed Array')}}                                                                                     | {{Spec2('Typed Array')}} | Remplacée dans ECMAScript 2015.                 |
| {{SpecName('ES2015', '#sec-dataview.prototype.setuint8', 'DataView.prototype.setUint8')}} | {{Spec2('ES2015')}}         | Définition initiale au sein d'un standard ECMA. |
| {{SpecName('ESDraft', '#sec-dataview.prototype.setuint8', 'DataView.prototype.setUint8')}} | {{Spec2('ESDraft')}}     |                                                 |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.DataView.setUint8")}}

## Voir aussi

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
