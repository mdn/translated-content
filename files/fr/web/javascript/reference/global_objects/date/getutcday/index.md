---
title: Date.prototype.getUTCDay()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCDay
tags:
  - Date
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getUTCDay
original_slug: Web/JavaScript/Reference/Objets_globaux/Date/getUTCDay
---
{{JSRef}}

La méthode **`getUTCDay()`** renvoie le jour de la semaine pour la date renseignée d'après UTC. La numérotation commence à 0, et dimanche est considéré comme le premier jour de la semaine.

{{EmbedInteractiveExample("pages/js/date-getutcday.html")}}

## Syntaxe

    dateObj.getUTCDay()

### Valeur de retour

La valeur renvoyée par `getUTCDay()` est un entier correspondant au jour de la semaine de la date indiquée selon le temps universel (0 pour dimanche, 1 pour lundi, 2 pour mardi, et ainsi de suite).

## Exemples

### Utiliser `getUTCDay()`

L'exemple suivant assigne le jour de la semaine de la date actuelle à la variable `jourSemaine`.

```js
var aujourdhui = new Date()
var jourSemaine = aujourdhui.getUTCDay()
```

## Spécifications

| Spécification                                                                                                    | État                         | Commentaires                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                         | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.9.5.17', 'Date.prototype.getUTCDay')}}                         | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.getutcday', 'Date.prototype.getUTCDay')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.getutcday', 'Date.prototype.getUTCDay')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Date.getUTCDay")}}

## Voir aussi

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.getDay()")}}
- {{jsxref("Date.prototype.setUTCDate()")}}
