---
title: Date.prototype.getUTCHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCHours
---

{{JSRef}}

La méthode **`getUTCHours()`** renvoie les heures de la date renseignée, d'après UTC.

{{InteractiveExample("JavaScript Demo: Date.getUTCHours()")}}

```js interactive-example
const date1 = new Date("December 31, 1975, 23:15:30 GMT+11:00");
const date2 = new Date("December 31, 1975, 23:15:30 GMT-11:00");

console.log(date1.getUTCHours());
// Expected output: 12

console.log(date2.getUTCHours());
// Expected output: 10
```

## Syntaxe

```js
dateObj.getUTCHours();
```

### Valeur de retour

Un entier entre 0 et 23 correspondant à l'heure de la date indiquée selon le temps universel.

## Exemples

### Utiliser `getUTCHours()`

L'exemple suivant assigne les heures de la date actuelle à la variable `heures`.

```js
var aujourdhui = new Date();
var heures = aujourdhui.getUTCHours();
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Date.prototype.getHours()")}}
- {{jsxref("Date.prototype.setUTCHours()")}}
