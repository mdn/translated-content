---
title: "Temporal.PlainTime : méthode valueOf()"
short-title: valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/valueOf
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`valueOf()`** des instances de {{JSxRef("Temporal.PlainTime")}} lance une {{JSxRef("TypeError")}}, ce qui empêche les instances de `Temporal.PlainTime` d'être [converties implicitement en primitives](/fr/docs/Web/JavaScript/Guide/Data_structures#contrainte_de_primitive) lorsqu'elles sont utilisées dans des opérations arithmétiques ou de comparaison.

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

Parce que la [conversion en primitive](/fr/docs/Web/JavaScript/Guide/Data_structures#contrainte_de_primitive) et la [conversion en nombre](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#contrainte_de_nombre) appellent `valueOf()` avant `toString()`, si `valueOf()` est absent, alors une expression comme `time1 > time2` les comparerait implicitement comme des chaînes de caractères, ce qui peut donner des résultats inattendus. En lançant un `TypeError`, les instances de `Temporal.PlainTime` empêchent ces conversions implicites. Vous devez les convertir explicitement en chaînes de caractères en utilisant {{JSxRef("Temporal/PlainTime/toString", "Temporal.PlainTime.prototype.toString()")}}, ou utiliser la méthode statique {{JSxRef("Temporal/PlainTime/compare", "Temporal.PlainTime.compare()")}} pour les comparer.

## Exemples

### Opérations arithmétiques et de comparaison sur `Temporal.PlainTime`

Toutes les opérations arithmétiques et de comparaison sur les instances de `Temporal.PlainTime` doivent utiliser les méthodes dédiées ou les convertir explicitement en primitives.

```js
const time1 = Temporal.PlainTime.from("00:00:00");
const time2 = Temporal.PlainTime.from("12:00:00");
time1 > time2; // TypeError: can't convert PlainTime to primitive type
Temporal.PlainTime.compare(time1, time2); // -1

time2 - time1; // TypeError: can't convert PlainTime to primitive type
time2.since(time1).toString(); // "PT12H"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainTime")}}
- La méthode {{JSxRef("Temporal/PlainTime/toString", "Temporal.PlainTime.prototype.toString()")}}
- La méthode {{JSxRef("Temporal/PlainTime/toJSON", "Temporal.PlainTime.prototype.toJSON()")}}
- La méthode {{JSxRef("Temporal/PlainTime/toLocaleString", "Temporal.PlainTime.prototype.toLocaleString()")}}
