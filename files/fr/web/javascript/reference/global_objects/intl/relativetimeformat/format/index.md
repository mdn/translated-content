---
title: Intl.RelativeTimeFormat.prototype.format()
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/format
tags:
  - Internationalisation
  - Intl
  - JavaScript
  - Méthode
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/format
original_slug: Web/JavaScript/Reference/Objets_globaux/Intl/RelativeTimeFormat/format
---
{{JSRef}}La méthode **`Intl.RelativeTimeFormat.prototype.format()`** permet de formater une valeur avec une unité selon des options de locale et de formatage stockées dans l'objet {{jsxref("RelativeTimeFormat")}}.{{EmbedInteractiveExample("pages/js/intl-relativetimeformat-prototype-format.html")}}

## Syntaxe

```js
RelativeTimeFormat.format(valeur, unite)
```

### Paramètres

- `valeur`
  - : Une valeur numérique qu'on souhaite utiliser pour exprimer un temps relatif dans un message internationalisé.
- `unite`
  - : L'unité à utiliser pour le message internationalisé exprimant le temps relatif. Les valeurs possibles pour cet argument sont `"year"` (année), `"quarter"` (trimestre), `"month"` (mois), `"week"` (semaine), `"day"` (jour), `"hour"` (heure), `"minute"` (minute), `"second"` (secondes). Les formes plurielles sont également autorisées.

## Description

La fonction renvoyée par l'accesseur `format` permet de formater une valeur et une unité en une chaîne de caractères en prenant en compte la locale et les options de formatage associées à l'objet {{jsxref("RelativeTimeFormat", "Intl.RelativeTimeFormat")}} utilisé.

## Exemples

### Utilisation simple de `format`

L'exemple suivant illustre comment créer un outil de formatage pour les valeurs de temps relatifs en anglais.

```js
// On crée un outil de formatage pour les valeurs exprimant
// les temps relatifs en anglais, avec les valeurs par défaut
// utilisées explicitement.
const rtf = new Intl.RelativeTimeFormat("en", {
    localeMatcher: "best fit", // autre valeur possible : "lookup"
    numeric: "always", // autre valeur possible : "auto"
    style: "long", // autres valeurs possibles : "short" ou "narrow"
});

// Formatage d'une valeur relative négative.
rtf.format(-1, "day");
// > "1 day ago"

// Formatage d'une valeur relative positive.
rtf.format(1, "day");
// > "in 1 day"
```

### Utiliser l'option `auto`

Si on passe l'option `numeric:auto`, c'est la chaîne de caractères `yesterday` ou `tomorrow` qui sera produite (en anglais) plutôt que `1 day ago` ou `in 1 day`. Cela permet de n'avoir pas nécessairement une valeur numérique en résultat.

```js
// On crée un formateur en anglais avec l'option
// numeric: "auto".
const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

// Formatage d'une valeur relative négative.
rtf.format(-1, "day");
// > "yesterday"

// Formatage d'une valeur relative positive.
rtf.format(1, "day");
// > "tomorrow"
```

## Spécifications

| Spécification                                                                                                                            | État                    | Commentaires |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ------------ |
| [Proposition pour `Intl.RelativeTime`](https://tc39.github.io/proposal-intl-relative-time/#sec-Intl.RelativeTimeFormat.prototype.format) | Proposition de niveau 3 |              |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Intl.RelativeTimeFormat.format")}}
