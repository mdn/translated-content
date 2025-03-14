---
title: Date.prototype.getUTCMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMonth
---

{{JSRef}}

La méthode **`getUTCMonth()`** renvoie le mois de la date renseignée, d'après UTC. La numérotation des mois commence à 0 pour le premier mois de l'année.

{{InteractiveExample("JavaScript Demo: Date.getUTCMonth()")}}

```js interactive-example
const date1 = new Date("December 31, 1975, 23:15:30 GMT+11:00");
const date2 = new Date("December 31, 1975, 23:15:30 GMT-11:00");

// December
console.log(date1.getUTCMonth());
// Expected output: 11

// January
console.log(date2.getUTCMonth());
// Expected output: 0
```

## Syntaxe

```js
dateObj.getUTCMonth();
```

### Valeur de retour

Un entier entre 0 et 11 correspondant au mois dans l'année de la date indiquée selon le temps universel (0 pour janvier, 1 pour février, 2 pour mars, et ainsi de suite…).

## Exemples

### Utiliser `getUTCMonth()`

L'exemple suivant assigne le mois de la date actuelle à la variable `mois`.

```js
var aujourdhui = new Date();
var mois = aujourdhui.getUTCMonth();
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Date.prototype.getMonth()")}}
- {{jsxref("Date.prototype.setUTCMonth()")}}
