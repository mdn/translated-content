---
title: "Temporal.ZonedDateTime : méthode toString()"
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/toString
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`toString()`** des instances de {{JSxRef("Temporal.ZonedDateTime")}} retourne une chaîne de caractères représentant cette date et heure au format [RFC 9557](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#format_rfc_9557).

## Syntaxe

```js-nolint
toString()
toString(options)
```

### Parameters

- `options` {{Optional_Inline}}
  - : Un objet contenant la propriété suivante&nbsp;:
    - `calendarName` {{Optional_Inline}}
      - : Indique s'il faut afficher l'annotation du calendrier (`[u-ca=calendar_id]`) dans la valeur de retour. Les valeurs possibles sont&nbsp;:
        - `"auto"` (par défaut)
          - : Inclut l'annotation du calendrier si le calendrier n'est pas `"iso8601"`.
        - `"always"`
          - : Inclut toujours l'annotation du calendrier.
        - `"never"`
          - : N'inclut jamais l'annotation du calendrier. Cela rend la chaîne de caractères retournée non récupérable en tant que même instance de {{JSxRef("Temporal.ZonedDateTime")}}, bien que la valeur de la date reste la même.
        - `"critical"`
          - : Inclut toujours l'annotation du calendrier et ajoute un indicateur critique&nbsp;: `[!u-ca=calendar_id]`. Utile lors de l'envoi de la chaîne de caractères à certains systèmes, mais pas utile pour Temporal lui-même.
    - `fractionalSecondDigits` {{Optional_Inline}}
      - : Soit un entier de 0 à 9, soit la chaîne de caractères `"auto"`. La valeur par défaut est `"auto"`. Si `"auto"`, les zéros finaux sont supprimés des secondes fractionnaires. Sinon, la partie fractionnaire de la seconde contient ce nombre de chiffres, complétés par des zéros ou arrondis si nécessaire.
    - `roundingMode` {{Optional_Inline}}
      - : Une chaîne de caractères définissant comment arrondir les chiffres fractionnaires au-delà de `fractionalSecondDigits`. Voir [`Intl.NumberFormat()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingmode). La valeur par défaut est `"trunc"`.
    - `smallestUnit` {{Optional_Inline}}
      - : Une chaîne de caractères définissant l'unité la plus petite à inclure dans la sortie. Les valeurs possibles sont `"minute"`, `"second"`, `"millisecond"`, `"microsecond"` et `"nanosecond"`, ou leurs formes plurielles, qui (sauf `"minute"`) sont équivalentes aux valeurs de `fractionalSecondDigits` de `0`, `3`, `6`, `9`, respectivement. Si défini, alors `fractionalSecondDigits` est ignoré.
    - `timeZoneName` {{Optional_Inline}}
      - : Indique s'il faut afficher le nom du fuseau horaire (`[time_zone_id]`) dans la valeur de retour. Les valeurs possibles sont&nbsp;:
        - `"auto"` (par défaut)
          - : Inclut toujours le nom du fuseau horaire.
        - `"never"`
          - : N'inclut jamais le nom du fuseau horaire. Cela rend la chaîne de caractères retournée non récupérable en tant que même instance de {{JSxRef("Temporal.ZonedDateTime")}}.
        - `"critical"`
          - : Inclut toujours le nom du fuseau horaire et ajoute un indicateur critique&nbsp;: `[!time_zone_id]`. Utile lors de l'envoi de la chaîne de caractères à certains systèmes, mais pas utile pour Temporal lui-même.
    - `offset` {{Optional_Inline}}
      - : Indique s'il faut afficher le décalage (`±HH:mm`) dans la valeur de retour. Les valeurs possibles sont&nbsp;:
        - `"auto"` (par défaut)
          - : Inclut toujours le décalage.
        - `"never"`
          - : N'inclut jamais le décalage. Cela rend la chaîne de caractères retournée non récupérable en tant que même instance de {{JSxRef("Temporal.ZonedDateTime")}}, si le fuseau horaire est inclus mais que l'heure est ambiguë, ou si le fuseau horaire n'est pas inclus.

### Valeur de retour

Une chaîne de caractères au format [RFC 9557](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#format_rfc_9557) représentant cette date et heure. Le décalage et les annotations du calendrier/fuseau horaire sont inclus comme défini.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si l'une des options est invalide.
- {{JSxRef("TypeError")}}
  - : Levée si `options` n'est pas un objet ou `undefined`.

## Exemples

### Utiliser la méthode `toString()`

```js
const zdt = Temporal.ZonedDateTime.from(
  "2021-08-01T12:34:56[America/New_York]",
);
console.log(zdt.toString()); // '2021-08-01T12:34:56-04:00[America/New_York]'
```

Même pour le fuseau horaire `UTC`, le décalage est `+00:00`, et non `Z`&nbsp;:

```js
const zdt = Temporal.ZonedDateTime.from("2021-08-01T12:34:56[UTC]");
console.log(zdt.toString()); // '2021-08-01T12:34:56+00:00[UTC]'
```

### Utiliser des options

Pour des exemples avec des arrondis de temps, voir {{JSxRef("Temporal/PlainTime/toString", "Temporal.PlainTime.prototype.toString()")}}. Pour des exemples avec l'affichage des calendriers, voir {{JSxRef("Temporal/PlainDate/toString", "Temporal.PlainDate.prototype.toString()")}}. Ici, nous montrons comment contrôler l'affichage du fuseau horaire et du décalage&nbsp;:

```js
const zdt = Temporal.ZonedDateTime.from(
  "2021-08-01T12:34:56[America/New_York]",
);
console.log(zdt.toString({ timeZoneName: "auto", offset: "never" })); // '2021-08-01T12:34:56[America/New_York]'
console.log(zdt.toString({ timeZoneName: "never", offset: "auto" })); // '2021-08-01T12:34:56-04:00'
console.log(zdt.toString({ timeZoneName: "never", offset: "never" })); // '2021-08-01T12:34:56'
console.log(zdt.toString({ timeZoneName: "critical", offset: "never" })); // '2021-08-01T12:34:56[!America/New_York]'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.ZonedDateTime")}}
- La méthode statique {{JSxRef("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/toJSON", "Temporal.ZonedDateTime.prototype.toJSON()")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}}
