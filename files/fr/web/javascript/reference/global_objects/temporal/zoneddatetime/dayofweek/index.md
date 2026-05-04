---
title: "Temporal.ZonedDateTime : propriété dayOfWeek"
short-title: dayOfWeek
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/dayOfWeek
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La propriété d'accesseur **`dayOfWeek`** des instances de {{JSxRef("Temporal.ZonedDateTime")}} retourne un entier positif représentant l'index du jour dans la semaine de cette date, basé sur 1. Les jours de la semaine sont numérotés séquentiellement de `1` à {{JSxRef("Temporal/ZonedDateTime/daysInWeek", "daysInWeek")}}, chaque numéro correspondant à son nom. Elle dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers).

Le mutateur d'accesseur de `dayOfWeek` est `undefined`. Vous ne pouvez pas modifier cette propriété directement. Pour créer un nouvel objet `Temporal.ZonedDateTime` avec la nouvelle valeur souhaitée de `dayOfWeek`, utilisez la méthode {{JSxRef("Temporal/ZonedDateTime/add", "add()")}} ou {{JSxRef("Temporal/ZonedDateTime/subtract", "subtract()")}} avec le nombre approprié de `days`.

Pour des informations générales et plus d'exemples, voir {{JSxRef("Temporal/PlainDate/dayOfWeek", "Temporal.PlainDate.prototype.dayOfWeek")}}.

## Exemples

### Utiliser la propriété `dayOfWeek`

```js
const dt = Temporal.ZonedDateTime.from("2021-07-01[America/New_York]");
console.log(dt.dayOfWeek); // 4 ; Jeudi
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
- La propriété {{JSxRef("Temporal/ZonedDateTime/day", "Temporal.ZonedDateTime.prototype.day")}}
- La propriété {{JSxRef("Temporal/ZonedDateTime/dayOfYear", "Temporal.ZonedDateTime.prototype.dayOfYear")}}
- La propriété {{JSxRef("Temporal/ZonedDateTime/daysInWeek", "Temporal.ZonedDateTime.prototype.daysInWeek")}}
- La propriété {{JSxRef("Temporal/ZonedDateTime/weekOfYear", "Temporal.ZonedDateTime.prototype.weekOfYear")}}
- La propriété {{JSxRef("Temporal/ZonedDateTime/yearOfWeek", "Temporal.ZonedDateTime.prototype.yearOfWeek")}}
- La propriété {{JSxRef("Temporal/PlainDate/dayOfWeek", "Temporal.PlainDate.prototype.dayOfWeek")}}
