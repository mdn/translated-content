---
title: Date.prototype.getUTCDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCDate
---

{{JSRef}}

La méthode **`getUTCDate()`** renvoie le jour du mois pour la date renseignée d'après UTC.

{{InteractiveExample("JavaScript Demo: Date.getUTCDate()")}}

```js interactive-example
const date1 = new Date("August 19, 1975 23:15:30 GMT+11:00");
const date2 = new Date("August 19, 1975 23:15:30 GMT-11:00");

console.log(date1.getUTCDate());
// Expected output: 19

console.log(date2.getUTCDate());
// Expected output: 20
```

## Syntaxe

```js
dateObj.getUTCDate();
```

### Valeur de retour

La valeur renseignée par `getUTCDate()` est un entier entre 1 et 31 pour le jour du mois de la date indiquée selon le temps universel.

## Exemples

### Utiliser `getUTCDate()`

L'exemple suivant assigne le jour du mois pour la date actuelle, à la variable `jour`.

```js
var aujourdhui = new Date();
var jour = aujourdhui.getUTCDate();
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Date.prototype.getDate()")}}
- {{jsxref("Date.prototype.getUTCDay()")}}
- {{jsxref("Date.prototype.setUTCDate()")}}
