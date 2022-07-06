---
title: Date.prototype.getUTCHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCHours
tags:
  - Date
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getUTCHours
original_slug: Web/JavaScript/Reference/Objets_globaux/Date/getUTCHours
---
{{JSRef}}

La méthode **`getUTCHours()`** renvoie les heures de la date renseignée, d'après UTC.

{{EmbedInteractiveExample("pages/js/date-getutchours.html")}}

## Syntaxe

```js
dateObj.getUTCHours()
```

### Valeur de retour

Un entier entre 0 et 23 correspondant à l'heure de la date indiquée selon le temps universel.

## Exemples

### Utiliser `getUTCHours()`

L'exemple suivant assigne les heures de la date actuelle à la variable `heures`.

```js
var aujourdhui = new Date();
var heures = aujourdhui.getUTCHours();
```

## Spécifications

| Spécification                                                                                                        | État                         | Commentaires                                          |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                             | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.9.5.19', 'Date.prototype.getUTCHours')}}                         | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.getutchours', 'Date.prototype.getUTCHours')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.getutchours', 'Date.prototype.getUTCHours')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Date.getUTCHours")}}

## Voir aussi

- {{jsxref("Date.prototype.getHours()")}}
- {{jsxref("Date.prototype.setUTCHours()")}}
