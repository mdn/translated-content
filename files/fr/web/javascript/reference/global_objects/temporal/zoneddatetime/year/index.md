---
title: "Temporal.ZonedDateTime : propriété year"
short-title: year
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/year
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La propriété accesseur **`year`** des instances de {{JSxRef("Temporal.ZonedDateTime")}} retourne un entier représentant le nombre d'années de cette date par rapport au début d'une année d'époque propre au calendrier. Cela dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers).

Le mutateur d'accesseur de `year` est `undefined`. Vous ne pouvez pas modifier cette propriété directement. Utilisez la méthode {{JSxRef("Temporal/ZonedDateTime/with", "with()")}} pour créer un nouvel objet `Temporal.ZonedDateTime` avec la nouvelle valeur souhaitée.

Pour des informations générales et plus d'exemples, voir {{JSxRef("Temporal/PlainDate/year", "Temporal.PlainDate.prototype.year")}}.

## Exemples

### Utiliser la propriété `year`

```js
const dt = Temporal.ZonedDateTime.from("2021-07-01[America/New_York]"); // calendrier ISO 8601
console.log(dt.year); // 2021
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
- La propriété {{JSxRef("Temporal/ZonedDateTime/era", "Temporal.ZonedDateTime.prototype.era")}}
- La propriété {{JSxRef("Temporal/ZonedDateTime/eraYear", "Temporal.ZonedDateTime.prototype.eraYear")}}
- La propriété {{JSxRef("Temporal/ZonedDateTime/yearOfWeek", "Temporal.ZonedDateTime.prototype.yearOfWeek")}}
- La propriété {{JSxRef("Temporal/ZonedDateTime/month", "Temporal.ZonedDateTime.prototype.month")}}
- La propriété {{JSxRef("Temporal/ZonedDateTime/day", "Temporal.ZonedDateTime.prototype.day")}}
- La propriété {{JSxRef("Temporal/PlainDate/year", "Temporal.PlainDate.prototype.year")}}
