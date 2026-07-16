---
title: "Temporal.PlainDate : méthode toPlainMonthDay()"
short-title: toPlainMonthDay()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/toPlainMonthDay
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`toPlainMonthDay()`** des instances de {{JSxRef("Temporal.PlainDate")}} retourne un nouvel objet {{JSxRef("Temporal.PlainMonthDay")}} représentant le {{JSxRef("Temporal/PlainDate/monthCode", "monthCode")}} et le {{JSxRef("Temporal/PlainDate/day", "day")}} de cette date dans le même système de calendrier.

Notez que les objets `PlainMonthDay` n'ont pas de composant `month`, car les mois portant le même nom peuvent avoir des indices de `month` différents selon les années en raison des mois intercalaires.

## Syntaxe

```js-nolint
toPlainMonthDay()
```

### Paramètres

Aucun.

### Valeur de retour

Un nouvel objet `Temporal.PlainMonthDay` représentant le {{JSxRef("Temporal/PlainDate/monthCode", "monthCode")}} et le {{JSxRef("Temporal/PlainDate/day", "day")}} de cette date dans le même système de calendrier.

## Exemples

### Utiliser la méthode `toPlainMonthDay()`

```js
const date = Temporal.PlainDate.from("2021-07-01");
const monthDay = date.toPlainMonthDay();
console.log(monthDay.toString()); // 07-01
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainDate")}}
- L'objet {{JSxRef("Temporal.PlainMonthDay")}}
- La méthode {{JSxRef("Temporal/PlainDate/toPlainDateTime", "Temporal.PlainDate.prototype.toPlainDateTime()")}}
- La méthode {{JSxRef("Temporal/PlainDate/toPlainYearMonth", "Temporal.PlainDate.prototype.toPlainYearMonth()")}}
- La méthode {{JSxRef("Temporal/PlainDate/toZonedDateTime", "Temporal.PlainDate.prototype.toZonedDateTime()")}}
- La méthode {{JSxRef("Temporal/PlainMonthDay/toPlainDate", "Temporal.PlainMonthDay.prototype.toPlainDate()")}}
