---
title: "Temporal.PlainDateTime : propriété inLeapYear"
short-title: inLeapYear
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/inLeapYear
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La propriété d'accesseur **`inLeapYear`** des instances de {{JSxRef("Temporal.PlainDateTime")}} retourne un booléen indiquant si cette date se trouve dans une année bissextile. Une année bissextile est une année qui a plus de jours (en raison d'un jour ou d'un mois intercalaire) qu'une année commune. Elle dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers).

Le mutateur d'accesseur de `inLeapYear` est `undefined`. Vous ne pouvez pas modifier cette propriété directement.

Pour des informations générales et plus d'exemples, voir {{JSxRef("Temporal/PlainDate/inLeapYear", "Temporal.PlainDate.prototype.inLeapYear")}}.

## Exemples

### Utiliser la propriété `inLeapYear`

```js
const dt = Temporal.PlainDateTime.from("2021-07-01");
console.log(dt.inLeapYear); // false
console.log(dt.daysInYear); // 365
console.log(dt.monthsInYear); // 12
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainDateTime")}}
- La méthode {{JSxRef("Temporal/PlainDateTime/with", "Temporal.PlainDateTime.prototype.with()")}}
- La méthode {{JSxRef("Temporal/PlainDateTime/add", "Temporal.PlainDateTime.prototype.add()")}}
- La méthode {{JSxRef("Temporal/PlainDateTime/subtract", "Temporal.PlainDateTime.prototype.subtract()")}}
- La propriété {{JSxRef("Temporal/PlainDateTime/year", "Temporal.PlainDateTime.prototype.year")}}
- La propriété {{JSxRef("Temporal/PlainDateTime/daysInYear", "Temporal.PlainDateTime.prototype.daysInYear")}}
- La propriété {{JSxRef("Temporal/PlainDateTime/monthsInYear", "Temporal.PlainDateTime.prototype.monthsInYear")}}
- La propriété {{JSxRef("Temporal/PlainDate/inLeapYear", "Temporal.PlainDate.prototype.inLeapYear")}}
