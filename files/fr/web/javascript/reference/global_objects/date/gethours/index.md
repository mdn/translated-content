---
title: Date.prototype.getHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/getHours
tags:
  - Date
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getHours
original_slug: Web/JavaScript/Reference/Objets_globaux/Date/getHours
---
{{JSRef}}

La méthode **`getHours()`** renvoie l'heure pour la date renseignée, d'après l'heure locale.

{{EmbedInteractiveExample("pages/js/date-gethours.html")}}

## Syntaxe

    dateObj.getHours()

### Valeur de retour

Un entier, compris entre 0 et 23 qui indique l'heure de la date indiquée selon l'heure locale.

## Exemples

### Utiliser `getHours()`

La seconde instruction ci-dessous assigne la valeur 23 à la variable `heure`, selon la valeur de l'objet {{jsxref("Date")}} `noel95`.

```js
var noel95 = new Date("December 25, 1995 23:15:00");
var heure = noel95.getHours();

console.log(heure); //23
```

## Spécifications

| Spécification                                                                                                | État                         | Commentaires                                          |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                     | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.9.5.18', 'Date.prototype.getHours')}}                     | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.gethours', 'Date.prototype.getHours')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.gethours', 'Date.prototype.getHours')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Date.getHours")}}

## Voir aussi

- {{jsxref("Date.prototype.getUTCHours()")}}
- {{jsxref("Date.prototype.setHours()")}}
