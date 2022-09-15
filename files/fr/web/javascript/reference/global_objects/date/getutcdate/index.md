---
title: Date.prototype.getUTCDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCDate
tags:
  - Date
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getUTCDate
original_slug: Web/JavaScript/Reference/Objets_globaux/Date/getUTCDate
---
{{JSRef}}

La méthode **`getUTCDate()`** renvoie le jour du mois pour la date renseignée d'après UTC.

{{EmbedInteractiveExample("pages/js/date-getutcdate.html")}}

## Syntaxe

```js
dateObj.getUTCDate()
```

### Valeur de retour

La valeur renseignée par `getUTCDate()` est un entier entre 1 et 31 pour le jour du mois de la date indiquée selon le temps universel.

## Exemples

### Utiliser `getUTCDate()`

L'exemple suivant assigne le jour du mois pour la date actuelle, à la variable `jour`.

```js
var aujourdhui = new Date();
var jour = aujourdhui.getUTCDate();
```

## Spécifications

| Spécification                                                                                                        | État                         | Commentaires                                          |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                             | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.9.5.15', 'Date.prototype.getUTCDate')}}                         | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.getutcdate', 'Date.prototype.getUTCDate')}}         | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.getutcdate', 'Date.prototype.getUTCDate')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Date.getUTCDate")}}

## Voir aussi

- {{jsxref("Date.prototype.getDate()")}}
- {{jsxref("Date.prototype.getUTCDay()")}}
- {{jsxref("Date.prototype.setUTCDate()")}}
