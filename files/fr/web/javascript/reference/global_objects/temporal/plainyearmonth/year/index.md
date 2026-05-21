---
title: "Temporal.PlainYearMonth : propriété year"
short-title: year
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/year
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La propriété d'accesseur **`year`** des instances de {{JSxRef("Temporal.PlainYearMonth")}} retourne un entier représentant le nombre d'années de ce mois et son année par rapport au début d'une année d'époque spécifique au calendrier. Elle dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers).

Le mutateur d'accesseur de `year` est `undefined`. Vous ne pouvez pas modifier cette propriété directement. Utilisez la méthode {{JSxRef("Temporal/PlainYearMonth/with", "with()")}} pour créer un nouvel objet `Temporal.PlainYearMonth` avec la nouvelle valeur souhaitée.

Pour des informations générales et plus d'exemples, voir {{JSxRef("Temporal/PlainDate/year", "Temporal.PlainDate.prototype.year")}}.

## Exemples

### Utiliser la propriété `year`

```js
const ym = Temporal.PlainYearMonth.from("2021-07"); // calendrier ISO 8601
console.log(ym.year); // 2021
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
- La propriété {{JSxRef("Temporal/PlainYearMonth/era", "Temporal.PlainYearMonth.prototype.era")}}
- La propriété {{JSxRef("Temporal/PlainYearMonth/eraYear", "Temporal.PlainYearMonth.prototype.eraYear")}}
- La propriété {{JSxRef("Temporal/PlainYearMonth/month", "Temporal.PlainYearMonth.prototype.month")}}
- La propriété {{JSxRef("Temporal/PlainDate/year", "Temporal.PlainDate.prototype.year")}}
