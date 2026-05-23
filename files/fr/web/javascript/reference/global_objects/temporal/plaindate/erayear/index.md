---
title: "Temporal.PlainDate : propriété eraYear"
short-title: eraYear
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/eraYear
l10n:
  sourceCommit: 9b86874b5762b52ce0055f58d561004d1a204ad5
---

La propriété d'accesseur **`eraYear`** des instances de {{JSxRef("Temporal.PlainDate")}} retourne un entier non négatif représentant l'année de cette date dans l'ère, ou `undefined` si le calendrier n'utilise pas d'ères (par exemple, ISO 8601). L'index de l'année commence généralement à 1 (plus courant) ou 0, et les années dans une ère peuvent diminuer avec le temps (par exemple, BCE grégorienne). `era` et `eraYear` identifient ensemble de manière unique une année dans un calendrier, de la même manière que `year`. Elle dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers).

Contrairement à `year`, `era` et `eraYear` peuvent changer au milieu d'une année civile. Par exemple, le Japon a commencé l'ère Reiwa le 1er mai 2019, donc les dates du 2019-01-01 au 2019-04-30 ont `{ era: "heisei", eraYear: 31 }`, et les dates à partir du 2019-05-01 ont `{ era: "reiwa", eraYear: 1 }`, mais l'année est toujours 2019 (car le calendrier japonais utilise l'année ISO 8601 comme année arithmétique).

Pour plus d'informations sur les valeurs de `era` et `eraYear` pour différents calendriers, voir la propriété {{JSxRef("Temporal/PlainDate/era", "era")}}.

Le mutateur d'accesseur de `eraYear` est `undefined`. Vous ne pouvez pas modifier cette propriété directement. Utilisez la méthode {{JSxRef("Temporal/PlainDate/with", "with()")}} pour créer un nouvel objet `Temporal.PlainDate` avec la nouvelle valeur souhaitée.

## Exemples

### Utiliser la propriété `eraYear`

```js
const date = Temporal.PlainDate.from("2021-07-01"); // calendrier ISO 8601
console.log(date.eraYear); // undefined

const date2 = Temporal.PlainDate.from("2021-07-01[u-ca=gregory]");
console.log(date2.eraYear); // 2021

const date3 = Temporal.PlainDate.from("-002021-07-01[u-ca=gregory]");
console.log(date3.eraYear); // 2022 ; 0000 est utilisé pour l'année 1 BCE

const date4 = Temporal.PlainDate.from("2021-07-01[u-ca=japanese]");
console.log(date4.eraYear); // 3
```

### Changer la valeur de `eraYear`

Vous ne pouvez définir `eraYear` que pour les calendriers qui les prennent en charge. Par exemple, le calendrier ISO 8601 n'a pas d'ères. Notez que vous devez fournir `era` et `eraYear` ensemble.

```js
const date = Temporal.PlainDate.from("2021-07-01[u-ca=gregory]");
const newDate = date.with({ era: "bc", eraYear: 100 });
console.log(newDate.toString()); // -000099-07-01[u-ca=gregory]

const date2 = Temporal.PlainDate.from("2021-07-01[u-ca=japanese]");
const newDate2 = date2.with({ era: "meiji", eraYear: 1 });
console.log(newDate2.toString()); // 1868-07-01[u-ca=japanese]
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
- La propriété {{JSxRef("Temporal/PlainDate/era", "Temporal.PlainDate.prototype.era")}}
