---
title: "Temporal.PlainYearMonth : propriété daysInYear"
short-title: daysInYear
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/daysInYear
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La propriété d'accesseur **`daysInYear`** des instances de {{JSxRef("Temporal.PlainYearMonth")}} retourne un entier positif représentant le nombre de jours dans l'année de cette date. Elle dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers).

Le mutateur d'accesseur de `daysInYear` est `undefined`. Vous ne pouvez pas modifier cette propriété directement.

Pour des informations générales et plus d'exemples, voir {{JSxRef("Temporal/PlainDate/daysInYear", "Temporal.PlainDate.prototype.daysInYear")}}.

## Exemples

### Utiliser la propriété `daysInYear`

```js
const ym = Temporal.PlainYearMonth.from("2021-07");
console.log(ym.daysInYear); // 365
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
- La propriété {{JSxRef("Temporal/PlainYearMonth/daysInMonth", "Temporal.PlainYearMonth.prototype.daysInMonth")}}
- La propriété {{JSxRef("Temporal/PlainDate/daysInYear", "Temporal.PlainDate.prototype.daysInYear")}}
