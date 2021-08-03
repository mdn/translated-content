---
title: Date.prototype.getTimezoneOffset()
slug: Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset
tags:
  - Date
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset
original_slug: Web/JavaScript/Reference/Objets_globaux/Date/getTimezoneOffset
---
{{JSRef}}

La méthode **`getTimezoneOffset()`** retourne la différence en minutes entre le fuseau horaire UTC, et celui de l'heure locale.

{{EmbedInteractiveExample("pages/js/date-gettimezoneoffset.html")}}

## Syntaxe

    dateObj.getTimezoneOffset()

### Valeur de retour

La valeur retournée est la différence, exprimée en minutes, entre les fuseaux horaires UTC et celui de l'heure locale. Cette différence est positive si le fuseau horaire local est en retard par rapport à UTC, et négative s'il est en avance.

Par exemple, si votre fuseau horaire est UTC+10 (Australian Eastern Standard Time, Vladivostok, Chamorro), la valeur retournée sera -600. L'heure d'été (DST pour _daylight saving time_ en anglais) empêche cette valeur d'être une constante.

## Exemples

### Utiliser `getTimezoneOffset()`

```js
var x = new Date();
var differenceFuseauxEnHeures = x.getTimezoneOffset() / 60;
// -2

// Décalage temporel local pour le premier mai
// Attention, Date() utilise les mois numérotés
// à partir de zéro et mai est donc représenté
// avec 4 (et pas 5)
var travail = new Date(2017, 4, 1);
var decalage = travail.getTimezoneOffset() / 60;
```

## Spécifications

| Spécification                                                                                                                        | État                         | Commentaires                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                                             | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.9.5.26', 'Date.prototype.getTimezoneOffset')}}                                 | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.gettimezoneoffset', 'Date.prototype.getTimezoneOffset')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.gettimezoneoffset', 'Date.prototype.getTimezoneOffset')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Date.getTimezoneOffset")}}
