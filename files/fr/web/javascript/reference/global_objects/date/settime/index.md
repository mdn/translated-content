---
title: Date.prototype.setTime()
slug: Web/JavaScript/Reference/Global_Objects/Date/setTime
---

{{JSRef}}

La méthode **`setTime()`** met l'objet {{jsxref("Date")}} à jour par rapport au nombre de millisecondes depuis le 1 janvier 1970, 00:00:00 UTC.

{{EmbedInteractiveExample("pages/js/date-settime.html")}}

## Syntaxe

```js
dateObj.setTime(valeurTemps);
```

### Paramètres

- `valeurTemps`
  - : Un entier représentant le nombre de millisecondes depuis le 1 janvier 1970, 00:00:00 UTC.

### Valeur de retour

Le nombre de millisecondes écoulées entre le premier janvier 1970 à minuit, UTC et la date mise à jour (ce qui correspond à la valeur de l'argument).

## Description

La méthode `setTime()` est utilisée afin d'assigner une date à un autre objet {{jsxref("Date")}}.

## Exemples

### Utiliser `setTime()`

```js
var leGrandJour = new Date("July 1, 1999");
var pareilQueGrandJour = new Date();
pareilQueGrandJour.setTime(leGrandJour.getTime());
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Date.prototype.getTime()")}}
- {{jsxref("Date.prototype.setUTCHours()")}}
