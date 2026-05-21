---
title: "Temporal.ZonedDateTime : méthode toInstant()"
short-title: toInstant()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/toInstant
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`toInstant()`** des instances de {{JSxRef("Temporal.ZonedDateTime")}} retourne un nouvel objet {{JSxRef("Temporal.Instant")}} représentant l'instant de cette date et cette heure.

## Syntaxe

```js-nolint
toInstant()
```

### Paramètres

Aucun.

### Valeur de retour

Un nouvel objet {{JSxRef("Temporal.Instant")}} représentant l'instant de cette date et cette heure.

## Exemples

### Utiliser la méthode `toInstant()`

```js
const zdt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:34:56.987654321-04:00[America/New_York]",
);
const instant = zdt.toInstant();
console.log(instant.toString()); // 2021-07-01T16:34:56.987654321Z
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.ZonedDateTime")}}
- L'objet {{JSxRef("Temporal.Instant")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/toPlainDate", "Temporal.ZonedDateTime.prototype.toPlainDate()")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/toPlainTime", "Temporal.ZonedDateTime.prototype.toPlainTime()")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/toPlainDateTime", "Temporal.ZonedDateTime.prototype.toPlainDateTime()")}}
- La méthode {{JSxRef("Temporal/Instant/toZonedDateTimeISO", "Temporal.Instant.prototype.toZonedDateTimeISO()")}}
