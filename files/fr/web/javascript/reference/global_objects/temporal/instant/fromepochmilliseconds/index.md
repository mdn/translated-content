---
title: "Temporal.Instant : méthode statique fromEpochMilliseconds()"
short-title: fromEpochMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/fromEpochMilliseconds
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode statique **`Temporal.Instant.fromEpochMilliseconds()`** crée un nouvel objet `Temporal.Instant` à partir du nombre de millisecondes écoulées depuis l'époque Unix (minuit au début du 1er janvier 1970, UTC).

Pour convertir un objet {{JSxRef("Date")}} en un objet `Temporal.Instant`, utilisez plutôt {{JSxRef("Date.prototype.toTemporalInstant()")}}.

## Syntaxe

```js-nolint
Temporal.Instant.fromEpochMilliseconds(epochMilliseconds)
```

### Paramètres

- `epochMilliseconds`
  - : Un nombre représentant le nombre de millisecondes écoulées depuis l'époque Unix. En interne, il est converti en BigInt et multiplié par `1e6` pour obtenir le nombre de nanosecondes.

### Valeur de retour

Un nouvel objet `Temporal.Instant` représentant l'instant dans le temps défini par `epochMilliseconds`.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée dans l'un des cas suivants&nbsp;:
    - `epochMilliseconds` ne peut pas être converti en BigInt (par exemple, ce n'est pas un entier).
    - `epochMilliseconds` n'est pas dans la [plage représentable](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#dates_représentables), qui est de ±10<sup>8</sup> jours, soit environ ±273 972,6 ans, à partir de l'époque Unix.

## Exemples

### Utiliser la méthode `fromEpochMilliseconds()`

```js
const instant = Temporal.Instant.fromEpochMilliseconds(0);
console.log(instant.toString()); // 1970-01-01T00:00:00Z
const vostok1Liftoff = Temporal.Instant.fromEpochMilliseconds(-275248380000);
console.log(vostok1Liftoff.toString()); // 1961-04-12T06:07:00Z
const sts1Liftoff = Temporal.Instant.fromEpochMilliseconds(355924804000);
console.log(sts1Liftoff.toString()); // 1981-04-12T12:00:04Z
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.Instant")}}
- La propriété {{JSxRef("Temporal/Instant/epochMilliseconds", "Temporal.Instant.prototype.epochMilliseconds")}}
- La méthode statique {{JSxRef("Temporal/Instant/from", "Temporal.Instant.from()")}}
- La méthode statique {{JSxRef("Temporal/Instant/fromEpochNanoseconds", "Temporal.Instant.fromEpochNanoseconds()")}}
- La méthode {{JSxRef("Date.prototype.toTemporalInstant()")}}
