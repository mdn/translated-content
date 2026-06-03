---
title: "Temporal.PlainDateTime : méthode round()"
short-title: round()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/round
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`round()`** des instances de {{JSxRef("Temporal.PlainDateTime")}} retourne un nouvel objet `Temporal.PlainDateTime` représentant cette date-heure arrondie à l'unité donnée.

## Syntaxe

```js-nolint
round(smallestUnit)
round(options)
```

### Paramètres

- `smallestUnit`
  - : Une chaîne de caractères représentant l'option [`smallestUnit`](#smallestunit_2). Il s'agit d'une surcharge pratique, donc `round(smallestUnit)` est équivalent à `round({ smallestUnit })`, où `smallestUnit` est une chaîne de caractères.
- `options`
  - : Un objet contenant certaines ou toutes les propriétés suivantes (dans l'ordre où elles sont récupérées et validées)&nbsp;:
    - `roundingIncrement` {{Optional_Inline}}
      - : Un nombre (tronqué à un entier) représentant l'incrément d'arrondi dans l'unité `smallestUnit` donnée. Par défaut, `1`. Pour toutes les valeurs de `smallestUnit` sauf `"day"`, l'incrément doit être un diviseur de la valeur maximale de l'unité&nbsp;; par exemple, si l'unité est les heures, l'incrément doit être un diviseur de 24 et ne doit pas être 24 lui-même, ce qui signifie qu'il peut être 1, 2, 3, 4, 6, 8 ou 12. Pour `"day"`, l'incrément doit être 1.
    - `roundingMode` {{Optional_Inline}}
      - : Une chaîne de caractères définissant comment arrondir la partie fractionnaire de `smallestUnit`. Voir [`Intl.NumberFormat()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingmode). Par défaut, `"halfExpand"`.
    - `smallestUnit`
      - : Une chaîne de caractères représentant l'unité la plus petite à inclure dans la sortie. La valeur doit être l'une des suivantes&nbsp;: `"day"`, `"hour"`, `"minute"`, `"second"`, `"millisecond"`, `"microsecond"`, `"nanosecond"`, ou leurs formes plurielles. Pour les unités plus grandes que `"nanosecond"`, les parties fractionnaires de `smallestUnit` seront arrondies selon les paramètres `roundingIncrement` et `roundingMode`.

### Valeur de retour

Un nouvel objet {{JSxRef("Temporal.PlainDateTime")}} représentant cette valeur de date et d'heure arrondie à l'unité donnée, où toutes les unités plus petites que `smallestUnit` sont mises à zéro.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si l'une des options est invalide.

## Exemples

### Arrondir les petites unités

```js
const dt = Temporal.PlainDateTime.from("2021-07-01T12:34:56.123456789");
const nearestMillisecond = dt.round("millisecond");
console.log(nearestMillisecond.toString()); // 2021-07-01T12:34:56.123

const nearestHalfHour = dt.round({
  smallestUnit: "minute",
  roundingIncrement: 30,
});
console.log(nearestHalfHour.toString()); // 2021-07-01T12:30:00

const nextDay = dt.round({ smallestUnit: "day", roundingMode: "ceil" });
console.log(nextDay.toString()); // 2021-07-02T00:00:00
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainDateTime")}}
