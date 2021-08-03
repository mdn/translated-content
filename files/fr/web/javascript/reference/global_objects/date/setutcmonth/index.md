---
title: Date.prototype.setUTCMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCMonth
tags:
  - Date
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/setUTCMonth
original_slug: Web/JavaScript/Reference/Objets_globaux/Date/setUTCMonth
---
{{JSRef}}

La méthode **`setUTCMonth()`** définit le mois de la date, selon UTC.

{{EmbedInteractiveExample("pages/js/date-setutcmonth.html")}}

## Syntaxe

    dateObj.setUTCMonth(valeurMois[, valeurJour])

### Paramètres

- `valeurMois`
  - : Un entier entre 0 et 11, représentant les mois de Janvier à Décembre.
- `valeurJour`
  - : Paramètre optionnel, un entier entre 1 et 31, représentant le jour du mois.

### Valeur de retour

Le nombre de millisecondes écoulées entre le premier janvier 1970 minuit, UTC et la date mise à jour.

## Description

Si le paramètre `valeurJour` n'est pas utilisé, la valeur renvoyée par la méthode {{jsxref("Date.prototype.getUTCDate", "getUTCDate()")}} sera utilisée.

Si un paramètre renseigné n'est pas dans l'intervalle attendues, `setUTCMonth()` tentera de mettre à jour la date en conséquence. Par exemple, si on utilise 15 pour `valeurMois`, l'année sera incrémentée de 1 (année + 1), et 3 sera utilisé pour le mois.

## Exemples

### Utiliser `setUTCMonth()`

```js
var leGrandJour = new Date();
leGrandJour.setUTCMonth(11);
```

## Spécifications

| Spécification                                                                                                        | État                         | Commentaires                                          |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                             | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.9.5.39', 'Date.prototype.setUTCMonth')}}                         | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.setutcmonth', 'Date.prototype.setUTCMonth')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.setutcmonth', 'Date.prototype.setUTCMonth')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Date.setUTCMonth")}}

## Voir aussi

- {{jsxref("Date.prototype.getUTCMonth()")}}
- {{jsxref("Date.prototype.setMonth()")}}
