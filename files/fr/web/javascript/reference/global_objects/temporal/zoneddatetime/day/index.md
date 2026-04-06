---
title: "Temporal.ZonedDateTime : propriété day"
short-title: day
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/day
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La propriété d'accesseur **`day`** des instances de {{JSxRef("Temporal.ZonedDateTime")}} retourne un entier positif représentant l'index du jour dans le mois de cette date, basé sur 1, ce qui correspond au numéro de jour que vous verriez sur un calendrier. Elle dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers).

Le mutateur d'accesseur de `day` est `undefined`. Vous ne pouvez pas modifier cette propriété directement. Utilisez la méthode {{JSxRef("Temporal/ZonedDateTime/with", "with()")}} pour créer un nouvel objet `Temporal.ZonedDateTime` avec la nouvelle valeur souhaitée.

Pour des informations générales et plus d'exemples, voir {{JSxRef("Temporal/PlainDate/day", "Temporal.PlainDate.prototype.day")}}.

Pour `PlainDate`, `day` ne peut être non continu que si le calendrier saute des jours. Pour `ZonedDateTime`, `day` peut également être non continu si le fuseau horaire change son décalage de 24 heures&nbsp;; cela s'est réellement produit. Voir l'exemple ci-dessous.

## Exemples

### Utiliser la propriété `day`

```js
const dt = Temporal.ZonedDateTime.from("2021-07-01[America/New_York]"); // calendrier ISO 8601
console.log(dt.day); // 1
```

### Jours discontinus

Pour mieux aligner les horaires avec ses partenaires commerciaux en Asie, le pays de Samoa a [changé son fuseau horaire](https://en.wikipedia.org/wiki/Time_in_Samoa) de l'autre côté de la ligne de changement de date internationale, décalant son offset de -10:00 à +14:00 (heure d'été). Cela a entraîné un changement brutal de 24 heures dans l'heure locale, sautant ainsi complètement le jour du 30 décembre 2011. `2011-12-29T23:59:59-10:00[Pacific/Apia]` est immédiatement suivi par `2011-12-31T00:00:00+14:00[Pacific/Apia]`.

```js
const dt = Temporal.ZonedDateTime.from(
  "2011-12-29T23:59:59-10:00[Pacific/Apia]",
);
console.log(dt.day); // 29
const nextDay = dt.add({ seconds: 1 });
console.log(nextDay.day); // 31
```

C'est pourquoi vous devriez toujours privilégier {{JSxRef("Temporal/ZonedDateTime/add", "add()")}} et {{JSxRef("Temporal/ZonedDateTime/subtract", "subtract()")}} pour manipuler les dates et les heures, plutôt que de modifier directement la propriété `day`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.ZonedDateTime")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/add", "Temporal.ZonedDateTime.prototype.add()")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}}
- La propriété {{JSxRef("Temporal/ZonedDateTime/year", "Temporal.ZonedDateTime.prototype.year")}}
- La propriété {{JSxRef("Temporal/ZonedDateTime/month", "Temporal.ZonedDateTime.prototype.month")}}
- La propriété {{JSxRef("Temporal/ZonedDateTime/daysInMonth", "Temporal.ZonedDateTime.prototype.daysInMonth")}}
- La propriété {{JSxRef("Temporal/ZonedDateTime/dayOfWeek", "Temporal.ZonedDateTime.prototype.dayOfWeek")}}
- La propriété {{JSxRef("Temporal/ZonedDateTime/dayOfYear", "Temporal.ZonedDateTime.prototype.dayOfYear")}}
- La propriété {{JSxRef("Temporal/PlainDate/day", "Temporal.PlainDate.prototype.day")}}
