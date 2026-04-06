---
title: "Temporal.ZonedDateTime : propriété dayOfYear"
short-title: dayOfYear
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/dayOfYear
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La propriété d'accesseur **`dayOfYear`** des instances de {{JSxRef("Temporal.ZonedDateTime")}} retourne un entier positif représentant l'index du jour dans l'année de cette date, basé sur 1. Le premier jour de cette année est `1`, et le dernier jour est {{JSxRef("Temporal/ZonedDateTime/daysInYear", "daysInYear")}}. Elle dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers).

La propriété d'accesseur de `dayOfYear` est `undefined`. Vous ne pouvez pas modifier cette propriété directement. Pour créer un nouvel objet `Temporal.ZonedDateTime` avec la nouvelle valeur souhaitée de `dayOfYear`, utilisez la méthode {{JSxRef("Temporal/ZonedDateTime/add", "add()")}} ou {{JSxRef("Temporal/ZonedDateTime/subtract", "subtract()")}} avec le nombre approprié de `days`.

Pour des informations générales et plus d'exemples, voir {{JSxRef("Temporal/PlainDate/dayOfYear", "Temporal.PlainDate.prototype.dayOfYear")}}.

## Exemples

### Utiliser la propriété `dayOfYear`

```js
const dt = Temporal.ZonedDateTime.from("2021-07-01[America/New_York]");
console.log(dt.dayOfYear); // 182
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
- La propriété {{JSxRef("Temporal/ZonedDateTime/dayOfWeek", "Temporal.ZonedDateTime.prototype.dayOfWeek")}}
- La propriété {{JSxRef("Temporal/ZonedDateTime/daysInYear", "Temporal.ZonedDateTime.prototype.daysInYear")}}
- La propriété {{JSxRef("Temporal/PlainDate/dayOfYear", "Temporal.PlainDate.prototype.dayOfYear")}}
