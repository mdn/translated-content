---
title: "Temporal.PlainDate : méthode toPlainDateTime()"
short-title: toPlainDateTime()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/toPlainDateTime
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`toPlainDateTime()`** des instances de {{JSxRef("Temporal.PlainDate")}} retourne un nouvel objet {{JSxRef("Temporal.PlainDateTime")}} représentant cette date et une heure fournie dans le même système de calendrier.

## Syntaxe

```js-nolint
toPlainDateTime()
toPlainDateTime(plainTime)
```

### Paramètres

- `plainTime` {{Optional_Inline}}
  - : Une chaîne de caractères, un objet ou une instance de {{JSxRef("Temporal.PlainTime")}} représentant le composant horaire du `PlainDateTime` résultant. Il est converti en un objet `Temporal.PlainTime` en utilisant le même algorithme que {{JSxRef("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}}. Par défaut, il est `"00:00:00"`.

### Valeur de retour

Un nouvel objet `Temporal.PlainDateTime` représentant la date et l'heure définies par cette date et `plainTime`, interprétées dans le système de calendrier de cette date.

## Exemples

### Utiliser la méthode `toPlainDateTime()`

```js
const date = Temporal.PlainDate.from("2021-07-01");
const dateTime = date.toPlainDateTime("12:34:56");
console.log(dateTime.toString()); // 2021-07-01T12:34:56

const midnight = date.toPlainDateTime();
console.log(midnight.toString()); // 2021-07-01T00:00:00

const date2 = Temporal.PlainDate.from("2021-07-01[u-ca=chinese]");
const dateTime2 = date2.toPlainDateTime("12:34:56");
console.log(dateTime2.toString()); // 2021-07-01T12:34:56[u-ca=chinese]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainDate")}}
- L'objet {{JSxRef("Temporal.PlainDateTime")}}
- L'objet {{JSxRef("Temporal.PlainTime")}}
- La méthode {{JSxRef("Temporal/PlainDate/toPlainMonthDay", "Temporal.PlainDate.prototype.toPlainMonthDay()")}}
- La méthode {{JSxRef("Temporal/PlainDate/toPlainYearMonth", "Temporal.PlainDate.prototype.toPlainYearMonth()")}}
- La méthode {{JSxRef("Temporal/PlainDate/toZonedDateTime", "Temporal.PlainDate.prototype.toZonedDateTime()")}}
- La méthode {{JSxRef("Temporal/PlainDateTime/toPlainDate", "Temporal.PlainDateTime.prototype.toPlainDate()")}}
