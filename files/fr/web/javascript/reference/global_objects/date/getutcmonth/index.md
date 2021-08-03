---
title: Date.prototype.getUTCMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMonth
tags:
  - Date
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getUTCMonth
original_slug: Web/JavaScript/Reference/Objets_globaux/Date/getUTCMonth
---
{{JSRef}}

La méthode **`getUTCMonth()`** renvoie le mois de la date renseignée, d'après UTC. La numérotation des mois commence à 0 pour le premier mois de l'année.

{{EmbedInteractiveExample("pages/js/date-getutcmonth.html")}}

## Syntaxe

    dateObj.getUTCMonth()

### Valeur de retour

Un entier entre 0 et 11 correspondant au mois dans l'année de la date indiquée selon le temps universel (0 pour janvier, 1 pour février, 2 pour mars, et ainsi de suite…).

## Exemples

### Utiliser `getUTCMonth()`

L'exemple suivant assigne le mois de la date actuelle à la variable `mois`.

```js
var aujourdhui = new Date();
var mois = aujourdhui.getUTCMonth();
```

## Spécifications

| Spécification                                                                                                        | État                         | Commentaires                                          |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                             | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.9.5.13', 'Date.prototype.getUTCMonth')}}                         | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.getutcmonth', 'Date.prototype.getUTCMonth')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.getutcmonth', 'Date.prototype.getUTCMonth')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Date.getUTCMonth")}}

## Voir aussi

- {{jsxref("Date.prototype.getMonth()")}}
- {{jsxref("Date.prototype.setUTCMonth()")}}
