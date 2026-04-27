---
title: "Intl.RelativeTimeFormat : méthode formatToParts()"
short-title: formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/formatToParts
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La méthode **`formatToParts()`** des instances de {{JSxRef("Intl.RelativeTimeFormat")}} retourne un tableau d'objets représentant chaque partie de la chaîne de caractères formatée qui serait retournée par {{JSxRef("Intl/RelativeTimeFormat/format", "format()")}}. Elle est utile pour construire des chaînes de caractères personnalisées à partir des jetons spécifiques à la locale.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Intl.RelativeTimeFormat.prototype.formatToParts()")}}

```js interactive-example
const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
const parts = rtf.formatToParts(10, "seconds");

console.log(parts[0].value);
// Résultat attendu : "in "

console.log(parts[1].value);
// Résultat attendu : "10"

console.log(parts[2].value);
// Résultat attendu : " seconds"
```

## Syntaxe

```js-nolint
formatToParts(value, unit)
```

### Paramètres

- `value`
  - : Valeur numérique à utiliser dans le message de temps relatif internationalisé.
- `unit`
  - : Unité à utiliser dans le message de temps relatif internationalisé. Les valeurs possibles sont&nbsp;: `"year"`, `"quarter"`, `"month"`, `"week"`, `"day"`, `"hour"`, `"minute"`, `"second"`. Les formes plurielles sont également autorisées.

### Valeur de retour

Un tableau ({{JSxRef("Array")}}) d'objets contenant le temps relatif formaté en parties. Chaque objet a deux ou trois propriétés, `type`, `value` et éventuellement `unit`, chacune contenant une chaîne de caractères. La concaténation des valeurs de `value`, dans l'ordre fourni, donnera la même chaîne de caractères que {{JSxRef("Intl/RelativeTimeFormat/format", "format()")}}. Les parties peuvent être considérées comme directement obtenues en appelant {{JSxRef("Intl/NumberFormat/formatToParts", "Intl.NumberFormat.prototype.formatToParts()")}} avec la valeur numérique, en passant uniquement l'option `numberingSystem`, puis en ajoutant des jetons supplémentaires de type `literal`, tels que `"in "`, `" days ago"`, etc. Tous les jetons produits par le `NumberFormat` ont une propriété supplémentaire `unit`, qui est la forme singulière de l'unité d'entrée&nbsp;; cela est destiné à un usage programmatique et n'est pas localisé. L'unité localisée est sortie comme partie d'un jeton littéral.

Lorsque `options.numeric` est `"auto"`, et qu'il existe une chaîne de caractères spéciale pour la valeur, le tableau retourné est un seul jeton littéral.

## Exemples

### Utiliser la méthode `formatToParts()`

```js
const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

// Formatage d'une valeur relative utilisant l'unité jour
rtf.formatToParts(-1, "day");
// [{ type: "literal", value: "yesterday"}]

rtf.formatToParts(100, "day");
// [
//   { type: "literal", value: "in " },
//   { type: "integer", value: "100", unit: "day" },
//   { type: "literal", value: " days" }
// ]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.RelativeTimeFormat")}}
- La méthode {{JSxRef("Intl/RelativeTimeFormat/format", "Intl.RelativeTimeFormat.prototype.format()")}}
