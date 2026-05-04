---
title: "Temporal.Duration : propriété sign"
short-title: sign
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/sign
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La propriété d'accesseur **`sign`** des instances de {{JSxRef("Temporal.Duration")}} retourne `1` si cette durée est positive, `-1` si elle est négative, et `0` si elle est nulle. Comme [une durée n'a jamais de signes mixtes](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#duration_sign), le signe d'une durée est déterminé par le signe de l'un de ses champs non nuls.

## Exemples

### Utiliser la propriété `sign`

```js
const d1 = Temporal.Duration.from({ hours: 1, minutes: 30 });
const d2 = Temporal.Duration.from({ hours: -1, minutes: -30 });
const d3 = Temporal.Duration.from({ hours: 0 });

console.log(d1.sign); // 1
console.log(d2.sign); // -1
console.log(d3.sign); // 0

console.log(d1.abs().sign); // 1
console.log(d2.abs().sign); // 1
console.log(d3.abs().sign); // 0

console.log(d1.negated().sign); // -1
console.log(d2.negated().sign); // 1
console.log(d3.negated().sign); // 0
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.Duration")}}
- La méthode {{JSxRef("Temporal/Duration/abs", "Temporal.Duration.prototype.abs()")}}
- La méthode {{JSxRef("Temporal/Duration/negated", "Temporal.Duration.prototype.negated()")}}
- La propriété {{JSxRef("Temporal/Duration/blank", "Temporal.Duration.prototype.blank")}}
