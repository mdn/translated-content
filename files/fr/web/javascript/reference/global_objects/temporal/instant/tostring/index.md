---
title: "Temporal.Instant : méthode toString()"
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/toString
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`toString()`** des instances de {{JSxRef("Temporal.Instant")}} retourne une chaîne de caractères représentant cet instant dans le [format RFC 9557](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant#format_rfc_9557) en utilisant le fuseau horaire défini.

## Syntaxe

```js-nolint
toString()
toString(options)
```

### Paramètres

- `options` {{Optional_Inline}}
  - : Un objet contenant certaines ou toutes les propriétés suivantes (dans l'ordre où elles sont récupérées et validées) :
    - `fractionalSecondDigits` {{Optional_Inline}}
      - : Soit un entier de 0 à 9, soit la chaîne de caractères `"auto"`. La valeur par défaut est `"auto"`. Si `"auto"`, les zéros finaux sont supprimés des secondes fractionnaires. Sinon, la partie fractionnaire de la seconde contient ce nombre de chiffres, complétés par des zéros ou arrondis si nécessaire.
    - `roundingMode` {{Optional_Inline}}
      - : Une chaîne de caractères définissant comment arrondir les chiffres fractionnaires au-delà de `fractionalSecondDigits`. Voir [`Intl.NumberFormat()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingmode). La valeur par défaut est `"trunc"`.
    - `smallestUnit` {{Optional_Inline}}
      - : Une chaîne de caractères définissant la plus petite unité à inclure dans la sortie. Les valeurs possibles sont `"minute"`, `"second"`, `"millisecond"`, `"microsecond"` et `"nanosecond"`, ou leurs formes plurielles, qui (sauf `"minute"`) sont équivalentes aux valeurs de `fractionalSecondDigits` de `0`, `3`, `6`, `9`, respectivement. Si défini, alors `fractionalSecondDigits` est ignoré.
    - `timeZone` {{Optional_Inline}}
      - : Soit une chaîne de caractères, soit une instance de {{JSxRef("Temporal.ZonedDateTime")}} représentant le fuseau horaire à utiliser. Si c'est une instance de `Temporal.ZonedDateTime`, son fuseau horaire est utilisé. Si c'est une chaîne de caractères, elle peut être un identifiant de fuseau horaire nommé, un identifiant de fuseau horaire avec décalage, ou une chaîne de caractères de date-heure contenant un identifiant de fuseau horaire ou un décalage (voir [fuseaux horaires et décalages](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#fuseaux_horaires_et_décalages) pour plus d'informations). La valeur par défaut est `"UTC"`.

### Valeur de retour

Une chaîne de caractères au format [RFC 9557](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant#format_rfc_9557) représentant cet instant en utilisant le fuseau horaire défini. Aucune annotation, telle que les noms de fuseaux horaires, n'est incluse.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si l'une des options est invalide.

## Exemples

### Utiliser la méthode `toString()`

```js
const instant = Temporal.Instant.fromEpochMilliseconds(1627814412345);
console.log(instant.toString()); // '2021-08-01T10:40:12.345Z'

// La conversion en chaîne de caractères appelle implicitement toString()
console.log(`${instant}`); // '2021-08-01T10:40:12.345Z'
```

### Utiliser des `options`

```js
const instant = Temporal.Instant.fromEpochMilliseconds(1627814412345);
console.log(instant.toString({ fractionalSecondDigits: 1 })); // '2021-08-01T10:40:12.3Z'
console.log(instant.toString({ smallestUnit: "minute" })); // '2021-08-01T10:40Z'
console.log(instant.toString({ timeZone: "America/New_York" })); // '2021-08-01T06:40:12.345-04:00'

// Le nom du fuseau horaire se résout automatiquement au décalage correct
// en fonction de l'instant ; par exemple, America/New_York est UTC-4 en
// été, mais UTC-5 en hiver.
const instant2 = Temporal.Instant.fromEpochMilliseconds(1577836800000);
console.log(instant2.toString({ timeZone: "UTC" })); // '2029-12-31T23:00:00Z'
console.log(instant2.toString({ timeZone: "America/New_York" })); // '2019-12-31T19:00:00-05:00'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.Instant")}}
- La méthode statique {{JSxRef("Temporal/Instant/from", "Temporal.Instant.from()")}}
- La méthode {{JSxRef("Temporal/Instant/toJSON", "Temporal.Instant.prototype.toJSON()")}}
- La méthode {{JSxRef("Temporal/Instant/toLocaleString", "Temporal.Instant.prototype.toLocaleString()")}}
