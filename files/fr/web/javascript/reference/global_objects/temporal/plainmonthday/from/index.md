---
title: "Temporal.PlainMonthDay : méthode statique from()"
short-title: from()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay/from
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode statique **`Temporal.PlainMonthDay.from()`** crée un nouvel objet `Temporal.PlainMonthDay` à partir d'une autre instance `Temporal.PlainMonthDay`, d'un objet contenant des propriétés mois et jour, ou d'une chaîne de caractères au format [RFC 9557](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay#format_rfc_9557).

## Syntaxe

```js-nolint
Temporal.PlainMonthDay.from(info)
Temporal.PlainMonthDay.from(info, options)
```

### Paramètres

- `info`
  - : Une des suivantes&nbsp;:
    - Une instance de {{JSxRef("Temporal.PlainMonthDay")}}, ce qui crée une copie de l'instance.
    - Une chaîne de caractères au format [RFC 9557](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay#format_rfc_9557) contenant une date et éventuellement un calendrier. Si le calendrier n'est pas `iso8601`, une année est requise.
    - Un objet contenant les propriétés suivantes (dans l'ordre où elles sont récupérées et validées)&nbsp;:
      - `calendar` {{Optional_Inline}}
        - : Une chaîne de caractères correspondant à la propriété {{JSxRef("Temporal/PlainMonthDay/calendarId", "calendarId")}}. Par défaut, `"iso8601"`. Toutes les autres propriétés sont interprétées dans ce système de calendrier (contrairement au constructeur {{JSxRef("Temporal/PlainMonthDay/PlainMonthDay", "Temporal.PlainMonthDay()")}}, qui interprète les valeurs dans le système de calendrier ISO). Voir [`Intl.supportedValuesOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#types_de_calendriers_pris_en_charge) pour une liste des types de calendriers couramment pris en charge.
      - `day`
        - : Un entier correspondant à la propriété {{JSxRef("Temporal/PlainMonthDay/day", "day")}}. Doit être positif indépendamment de l'option `overflow`.
      - `era` et `eraYear`
        - : Une chaîne de caractères et un entier qui peuvent être utilisés à la place de `year`. Voir {{JSxRef("Temporal/PlainDate/era", "era")}} et {{JSxRef("Temporal/PlainDate/eraYear", "eraYear")}} de `PlainDate`. Sont utilisés uniquement si le système de calendrier a des ères. `era` et `eraYear` doivent être fournis simultanément. Si `month` est défini, au moins un des `eraYear` (avec `era`) ou `year` doit être fourni. Si tous les `era`, `eraYear` et `year` sont fournis, ils doivent être cohérents.
      - `month`
        - : Un entier positif qui peut être utilisé à la place de `monthCode`. Voir {{JSxRef("Temporal/PlainDate/month", "month")}} de `PlainDate`. Doit être positif indépendamment de l'option `overflow`. Si `month` est fourni et que le calendrier n'est pas `iso8601`, alors `year` (ou `eraYear` avec `era` en substitution) doit également être fourni, car le même `month` peut correspondre à plusieurs valeurs possibles de `monthCode` dans différentes années. Au moins un des `month` ou `monthCode` doit être fourni. Si les deux `month` et `monthCode` sont fournis, ils doivent être cohérents.
      - `monthCode`
        - : Correspond à la propriété {{JSxRef("Temporal/PlainMonthDay/monthCode", "monthCode")}}. Au moins un des `month` ou `monthCode` doit être fourni. Si les deux `month` et `monthCode` sont fournis, ils doivent être cohérents.
      - `year`
        - : Un entier utilisé pour faire disparaître l'ambiguïté `month` si fourni, car pour certains calendriers, le même `month` peut correspondre à différents `monthCode` dans différentes années. Voir {{JSxRef("Temporal/PlainDate/year", "year")}} de `PlainDate`. Si une année est fournie, l'option `overflow` valide le mois et le jour dans l'année donnée, pas seulement dans n'importe quelle année. Si `month` est défini, au moins un des `eraYear` (avec `era`) ou `year` doit être fourni. Si tous les `era`, `eraYear` et `year` sont fournis, ils doivent être cohérents.

- `options` {{Optional_Inline}}
  - : Un objet contenant la propriété suivante&nbsp;:
    - `overflow` {{Optional_Inline}}
      - : Une chaîne de caractères définissant le comportement lorsque un composant de date est hors de portée (lors de l'utilisation de l'objet `info`). Les valeurs possibles sont&nbsp;:
        - `"constrain"` (par défaut)
          - : Le composant de date est [contraint](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#fixer_les_dates_invalides) à la plage valide.
        - `"reject"`
          - : Un objet {{JSxRef("RangeError")}} est levé si le composant de date est hors de portée.

### Valeur de retour

Un nouvel objet `Temporal.PlainMonthDay`, représentant le mois et le jour défini par `info` dans le calendrier défini.

Chaque `PlainMonthDay` stocke en interne une date ISO 8601 complète, qui a le même mois et jour dans le calendrier cible que ce qui est exposé. L'année de référence est visible lors de la conversion en chaîne avec {{JSxRef("Temporal/PlainMonthDay/toString", "toString()")}}, qui retourne une date ISO. L'année de référence est choisie de manière arbitraire mais cohérente (c'est-à-dire que chaque paire `(monthCode, day)` correspond toujours à la même année de référence ISO). Elle n'utilise pas l'année fournie en entrée. À la place, l'année de référence est choisie en trouvant la dernière date avant le 31 décembre 1972 qui a le même mois et jour dans le calendrier cible, ou la première date après le 31 décembre 1972 si aucune date de ce type n'existe.

Par exemple, pour les calendriers dérivés du grégorien, l'année de référence est 1972. Pour le calendrier hébraïque, l'année de référence est 1972 dans le calendrier grégorien, mais si le mois est Adar I (`M05L`), qui est un mois intercalaire, l'année de référence est 1970 (5730 dans le calendrier hébraïque) à la place, car la prochaine année intercalaire est 1973 (5733 dans le calendrier hébraïque), ce qui est après 1972.

Cette canonisation de l'année de référence garantit que {{JSxRef("Temporal/PlainMonthDay/equals", "equals()")}} peut comparer directement les dates ISO sous-jacentes sans calcul supplémentaire.

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée dans l'un des cas suivants&nbsp;:
    - `info` n'est pas un objet ou une chaîne de caractères.
    - `options` n'est pas un objet ou `undefined`.
    - Les propriétés fournies sont insuffisantes pour déterminer une date sans ambiguïté. Vous devez généralement fournir une valeur `year` (ou `era` et `eraYear`), un `month` et un `day`, ou un `monthCode` et un `day`.
- {{JSxRef("RangeError")}}
  - : Levée dans l'un des cas suivants&nbsp;:
    - Les propriétés fournies qui définissent le même composant sont incohérentes.
    - Les propriétés non numériques fournies ne sont pas valides&nbsp;; par exemple, si `monthCode` n'est jamais un code de mois valide dans ce calendrier.
    - Les propriétés numériques fournies sont hors de portée, et `options.overflow` est défini sur `"reject"`.
    - Les informations ne sont pas dans la [plage représentable](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#dates_représentables), qui est ±(10<sup>8</sup> + 1) jours, soit environ ±273 972,6 ans, à partir de l'époque Unix.

## Exemples

### Créer un `PlainMonthDay` à partir d'un objet

```js
// Code du mois + jour
const md = Temporal.PlainMonthDay.from({ monthCode: "M05", day: 2 });
console.log(md.toString()); // 05-02

// Mois + jour (uniquement pour le calendrier ISO)
const md2 = Temporal.PlainMonthDay.from({ month: 7, day: 1 });
console.log(md2.toString()); // 07-01

// Année + mois + jour
const md3 = Temporal.PlainMonthDay.from({ year: 2021, month: 7, day: 1 });
console.log(md3.toString()); // 07-01

// Année + mois + jour dans un calendrier différent (où l'année est requise)
const md4 = Temporal.PlainMonthDay.from({
  year: 2021,
  month: 7,
  day: 1,
  calendar: "hebrew",
});
console.log(md4.toString()); // 1972-03-16[u-ca=hebrew]

// Code du mois + jour dans un calendrier différent
const md5 = Temporal.PlainMonthDay.from({
  monthCode: "M05L",
  day: 1,
  calendar: "hebrew",
});
console.log(md5.toString()); // 1970-02-07[u-ca=hebrew]
```

### Contrôler le comportement de dépassement

Par défaut, les valeurs hors de portée sont limitées à la plage valide. Un mois et un jour sans année de référence explicite est valide tant qu'il existe une année dans laquelle il est valide, même si elle n'apparaît pas chaque année. Si l'année, le mois et le jour sont tous donnés, alors les règles de mappage vers un mois et un jour valide peuvent être complexes et spécifiques à chaque calendrier, mais voici le comportement habituel&nbsp;:

- Si la combinaison `year`/`month` est invalide, le `month` est limité pour obtenir un `monthCode` valide dans l'année.
- Si la combinaison `year`/`monthCode` est invalide, une année différente est choisie pour conserver le `monthCode` tel quel.
- Le `day` est limité dans le mois-année donné pour obtenir un mois-jour valide.

Ceci est légèrement différement de la [limitation des dates](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#fixer_les_dates_invalides) habituelle, qui favorise l'année par rapport au code du mois.

```js
// Mois toujours hors de portée
const md1 = Temporal.PlainMonthDay.from({ month: 13, day: 1 });
console.log(md1.toString()); // 12-01

// Mois hors de portée pour l'année spécifique : 5732 n'est pas une année
// bissextile hébraïque, donc le mois est limité à 12 pour obtenir un
// monthCode valide
const md2 = Temporal.PlainMonthDay.from({
  year: 5732,
  month: 13,
  day: 1,
  calendar: "hebrew",
});
console.log(md2.toLocaleString("en-US", { calendar: "hebrew" })); // 1 Elul
const underlyingDate = Temporal.PlainDate.from(md2.toString());
console.log(underlyingDate.year, underlyingDate.month); // 5732 12

// Code du mois existe mais pas pour l'année spécifique : 5731 n'est pas
// une année bissextile hébraïque, donc une année différente est choisie
// pour conserver le monthCode en tant que M05L
const md3 = Temporal.PlainMonthDay.from({
  year: 5731,
  monthCode: "M05L",
  day: 1,
  calendar: "hebrew",
});
console.log(md3.toLocaleString("en-US", { calendar: "hebrew" })); // 1 Adar I
const underlyingDate2 = Temporal.PlainDate.from(md3.toString());
console.log(underlyingDate2.year, underlyingDate2.monthCode); // 5730 M05L

// Jour toujours hors de portée
const md4 = Temporal.PlainMonthDay.from({ month: 2, day: 30 });
console.log(md4.toString()); // 02-29

// Jour hors de portée pour l'année et du mois spécifique
const md5 = Temporal.PlainMonthDay.from({ year: 2021, month: 2, day: 29 });
console.log(md5.toString()); // 02-28
```

Vous pouvez changer ce comportement pour lever une erreur à la place&nbsp;:

```js
Temporal.PlainMonthDay.from(
  { year: 2021, month: 13, day: 1 },
  { overflow: "reject" },
);
// RangeError: date value "month" not in 1..12: 13
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainMonthDay")}}
- Le constructeur {{JSxRef("Temporal/PlainMonthDay/PlainMonthDay", "Temporal.PlainMonthDay()")}}
- La méthode {{JSxRef("Temporal/PlainMonthDay/with", "Temporal.PlainMonthDay.prototype.with()")}}
