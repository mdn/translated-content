---
title: Date.prototype.getUTCSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCSeconds
tags:
  - Date
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getUTCSeconds
original_slug: Web/JavaScript/Reference/Objets_globaux/Date/getUTCSeconds
---
{{JSRef}}

La méthode **`getUTCSeconds()`** renvoie les secondes de la date renseignée, d'après UTC.

{{EmbedInteractiveExample("pages/js/date-getutcseconds.html")}}

## Syntaxe

```js
dateObj.getUTCSeconds()
```

### Valeur de retour

Un entier entre 0 et 59 correspondant au nombre de secondes écoulées pour la date indiquée selon le temps universel.

## Exemples

### Utiliser `getUTCSeconds()`

L'exemple suivant assigne les secondes de la date actuelle à la variable `secondes`.

```js
var aujourdhui = new Date();
var secondes = aujourdhui.getUTCSeconds();
```

## Spécifications

| Spécification                                                                                                                | État                         | Commentaires                                          |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                                     | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.9.5.23', 'Date.prototype.getUTCSeconds')}}                             | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.getutcseconds', 'Date.prototype.getUTCSeconds')}}         | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.getutcseconds', 'Date.prototype.getUTCSeconds')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Date.getUTCSeconds")}}

## Voir aussi

- {{jsxref("Date.prototype.getSeconds()")}}
- {{jsxref("Date.prototype.setUTCSeconds()")}}
