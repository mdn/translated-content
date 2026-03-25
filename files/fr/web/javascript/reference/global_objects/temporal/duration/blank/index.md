---
title: "Temporal.Duration : propriété blank"
short-title: blank
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/blank
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La propriété d'accesseur **`blank`** des instances de {{JSxRef("Temporal.Duration")}} retourne un booléen qui est `true` si cette durée représente une durée nulle, et `false` sinon. Elle est équivalente à `duration.sign === 0`.

## Exemples

### Utiliser la propriété `blank`

```js
const d1 = Temporal.Duration.from({ hours: 1, minutes: 30 });
const d2 = Temporal.Duration.from({ hours: -1, minutes: -30 });
const d3 = Temporal.Duration.from({ hours: 0 });

console.log(d1.blank); // false
console.log(d2.blank); // false
console.log(d3.blank); // true
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.Duration")}}
- La propriété {{JSxRef("Temporal/Duration/sign", "Temporal.Duration.prototype.sign")}}
