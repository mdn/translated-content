---
title: Date.prototype.setTime()
slug: Web/JavaScript/Reference/Global_Objects/Date/setTime
---

{{JSRef}}

La méthode **`setTime()`** met l'objet {{jsxref("Date")}} à jour par rapport au nombre de millisecondes depuis le 1 janvier 1970, 00:00:00 UTC.

{{InteractiveExample("JavaScript Demo: Date.setTime()")}}

```js interactive-example
const launchDate = new Date("July 1, 1999, 12:00:00");
const futureDate = new Date();
futureDate.setTime(launchDate.getTime());

console.log(futureDate);
// Expected output: "Thu Jul 01 1999 12:00:00 GMT+0200 (CEST)"

const fiveMinutesInMillis = 5 * 60 * 1000;
futureDate.setTime(futureDate.getTime() + fiveMinutesInMillis);

console.log(futureDate);
// Expected output: "Thu Jul 01 1999 12:05:00 GMT+0200 (CEST)"
// Note: your timezone may vary
```

## Syntaxe

```js
dateObj.setTime(valeurTemps);
```

### Paramètres

- `valeurTemps`
  - : Un entier représentant le nombre de millisecondes depuis le 1 janvier 1970, 00:00:00 UTC.

### Valeur de retour

Le nombre de millisecondes écoulées entre le premier janvier 1970 à minuit, UTC et la date mise à jour (ce qui correspond à la valeur de l'argument).

## Description

La méthode `setTime()` est utilisée afin d'assigner une date à un autre objet {{jsxref("Date")}}.

## Exemples

### Utiliser `setTime()`

```js
var leGrandJour = new Date("July 1, 1999");
var pareilQueGrandJour = new Date();
pareilQueGrandJour.setTime(leGrandJour.getTime());
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Date.prototype.getTime()")}}
- {{jsxref("Date.prototype.setUTCHours()")}}
