---
title: "Temporal.Duration : méthode statique compare()"
short-title: compare()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/compare
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode statique **`compare()`** des instances de {{JSxRef("Temporal.Duration")}} retourne un nombre (-1, 0 ou 1) indiquant si la première durée est plus courte, égale ou plus longue que la deuxième durée.

## Syntaxe

```js-nolint
Temporal.Duration.compare(duration1, duration2)
Temporal.Duration.compare(duration1, duration2, options)
```

### Paramètres

- `duration1`
  - : Une chaîne de caractères, un objet ou une instance de {{JSxRef("Temporal.Duration")}} représentant la première durée à comparer. Elle est convertie en objet `Temporal.Duration` en utilisant le même algorithme que {{JSxRef("Temporal/Duration/from", "Temporal.Duration.from()")}}.
- `duration2`
  - : La seconde durée à comparer, convertie en objet `Temporal.Duration` en utilisant le même algorithme que `duration1`.
- `options` {{Optional_Inline}}
  - : Un objet contenant la propriété suivante&nbsp;:
    - `relativeTo` {{Optional_Inline}}
      - : Une date avec un fuseau horaire ou une date(heure) normale qui fournit les informations de temps et de calendrier pour résoudre les [durées de calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#durées_calendaires) (voir le lien pour l'interprétation générale de cette option). Requis si `duration1` ou `duration2` est une durée de calendrier (à moins qu'elles ne soient égales composant par composant, auquel cas `0` est retourné sans calculs).

### Valeur de retour

Retourne `-1` si `duration1` est plus courte que `duration2`, `0` si elles sont égales, et `1` si `duration1` est plus longue que `duration2`.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si `duration1` ou `duration2` est une [durée de calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#durées_calendaires) (elle a des `years`, `months` ou `weeks` non nuls), et que `relativeTo` n'est pas fourni.

## Description

Si `relativeTo` est une date et heure avec un fuseau horaire, et que `duration1` ou `duration2` est une durée de calendrier, le résultat est calculé en ajoutant les durées au point de départ, puis en comparant les instants résultants. Sinon, la comparaison se fait en convertissant les deux durées en nanosecondes (en supposant des jours de 24 heures, et en utilisant le calendrier de `relativeTo` si nécessaire) et en comparant les résultats.

## Exemples

### Utiliser la méthode `compare()`

```js
const d1 = Temporal.Duration.from({ hours: 1, minutes: 30 });
const d2 = Temporal.Duration.from({ minutes: 100 });
console.log(Temporal.Duration.compare(d1, d2)); // -1

const d3 = Temporal.Duration.from({ hours: 2 });
const d4 = Temporal.Duration.from({ minutes: 110 });
console.log(Temporal.Duration.compare(d3, d4)); // 1

const d5 = Temporal.Duration.from({ hours: 1, minutes: 30 });
const d6 = Temporal.Duration.from({ seconds: 5400 });
console.log(Temporal.Duration.compare(d5, d6)); // 0
```

### Comparer des durées de calendrier

```js
const d1 = Temporal.Duration.from({ days: 31 });
const d2 = Temporal.Duration.from({ months: 1 });

console.log(
  Temporal.Duration.compare(d1, d2, {
    relativeTo: Temporal.PlainDate.from("2021-01-01"), // calendrier ISO 8601
  }),
); // 0

console.log(
  Temporal.Duration.compare(d1, d2, {
    relativeTo: Temporal.PlainDate.from("2021-02-01"), // calendrier ISO 8601
  }),
); // 1; février a 28 jours
```

### Utiliser `relativeTo` avec fuseau horaire

En utilisant un `relativeTo` avec fuseau horaire, vous pouvez même prendre en compte les changements d'heure d'été. Le 3 novembre 2024, les États-Unis passent de l'heure d'été à l'heure standard, donc ce jour-là a 25 heures car l'horloge est reculée d'une heure.

```js
const d1 = Temporal.Duration.from({ days: 1 });
const d2 = Temporal.Duration.from({ hours: 24 });

console.log(
  Temporal.Duration.compare(d1, d2, {
    relativeTo: Temporal.ZonedDateTime.from(
      "2024-11-03T01:00-04:00[America/New_York]",
    ),
  }),
); // 1
```

### Trier un tableau de durées

Le but de cette fonction `compare()` est d'agir comme un comparateur à passer à {{JSxRef("Array.prototype.sort()")}} et aux fonctions associées.

```js
const durations = [
  Temporal.Duration.from({ hours: 1 }),
  Temporal.Duration.from({ hours: 2 }),
  Temporal.Duration.from({ hours: 1, minutes: 30 }),
  Temporal.Duration.from({ hours: 1, minutes: 45 }),
];

durations.sort(Temporal.Duration.compare);
console.log(durations.map((d) => d.toString()));
// [ 'PT1H', 'PT1H30M', 'PT1H45M', 'PT2H' ]
```

Passer des options comme ceci&nbsp;:

```js
durations.sort((a, b) =>
  Temporal.Duration.compare(a, b, {
    relativeTo: Temporal.Now.zonedDateTimeISO(),
  }),
);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.Duration")}}
- La méthode {{JSxRef("Temporal/Duration/subtract", "Temporal.Duration.prototype.subtract()")}}
