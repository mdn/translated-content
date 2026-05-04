---
title: "Temporal.Duration : méthode total()"
short-title: total()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/total
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`total()`** des instances de {{JSxRef("Temporal.Duration")}} retourne un nombre représentant la durée totale dans l'unité donnée.

## Syntaxe

```js-nolint
total(unit)
total(options)
```

### Paramètres

- `unit`
  - : Une chaîne de caractères représentant l'option [`unit`](#unit_2). Il s'agit d'une surcharge pratique, donc `total(unit)` est équivalent à `total({ unit })`, où `unit` est une chaîne de caractères.
- `options`
  - : Un objet contenant certaines ou toutes les propriétés suivantes (dans l'ordre où elles sont récupérées et validées)&nbsp;:
    - `relativeTo` {{Optional_Inline}}
      - : Un fuseau horaire ou une date(heure) normale qui fournit les informations de temps et de calendrier pour résoudre les [durées de calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) (voir le lien pour l'interprétation générale de cette option). Requis si `this` ou `other` est une durée de calendrier, ou si `unit` est une unité de calendrier.
    - `unit`
      - : L'une des unités temporelles&nbsp;: `"years"`, `"months"`, `"weeks"`, `"days"`, `"hours"`, `"minutes"`, `"seconds"`, `"milliseconds"`, `"microseconds"`, `"nanoseconds"`, ou leurs formes singulières.

### Valeur de retour

Un nombre à virgule flottante représentant la durée totale dans l'unité donnée. Peut être inexact en raison des limites de précision des nombres à virgule flottante.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée dans l'un des cas suivants&nbsp;:
    - `unit` n'est pas fourni ou n'est pas une unité valide.
    - `this` ou `other` est une durée de calendrier, ou `unit` est une unité de calendrier, et `relativeTo` n'est pas fourni.

## Description

Si un `relativeTo` est fourni, le résultat est calculé en ajoutant la durée au point de départ, en trouvant la différence entre le résultat et le point de départ (en nanosecondes), puis en convertissant la différence en l'unité demandée en divisant par le nombre approprié de nanosecondes par unité. Fournir une date-heure zonée permet également de prendre en compte l'heure d'été et d'autres changements de fuseau horaire&nbsp;; sinon, des jours de 24 heures sont supposés.

Si `relativeTo` n'est pas fourni, le résultat est calculé en convertissant la durée en nanosecondes et en divisant par le nombre approprié de nanosecondes par unité.

## Exemples

### Utiliser la méthode `total()`

```js
const d = Temporal.Duration.from({ hours: 1, minutes: 30 });

console.log(d.total("minutes")); // 90
console.log(d.total("hours")); // 1.5
```

### Total d'une durée de calendrier

```js
const d = Temporal.Duration.from({ months: 1 });

console.log(
  d.total({ unit: "days", relativeTo: Temporal.PlainDate.from("2021-01-01") }),
); // 31
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.Duration")}}
- La méthode {{JSxRef("Temporal/Duration/round", "Temporal.Duration.prototype.round()")}}
