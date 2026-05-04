---
title: "Temporal.PlainDateTime : méthode statique from()"
short-title: from()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/from
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode statique **`Temporal.PlainDateTime.from()`** crée un nouvel objet `Temporal.PlainDateTime` à partir d'un autre objet `Temporal.PlainDateTime`, d'un objet contenant des propriétés de date et d'heure, ou d'une chaîne de caractères au format [RFC 9557](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime#format_rfc_9557).

## Syntaxe

```js-nolint
Temporal.PlainDateTime.from(info)
Temporal.PlainDateTime.from(info, options)
```

### Paramètres

- `info`
  - : L'un des éléments suivants&nbsp;:
    - Une instance de {{JSxRef("Temporal.PlainDateTime")}}, ce qui crée une copie de l'instance.
    - Une chaîne de caractères au format [RFC 9557](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime#format_rfc_9557) contenant une date, éventuellement une heure, et éventuellement un calendrier.
    - Un objet contenant des propriétés reconnues soit par {{JSxRef("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} (`calendar`, `era`, `eraYear`, `year`, `month`, `monthCode`, `day`) soit par {{JSxRef("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} (`hour`, `minute`, `second`, `millisecond`, `microsecond`, `nanosecond`). L'objet `info` doit définir explicitement une année (comme `year` ou `era` et `eraYear`), un mois (comme `month` ou `monthCode`), et un jour&nbsp;; les autres sont optionnels et seront définis à leurs valeurs par défaut.
- `options` {{Optional_Inline}}
  - : Un objet contenant la propriété suivante&nbsp;:
    - `overflow` {{Optional_Inline}}
      - : Une chaîne de caractères définissant le comportement lorsqu'un composant de date est hors de portée (lors de l'utilisation de l'objet `info`). Les valeurs possibles sont&nbsp;:
        - `"constrain"` (par défaut)
          - : Le composant de date est [contraint](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#invalid_date_clamping) à la plage valide.
        - `"reject"`
          - : Un objet {{JSxRef("RangeError")}} est levé si le composant de date est hors de portée.

### Valeur de retour

Un nouvel objet `Temporal.PlainDateTime`, représentant la date et l'heure définies par `info` dans le calendrier défini.

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée dans l'un des cas suivants&nbsp;:
    - `info` n'est pas un objet ou une chaîne de caractères.
    - `options` n'est pas un objet ou `undefined`.
    - Les propriétés fournies sont insuffisantes pour déterminer de manière univoque une date. Vous devez généralement fournir une `year` (ou `era` et `eraYear`), un `month` (ou `monthCode`), et un `day`.
- {{JSxRef("RangeError")}}
  - : Levée dans l'un des cas suivants&nbsp;:
    - Les propriétés fournies qui définissent le même composant sont incohérentes.
    - Les propriétés non numériques fournies ne sont pas valides&nbsp;; par exemple, si `monthCode` n'est jamais un code de mois valide dans ce calendrier.
    - Les propriétés numériques fournies sont hors de portée, et `options.overflow` est défini à `"reject"`.
    - L'info n'est pas dans la [plage représentable](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#dates_représentables), qui est ±(10<sup>8</sup> + 1) jours, soit environ ±273 972,6 ans, à partir de l'époque Unix.

## Exemples

### Créer un objet `PlainDateTime` à partir d'un objet

```js
// Année + mois + jour + heure + minute + seconde
const dt = Temporal.PlainDateTime.from({
  year: 2021,
  month: 7,
  day: 1,
  hour: 12,
  minute: 34,
  second: 56,
});
console.log(dt.toString()); // "2021-07-01T12:34:56"
```

### Créer un objet `PlainDateTime` à partir d'une chaîne de caractères

```js
const dt = Temporal.PlainDateTime.from("2021-07-01T12:34:56");
console.log(dt.toLocaleString()); // "7/1/2021, 12:34:56 PM" (en supposant la locale en-US)
```

Pour plus d'exemples, notamment concernant les différents calendriers et les paramètres de dépassement, voir {{JSxRef("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} et {{JSxRef("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainDateTime")}}
- Le constructeur {{JSxRef("Temporal/PlainDateTime/PlainDateTime", "Temporal.PlainDateTime()")}}
- La méthode {{JSxRef("Temporal/PlainDateTime/with", "Temporal.PlainDateTime.prototype.with()")}}
