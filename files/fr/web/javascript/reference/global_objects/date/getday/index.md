---
title: "Date : méthode getDay()"
short-title: getDay()
slug: Web/JavaScript/Reference/Global_Objects/Date/getDay
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`getDay()`** des instances de {{JSxRef("Date")}} retourne le jour de la semaine pour la date spécifiée selon l'heure locale (0 correspondant à dimanche). Pour obtenir le jour du mois, on utilisera {{JSxRef("Date.prototype.getDate()")}}.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Date.prototype.getDay()", "shorter")}}

```js interactive-example
const birthday = new Date("August 19, 1975 23:15:30");
const day1 = birthday.getDay();
// Dimanche - Samedi : 0 - 6

console.log(day1);
// Résultat attendu : 2
```

## Syntaxe

```js-nolint
getDay()
```

### Valeur de retour

Un entier, entre 0 et 6, représentant le jour de la semaine pour la date indiquée selon l'heure locale&nbsp;: 0 pour dimanche, 1 pour lundi, 2 pour mardi, et ainsi de suite. Retourne `NaN` si la date est [invalide](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide).

## Description

La valeur de retour de `getDay()` est indexée à partir de zéro, ce qui est utile pour indexer des tableaux de jours, par exemple&nbsp;:

```js
const saintValentin = new Date("1995-02-14");
const jour = saintValentin.getDay();
const nomsJours = ["Dimanche", "Lundi", "Mardi" /* , … */];

console.log(nomsJours[jour]); // "Lundi"
```

Cependant, pour l'internationalisation, vous devriez préférer utiliser {{JSxRef("Intl.DateTimeFormat")}} avec le paramètre `options`.

```js
const options = { weekday: "long" };
console.log(new Intl.DateTimeFormat("en-US", options).format(saintValentin));
// "Monday"
console.log(new Intl.DateTimeFormat("de-DE", options).format(saintValentin));
// "Montag"
```

## Exemples

### Utiliser la méthode `getDay()`

La variable `jourSemaine` a la valeur `1`, d'après la valeur de l'objet {{JSxRef("Date")}} `noel95`, parce que le 25 décembre 1995 est un lundi.

```js
const noel95 = new Date("1995-12-25T23:15:30");
const jourSemaine = noel95.getDay();

console.log(jourSemaine); //1
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La m&thode {{JSxRef("Date.prototype.getUTCDate()")}}
- La m&thode {{JSxRef("Date.prototype.getUTCDay()")}}
- La m&thode {{JSxRef("Date.prototype.setDate()")}}
