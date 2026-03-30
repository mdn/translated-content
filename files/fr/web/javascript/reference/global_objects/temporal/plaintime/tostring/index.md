---
title: "Temporal.PlainTime : méthode toString()"
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/toString
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`toString()`** des instances de {{JSxRef("Temporal.PlainTime")}} retourne une chaîne de caractères représentant cette heure au format [RFC 9557](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime#format_rfc_9557).

## Syntaxe

```js-nolint
toString()
toString(options)
```

### Paramètres

- `options` {{Optional_Inline}}
  - : Un objet contenant certaines ou toutes les propriétés suivantes (dans l'ordre où elles sont récupérées et validées)&nbsp;:
    - `fractionalSecondDigits` {{Optional_Inline}}
      - : Soit un entier de 0 à 9, soit la chaîne de caractères `"auto"`. La valeur par défaut est `"auto"`. Si `"auto"`, les zéros finaux sont supprimés des secondes fractionnaires. Sinon, la partie fractionnaire de la seconde contient autant de chiffres, complétés par des zéros ou arrondis si nécessaire.
    - `roundingMode` {{Optional_Inline}}
      - : Une chaîne de caractères définissant comment arrondir les chiffres fractionnaires au-delà de `fractionalSecondDigits`. Voir [`Intl.NumberFormat()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingmode). La valeur par défaut est `"trunc"`.
    - `smallestUnit` {{Optional_Inline}}
      - : Une chaîne de caractères définissant l'unité la plus petite à inclure dans la sortie. Les valeurs possibles sont `"minute"`, `"second"`, `"millisecond"`, `"microsecond"` et `"nanosecond"`, ou leurs formes plurielles, qui (sauf `"minute"`) sont équivalentes aux valeurs de `fractionalSecondDigits` de `0`, `3`, `6`, `9`, respectivement. Si défini, alors `fractionalSecondDigits` est ignoré.

### Valeur de retour

Une chaîne de caractères au format [RFC 9557](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime#format_rfc_9557) représentant cette heure.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si l'une des options est invalide.
- {{JSxRef("TypeError")}}
  - : Levée si `options` n'est pas un objet ou `undefined`.

## Exemples

### Utiliser la méthode `toString()`

```js
const time = Temporal.PlainTime.from("12:34:56");
console.log(time.toString()); // '12:34:56'
```

### Utiliser les options

```js
const time1 = Temporal.PlainTime.from("12:00:00");
console.log(time1.toString()); // '12:00:00'
console.log(time1.toString({ fractionalSecondDigits: 1 })); // '12:00:00.0'
console.log(time1.toString({ smallestUnit: "minute" })); // '12:00'
console.log(time1.toString({ smallestUnit: "nanosecond" })); // '12:00:00.000000000'

const time2 = Temporal.PlainTime.from("12:34:56.123456789");
console.log(time2.toString({ fractionalSecondDigits: 4 })); // '12:34:56.1234'
console.log(
  time2.toString({ fractionalSecondDigits: 4, roundingMode: "halfExpand" }),
); // '12:34:56.1235'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainTime")}}
- La méthode statique {{JSxRef("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}}
- La méthode {{JSxRef("Temporal/PlainTime/toJSON", "Temporal.PlainTime.prototype.toJSON()")}}
- La méthode {{JSxRef("Temporal/PlainTime/toLocaleString", "Temporal.PlainTime.prototype.toLocaleString()")}}
