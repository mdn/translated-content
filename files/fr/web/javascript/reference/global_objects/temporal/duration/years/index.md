---
title: "Temporal.Duration : propriété years"
short-title: years
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/years
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La propriété d'accesseur **`years`** des instances de {{JSxRef("Temporal.Duration")}} retourne un entier représentant le nombre d'années dans la durée.

Vous pouvez connaître le signe de `years` en vérifiant la propriété [`sign`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/sign) de la durée.

Le mutateur d'accesseur de `years` est `undefined`. Vous ne pouvez pas modifier cette propriété directement. Utilisez la méthode {{JSxRef("Temporal/Duration/with", "with()")}} pour créer un nouvel objet `Temporal.Duration` avec la nouvelle valeur souhaitée.

## Exemples

### Utiliser la propriété `years`

```js
const d1 = Temporal.Duration.from({ years: 1, months: 1 });
const d2 = Temporal.Duration.from({ years: -1, months: -1 });
const d3 = Temporal.Duration.from({ years: 1 });
const d4 = Temporal.Duration.from({ months: 12 });

console.log(d1.years); // 1
console.log(d2.years); // -1
console.log(d3.years); // 1
console.log(d4.years); // 0

// Équilibrer d4
const d4Balanced = d4.round({
  largestUnit: "years",
  relativeTo: Temporal.PlainDate.from("2021-01-01"), // calendrier ISO 8601
});
console.log(d4Balanced.years); // 1
console.log(d4Balanced.months); // 0
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.Duration")}}
- La propriété {{JSxRef("Temporal/Duration/months", "Temporal.Duration.prototype.months")}}
- La propriété {{JSxRef("Temporal/Duration/weeks", "Temporal.Duration.prototype.weeks")}}
- La propriété {{JSxRef("Temporal/Duration/days", "Temporal.Duration.prototype.days")}}
- La propriété {{JSxRef("Temporal/Duration/hours", "Temporal.Duration.prototype.hours")}}
- La propriété {{JSxRef("Temporal/Duration/minutes", "Temporal.Duration.prototype.minutes")}}
- La propriété {{JSxRef("Temporal/Duration/seconds", "Temporal.Duration.prototype.seconds")}}
- La propriété {{JSxRef("Temporal/Duration/milliseconds", "Temporal.Duration.prototype.milliseconds")}}
- La propriété {{JSxRef("Temporal/Duration/microseconds", "Temporal.Duration.prototype.microseconds")}}
- La propriété {{JSxRef("Temporal/Duration/nanoseconds", "Temporal.Duration.prototype.nanoseconds")}}
