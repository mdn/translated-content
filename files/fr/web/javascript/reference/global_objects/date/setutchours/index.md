---
title: Date.prototype.setUTCHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCHours
---

{{JSRef}}

La méthode **`setUTCHours()`** définit les heures pour la date, selon UTC, et renvoie le nombre de millièmes de secondes écoulées entre le 1er janvier 1970 00:00:00 UTC et cette nouvelle date.

{{EmbedInteractiveExample("pages/js/date-setutchours.html")}}

## Syntaxe

```js
dateObj.setUTCHours(valeurHeures[, valeurMinutes[, valeurSecondes[, valeurMs]]])
```

### Paramètres

- `valeurHeures`
  - : Un entier entre 0 et 23, représentant l'heure.
- `valeurMinutes`
  - : Paramètre optionnel, un entier entre 0 et 59, représentant les minutes.
- `valeurSecondes`
  - : Paramètre optionnel, un entier entre 0 et 59, représentant les secondes. Si le paramètre `valeurSecondes` est utilisé, le paramètre `valeurMinutes` devra également être renseigné.
- `valeurMs`
  - : Paramètre optionnel, un entier entre 0 et 999, représentant les millièmes de secondes. Si le paramètre `valeurMs` est utilisé, les paramètres `valeurMinutes` et `valeurSecondes` devront également être renseignés.

### Valeur de retour

Le nombre de millisecondes écoulées entre le premier janvier 1970 minuit, UTC et la date mise à jour.

## Description

Si les paramètres `valeurMinutes`, `valeurSecondes` et `valeurMs` ne sont pas renseignés, les valeurs renvoyées par les méthodes {{jsxref("Date.prototype.getUTCMinutes", "getUTCMinutes()")}}, {{jsxref("Date.prototype.getUTCSeconds", "getUTCSeconds()")}}, et {{jsxref("Date.prototype.getUTCMilliseconds", "getUTCMilliseconds()")}} seront utilisées.

Si un des paramètres renseignés est en dehors des limites attendues, `setUTCHours()` tentera de mettre à jour la date en conséquence. Par exemple, si on utilise la valeur 100 pour `valeurSecondes`, les minutes seront incrémentées de 1 (min + 1), et 40 sera utilisé pour les secondes.

## Exemples

### Utiliser `setUTCHours()`

```js
var leGrandJour = new Date();
leGrandJour.setUTCHours(8);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Date.prototype.getUTCHours()")}}
- {{jsxref("Date.prototype.setHours()")}}
