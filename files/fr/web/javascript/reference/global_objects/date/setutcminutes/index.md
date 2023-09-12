---
title: Date.prototype.setUTCMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCMinutes
---

{{JSRef}}

La méthode **`setUTCMinutes()`** définit les minutes pour la date, selon UTC.

{{EmbedInteractiveExample("pages/js/date-setutcminutes.html")}}

## Syntaxe

```js
dateObj.setUTCMinutes(valeurMinutes[, valeurSecondes[, valeurMs]])
```

### Paramètres

- `valeurMinutes`
  - : Un entier entre 0 et 59, représentant les minutes.
- `valeurSecondes`
  - : Paramètre optionnel, un entier entre 0 et 59, représentant les secondes. Si ce paramètre est utilisé, il faut également utiliser `valeurMinutes`.
- `valeurMs`
  - : Paramètre optionnel, un nombre entre 0 et 999, représentant les millièmes de secondes. Si ce paramètre est utilisé, il faut aussi indiquer `valeurMinutes` et `valeurSecondes`.

### Valeur de retour

Le nombre de millisecondes écoulées entre le premier janvier 1970 minuit, UTC et la date mise à jour.

## Description

Si les paramètres `valeurSecondes` et `valeurMs` ne sont pas utilisés, les valeurs renvoyées par les méthodes {{jsxref("Date.prototype.getUTCSeconds", "getUTCSeconds()")}} et {{jsxref("Date.prototype.getUTCMilliseconds", "getUTCMilliseconds()")}} seront utilisées.

Si un paramètre est en dehors des limites attendues, `setUTCMinutes()` tentera de mettre à jour la date en conséquence. Par exemple, si on utilise 100 pour `valeurSecondes`, les minutes (`valeurMinutes`) seront incrémentées de 1 (`valeurMinutes` + 1), et 40 sera utilisé pour les secondes.

## Exemples

### Utiliser `setUTCMinutes()`

```js
var leGrandJour = new Date();
leGrandJour.setUTCMinutes(43);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Date.prototype.getUTCMinutes()")}}
- {{jsxref("Date.prototype.setMinutes()")}}
