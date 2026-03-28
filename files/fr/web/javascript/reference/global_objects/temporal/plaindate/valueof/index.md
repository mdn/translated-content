---
title: "Temporal.PlainDate : méthode valueOf()"
short-title: valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/valueOf
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`valueOf()`** des instances de {{JSxRef("Temporal.PlainDate")}} lève une {{JSxRef("TypeError")}}, ce qui empêche les instances de `Temporal.PlainDate` d'être [converties implicitement en primitives](/fr/docs/Web/JavaScript/Guide/Data_structures#contrainte_de_primitive) lorsqu'elles sont utilisées dans des opérations arithmétiques ou de comparaison.

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

Parce que la [conversion en primitive](/fr/docs/Web/JavaScript/Guide/Data_structures#contrainte_de_primitive) et la [conversion en nombre](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#contrainte_de_nombre) appellent `valueOf()` avant `toString()`, si `valueOf()` est absent, alors une expression comme `date1 > date2` les comparerait implicitement comme des chaînes, ce qui peut donner des résultats inattendus. En levant une `TypeError`, les instances de `Temporal.PlainDate` empêchent ces conversions implicites. Vous devez les convertir explicitement en chaînes en utilisant {{JSxRef("Temporal/PlainDate/toString", "Temporal.PlainDate.prototype.toString()")}}, ou utiliser la méthode statique {{JSxRef("Temporal/PlainDate/compare", "Temporal.PlainDate.compare()")}} pour les comparer.

## Exemples

### Opérations arithmétiques et de comparaison sur `Temporal.PlainDate`

Toutes les opérations arithmétiques et de comparaison sur les instances de `Temporal.PlainDate` doivent utiliser les méthodes dédiées ou les convertir explicitement en primitives.

```js
const date1 = Temporal.PlainDate.from("2022-01-01");
const date2 = Temporal.PlainDate.from("2022-07-01");
date1 > date2; // TypeError: can't convert PlainDate to primitive type
Temporal.PlainDate.compare(date1, date2); // -1

date2 - date1; // TypeError: can't convert PlainDate to primitive type
date2.since(date1).toString(); // "P181D"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainDate")}}
- La méthode {{JSxRef("Temporal/PlainDate/toString", "Temporal.PlainDate.prototype.toString()")}}
- La méthode {{JSxRef("Temporal/PlainDate/toJSON", "Temporal.PlainDate.prototype.toJSON()")}}
- La méthode {{JSxRef("Temporal/PlainDate/toLocaleString", "Temporal.PlainDate.prototype.toLocaleString()")}}
