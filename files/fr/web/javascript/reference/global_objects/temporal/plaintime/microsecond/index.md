---
title: "Temporal.PlainTime : propriété microsecond"
short-title: microsecond
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/microsecond
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La propriété d'accesseur **`microsecond`** des instances de {{JSxRef("Temporal.PlainTime")}} retourne un entier de 0 à 999 représentant la composante microseconde (10<sup>-6</sup> seconde) de cette heure.

Le mutateur d'accesseur de `microsecond` est `undefined`. Vous ne pouvez pas modifier cette propriété directement. Utilisez la méthode {{JSxRef("Temporal/PlainTime/with", "with()")}} pour créer un nouvel objet `Temporal.PlainTime` avec la nouvelle valeur souhaitée.

## Exemples

### Utiliser la propriété `microsecond`

```js
const time = Temporal.PlainTime.from("12:34:56");
console.log(time.microsecond); // 0

const time2 = Temporal.PlainTime.from("12:34:56.123456789");
console.log(time2.microsecond); // 456
```

### Changer la valeur de `microsecond`

```js
const time = Temporal.PlainTime.from("12:34:56");
const newTime = time.with({ microsecond: 100 });
console.log(newTime.toString()); // 12:34:56.0001
```

Vous pouvez également utiliser {{JSxRef("Temporal/PlainTime/add", "add()")}} ou {{JSxRef("Temporal/PlainTime/subtract", "subtract()")}} pour déplacer un certain nombre de microsecondes à partir de l'heure actuelle.

```js
const time = Temporal.PlainTime.from("12:34:56");
const newTime = time.add({ microseconds: 100 });
console.log(newTime.toString()); // 12:34:56.0001
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
- La propriété {{JSxRef("Temporal/PlainTime/nanosecond", "Temporal.PlainTime.prototype.nanosecond")}}
