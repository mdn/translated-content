---
title: "Temporal.PlainYearMonth : propriété daysInMonth"
short-title: daysInMonth
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/daysInMonth
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La propriété d'accesseur **`daysInMonth`** des instances de {{JSxRef("Temporal.PlainYearMonth")}} retourne un entier positif représentant le nombre de jours dans le mois de cette date. Elle dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers).

Le mutateur d'accesseur de `daysInMonth` est `undefined`. Vous ne pouvez pas modifier cette propriété directement.

Pour des informations générales et plus d'exemples, voir {{JSxRef("Temporal/PlainDate/daysInMonth", "Temporal.PlainDate.prototype.daysInMonth")}}.

## Exemples

### Utiliser la propriété `daysInMonth`

```js
const ym = Temporal.PlainYearMonth.from("2021-07");
console.log(ym.daysInMonth); // 31
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
- La propriété {{JSxRef("Temporal/PlainYearMonth/month", "Temporal.PlainYearMonth.prototype.month")}}
- La propriété {{JSxRef("Temporal/PlainYearMonth/daysInYear", "Temporal.PlainYearMonth.prototype.daysInYear")}}
- La propriété {{JSxRef("Temporal/PlainDate/daysInMonth", "Temporal.PlainDate.prototype.daysInMonth")}}
