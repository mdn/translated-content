---
title: "Temporal.PlainDateTime : propriété era"
short-title: era
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/era
l10n:
  sourceCommit: 9b86874b5762b52ce0055f58d561004d1a204ad5
---

La propriété d'accesseur **`era`** des instances de {{JSxRef("Temporal.PlainDateTime")}} retourne une chaîne de caractères en minuscules spécifique au calendrier représentant l'ère de cette date, ou `undefined` si le calendrier n'utilise pas d'ères (par exemple, ISO 8601). `era` et `eraYear` identifient ensemble de manière unique une année dans un calendrier, de la même manière que `year`. Elle dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers) utilisé.

Le mutateur d'accesseur de `era` est `undefined`. Vous ne pouvez pas modifier cette propriété directement. Utilisez la méthode {{JSxRef("Temporal/PlainDateTime/with", "with()")}} pour créer un nouvel objet `Temporal.PlainDateTime` avec la nouvelle valeur souhaitée.

Pour des informations générales et plus d'exemples, voir {{JSxRef("Temporal/PlainDate/era", "Temporal.PlainDate.prototype.era")}}.

## Exemples

### Utiliser la propriété `era`

```js
const dt = Temporal.PlainDateTime.from("2021-07-01"); // calendrier ISO 8601
console.log(dt.era); // undefined

const dt2 = Temporal.PlainDateTime.from("2021-07-01[u-ca=gregory]");
console.log(dt2.era); // ce
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
- La propriété {{JSxRef("Temporal/PlainDateTime/year", "Temporal.PlainDateTime.prototype.year")}}
- La propriété {{JSxRef("Temporal/PlainDateTime/eraYear", "Temporal.PlainDateTime.prototype.eraYear")}}
- La propriété {{JSxRef("Temporal/PlainDate/era", "Temporal.PlainDate.prototype.era")}}
