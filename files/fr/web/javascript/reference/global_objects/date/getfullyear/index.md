---
title: Date.prototype.getFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/getFullYear
tags:
  - Date
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getFullYear
original_slug: Web/JavaScript/Reference/Objets_globaux/Date/getFullYear
---
{{JSRef}}

La méthode **`getFullYear()`** renvoie l'année de la date renseignée d'après l'heure locale.

Cette méthode doit être utilisée à la place de {{jsxref("Date.prototype.getYear()", "getYear()")}}.

{{EmbedInteractiveExample("pages/js/date-getfullyear.html")}}

## Syntaxe

    dateObj.getFullYear()

### Valeur de retour

Un entier correspondant à l'année de la date selon l'heure locale.

## Exemples

### Utiliser `getFullYear()`

L'exemple qui suit assigne la valeur à quatre chiffres de l'année courante à la variable `année`.

```js
var aujd = new Date();
var année = aujd.getFullYear();
```

## Spécifications

| Spécification                                                                                                        | État                         | Commentaires                                          |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                             | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.9.5.10', 'Date.prototype.getFullYear')}}                         | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.getfullyear', 'Date.prototype.getFullYear')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.getfullyear', 'Date.prototype.getFullYear')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Date.getFullYear")}}

## Voir aussi

- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setFullYear()")}}
- {{jsxref("Date.prototype.getYear()")}}
