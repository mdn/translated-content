---
title: "Temporal.ZonedDateTime : propriété daysInWeek"
short-title: daysInWeek
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/daysInWeek
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La propriété d'accesseur **`daysInWeek`** des instances de {{JSxRef("Temporal.ZonedDateTime")}} retourne un entier positif représentant le nombre de jours dans la semaine de cette date. Elle dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers).

Le mutateur d'accesseur de `daysInWeek` est `undefined`. Vous ne pouvez pas modifier cette propriété directement.

Pour des informations générales et plus d'exemples, voir {{JSxRef("Temporal/PlainDate/daysInWeek", "Temporal.PlainDate.prototype.daysInWeek")}}.

## Exemples

### Utiliser la propriété `daysInWeek`

```js
const dt = Temporal.ZonedDateTime.from("2021-07-01[America/New_York]");
console.log(dt.daysInWeek); // 7
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
- La propriété {{JSxRef("Temporal/ZonedDateTime/yearOfWeek", "Temporal.ZonedDateTime.prototype.yearOfWeek")}}
- La propriété {{JSxRef("Temporal/ZonedDateTime/weekOfYear", "Temporal.ZonedDateTime.prototype.weekOfYear")}}
- La propriété {{JSxRef("Temporal/ZonedDateTime/dayOfWeek", "Temporal.ZonedDateTime.prototype.dayOfWeek")}}
- La propriété {{JSxRef("Temporal/ZonedDateTime/daysInMonth", "Temporal.ZonedDateTime.prototype.daysInMonth")}}
- La propriété {{JSxRef("Temporal/ZonedDateTime/daysInYear", "Temporal.ZonedDateTime.prototype.daysInYear")}}
- La propriété {{JSxRef("Temporal/PlainDate/daysInWeek", "Temporal.PlainDate.prototype.daysInWeek")}}
