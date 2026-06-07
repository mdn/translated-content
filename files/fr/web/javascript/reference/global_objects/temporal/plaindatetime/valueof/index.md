---
title: "Temporal.PlainDateTime : méthode valueOf()"
short-title: valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/valueOf
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`valueOf()`** de {{JSxRef("Temporal.PlainDateTime")}} lève une {{JSxRef("TypeError")}}, ce qui empêche les instances `Temporal.PlainDateTime` d'être [converties implicitement en primitives](/fr/docs/Web/JavaScript/Guide/Data_structures#contrainte_de_primitive) lorsqu'elles sont utilisées dans des opérations arithmétiques ou de comparaison.

## Syntaxe

```js-nolint
valueOf()
```

### Paramètres

Aucun.

### Valeur de retour

Aucun.

### Exceptions

- {{JSxRef("TypeError")}}
  - : Toujours levée.

## Description

Parce que la [conversion en primitif](/fr/docs/Web/JavaScript/Guide/Data_structures#contrainte_de_primitive) et la [conversion en nombre](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#contrainte_de_nombre) appellent `valueOf()` avant `toString()`, si `valueOf()` est absent, alors une expression comme `dateTime1 > dateTime2` les comparerait implicitement comme des chaînes de caractères, ce qui peut donner des résultats inattendus. En levant une `TypeError`, les instances `Temporal.PlainDateTime` empêchent de telles conversions implicites. Il faut les convertir explicitement en chaînes de caractères avec {{JSxRef("Temporal/PlainDateTime/toString", "Temporal.PlainDateTime.prototype.toString()")}}, ou utiliser la méthode statique {{JSxRef("Temporal/PlainDateTime/compare", "Temporal.PlainDateTime.compare()")}} pour les comparer.

## Exemples

### Opérations arithmétiques et de comparaison sur `Temporal.PlainDateTime`

Toutes les opérations arithmétiques et de comparaison sur les instances `Temporal.PlainDateTime` doivent utiliser les méthodes dédiées ou convertir explicitement les objets en primitifs.

```js
const dt1 = Temporal.PlainDateTime.from("2022-01-01T00:00:00");
const dt2 = Temporal.PlainDateTime.from("2022-07-01T00:00:00");
dt1 > dt2; // TypeError: can't convert PlainDateTime to primitive type
Temporal.PlainDateTime.compare(dt1, dt2); // -1

dt2 - dt1; // TypeError: can't convert PlainDateTime to primitive type
dt2.since(dt1).toString(); // "P181D"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainDateTime")}}
- La méthode {{JSxRef("Temporal/PlainDateTime/toString", "Temporal.PlainDateTime.prototype.toString()")}}
- La méthode {{JSxRef("Temporal/PlainDateTime/toJSON", "Temporal.PlainDateTime.prototype.toJSON()")}}
- La méthode {{JSxRef("Temporal/PlainDateTime/toLocaleString", "Temporal.PlainDateTime.prototype.toLocaleString()")}}
