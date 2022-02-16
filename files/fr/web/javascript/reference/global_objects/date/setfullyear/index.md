---
title: Date.prototype.setFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/setFullYear
tags:
  - Date
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/setFullYear
original_slug: Web/JavaScript/Reference/Objets_globaux/Date/setFullYear
---
{{JSRef}}

La méthode **`setFullYear()`** définit l'année complête pour une date, d'après l'heure locale.

{{EmbedInteractiveExample("pages/js/date-setfullyear.html")}}

## Syntaxe

    dateObj.setFullYear(valeurAnnée[, valeurMois[, valeurJour]])

### Paramètres

- `valeurAnnée`
  - : Un entier indiquant la valeur numérique de l'année, par exemple, 1995.
- `valeurMois`
  - : Paramètre optionnel qui représente un entier entre 0 et 11, représentant les mois de janvier à décembre.
- `valeurJour`
  - : Paramètre optionnel qui représente un entier entre 1 et 31 représentant le jour du mois. Si vous indiquez une `valeurJour`, vous devez aussi indiquer `valeurMois`.

### Valeur de retour

Le nombre de millisecondes écoulées entre le premier janvier 1970 à minuit UTC et la date mise à jour.

## Description

Si vous n'indiquez pas les paramètres `valeurMois` et `valeurJour`. Les valeurs renvoyées par les méthodes {{jsxref("Date.prototype.getMonth()", "getMonth()")}} et {{jsxref("Date.prototype.getDate()", "getDate()")}} seront utilisées.

Si un des paramètres que vous indiquez est en dehors des limites attendues, `setFullYear()` tentera de mettre à jour la date en conséquence. Pa exemple, si vous indiquez 15 pour `valeurMois`, l'année sera incrémenté de 1 (année + 1), et 3 sera utilisé pour le mois.

## Exemples

### Utiliser `setFullYear()`

```js
var leGrandJour = new Date();
leGrandJour.setFullYear(1997);
```

## Spécifications

| Spécification                                                                                                        | Statut                       | Commentaires                                          |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                             | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.9.5.40', 'Date.prototype.setFullYear')}}                         | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.setfullyear', 'Date.prototype.setFullYear')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.setfullyear', 'Date.prototype.setFullYear')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Date.setFullYear")}}

## Voir aussi

- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setUTCFullYear()")}}
- {{jsxref("Date.prototype.setYear()")}}
