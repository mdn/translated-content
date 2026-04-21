---
title: "Temporal.PlainDateTime : propriété dayOfWeek"
short-title: dayOfWeek
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/dayOfWeek
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La propriété d'accesseur **`dayOfWeek`** des instances de {{JSxRef("Temporal.PlainDateTime")}} retourne un entier positif représentant l'index du jour dans la semaine de cette date, basé sur 1. Les jours de la semaine sont numérotés séquentiellement de `1` à {{JSxRef("Temporal/PlainDateTime/daysInWeek", "daysInWeek")}}, chaque numéro correspondant à son nom. Elle dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers) utilisé.

Le mutateur d'accesseur de `dayOfWeek` est `undefined`. Vous ne pouvez pas modifier cette propriété directement. Pour créer un nouvel objet `Temporal.PlainDateTime` avec la nouvelle valeur souhaitée de `dayOfWeek`, utilisez la méthode {{JSxRef("Temporal/PlainDateTime/add", "add()")}} ou {{JSxRef("Temporal/PlainDateTime/subtract", "subtract()")}} avec le nombre approprié de `days`.

Pour des informations générales et plus d'exemples, voir {{JSxRef("Temporal/PlainDate/dayOfWeek", "Temporal.PlainDate.prototype.dayOfWeek")}}.

## Exemples

### Utiliser la propriété `dayOfWeek`

```js
const dt = Temporal.PlainDateTime.from("2021-07-01");
console.log(dt.dayOfWeek); // 4 ; Thursday
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
- La propriété {{JSxRef("Temporal/PlainDateTime/day", "Temporal.PlainDateTime.prototype.day")}}
- La propriété {{JSxRef("Temporal/PlainDateTime/dayOfYear", "Temporal.PlainDateTime.prototype.dayOfYear")}}
- La propriété {{JSxRef("Temporal/PlainDateTime/daysInWeek", "Temporal.PlainDateTime.prototype.daysInWeek")}}
- La propriété {{JSxRef("Temporal/PlainDateTime/weekOfYear", "Temporal.PlainDateTime.prototype.weekOfYear")}}
- La propriété {{JSxRef("Temporal/PlainDateTime/yearOfWeek", "Temporal.PlainDateTime.prototype.yearOfWeek")}}
- La propriété {{JSxRef("Temporal/PlainDate/dayOfWeek", "Temporal.PlainDate.prototype.dayOfWeek")}}
