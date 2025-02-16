---
title: Date.prototype.getUTCDay()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCDay
---

{{JSRef}}

La méthode **`getUTCDay()`** renvoie le jour de la semaine pour la date renseignée d'après UTC. La numérotation commence à 0, et dimanche est considéré comme le premier jour de la semaine.

{{InteractiveExample("JavaScript Demo: Date.getUTCDay()")}}

```js interactive-example
const date1 = new Date("August 19, 1975 23:15:30 GMT+11:00");
const date2 = new Date("August 19, 1975 23:15:30 GMT-11:00");

// Tuesday
console.log(date1.getUTCDay());
// Expected output: 2

// Wednesday
console.log(date2.getUTCDay());
// Expected output: 3
```

## Syntaxe

```js
dateObj.getUTCDay();
```

### Valeur de retour

La valeur renvoyée par `getUTCDay()` est un entier correspondant au jour de la semaine de la date indiquée selon le temps universel (0 pour dimanche, 1 pour lundi, 2 pour mardi, et ainsi de suite).

## Exemples

### Utiliser `getUTCDay()`

L'exemple suivant assigne le jour de la semaine de la date actuelle à la variable `jourSemaine`.

```js
var aujourdhui = new Date();
var jourSemaine = aujourdhui.getUTCDay();
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.getDay()")}}
- {{jsxref("Date.prototype.setUTCDate()")}}
