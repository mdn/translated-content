---
title: Date.prototype.getSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getSeconds
tags:
  - Date
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getSeconds
original_slug: Web/JavaScript/Reference/Objets_globaux/Date/getSeconds
---
{{JSRef}}

La méthode **`getSeconds()`** renvoie les secondes pour la date renseignée d'après l'heure locale.

{{EmbedInteractiveExample("pages/js/date-getseconds.html")}}

## Syntaxe

    dateObj.getSeconds()

### Valeur de retour

La valeur renvoyée par `getSeconds()` est un entier entre 0 et 59 correspondant au nombre de secondes pour la date donnée selon l'heure locale.

## Exemples

### Utiliser `getSeconds()`

La seconde instruction ci-dessous assigne la valeur 30 à la variable `secondes`, selon la valeur de l'objet {{jsxref("Date")}} `noel95`.

```js
var noel95 = new Date("December 25, 1995 23:15:30");
var secondes = noel95.getSeconds();

console.log(secondes); //30
```

## Spécifications

| Spécification                                                                                                        | État                         | Commentaires                                          |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                             | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.9.5.22', 'Date.prototype.getSeconds')}}                         | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.getseconds', 'Date.prototype.getSeconds')}}         | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.getseconds', 'Date.prototype.getSeconds')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Date.getSeconds")}}

## Voir aussi

- {{jsxref("Date.prototype.getUTCSeconds()")}}
- {{jsxref("Date.prototype.setSeconds()")}}
