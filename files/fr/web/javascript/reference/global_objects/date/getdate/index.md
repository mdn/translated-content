---
title: Date.prototype.getDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/getDate
tags:
  - Date
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getDate
original_slug: Web/JavaScript/Reference/Objets_globaux/Date/getDate
---
{{JSRef}}

La méthode **`getDate()`** retourne le jour du mois pour la date spécifiée d'après l'heure locale.

{{EmbedInteractiveExample("pages/js/date-getdate.html")}}

## Syntaxe

```js
dateObj.getDate()
```

### Paramètres

Aucun.

### Valeur de retour

Un entier entre 1 et 31 correspondant au jour du mois de la date indiquée selon l'heure locale.

## Exemples

### Utiliser `getDate()`

La seconde instruction ci-dessous affecte la valeur 25 à la variable `jour`, d'après la valeur de l'objet {{jsxref("Date")}} `Noel95`.

```js
var Noel95 = new Date("December 25, 1995 23:15:00");
var jour = Noel95.getDate();

console.log(jour); // 25
```

## Spécifications

| Spécification                                                                                                | État                         | Commentaires                                          |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-date.prototype.getdate', 'Date.prototype.getDate')}} | {{Spec2('ESDraft')}} |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.getdate', 'Date.prototype.getDate')}}         | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ES5.1', '#sec-15.9.5.14', 'Date.prototype.getDate')}}                     | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES1')}}                                                                                     | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.1. |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Date.getDate")}}

## Voir aussi

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.getUTCDay()")}}
- {{jsxref("Date.prototype.setDate()")}}
