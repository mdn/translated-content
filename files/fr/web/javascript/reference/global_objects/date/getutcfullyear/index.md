---
title: Date.prototype.getUTCFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCFullYear
---

{{JSRef}}

La méthode **`getUTCFullYear()`** renvoie l'année de la date renseignée, d'après UTC.

{{InteractiveExample("JavaScript Demo: Date.getUTCFullYear()")}}

```js interactive-example
const date1 = new Date("December 31, 1975, 23:15:30 GMT+11:00");
const date2 = new Date("December 31, 1975, 23:15:30 GMT-11:00");

console.log(date1.getUTCFullYear());
// Expected output: 1975

console.log(date2.getUTCFullYear());
// Expected output: 1976
```

## Syntaxe

```js
dateObj.getUTCFullYear();
```

### Valeur de retour

La valeur renvoyée par `getUTCFullYear()` est un nombre correspondant à l'année de la date indiquée selon le temps universel. Pour les dates entre les années 1000 et 9999, `getUTCFullYear()` renvoie un nombre à quatre chiffres, par exemple 1995.

## Exemples

### Utiliser `getUTCFullYear()`

L'exemple suivant assigne une valeur à 4 chiffres, l'année courante, à la variable `annee`.

```js
var aujourdhui = new Date();
var annee = aujourdhui.getUTCFullYear();
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Date.prototype.getFullYear()")}}
- {{jsxref("Date.prototype.setFullYear()")}}
