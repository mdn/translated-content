---
title: "Intl.DurationFormat : méthode formatToParts()"
short-title: formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/formatToParts
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`formatToParts()`** des instances de {{JSxRef("Intl.DurationFormat")}} retourne un tableau d'objets représentant chaque partie de la chaîne de caractères mise en forme qui serait retournée par {{JSxRef("Intl/DurationFormat/format", "format()")}}. Elle est utile pour construire des chaînes de caractères personnalisées à partir des jetons spécifiques à la locale.

## Syntaxe

```js-nolint
formatToParts(duration)
```

### Paramètres

- `duration` {{Optional_Inline}}
  - : L'objet de durée à mettre en forme. Il doit inclure certaines ou toutes les propriétés suivantes&nbsp;: `years`, `months`, `weeks`, `days`, `hours`, `minutes`, `seconds`, `milliseconds`, `microseconds`, `nanoseconds`. La valeur de chaque propriété doit être un entier, et leurs signes doivent être cohérents. Cela peut être un objet {{JSxRef("Temporal.Duration")}}&nbsp;; voir la documentation de {{JSxRef("Temporal.Duration")}} pour plus d'informations sur ces propriétés.

### Valeur de retour

An {{JSxRef("Array")}} d'objets contenant la durée mise en forme en parties. Chaque objet possède deux ou trois propriétés, `type`, `value`, et éventuellement `unit`, chacune contenant une chaîne de caractères. La concaténation de `value`, dans l'ordre fourni, donnera la même chaîne de caractères que {{JSxRef("Intl/DurationFormat/format", "format()")}}. Les parties peuvent être considérées comme obtenues directement en appelant {{JSxRef("Intl/NumberFormat/formatToParts", "Intl.NumberFormat.prototype.formatToParts()")}} avec la valeur numérique et leurs unités respectives. Tous les jetons produits par le `NumberFormat` ont une propriété supplémentaire `unit`, qui est la forme singulière de l'entrée `unit`&nbsp;; ceci est destiné à un usage programmatique et n'est pas localisé. L'unité localisée est produite comme un jeton `unit` séparé dans le résultat de `NumberFormat`. Les parties de chaque unité de durée sont concaténées de la même manière qu'en appelant {{JSxRef("Intl/ListFormat/formatToParts", "Intl.ListFormat.prototype.formatToParts()")}} avec `{ type: "unit" }`, donc des jetons littéraux supplémentaires sont insérés.

## Exemples

La méthode `formatToParts` permet une mise en forme adaptée à la locale des chaînes de caractères produites par les formateurs `DurationFormat` en vous fournissant la chaîne de caractères en parties&nbsp;:

```js
const duration = {
  hours: 7,
  minutes: 8,
  seconds: 9,
  milliseconds: 123,
  microseconds: 456,
  nanoseconds: 789,
};

new Intl.DurationFormat("en", { style: "long" }).formatToParts(duration);

// Valeur retournée :
[
  { type: "integer", value: "7", unit: "hour" },
  { type: "literal", value: " ", unit: "hour" },
  { type: "unit", value: "hours", unit: "hour" },
  { type: "literal", value: ", " },
  { type: "integer", value: "8", unit: "minute" },
  { type: "literal", value: " ", unit: "minute" },
  { type: "unit", value: "minutes", unit: "minute" },
  { type: "literal", value: ", " },
  { type: "integer", value: "9", unit: "second" },
  { type: "literal", value: " ", unit: "second" },
  { type: "unit", value: "seconds", unit: "second" },
  { type: "literal", value: ", " },
  { type: "integer", value: "123", unit: "millisecond" },
  { type: "literal", value: " ", unit: "millisecond" },
  { type: "unit", value: "milliseconds", unit: "millisecond" },
  { type: "literal", value: ", " },
  { type: "integer", value: "456", unit: "microsecond" },
  { type: "literal", value: " ", unit: "microsecond" },
  { type: "unit", value: "microseconds", unit: "microsecond" },
  { type: "literal", value: ", " },
  { type: "integer", value: "789", unit: "nanosecond" },
  { type: "literal", value: " ", unit: "nanosecond" },
  { type: "unit", value: "nanoseconds", unit: "nanosecond" },
];
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.DurationFormat")}}
- La méthode {{JSxRef("Intl/DurationFormat/format", "Intl.DurationFormat.prototype.format()")}}
- L'objet {{JSxRef("Temporal.Duration")}}
