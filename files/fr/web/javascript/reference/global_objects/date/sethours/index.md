---
title: Date.prototype.setHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/setHours
tags:
  - Date
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/setHours
original_slug: Web/JavaScript/Reference/Objets_globaux/Date/setHours
---
{{JSRef}}

La méthode **`setHours()`** définit les heures pour une date donnée, selon l'heure locale, et renvoie le nombre de millièmes de secondes écoulées entre le 1er janvier 1970 00:00:00 UTC et la nouvelle date mise à jour.

{{EmbedInteractiveExample("pages/js/date-sethours.html")}}

## Syntaxe

```js
dateObj.setHours(valeurHeures[, valeurMinutes[, valeurSecondes[, valeurMs]]])
```

### Versions antérieures à JavaScript 1.3

```js
dateObj.setHours(valeurHeures)
```

### Paramètres

- `valeurHeures`
  - : Un entier normalement compris entre 0 et 23, représentant l'heure. Si la valeur est supérieure à 23, la valeur de l'heure sera incrémentée d'autant d'heures supplémentaires.
- `valeurMinutes`
  - : Paramètre optionnel, un entier normalement compris entre 0 et 59, représentant les minutes. Si la valeur est supérieure à 59, la valeur de l'heure sera incrémentée d'autant de minutes supplémentaires.
- `valeurSecondes`
  - : Paramètre optionnel, un entier normalement compris entre 0 et 59, représentant les secondes. Si vous indiquez le paramètre `valeurSecondes`, vous devez aussi renseigner `valeurMinutes`. Si la valeur est supérieure à 59, l'heure sera incrémentée d'autant de secondes supplémentaires.
- `valeurMs`
  - : Paramètre optionnel, un entier normalement compris entre 0 et 999, représentant les millièmes de secondes. Si vous indiquez `valeurMs`, vous devez aussi renseigner `valeurMinutes` et `valeurSecondes`. Si la valeur fournie est supérieure à 999, l'heure sera incrémentée d'autant de millisecondes supplémentaires.

### Valeur de retour

Le nombre de millisecondes écoulées entre le premier janvier 1970 à minuit, UTC et la date mise à jour.

## Description

Si vous ne renseignez pas `valeurMinutes`, `valeurSecondes` et `valeurMs`, les valeurs renvoyées par les méthodes {{jsxref("Date.getMinutes", "getMinutes()")}}, {{jsxref("Date.getSeconds", "getSeconds()")}}, et {{jsxref("Date.getMilliseconds", "getMilliseconds()")}} seront utilisées.

Si un des paramètres que vous renseignez est en dehors des limites attendues, `setHours()` tentera de mettre à jour la date en conséquence. Par exemple, si vous utilisez 100 pour `valeurSecondes`, les minutes seront incrémentées de 1 (min + 1), et 40 sera utilisé pour les secondes.

## Exemples

### Utiliser `setHours()`

```js
var leGrandJour = new Date();
leGrandJour.setHours(7);
```

## Spécifications

| Spécification                                                                                                | État                         | Commentaires                                         |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ---------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                     | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.0 |
| {{SpecName('ES5.1', '#sec-15.9.5.34', 'Date.prototype.setHours')}}                     | {{Spec2('ES5.1')}}     |                                                      |
| {{SpecName('ES6', '#sec-date.prototype.sethours', 'Date.prototype.setHours')}}     | {{Spec2('ES6')}}         |                                                      |
| {{SpecName('ESDraft', '#sec-date.prototype.sethours', 'Date.prototype.setHours')}} | {{Spec2('ESDraft')}} |                                                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Date.setHours")}}

## Voir aussi

- {{jsxref("Date.prototype.getHours()")}}
- {{jsxref("Date.prototype.setUTCHours()")}}
