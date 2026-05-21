---
title: "Temporal.PlainDateTime : méthode toZonedDateTime()"
short-title: toZonedDateTime()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/toZonedDateTime
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`toZonedDateTime()`** des instances de {{JSxRef("Temporal.PlainDateTime")}} retourne une nouvelle instance de {{JSxRef("Temporal.ZonedDateTime")}} représentant la même date et heure que cette date et heure simple, mais dans le fuseau horaire défini.

## Syntaxe

```js-nolint
toZonedDateTime(timeZone)
toZonedDateTime(timeZone, options)
```

### Paramètres

- `timeZone`
  - : Soit une chaîne de caractères, soit une instance de {{JSxRef("Temporal.ZonedDateTime")}} représentant le fuseau horaire à utiliser. Si c'est une instance de `Temporal.ZonedDateTime`, son fuseau horaire est utilisé. Si c'est une chaîne de caractères, elle peut être un identifiant de fuseau horaire nommé, un identifiant de fuseau horaire avec décalage, ou une chaîne de caractères de date et d'heure contenant un identifiant de fuseau horaire ou un décalage (voir [fuseaux horaires et décalages](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#fuseaux_horaires_et_décalages) pour plus d'informations).
- `options` {{Optional_Inline}}
  - : Un objet contenant la propriété suivante&nbsp;:
    - `disambiguation` {{Optional_Inline}}
      - : Une chaîne de caractères définissant quoi faire lorsque cette heure simple correspond à zéro ou plusieurs instants dans le fuseau horaire, généralement en raison des changements d'heure d'été. Les valeurs possibles sont `"compatible"`, `"earlier"`, `"later"` et `"reject"`. La valeur par défaut est `"compatible"`. Pour plus d'informations sur ces valeurs, voir [ambiguïté et écarts entre l'heure locale et l'heure UTC](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#ambiguïté_et_écarts_entre_lheure_locale_et_lheure_utc).

### Valeur de retour

Une nouvelle instance de {{JSxRef("Temporal.ZonedDateTime")}} représentant la même date et heure que cette date et heure simple, mais dans le fuseau horaire défini.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée dans l'un des cas suivants&nbsp;:
    - L'une des options est invalide.
    - `timeZone` n'est pas un identifiant de fuseau horaire valide.
    - L'heure de l'horloge murale est ambiguë dans le fuseau horaire, et `options.disambiguation` est défini à `"reject"`.
- {{JSxRef("TypeError")}}
  - : Levée si l'un des arguments n'est pas du type attendu.

## Exemples

### Utiliser la méthode `toZonedDateTime()`

```js
const dt = Temporal.PlainDateTime.from("2021-08-01T12:34:56");
const zdt = dt.toZonedDateTime("America/New_York");
console.log(zdt.toString()); // '2021-08-01T12:34:56-04:00[America/New_York]'

const dt2 = Temporal.PlainDateTime.from("2021-01-01T12:34:56");
const zdt2 = dt2.toZonedDateTime("America/New_York");
console.log(zdt2.toString()); // '2021-01-01T12:34:56-05:00[America/New_York]'
```

### Gérer les heures ambiguës

Ci-dessous, nous avons deux heures d'horloge murale que nous voulons interpréter dans le fuseau horaire `America/New_York`. La première, `dtNotExist`, n'a jamais existé en raison d'un passage à l'heure d'été, il faut donc choisir entre les heures `01:05:00-05:00` ou `03:05:00-04:00`. La seconde, `dtAmbiguous`, est apparue deux fois à cause d'un retour à l'heure d'hiver, il faut donc choisir entre les heures `01:05:00-04:00` ou `01:05:00-05:00`. Pour une explication plus détaillée de cette situation, voir [ambiguïté et écarts entre l'heure locale et l'heure UTC](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#ambiguïté_et_écarts_entre_lheure_locale_et_lheure_utc).

```js
const dtNotExist = Temporal.PlainDateTime.from("2024-03-10T02:05:00");
const dtAmbiguous = Temporal.PlainDateTime.from("2024-11-03T01:05:00");

// Par défaut : compatible
console.log(dtNotExist.toZonedDateTime("America/New_York").toString());
// '2024-03-10T03:05:00-04:00[America/New_York]'
console.log(dtAmbiguous.toZonedDateTime("America/New_York").toString());
// '2024-11-03T01:05:00-04:00[America/New_York]'

// Utiliser l'heure la plus ancienne pour les heures ambiguës
console.log(
  dtNotExist
    .toZonedDateTime("America/New_York", { disambiguation: "earlier" })
    .toString(),
);
// '2024-03-10T01:05:00-05:00[America/New_York]'
console.log(
  dtAmbiguous
    .toZonedDateTime("America/New_York", { disambiguation: "earlier" })
    .toString(),
);
// '2024-11-03T01:05:00-04:00[America/New_York]'

// Utiliser l'heure la plus récente pour les heures ambiguës
console.log(
  dtNotExist
    .toZonedDateTime("America/New_York", { disambiguation: "later" })
    .toString(),
);
// '2024-03-10T03:05:00-04:00[America/New_York]'
console.log(
  dtAmbiguous
    .toZonedDateTime("America/New_York", { disambiguation: "later" })
    .toString(),
);
// '2024-11-03T01:05:00-05:00[America/New_York]'

// Lever une erreur pour les heures ambiguës
dtNotExist.toZonedDateTime("America/New_York", { disambiguation: "reject" });
// RangeError: instant is ambiguous
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainDateTime")}}
- L'objet {{JSxRef("Temporal.ZonedDateTime")}}
- La méthode {{JSxRef("Temporal/PlainDateTime/toPlainDate", "Temporal.PlainDateTime.prototype.toPlainDate()")}}
- La méthode {{JSxRef("Temporal/PlainDateTime/toPlainTime", "Temporal.PlainDateTime.prototype.toPlainTime()")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/toPlainDateTime", "Temporal.ZonedDateTime.prototype.toPlainDateTime()")}}
