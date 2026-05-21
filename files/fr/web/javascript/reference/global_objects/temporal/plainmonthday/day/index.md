---
title: "Temporal.PlainMonthDay : propriété day"
short-title: day
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay/day
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La propriété d'accesseur **`day`** des instances de {{JSxRef("Temporal.PlainMonthDay")}} retourne un entier positif représentant l'indice du jour dans le mois de cette date, basé sur 1, ce qui correspond au numéro de jour que vous verriez sur un calendrier. Il dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers).

Le mutateur d'accesseur de `day` est `undefined`. Vous ne pouvez pas modifier cette propriété directement. Utilisez la méthode {{JSxRef("Temporal/PlainMonthDay/with", "with()")}} pour créer un nouvel objet `Temporal.PlainMonthDay` avec la nouvelle valeur souhaitée.

Pour des informations générales et plus d'exemples, voir {{JSxRef("Temporal/PlainDate/day", "Temporal.PlainDate.prototype.day")}}.

## Exemples

### Utiliser la propriété `day`

```js
const md = Temporal.PlainMonthDay.from("07-01"); // calendrier ISO 8601
console.log(md.day); // 1

const md2 = Temporal.PlainMonthDay.from("2021-07-01[u-ca=chinese]");
console.log(md2.day); // 22; c'est le 22 mai dans le calendrier chinois
```

### Changer la valeur de `day`

```js
const md = Temporal.PlainMonthDay.from("07-01");
const newMD = md.with({ day: 15 });
console.log(newMD.toString()); // 07-15
```

Par défaut, `with()` contraint la valeur de `day` à la plage de valeurs valides. Vous pouvez donc utiliser `{ day: 1 }` pour définir le jour au premier jour du mois, même si le premier jour n'a pas le numéro `1`. De même, ce qui suit définira le jour au dernier jour du mois&nbsp;:

```js
const md = Temporal.PlainMonthDay.from("07-01");
const lastMD = md.with({ day: Number.MAX_VALUE }); // 07-31
```

Pour l'objet `PlainMonthDay`, février est toujours considéré comme ayant 29 jours.

```js
const md = Temporal.PlainMonthDay.from("02-01");
const lastMD = md.with({ day: Number.MAX_VALUE }); // 02-29
console.log(lastMD.day); // 29
```

Pour d'autres calendriers, tant qu'il existe une année dans laquelle le mois et le jour est valide, le mois et le jour est considéré comme valide, et l'année de référence sous-jacente peut donc changer. Par exemple&nbsp;:

```js
const md = Temporal.PlainMonthDay.from({
  monthCode: "M02",
  day: 29,
  calendar: "hebrew",
});
console.log(md.toString()); // 1972-11-06[u-ca=hebrew]
console.log(md.toLocaleString("en-US", { calendar: "hebrew" })); // 29 Heshvan
const lastMD = md.with({ day: Number.MAX_VALUE });
// 30 Heshvan n'existe pas en 1972, donc l'année de référence change pour 1971
console.log(lastMD.toString()); // 1971-11-18[u-ca=hebrew]
console.log(lastMD.toLocaleString("en-US", { calendar: "hebrew" })); // 30 Heshvan
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainMonthDay")}}
- La méthode {{JSxRef("Temporal/PlainMonthDay/with", "Temporal.PlainMonthDay.prototype.with()")}}
- La propriété {{JSxRef("Temporal/PlainMonthDay/monthCode", "Temporal.PlainMonthDay.prototype.monthCode")}}
