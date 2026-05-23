---
title: "Temporal.ZonedDateTime : propriété hoursInDay"
short-title: hoursInDay
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/hoursInDay
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La propriété d'accesseur **`hoursInDay`** des instances de {{JSxRef("Temporal.ZonedDateTime")}} retourne un entier positif représentant le nombre d'heures dans le jour de cette date dans le fuseau horaire. Il peut être supérieur ou inférieur à 24 en cas de changements de décalage tels que l'heure d'été.

Comme `ZonedDateTime` est la seule classe consciente du fuseau horaire, et que les heures dans un jour ne peuvent changer qu'en raison des changements de décalage, toutes les autres classes supposent des jours de 24 heures.

Le mutateur d'accesseur de `hoursInDay` est `undefined`. Vous ne pouvez pas modifier cette propriété directement.

## Exemples

### Utiliser la propriété `hoursInDay`

```js
const dt = Temporal.ZonedDateTime.from(
  "2024-03-10T01:58:00-05:00[America/New_York]",
);
console.log(dt.hoursInDay); // 23 ; c'est le jour de la transition vers l'heure d'été

const dt2 = Temporal.ZonedDateTime.from(
  "2024-11-03T01:58:00-04:00[America/New_York]",
);
console.log(dt2.hoursInDay); // 25 ; c'est le jour de la transition vers l'heure d'hiver

const dt3 = Temporal.ZonedDateTime.from(
  "2024-11-04T01:58:00-05:00[America/New_York]",
);
console.log(dt3.hoursInDay); // 24
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.ZonedDateTime")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/add", "Temporal.ZonedDateTime.prototype.add()")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}}
- La propriété {{JSxRef("Temporal/ZonedDateTime/hour", "Temporal.ZonedDateTime.prototype.hour")}}
- La propriété {{JSxRef("Temporal/ZonedDateTime/dayOfYear", "Temporal.ZonedDateTime.prototype.dayOfYear")}}
- La propriété {{JSxRef("Temporal/ZonedDateTime/daysInMonth", "Temporal.ZonedDateTime.prototype.daysInMonth")}}
- La propriété {{JSxRef("Temporal/ZonedDateTime/daysInWeek", "Temporal.ZonedDateTime.prototype.daysInWeek")}}
