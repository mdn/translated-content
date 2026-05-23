---
title: "Temporal.PlainDate : propriété daysInYear"
short-title: daysInYear
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/daysInYear
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La propriété d'accesseur **`daysInYear`** des instances de {{JSxRef("Temporal.PlainDate")}} retourne un entier positif représentant le nombre de jours dans l'année de cette date. Elle dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers).

Pour le calendrier ISO 8601, cela correspond à 365, ou 366 dans une année bissextile. Dans d'autres systèmes de calendrier, cela peut varier, en particulier dans les calendriers non solaires.

Le mutateur d'accesseur de `daysInYear` est `undefined`. Vous ne pouvez pas modifier cette propriété directement.

## Exemples

### Utiliser la propriété `daysInYear`

```js
const date = Temporal.PlainDate.from("2021-07-01");
console.log(date.daysInYear); // 365

const date2 = Temporal.PlainDate.from("2020-07-01");
console.log(date2.daysInYear); // 366 ; 2020 est une année bissextile

const date3 = Temporal.PlainDate.from("2021-07-01[u-ca=chinese]");
console.log(date3.daysInYear); // 354

const date4 = Temporal.PlainDate.from("2023-07-01[u-ca=chinese]");
console.log(date4.daysInYear); // 384 ; 2023 est une année bissextile chinoise
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainDate")}}
- La méthode {{JSxRef("Temporal/PlainDate/with", "Temporal.PlainDate.prototype.with()")}}
- La méthode {{JSxRef("Temporal/PlainDate/add", "Temporal.PlainDate.prototype.add()")}}
- La méthode {{JSxRef("Temporal/PlainDate/subtract", "Temporal.PlainDate.prototype.subtract()")}}
- La propriété {{JSxRef("Temporal/PlainDate/year", "Temporal.PlainDate.prototype.year")}}
- La propriété {{JSxRef("Temporal/PlainDate/dayOfYear", "Temporal.PlainDate.prototype.dayOfYear")}}
- La propriété {{JSxRef("Temporal/PlainDate/daysInMonth", "Temporal.PlainDate.prototype.daysInMonth")}}
- La propriété {{JSxRef("Temporal/PlainDate/daysInWeek", "Temporal.PlainDate.prototype.daysInWeek")}}
