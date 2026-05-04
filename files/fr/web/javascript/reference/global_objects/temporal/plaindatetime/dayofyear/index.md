---
title: "Temporal.PlainDateTime : propriété dayOfYear"
short-title: dayOfYear
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/dayOfYear
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La propriété d'accesseur **`dayOfYear`** des instances de {{JSxRef("Temporal.PlainDateTime")}} retourne un entier positif représentant l'index du jour dans l'année de cette date, basé sur 1. Le premier jour de cette année est `1`, et le dernier jour est le {{JSxRef("Temporal/PlainDateTime/daysInYear", "daysInYear")}}. Elle dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers) utilisé.

Le mutateur d'accesseur de `dayOfYear` est `undefined`. Vous ne pouvez pas modifier cette propriété directement. Pour créer un nouvel objet `Temporal.PlainDateTime` avec la nouvelle valeur souhaitée de `dayOfYear`, utilisez la méthode {{JSxRef("Temporal/PlainDateTime/add", "add()")}} ou {{JSxRef("Temporal/PlainDateTime/subtract", "subtract()")}} avec le nombre approprié de `days`.

Pour des informations générales et plus d'exemples, voir {{JSxRef("Temporal/PlainDate/dayOfYear", "Temporal.PlainDate.prototype.dayOfYear")}}.

## Exemples

### Utiliser la propriété `dayOfYear`

```js
const dt = Temporal.PlainDateTime.from("2021-07-01");
console.log(dt.dayOfYear); // 182
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
- La propriété {{JSxRef("Temporal/PlainDateTime/day", "Temporal.PlainDateTime.prototype.day")}}
- La propriété {{JSxRef("Temporal/PlainDateTime/dayOfWeek", "Temporal.PlainDateTime.prototype.dayOfWeek")}}
- La propriété {{JSxRef("Temporal/PlainDateTime/daysInYear", "Temporal.PlainDateTime.prototype.daysInYear")}}
- La propriété {{JSxRef("Temporal/PlainDate/dayOfYear", "Temporal.PlainDate.prototype.dayOfYear")}}
