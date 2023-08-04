---
title: Date.prototype.setUTCMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCMilliseconds
---

{{JSRef}}

La méthode **`setUTCMilliseconds()`** définit les millièmes de secondes pour la date, selon UTC.

{{EmbedInteractiveExample("pages/js/date-setutcmilliseconds.html")}}

## Syntaxe

```js
dateObj.setUTCMilliseconds(valeurMs);
```

### Paramètres

- `valeurMs`
  - : Un entier entre 0 et 999, représentant les millièmes de secondes.

### Valeur de retour

Le nombre de millisecondes écoulées entre le premier janvier 1970 minuit, UTC et la date mise à jour.

## Description

Si le paramètre indiqué est en dehors des limites attendues, la date sera mise à jour en conséquence. Par exemple, si on utilise la valeur 1005, le nombre des secondes sera incrémenté de 1, et 5 sera utilisé pour les millièmes de secondes.

## Exemples

### Utiliser `setUTCMilliseconds()`

```js
var leGrandJour = new Date();
leGrandJour.setUTCMilliseconds(500);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Date.prototype.getUTCMilliseconds()")}}
- {{jsxref("Date.prototype.setMilliseconds()")}}
