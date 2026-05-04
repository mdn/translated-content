---
title: Constructeur Temporal.Instant()
short-title: Temporal.Instant()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/Instant
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Le constructeur **`Temporal.Instant()`** crée des objets {{JSxRef("Temporal.Instant")}}.

Ce constructeur est exactement équivalent à l'appel de {{JSxRef("Temporal/Instant/fromEpochNanoseconds", "Temporal.Instant.fromEpochNanoseconds()")}}.

## Syntaxe

```js-nolint
new Temporal.Instant(epochNanoseconds)
```

> [!NOTE]
> `Temporal.Instant()` ne peut être construit qu'avec {{JSxRef("Operators/new", "new")}}. Tenter de l'appeler sans `new` génère une {{JSxRef("TypeError")}}.

### Paramètres

- `epochNanoseconds`
  - : Un objet {{JSxRef("BigInt")}} représentant le nombre de nanosecondes écoulées depuis l'époque Unix.

### Valeur de retour

Un nouvel objet `Temporal.Instant` représentant l'instant dans le temps défini par `epochNanoseconds`.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si `epochNanoseconds` représente un instant en dehors de la plage des instants représentables, qui est de ±10<sup>8</sup> jours, soit environ ±273 972,6 ans, à partir de l'époque Unix.

## Exemples

### Utiliser le constructeur `Temporal.Instant()`

```js
const instant = new Temporal.Instant(0n);
console.log(instant.toString()); // 1970-01-01T00:00:00Z
const vostok1Liftoff = new Temporal.Instant(-275248380000000000n);
console.log(vostok1Liftoff.toString()); // 1961-04-12T06:07:00Z
const sts1Liftoff = new Temporal.Instant(355924804000000000n);
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
- La méthode statique {{JSxRef("Temporal/Instant/fromEpochNanoseconds", "Temporal.Instant.fromEpochNanoseconds()")}}
