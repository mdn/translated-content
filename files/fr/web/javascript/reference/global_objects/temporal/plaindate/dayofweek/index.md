---
title: "Temporal.PlainDate : propriété dayOfWeek"
short-title: dayOfWeek
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/dayOfWeek
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La propriété d'accesseur **`dayOfWeek`** des instances de {{JSxRef("Temporal.PlainDate")}} retourne un entier positif représentant l'indice du jour dans la semaine de cette date, basé sur 1. Les jours de la semaine sont numérotés séquentiellement de `1` à {{JSxRef("Temporal/PlainDate/daysInWeek", "daysInWeek")}}, chaque numéro correspondant à son nom. Elle dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers). 1 représente généralement le lundi dans le calendrier, même lorsque les locales utilisant le calendrier peuvent considérer un autre jour comme le premier jour de la semaine (voir {{JSxRef("Intl/Locale/getWeekInfo", "Intl.Locale.prototype.getWeekInfo()")}}).

Tous les calendriers couramment pris en charge utilisent des semaines de 7 jours, et vous pouvez généralement vous attendre à ce que cette propriété retourne la même valeur pour la même date dans différents calendriers.

Le mutateur d'accesseur de `dayOfWeek` est `undefined`. Vous ne pouvez pas modifier cette propriété directement. Pour créer un nouvel objet `Temporal.PlainDate` avec la nouvelle valeur souhaitée de `dayOfWeek`, utilisez la méthode {{JSxRef("Temporal/PlainDate/add", "add()")}} ou {{JSxRef("Temporal/PlainDate/subtract", "subtract()")}} avec le nombre approprié de `days`.

## Exemples

### Utiliser la propriété `dayOfWeek`

```js
const date = Temporal.PlainDate.from("2021-07-01");
console.log(date.dayOfWeek); // 4 ; jeudi

const date2 = Temporal.PlainDate.from("2021-07-01[u-ca=chinese]");
console.log(date2.dayOfWeek); // 4
```

### Changer la valeur de `dayOfWeek`

`PlainDate` ne prend pas en charge la modification directe de `dayOfWeek`. Pour changer le jour de la semaine, vous devez d'abord déterminer la différence en jours par rapport au jour de la semaine souhaité, puis utiliser `add` ou `subtract` pour ajuster la date en conséquence. Par exemple, pour passer au vendredi de cette semaine (avant ou après)&nbsp;:

```js
function getDayInSameWeek(date, destDayOfWeek) {
  return date.add({ days: destDayOfWeek - date.dayOfWeek });
}

console.log(
  getDayInSameWeek(Temporal.PlainDate.from("2021-07-01"), 5).toString(),
); // 2021-07-02
console.log(
  getDayInSameWeek(Temporal.PlainDate.from("2021-07-03"), 5).toString(),
); // 2021-07-02
```

Pour passer au vendredi suivant&nbsp;:

```js
function getNextDayInWeek(date, destDayOfWeek) {
  const distance = destDayOfWeek - date.dayOfWeek;
  return date.add({
    days: distance < 0 ? date.daysInWeek + distance : distance,
  });
}

console.log(
  getNextDayInWeek(Temporal.PlainDate.from("2021-07-01"), 5).toString(),
); // 2021-07-02
console.log(
  getNextDayInWeek(Temporal.PlainDate.from("2021-07-03"), 5).toString(),
); // 2021-07-09
```

Pour passer au vendredi précédent&nbsp;:

```js
function getPreviousDayInWeek(date, destDayOfWeek) {
  const distance = date.dayOfWeek - destDayOfWeek;
  return date.subtract({
    days: distance < 0 ? date.daysInWeek + distance : distance,
  });
}

console.log(
  getPreviousDayInWeek(Temporal.PlainDate.from("2021-07-01"), 5).toString(),
); // 2021-06-25
console.log(
  getPreviousDayInWeek(Temporal.PlainDate.from("2021-07-03"), 5).toString(),
); // 2021-07-02
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
- La propriété {{JSxRef("Temporal/PlainDate/day", "Temporal.PlainDate.prototype.day")}}
- La propriété {{JSxRef("Temporal/PlainDate/dayOfYear", "Temporal.PlainDate.prototype.dayOfYear")}}
- La propriété {{JSxRef("Temporal/PlainDate/daysInWeek", "Temporal.PlainDate.prototype.daysInWeek")}}
- La propriété {{JSxRef("Temporal/PlainDate/weekOfYear", "Temporal.PlainDate.prototype.weekOfYear")}}
- La propriété {{JSxRef("Temporal/PlainDate/yearOfWeek", "Temporal.PlainDate.prototype.yearOfWeek")}}
