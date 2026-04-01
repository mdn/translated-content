---
title: "Temporal.ZonedDateTime : propriété month"
short-title: month
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/month
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La propriété d'accesseur **`month`** des instances de {{JSxRef("Temporal.ZonedDateTime")}} retourne un entier positif représentant l'indice du mois dans l'année de cette date, basé sur 1. Le premier mois de cette année est `1`, et le dernier mois est le {{JSxRef("Temporal/ZonedDateTime/monthsInYear", "monthsInYear")}}. Cela dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers).

Le mutateur d'accesseur de `month` est `undefined`. Vous ne pouvez pas modifier cette propriété directement. Utilisez la méthode {{JSxRef("Temporal/ZonedDateTime/with", "with()")}} pour créer un nouvel objet `Temporal.ZonedDateTime` avec la nouvelle valeur souhaitée.

Pour des informations générales et plus d'exemples, voir {{JSxRef("Temporal/PlainDate/month", "Temporal.PlainDate.prototype.month")}}.

## Exemples

### Utiliser la propriété `month`

```js
const dt = Temporal.ZonedDateTime.from("2021-07-01[America/New_York]"); // calendrier ISO 8601
console.log(dt.monthCode); // "M07"
console.log(dt.month); // 7
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
- La propriété {{JSxRef("Temporal/ZonedDateTime/day", "Temporal.ZonedDateTime.prototype.day")}}
- La propriété {{JSxRef("Temporal/ZonedDateTime/monthCode", "Temporal.ZonedDateTime.prototype.monthCode")}}
- La propriété {{JSxRef("Temporal/ZonedDateTime/daysInMonth", "Temporal.ZonedDateTime.prototype.daysInMonth")}}
- La propriété {{JSxRef("Temporal/ZonedDateTime/monthsInYear", "Temporal.ZonedDateTime.prototype.monthsInYear")}}
- La propriété {{JSxRef("Temporal/PlainDate/month", "Temporal.PlainDate.prototype.month")}}
