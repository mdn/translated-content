---
title: Date.prototype.setMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setMilliseconds
---

{{JSRef}}

La méthode **`setMilliseconds()`** définit les millièmes de secondes pour la date, selon l'heure locale.

{{EmbedInteractiveExample("pages/js/date-setmilliseconds.html")}}

## Syntaxe

```js
dateObj.setMilliseconds(valeurMs);
```

### Paramètres

- `valeurMs`
  - : Un entier entre 0 et 999, représentant les millièmes de secondes.

### Valeur de retour

Le nombre de millisecondes écoulées entre le premier janvier 1970 minuit, UTC et la date mise à jour.

## Description

Si vous indiquez un nombre en dehors des limites attendues, la date sera mise à jour en conséquence. Par exemple, si vous indiquez 1005, le nombre des secondes sera incrémenté de 1, et 5 sera utilisé pour les millièmes de secondes.

## Exemples

### Utiliser `setMilliseconds()`

```js
var leGrandJour = new Date();
leGrandJour.setMilliseconds(100);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Date.prototype.getMilliseconds()")}}
- {{jsxref("Date.prototype.setUTCMilliseconds()")}}
