---
title: "Temporal.Duration : propriété nanoseconds"
short-title: nanoseconds
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/nanoseconds
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La propriété d'accesseur **`nanoseconds`** des instances de {{JSxRef("Temporal.Duration")}} retourne un entier représentant le nombre de nanosecondes dans la durée.

Sauf si la durée est [équilibrée](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#équilibrage_des_durées), vous ne pouvez pas supposer la plage de cette valeur, mais vous pouvez connaître son signe en vérifiant la propriété [`sign`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/sign) de la durée. Si elle est équilibrée à une unité supérieure aux nanosecondes, la valeur absolue de `nanoseconds` sera comprise entre 0 et 999, inclus.

L'accesseur de mutateur de `nanoseconds` est `undefined`. Vous ne pouvez pas modifier cette propriété directement. Utilisez la méthode {{JSxRef("Temporal/Duration/with", "with()")}} pour créer un nouvel objet `Temporal.Duration` avec la nouvelle valeur souhaitée.

## Exemples

### Utiliser la propriété `nanoseconds`

```js
const d1 = Temporal.Duration.from({ microseconds: 1, nanoseconds: 500 });
const d2 = Temporal.Duration.from({ microseconds: -1, nanoseconds: -500 });
const d3 = Temporal.Duration.from({ microseconds: 1 });
const d4 = Temporal.Duration.from({ nanoseconds: 1000 });

console.log(d1.nanoseconds); // 500
console.log(d2.nanoseconds); // -500
console.log(d3.nanoseconds); // 0
console.log(d4.nanoseconds); // 1000

// Équilibrer d4
const d4Balanced = d4.round({ largestUnit: "microseconds" });
console.log(d4Balanced.nanoseconds); // 0
console.log(d4Balanced.microseconds); // 1
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.Duration")}}
- La propriété {{JSxRef("Temporal/Duration/years", "Temporal.Duration.prototype.years")}}
- La propriété {{JSxRef("Temporal/Duration/months", "Temporal.Duration.prototype.months")}}
- La propriété {{JSxRef("Temporal/Duration/weeks", "Temporal.Duration.prototype.weeks")}}
- La propriété {{JSxRef("Temporal/Duration/days", "Temporal.Duration.prototype.days")}}
- La propriété {{JSxRef("Temporal/Duration/hours", "Temporal.Duration.prototype.hours")}}
- La propriété {{JSxRef("Temporal/Duration/minutes", "Temporal.Duration.prototype.minutes")}}
- La propriété {{JSxRef("Temporal/Duration/seconds", "Temporal.Duration.prototype.seconds")}}
- La propriété {{JSxRef("Temporal/Duration/milliseconds", "Temporal.Duration.prototype.milliseconds")}}
- La propriété {{JSxRef("Temporal/Duration/microseconds", "Temporal.Duration.prototype.microseconds")}}
