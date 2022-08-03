---
title: Intl.RelativeTimeFormat.prototype.formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/formatToParts
tags:
  - Internationalisation
  - Intl
  - JavaScript
  - Méthode
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/formatToParts
original_slug: Web/JavaScript/Reference/Objets_globaux/Intl/RelativeTimeFormat/formatToParts
---
{{JSRef}}

La méthode **`Intl.RelativeTimeFormat.prototype.formatToParts()`** est une méthode analogue à [`format()`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Intl.RelativeTimeFormat/format) qui renvoie un tableau d'objets contenant les différentes parties représentant le message internationalisé pour le temps relatif.

{{EmbedInteractiveExample("pages/js/intl-relativetimeformat-prototype-formattoparts.html")}}

## Syntaxe

```js
RelativeTimeFormat.formatToParts(valeur, unite)
```

### Paramètres

- `valeur`
  - : Une valeur numérique qu'on souhaite formater pour un message internationalisé exprimant un temps relatif.
- `unite`
  - : L'unité à utiliser pour le message internationalisé exprimant le temps relatif. Les valeurs possibles pour cet argument sont `"year"` (année), `"quarter"` (trimestre), `"month"` (mois), `"week"` (semaine), `"day"` (jour), `"hour"` (heure), `"minute"` (minute), `"second"` (secondes). Les formes plurielles sont également autorisées.

### Valeur de retour

Un tableau ({{jsxref("Array")}}) d'objets contenant les fragments composant la chaîne de caractères localisée et mise en forme pour exprimer le temps relatif.

## Description

La méthode `Intl.RelativeTimeFormat.prototype.formatToParts()` est une méthode analogue à la méthode `format()` mais renvoie un tableau d'objets représentant chacun une partie du message internationalisé. Ces objets ont deux propriétés : `type` et `value`. Si un des composants provient de `NumberFormat`, il aura une propriété `unit` indiquant l'unité utilisée pour le formatage.

## Exemples

```js
const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

// Format relative time using the day unit.
rtf.formatToParts(-1, "day");
// > [{ type: "literal", value: "yesterday"}]

rtf.formatToParts(100, "day");
// > [{ type: "literal", value: "in " },
      { type: "integer", value: "100", unit: "day" },
      { type: "literal", value: " days" }]
```

## Spécifications

| Spécifications                                                                                                                                  | État                    | Commentaires |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ------------ |
| [Proposition pour `Intl.RelativeTime`](https://tc39.github.io/proposal-intl-relative-time/#sec-Intl.RelativeTimeFormat.prototype.formatToParts) | Proposition de niveau 3 |              |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Intl.RelativeTimeFormat.formatToParts")}}

## Voir aussi

- {{jsxref("RelativeTimeFormat", "Intl.RelativeTimeFormat")}}
