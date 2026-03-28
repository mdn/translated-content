---
title: "Temporal.PlainDate : méthode toPlainYearMonth()"
short-title: toPlainYearMonth()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/toPlainYearMonth
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`toPlainYearMonth()`** des instances de {{JSxRef("Temporal.PlainDate")}} retourne un nouvel objet {{JSxRef("Temporal.PlainYearMonth")}} représente une année ({{JSxRef("Temporal/PlainDate/year", "year")}}) et un mois ({{JSxRef("Temporal/PlainDate/month", "month")}}) de cette date dans le même système de calendrier.

## Syntaxe

```js-nolint
toPlainYearMonth()
```

### Paramètres

Aucun.

### Valeur de retour

Un nouvel objet `Temporal.PlainYearMonth` représente une année ({{JSxRef("Temporal/PlainDate/year", "year")}}) et un mois ({{JSxRef("Temporal/PlainDate/month", "month")}}) de cette date dans le même système de calendrier.

## Exemples

### Utiliser la méthode `toPlainYearMonth()`

```js
const date = Temporal.PlainDate.from("2021-07-01");
const yearMonth = date.toPlainYearMonth();
console.log(yearMonth.toString()); // 2021-07
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainDate")}}
- L'objet {{JSxRef("Temporal.PlainYearMonth")}}
- La méthode {{JSxRef("Temporal/PlainDate/toPlainDateTime", "Temporal.PlainDate.prototype.toPlainDateTime()")}}
- La méthode {{JSxRef("Temporal/PlainDate/toPlainMonthDay", "Temporal.PlainDate.prototype.toPlainMonthDay()")}}
- La méthode {{JSxRef("Temporal/PlainDate/toZonedDateTime", "Temporal.PlainDate.prototype.toZonedDateTime()")}}
- La méthode {{JSxRef("Temporal/PlainYearMonth/toPlainDate", "Temporal.PlainYearMonth.prototype.toPlainDate()")}}
