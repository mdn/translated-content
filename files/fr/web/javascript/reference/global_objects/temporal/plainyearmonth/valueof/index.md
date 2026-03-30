---
title: "Temporal.PlainYearMonth : méthode valueOf()"
short-title: valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/valueOf
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`valueOf()`** des instances de {{JSxRef("Temporal.PlainYearMonth")}} lève un objet {{JSxRef("TypeError")}}, ce qui empêche les instances de `Temporal.PlainYearMonth` d'être [converties implicitement en primitives](/fr/docs/Web/JavaScript/Guide/Data_structures#contrainte_de_primitive) lorsqu'elles sont utilisées dans des opérations arithmétiques ou de comparaison.

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

Parce que la [conversion en primitive](/fr/docs/Web/JavaScript/Guide/Data_structures#contrainte_de_primitive) et la [conversion en nombre](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#contrainte_de_nombre) appellent `valueOf()` avant `toString()`, si `valueOf()` est absent, alors une expression comme `yearMonth1 > yearMonth2` les comparerait implicitement comme des chaînes de caractères, ce qui peut donner des résultats inattendus. En levant un `TypeError`, les instances de `Temporal.PlainYearMonth` empêchent ces conversions implicites. Vous devez les convertir explicitement en chaînes de caractères en utilisant {{JSxRef("Temporal/PlainYearMonth/toString", "Temporal.PlainYearMonth.prototype.toString()")}}, ou utiliser la méthode statique {{JSxRef("Temporal/PlainYearMonth/compare", "Temporal.PlainYearMonth.compare()")}} pour les comparer.

## Exemples

### Opérations arithmétiques et de comparaison sur `Temporal.PlainYearMonth`

Toutes les opérations arithmétiques et de comparaison sur les instances de `Temporal.PlainYearMonth` doivent utiliser les méthodes dédiées ou les convertir explicitement en primitives.

```js
const ym1 = Temporal.PlainYearMonth.from("2021-01");
const ym2 = Temporal.PlainYearMonth.from("2021-07");
ym1 > ym2; // TypeError: can't convert PlainYearMonth to primitive type
Temporal.PlainYearMonth.compare(ym1, ym2); // -1

ym2 - ym1; // TypeError: can't convert PlainYearMonth to primitive type
ym2.since(ym1).toString(); // "P6M"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainYearMonth")}}
- La méthode {{JSxRef("Temporal/PlainYearMonth/toString", "Temporal.PlainYearMonth.prototype.toString()")}}
- La méthode {{JSxRef("Temporal/PlainYearMonth/toJSON", "Temporal.PlainYearMonth.prototype.toJSON()")}}
- La méthode {{JSxRef("Temporal/PlainYearMonth/toLocaleString", "Temporal.PlainYearMonth.prototype.toLocaleString()")}}
