---
title: "Temporal.Instant : méthode valueOf()"
short-title: valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/valueOf
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`valueOf()`** des instances de {{JSxRef("Temporal.Instant")}} lève une {{JSxRef("TypeError")}}, ce qui empêche les instances de `Temporal.Instant` d'être [converties implicitement en primitives](/fr/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) lorsqu'elles sont utilisées dans des opérations arithmétiques ou de comparaison.

## Syntaxe

```js-nolint
valueOf()
```

### Paramètres

Aucun.

### Valeur de retour

Aucune.

### Exceptions

- {{JSxRef("TypeError")}}
  - : Toujours levée.

## Description

Parce que la [conversion en primitive](/fr/docs/Web/JavaScript/Guide/Data_structures#contrainte_de_primitive) et la [conversion en nombre](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#contrainte_de_nombre) appellent `valueOf()` avant `toString()`, si `valueOf()` est absent, alors une expression comme `instant1 > instant2` les comparerait implicitement comme des chaînes, ce qui peut donner des résultats inattendus. En levant une `TypeError`, les instances de `Temporal.Instant` empêchent ces conversions implicites. Vous devez les convertir explicitement en nombres en utilisant {{JSxRef("Temporal/Instant/epochNanoseconds", "Temporal.Instant.prototype.epochNanoseconds")}}, ou utiliser la méthode statique {{JSxRef("Temporal/Instant/compare", "Temporal.Instant.compare()")}} pour les comparer.

## Exemples

### Opérations arithmétiques et de comparaison sur `Temporal.Instant`

Toutes les opérations arithmétiques et de comparaison sur les instances de `Temporal.Instant` doivent utiliser les méthodes dédiées ou les convertir explicitement en primitives.

```js
const instant1 = Temporal.Instant.fromEpochMilliseconds(0);
const instant2 = Temporal.Instant.fromEpochMilliseconds(1000);
instant1 > instant2; // TypeError: can't convert Instant to primitive type
instant1.epochNanoseconds > instant2.epochNanoseconds; // false
Temporal.Instant.compare(instant1, instant2); // -1

instant2 - instant1; // TypeError: can't convert Instant to primitive type
instant2.since(instant1).toString(); // "PT1S"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.Instant")}}
- La méthode {{JSxRef("Temporal/Instant/toString", "Temporal.Instant.prototype.toString()")}}
- La méthode {{JSxRef("Temporal/Instant/toJSON", "Temporal.Instant.prototype.toJSON()")}}
- La méthode {{JSxRef("Temporal/Instant/toLocaleString", "Temporal.Instant.prototype.toLocaleString()")}}
