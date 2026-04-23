---
title: "Temporal.ZonedDateTime : méthode subtract()"
short-title: subtract()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/subtract
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`subtract()`** des instances de {{JSxRef("Temporal.ZonedDateTime")}} retourne un nouvel objet `Temporal.ZonedDateTime` représentant cette date et heure reculée d'une durée donnée (sous une forme convertible par {{JSxRef("Temporal/Duration/from", "Temporal.Duration.from()")}}).

Si vous souhaitez soustraire deux dates et heures et obtenir une durée, utilisez plutôt {{JSxRef("Temporal/ZonedDateTime/since", "since()")}} ou {{JSxRef("Temporal/ZonedDateTime/until", "until()")}}.

## Syntaxe

```js-nolint
subtract(duration)
subtract(duration, options)
```

### Paramètres

- `duration`
  - : Une chaîne de caractères, un objet ou une instance de {{JSxRef("Temporal.Duration")}} représentant une durée à soustraire de cette date et heure. Elle est convertie en objet `Temporal.Duration` en utilisant le même algorithme que {{JSxRef("Temporal/Duration/from", "Temporal.Duration.from()")}}.
- `options` {{Optional_Inline}}
  - : Un objet contenant la propriété suivante&nbsp;:
    - `overflow` {{Optional_Inline}}
      - : Une chaîne de caractères définissant le comportement lorsque l'un des composants de la date est hors limites. Les valeurs possibles sont&nbsp;:
        - `"constrain"` (par défaut)
          - : Le composant de date est [restreint](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#fixer_les_dates_invalides) à la plage valide.
        - `"reject"`
          - : Un objet {{JSxRef("RangeError")}} est levé si le composant de date est hors limites.

### Valeur de retour

Un nouvel objet `Temporal.ZonedDateTime` représentant la date et heure définie par l'original, moins la durée.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si le résultat n'est pas dans la [plage représentable](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#dates_représentables), soit ±10<sup>8</sup> jours, ou environ ±273 972,6 ans, à partir de l'époque Unix.

## Description

Soustraire une durée équivaut à [ajouter](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/add) sa [négation](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated), toutes les considérations sont donc identiques.

## Exemples

### Soustraire une durée

```js
const start = Temporal.ZonedDateTime.from(
  "2021-01-01T12:34:56-05:00[America/New_York]",
);
const end = start.subtract({
  years: 1,
  months: 2,
  weeks: 3,
  days: 4,
  hours: 5,
  minutes: 6,
  seconds: 7,
  milliseconds: 8,
});
console.log(end.toString()); // 2019-10-07T07:28:48.992-04:00[America/New_York]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.ZonedDateTime")}}
- L'objet {{JSxRef("Temporal.Duration")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/add", "Temporal.ZonedDateTime.prototype.add()")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/since", "Temporal.ZonedDateTime.prototype.since()")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/until", "Temporal.ZonedDateTime.prototype.until()")}}
