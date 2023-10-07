---
title: Date.prototype.getUTCFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCFullYear
---

{{JSRef}}

La méthode **`getUTCFullYear()`** renvoie l'année de la date renseignée, d'après UTC.

{{EmbedInteractiveExample("pages/js/date-getutcfullyear.html")}}

## Syntaxe

```js
dateObj.getUTCFullYear();
```

### Valeur de retour

La valeur renvoyée par `getUTCFullYear()` est un nombre correspondant à l'année de la date indiquée selon le temps universel. Pour les dates entre les années 1000 et 9999, `getUTCFullYear()` renvoie un nombre à quatre chiffres, par exemple 1995.

## Exemples

### Utiliser `getUTCFullYear()`

L'exemple suivant assigne une valeur à 4 chiffres, l'année courante, à la variable `annee`.

```js
var aujourdhui = new Date();
var annee = aujourdhui.getUTCFullYear();
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Date.prototype.getFullYear()")}}
- {{jsxref("Date.prototype.setFullYear()")}}
