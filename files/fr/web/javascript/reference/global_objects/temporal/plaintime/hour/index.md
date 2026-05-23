---
title: "Temporal.PlainTime : propriété hour"
short-title: hour
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/hour
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La propriété d'accesseur **`hour`** des instances de {{JSxRef("Temporal.PlainTime")}} retourne un entier de 0 à 23 représentant la composante horaire de cette heure.

Le mutateur d'accesseur de `hour` est `undefined`. Vous ne pouvez pas modifier cette propriété directement. Utilisez la méthode {{JSxRef("Temporal/PlainTime/with", "with()")}} pour créer un nouvel objet `Temporal.PlainTime` avec la nouvelle valeur souhaitée.

## Exemples

### Utiliser la propriété `hour`

```js
const time = Temporal.PlainTime.from("12:34:56");
console.log(time.hour); // 12
```

### Changer la valeur de `hour`

```js
const time = Temporal.PlainTime.from("12:34:56");
const newTime = time.with({ hour: 15 });
console.log(newTime.toString()); // 15:34:56
```

Vous pouvez également utiliser {{JSxRef("Temporal/PlainTime/add", "add()")}} ou {{JSxRef("Temporal/PlainTime/subtract", "subtract()")}} pour déplacer un certain nombre d'heures à partir de l'heure actuelle.

```js
const time = Temporal.PlainTime.from("12:34:56");
const newTime = time.add({ hours: 3 });
console.log(newTime.toString()); // 15:34:56
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
