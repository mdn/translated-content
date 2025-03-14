---
title: RegExp.prototype.ignoreCase
slug: Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase
---

{{JSRef}}

La propriété **`ignoreCase`** indique si le drapeau (_flag_) "`i`" est utilisé ou non pour cette expression rationnelle. `ignoreCase` est une propriété accessible en lecture seule d'une instance d'expression rationnelle donnée.

{{InteractiveExample("JavaScript Demo: RegExp.prototype.ignoreCase")}}

```js interactive-example
const regex1 = new RegExp("foo");
const regex2 = new RegExp("foo", "i");

console.log(regex1.test("Football"));
// Expected output: false

console.log(regex2.ignoreCase);
// Expected output: true

console.log(regex2.test("Football"));
// Expected output: true
```

{{js_property_attributes(0,0,1)}}

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
