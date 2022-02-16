---
title: Date.prototype.getMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/getMonth
tags:
  - Date
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getMonth
original_slug: Web/JavaScript/Reference/Objets_globaux/Date/getMonth
---
{{JSRef}}

La méthode **`getMonth()`** retourne le mois de la date renseignée d'après l'heure locale. La numérotation démarre à 0 (c'est-à-dire que 0 correspond au premier mois de l'année).

{{EmbedInteractiveExample("pages/js/date-getmonth.html")}}

## Syntaxe

    dateObj.getMonth()

### Valeur de retour

Un entier entre 0 et 11 selon le mois de la date indiquée et d'après l'heure locale (0 correspond à janvier, 1 à février, et ainsi de suite).

## Exemples

### Utiliser `getMonth()`

La seconde instruction ci-dessous assigne la valeur 11 à la variable `mois`, d'après la valeur de l'objet {{jsxref("Date")}} `noel95`.

```js
var noel95 = new Date("December 25, 1995 23:15:00");
var mois = noel95.getMonth();

console.log(mois); //11
```

> **Note :** Si besoin, on pourra récupérer le nom complet du mois (`"Janvier"` par exemple) en utilisant [`Intl.DateTimeFormat()`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/DateTimeFormat) avec un paramètre `options`. En utilisant cette méthode, il est plus simple d'internationaliser le site ou l'application :
>
> ```js
> var options = { month: 'long'};
> console.log(new Intl.DateTimeFormat('en-US', options).format(noel95));
> // December
> console.log(new Intl.DateTimeFormat('de-DE', options).format(noel95));
> // Dezember
> ```

## Spécifications

| Spécification                                                                                                | État                         | Commentaires                                          |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                     | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.9.5.12', 'Date.prototype.getMonth')}}                     | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.getmonth', 'Date.prototype.getMonth')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.getmonth', 'Date.prototype.getMonth')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Date.getMonth")}}

## Voir aussi

- {{jsxref("Date.prototype.getUTCMonth()")}}
- {{jsxref("Date.prototype.setMonth()")}}
