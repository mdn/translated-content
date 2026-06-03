---
title: "Temporal.PlainDate : propriété inLeapYear"
short-title: inLeapYear
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/inLeapYear
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La propriété d'accesseur **`inLeapYear`** des instances de {{JSxRef("Temporal.PlainDate")}} retourne un booléen indiquant si cette date se trouve dans une année bissextile. Une année bissextile est une année qui a plus de jours (en raison d'un jour ou d'un mois intercalaire) qu'une année commune. Cela dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers).

Pour le calendrier ISO 8601, une année bissextile est une année divisible par 4, sauf pour les années divisibles par 100, à moins que l'année ne soit également divisible par 400. Pour le calendrier ISO 8601, les années bissextiles ont 366 jours, tandis que les années communes ont 365 jours. Pour d'autres systèmes de calendrier, les règles peuvent différer, et les années bissextiles peuvent avoir des jours supplémentaires (comme un mois intercalaire).

Le mutateur d'accesseur de `inLeapYear` est `undefined`. Vous ne pouvez pas modifier cette propriété directement.

## Exemples

### Utiliser la propriété `inLeapYear`

```js
const date = Temporal.PlainDate.from("2021-07-01");
console.log(date.inLeapYear); // false
console.log(date.daysInYear); // 365
console.log(date.monthsInYear); // 12

const date2 = Temporal.PlainDate.from("2020-07-01");
console.log(date2.inLeapYear); // true
console.log(date2.daysInYear); // 366
console.log(date2.monthsInYear); // 12

const date3 = Temporal.PlainDate.from("2021-07-01[u-ca=chinese]");
console.log(date3.inLeapYear); // false
console.log(date3.daysInYear); // 354
console.log(date3.monthsInYear); // 12

const date4 = Temporal.PlainDate.from("2023-07-01[u-ca=chinese]");
console.log(date4.inLeapYear); // true
console.log(date4.daysInYear); // 384
console.log(date4.monthsInYear); // 13
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
- La propriété {{JSxRef("Temporal/PlainDate/daysInYear", "Temporal.PlainDate.prototype.daysInYear")}}
- La propriété {{JSxRef("Temporal/PlainDate/monthsInYear", "Temporal.PlainDate.prototype.monthsInYear")}}
