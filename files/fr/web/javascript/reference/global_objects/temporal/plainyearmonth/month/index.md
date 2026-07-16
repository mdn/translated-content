---
title: "Temporal.PlainYearMonth : propriété month"
short-title: month
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/month
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La propriété d'accesseur **`month`** des instances de {{JSxRef("Temporal.PlainYearMonth")}} retourne un entier positif représentant l'indice du mois dans l'année de cet objet de mois et année, basé sur 1. Le premier mois de cette année est `1`, et le dernier mois est le {{JSxRef("Temporal/PlainYearMonth/monthsInYear", "monthsInYear")}}. Cela dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers).

Le motateur d'accesseur de `month` est `undefined`. Vous ne pouvez pas modifier cette propriété directement. Utilisez la méthode {{JSxRef("Temporal/PlainYearMonth/with", "with()")}} pour créer un nouvel objet `Temporal.PlainYearMonth` avec la nouvelle valeur souhaitée.

Pour des informations générales et plus d'exemples, voir {{JSxRef("Temporal/PlainDate/month", "Temporal.PlainDate.prototype.month")}}.

## Exemples

### Utiliser la propriété `month`

```js
const ym = Temporal.PlainYearMonth.from("2021-07"); // calendrier ISO 8601
console.log(ym.monthCode); // "M07"
console.log(ym.month); // 7
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainYearMonth")}}
- La méthode {{JSxRef("Temporal/PlainYearMonth/with", "Temporal.PlainYearMonth.prototype.with()")}}
- La méthode {{JSxRef("Temporal/PlainYearMonth/add", "Temporal.PlainYearMonth.prototype.add()")}}
- La méthode {{JSxRef("Temporal/PlainYearMonth/subtract", "Temporal.PlainYearMonth.prototype.subtract()")}}
- La propriété {{JSxRef("Temporal/PlainYearMonth/year", "Temporal.PlainYearMonth.prototype.year")}}
- La propriété {{JSxRef("Temporal/PlainYearMonth/monthCode", "Temporal.PlainYearMonth.prototype.monthCode")}}
- La propriété {{JSxRef("Temporal/PlainYearMonth/daysInMonth", "Temporal.PlainYearMonth.prototype.daysInMonth")}}
- La propriété {{JSxRef("Temporal/PlainYearMonth/monthsInYear", "Temporal.PlainYearMonth.prototype.monthsInYear")}}
- La propriété {{JSxRef("Temporal/PlainDate/month", "Temporal.PlainDate.prototype.month")}}
