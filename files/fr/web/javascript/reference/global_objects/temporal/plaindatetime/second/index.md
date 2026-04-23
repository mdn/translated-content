---
title: "Temporal.PlainDateTime : propriété second"
short-title: second
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/second
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La propriété d'accesseur **`second`** des instances de {{JSxRef("Temporal.PlainDateTime")}} renvoie un entier compris entre 0 et 59 représentant la composante des secondes de cette heure.

Le mutateur d'accesseur de `second` est `undefined`. Vous ne pouvez pas modifier cette propriété directement. Utilisez la méthode {{JSxRef("Temporal/PlainDateTime/with", "with()")}} pour créer un nouvel objet `Temporal.PlainDateTime` avec la nouvelle valeur souhaitée.

Pour des informations générales et plus d'exemples, voir {{JSxRef("Temporal/PlainTime/second", "Temporal.PlainTime.prototype.second")}}.

## Exemples

### Utiliser la propriété `second`

```js
const dt = Temporal.PlainDateTime.from("2021-07-01T12:34:56.123456789");
console.log(dt.second); // 56
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
- La propriété {{JSxRef("Temporal/PlainDateTime/millisecond", "Temporal.PlainDateTime.prototype.millisecond")}}
- La propriété {{JSxRef("Temporal/PlainDateTime/microsecond", "Temporal.PlainDateTime.prototype.microsecond")}}
- La propriété {{JSxRef("Temporal/PlainDateTime/nanosecond", "Temporal.PlainDateTime.prototype.nanosecond")}}
- La propriété {{JSxRef("Temporal/PlainTime/second", "Temporal.PlainTime.prototype.second")}}
