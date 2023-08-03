---
title: Date.prototype.getUTCSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCSeconds
---

{{JSRef}}

La méthode **`getUTCSeconds()`** renvoie les secondes de la date renseignée, d'après UTC.

{{EmbedInteractiveExample("pages/js/date-getutcseconds.html")}}

## Syntaxe

```js
dateObj.getUTCSeconds();
```

### Valeur de retour

Un entier entre 0 et 59 correspondant au nombre de secondes écoulées pour la date indiquée selon le temps universel.

## Exemples

### Utiliser `getUTCSeconds()`

L'exemple suivant assigne les secondes de la date actuelle à la variable `secondes`.

```js
var aujourdhui = new Date();
var secondes = aujourdhui.getUTCSeconds();
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Date.prototype.getSeconds()")}}
- {{jsxref("Date.prototype.setUTCSeconds()")}}
