---
title: "Temporal.PlainDateTime : propriété month"
short-title: month
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/month
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La propriété d'accesseur **`month`** des instances de {{JSxRef("Temporal.PlainDateTime")}} retourne un entier positif représentant l'indice du mois basé sur 1 dans l'année de cette date. Le premier mois de cette année est `1`, et le dernier mois est le {{JSxRef("Temporal/PlainDateTime/monthsInYear", "monthsInYear")}}. Cela dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers).

Le mutateur d'accesseur de `month` est `undefined`. Vous ne pouvez pas modifier cette propriété directement. Utilisez la méthode {{JSxRef("Temporal/PlainDateTime/with", "with()")}} pour créer un nouvel objet `Temporal.PlainDateTime` avec la nouvelle valeur souhaitée.

Pour des informations générales et plus d'exemples, voir {{JSxRef("Temporal/PlainDate/month", "Temporal.PlainDate.prototype.month")}}.

## Exemples

### Utiliser la propriété `month`

```js
const dt = Temporal.PlainDateTime.from("2021-07-01"); // calendrier ISO 8601
console.log(dt.monthCode); // "M07"
console.log(dt.month); // 7
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
- La propriété {{JSxRef("Temporal/PlainDateTime/monthCode", "Temporal.PlainDateTime.prototype.monthCode")}}
- La propriété {{JSxRef("Temporal/PlainDateTime/daysInMonth", "Temporal.PlainDateTime.prototype.daysInMonth")}}
- La propriété {{JSxRef("Temporal/PlainDateTime/monthsInYear", "Temporal.PlainDateTime.prototype.monthsInYear")}}
- La propriété {{JSxRef("Temporal/PlainDate/month", "Temporal.PlainDate.prototype.month")}}
