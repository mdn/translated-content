---
title: Constructeur Temporal.Duration()
short-title: Temporal.Duration()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/Duration
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Le constructeur **`Temporal.Duration()`** crée des objets {{JSxRef("Temporal.Duration")}}.

Ce constructeur permet de créer des instances en fournissant directement les données sous-jacentes. Comme pour toutes les autres classes `Temporal`, vous devriez généralement construire des objets `Temporal.Duration` en utilisant la méthode statique {{JSxRef("Temporal/Duration/from", "Temporal.Duration.from()")}}, qui peut gérer une variété de types d'entrée.

## Syntaxe

```js-nolint
new Temporal.Duration()
new Temporal.Duration(years)
new Temporal.Duration(years, months)
new Temporal.Duration(years, months, weeks)
new Temporal.Duration(years, months, weeks, days)
new Temporal.Duration(years, months, weeks, days, hours)
new Temporal.Duration(years, months, weeks, days, hours, minutes)
new Temporal.Duration(years, months, weeks, days, hours, minutes, seconds)
new Temporal.Duration(years, months, weeks, days, hours, minutes, seconds, milliseconds)
new Temporal.Duration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds)
new Temporal.Duration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds)
```

> [!NOTE]
> `Temporal.Duration()` ne peut être construit qu'avec {{JSxRef("Operators/new", "new")}}. Tenter de l'appeler sans `new` déclenche une {{JSxRef("TypeError")}}.

### Paramètres

- `years` {{Optional_Inline}}
  - : Nombre d'années, ou `undefined` (qui est traité comme `0`).
- `months` {{Optional_Inline}}
  - : Nombre de mois, ou `undefined` (qui est traité comme `0`).
- `weeks` {{Optional_Inline}}
  - : Nombre de semaines, ou `undefined` (qui est traité comme `0`).
- `days` {{Optional_Inline}}
  - : Nombre de jours, ou `undefined` (qui est traité comme `0`).
- `hours` {{Optional_Inline}}
  - : Nombre d'heures, ou `undefined` (qui est traité comme `0`).
- `minutes` {{Optional_Inline}}
  - : Nombre de minutes, ou `undefined` (qui est traité comme `0`).
- `seconds` {{Optional_Inline}}
  - : Nombre de secondes, ou `undefined` (qui est traité comme `0`).
- `milliseconds` {{Optional_Inline}}
  - : Nombre de millisecondes, ou `undefined` (qui est traité comme `0`).
- `microseconds` {{Optional_Inline}}
  - : Nombre de microsecondes, ou `undefined` (qui est traité comme `0`).
- `nanoseconds` {{Optional_Inline}}
  - : Nombre de nanosecondes, ou `undefined` (qui est traité comme `0`).

### Valeur de retour

Un nouvel objet `Temporal.Duration`, éventuellement [déséquilibré](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#équilibrage_des_durées), avec les composants définis.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée dans l'un des cas suivants&nbsp;:
    - L'un des paramètres n'est pas un nombre entier (y compris les valeurs non finies).
    - Une [unité de calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#durées_de_calendrier) (années, mois, semaines) a une valeur absolue ≥ 2<sup>32</sup>.
    - La partie non calendaire de la durée (jours et au-dessous), lorsqu'elle est exprimée en secondes, a une valeur absolue ≥ 2<sup>53</sup>.

## Exemples

### Utiliser `Temporal.Duration()`

```js
const d = new Temporal.Duration(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(d.toString()); // "P1Y2M3W4DT5H6M7.00800901S"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.Duration")}}
- La méthode statique {{JSxRef("Temporal/Duration/from", "Temporal.Duration.from()")}}
