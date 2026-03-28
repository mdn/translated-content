---
title: "Temporal.PlainDate : méthode statique from()"
short-title: from()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/from
l10n:
  sourceCommit: 9b86874b5762b52ce0055f58d561004d1a204ad5
---

La méthode statique **`Temporal.PlainDate.from()`** crée un nouvel objet `Temporal.PlainDate` à partir d'un autre objet `Temporal.PlainDate`, d'un objet avec des propriétés de date ou d'une chaîne [RFC 9557](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#format_rfc_9557).

## Syntaxe

```js-nolint
Temporal.PlainDate.from(info)
Temporal.PlainDate.from(info, options)
```

### Paramètres

- `info`
  - : L'un des éléments suivants&nbsp;:
    - Une instance de {{JSxRef("Temporal.PlainDate")}}, qui crée une copie de l'instance.
    - Une instance de {{JSxRef("Temporal.PlainDateTime")}}, qui fournit la date du calendrier de la même manière que {{JSxRef("Temporal/PlainDateTime/toPlainDate", "Temporal.PlainDateTime.prototype.toPlainDate()")}}.
    - Une instance de {{JSxRef("Temporal.ZonedDateTime")}}, qui fournit la date du calendrier de la même manière que {{JSxRef("Temporal/ZonedDateTime/toPlainDate", "Temporal.ZonedDateTime.prototype.toPlainDate()")}}.
    - Une chaîne de caractères [RFC 9557](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#format_rfc_9557) contenant une date et éventuellement un calendrier.
    - Un objet contenant les propriétés suivantes (dans l'ordre dans lequel elles sont récupérées et validées)&nbsp;:
      - `calendar` {{Optional_Inline}}
        - : Une chaîne de caractères correspondant à la propriété {{JSxRef("Temporal/PlainDate/calendarId", "calendarId")}}. Voir [`Intl.supportedValuesOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#types_de_calendriers_pris_en_charge) pour une liste des types de calendriers couramment pris en charge. Par défaut, `"iso8601"`. Toutes les autres propriétés sont interprétées dans ce système de calendrier (contrairement au constructeur {{JSxRef("Temporal/PlainDate/PlainDate", "Temporal.PlainDate()")}}, qui interprète les valeurs dans le système de calendrier ISO).
      - `day`
        - : Un entier correspondant à la propriété {{JSxRef("Temporal/PlainDate/day", "day")}}. Doit être positif quel que soit l'option `overflow`.
      - `era` et `eraYear`
        - : Une chaîne de caractères et un entier correspondant aux propriétés {{JSxRef("Temporal/PlainDate/era", "era")}} et {{JSxRef("Temporal/PlainDate/eraYear", "eraYear")}}. Ne sont utilisés que si le système de calendrier a des ères. `era` et `eraYear` doivent être fournis simultanément. Au moins l'un des `eraYear` (avec `era`) ou `year` doit être fourni. Si `era`, `eraYear` et `year` sont tous fournis, ils doivent être cohérents.
      - `month`
        - : Correspond à la propriété {{JSxRef("Temporal/PlainDate/month", "month")}}. Doit être positif quel que soit l'option `overflow`. Au moins l'un des `month` ou `monthCode` doit être fourni. Si les deux sont fournis, ils doivent être cohérents.
      - `monthCode`
        - : Correspond à la propriété {{JSxRef("Temporal/PlainDate/monthCode", "monthCode")}}. Au moins l'un des `month` ou `monthCode` doit être fourni. Si les deux sont fournis, ils doivent être cohérents.
      - `year`
        - : Correspond à la propriété {{JSxRef("Temporal/PlainDate/year", "year")}}. Au moins l'un des `eraYear` (avec `era`) ou `year` doit être fourni. Si `era`, `eraYear` et `year` sont tous fournis, ils doivent être cohérents.

      L'information doit définir explicitement une année (comme `year` ou `era` et `eraYear`), un mois (comme `month` ou `monthCode`) et un jour.

- `options` {{Optional_Inline}}
  - : Un objet contenant la propriété suivante&nbsp;:
    - `overflow` {{Optional_Inline}}
      - : Une chaîne de caractères définissant le comportement lorsque un composant de date est hors de portée (lors de l'utilisation de l'objet `info`). Les valeurs possibles sont&nbsp;:
        - `"constrain"` (par défaut)
          - : Le composant de date est [contraint](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#fixer_les_dates_invalides) à la plage valide.
        - `"reject"`
          - : Un objet {{JSxRef("RangeError")}} est levé si le composant de date est hors de portée.

### Valeur de retour

Un nouvel objet `Temporal.PlainDate`, représentant la date définie par `info` dans le calendrier défini.

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levé dans l'un des cas suivants&nbsp;:
    - `info` n'est pas un objet ou une chaîne de caractères.
    - `options` n'est pas un objet ou `undefined`.
    - Les propriétés fournies sont insuffisantes pour déterminer de manière univoque une date. Vous devez généralement fournir une `year` (ou `era` et `eraYear`), un `month` (ou `monthCode`) et un `day`.
- {{JSxRef("RangeError")}}
  - : Levé dans l'un des cas suivants&nbsp;:
    - Les propriétés fournies qui définissent le même composant sont incohérentes.
    - Les propriétés non numériques fournies ne sont pas valides&nbsp;; par exemple, si `monthCode` n'est jamais un code de mois valide dans ce calendrier.
    - Les propriétés numériques fournies sont hors de portée, et `options.overflow` est défini sur `"reject"`.
    - Les informations ne sont pas dans la [plage représentable](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#dates_représentables), qui est ±(10<sup>8</sup> + 1) jours, soit environ ±273 972,6 ans, à partir de l'époque Unix.

## Exemples

### Créer un objet `PlainDate` depuis un objet

```js
// Année, mois et jour
const d1 = Temporal.PlainDate.from({ year: 2021, month: 7, day: 1 });
console.log(d1.toString()); // "2021-07-01"

// Année, code du mois et jour
const d2 = Temporal.PlainDate.from({ year: 2021, monthCode: "M07", day: 1 });
console.log(d2.toString()); // "2021-07-01"

// Année, mois, jour dans un calendrier différent
const d3 = Temporal.PlainDate.from({
  year: 2021,
  month: 7,
  day: 1,
  calendar: "hebrew",
});
// Note : lorsque vous construisez une date avec un objet, les composants
// de la date sont dans *ce* calendrier, et non dans le calendrier ISO.
// Cependant, toString() affiche toujours la date dans le calendrier ISO.
// Par exemple, l'année "2021" dans le calendrier hébreu est en réalité
// 1740 avant notre ère dans le calendrier ISO.
console.log(d3.toString()); // "-001739-03-07[u-ca=hebrew]"

// Ère, année de l'ère, mois et jour
const d4 = Temporal.PlainDate.from({
  era: "meiji",
  eraYear: 4,
  month: 7,
  day: 1,
  calendar: "japanese",
});
console.log(d4.toString()); // "1871-07-01[u-ca=japanese]"
```

### Contrôler le comportement de dépassement

Par défaut, les valeurs hors de portée sont limitées à la plage valide&nbsp;:

```js
const d1 = Temporal.PlainDate.from({ year: 2021, month: 13, day: 1 });
console.log(d1.toString()); // "2021-12-01"

const d2 = Temporal.PlainDate.from({ year: 2021, month: 2, day: 29 });
console.log(d2.toString()); // "2021-02-28"

const d3 = Temporal.PlainDate.from("2021-02-29");
console.log(d3.toString()); // "2021-02-28"
```

Vous pouvez changer ce comportement pour lever une erreur à la place&nbsp;:

```js
const d3 = Temporal.PlainDate.from(
  { year: 2021, month: 13, day: 1 },
  { overflow: "reject" },
);
// RangeError: date value "month" not in 1..12: 13
```

### Créer un objet `PlainDate` depuis une chaîne de caractères

```js
const d = Temporal.PlainDate.from("2021-07-01");
console.log(d.toLocaleString("en-US", { dateStyle: "full" }));
// Thursday, July 1, 2021

// Fournir un calendrier
const d2 = Temporal.PlainDate.from("2021-07-01[u-ca=japanese]");
console.log(
  d2.toLocaleString("ja-JP", { calendar: "japanese", dateStyle: "full" }),
);
// 令和3年7月1日木曜日

// Fournir une heure et un décalage (ignorés)
const d3 = Temporal.PlainDate.from("2021-07-01T00:00+08:00");
console.log(d3.toString()); // "2021-07-01"
```

### Créer un objet `PlainDate` depuis une autre instance de Temporal

```js
const dt = Temporal.PlainDateTime.from("2021-07-01T12:00");
const d = Temporal.PlainDate.from(dt);
console.log(d.toString()); // "2021-07-01"

const zdt = Temporal.ZonedDateTime.from(
  "2021-07-01T00:00+08:00[Asia/Shanghai]",
);
const d2 = Temporal.PlainDate.from(zdt);
console.log(d2.toString()); // "2021-07-01"

const d3 = Temporal.PlainDate.from(d);
console.log(d3.toString()); // "2021-07-01"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainDate")}}
- Le constructeur {{JSxRef("Temporal/PlainDate/PlainDate", "Temporal.PlainDate()")}}
- La méthode {{JSxRef("Temporal/PlainDate/with", "Temporal.PlainDate.prototype.with()")}}
