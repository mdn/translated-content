---
title: "Temporal.Duration : méthode toString()"
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/toString
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`toString()`** des instances de {{JSxRef("Temporal.Duration")}} retourne une chaîne de caractères représentant cette durée au format [ISO 8601](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#format_de_durée_iso_8601).

## Syntaxe

```js-nolint
toString()
toString(options)
```

### Paramètres

- `options` {{Optional_Inline}}
  - : Un objet contenant certaines ou toutes les propriétés suivantes (dans l'ordre où elles sont récupérées et validées)&nbsp;:
    - `fractionalSecondDigits` {{Optional_Inline}}
      - : Soit un entier de 0 à 9, soit la chaîne de caractères `"auto"`. La valeur par défaut est `"auto"`. Si `"auto"`, les zéros finaux sont supprimés des secondes fractionnaires. Sinon, la partie fractionnaire de la composante seconde contient autant de chiffres, complétés par des zéros ou arrondis si nécessaire.
    - `roundingMode` {{Optional_Inline}}
      - : Une chaîne de caractères définissant comment arrondir les chiffres fractionnaires au-delà de `fractionalSecondDigits`. Voir [`Intl.NumberFormat()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingmode). La valeur par défaut est `"trunc"`.
    - `smallestUnit` {{Optional_Inline}}
      - : Une chaîne de caractères définissant l'unité la plus petite à inclure dans la sortie. Les valeurs possibles sont `"second"`, `"millisecond"`, `"microsecond"` et `"nanosecond"`, ou leurs formes plurielles, qui sont équivalentes aux valeurs de `fractionalSecondDigits` de `0`, `3`, `6`, `9`, respectivement. Si défini, alors `fractionalSecondDigits` est ignoré.

### Valeur de retour

Une chaîne de caractères représentant la durée donnée au format [ISO 8601](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#format_de_durée_iso_8601), avec les composants de sous-secondes formatés selon les options. La durée nulle est représentée par `"PT0S"`.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si l'une des options est invalide.

## Exemples

### Utiliser la méthode `toString()`

```js
const duration = Temporal.Duration.from({ hours: 1, minutes: 30, seconds: 15 });
console.log(duration.toString()); // 'PT1H30M15S'

// La conversion en chaîne de caractères appelle implicitement toString()
console.log(`${duration}`); // 'PT1H30M15S'
```

### Utiliser les propriétés `options`

```js
const worldRecord = Temporal.Duration.from({ seconds: 9, milliseconds: 580 });
console.log(worldRecord.toString()); // 'PT9.58S'
console.log(worldRecord.toString({ fractionalSecondDigits: 1 })); // 'PT9.5S'
console.log(worldRecord.toString({ fractionalSecondDigits: 0 })); // 'PT9S'
console.log(worldRecord.toString({ smallestUnit: "millisecond" })); // 'PT9.580S'
console.log(
  worldRecord.toString({
    fractionalSecondDigits: 1,
    roundingMode: "halfExpand",
  }),
); // 'PT9.6S'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.Duration")}}
- La méthode {{JSxRef("Temporal/Duration/toJSON", "Temporal.Duration.prototype.toJSON()")}}
- La méthode {{JSxRef("Temporal/Duration/toLocaleString", "Temporal.Duration.prototype.toLocaleString()")}}
