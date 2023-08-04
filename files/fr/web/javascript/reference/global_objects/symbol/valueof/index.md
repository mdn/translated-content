---
title: Symbol.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Symbol/valueOf
---

{{JSRef}}

La méthode **`valueOf()`** renvoie la valeur primitive correspondant à l'objet `Symbol`.

## Syntaxe

```js
Symbol().valueOf();
```

### Valeur de retour

La valeur primitive de l'objet {{jsxref("Symbol")}} indiqué.

## Description

La méthode `valueOf` de {{jsxref("Symbol")}} renvoie une valeur dont le type est le type primitif symbole à partir de l'objet `Symbol` donné.

JavaScript appelle la méthode `valueOf` afin de convertir l'objet en une valeur primitive. La plupart du temps, il n'est pas nécessaire d'appeler explicitement la méthode `valueOf`. JavaScript l'appelle automatiquement dans les cas où une valeur primitive est attendue.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Object.prototype.valueOf()")}}
