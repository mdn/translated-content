---
title: "Date : méthode toTemporalInstant()"
short-title: toTemporalInstant()
slug: Web/JavaScript/Reference/Global_Objects/Date/toTemporalInstant
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`toTemporalInstant()`** des instances de {{JSxRef("Date")}} retourne un nouvel objet {{JSxRef("Temporal.Instant")}} avec les même valeurs en {{JSxRef("Temporal/Instant/epochMilliseconds", "epochMilliseconds")}} que la date [timestamp](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide).

Utilisez cette méthode pour convertir des valeurs `Date` héritées en objets de l'API `Temporal`, puis convertissez-les en d'autres classes {{JSxRef("Temporal")}} si nécessaire.

## Syntaxe

```js-nolint
toTemporalInstant()
```

### Paramètres

Aucun.

### Valeur de retour

Un nouvel objet {{JSxRef("Temporal.Instant")}} ayant la même valeur de {{JSxRef("Temporal/Instant/epochMilliseconds", "epochMilliseconds")}} que l'horodatage de cette date. Ses composantes microsecondes et nanosecondes sont toujours `0`.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si la date est [invalide](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide) (son horodatage est `NaN`).

## Exemples

### Utiliser la méthode `toTemporalInstant()`

```js
const dateHeritee = new Date("2021-07-01T12:34:56.789Z");
const instant = dateHeritee.toTemporalInstant();

// Convertir ensuite en d'autres objets
const zdt = instant.toZonedDateTimeISO("UTC");
const date = zdt.toPlainDate();
console.log(date.toString()); // 2021-07-01
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.Instant")}}
- L'objet {{JSxRef("Temporal.ZonedDateTime")}}
- La méthode {{JSxRef("Temporal/Instant/fromEpochMilliseconds", "Temporal.Instant.fromEpochMilliseconds()")}}
