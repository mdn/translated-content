---
title: Date.prototype.getUTCMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMonth
---

{{JSRef}}

La méthode **`getUTCMonth()`** renvoie le mois de la date renseignée, d'après UTC. La numérotation des mois commence à 0 pour le premier mois de l'année.

{{EmbedInteractiveExample("pages/js/date-getutcmonth.html")}}

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
