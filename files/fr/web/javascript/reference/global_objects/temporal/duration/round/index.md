---
title: "Temporal.Duration : méthode round()"
short-title: round()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/round
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`round()`** des instances de {{JSxRef("Temporal.Duration")}} retourne un nouvel objet `Temporal.Duration` avec la durée arrondie à l'unité la plus petite donnée et/ou [équilibrée](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#équilibrage_des_durées) à l'unité la plus grande donnée.

## Syntaxe

```js-nolint
round(smallestUnit)
round(options)
```

### Paramètres

- `smallestUnit`
  - : Une chaîne de caractères représentant l'option [`smallestUnit`](#smallestunit_2). Il s'agit d'une surcharge pratique, donc `round(smallestUnit)` est équivalent à `round({ smallestUnit })`, où `smallestUnit` est une chaîne de caractères.
- `options`
  - : Un objet contenant certaines ou toutes les propriétés suivantes (dans l'ordre dans lequel elles sont récupérées et validées)&nbsp;:
    - `largestUnit` {{Optional_Inline}}
      - : L'une des unités temporelles&nbsp;: `"years"`, `"months"`, `"weeks"`, `"days"`, `"hours"`, `"minutes"`, `"seconds"`, `"milliseconds"`, `"microseconds"`, `"nanoseconds"`, ou leurs formes singulières, ou la valeur `"auto"` qui signifie la plus grande composante non nulle de cette durée ou `smallestUnit`, selon ce qui est le plus grand. Par défaut, `"auto"`. Le résultat ne contiendra pas d'unités plus grandes que celle-ci&nbsp;; par exemple, si l'unité la plus grande est `"minutes"`, alors «&nbsp;1 hour 30 minutes&nbsp;» deviendra «&nbsp;90 minutes&nbsp;».
    - `relativeTo` {{Optional_Inline}}
      - : Un fuseau horaire ou une date(heure) simple qui fournit les informations de temps et de calendrier pour résoudre les [durées de calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#durées_calendaires) (voir le lien pour l'interprétation générale de cette option). Requis si `this` ou `other` est une durée de calendrier, ou si `smallestUnit` est une unité de calendrier.
    - `roundingIncrement` {{Optional_Inline}}
      - : Un nombre (tronqué à un entier) représentant l'incrément d'arrondi dans l'unité `smallestUnit` donnée. Par défaut, `1`. Doit être dans la plage inclusive de 1 à 1e9. Si l'unité la plus petite est heures, minutes, secondes, millisecondes, microsecondes ou nanosecondes, l'incrément doit être un diviseur de la valeur maximale de l'unité&nbsp;; par exemple, si l'unité est heures, l'incrément doit être un diviseur de 24 et ne doit pas être 24 lui-même, ce qui signifie qu'il peut être 1, 2, 3, 4, 6, 8 ou 12.
    - `roundingMode` {{Optional_Inline}}
      - : Une chaîne de caractères représentant le mode d'arrondi définissant comment arrondir vers le haut ou vers le bas dans divers scénarios. Voir [`Intl.NumberFormat()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingmode). Par défaut, `"halfExpand"`.
    - `smallestUnit` {{Optional_Inline}}
      - : L'une des unités temporelles&nbsp;: `"years"`, `"months"`, `"weeks"`, `"days"`, `"hours"`, `"minutes"`, `"seconds"`, `"milliseconds"`, `"microseconds"`, `"nanoseconds"`, ou leurs formes singulières. Par défaut, `"nanoseconds"`. Pour les unités supérieures à `"nanoseconds"`, les parties fractionnaires de `smallestUnit` seront arrondies selon les paramètres `roundingIncrement` et `roundingMode`. Doit être inférieur ou égal à `largestUnit`. Au moins l'une des options `smallestUnit` et `largestUnit` doit être fournie.

### Valeur de retour

Un nouvel objet `Temporal.Duration`, où l'unité la plus grande n'est pas plus grande que l'option `largestUnit`, et l'unité la plus petite n'est pas plus petite que l'option `smallestUnit`. Les parties fractionnaires de l'unité `smallestUnit` sont arrondies selon les paramètres `roundingIncrement` et `roundingMode`.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si l'une des options est invalide.

## Description

La méthode `round()` effectue deux opérations&nbsp;: l'arrondi et l'équilibrage. Elle fait ce qui suit&nbsp;:

1. Elle s'assure que la durée est équilibrée. Si un composant dépasse son maximum préféré (24 heures par jour, 60 minutes par heure, etc.), l'excédent est reporté à l'unité supérieure suivante, jusqu'à atteindre `largestUnit`. Par exemple, «&nbsp;24 heures 90 minutes&nbsp;» devient "25 heures 30 minutes" si `largestUnit` est `"auto"`, et "1 jour 1 heure 30 minutes" si `largestUnit` est `"days"`.
2. Pour tous les composants supérieurs à `largestUnit`, ils sont reportés dans `largestUnit` ; par exemple, «&nbsp;2 heures 30 minutes&nbsp;» devient «&nbsp;150 minutes&nbsp;» si `largestUnit` est `"minutes"`.
3. Pour tous les composants inférieurs à `smallestUnit`, ils sont reportés dans `smallestUnit` en tant que partie fractionnaire, puis arrondis selon les paramètres `roundingIncrement` et `roundingMode`. Par exemple, «&nbsp;1 heure 30 minutes&nbsp;» devient «&nbsp;1,5 heures&nbsp;» si `smallestUnit` est `"hours"`, puis arrondi à «&nbsp;2 heures&nbsp;» en utilisant les paramètres par défaut.

[Les unités calendaire](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#durées_calendaires) ont des longueurs inégales. Leurs longueurs sont résolues par rapport à un point de départ. Par exemple, une durée de «&nbsp;2 ans&nbsp;» dans le calendrier grégorien peut être de 730 jours ou 731 jours, selon qu'elle traverse une année bissextile ou non. Lors de l'arrondi à une unité calendaire, nous obtenons d'abord la date et l'heure exactes représentées par `relativeTo + duration`, puis nous les arrondissons vers le bas et vers le haut selon `smallestUnit` et `roundingIncrement` pour obtenir deux candidats. Ensuite, nous choisissons le candidat selon le paramètre `roundingMode`, et enfin nous soustrayons `relativeTo` pour obtenir la durée finale.

## Exemples

### Arrondi des petites unités

```js
const duration = Temporal.Duration.from({ hours: 1, minutes: 30, seconds: 15 });
const roundedDuration = duration.round("minutes");
console.log(roundedDuration.toString()); // "PT1H30M"
```

### Éviter les unités plus grandes

```js
const duration = Temporal.Duration.from({
  days: 3,
  hours: 1,
  minutes: 41,
  seconds: 5,
});
const roundedDuration = duration.round({ largestUnit: "hours" });
console.log(
  `Temps passé sur ce problème : ${roundedDuration.toLocaleString("fr-FR", { style: "digital" })}`,
);
// Temps passé sur ce problème : 73:41:05
```

### Arrondi à un nombre entier d'heures

```js
const duration = Temporal.Duration.from({ days: 1, hours: 1, minutes: 30 });
const roundedDuration = duration.round({
  largestUnit: "hours",
  smallestUnit: "hours",
  roundingMode: "floor",
});
console.log(roundedDuration.hours); // 25
```

### Arrondi par incréments de 15 minutes

```js
const duration = Temporal.Duration.from({ hours: 1, minutes: 17 });
const roundedDuration = duration.round({
  smallestUnit: "minutes",
  roundingIncrement: 15,
});
console.log(
  `La file d'attente prendra environ ${roundedDuration.toLocaleString("fr-FR")}`,
);
// La file d'attente prendra environ 1 h 15 min
```

### Résoudre des durées calendaire

Si la durée initiale ou l'unité la plus grande/la plus petite contient une unité calendaire, vous devez fournir une option `relativeTo` pour résoudre les durées calendaire.

```js
const duration = Temporal.Duration.from({ months: 1, days: 1, hours: 1 });
const roundedDuration = duration.round({
  largestUnit: "days",
  smallestUnit: "days",
  relativeTo: Temporal.PlainDateTime.from("2022-01-01"),
});
console.log(roundedDuration); // "P32D"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.Duration")}}
- La méthode {{JSxRef("Temporal/Duration/total", "Temporal.Duration.prototype.total()")}}
