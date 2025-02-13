---
title: Date.prototype.setUTCMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCMonth
---

{{JSRef}}

La méthode **`setUTCMonth()`** définit le mois de la date, selon UTC.

{{InteractiveExample("JavaScript Demo: Date.setUTCMonth()")}}

```js interactive-example
const event = new Date("December 31, 1975 23:15:30 GMT-3:00");

console.log(event.toUTCString());
// Expected output: "Thu, 01 Jan 1976 02:15:30 GMT"

console.log(event.getUTCMonth());
// Expected output: 0

event.setUTCMonth(11);

console.log(event.toUTCString());
// Expected output: "Wed, 01 Dec 1976 02:15:30 GMT"
```

## Syntaxe

```js
dateObj.setUTCMonth(valeurMois[, valeurJour])
```

### Paramètres

- `valeurMois`
  - : Un entier entre 0 et 11, représentant les mois de Janvier à Décembre.
- `valeurJour`
  - : Paramètre optionnel, un entier entre 1 et 31, représentant le jour du mois.

### Valeur de retour

Le nombre de millisecondes écoulées entre le premier janvier 1970 minuit, UTC et la date mise à jour.

## Description

Si le paramètre `valeurJour` n'est pas utilisé, la valeur renvoyée par la méthode {{jsxref("Date.prototype.getUTCDate", "getUTCDate()")}} sera utilisée.

Si un paramètre renseigné n'est pas dans l'intervalle attendues, `setUTCMonth()` tentera de mettre à jour la date en conséquence. Par exemple, si on utilise 15 pour `valeurMois`, l'année sera incrémentée de 1 (année + 1), et 3 sera utilisé pour le mois.

## Exemples

### Utiliser `setUTCMonth()`

```js
var leGrandJour = new Date();
leGrandJour.setUTCMonth(11);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Date.prototype.getUTCMonth()")}}
- {{jsxref("Date.prototype.setMonth()")}}
