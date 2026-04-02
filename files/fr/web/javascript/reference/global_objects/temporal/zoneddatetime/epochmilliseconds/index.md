---
title: "Temporal.ZonedDateTime : propriété epochMilliseconds"
short-title: epochMilliseconds
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/epochMilliseconds
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La propriété d'accesseur **`epochMilliseconds`** des instances de {{JSxRef("Temporal.ZonedDateTime")}} retourne un entier représentant le nombre de millisecondes écoulées depuis l'époque Unix (minuit au début du 1er janvier 1970, UTC) jusqu'à cet instant. Elle est équivalente à la division de `epochNanoseconds` par `1e6` et à l'arrondi inférieur du résultat.

Le mutateur d'accesseur de `epochMilliseconds` est `undefined`. Vous ne pouvez pas modifier cette propriété directement. Pour créer un nouvel objet `Temporal.ZonedDateTime` avec la nouvelle valeur souhaitée de `epochMilliseconds`, voir ci-dessous.

## Exemples

### Utiliser la propriété `epochMilliseconds`

```js
const zdt = Temporal.ZonedDateTime.from("2021-08-01T12:34:56.789Z[UTC]");
console.log(zdt.epochMilliseconds); // 1627821296789

const zdt2 = Temporal.ZonedDateTime.from("1969-08-01T12:34:56.789Z[UTC]");
console.log(zdt2.epochMilliseconds); // -13173903211
```

### Créer un objet `ZonedDateTime` à partir d'une valeur `epochMilliseconds`

Vous pouvez créer un objet `Temporal.ZonedDateTime` à partir d'une valeur `epochMilliseconds` en construisant d'abord un objet `Temporal.Instant` à l'aide de {{JSxRef("Temporal/Instant/fromEpochMilliseconds", "Temporal.Instant.fromEpochMilliseconds()")}}, puis en le convertissant en un objet `Temporal.ZonedDateTime` à l'aide de {{JSxRef("Temporal/Instant/toZonedDateTimeISO", "Temporal.Instant.prototype.toZonedDateTimeISO()")}}&nbsp;:

```js
const epochMilliseconds = 1627821296789;
const instant = Temporal.Instant.fromEpochMilliseconds(epochMilliseconds);
const zdt = instant.toZonedDateTimeISO("UTC");
console.log(zdt.toString()); // 2021-08-01T12:34:56.789+00:00[UTC]
```

Vous pouvez également utiliser le constructeur {{JSxRef("Temporal/ZonedDateTime/ZonedDateTime", "Temporal.ZonedDateTime()")}}, mais convertissez d'abord les millisecondes en nanosecondes&nbsp;:

```js
const epochMilliseconds = 1627821296789;
const epochNanoseconds = BigInt(epochMilliseconds) * 1_000_000n;
const zdt = new Temporal.ZonedDateTime(epochNanoseconds, "UTC");
console.log(zdt.toString()); // 2021-08-01T12:34:56.789+00:00[UTC]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.ZonedDateTime")}}
- La propriété {{JSxRef("Temporal/ZonedDateTime/epochNanoseconds", "Temporal.ZonedDateTime.prototype.epochNanoseconds")}}
