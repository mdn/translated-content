---
title: RegExp.prototype.global
slug: Web/JavaScript/Reference/Global_Objects/RegExp/global
---

{{JSRef}}

La propriété **`global`** indique si le marqueur (_flag_) "`g`" est utilisé pour l'expression rationnelle. `global` est une propriété accessible en lecture seule pour une expression rationnelle donnée.

{{EmbedInteractiveExample("pages/js/regexp-prototype-global.html")}}{{js_property_attributes(0,0,1)}}

## Description

La valeur de `global` est un booléen. Elle vaut `true` si le flag "`g`" a été utilisé, `false` sinon. Le _flag_ "`g`" indique que l'expression rationnelle recherchera toutes les correspondances possibles d'une chaîne de caractères. Lorsqu'une expression rationnelle utilise à la fois les marqueurs `global` et `sticky` (respectivement `"g"` et `"y"`), elle ignorera le marqueur `global`.

Cette propriété ne peut pas être modifiée directement.

## Exemples

```js
var regex = new RegExp("toto", "g");

console.log(regex.global); // true

var str = "totoexempletoto";
var str1 = str.replace(regex, "");

console.log(str1); // affichera "exemple" dans la console

var regex1 = new RegExp("toto");
var str2 = str.replace(regex1, "");

console.log(str2); // affichera "exempletoto" dans la console
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("RegExp.prototype.ignoreCase")}}
- {{jsxref("RegExp.prototype.lastIndex")}}
- {{jsxref("RegExp.prototype.multiline")}}
- {{jsxref("RegExp.prototype.source")}}
- {{jsxref("RegExp.prototype.sticky")}}
