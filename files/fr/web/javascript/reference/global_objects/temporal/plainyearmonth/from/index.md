---
title: "Temporal.PlainYearMonth : méthode statique from()"
short-title: from()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/from
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode statique **`Temporal.PlainYearMonth.from()`** crée un nouvel objet `Temporal.PlainYearMonth` depuis un autre object `Temporal.PlainYearMonth`, un objet avec les propriétés mois et année, ou une chaîne de caractères [RFC 9557](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth#format_rfc_9557).

## Syntaxe

```js-nolint
Temporal.PlainYearMonth.from(info)
Temporal.PlainYearMonth.from(info, options)
```

### Paramètres

- `info`
  - : L'un des éléments suivants&nbsp;:
    - Une instance de {{JSxRef("Temporal.PlainYearMonth")}}, ce qui crée une copie de l'instance.
    - Une chaîne de caractères [RFC 9557](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth#format_rfc_9557) contenant une date et éventuellement un calendrier. Si le calendrier n'est pas `iso8601`, un jour est requis.
    - Un objet contenant les propriétés suivantes (dans l'ordre où elles sont récupérées et validées)&nbsp;:
      - `calendar` {{Optional_Inline}}
        - : Une chaîne de caractères correspondant à la propriété {{JSxRef("Temporal/PlainYearMonth/calendarId", "calendarId")}}. Voir [`Intl.supportedValuesOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#types_de_calendrier_pris_en_charge) pour une liste des types de calendriers couramment pris en charge. Par défaut, `"iso8601"`. Toutes les autres propriétés sont interprétées dans ce système de calendrier (contrairement au constructeur {{JSxRef("Temporal/PlainYearMonth/PlainYearMonth", "Temporal.PlainYearMonth()")}}, qui interprète les valeurs dans le système de calendrier ISO).
      - `era` et `eraYear`
        - : Une chaîne de caractères et un entier correspondant aux propriétés {{JSxRef("Temporal/PlainYearMonth/era", "era")}} et {{JSxRef("Temporal/PlainYearMonth/eraYear", "eraYear")}}. Sont utilisés uniquement si le système de calendrier possède des ères. `era` et `eraYear` doivent être fournis simultanément. S'ils ne sont pas fournis, alors `year` doit être fourni. Si `era`, `eraYear` et `year` sont tous fournis, ils doivent être cohérents.
      - `month`
        - : Correspond à la propriété {{JSxRef("Temporal/PlainYearMonth/month", "month")}}. Doit être positif indépendamment de l'option `overflow`.
      - `monthCode`
        - : Correspond à la propriété {{JSxRef("Temporal/PlainYearMonth/monthCode", "monthCode")}}. Si elle n'est pas fournie, alors `month` doit être fourni. Si `month` et `monthCode` sont tous deux fournis, ils doivent être cohérents.
      - `year`
        - : Correspond à la propriété {{JSxRef("Temporal/PlainYearMonth/year", "year")}}.

- `options` {{Optional_Inline}}
  - : Un objet contenant la propriété suivante&nbsp;:
    - `overflow` {{Optional_Inline}}
      - : Une chaîne de caractères définissant le comportement lorsque un composant de date est hors de portée (lors de l'utilisation de l'objet `info`). Les valeurs possibles sont&nbsp;:
        - `"constrain"` (par défaut)
          - : Le composant de date est [contraint](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#fixer_les_dates_invalides) à la plage valide.
        - `"reject"`
          - : Un objet {{JSxRef("RangeError")}} est levé si le composant de date est hors de portée.

### Valeur de retour

Un nouvel objet `Temporal.PlainYearMonth`, représentant l'année et le mois définis par `info` dans le calendrier défini.

Chaque `PlainYearMonth` stocke en interne une date ISO 8601 complète, qui a le même mois et la même année dans le calendrier cible que ce qui est exposé. Le jour de référence est visible lors de la conversion en chaîne avec {{JSxRef("Temporal/PlainYearMonth/toString", "toString()")}}, qui retourne une date ISO. Le jour de référence est choisi de manière arbitraire mais cohérente&nbsp;; c'est-à-dire que chaque paire `(année, mois)` correspond toujours au même jour de référence ISO. Il n'utilise pas le jour fourni dans l'entrée. Au lieu de cela, le jour de référence est toujours choisi comme étant le premier jour valide du mois.

Cette canonisation du jour de référence garantit que {{JSxRef("Temporal/PlainYearMonth/equals", "equals()")}} peut comparer directement les dates ISO sous-jacentes sans calcul supplémentaire.

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levé dans l'un des cas suivants&nbsp;:
    - `info` n'est pas un objet ou une chaîne de caractères.
    - `options` n'est pas un objet ou `undefined`.
    - Les propriétés fournies sont insuffisantes pour déterminer de manière univoque une date. Vous devez généralement fournir une `year` (ou `era` et `eraYear`) et un `month` (ou un `monthCode`).
- {{JSxRef("RangeError")}}
  - : Levé dans l'un des cas suivants&nbsp;:
    - Les propriétés fournies qui spécifient le même composant sont incohérentes.
    - Les propriétés non numériques fournies ne sont pas valides&nbsp;; par exemple, si `monthCode` n'est jamais un code de mois valide dans ce calendrier.
    - Les propriétés numériques fournies sont hors de portée, et `options.overflow` est défini sur `"reject"`.
    - Les informations ne sont pas dans la [plage représentable](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#dates_représentables), qui est ±(10<sup>8</sup> + 1) jours, soit environ ±273 972,6 ans, à partir de l'époque Unix.

## Exemples

### Créer un `PlainYearMonth` à partir d'un objet

```js
// Année + code du mois
const ym = Temporal.PlainYearMonth.from({ year: 2021, monthCode: "M05" });
console.log(ym.toString()); // 2021-05

// Année + mois
const ym2 = Temporal.PlainYearMonth.from({ year: 2021, month: 7 });
console.log(ym2.toString()); // 2021-07

// Année + mois dans un calendrier différent
const ym3 = Temporal.PlainYearMonth.from({
  year: 5730,
  month: 6,
  calendar: "hebrew",
});
console.log(ym3.toString()); // 1970-02-07[u-ca=hebrew]

// Année + code du mois dans un calendrier différent
const ym4 = Temporal.PlainYearMonth.from({
  year: 5730,
  monthCode: "M05L",
  calendar: "hebrew",
});
console.log(ym4.toString()); // 1970-02-07[u-ca=hebrew]
```

### Contrôler le comportement de dépassement

Par défaut, les valeurs hors de portée sont limitées à la plage valide.

```js
const ym1 = Temporal.PlainYearMonth.from({ year: 2021, month: 13 });
console.log(ym1.toString()); // 2021-12

// 5732 n'est pas une année bissextile hébraïque, donc un code de mois différent est choisi
const ym2 = Temporal.PlainYearMonth.from({
  year: 5732,
  monthCode: "M05L",
  calendar: "hebrew",
});
console.log(ym2.toLocaleString("en-US", { calendar: "hebrew" })); // Adar 5732
const underlyingDate = Temporal.PlainDate.from(ym2.toString());
console.log(underlyingDate.year, underlyingDate.monthCode); // 5732 M06
```

Vous pouvez changer ce comportement pour lancer une erreur à la place&nbsp;:

```js
Temporal.PlainYearMonth.from({ year: 2021, month: 13 }, { overflow: "reject" });
// RangeError: date value "month" not in 1..12: 13
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainYearMonth")}}
- La méthode {{JSxRef("Temporal/PlainYearMonth/PlainYearMonth", "Temporal.PlainYearMonth()")}}
- La méthode {{JSxRef("Temporal/PlainYearMonth/with", "Temporal.PlainYearMonth.prototype.with()")}}
