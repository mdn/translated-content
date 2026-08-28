---
title: "Intl.RelativeTimeFormat : méthode format()"
short-title: format()
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/format
l10n:
  sourceCommit: 1474534461893381d54c502e655f334b5568e597
---

La méthode **`format()`** des instances de {{JSxRef("Intl.RelativeTimeFormat")}} permet de formater une `valeur` et une `unité` en fonction de la locale et des options de formatage de cet objet `Intl.RelativeTimeFormat`.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Intl.RelativeTimeFormat.prototype.format()")}}

```js interactive-example
const rtf = new Intl.RelativeTimeFormat("en", { style: "short" });

console.log(rtf.format(3, "quarter"));
// Résultat attendu : "in 3 qtrs."

console.log(rtf.format(-1, "day"));
// Résultat attendu : "1 day ago"

console.log(rtf.format(10, "seconds"));
// Résultat attendu : "in 10 sec."
```

## Syntaxe

```js-nolint
format(value, unit)
```

### Paramètres

- `value`
  - : Valeur numérique à utiliser dans le message de temps relatif internationalisé.
- `unit`
  - : Unité à utiliser dans le message de temps relatif internationalisé. Les valeurs possibles sont&nbsp;: `"year"`, `"quarter"`, `"month"`, `"week"`, `"day"`, `"hour"`, `"minute"`, `"second"`. Les formes plurielles sont également autorisées.

### Valeur de retour

Une chaîne de caractères représentant la `valeur` et une `unité` données, formatées selon la locale et les options de formatage de cet objet {{JSxRef("Intl.RelativeTimeFormat")}}.

> [!NOTE]
> La plupart du temps, le formatage retourné par `format()` est cohérent. Cependant, le résultat peut varier entre les implémentations, même au sein de la même locale — ces variations sont prévues par la spécification et sont autorisées. Le résultat peut également ne pas être celui attendu. Par exemple, la chaîne de caractères peut utiliser des espaces insécables ou être entourée de caractères de contrôle bidirectionnels. Il ne faut pas comparer les résultats de `format()` à des constantes codées en dur.

## Exemples

### Utilisation simple de `format()`

L'exemple suivant illustre comment créer un outil de formatage pour les valeurs de temps relatifs en anglais.

```js
// Créer un formateur de temps relatif dans votre locale
// avec les valeurs par défaut passées explicitement.
const rtf = new Intl.RelativeTimeFormat("en", {
  localeMatcher: "best fit", // autres valeurs possibles : "lookup"
  numeric: "always", // autres valeurs possibles : "auto"
  style: "long", // autres valeurs possibles : "short" ou "narrow"
});

// Formatage d'une valeur relative négative.
rtf.format(-1, "day"); // "1 day ago"

// Formatage d'une valeur relative positive.
rtf.format(1, "day"); // "in 1 day"
```

### Utiliser l'option `auto`

Si l'option `numeric: "auto"` est passée, elle produit la chaîne de caractères `yesterday`, `today` ou `tomorrow` au lieu de `1 day ago`, `in 0 days` ou `in 1 day`. Cela permet de ne pas toujours avoir à utiliser des valeurs numériques dans le résultat.

```js
// Créer un formateur de temps relatif dans votre locale
// avec l'option numeric: "auto".
const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

// Formatage d'une valeur relative négative.
rtf.format(-1, "day"); // "yesterday"

rtf.format(0, "day"); // "today"

// Formatage d'une valeur relative positive.
rtf.format(1, "day"); // "tomorrow"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.RelativeTimeFormat")}}
