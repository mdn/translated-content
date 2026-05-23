---
title: "Temporal.Duration : méthode negated()"
short-title: negated()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`negated()`** des instances de {{JSxRef("Temporal.Duration")}} retourne un nouvel objet `Temporal.Duration` avec la valeur négative de cette durée (tous les champs conservent la même magnitude, mais le signe est inversé).

## Syntaxe

```js-nolint
negated()
```

### Paramètres

Aucun.

### Valeur de retour

Un nouvel objet `Temporal.Duration`, où tous les champs ont la même magnitude que cette durée, mais le signe est inversé (les champs positifs deviennent négatifs, et vice versa).

## Exemples

### Utiliser la méthode `negated()`

```js
const d1 = Temporal.Duration.from({ hours: 1, minutes: 30 });
const d2 = Temporal.Duration.from({ hours: -1, minutes: -30 });

console.log(d1.negated().toString()); // "-PT1H30M"
console.log(d2.negated().toString()); // "PT1H30M"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.Duration")}}
- La méthode {{JSxRef("Temporal/Duration/abs", "Temporal.Duration.prototype.abs()")}}
- La propriété {{JSxRef("Temporal/Duration/sign", "Temporal.Duration.prototype.sign")}}
