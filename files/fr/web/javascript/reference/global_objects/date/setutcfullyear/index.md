---
title: Date.prototype.setUTCFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCFullYear
tags:
  - Date
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/setUTCFullYear
original_slug: Web/JavaScript/Reference/Objets_globaux/Date/setUTCFullYear
---
{{JSRef}}

La méthode **`setUTCFullYear()`** définit l'année complête pour la date, selon UTC.

{{EmbedInteractiveExample("pages/js/date-setutcfullyear.html")}}

## Syntaxe

    dateObj.setUTCFullYear(valeurAnnée[, valeurMois[, valeurJour]])

### Paramètres

- `valeurAnnée`
  - : Un entier indiquant la valeur numérique d'une année, par exemple, 1995.
- `valeurMois`
  - : Paramètre optionnel, un entier entre 0 et 11 représentant les mois de janvier à décembre.
- `valeurJour`
  - : Paramètre optionnel, un entier entre 1 et 31 représentant le jour du mois. Si le paramètre `valeurJour` est utilisé, il est également nécessaire d'indiquer `valeurMois`.

### Valeur de retour

Le nombre de millisecondes écoulées entre le premier janvier 1970 minuit, UTC et la date mise à jour.

## Description

Si les paramètres `valeurMois` et `valeurJour` ne sont pas utilisés, les valeurs renvoyées par les méthodes {{jsxref("Objets_globaux/Date/getUTCMonth", "getUTCMonth()")}} et {{jsxref("Objets_globaux/Date/getUTCDate", "getUTCDate()")}} seront utilisées.

Si un des paramètres indiqué est en dehors des limites attendues, `setUTCFullYear()` tentera de mettre à jour la date en conséquence. Ainsi si on utilise la valeur 15 pour `valeurMois`, l'année sera incrémentée de 1 (année + 1), et 3 sera utilisé pour le mois.

## Exemples

### Utiliser `setUTCFullYear()`

```js
var leGrandJour = new Date();
leGrandJour.setUTCFullYear(1997);
```

## Spécifications

| Spécification                                                                                                                | État                         | Commentaires                                          |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                                     | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.9.5.41', 'Date.prototype.setUTCFullYear')}}                             | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.setutcfullyear', 'Date.prototype.setUTCFullYear')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.setutcfullyear', 'Date.prototype.setUTCFullYear')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Date.setUTCFullYear")}}

## Voir aussi

- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setFullYear()")}}
