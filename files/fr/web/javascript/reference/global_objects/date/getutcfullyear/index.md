---
title: Date.prototype.getUTCFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCFullYear
tags:
  - Date
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getUTCFullYear
original_slug: Web/JavaScript/Reference/Objets_globaux/Date/getUTCFullYear
---
{{JSRef}}

La méthode **`getUTCFullYear()`** renvoie l'année de la date renseignée, d'après UTC.

{{EmbedInteractiveExample("pages/js/date-getutcfullyear.html")}}

## Syntaxe

```js
dateObj.getUTCFullYear()
```

### Valeur de retour

La valeur renvoyée par ` getUTCFullYear``() ` est un nombre correspondant à l'année de la date indiquée selon le temps universel. Pour les dates entre les années 1000 et 9999, ` getUTCFullYear``() ` renvoie un nombre à quatre chiffres, par exemple 1995.

## Exemples

### Utiliser `getUTCFullYear()`

L'exemple suivant assigne une valeur à 4 chiffres, l'année courante, à la variable `annee`.

```js
var aujourdhui = new Date();
var annee = aujourdhui.getUTCFullYear();
```

## Spécifications

| Spécification                                                                                                                | État                         | Commentaires                                          |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                                     | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.9.5.11', 'Date.prototype.getUTCFullYear')}}                             | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.getutcfullyear', 'Date.prototype.getUTCFullYear')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.getutcfullyear', 'Date.prototype.getUTCFullYear')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Date.getUTCFullYear")}}

## Voir aussi

- {{jsxref("Date.prototype.getFullYear()")}}
- {{jsxref("Date.prototype.setFullYear()")}}
