---
title: Date.prototype.setUTCSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCSeconds
---

{{JSRef}}

La méthode **`setUTCSeconds()`** définit les secondes pour la date, selon UTC.

{{InteractiveExample("JavaScript Demo: Date.setUTCSeconds()")}}

```js interactive-example
const date1 = new Date("December 31, 1975, 23:15:30 GMT+11:00");

console.log(date1.getUTCSeconds());
// Expected output: 30

date1.setUTCSeconds(39);

console.log(date1.getUTCSeconds());
// Expected output: 39
```

## Syntaxe

```js
dateObj.setUTCSeconds(valeurSecondes[, valeurMs])
```

### Paramètres

- `valeurSecondes`
  - : Un entier entre 0 et 59.
- `valeurMs`
  - : Paramètre optionnel, un nombre entre 0 et 999, représentant les millièmes de secondes.

### Valeur de retour

Le nombre de millisecondes écoulées entre le premier janvier 1970 minuit, UTC et la date mise à jour.

## Description

Si le paramètre `valeurMs` n'est pas utilisée, la valeur renvoyée par la méthode {{jsxref("Date.prototype.getUTCMilliseconds", "getUTCMilliseconds()")}} sera utilisée.

Si un paramètre renseigné est en dehors de l'intervalle attendu, `setUTCSeconds()` tentera de mettre à jour la date en conséquence. Par exemple, si on utilise 100 pour `valeurSecondes`, les minutes de la date seront incrémentées de 1, et 40 sera utilisé pour les secondes.

## Exemples

### Utiliser `setUTCSeconds()`

```js
var leGrandJour = new Date();
leGrandJour.setUTCSeconds(20);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Date.prototype.getUTCSeconds()")}}
- {{jsxref("Date.prototype.setSeconds()")}}
