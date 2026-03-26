---
title: "Temporal.Duration : propriété days"
short-title: days
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/days
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La propriété d'accesseur **`days`** des instances de {{JSxRef("Temporal.Duration")}} retourne un entier représentant le nombre de jours dans la durée.

Sauf si la durée est [équilibrée](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#équilibrage_des_durées), vous ne pouvez pas supposer la plage de cette valeur, mais vous pouvez connaître son signe en vérifiant la propriété [`sign`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/sign) de la durée. Si elle est équilibrée à une unité supérieure aux jours, la plage de la valeur absolue de `days` dépend du calendrier (combien de jours il y a dans une semaine ou un mois).

L'accesseur de mutateur de `days` est `undefined`. Vous ne pouvez pas modifier cette propriété directement. Utilisez la méthode {{JSxRef("Temporal/Duration/with", "with()")}} pour créer un nouvel objet `Temporal.Duration` avec la nouvelle valeur souhaitée.

## Exemples

### Utiliser la propriété `days`

```js
const d1 = Temporal.Duration.from({ weeks: 1, days: 1 });
const d2 = Temporal.Duration.from({ weeks: -1, days: -1 });
const d3 = Temporal.Duration.from({ weeks: 1 });
const d4 = Temporal.Duration.from({ days: 7 });

console.log(d1.days); // 1
console.log(d2.days); // -1
console.log(d3.days); // 0
console.log(d4.days); // 7

// Équilibrer d4
const d4Balanced = d4.round({
  largestUnit: "weeks",
  relativeTo: Temporal.PlainDate.from("2021-01-01"), // calendrier ISO 8601
});
console.log(d4Balanced.days); // 0
console.log(d4Balanced.weeks); // 1
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
- La propriété {{JSxRef("Temporal/Duration/hours", "Temporal.Duration.prototype.hours")}}
- La propriété {{JSxRef("Temporal/Duration/minutes", "Temporal.Duration.prototype.minutes")}}
- La propriété {{JSxRef("Temporal/Duration/seconds", "Temporal.Duration.prototype.seconds")}}
- La propriété {{JSxRef("Temporal/Duration/milliseconds", "Temporal.Duration.prototype.milliseconds")}}
- La propriété {{JSxRef("Temporal/Duration/microseconds", "Temporal.Duration.prototype.microseconds")}}
- La propriété {{JSxRef("Temporal/Duration/nanoseconds", "Temporal.Duration.prototype.nanoseconds")}}
