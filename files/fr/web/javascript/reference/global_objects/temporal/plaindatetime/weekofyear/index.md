---
title: "Temporal.PlainDateTime : propriété weekOfYear"
short-title: weekOfYear
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/weekOfYear
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La propriété d'accesseur **`weekOfYear`** de {{JSxRef("Temporal.PlainDateTime")}} retourne un entier positif représentant l'indice de semaine basé sur 1 dans le {{JSxRef("Temporal/PlainDateTime/yearOfWeek", "yearOfWeek")}} de cette date, ou `undefined` si le calendrier n'a pas de système de semaines bien défini. La première semaine de l'année est `1`. Elle est dépendante du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers).

Le mutateur d'accesseur de `weekOfYear` est `undefined`. Vous ne pouvez pas modifier cette propriété directement. Pour créer un nouvel objet `Temporal.PlainDateTime` avec la nouvelle valeur souhaitée de `weekOfYear`, utilisez la méthode {{JSxRef("Temporal/PlainDateTime/add", "add()")}} ou {{JSxRef("Temporal/PlainDateTime/subtract", "subtract()")}} avec le nombre approprié de `weeks`.

Pour des informations générales et plus d'exemples, voir {{JSxRef("Temporal/PlainDate/weekOfYear", "Temporal.PlainDate.prototype.weekOfYear")}}.

## Exemples

### Utiliser la propriété `weekOfYear`

```js
const dt = Temporal.PlainDateTime.from("2021-07-01");
console.log(dt.weekOfYear); // 26
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
- La propriété {{JSxRef("Temporal/PlainDateTime/yearOfWeek", "Temporal.PlainDateTime.prototype.yearOfWeek")}}
- La propriété {{JSxRef("Temporal/PlainDateTime/dayOfWeek", "Temporal.PlainDateTime.prototype.dayOfWeek")}}
- La propriété {{JSxRef("Temporal/PlainDateTime/daysInWeek", "Temporal.PlainDateTime.prototype.daysInWeek")}}
- La propriété {{JSxRef("Temporal/PlainDateTime/daysInYear", "Temporal.PlainDateTime.prototype.daysInYear")}}
- La propriété {{JSxRef("Temporal/PlainDate/weekOfYear", "Temporal.PlainDate.prototype.weekOfYear")}}
