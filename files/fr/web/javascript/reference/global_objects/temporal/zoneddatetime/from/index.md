---
title: "Temporal.ZonedDateTime : méthode statique from()"
short-title: from()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/from
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

L **`Temporal.ZonedDateTime.from()`** méthode statique crée un nouvel objet `Temporal.ZonedDateTime` à partir d'un autre objet `Temporal.ZonedDateTime`, d'un objet avec des propriétés de date, d'heure et de fuseau horaire, ou d'une chaîne de caractères [RFC 9557](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#format_rfc_9557).

## Syntaxe

```js-nolint
Temporal.ZonedDateTime.from(info)
Temporal.ZonedDateTime.from(info, options)
```

### Paramètres

- `info`
  - : Une des suivantes&nbsp;:
    - Une instance de {{JSxRef("Temporal.ZonedDateTime")}}, qui crée une copie de l'instance.
    - Une chaîne de caractères au [format RFC 9557](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#format_rfc_9557) contenant une date, éventuellement une heure, éventuellement un décalage, une annotation de fuseau horaire, et éventuellement un calendrier.
    - Un objet contenant des propriétés acceptées soit par {{JSxRef("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} (`calendar`, `era`, `eraYear`, `year`, `month`, `monthCode`, `day`) soit par {{JSxRef("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} (`hour`, `minute`, `second`, `millisecond`, `microsecond`, `nanosecond`). L'objet `info` doit définir explicitement une année (comme `year` ou comme `era` et `eraYear`), un mois (comme `month` ou `monthCode`), et un jour&nbsp;; les autres sont optionnels et seront définis à leurs valeurs par défaut. Les propriétés suivantes doivent également être fournies&nbsp;:
      - `timeZone`
        - : Soit une chaîne de caractères, soit une instance de {{JSxRef("Temporal.ZonedDateTime")}} représentant le fuseau horaire à utiliser. Si c'est une instance de `Temporal.ZonedDateTime`, son fuseau horaire est utilisé. Si c'est une chaîne de caractères, elle peut être un identifiant de fuseau horaire nommé, un identifiant de fuseau horaire avec décalage, ou une chaîne de caractères de date et d'heure contenant un identifiant de fuseau horaire ou un décalage (voir [fuseaux horaires et décalages](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#fuseaux_horaires_et_décalages) pour plus d'informations). Les propriétés temporelles sont interprétées dans ce fuseau horaire.
      - `offset` {{Optional_Inline}}
        - : Une chaîne de caractères représentant le décalage par rapport à l'UTC, au même format que le [décalage RFC 9557](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#rfc_9557_format) mais avec des secondes et des sous-secondes optionnelles (`±HH:mm:ss.sssssssss`). Si omis, il sera calculé à partir du fuseau horaire et de la date-heure. `"Z"` n'est pas autorisé.
- `options` {{Optional_Inline}}
  - : Un objet contenant certaines ou toutes les propriétés suivantes (dans l'ordre dans lequel elles sont récupérées et validées)&nbsp;:
    - `disambiguation` {{Optional_Inline}}
      - : Que faire si la date et l'heure locales sont ambiguës dans le fuseau horaire donné (il y a plus d'un instant avec cette heure locale, ou l'heure locale n'existe pas). Les valeurs possibles sont `"compatible"`, `"earlier"`, `"later"`, et `"reject"`. Par défaut, `"compatible"`. Pour plus d'informations sur ces valeurs, voir [ambiguïté et écarts de l'heure locale à l'heure UTC](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#ambiguïté_et_écarts_lors_du_passage_de_lheure_locale_à_lutc).
    - `offset` {{Optional_Inline}}
      - : Que faire si le décalage est explicitement fourni dans `info` mais que le décalage est invalide pour le fuseau horaire donné à l'heure locale donnée. Les valeurs possibles sont `"use"`, `"ignore"`, `"reject"` et `"prefer"`. Par défaut, `"reject"`. Pour plus d'informations sur ces valeurs, voir [ambiguïté du décalage](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#ambiguïté_du_décalage).
    - `overflow` {{Optional_Inline}}
      - : Une chaîne de caractères définissant le comportement lorsque un composant de date est hors de portée (lors de l'utilisation de l'objet `info`). Les valeurs possibles sont&nbsp;:
        - `"constrain"` (par défaut)
          - : La composante de date est [limitée](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#fixer_les_dates_invalides) à la plage valide.
        - `"reject"`
          - : Un objet {{JSxRef("RangeError")}} est levée si la composante de date est hors de portée.

### Valeur de retour

Un nouvel objet `Temporal.ZonedDateTime`, représentant la date et l'heure définies par `info` dans le `calendar` et la `timeZone` définis.

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée dans l'un des cas suivants&nbsp;:
    - `info` n'est ni un objet ni une chaîne de caractères.
    - `options` n'est ni un objet ni `undefined`.
    - Les propriétés fournies sont insuffisantes pour déterminer de manière non ambiguë une date. Vous devez généralement fournir une `year` (ou `era` et `eraYear`), un `month` (ou `monthCode`) et un `day`.
- {{JSxRef("RangeError")}}
  - : Levée dans l'un des cas suivants&nbsp;:
    - Les propriétés fournies qui définissent le même composant sont incohérentes.
    - Les propriétés autres que numériques fournies ne sont pas valides&nbsp;; par exemple, si `monthCode` n'est jamais un code de mois valide dans ce calendrier.
    - Les propriétés numériques fournies sont hors de portée, et `options.overflow` est défini sur `"reject"`.
    - L'heure affichée est ambiguë dans le fuseau horaire, et `options.disambiguation` est défini sur `"reject"`.
    - Les informations ne sont pas dans la [plage représentable](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#dates_représentables), qui est de ±10<sup>8</sup> jours, soit environ ±273 972,6 ans, à partir de l'époque Unix.

## Exemples

### Créer un objet `ZonedDateTime` à partir d'un objet

```js
// Année + mois + jour + heure + minute + seconde
const zdt = Temporal.ZonedDateTime.from({
  timeZone: "America/New_York",
  year: 2021,
  month: 7,
  day: 1,
  hour: 12,
  minute: 34,
  second: 56,
});
console.log(zdt.toString()); // "2021-07-01T12:34:56-04:00[America/New_York]"
```

### Créer un objet `ZonedDateTime` à partir d'une chaîne de caractères

```js
const zdt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:34:56-04:00[America/New_York]",
);
console.log(zdt.toLocaleString()); // "7/1/2021, 12:34:56 PM EDT" (en supposant la locale en-US)

// Heure donnée en UTC, et convertie en heure locale
const zdt2 = Temporal.ZonedDateTime.from(
  "2021-07-01T12:34:56Z[America/New_York]",
);
console.log(zdt2.toString()); // "2021-07-01T08:34:56-04:00[America/New_York]"
```

### Créer un objet `ZonedDateTime` à partir d'une chaîne de caractères ISO 8601 / RFC 3339

On notera que `Temporal.ZonedDateTime.from()` rejette les chaînes de caractères ISO 8601, qui n'incluent pas d'identifiant de fuseau horaire. Cela permet de s'assurer que le fuseau horaire est toujours connu et peut être utilisé pour dériver différents décalages lorsque l'heure locale change.

Si vous souhaitez analyser une chaîne de caractères ISO 8601, construisez d'abord un objet {{JSxRef("Temporal.Instant")}} puis convertissez-le en un objet `Temporal.ZonedDateTime`. Vous pouvez fournir n'importe quel fuseau horaire, même s'il ne correspond pas au décalage initialement donné dans la chaîne de caractères, et l'heure locale sera ajustée en conséquence.

```js
const isoString = "2021-07-01T12:34:56+02:00";
const instant = Temporal.Instant.from(isoString);
const zdt = instant.toZonedDateTimeISO("America/New_York");
console.log(zdt.toString()); // "2021-07-01T06:34:56-04:00[America/New_York]"
```

### Lever l'ambiguïté de l'heure locale

Voir [ambiguïté et écarts entre l'heure locale et l'heure UTC](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#ambiguïté_et_écarts_lors_du_passage_de_lheure_locale_à_lutc) pour une introduction à cette situation.

```js
const localTimeNotExist = "2024-03-10T02:05:00[America/New_York]";
// Pour les heures inexistantes, "compatible" est équivalent à "later"
const zdt = Temporal.ZonedDateTime.from(localTimeNotExist);
console.log(zdt.toString()); // "2024-03-10T03:05:00-04:00[America/New_York]"

const zdt2 = Temporal.ZonedDateTime.from(localTimeNotExist, {
  disambiguation: "earlier",
});
console.log(zdt2.toString()); // "2024-03-10T01:05:00-05:00[America/New_York]"

const localTimeAmbiguous = "2024-11-03T01:05:00[America/New_York]";
// Pour les heures ambiguës, "compatible" est équivalent à "earlier"
const zdt3 = Temporal.ZonedDateTime.from(localTimeAmbiguous);
console.log(zdt3.toString()); // "2024-11-03T01:05:00-04:00[America/New_York]"

const zdt4 = Temporal.ZonedDateTime.from(localTimeAmbiguous, {
  disambiguation: "later",
});
console.log(zdt4.toString()); // "2024-11-03T01:05:00-05:00[America/New_York]"
```

### Résoudre l'ambiguïté du décalage

Voir [ambiguïté du décalage](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#ambiguïté_du_décalage) pour une introduction à cette situation.

```js
const offsetAmbiguous = "2019-12-23T12:00:00-02:00[America/Sao_Paulo]";

Temporal.ZonedDateTime.from(offsetAmbiguous);
// RangeError: datetime can't be represented in the given time zone
Temporal.ZonedDateTime.from(offsetAmbiguous, { offset: "use" }).toString();
// "2019-12-23T11:00:00-03:00[America/Sao_Paulo]"
Temporal.ZonedDateTime.from(offsetAmbiguous, { offset: "ignore" }).toString();
// "2019-12-23T12:00:00-03:00[America/Sao_Paulo]"
```

Pour plus d'exemples, notamment concernant différents calendriers et paramètres de dépassement, voir {{JSxRef("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} et {{JSxRef("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.ZonedDateTime")}}
- Le constructeur {{JSxRef("Temporal/ZonedDateTime/ZonedDateTime", "Temporal.ZonedDateTime()")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}
