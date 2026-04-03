---
title: "Temporal.ZonedDateTime : propriété offsetNanoseconds"
short-title: offsetNanoseconds
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/offsetNanoseconds
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La propriété d'accesseur **`offsetNanoseconds`** des instances de {{JSxRef("Temporal.ZonedDateTime")}} retourne un entier représentant le [décalage](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#fuseaux_horaires_et_décalages) utilisé pour interpréter l'instant interne, en nombre de nanosecondes (positif ou négatif). La valeur est un entier sûr car elle est inférieure à une journée, soit 8,64e<sup>15</sup> nanosecondes.

Le mutateur d'accesseur de `offsetNanoseconds` est `undefined`. Vous ne pouvez pas modifier cette propriété directement. Modifiez {{JSxRef("Temporal/ZonedDateTime/offset", "offset")}} pour modifier également cette propriété.

## Exemples

### Utiliser la propriété `offsetNanoseconds`

```js
const dt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:00:00-07:00[America/Los_Angeles]",
);
console.log(dt.offsetNanoseconds); // -25200000000000

const dt2 = Temporal.ZonedDateTime.from(
  "2021-07-01T12:00:00+08:00[Asia/Shanghai]",
);
console.log(dt2.offsetNanoseconds); // 28800000000000

const dt3 = Temporal.ZonedDateTime.from(
  "1900-01-01T00:00:00+00:09:21[Europe/Paris]",
);
console.log(dt3.offsetNanoseconds); // 561000000000
```

Voici une façon d'obtenir un `ZonedDateTime` représentant la même heure affichée en UTC&nbsp;:

```js
const dt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:00:00-07:00[America/Los_Angeles]",
);
const dtInUTC = dt.add({ nanoseconds: dt.offsetNanoseconds });
console.log(dtInUTC.withTimeZone("UTC").toString()); // "2021-07-01T12:00:00+00:00[UTC]"
```

Voici une meilleure façon d'obtenir le même résultat&nbsp;:

```js
const dt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:00:00-07:00[America/Los_Angeles]",
);
const dtInUTC = dt.toPlainDateTime().toZonedDateTime("UTC");
console.log(dtInUTC.toString()); // "2021-07-01T12:00:00+00:00[UTC]"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.ZonedDateTime")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/withTimeZone", "Temporal.ZonedDateTime.prototype.withTimeZone()")}}
- La propriété {{JSxRef("Temporal/ZonedDateTime/offset", "Temporal.ZonedDateTime.prototype.offset")}}
- La propriété {{JSxRef("Temporal/ZonedDateTime/timeZoneId", "Temporal.ZonedDateTime.prototype.timeZoneId")}}
