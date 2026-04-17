---
title: "Temporal.ZonedDateTime : propriété offset"
short-title: offset
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/offset
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La propriété d'accesseur **`offset`** des instances de {{JSxRef("Temporal.ZonedDateTime")}} retourne une chaîne de caractères représentant le [décalage](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#fuseaux_horaires_et_décalages) utilisé pour interpréter l'instant interne, sous la forme `±HH:mm` (ou `±HH:mm:ss.sssssssss` avec autant de précision sous la minute que nécessaire). Ce décalage est garanti comme étant valide pour l'instant et le fuseau horaire donnés lors de la construction.

Le mutateur d'accesseur de `offset` est `undefined`. Vous ne pouvez pas modifier cette propriété directement. Utilisez la méthode {{JSxRef("Temporal/ZonedDateTime/with", "with()")}} pour créer un nouvel objet `Temporal.ZonedDateTime` avec la nouvelle valeur souhaitée (ce qui change généralement aussi la date et l'heure), ou utilisez la méthode {{JSxRef("Temporal/ZonedDateTime/withTimeZone", "withTimeZone()")}} pour créer un nouvel objet `Temporal.ZonedDateTime` dans un autre fuseau horaire.

## Exemples

### Utiliser la propriété `offset`

```js
const dt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:00:00-07:00[America/Los_Angeles]",
);
console.log(dt.offset); // "-07:00"

const dt2 = Temporal.ZonedDateTime.from("2021-07-01T12:00:00-07[-07]");
console.log(dt2.offset); // "-07:00"

const dt3 = Temporal.ZonedDateTime.from(
  "1900-01-01T00:00:00+00:09:21[Europe/Paris]",
);
console.log(dt3.offset); // "+00:09:21"

const dt4 = Temporal.ZonedDateTime.from("2021-07-01T12:00:00Z[Asia/Shanghai]");
console.log(dt4.offset); // "+08:00"
```

### Changer le décalage

Si l'heure locale a deux décalages valides, par exemple lors d'un passage à l'heure d'été, il est possible de changer le décalage sans rien modifier d'autre&nbsp;:

```js
const zdt = Temporal.ZonedDateTime.from(
  "2024-11-03T01:05:00-04:00[America/New_York]",
);
const newZDT = zdt.with({ offset: "-05:00" });
console.log(newZDT.toString()); // "2024-11-03T01:05:00-05:00[America/New_York]"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.ZonedDateTime")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/withTimeZone", "Temporal.ZonedDateTime.prototype.withTimeZone()")}}
- La propriété {{JSxRef("Temporal/ZonedDateTime/timeZoneId", "Temporal.ZonedDateTime.prototype.timeZoneId")}}
- La propriété {{JSxRef("Temporal/ZonedDateTime/offsetNanoseconds", "Temporal.ZonedDateTime.prototype.offsetNanoseconds")}}
