---
title: Date.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Date/valueOf
---

{{JSRef}}

La méthode **`valueOf()`** renvoie la valeur primitive d'un objet {{jsxref("Date")}}.

{{InteractiveExample("JavaScript Demo: Date.valueOf()")}}

```js interactive-example
const date1 = new Date(Date.UTC(96, 1, 2, 3, 4, 5));

console.log(date1.valueOf());
// Expected output: 823230245000

const date2 = new Date("02 Feb 1996 03:04:05 GMT");

console.log(date2.valueOf());
// Expected output: 823230245000
```

## Syntaxe

```js
date.valueOf();
```

### Valeur de retour

Le nombre de millisecondes écoulées entre le premier janvier 1970, minuit UTC et la date indiquée.

## Description

La méthode `valueOf()` renvoie la valeur primitive d'un objet `Date` sous forme d'un nombre. Ce nombre correspond au nombre de millisecondes écoulées depuis le 1 janvier 1970 00h00 GMT.

D'un point de vue fonctionnel, cette méthode est équivalente à {{jsxref("Date.prototype.getTime()")}}.

Cette méthode est souvent appelée en interne par le moteur JavaScript et n'est pas utilisée de façon explicite dans des scripts.

## Exemples

### Utiliser `valueOf()`

```js
var x = new Date(56, 6, 17);
var maVar = x.valueOf(); // maVar vaut -424713600000
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Object.prototype.valueOf()")}}
- {{jsxref("Date.prototype.getTime()")}}
