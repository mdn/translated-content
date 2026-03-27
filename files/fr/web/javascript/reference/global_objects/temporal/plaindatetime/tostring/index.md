---
title: "Temporal.PlainDateTime : méthode toString()"
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/toString
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`toString()`** des instances de {{JSxRef("Temporal.PlainDateTime")}} retourne une chaîne de caractères représentant cette date et heure au format [RFC 9557](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime#format_rfc_9557).

## Syntaxe

```js-nolint
toString()
toString(options)
```

### Paramètres

- `options` {{Optional_Inline}}
  - : Un objet contenant la propriété suivante&nbsp;:
    - `calendarName` {{Optional_Inline}}
      - : Indique si l'annotation du calendrier (`[u-ca=calendar_id]`) doit être affichée dans la valeur de retour. Les valeurs possibles sont&nbsp;:
        - `"auto"` (par défaut)
          - : Inclut l'annotation du calendrier s'il n'est pas `"iso8601"`.
        - `"always"`
          - : Inclut toujours l'annotation du calendrier.
        - `"never"`
          - : N'inclut jamais l'annotation du calendrier. Cela rend la chaîne de caractères retournée non récupérable en tant que même instance de {{JSxRef("Temporal.PlainDateTime")}}, bien que la valeur de la date reste la même.
        - `"critical"`
          - : Inclut toujours l'annotation du calendrier et ajoute un indicateur critique&nbsp;: `[!u-ca=calendar_id]`. Utile lors de l'envoi de la chaîne de caractères à certains systèmes, mais pas utile pour `Temporal` lui-même.
    - `fractionalSecondDigits` {{Optional_Inline}}
      - : Soit un entier de 0 à 9, soit la chaîne de caractères `"auto"`. La valeur par défaut est `"auto"`. Si `"auto"`, les zéros finaux sont supprimés des secondes fractionnaires. Sinon, la partie fractionnaire de la seconde contient ce nombre de chiffres, complétés par des zéros ou arrondis si nécessaire.
    - `roundingMode` {{Optional_Inline}}
      - : Une chaîne de caractères définissant comment arrondir les chiffres des secondes fractionnaires au-delà de `fractionalSecondDigits`. Voir [`Intl.NumberFormat()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingmode). La valeur par défaut est `"trunc"`.
    - `smallestUnit` {{Optional_Inline}}
      - : Une chaîne de caractères définissant l'unité la plus petite à inclure dans la sortie. Les valeurs possibles sont `"minute"`, `"second"`, `"millisecond"`, `"microsecond"` et `"nanosecond"`, ou leurs formes plurielles, qui (sauf `"minute"`) sont équivalentes aux valeurs de `fractionalSecondDigits` de `0`, `3`, `6`, `9`, respectivement. Si défini, alors `fractionalSecondDigits` est ignoré.

### Valeur de retour

Une chaîne de caractères au format [RFC 9557](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime#format_rfc_9557) représentant cette date et heure. L'annotation du calendrier est incluse comme défini.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si l'une des options est invalide.
- {{JSxRef("TypeError")}}
  - : Levée si `options` n'est pas un objet ou `undefined`.

## Exemples

### Utiliser la méthode `toString()`

```js
const dt = Temporal.PlainDateTime.from("2021-08-01T12:34:56");
console.log(dt.toString()); // '2021-08-01T12:34:56'
```

Pour des exemples avec l'arrondi des heures, voir {{JSxRef("Temporal/PlainTime/toString", "Temporal.PlainTime.prototype.toString()")}}. Pour des exemples avec l'affichage des calendriers, voir {{JSxRef("Temporal/PlainDate/toString", "Temporal.PlainDate.prototype.toString()")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainDateTime")}}
- La méthode statique {{JSxRef("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}}
- La méthode {{JSxRef("Temporal/PlainDateTime/toJSON", "Temporal.PlainDateTime.prototype.toJSON()")}}
- La méthode {{JSxRef("Temporal/PlainDateTime/toLocaleString", "Temporal.PlainDateTime.prototype.toLocaleString()")}}
