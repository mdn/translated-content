---
title: Date.prototype.getUTCMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMinutes
tags:
  - Date
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getUTCMinutes
original_slug: Web/JavaScript/Reference/Objets_globaux/Date/getUTCMinutes
---
{{JSRef}}

La méthode **`getUTCMinutes()`** renvoie les minutes de la date renseignée, d'après UTC.

{{EmbedInteractiveExample("pages/js/date-getutcminutes.html")}}

## Syntaxe

```js
dateObj.getUTCMinutes()
```

### Valeur de retour

Un entier entre 0 et 59 correspondant au nombre de minutes pour la date indiquée selon le temps universel.

## Exemples

### Utiliser `getUTCMinutes`

L'exemple suivant assigne les minutes de la date actuelle à la variable `minutes`.

```js
var aujourdhui = new Date();
var minutes = aujourdhui.getUTCMinutes();
```

## Spécifications

| Spécification                                                                                                                | État                         | Commentaires                                          |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                                     | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.9.5.21', 'Date.prototype.getUTCMinutes')}}                             | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.getutcminutes', 'Date.prototype.getUTCMinutes')}}         | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.getutcminutes', 'Date.prototype.getUTCMinutes')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Date.getUTCMinutes")}}

## Voir aussi

- {{jsxref("Date.prototype.getMinutes()")}}
- {{jsxref("Date.prototype.setUTCMinutes()")}}
