---
title: "Intl.DurationFormat : méthode format()"
short-title: format()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/format
l10n:
  sourceCommit: c43e46090257fbfd33c4dd5cac0cdbd1d5d1c274
---

La méthode **`format()`** des instances de {{JSxRef("Intl.DurationFormat")}} met en forme une durée selon la locale et les options de mise en forme de cet objet {{JSxRef("Intl.DurationFormat")}}.

## Syntaxe

```js-nolint
format(duration)
```

### Paramètres

- `duration`
  - : L'objet de durée à mettre en forme. Il doit inclure certaines ou toutes les propriétés suivantes&nbsp;: `years`, `months`, `weeks`, `days`, `hours`, `minutes`, `seconds`, `milliseconds`, `microseconds`, `nanoseconds`. La valeur de chaque propriété doit être un entier, et leurs signes doivent être cohérents. Cela peut être un objet {{JSxRef("Temporal.Duration")}}&nbsp;; voir la documentation de {{JSxRef("Temporal.Duration")}} pour plus d'informations sur ces propriétés.

### Valeur de retour

Une chaîne de caractères représentant la `duration` donnée, mise en forme selon la locale et les options de mise en forme de cet objet {{JSxRef("Intl.DurationFormat")}}.

> [!NOTE]
> La plupart du temps, la mise en forme retournée par `format()` est cohérente. Cependant, le résultat peut varier selon les implémentations, même au sein d'une même locale — ces variations sont prévues et autorisées par la spécification. Il se peut aussi que le résultat ne soit pas celui attendu. Par exemple, la chaîne peut utiliser des espaces insécables ou être entourée de caractères de contrôle bidirectionnels. Vous ne devez pas comparer les résultats de `format()` à des constantes codées en dur.

## Exemples

### Utiliser la méthode `format()`

L'exemple suivant montre comment créer un formateur de durée en utilisant l'anglais.

```js
const duration = {
  years: 1,
  months: 2,
  weeks: 3,
  days: 3,
  hours: 4,
  minutes: 5,
  seconds: 6,
  milliseconds: 7,
  microseconds: 8,
  nanoseconds: 9,
};

// Sans options, le style par défaut est "short"
new Intl.DurationFormat("en").format(duration);
// "1 yr, 2 mths, 3 wks, 3 days, 4 hr, 5 min, 6 sec, 7 ms, 8 μs, 9 ns"

// Avec le style défini sur "long"
new Intl.DurationFormat("en", { style: "long" }).format(duration);
// "1 year, 2 months, 3 weeks, 3 days, 4 hours, 5 minutes, 6 seconds, 7 milliseconds, 8 microseconds, 9 nanoseconds"

// Avec le style défini sur "narrow"
new Intl.DurationFormat("en", { style: "narrow" }).format(duration);
// "1y 2mo 3w 3d 4h 5m 6s 7ms 8μs 9ns"
```

### Utiliser `format()` avec différentes `locales` et `styles`

```js
const duration = {
  hours: 1,
  minutes: 46,
  seconds: 40,
};

// Avec le style défini sur "long" et la locale "fr-FR"
new Intl.DurationFormat("fr-FR", { style: "long" }).format(duration);
// "1 heure, 46 minutes et 40 secondes"

// Avec le style défini sur "short" et la locale "en"
new Intl.DurationFormat("en", { style: "short" }).format(duration);
// "1 hr, 46 min and 40 sec"

// Avec le style défini sur "narrow" et la locale "pt"
new Intl.DurationFormat("pt", { style: "narrow" }).format(duration);
// "1 h 46 min 40 s"

// Avec le style défini sur "digital" et la locale "en"
new Intl.DurationFormat("en", { style: "digital" }).format(duration);
// "1:46:40"

// Avec le style défini sur "digital", la locale "en" et les heures sur "long"
new Intl.DurationFormat("en", { style: "digital", hours: "long" }).format(
  duration,
);
// "1 hour, 46:40"
```

### Utiliser `format()` avec l'option `fractionalDigits`

```js
const duration = {
  hours: 11,
  minutes: 30,
  seconds: 12,
  milliseconds: 345,
  microseconds: 600,
};

new Intl.DurationFormat("en", { style: "digital" }).format(duration);
// "11:30:12.3456"

new Intl.DurationFormat("en", { style: "digital", fractionalDigits: 5 }).format(
  duration,
);
// "11:30:12.34560"

new Intl.DurationFormat("en", { style: "digital", fractionalDigits: 3 }).format(
  duration,
);
// "11:30:12.346"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.DurationFormat")}}
- L'objet {{JSxRef("Temporal.Duration")}}
