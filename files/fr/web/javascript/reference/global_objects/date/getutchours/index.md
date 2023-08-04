---
title: Date.prototype.getUTCHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCHours
---

{{JSRef}}

La méthode **`getUTCHours()`** renvoie les heures de la date renseignée, d'après UTC.

{{EmbedInteractiveExample("pages/js/date-getutchours.html")}}

## Syntaxe

```js
dateObj.getUTCHours();
```

### Valeur de retour

Un entier entre 0 et 23 correspondant à l'heure de la date indiquée selon le temps universel.

## Exemples

### Utiliser `getUTCHours()`

L'exemple suivant assigne les heures de la date actuelle à la variable `heures`.

```js
var aujourdhui = new Date();
var heures = aujourdhui.getUTCHours();
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Date.prototype.getHours()")}}
- {{jsxref("Date.prototype.setUTCHours()")}}
