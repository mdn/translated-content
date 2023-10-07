---
title: Date.prototype.getUTCMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMinutes
---

{{JSRef}}

La méthode **`getUTCMinutes()`** renvoie les minutes de la date renseignée, d'après UTC.

{{EmbedInteractiveExample("pages/js/date-getutcminutes.html")}}

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
