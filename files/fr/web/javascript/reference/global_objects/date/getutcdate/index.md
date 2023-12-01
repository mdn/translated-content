---
title: Date.prototype.getUTCDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCDate
---

{{JSRef}}

La méthode **`getUTCDate()`** renvoie le jour du mois pour la date renseignée d'après UTC.

{{EmbedInteractiveExample("pages/js/date-getutcdate.html")}}

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
