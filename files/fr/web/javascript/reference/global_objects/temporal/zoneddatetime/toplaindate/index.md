---
title: "Temporal.ZonedDateTime : méthode toPlainDate()"
short-title: toPlainDate()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/toPlainDate
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`toPlainDate()`** des instances de {{JSxRef("Temporal.ZonedDateTime")}} retourne un nouvel objet {{JSxRef("Temporal.PlainDate")}} représentant la partie date de cette date et heure.

## Syntaxe

```js-nolint
toPlainDate()
```

### Paramètres

Aucun.

### Valeur de retour

Un nouvel objet {{JSxRef("Temporal.PlainDate")}} représentant la partie date de cette date et heure.

## Exemples

### Utiliser la méthode `toPlainDate()`

```js
const zdt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:34:56.987654321-04:00[America/New_York]",
);
const plainDate = zdt.toPlainDate();
console.log(plainDate.toString()); // 2021-07-01
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.ZonedDateTime")}}
- L'objet {{JSxRef("Temporal.PlainDate")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/toPlainTime", "Temporal.ZonedDateTime.prototype.toPlainTime()")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/toPlainDateTime", "Temporal.ZonedDateTime.prototype.toPlainDateTime()")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/toInstant", "Temporal.ZonedDateTime.prototype.toInstant()")}}
- La méthode {{JSxRef("Temporal/PlainDate/toZonedDateTime", "Temporal.PlainDate.prototype.toZonedDateTime()")}}
