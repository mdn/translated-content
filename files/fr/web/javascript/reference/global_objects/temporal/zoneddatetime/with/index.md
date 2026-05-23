---
title: "Temporal.ZonedDateTime : méthode with()"
short-title: with()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/with
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`with()`** des instances de {{JSxRef("Temporal.ZonedDateTime")}} retourne un nouvel objet `Temporal.ZonedDateTime` représentant cette date et cette heure avec certains champs remplacés par de nouvelles valeurs. Comme tous les objets `Temporal` sont conçus pour être immuables, cette méthode fonctionne essentiellement comme le mutateur des champs de la date et de l'heure.

Pour remplacer la propriété {{JSxRef("Temporal/ZonedDateTime/calendarId", "calendarId")}}, utilisez la méthode {{JSxRef("Temporal/ZonedDateTime/withCalendar", "withCalendar()")}}. Pour remplacer la propriété {{JSxRef("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}}, utilisez la méthode {{JSxRef("Temporal/ZonedDateTime/withTimeZone", "withTimeZone()")}}.

## Syntaxe

```js-nolint
with(info)
with(info, options)
```

### Paramètres

- `info`
  - : Un objet contenant au moins une des propriétés reconnues par {{JSxRef("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} (à l'exception de `calendar` et `timeZone`) : `day`, `era` et `eraYear`, `hour`, `microsecond`, `millisecond`, `minute`, `month`, `monthCode`, `nanosecond`, `offset`, `second`, `year`. Les propriétés non définies utilisent les valeurs de la date et de l'heure d'origine. Vous n'avez besoin de fournir qu'une seule des propriétés `month` ou `monthCode`, et une seule des propriétés `era` et `eraYear` ou `year`, et l'autre sera mise à jour en conséquence.
- `options` {{Optional_Inline}}
  - : Un objet contenant certaines ou toutes les propriétés suivantes (dans l'ordre dans lequel elles sont récupérées et validées)&nbsp;:
    - `disambiguation` {{Optional_Inline}}
      - : Que faire si la date et l'heure locales sont ambiguës dans le fuseau horaire donné (il y a plus d'un instant avec cette heure locale, ou l'heure locale n'existe pas). Les valeurs possibles sont `"compatible"`, `"earlier"`, `"later"`, et `"reject"`. Par défaut, `"compatible"`. Pour plus d'informations sur ces valeurs, voir [ambiguïté et écarts de l'heure locale à l'heure UTC](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#ambiguïté_et_écarts_lors_du_passage_de_lheure_locale_à_lutc).
    - `offset` {{Optional_Inline}}
      - : Que faire si le décalage est explicitement fourni dans `info` mais que le décalage est invalide pour le fuseau horaire donné à l'heure locale donnée. Les valeurs possibles sont `"use"`, `"ignore"`, `"reject"`, et `"prefer"`. Par défaut, `"prefer"`. Pour plus d'informations sur ces valeurs, voir [ambiguïté du décalage](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#ambiguïté_du_décalage).
    - `overflow` {{Optional_Inline}}
      - : Une chaîne de caractères définissant le comportement lorsque une composante de date est hors de portée (lors de l'utilisation de l'objet `info`). Les valeurs possibles sont&nbsp;:
        - `"constrain"` (par défaut)
          - : La composante de date est [fixée](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#fixer_les_dates_invalides) à la plage valide.
        - `"reject"`
          - : Un objet {{JSxRef("RangeError")}} est levé si la composante de date est hors de portée.

### Valeur de retour

Un nouvel objet `Temporal.ZonedDateTime`, où les champs définis dans `info` qui ne sont pas `undefined` sont remplacés par les valeurs correspondantes, et le reste des champs est copié à partir de la date et de l'heure originales.

### Exceptions

- {{JSxRef("TypeError")}}
  - : Lancé dans l'un des cas suivants&nbsp;:
    - `info` n'est pas un objet.
    - `options` n'est pas un objet ou `undefined`.
- {{JSxRef("RangeError")}}
  - : Lancé dans l'un des cas suivants&nbsp;:
    - Les propriétés fournies qui définissent le même composant sont incohérentes.
    - Les propriétés non numériques fournies ne sont pas valides&nbsp;; par exemple, si `monthCode` n'est jamais un code de mois valide dans ce calendrier.
    - Les propriétés numériques fournies sont hors de portée, et `options.overflow` est défini sur `"reject"`.
    - L'heure représentée par les propriétés fournies est ambiguë dans le fuseau horaire, et `options.disambiguation` est défini sur `"reject"`.
    - Le résultat n'est pas dans la [plage représentable](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#dates_représentables), qui est ±10<sup>8</sup> jours, soit environ ±273 972,6 ans, à partir de l'époque Unix.

## Exemples

### Utiliser la méthode `with()`

```js
const zdt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:34:56[America/New_York]",
);
const newZDT = zdt.with({ hour: 13 });
console.log(newZDT.toString()); // "2021-07-01T13:34:56-04:00[America/New_York]"
```

Pour plus d'exemples, voir la documentation des propriétés individuelles qui peuvent être définies en utilisant `with()`.

### Décalage lors des changements de date

Par défaut, l'option `offset` est définie sur `"prefer"`, ce qui signifie que nous utilisons le décalage d'origine (ou celui fourni dans `info`) s'il est valide, et recalculons sinon. Cela signifie que si vous définissez une autre date qui a un décalage différent en raison d'un changement d'heure d'été, le décalage sera recalculé&nbsp;:

```js
const zdt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:00:00-04:00[America/New_York]",
);
const newZDT = zdt.with({ month: 12 });
// Le décalage est recalculé à -05:00
console.log(newZDT.toString()); // "2021-12-01T12:00:00-05:00[America/New_York]"
```

Et si vous définissez l'heure à l'intérieur de la transition d'heure d'été, le décalage est utilisé pour résoudre l'ambiguïté&nbsp;:

```js
const zdt = Temporal.ZonedDateTime.from(
  "2024-11-02T01:05:00-04:00[America/New_York]",
);
const newZDT = zdt.with({ day: 3 });
console.log(newZDT.toString()); // "2024-11-03T01:05:00-04:00[America/New_York]"

const zdt2 = Temporal.ZonedDateTime.from(
  "2024-11-04T01:05:00-05:00[America/New_York]",
);
const newZDT2 = zdt2.with({ day: 3 });
console.log(newZDT2.toString()); // "2024-11-03T01:05:00-05:00[America/New_York]"
```

Si vous utilisez `offset: "use"`, alors le décalage sera utilisé tel quel pour obtenir l'heure exacte en premier, puis recalculé ensuite&nbsp;:

```js
const zdt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:00:00-04:00[America/New_York]",
);
const newZDT = zdt.with({ month: 12 }, { offset: "use" });
// Le décalage est recalculé à -05:00, mais l'heure affichée change
console.log(newZDT.toString()); // "2021-12-01T11:00:00-05:00[America/New_York]"
```

Vous pouvez également définir `offset: "reject"` pour générer une erreur si le décalage d'origine est invalide, obligeant à définir un nouveau décalage explicite&nbsp;:

```js
const zdt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:00:00-04:00[America/New_York]",
);
zdt.with({ month: 12 }, { offset: "reject" });
// RangeError: date-time can't be represented in the given time zone
zdt.with({ month: 12, offset: "-05:00" }, { offset: "reject" }).toString();
// "2021-12-01T12:00:00-05:00[America/New_York]"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.ZonedDateTime")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/withCalendar", "Temporal.ZonedDateTime.prototype.withCalendar()")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/withTimeZone", "Temporal.ZonedDateTime.prototype.withTimeZone()")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/withPlainTime", "Temporal.ZonedDateTime.prototype.withPlainTime()")}}
- La méthode statique {{JSxRef("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/add", "Temporal.ZonedDateTime.prototype.add()")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}}
