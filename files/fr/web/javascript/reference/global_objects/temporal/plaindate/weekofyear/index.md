---
title: "Temporal.PlainDate : propriété weekOfYear"
short-title: weekOfYear
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/weekOfYear
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La propriété d'accesseur **`weekOfYear`** des instances de {{JSxRef("Temporal.PlainDate")}} retourne un entier positif représentant l'indice de la semaine basé sur 1 dans l'année de cette date, ou `undefined` si le calendrier n'a pas de système de semaine bien défini. La première semaine de l'année est `1`. Elle dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers).

Notez que pour ISO 8601, les premiers et derniers jours de l'année peuvent être attribués à la dernière semaine de l'année précédente ou à la première semaine de l'année suivante. En d'autres termes, si une semaine traverse deux années, elle appartient à l'année qui contient la majorité de ses jours. Pour obtenir l'année à laquelle appartient la `weekOfYear`, utilisez la propriété {{JSxRef("Temporal/PlainDate/yearOfWeek", "yearOfWeek")}}, et non la propriété {{JSxRef("Temporal/PlainDate/year", "year")}}.

Le mutateur d'accesseur de `weekOfYear` est `undefined`. Vous ne pouvez pas modifier cette propriété directement. Pour créer un nouvel objet `Temporal.PlainDate` avec la nouvelle valeur souhaitée de `weekOfYear`, utilisez la méthode {{JSxRef("Temporal/PlainDate/add", "add()")}} ou {{JSxRef("Temporal/PlainDate/subtract", "subtract()")}} avec le nombre approprié de `weeks`.

## Exemples

### Utiliser la propriété `weekOfYear`

```js
const date = Temporal.PlainDate.from("2021-07-01");
console.log(date.weekOfYear); // 26

// Si le 01-01 est un vendredi/samedi/dimanche, il appartient à la dernière semaine de l'année précédente
const date2 = Temporal.PlainDate.from("2021-01-01");
console.log(date2.dayOfWeek); // 5
console.log(date2.weekOfYear); // 53; 2020 a 53 semaines
console.log(date2.yearOfWeek); // 2020

// Sinon, elle appartient à la première semaine de l'année
const date3 = Temporal.PlainDate.from("2020-01-01");
console.log(date3.dayOfWeek); // 3
console.log(date3.weekOfYear); // 1
console.log(date3.yearOfWeek); // 2020

// De même, si le 12-31 est un lundi/mardi/mercredi, il appartient à la première semaine de l'année suivante
const date4 = Temporal.PlainDate.from("2019-12-31");
console.log(date4.dayOfWeek); // 2
console.log(date4.weekOfYear); // 1
console.log(date4.yearOfWeek); // 2020
```

### Changer la valeur de `weekOfYear`

`PlainDate` ne prend pas en charge la modification directe de `weekOfYear`. Pour changer de semaine, vous devez d'abord déterminer la différence en semaines par rapport à la semaine souhaitée, puis utiliser `add` ou `subtract` pour ajuster la date en conséquence. Par exemple, pour passer à la semaine précédente&nbsp;:

```js
const date = Temporal.PlainDate.from("2021-07-01");
const previousWeek = date.subtract({ weeks: 1 });
console.log(previousWeek.toString()); // 2021-06-24
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
- La propriété {{JSxRef("Temporal/PlainDate/dayOfWeek", "Temporal.PlainDate.prototype.dayOfWeek")}}
- La propriété {{JSxRef("Temporal/PlainDate/daysInWeek", "Temporal.PlainDate.prototype.daysInWeek")}}
- La propriété {{JSxRef("Temporal/PlainDate/daysInYear", "Temporal.PlainDate.prototype.daysInYear")}}
