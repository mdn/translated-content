---
title: "Temporal.PlainYearMonth : propriété era"
short-title: era
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/era
l10n:
  sourceCommit: 9b86874b5762b52ce0055f58d561004d1a204ad5
---

La propriété d'accesseur **`era`** des instances de {{JSxRef("Temporal.PlainYearMonth")}} retourne une chaîne de caractères en minuscules spécifique au calendrier représentant l'ère de ce mois et de cette année, ou `undefined` si le calendrier n'utilise pas d'ères (par exemple, ISO 8601). `era` et `eraYear` identifient ensemble de manière unique une année dans un calendrier, de la même manière que `year`. Elle dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers).

Le mutateur d'accesseur de `era` est `undefined`. Vous ne pouvez pas modifier cette propriété directement. Utilisez la méthode {{JSxRef("Temporal/PlainYearMonth/with", "with()")}} pour créer un nouvel objet `Temporal.PlainYearMonth` avec la nouvelle valeur souhaitée.

Pour des informations générales et plus d'exemples, voir {{JSxRef("Temporal/PlainDate/era", "Temporal.PlainDate.prototype.era")}}.

## Exemples

### Utiliser la propriété `era`

```js
const ym = Temporal.PlainYearMonth.from("2021-07"); // calendrier ISO 8601
console.log(ym.era); // undefined

const ym2 = Temporal.PlainYearMonth.from("2021-07-01[u-ca=gregory]");
console.log(ym2.era); // ce
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainYearMonth")}}
- La méthode {{JSxRef("Temporal/PlainYearMonth/with", "Temporal.PlainYearMonth.prototype.with()")}}
- La méthode {{JSxRef("Temporal/PlainYearMonth/add", "Temporal.PlainYearMonth.prototype.add()")}}
- La méthode {{JSxRef("Temporal/PlainYearMonth/subtract", "Temporal.PlainYearMonth.prototype.subtract()")}}
- La propriété {{JSxRef("Temporal/PlainYearMonth/year", "Temporal.PlainYearMonth.prototype.year")}}
- La propriété {{JSxRef("Temporal/PlainYearMonth/eraYear", "Temporal.PlainYearMonth.prototype.eraYear")}}
- La propriété {{JSxRef("Temporal/PlainDate/era", "Temporal.PlainDate.prototype.era")}}
