---
title: Date.prototype.getTimezoneOffset()
slug: Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset
---

{{JSRef}}

La méthode **`getTimezoneOffset()`** retourne la différence en minutes entre le fuseau horaire UTC, et celui de l'heure locale.

{{InteractiveExample("JavaScript Demo: Date.getTimezoneOffset()")}}

```js interactive-example
const date1 = new Date("August 19, 1975 23:15:30 GMT+07:00");
const date2 = new Date("August 19, 1975 23:15:30 GMT-02:00");

console.log(date1.getTimezoneOffset());
// Expected output: your local timezone offset in minutes
// (e.g., -120). NOT the timezone offset of the date object.

console.log(date1.getTimezoneOffset() === date2.getTimezoneOffset());
// Expected output: true
```

## Syntaxe

```js
dateObj.getTimezoneOffset();
```

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

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
