---
title: "Temporal.ZonedDateTime : propriété millisecond"
short-title: millisecond
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/millisecond
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La propriété d'accesseur **`millisecond`** des instances de {{JSxRef("Temporal.ZonedDateTime")}} retourne un entier compris entre 0 et 999 représentant la composante milliseconde (10<sup>-3</sup> seconde) de cette heure.

Le mutateur d'accesseur de `millisecond` est `undefined`. Vous ne pouvez pas modifier cette propriété directement. Utilisez la méthode {{JSxRef("Temporal/ZonedDateTime/with", "with()")}} pour créer un nouvel objet `Temporal.ZonedDateTime` avec la nouvelle valeur souhaitée.

Pour des informations générales et plus d'exemples, voir {{JSxRef("Temporal/PlainTime/millisecond", "Temporal.PlainTime.prototype.millisecond")}}.

## Exemples

### Utiliser la propriété `millisecond`

```js
const dt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:34:56.123456789-04:00[America/New_York]",
);
console.log(dt.millisecond); // 123
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
- La propriété {{JSxRef("Temporal/ZonedDateTime/microsecond", "Temporal.ZonedDateTime.prototype.microsecond")}}
- La propriété {{JSxRef("Temporal/ZonedDateTime/nanosecond", "Temporal.ZonedDateTime.prototype.nanosecond")}}
- La propriété {{JSxRef("Temporal/PlainTime/millisecond", "Temporal.PlainTime.prototype.millisecond")}}
