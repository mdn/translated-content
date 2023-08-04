---
title: RegExp.prototype.unicode
slug: Web/JavaScript/Reference/Global_Objects/RegExp/unicode
---

{{JSRef}}

La propriété **`unicode`** indique si le drapeau "`u`" a été utilisé avec l'expression rationnelle. `unicode` est une propriété en lecture seule et liée à une instance d'expression rationnelle.

{{EmbedInteractiveExample("pages/js/regexp-prototype-unicode.html", "taller")}}{{js_property_attributes(0, 0, 1)}}

## Description

La valeur d'`unicode` est un {{jsxref("Boolean")}} et vaut `true` si le drapeau "`u`" a été utilisé, sinon `false`. Le drapeau "`u`" permet d'activer les fonctionnalités liées à Unicode. En utilisant le drapeau "u" toute séquence d'échappement représentant un codet Unicode sera interprétée comme telle.

Cette propriété ne peut pas être modifiée directement.

## Exemples

```js
var regex = new RegExp("\u{61}", "u");

console.log(regex.unicode); // true
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("RegExp.lastIndex")}}
- {{jsxref("RegExp.prototype.global")}}
- {{jsxref("RegExp.prototype.ignoreCase")}}
- {{jsxref("RegExp.prototype.multiline")}}
- {{jsxref("RegExp.prototype.source")}}
- {{jsxref("RegExp.prototype.sticky")}}
