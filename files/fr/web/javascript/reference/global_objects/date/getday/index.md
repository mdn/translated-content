---
title: Date.prototype.getDay()
slug: Web/JavaScript/Reference/Global_Objects/Date/getDay
tags:
  - Date
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getDay
original_slug: Web/JavaScript/Reference/Objets_globaux/Date/getDay
---
{{JSRef}}

La méthode **`getDay()`** renvoie le jour de la semaine pour la date spécifiée selon l'heure locale (0 correspondant à dimanche). Pour obtenir le jour du mois, on utilisera {{jsxref("Date.prototype.getDate()")}}.

{{EmbedInteractiveExample("pages/js/date-getday.html")}}

## Syntaxe

```js
dateObj.getDay()
```

### Valeur de retour

Un entier correspondant au jour de la semaine (0 correspondant à dimanche, 1 à lundi, 2 à mardi et ainsi de suite) de la date indiquée selon l'heure locale.

## Exemples

### Utiliser `getDay()`

La seconde instruction ci-dessous assigne la valeur 1 à `jourSemaine`, selon la valeur de l'objet `Date` `noel95`. Le 25 décembre 1995 est un lundi.

```js
var noel95 = new Date("December 25, 1995 23:15:00");
var jourSemaine = noel95.getDay();

console.log(jourSemaine); //1
```

> **Note :** Si besoin, on pourra obtenir le nom complet du jour (`"lundi"` par exemple) en utilisant la méthode {{jsxref("DateTimeFormat", "Intl.DateTimeFormat")}} avec un paramètre `options`. Ce faisant, il est plus simple d'internationaliser un site ou une application :
>
> ```js
> var options = { weekday: 'long'};
> console.log(new Intl.DateTimeFormat('en-US', options).format(Xmas95));
> // Monday
> console.log(new Intl.DateTimeFormat('de-DE', options).format(Xmas95));
> // Montag
> ```

## Spécifications

| Spécification                                                                                            | État                         | Commentaires                                          |
| -------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-date.prototype.getday', 'Date.prototype.getDay')}} | {{Spec2('ESDraft')}} |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.getday', 'Date.prototype.getDay')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ES5.1', '#sec-15.9.5.16', 'Date.prototype.getDay')}}                     | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES1')}}                                                                                 | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.0. |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Date.getDay")}}

## Voir aussi

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.getUTCDay()")}}
- {{jsxref("Date.prototype.setDate()")}}
