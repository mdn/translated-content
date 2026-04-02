---
title: "Temporal.ZonedDateTime : propriété epochNanoseconds"
short-title: epochNanoseconds
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/epochNanoseconds
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La propriété d'accesseur **`epochNanoseconds`** des instances de {{JSxRef("Temporal.ZonedDateTime")}} retourne un grand entier ({{JSxRef("BigInt")}}) représentant le nombre de nanosecondes écoulées depuis l'époque Unix (minuit au début du 1er janvier 1970, UTC) jusqu'à cet instant.

Le mutateur d'accesseur de `epochNanoseconds` est `undefined`. Vous ne pouvez pas modifier cette propriété directement. Pour créer un nouvel objet `Temporal.ZonedDateTime` avec la nouvelle valeur souhaitée de `epochNanoseconds`, utilisez le constructeur {{JSxRef("Temporal/ZonedDateTime/ZonedDateTime", "new Temporal.ZonedDateTime()")}} à la place.

Un instant ne peut représenter que ±10<sup>8</sup> jours (environ ±273 972,6 ans) autour de l'époque, soit ±8,64e21 nanosecondes. Tenter de définir `epochNanoseconds` au-delà de cette limite déclenche une {{JSxRef("RangeError")}}.

## Exemples

### Utiliser la propriété `epochNanoseconds`

```js
const zdt = Temporal.ZonedDateTime.from("2021-08-01T12:34:56.789Z[UTC]");
console.log(zdt.epochNanoseconds); // 1627821296789000000n

const zdt2 = Temporal.ZonedDateTime.from("1969-08-01T12:34:56.789Z[UTC]");
console.log(zdt2.epochNanoseconds); // -13173903211000000n
```

### Créer un objet `ZonedDateTime` à partir d'une valeur `epochNanoseconds`

Vous pouvez créer un objet `Temporal.ZonedDateTime` à partir d'une valeur `epochNanoseconds` en utilisant le constructeur {{JSxRef("Temporal/ZonedDateTime/ZonedDateTime", "Temporal.ZonedDateTime()")}}.

```js
const epochNanoseconds = 1627821296789000000n;
const zdt = new Temporal.ZonedDateTime(epochNanoseconds, "UTC");
console.log(zdt.toString()); // 2021-08-01T12:34:56.789+00:00[UTC]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.ZonedDateTime")}}
- La propriété {{JSxRef("Temporal/ZonedDateTime/epochMilliseconds", "Temporal.ZonedDateTime.prototype.epochMilliseconds")}}
