---
title: Date.prototype.getUTCMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMinutes
---

{{JSRef}}

La méthode **`getUTCMinutes()`** renvoie les minutes de la date renseignée, d'après UTC.

{{InteractiveExample("JavaScript Demo: Date.getUTCMinutes()")}}

```js interactive-example
const date1 = new Date("1 January 2000 03:15:30 GMT+07:00");
const date2 = new Date("1 January 2000 03:15:30 GMT+03:30");

console.log(date1.getUTCMinutes()); // 31 Dec 1999 20:15:30 GMT
// Expected output: 15

console.log(date2.getUTCMinutes()); // 31 Dec 1999 23:45:30 GMT
// Expected output: 45
```

## Syntaxe

```js
dateObj.getUTCMinutes();
```

### Valeur de retour

Un entier entre 0 et 59 correspondant au nombre de minutes pour la date indiquée selon le temps universel.

## Exemples

### Utiliser `getUTCMinutes`

L'exemple suivant assigne les minutes de la date actuelle à la variable `minutes`.

```js
var aujourdhui = new Date();
var minutes = aujourdhui.getUTCMinutes();
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Date.prototype.getMinutes()")}}
- {{jsxref("Date.prototype.setUTCMinutes()")}}
