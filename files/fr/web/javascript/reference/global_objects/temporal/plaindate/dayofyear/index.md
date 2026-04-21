---
title: "Temporal.PlainDate : propriété dayOfYear"
short-title: dayOfYear
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/dayOfYear
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La propriété d'accesseur **`dayOfYear`** des instances de {{JSxRef("Temporal.PlainDate")}} retourne un entier positif représentant l'indice du jour dans l'année de cette date, basé sur 1. Le premier jour de cette année est `1`, et le dernier jour est le {{JSxRef("Temporal/PlainDate/daysInYear", "daysInYear")}}. Elle dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers).

Le mutateur d'accesseur de `dayOfYear` est `undefined`. Vous ne pouvez pas modifier cette propriété directement. Pour créer un nouvel objet `Temporal.PlainDate` avec la nouvelle valeur souhaitée de `dayOfYear`, utilisez la méthode {{JSxRef("Temporal/PlainDate/add", "add()")}} ou {{JSxRef("Temporal/PlainDate/subtract", "subtract()")}} avec le nombre approprié de `days`.

## Exemples

### Utiliser la propriété `dayOfYear`

```js
const date = Temporal.PlainDate.from("2021-07-01");
console.log(date.dayOfYear); // 182

const date2 = Temporal.PlainDate.from("2021-07-01[u-ca=chinese]");
console.log(date2.dayOfYear); // 140

const date3 = Temporal.PlainDate.from("2020-07-01");
console.log(date3.dayOfYear); // 183; 2020 is a leap year
```

### Changer la valeur de `dayOfYear`

`PlainDate` ne prend pas en charge la modification directe de `dayOfYear`. Pour changer le jour de l'année, vous devez d'abord déterminer la différence en jours par rapport au jour de l'année souhaité, puis utiliser `add` ou `subtract` pour ajuster la date en conséquence. Par exemple, pour passer au 100e jour de cette année (avant ou après)&nbsp;:

```js
function getDayInSameYear(date, destDayOfYear) {
  return date.add({ days: destDayOfYear - date.dayOfYear });
}

console.log(
  getDayInSameYear(Temporal.PlainDate.from("2021-07-01"), 100).toString(),
); // 2021-04-10
console.log(
  getDayInSameYear(Temporal.PlainDate.from("2021-01-01"), 100).toString(),
); // 2021-04-10
console.log(
  getDayInSameYear(Temporal.PlainDate.from("2020-01-01"), 100).toString(),
); // 2020-04-09
```

Par défaut, `with()` contraint le jour à la plage de valeurs valides. Vous pouvez donc toujours utiliser `{ month: 1, day: 1 }` pour définir le jour au premier jour de l'année, même si le premier jour n'a pas le numéro `1`. De même, ce qui suit définira le jour au dernier jour de l'année, quel que soit le nombre de jours dans le dernier mois ou l'année&nbsp;:

```js
const date = Temporal.PlainDate.from("2021-07-01");
const lastDay = date.with({ month: Number.MAX_VALUE, day: Number.MAX_VALUE }); // 2021-12-31
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
- La propriété {{JSxRef("Temporal/PlainDate/day", "Temporal.PlainDate.prototype.day")}}
- La propriété {{JSxRef("Temporal/PlainDate/dayOfWeek", "Temporal.PlainDate.prototype.dayOfWeek")}}
- La propriété {{JSxRef("Temporal/PlainDate/daysInYear", "Temporal.PlainDate.prototype.daysInYear")}}
