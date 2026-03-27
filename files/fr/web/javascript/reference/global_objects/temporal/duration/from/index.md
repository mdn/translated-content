---
title: "Temporal.Duration : méthode statique from()"
short-title: from()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/from
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode statique **`from()`** des instances de {{JSxRef("Temporal.Duration")}} crée un nouvel objet `Temporal.Duration` à partir d'un autre objet `Temporal.Duration`, d'un objet avec des propriétés de durée ou d'une chaîne de caractères ISO 8601.

## Syntaxe

```js-nolint
Temporal.Duration.from(info)
```

### Paramètres

- `info`
  - : L'un des éléments suivants&nbsp;:
    - Une instance de {{JSxRef("Temporal.Duration")}}, ce qui crée une copie de l'instance.
    - Une chaîne de caractères [ISO 8601](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#format_de_durée_iso_8601) représentant une durée.
    - Un objet contenant au moins l'une des propriétés suivantes (dans l'ordre où elles sont récupérées et validées)&nbsp;:
      - {{JSxRef("Temporal/Duration/days", "days")}}
      - {{JSxRef("Temporal/Duration/hours", "hours")}}
      - {{JSxRef("Temporal/Duration/microseconds", "microseconds")}}
      - {{JSxRef("Temporal/Duration/milliseconds", "milliseconds")}}
      - {{JSxRef("Temporal/Duration/minutes", "minutes")}}
      - {{JSxRef("Temporal/Duration/months", "months")}}
      - {{JSxRef("Temporal/Duration/nanoseconds", "nanoseconds")}}
      - {{JSxRef("Temporal/Duration/seconds", "seconds")}}
      - {{JSxRef("Temporal/Duration/weeks", "weeks")}}
      - {{JSxRef("Temporal/Duration/years", "years")}}

      Chaque propriété doit contenir une valeur numérique entière. La durée résultante ne doit pas avoir de [signes mixtes](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#signe_de_la_durée), donc toutes ces propriétés doivent avoir le même signe (ou zéro). Les propriétés manquantes sont traitées comme zéro.

### Valeur de retour

Un nouvel objet `Temporal.Duration`, éventuellement [déséquilibré](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#équilibrage_des_durées), avec les composants définis.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée dans l'un des cas suivants&nbsp;:
    - L'une des propriétés reconnues dans l'objet `info` n'est pas un entier (y compris les valeurs non finies).
    - Une [unité de calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#durées_de_calendrier) (années, mois, semaines) a une valeur absolue ≥ 2<sup>32</sup>.
    - La partie non calendaire de la durée (jours et au-dessous), lorsqu'elle est exprimée en secondes, a une valeur absolue ≥ 2<sup>53</sup>.
- {{JSxRef("TypeError")}}
  - : Levée dans l'un des cas suivants&nbsp;:
    - `info` n'est pas un objet ou une chaîne de caractères.
    - Toutes les propriétés reconnues dans l'objet `info` sont `undefined`.

## Exemples

### Créer une durée à partir d'un objet

```js
const d1 = Temporal.Duration.from({ hours: 1, minutes: 30 });
console.log(d1.toString()); // "PT1H30M"

const d2 = Temporal.Duration.from({ months: 1, days: 2 });
console.log(d2.toString()); // "P1M2D"

// Peu courant car déséquilibré, mais valide
const unbalanced = Temporal.Duration.from({
  hours: 100,
  minutes: 100,
  seconds: 100,
});
console.log(unbalanced.toString()); // "PT100H100M100S"

const neg = Temporal.Duration.from({ hours: -1, minutes: -30 });
console.log(neg.toString()); // "-PT1H30M"
```

### Créer une durée à partir d'une chaîne de caractères

```js
const d = Temporal.Duration.from("P1Y2M3W4DT5H6M7.00800901S");
console.log(d.hours); // 5
```

### Créer une durée à partir d'une autre durée

```js
const d1 = Temporal.Duration.from({ hours: 1, minutes: 30 });
const d2 = Temporal.Duration.from(d1);
console.log(d2.toString()); // "PT1H30M"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.Duration")}}
- Le constructeur {{JSxRef("Temporal/Duration/Duration", "Temporal.Duration()")}}
- La méthode {{JSxRef("Temporal/Duration/with", "Temporal.Duration.prototype.with()")}}
