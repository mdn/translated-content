---
title: Date.prototype.setUTCHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCHours
tags:
  - Date
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/setUTCHours
original_slug: Web/JavaScript/Reference/Objets_globaux/Date/setUTCHours
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

| Spécification                                                                                                        | État                         | Commentaires                                          |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                             | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.9.5.35', 'Date.prototype.setUTCHours')}}                         | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.setutchours', 'Date.prototype.setUTCHours')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.setutchours', 'Date.prototype.setUTCHours')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Date.setUTCHours")}}

## Voir aussi

- {{jsxref("Date.prototype.getUTCHours()")}}
- {{jsxref("Date.prototype.setHours()")}}
