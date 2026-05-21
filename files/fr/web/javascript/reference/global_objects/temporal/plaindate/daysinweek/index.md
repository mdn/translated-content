---
title: "Temporal.PlainDate : propriété daysInWeek"
short-title: daysInWeek
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/daysInWeek
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La propriété d'accesseur **`daysInWeek`** des instances de {{JSxRef("Temporal.PlainDate")}} retourne un entier positif représentant le nombre de jours dans la semaine de cette date. Elle dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers).

Pour le calendrier ISO 8601, cela correspond toujours à 7, mais dans d'autres systèmes de calendrier, cela peut varier d'une semaine à l'autre. Tous les calendriers couramment pris en charge utilisent des semaines de 7 jours.

Le mutateur d'accesseur de `daysInWeek` est `undefined`. Vous ne pouvez pas modifier cette propriété directement.

## Exemples

### Utiliser la propriété `daysInWeek`

```js
const date = Temporal.PlainDate.from("2021-07-01");
console.log(date.daysInWeek); // 7

const date2 = Temporal.PlainDate.from("2021-07-01[u-ca=chinese]");
console.log(date2.daysInWeek); // 7
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainDate")}}
- La méthode {{JSxRef("Temporal/PlainDate/with", "Temporal.PlainDate.prototype.with()")}}
- La méthode {{JSxRef("Temporal/PlainDate/add", "Temporal.PlainDate.prototype.add()")}}
- La méthode {{JSxRef("Temporal/PlainDate/subtract", "Temporal.PlainDate.prototype.subtract()")}}
- La propriété {{JSxRef("Temporal/PlainDate/yearOfWeek", "Temporal.PlainDate.prototype.yearOfWeek")}}
- La propriété {{JSxRef("Temporal/PlainDate/weekOfYear", "Temporal.PlainDate.prototype.weekOfYear")}}
- La propriété {{JSxRef("Temporal/PlainDate/dayOfWeek", "Temporal.PlainDate.prototype.dayOfWeek")}}
- La propriété {{JSxRef("Temporal/PlainDate/daysInMonth", "Temporal.PlainDate.prototype.daysInMonth")}}
- La propriété {{JSxRef("Temporal/PlainDate/daysInYear", "Temporal.PlainDate.prototype.daysInYear")}}
