---
title: Date.prototype.setTime()
slug: Web/JavaScript/Reference/Global_Objects/Date/setTime
tags:
  - Date
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/setTime
original_slug: Web/JavaScript/Reference/Objets_globaux/Date/setTime
---
{{JSRef}}

La méthode **`setTime()`** met l'objet {{jsxref("Date")}} à jour par rapport au nombre de millisecondes depuis le 1 janvier 1970, 00:00:00 UTC.

{{EmbedInteractiveExample("pages/js/date-settime.html")}}

## Syntaxe

```js
dateObj.setTime(valeurTemps)
```

### Paramètres

- `valeurTemps`
  - : Un entier représentant le nombre de millisecondes depuis le 1 janvier 1970, 00:00:00 UTC.

### Valeur de retour

Le nombre de millisecondes écoulées entre le premier janvier 1970 à minuit, UTC et la date mise à jour (ce qui correspond à la valeur de l'argument).

## Description

La méthode `setTime()` est utilisée afin d'assigner une date à un autre objet {{jsxref("Date")}}.

## Exemples

### Utiliser `setTime()`

```js
var leGrandJour = new Date("July 1, 1999");
var pareilQueGrandJour = new Date();
pareilQueGrandJour.setTime(leGrandJour.getTime());
```

## Spécifications

| Spécification                                                                                                | État                         | Commentaires                                          |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                     | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.9.5.27', 'Date.prototype.setTime')}}                     | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.settime', 'Date.prototype.setTime')}}         | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.settime', 'Date.prototype.setTime')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Date.setTime")}}

## Voir aussi

- {{jsxref("Date.prototype.getTime()")}}
- {{jsxref("Date.prototype.setUTCHours()")}}
