---
title: Date.prototype.setUTCDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCDate
---

{{JSRef}}

La méthode **`setUTCDate()`** définit le jour du mois pour la date, selon UTC.

{{InteractiveExample("JavaScript Demo: Date.setUTCDate()")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30 GMT-3:00");

console.log(event.getUTCDate());
// Expected output: 20

event.setUTCDate(19);

console.log(event.getUTCDate());
// Expected output: 19
```

## Syntaxe

```js
dateObj.setUTCDate(valeurJour);
```

### Paramètres

- `valeurJour`
  - : Un entier de 1 à 31, représentant un jour dans le mois.

### Valeur de retour

Le nombre de millisecondes écoulées entre le premier janvier 1970 minuit, UTC et la date mise à jour.

## Description

Si le paramètre renseigné est en dehors des limites attendues, `setUTCDate()` tentera de mettre à jour la date en conséquence. Par exemple, si on utilise la valeur 40 pour `valeurJour`, et que le mois de la date est juin, le jour sera changé en 10 et le mois passera à juillet.

## Exemples

### Utiliser `setUTCDate()`

```js
var leGrandJour = new Date();
leGrandJour.setUTCDate(20);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.setDate()")}}
