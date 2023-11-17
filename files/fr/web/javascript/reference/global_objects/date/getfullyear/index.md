---
title: Date.prototype.getFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/getFullYear
---

{{JSRef}}

La méthode **`getFullYear()`** renvoie l'année de la date renseignée d'après l'heure locale.

Cette méthode doit être utilisée à la place de {{jsxref("Date.prototype.getYear()", "getYear()")}}.

{{EmbedInteractiveExample("pages/js/date-getfullyear.html")}}

## Syntaxe

```js
dateObj.getFullYear();
```

### Valeur de retour

Un entier correspondant à l'année de la date selon l'heure locale.

## Exemples

### Utiliser `getFullYear()`

L'exemple qui suit assigne la valeur à quatre chiffres de l'année courante à la variable `année`.

```js
var aujd = new Date();
var année = aujd.getFullYear();
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setFullYear()")}}
- {{jsxref("Date.prototype.getYear()")}}
