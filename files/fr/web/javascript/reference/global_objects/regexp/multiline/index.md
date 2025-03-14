---
title: RegExp.prototype.multiline
slug: Web/JavaScript/Reference/Global_Objects/RegExp/multiline
---

{{JSRef}}

La propriété **`multiline`** indique si le drapeau (_flag_) "`m`" a été utilisé ou non pour l'expression rationnelle. `multiline` est une propriété liée à l'instance, accessible en lecture seule.

{{InteractiveExample("JavaScript Demo: RegExp.prototype.multiline", "taller")}}

```js interactive-example
const regex1 = new RegExp("^football");
const regex2 = new RegExp("^football", "m");

console.log(regex1.multiline);
// Expected output: false

console.log(regex2.multiline);
// Expected output: true

console.log(regex1.test("rugby\nfootball"));
// Expected output: false

console.log(regex2.test("rugby\nfootball"));
// Expected output: true
```

{{js_property_attributes(0,0,1)}}

## Description

La valeur de `multiline` est un booléen. Elle vaut `true` si le drapeau "`m`" a été utilisé et `false` sinon. Le flag "`m`" indique qu'une chaine de caractères qui s'étend sur plusieurs lignes doit être traitée comme une série de ligne. Ainsi, si "`m`" est utilisé, "`^`" et "`$`" ne correspondent plus au début et à la fin de la chaîne mais aux débuts et aux fins de chaque ligne de la chaîne.

Cette propriété ne peut pas être modifiée directement.

## Exemples

```js
var regex = new RegExp("toto", "m");

console.log(regex.multiline); // true
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("RegExp.prototype.global")}}
- {{jsxref("RegExp.prototype.lastIndex")}}
- {{jsxref("RegExp.prototype.ignoreCase")}}
- {{jsxref("RegExp.prototype.source")}}
- {{jsxref("RegExp.prototype.sticky")}}
