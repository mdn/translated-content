---
title: RegExp.prototype.ignoreCase
slug: Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase
---

{{JSRef}}

La propriété **`ignoreCase`** indique si le drapeau (_flag_) "`i`" est utilisé ou non pour cette expression rationnelle. `ignoreCase` est une propriété accessible en lecture seule d'une instance d'expression rationnelle donnée.

{{EmbedInteractiveExample("pages/js/regexp-prototype-ignorecase.html")}}{{js_property_attributes(0,0,1)}}

## Description

La valeur de `ignoreCase` est un booléen. Elle vaut `true` si le flag "`i`" a été utilisé et `false` sinon. Le drapeau "`i`" indique si la recherche de correspondances doit être sensible à la casse ou non.

Cette propriété ne peut pas être modifiée directement.

## Exemples

```js
var regex = new RegExp("toto", "i");

console.log(regex.ignoreCase); // true
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("RegExp.prototype.global")}}
- {{jsxref("RegExp.prototype.lastIndex")}}
- {{jsxref("RegExp.prototype.multiline")}}
- {{jsxref("RegExp.prototype.source")}}
- {{jsxref("RegExp.prototype.sticky")}}
