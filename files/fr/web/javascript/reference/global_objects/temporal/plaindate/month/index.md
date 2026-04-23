---
title: "Temporal.PlainDate : propriété month"
short-title: month
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/month
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La propriété d'accesseur **`month`** des instances de {{JSxRef("Temporal.PlainDate")}} retourne un entier positif représentant l'index du mois dans l'année de cette date, basé sur 1. Le premier mois de cette année est `1`, et le dernier mois est le {{JSxRef("Temporal/PlainDate/monthsInYear", "monthsInYear")}}. Cela dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers).

Notez que contrairement à {{JSxRef("Date.prototype.getMonth()")}}, l'index est basé sur 1. Si le calendrier a des mois intercalaires, alors le mois avec le même {{JSxRef("Temporal/PlainDate/monthCode", "monthCode")}} peut avoir des index de `month` différents pour différentes années.

> [!NOTE]
> N'utilisez pas cette propriété pour identifier le mois réel, y compris son nom. Utilisez {{JSxRef("Temporal/PlainDate/monthCode", "monthCode")}} à cette fin. Utilisez `month` uniquement pour identifier les mois dans le contexte d'une année, ou pour déterminer leur ordre.

Le mutateur d'accesseur de `month` est `undefined`. Vous ne pouvez pas modifier cette propriété directement. Utilisez la méthode {{JSxRef("Temporal/PlainDate/with", "with()")}} pour créer un nouvel objet `Temporal.PlainDate` avec la nouvelle valeur souhaitée.

## Exemples

### Utiliser la propriété `month`

```js
const date = Temporal.PlainDate.from("2021-07-01"); // calendrier ISO 8601
console.log(date.monthCode); // "M07"
console.log(date.month); // 7

const date2 = Temporal.PlainDate.from("2021-05-01[u-ca=chinese]");
console.log(date2.monthCode); // "M03"
console.log(date2.month); // 3 ; c'est le 20 mars dans le calendrier chinois

const date3 = Temporal.PlainDate.from("2023-05-01[u-ca=chinese]");
console.log(date3.monthCode); // "M03"
console.log(date3.month); // 4, bien que ce soit aussi mars (M03) !

const date4 = Temporal.PlainDate.from("2023-04-01[u-ca=chinese]");
console.log(date4.monthCode); // "M02L"
console.log(date4.month); // 3, ce mois est un mois intercalaire, c'est-à-dire un double février
```

### Parcourir tous les mois d'une année

```js
const year = Temporal.PlainDate.from("2021-07-14"); // Une date arbitraire dans l'année
for (
  let month = year.with({ month: 1 });
  month.year === year.year;
  month = month.add({ months: 1 })
) {
  console.log(month.month);
}
```

Sinon, c'est également une méthode sûre (contrairement à [l'exemple des jours](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/day#parcourir_tous_les_jours_dun_mois))&nbsp;:

```js
for (let month = 1; month <= year.monthsInYear; month++) {
  const monthDate = year.with({ month });
}
```

### Changer de mois

```js
const date = Temporal.PlainDate.from("2021-07-01");
const newDate = date.with({ month: 2 });
console.log(newDate.toString()); // 2021-02-01
```

Vous pouvez également utiliser {{JSxRef("Temporal/PlainDate/add", "add()")}} ou {{JSxRef("Temporal/PlainDate/subtract", "subtract()")}} pour déplacer un certain nombre de mois à partir de la date actuelle.

```js
const date = Temporal.PlainDate.from("2021-07-01");
const newDate = date.add({ months: 3 });
console.log(newDate.toString()); // 2021-10-01
```

Par défaut, `with()` contraint le jour à la plage de valeurs valides. Les deux exemples suivants définiront le mois sur le dernier mois de l'année&nbsp;:

```js
const date = Temporal.PlainDate.from("2021-07-01");
const lastMonth = date.with({ month: date.monthsInYear }); // 2021-12-01
const lastMonth2 = date.with({ month: Number.MAX_VALUE }); // 2021-12-01
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
- La propriété {{JSxRef("Temporal/PlainDate/monthCode", "Temporal.PlainDate.prototype.monthCode")}}
- La propriété {{JSxRef("Temporal/PlainDate/daysInMonth", "Temporal.PlainDate.prototype.daysInMonth")}}
- La propriété {{JSxRef("Temporal/PlainDate/monthsInYear", "Temporal.PlainDate.prototype.monthsInYear")}}
