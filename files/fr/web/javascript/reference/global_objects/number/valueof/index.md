---
title: Number.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Number/valueOf
---

{{JSRef}}

La méthode **`valueOf()`** renvoie la valeur primitive correspondant à celle représentée par l'objet {{jsxref("Number")}}.

{{InteractiveExample("JavaScript Demo: Number.valueOf()")}}

```js interactive-example
const numObj = new Number(42);
console.log(typeof numObj);
// Expected output: "object"

const num = numObj.valueOf();
console.log(num);
// Expected output: 42

console.log(typeof num);
// Expected output: "number"
```

## Syntaxe

```js
objetNumber.valueOf();
```

### Valeur de retour

Un nombre qui représente la valeur primitive de l'objet {{jsxref("Number")}}.

## Description

Cette méthode est généralement utilisée de façon interne au moteur JavaScript et n'est pas utilisée de façon explicite dans du code JavaScript.

## Exemples

### Utiliser `valueOf`

```js
var numObj = new Number(10);
console.log(typeof numObj); // object

var num = numObj.valueOf();
console.log(num); // 10
console.log(typeof num); // number
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Number.prototype.toSource()")}}
