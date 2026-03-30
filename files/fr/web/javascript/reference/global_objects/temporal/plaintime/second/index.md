---
title: "Temporal.PlainTime : propriété second"
short-title: second
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/second
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La propriété d'accesseur **`second`** des instances de {{JSxRef("Temporal.PlainTime")}} retourne un entier de 0 à 59 représentant la composante des secondes de cette heure.

Le mutateur d'accesseur de `second` est `undefined`. Vous ne pouvez pas modifier cette propriété directement. Utilisez la méthode {{JSxRef("Temporal/PlainTime/with", "with()")}} pour créer un nouvel objet `Temporal.PlainTime` avec la nouvelle valeur souhaitée.

## Exemples

### Utiliser la propriété `second`

```js
const time = Temporal.PlainTime.from("12:34:56");
console.log(time.second); // 56
```

### Changer la valeur de `second`

```js
const time = Temporal.PlainTime.from("12:34:56");
const newTime = time.with({ second: 15 });
console.log(newTime.toString()); // 12:34:15
```

Vous pouvez également utiliser {{JSxRef("Temporal/PlainTime/add", "add()")}} ou {{JSxRef("Temporal/PlainTime/subtract", "subtract()")}} pour déplacer un certain nombre de secondes à partir de l'heure actuelle.

```js
const time = Temporal.PlainTime.from("12:34:56");
const newTime = time.subtract({ seconds: 41 });
console.log(newTime.toString()); // 12:34:15
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
- La propriété {{JSxRef("Temporal/PlainTime/millisecond", "Temporal.PlainTime.prototype.millisecond")}}
- La propriété {{JSxRef("Temporal/PlainTime/microsecond", "Temporal.PlainTime.prototype.microsecond")}}
- La propriété {{JSxRef("Temporal/PlainTime/nanosecond", "Temporal.PlainTime.prototype.nanosecond")}}
