---
title: "Temporal.PlainDateTime : propriété day"
short-title: day
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/day
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La propriété d'accesseur **`day`** des instances de {{JSxRef("Temporal.PlainDateTime")}} retourne un entier positif représentant l'index du jour dans le mois de cette date, basé sur 1, ce qui correspond au numéro du jour que vous verriez sur un calendrier. Elle dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers) utilisé.

Le mutateur d'accesseur de `day` est `undefined`. Vous ne pouvez pas modifier cette propriété directement. Utilisez la méthode {{JSxRef("Temporal/PlainDateTime/with", "with()")}} pour créer un nouvel objet `Temporal.PlainDateTime` avec la nouvelle valeur souhaitée.

Pour des informations générales et plus d'exemples, voir {{JSxRef("Temporal/PlainDate/day", "Temporal.PlainDate.prototype.day")}}.

## Exemples

### Utiliser la propriété `day`

```js
const dt = Temporal.PlainDateTime.from("2021-07-01"); // calendrier ISO 8601
console.log(dt.day); // 1
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
- La propriété {{JSxRef("Temporal/PlainDateTime/month", "Temporal.PlainDateTime.prototype.month")}}
- La propriété {{JSxRef("Temporal/PlainDateTime/daysInMonth", "Temporal.PlainDateTime.prototype.daysInMonth")}}
- La propriété {{JSxRef("Temporal/PlainDateTime/dayOfWeek", "Temporal.PlainDateTime.prototype.dayOfWeek")}}
- La propriété {{JSxRef("Temporal/PlainDateTime/dayOfYear", "Temporal.PlainDateTime.prototype.dayOfYear")}}
- La propriété {{JSxRef("Temporal/PlainDate/day", "Temporal.PlainDate.prototype.day")}}
