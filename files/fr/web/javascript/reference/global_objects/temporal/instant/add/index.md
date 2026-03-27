---
title: "Temporal.Instant : méthode add()"
short-title: add()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/add
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`add()`** des instances de {{JSxRef("Temporal.Instant")}} retourne un nouvel objet `Temporal.Instant` représentant cet instant avancé d'une durée donnée (sous une forme convertible par {{JSxRef("Temporal/Duration/from", "Temporal.Duration.from()")}}).

## Syntaxe

```js-nolint
add(duration)
```

### Paramètres

- `duration`
  - : Une chaîne de caractères, un objet ou une instance de {{JSxRef("Temporal.Duration")}} représentant une durée à ajouter à cet instant. Elle est convertie en objet `Temporal.Duration` en utilisant le même algorithme que {{JSxRef("Temporal/Duration/from", "Temporal.Duration.from()")}}.

### Valeur de retour

Un nouvel objet {{JSxRef("Temporal.Instant")}} représentant l'ajout de `duration` à cet instant. Si `duration` est positive, l'instant retourné est ultérieur à cet instant&nbsp;; si `duration` est négative, l'instant retourné est antérieur à cet instant.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée dans l'un des cas suivants&nbsp;:
    - `duration` est une [durée de calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#durées_calendaires) (elle a des `years`, `months` ou `weeks` non nuls), ou a des `days` non nuls, car les durées de calendrier sont ambiguës sans calendrier et référence temporelle.
    - Le résultat n'est pas dans la [plage représentable](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#dates_représentables), qui est ±10<sup>8</sup> jours, soit environ ±273 972,6 ans, depuis l'époque Unix.

## Description

En essence, la méthode `add()` obtient d'abord le nombre de nanosecondes représenté par `duration`, l'ajoute aux {{JSxRef("Temporal/Instant/epochNanoseconds", "epochNanoseconds")}} de cet instant, puis crée un nouvel objet `Temporal.Instant` à partir du résultat. Par conséquent, la durée doit représenter de manière non ambiguë une quantité de temps fixe.

Si vous souhaitez ajouter une durée calendaire, l'addition doit être effectuée dans le contexte d'un calendrier et d'un fuseau horaire pour tenir compte des longueurs variables des mois, des années et des jours (en raison de l'heure d'été). Dans ce cas, convertissez l'instant en un objet {{JSxRef("Temporal.ZonedDateTime")}}, ajoutez la durée, puis convertissez le résultat en un instant.

Ajouter une durée équivaut à [soustraire](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant/subtract) sa [négation](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated).

## Exemples

### Ajouter une `Temporal.Duration`

```js
const instant = Temporal.Instant.fromEpochMilliseconds(0);
const duration = Temporal.Duration.from("PT1S");
const newInstant = instant.add(duration);
console.log(newInstant.epochMilliseconds); // 1000
```

### Ajouter un objet ou une chaîne de caractères

```js
const instant = Temporal.Instant.fromEpochMilliseconds(0);
const newInstant = instant.add({ seconds: 1 });
console.log(newInstant.epochMilliseconds); // 1000

const newInstant2 = instant.add("PT1S");
console.log(newInstant2.epochMilliseconds); // 1000
```

### Ajouter une durée calendaire

```js
const instant = Temporal.Instant.fromEpochMilliseconds(1730610000000);
const duration = Temporal.Duration.from({ days: 1 });

// Cet instant est 2024-11-03T01:00:00-04:00[America/New_York],
// ce qui est un jour de transition DST aux États-Unis.
const instant2 = instant
  .toZonedDateTimeISO("America/New_York")
  .add(duration)
  .toInstant();
console.log(instant2.epochMilliseconds); // 1730700000000

// Le même instant n'est pas un jour de transition DST à Paris.
const instant3 = instant
  .toZonedDateTimeISO("Europe/Paris")
  .add(duration)
  .toInstant();
console.log(instant3.epochMilliseconds); // 1730696400000
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.Instant")}}
- L'objet {{JSxRef("Temporal.Duration")}}
- La méthode {{JSxRef("Temporal/Instant/subtract", "Temporal.Instant.prototype.subtract()")}}
