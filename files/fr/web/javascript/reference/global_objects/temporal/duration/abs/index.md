---
title: "Temporal.Duration : méthode abs()"
short-title: abs()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/abs
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`abs()`** des instances de {{JSxRef("Temporal.Duration")}} retourne un nouvel objet `Temporal.Duration` avec la valeur absolue de cette durée (tous les champs ont la même magnitude, mais le signe devient positif).

## Syntaxe

```js-nolint
abs()
```

### Paramètres

Aucun.

### Valeur de retour

Un nouvel objet `Temporal.Duration` avec la valeur absolue de cette durée, qui est soit la même que cette durée si elle est déjà positive, soit sa [négation](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated) si elle est négative.

## Exemples

### Utiliser la méthode `abs()`

```js
const d1 = Temporal.Duration.from({ hours: 1, minutes: 30 });
const d2 = Temporal.Duration.from({ hours: -1, minutes: -30 });

console.log(d1.abs().toString()); // "PT1H30M"
console.log(d2.abs().toString()); // "PT1H30M"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.Duration")}}
- La méthode {{JSxRef("Temporal/Duration/negated", "Temporal.Duration.prototype.negated()")}}
- La propriété {{JSxRef("Temporal/Duration/sign", "Temporal.Duration.prototype.sign")}}
