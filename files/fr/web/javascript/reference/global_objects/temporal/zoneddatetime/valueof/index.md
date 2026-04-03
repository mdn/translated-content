---
title: "Temporal.ZonedDateTime : méthode valueOf()"
short-title: valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/valueOf
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`valueOf()`** des instances de {{JSxRef("Temporal.ZonedDateTime")}} lève une {{JSxRef("TypeError")}}, ce qui empêche les instances de `Temporal.ZonedDateTime` d'être [converties implicitement en primitives](/fr/docs/Web/JavaScript/Guide/Data_structures#contrainte_de_primitive) lorsqu'elles sont utilisées dans des opérations arithmétiques ou de comparaison.

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

Parce que la [conversion en primitive](/fr/docs/Web/JavaScript/Guide/Data_structures#contrainte_de_primitive) et la [conversion en nombre](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#contrainte_de_nombre) appellent `valueOf()` avant `toString()`, si `valueOf()` est absent, alors une expression comme `yearMonth1 > yearMonth2` les comparerait implicitement comme des chaînes de caractères, ce qui peut donner des résultats inattendus. En levant une `TypeError`, les instances de `Temporal.ZonedDateTime` empêchent ces conversions implicites. Vous devez les convertir explicitement en nombres en utilisant {{JSxRef("Temporal/ZonedDateTime/epochNanoseconds", "Temporal/ZonedDateTime.prototype.epochNanoseconds")}}, ou utiliser la méthode statique {{JSxRef("Temporal/ZonedDateTime/compare", "Temporal.ZonedDateTime.compare()")}} pour les comparer.

## Exemples

### Opérations arithmétiques et de comparaison sur `Temporal.ZonedDateTime`

Toutes les opérations arithmétiques et de comparaison sur les instances de `Temporal.ZonedDateTime` doivent utiliser les méthodes dédiées ou les convertir explicitement en primitives.

```js
const zdt1 = Temporal.ZonedDateTime.from(
  "2022-01-01T00:00:00[America/New_York]",
);
const zdt2 = Temporal.ZonedDateTime.from(
  "2022-07-01T00:00:00[America/New_York]",
);
zdt1 > zdt2; // TypeError: can't convert ZonedDateTime to primitive type
Temporal.ZonedDateTime.compare(zdt1, zdt2); // -1

zdt2 - zdt1; // TypeError: can't convert ZonedDateTime to primitive type
zdt2.since(zdt1).toString(); // "PT4343H"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.ZonedDateTime")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/toString", "Temporal.ZonedDateTime.prototype.toString()")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/toJSON", "Temporal.ZonedDateTime.prototype.toJSON()")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}}
