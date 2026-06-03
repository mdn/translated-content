---
title: "Temporal.ZonedDateTime : propriété weekOfYear"
short-title: weekOfYear
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/weekOfYear
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La propriété accesseur **`weekOfYear`** des instances de {{JSxRef("Temporal.ZonedDateTime")}} retourne un entier positif représentant l'indice de semaine (à partir de 1) dans {{JSxRef("Temporal/ZonedDateTime/yearOfWeek", "yearOfWeek")}} de cette date, ou `undefined` si le calendrier n'a pas de système de semaines bien défini. La première semaine de l'année est `1`. Cela dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers).

L'accesseur de définition de `weekOfYear` est `undefined`. Vous ne pouvez pas modifier cette propriété directement. Pour créer un nouvel objet `Temporal.ZonedDateTime` avec la nouvelle valeur souhaitée pour `weekOfYear`, utilisez la méthode {{JSxRef("Temporal/ZonedDateTime/add", "add()")}} ou {{JSxRef("Temporal/ZonedDateTime/subtract", "subtract()")}} avec le nombre approprié de `weeks`.

Pour des informations générales et plus d'exemples, voir {{JSxRef("Temporal/PlainDate/weekOfYear", "Temporal.PlainDate.prototype.weekOfYear")}}.

## Exemples

### Utiliser la propriété `weekOfYear`

```js
const dt = Temporal.ZonedDateTime.from("2021-07-01[America/New_York]");
console.log(dt.weekOfYear); // 26
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.ZonedDateTime")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/add", "Temporal.ZonedDateTime.prototype.add()")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}}
- La propriété {{JSxRef("Temporal/ZonedDateTime/yearOfWeek", "Temporal.ZonedDateTime.prototype.yearOfWeek")}}
- La propriété {{JSxRef("Temporal/ZonedDateTime/dayOfWeek", "Temporal.ZonedDateTime.prototype.dayOfWeek")}}
- La propriété {{JSxRef("Temporal/ZonedDateTime/daysInWeek", "Temporal.ZonedDateTime.prototype.daysInWeek")}}
- La propriété {{JSxRef("Temporal/ZonedDateTime/daysInYear", "Temporal.ZonedDateTime.prototype.daysInYear")}}
- La propriété {{JSxRef("Temporal/PlainDate/weekOfYear", "Temporal.PlainDate.prototype.weekOfYear")}}
