---
title: "Temporal.PlainTime : propriété nanosecond"
short-title: nanosecond
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/nanosecond
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La propriété d'accesseur **`nanosecond`** des instances de {{JSxRef("Temporal.PlainTime")}} retourne un entier de 0 à 999 représentant la composante nanoseconde (10<sup>-9</sup> seconde) de cette heure.

Le mutateur d'accesseur de `nanosecond` est `undefined`. Vous ne pouvez pas modifier cette propriété directement. Utilisez la méthode {{JSxRef("Temporal/PlainTime/with", "with()")}} pour créer un nouvel objet `Temporal.PlainTime` avec la nouvelle valeur souhaitée.

## Exemples

### Utiliser la propriété `nanosecond`

```js
const time = Temporal.PlainTime.from("12:34:56");
console.log(time.nanosecond); // 0

const time2 = Temporal.PlainTime.from("12:34:56.123456789");
console.log(time2.nanosecond); // 789
```

### Changer la valeur de `nanosecond`

```js
const time = Temporal.PlainTime.from("12:34:56");
const newTime = time.with({ nanosecond: 100 });
console.log(newTime.toString()); // 12:34:56.0000001
```

Vous pouvez également utiliser {{JSxRef("Temporal/PlainTime/add", "add()")}} ou {{JSxRef("Temporal/PlainTime/subtract", "subtract()")}} pour déplacer un certain nombre de nanosecondes à partir de l'heure actuelle.

```js
const time = Temporal.PlainTime.from("12:34:56");
const newTime = time.add({ nanoseconds: 100 });
console.log(newTime.toString()); // 12:34:56.0000001
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainTime")}}
- La méthode {{JSxRef("Temporal/PlainTime/with", "Temporal.PlainTime.prototype.with()")}}
- La méthode {{JSxRef("Temporal/PlainTime/add", "Temporal.PlainTime.prototype.add()")}}
- La méthode {{JSxRef("Temporal/PlainTime/subtract", "Temporal.PlainTime.prototype.subtract()")}}
- La propriété {{JSxRef("Temporal/PlainTime/second", "Temporal.PlainTime.prototype.second")}}
- La propriété {{JSxRef("Temporal/PlainTime/millisecond", "Temporal.PlainTime.prototype.millisecond")}}
- La propriété {{JSxRef("Temporal/PlainTime/microsecond", "Temporal.PlainTime.prototype.microsecond")}}
