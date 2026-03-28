---
title: "Temporal.PlainDate : propriété day"
short-title: day
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/day
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La propriété d'accesseur **`day`** des instances de {{JSxRef("Temporal.PlainDate")}} retourne un entier positif représentant l'indice du jour dans le mois de cette date, basé sur 1, ce qui correspond au numéro de jour que vous verriez sur un calendrier. Elle dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers).

Elle commence généralement à 1 et est continue, mais pas toujours. Si vous souhaitez parcourir tous les jours d'un mois, utilisez d'abord {{JSxRef("Temporal/PlainDate/with", "with()")}} avec `{ day: 1 }` (ce qui définit le début du mois, même si le numéro réel n'est pas `1`), puis utilisez de manière répétée {{JSxRef("Temporal/PlainDate/add", "add()")}} avec `{ days: 1 }`, jusqu'à ce que le mois change.

> [!NOTE]
> Habituellement, l'indice du jour ne change que lors du passage d'un système de calendrier à un autre, comme [du calendrier julien au calendrier grégorien](https://fr.wikipedia.org/wiki/Passage_du_calendrier_julien_au_calendrier_grégorien). En pratique, tous les calendriers intégrés actuellement sont [proleptiques](fr.wikipedia.org/wiki/Calendrier_grégorien_proleptique), ce qui signifie que le système de calendrier est étendu indéfiniment dans le passé et le futur. Supposer que `day` n'est pas continu protège contre les futures introductions de calendriers non proleptiques.

Le mutateur d'accesseur de `day` est `undefined`. Vous ne pouvez pas modifier cette propriété directement. Utilisez la méthode {{JSxRef("Temporal/PlainDate/with", "with()")}} pour créer un nouvel objet `Temporal.PlainDate` avec la nouvelle valeur souhaitée.

## Exemples

### Utiliser la propriété `day`

```js
const date = Temporal.PlainDate.from("2021-07-01"); // calendrier ISO 8601
console.log(date.day); // 1

const date2 = Temporal.PlainDate.from("2021-07-01[u-ca=chinese]");
console.log(date2.day); // 22; c'est le 22 mai dans le calendrier chinois
```

### Parcourir tous les jours d'un mois

```js
const month = Temporal.PlainDate.from("2021-07-14"); // Une date arbitraire dans le mois
for (
  let day = month.with({ day: 1 });
  day.month === month.month;
  day = day.add({ days: 1 })
) {
  console.log(day.day);
}
```

### Changer le jour

```js
const date = Temporal.PlainDate.from("2021-07-01");
const newDate = date.with({ day: 15 });
console.log(newDate.toString()); // 2021-07-15
```

Vous pouvez également utiliser {{JSxRef("Temporal/PlainDate/add", "add()")}} ou {{JSxRef("Temporal/PlainDate/subtract", "subtract()")}} pour déplacer un certain nombre de jours à partir de la date actuelle.

```js
const date = Temporal.PlainDate.from("2021-07-01");
const newDate = date.add({ days: 14 });
console.log(newDate.toString()); // 2021-07-15
```

Par défaut, `with()` contraint le jour à la plage de valeurs valides. Vous pouvez donc utiliser `{ day: 1 }` pour définir le jour au premier jour du mois, même si le premier jour n'a pas le numéro `1`. De même, ce qui suit définira le jour au dernier jour du mois&nbsp;:

```js
const date = Temporal.PlainDate.from("2021-07-01");
const lastDay = date.with({ day: Number.MAX_VALUE }); // 2021-07-31
```

> [!NOTE]
> Évitez d'utiliser {{JSxRef("Temporal/PlainDate/daysInMonth", "daysInMonth")}} pour définir le jour au dernier jour du mois. Le dernier jour du mois n'est pas toujours le même que le nombre de jours dans le mois, dans le cas rare où un mois peut avoir quelques jours sautés.

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
- La propriété {{JSxRef("Temporal/PlainDate/daysInMonth", "Temporal.PlainDate.prototype.daysInMonth")}}
- La propriété {{JSxRef("Temporal/PlainDate/dayOfWeek", "Temporal.PlainDate.prototype.dayOfWeek")}}
- La propriété {{JSxRef("Temporal/PlainDate/dayOfYear", "Temporal.PlainDate.prototype.dayOfYear")}}
