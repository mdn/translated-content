---
title: Date.prototype.getMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/getMinutes
tags:
  - Date
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getMinutes
original_slug: Web/JavaScript/Reference/Objets_globaux/Date/getMinutes
---
{{JSRef}}

La méthode **`getMinutes()`** renvoie les minutes pour la date renseignée d'après l'heure locale.

{{EmbedInteractiveExample("pages/js/date-getminutes.html")}}

## Syntaxe

    dateObj.getMinutes()

### Valeur de retour

La valeur renvoyée par `getMinutes` est un entier entre 0 et 59 représentant le nombre de minutes pour la date indiquée, selon l'heure locale.

## Exemples

### Utiliser `getMinutes()`

La seconde instruction ci-dessous assigne la valeur 15 à la variable `minutes`, selon la valeur de l'objet {{jsxref("Date")}} `noel95`.

```js
var noel95 = new Date("December 25, 1995 23:15:00");
var minutes = noel95.getMinutes();

console.log(minutes); //15
```

## Spécifications

| Spécification                                                                                                        | État                         | Commentaires                                          |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                             | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.9.5.20', 'Date.prototype.getMinutes')}}                         | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.getminutes', 'Date.prototype.getMinutes')}}         | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.getminutes', 'Date.prototype.getMinutes')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Date.getMinutes")}}

## Voir aussi

- {{jsxref("Date.prototype.getUTCMinutes()")}}
- {{jsxref("Date.prototype.setMinutes()")}}
