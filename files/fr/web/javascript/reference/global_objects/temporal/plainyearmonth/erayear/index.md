---
title: "Temporal.PlainYearMonth : propriété eraYear"
short-title: eraYear
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/eraYear
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La propriété d'accesseur **`eraYear`** des instances de {{JSxRef("Temporal.PlainYearMonth")}} retourne un entier qui n'est pas négatif représentant l'année de la valeur de mois et d'année dans l'ère, ou `undefined` si le calendrier n'utilise pas d'ères (par exemple, ISO 8601). L'indice de l'année commence généralement à 1 (plus courant) ou 0, et les années dans une ère peuvent diminuer avec le temps (par exemple, Grégorien avant Jésus-Christ). `era` et `eraYear` identifient ensemble de manière unique une année dans un calendrier, de la même manière que `year`. Elle dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers).

Le mutateur d'accesseur de `eraYear` est `undefined`. Vous ne pouvez pas modifier cette propriété directement. Utilisez la méthode {{JSxRef("Temporal/PlainYearMonth/with", "with()")}} pour créer un nouvel objet `Temporal.PlainYearMonth` avec la nouvelle valeur souhaitée.

Pour des informations générales et plus d'exemples, voir {{JSxRef("Temporal/PlainDate/eraYear", "Temporal.PlainDate.prototype.eraYear")}}.

## Exemples

### Utiliser la propriété `eraYear`

```js
const ym = Temporal.PlainYearMonth.from("2021-07"); // calendrier ISO 8601
console.log(ym.eraYear); // undefined

const ym2 = Temporal.PlainYearMonth.from("2021-07-01[u-ca=gregory]");
console.log(ym2.eraYear); // 2021

const ym3 = Temporal.PlainYearMonth.from("-002021-07-01[u-ca=gregory]");
console.log(ym3.eraYear); // 2022 ; 0000 est utilisé pour l'année 1 avant Jésus-Christ

const ym4 = Temporal.PlainYearMonth.from("2021-07-01[u-ca=japanese]");
console.log(ym4.eraYear); // 3
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
- La propriété {{JSxRef("Temporal/PlainYearMonth/era", "Temporal.PlainYearMonth.prototype.era")}}
- La propriété {{JSxRef("Temporal/PlainDate/eraYear", "Temporal.PlainDate.prototype.eraYear")}}
