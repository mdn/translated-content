---
title: "Temporal.ZonedDateTime : propriété monthsInYear"
short-title: monthsInYear
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/monthsInYear
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La propriété d'accesseur **`monthsInYear`** des instances de {{JSxRef("Temporal.ZonedDateTime")}} retourne un entier positif représentant le nombre de mois dans l'année de cette date. Elle dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers).

Le mutateur d'accesseur de `monthsInYear` est `undefined`. Vous ne pouvez pas modifier cette propriété directement.

Pour des informations générales et plus d'exemples, voir {{JSxRef("Temporal/PlainDate/monthsInYear", "Temporal.PlainDate.prototype.monthsInYear")}}.

## Exemples

### Utiliser la propriété `monthsInYear`

```js
const dt = Temporal.ZonedDateTime.from("2021-07-01[America/New_York]");
console.log(dt.monthsInYear); // 12
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.ZonedDateTime")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/add", "Temporal.ZonedDateTime.prototype.add()")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}}
- La propriété {{JSxRef("Temporal/ZonedDateTime/year", "Temporal.ZonedDateTime.prototype.year")}}
- La propriété {{JSxRef("Temporal/ZonedDateTime/month", "Temporal.ZonedDateTime.prototype.month")}}
- La propriété {{JSxRef("Temporal/ZonedDateTime/monthCode", "Temporal.ZonedDateTime.prototype.monthCode")}}
- La propriété {{JSxRef("Temporal/ZonedDateTime/daysInMonth", "Temporal.ZonedDateTime.prototype.daysInMonth")}}
- La propriété {{JSxRef("Temporal/PlainDate/monthsInYear", "Temporal.PlainDate.prototype.monthsInYear")}}
