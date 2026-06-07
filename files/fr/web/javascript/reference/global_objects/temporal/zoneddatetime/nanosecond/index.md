---
title: "Temporal.ZonedDateTime : propriété nanosecond"
short-title: nanosecond
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/nanosecond
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La propriété d'accesseur **`nanosecond`** des instances de {{JSxRef("Temporal.ZonedDateTime")}} retourne un entier compris entre 0 et 999 représentant la composante nanoseconde (10<sup>-9</sup> seconde) de cette heure.

Le mutateur d'accesseur de `nanosecond` est `undefined`. Vous ne pouvez pas modifier cette propriété directement. Utilisez la méthode {{JSxRef("Temporal/ZonedDateTime/with", "with()")}} pour créer un nouvel objet `Temporal.ZonedDateTime` avec la nouvelle valeur souhaitée.

Pour des informations générales et plus d'exemples, voir {{JSxRef("Temporal/PlainTime/nanosecond", "Temporal.PlainTime.prototype.nanosecond")}}.

## Exemples

### Utiliser la propriété `nanosecond`

```js
const dt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:34:56.123456789-04:00[America/New_York]",
);
console.log(dt.nanosecond); // 789
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
- La propriété {{JSxRef("Temporal/ZonedDateTime/second", "Temporal.ZonedDateTime.prototype.second")}}
- La propriété {{JSxRef("Temporal/ZonedDateTime/millisecond", "Temporal.ZonedDateTime.prototype.millisecond")}}
- La propriété {{JSxRef("Temporal/ZonedDateTime/microsecond", "Temporal.ZonedDateTime.prototype.microsecond")}}
- La propriété {{JSxRef("Temporal/PlainTime/nanosecond", "Temporal.PlainTime.prototype.nanosecond")}}
