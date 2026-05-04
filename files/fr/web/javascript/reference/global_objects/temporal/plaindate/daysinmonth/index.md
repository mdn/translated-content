---
title: "Temporal.PlainDate : propriété daysInMonth"
short-title: daysInMonth
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/daysInMonth
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La propriété d'accesseur **`daysInMonth`** des instances de {{JSxRef("Temporal.PlainDate")}} retourne un entier positif représentant le nombre de jours dans le mois de cette date. Elle dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers).

Notez que le nombre de jours dans le mois n'est pas toujours égal au {{JSxRef("Temporal/PlainDate/day", "day")}} du dernier jour du mois, dans le cas rare où un mois peut avoir quelques jours sautés.

Le mutateur d'accesseur de `daysInMonth` est `undefined`. Vous ne pouvez pas modifier cette propriété directement.

## Exemples

### Utiliser la propriété `daysInMonth`

```js
const date = Temporal.PlainDate.from("2021-07-01");
console.log(date.daysInMonth); // 31

const date2 = Temporal.PlainDate.from("2021-02-01");
console.log(date2.daysInMonth); // 28 ; 2021 n'est pas une année bissextile

const date3 = Temporal.PlainDate.from("2020-02-01");
console.log(date3.daysInMonth); // 29 ; 2020 est une année bissextile

const date4 = Temporal.PlainDate.from("2021-04-01[u-ca=chinese]");
console.log(date4.month); // 2
console.log(date4.daysInMonth); // 30 ; le 2e mois chinois a 30 jours
```

### Changer pour l'avant-dernier jour du mois

Vous pouvez utiliser `daysInMonth` pour passer à l'avant-dernier jour du mois&nbsp;:

```js
const date = Temporal.PlainDate.from("2021-07-01");
const secondLastDay = date.with({ day: date.daysInMonth - 1 });
console.log(secondLastDay.toString()); // 2021-07-30
```

Ce n'est pas totalement sûr, cependant, car `daysInMonth` n'est pas garanti d'avoir un lien avec l'indice du jour. Voici une manière plus sûre d'obtenir l'avant-dernier jour&nbsp;:

```js
const date = Temporal.PlainDate.from("2021-07-01");
const secondLastDay = date
  .with({ day: Number.MAX_SAFE_INTEGER })
  .subtract({ days: 1 });
console.log(secondLastDay.toString()); // 2021-07-30
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
- La propriété {{JSxRef("Temporal/PlainDate/year", "Temporal.PlainDate.prototype.year")}}
- La propriété {{JSxRef("Temporal/PlainDate/month", "Temporal.PlainDate.prototype.month")}}
- La propriété {{JSxRef("Temporal/PlainDate/day", "Temporal.PlainDate.prototype.day")}}
- La propriété {{JSxRef("Temporal/PlainDate/daysInWeek", "Temporal.PlainDate.prototype.daysInWeek")}}
- La propriété {{JSxRef("Temporal/PlainDate/daysInYear", "Temporal.PlainDate.prototype.daysInYear")}}
