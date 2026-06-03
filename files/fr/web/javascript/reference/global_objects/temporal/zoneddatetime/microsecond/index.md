---
title: "Temporal.ZonedDateTime : propriété microsecond"
short-title: microsecond
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/microsecond
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La propriété d'accesseur **`microsecond`** des instances de {{JSxRef("Temporal.ZonedDateTime")}} retourne un entier compris entre 0 et 999 représentant la composante microseconde (10<sup>-6</sup> seconde) de cette heure.

Le mutateur d'accesseur de `microsecond` est `undefined`. Vous ne pouvez pas modifier cette propriété directement. Utilisez la méthode {{JSxRef("Temporal/ZonedDateTime/with", "with()")}} pour créer un nouvel objet `Temporal.ZonedDateTime` avec la nouvelle valeur souhaitée.

Pour des informations générales et plus d'exemples, voir {{JSxRef("Temporal/PlainTime/microsecond", "Temporal.PlainTime.prototype.microsecond")}}.

## Exemples

### Utiliser la propriété `microsecond`

```js
const dt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:34:56.123456789-04:00[America/New_York]",
);
console.log(dt.microsecond); // 456
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
- La propriété {{JSxRef("Temporal/ZonedDateTime/nanosecond", "Temporal.ZonedDateTime.prototype.nanosecond")}}
- La propriété {{JSxRef("Temporal/PlainTime/microsecond", "Temporal.PlainTime.prototype.microsecond")}}
