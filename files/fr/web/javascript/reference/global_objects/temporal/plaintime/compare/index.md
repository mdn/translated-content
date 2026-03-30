---
title: "Temporal.PlainTime : méthode statique compare()"
short-title: compare()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/compare
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode statique **`Temporal.PlainTime.compare()`** retourne un nombre (-1, 0 ou 1) indiquant si la première heure est avant, identique ou après la deuxième heure. Elle équivaut à comparer les champs heure, minute, seconde, milliseconde, microseconde et nanoseconde un par un.

## Syntaxe

```js-nolint
Temporal.PlainTime.compare(time1, time2)
```

### Paramètres

- `time1`
  - : Une chaîne de caractères, un objet ou une instance de {{JSxRef("Temporal.PlainTime")}} représentant la première heure à comparer. Elle est convertie en objet `Temporal.PlainTime` en utilisant le même algorithme que {{JSxRef("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}}.
- `time2`
  - : La deuxième heure à comparer, convertie en objet `Temporal.PlainTime` en utilisant le même algorithme que `time1`.

### Valeur de retour

Retourne `-1` si `time1` est avant `time2`, `0` s'ils sont identiques, et `1` si `time1` est après `time2`.

## Exemples

### Utiliser la méthode `Temporal.PlainTime.compare()`

```js
const time1 = Temporal.PlainTime.from("12:34:56");
const time2 = Temporal.PlainTime.from("12:34:57");
console.log(Temporal.PlainTime.compare(time1, time2)); // -1

const time3 = Temporal.PlainTime.from("11:34:56");
console.log(Temporal.PlainTime.compare(time1, time3)); // 1
```

### Trier un tableau d'heures

Le but de cette fonction `compare()` est de servir de comparateur à passer à {{JSxRef("Array.prototype.sort()")}} et aux fonctions similaires.

```js
const times = ["12:34:56", "11:34:56", "12:34:57"];

times.sort(Temporal.PlainTime.compare);
console.log(times);
// [ "11:34:56", "12:34:56", "12:34:57" ]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainTime")}}
- La méthode {{JSxRef("Temporal/PlainTime/equals", "Temporal.PlainTime.prototype.equals()")}}
