---
title: "Temporal.Instant : méthode statique fromEpochNanoseconds()"
short-title: fromEpochNanoseconds()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/fromEpochNanoseconds
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode statique **`fromEpochNanoseconds()`** des instances de {{JSxRef("Temporal.Instant")}} crée un nouvel objet `Temporal.Instant` à partir du nombre de nanosecondes écoulées depuis l'époque Unix (minuit au début du 1er janvier 1970, UTC).

Pour convertir un objet {{JSxRef("Date")}} en un objet `Temporal.Instant`, utilisez plutôt {{JSxRef("Date.prototype.toTemporalInstant()")}}.

## Syntaxe

```js-nolint
Temporal.Instant.fromEpochNanoseconds(epochNanoseconds)
```

### Paramètres

- `epochNanoseconds`
  - : Un objet {{JSxRef("BigInt")}} représentant le nombre de nanosecondes écoulées depuis l'époque Unix.

### Valeur de retour

Un nouvel objet `Temporal.Instant` représentant l'instant dans le temps défini par `epochNanoseconds`.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si `epochNanoseconds` n'est pas dans la [plage représentable](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#dates_représentables), qui est de ±10<sup>8</sup> jours, soit environ ±273 972,6 ans, à partir de l'époque Unix.

## Exemples

### Utiliser la méthode `fromEpochNanoseconds()`

```js
const instant = Temporal.Instant.fromEpochNanoseconds(0n);
console.log(instant.toString()); // 1970-01-01T00:00:00Z
const vostok1Liftoff =
  Temporal.Instant.fromEpochNanoseconds(-275248380000000000n);
console.log(vostok1Liftoff.toString()); // 1961-04-12T06:07:00Z
const sts1Liftoff = Temporal.Instant.fromEpochNanoseconds(355924804000000000n);
console.log(sts1Liftoff.toString()); // 1981-04-12T12:00:04Z
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.Instant")}}
- La propriété {{JSxRef("Temporal/Instant/epochNanoseconds", "Temporal.Instant.prototype.epochNanoseconds")}}
- La méthode statique {{JSxRef("Temporal/Instant/from", "Temporal.Instant.from()")}}
- La méthode statique {{JSxRef("Temporal/Instant/fromEpochMilliseconds", "Temporal.Instant.fromEpochMilliseconds()")}}
- La méthode {{JSxRef("Date.prototype.toTemporalInstant()")}}
