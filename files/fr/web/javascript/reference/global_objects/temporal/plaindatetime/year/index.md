---
title: "Temporal.PlainDateTime : propriété year"
short-title: year
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/year
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La propriété d'accesseur **`year`** des instances de {{JSxRef("Temporal.PlainDateTime")}} retourne un entier représentant le nombre d'années de cette date par rapport au début d'une année d'époque spécifique au calendrier. Elle est dépendante du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers).

Le mutateur d'accesseur de `year` est `undefined`. Vous ne pouvez pas modifier cette propriété directement. Utilisez la méthode {{JSxRef("Temporal/PlainDateTime/with", "with()")}} pour créer un nouvel objet `Temporal.PlainDateTime` avec la valeur souhaitée.

Pour des informations générales et plus d'exemples, voir {{JSxRef("Temporal/PlainDate/year", "Temporal.PlainDate.prototype.year")}}.

## Exemples

### Utiliser la propriété `year`

```js
const dt = Temporal.PlainDateTime.from("2021-07-01"); // calendrier ISO 8601
console.log(dt.year); // 2021
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainDateTime")}}
- La méthode {{JSxRef("Temporal/PlainDateTime/with", "Temporal.PlainDateTime.prototype.with()")}}
- La méthode {{JSxRef("Temporal/PlainDateTime/add", "Temporal.PlainDateTime.prototype.add()")}}
- La méthode {{JSxRef("Temporal/PlainDateTime/subtract", "Temporal.PlainDateTime.prototype.subtract()")}}
- La propriété {{JSxRef("Temporal/PlainDateTime/era", "Temporal.PlainDateTime.prototype.era")}}
- La propriété {{JSxRef("Temporal/PlainDateTime/eraYear", "Temporal.PlainDateTime.prototype.eraYear")}}
- La propriété {{JSxRef("Temporal/PlainDateTime/yearOfWeek", "Temporal.PlainDateTime.prototype.yearOfWeek")}}
- La propriété {{JSxRef("Temporal/PlainDateTime/month", "Temporal.PlainDateTime.prototype.month")}}
- La propriété {{JSxRef("Temporal/PlainDateTime/day", "Temporal.PlainDateTime.prototype.day")}}
- La propriété {{JSxRef("Temporal/PlainDate/year", "Temporal.PlainDate.prototype.year")}}
