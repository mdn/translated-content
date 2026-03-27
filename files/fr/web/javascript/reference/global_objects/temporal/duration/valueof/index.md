---
title: "Temporal.Duration : méthode valueOf()"
short-title: valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/valueOf
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`valueOf()`** des instances de {{JSxRef("Temporal.Duration")}} lève une {{JSxRef("TypeError")}}, ce qui empêche les instances de `Temporal.Duration` d'être [converties implicitement en primitives](/fr/docs/Web/JavaScript/Guide/Data_structures#contrainte_de_primitive) lorsqu'elles sont utilisées dans des opérations arithmétiques ou de comparaison.

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

Parce que la [conversion en primitive](/fr/docs/Web/JavaScript/Guide/Data_structures#contrainte_de_primitive) et la [conversion en nombre](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#contrainte_de_nombre) appellent `valueOf()` avant `toString()`, si `valueOf()` est absent, alors une expression comme `duration1 > duration2` les comparerait implicitement comme des chaînes de caractères, ce qui peut donner des résultats inattendus tels que `"PT3S" > "PT1M"`. En levant une `TypeError`, les instances de `Temporal.Duration` empêchent ces conversions implicites. Vous devez les convertir explicitement en nombres en utilisant {{JSxRef("Temporal/Duration/total", "Temporal.Duration.prototype.total()")}}, ou utiliser la méthode statique {{JSxRef("Temporal/Duration/compare", "Temporal.Duration.compare()")}} pour les comparer.

## Exemples

### Opérations arithmétiques et de comparaison sur `Temporal.Duration`

Toutes les opérations arithmétiques et de comparaison sur les instances de `Temporal.Duration` doivent utiliser les méthodes dédiées ou les convertir explicitement en primitives.

```js
const duration1 = Temporal.Duration.from({ seconds: 3 });
const duration2 = Temporal.Duration.from({ minutes: 1 });
duration1 > duration2; // TypeError: can't convert Duration to primitive type
duration1.total("seconds") > duration2.total("seconds"); // false
Temporal.Duration.compare(duration1, duration2); // -1

duration1 + duration2; // TypeError: can't convert Duration to primitive type
duration1.total("seconds") + duration2.total("seconds"); // 63
duration1.add(duration2).toString(); // "PT1M3S"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.Duration")}}
- La méthode {{JSxRef("Temporal/Duration/toString", "Temporal.Duration.prototype.toString()")}}
- La méthode {{JSxRef("Temporal/Duration/toJSON", "Temporal.Duration.prototype.toJSON()")}}
- La méthode {{JSxRef("Temporal/Duration/toLocaleString", "Temporal.Duration.prototype.toLocaleString()")}}
