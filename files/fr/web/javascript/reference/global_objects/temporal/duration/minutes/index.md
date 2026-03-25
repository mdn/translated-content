---
title: "Temporal.Duration : propriété minutes"
short-title: minutes
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/minutes
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La propriété d'accesseur **`minutes`** des instances de {{JSxRef("Temporal.Duration")}} retourne un entier représentant le nombre de minutes dans la durée.

Sauf si la durée est [équilibrée](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#équilibrage_des_durées), vous ne pouvez pas supposer la plage de cette valeur, mais vous pouvez connaître son signe en vérifiant la propriété [`sign`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/sign) de la durée. Si elle est équilibrée à une unité supérieure aux minutes, la valeur absolue de `minutes` sera comprise entre 0 et 59, inclus.

L'accesseur de mutateur de `minutes` est `undefined`. Vous ne pouvez pas modifier cette propriété directement. Utilisez la méthode {{JSxRef("Temporal/Duration/with", "with()")}} pour créer un nouvel objet `Temporal.Duration` avec la nouvelle valeur souhaitée.

## Exemples

### Utiliser la propriété `minutes`

```js
const d1 = Temporal.Duration.from({ hours: 1, minutes: 30 });
const d2 = Temporal.Duration.from({ hours: -1, minutes: -30 });
const d3 = Temporal.Duration.from({ hours: 1 });
const d4 = Temporal.Duration.from({ minutes: 60 });

console.log(d1.minutes); // 30
console.log(d2.minutes); // -30
console.log(d3.minutes); // 0
console.log(d4.minutes); // 60

// Équilibrer d4
const d4Balanced = d4.round({ largestUnit: "hours" });
console.log(d4Balanced.minutes); // 0
console.log(d4Balanced.hours); // 1
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
- La propriété {{JSxRef("Temporal/Duration/seconds", "Temporal.Duration.prototype.seconds")}}
- La propriété {{JSxRef("Temporal/Duration/milliseconds", "Temporal.Duration.prototype.milliseconds")}}
- La propriété {{JSxRef("Temporal/Duration/microseconds", "Temporal.Duration.prototype.microseconds")}}
- La propriété {{JSxRef("Temporal/Duration/nanoseconds", "Temporal.Duration.prototype.nanoseconds")}}
