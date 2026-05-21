---
title: "Temporal.PlainTime : méthode round()"
short-title: round()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/round
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`round()`** des instances de {{JSxRef("Temporal.PlainTime")}} retourne un nouvel objet `Temporal.PlainTime` représentant cette heure arrondie à l'unité spécifiée.

## Syntaxe

```js-nolint
round(smallestUnit)
round(options)
```

### Paramètres

- `smallestUnit`
  - : Une chaîne de caractères représentant l'option [`smallestUnit`](#smallestunit_2). Il s'agit d'une surcharge pratique, donc `round(smallestUnit)` est équivalent à `round({ smallestUnit })`, où `smallestUnit` est une chaîne.
- `options`
  - : Un objet contenant certaines ou toutes les propriétés suivantes (dans l'ordre où elles sont récupérées et validées)&nbsp;:
    - `roundingIncrement` {{Optional_Inline}}
      - : Un nombre (tronqué à un entier) représentant l'incrément d'arrondi dans l'unité `smallestUnit` donnée. Par défaut, `1`. L'incrément doit être un diviseur de la valeur maximale de `smallestUnit`&nbsp;; par exemple, si l'unité est les heures, l'incrément doit être un diviseur de 24 et ne doit pas être 24 lui-même, ce qui signifie qu'il peut être 1, 2, 3, 4, 6, 8 ou 12.
    - `roundingMode` {{Optional_Inline}}
      - : Une chaîne de caractères définissant comment arrondir la partie fractionnaire de `smallestUnit`. Voir [`Intl.NumberFormat()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingmode). Par défaut, `"halfExpand"`.
    - `smallestUnit`
      - : Une chaîne de caractères représentant l'unité la plus petite à inclure dans la sortie. La valeur doit être l'une des suivantes&nbsp;: `"hour"`, `"minute"`, `"second"`, `"millisecond"`, `"microsecond"`, `"nanosecond"`, ou leurs formes plurielles. Pour les unités supérieures à `"nanosecond"`, les parties fractionnaires de `smallestUnit` seront arrondies selon les paramètres `roundingIncrement` et `roundingMode`.

### Valeur de retour

Un nouvel objet {{JSxRef("Temporal.PlainTime")}} représentant cette heure arrondie à l'unité donnée, où toutes les unités inférieures à `smallestUnit` sont mises à zéro.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si l'une des options est invalide.

## Exemples

### Arrondir les petites unités

```js
const time = Temporal.PlainTime.from("12:34:56.123456789");
const nearestMillisecond = time.round("millisecond");
console.log(nearestMillisecond.toString()); // 12:34:56.123

const nearestHalfHour = time.round({
  smallestUnit: "minute",
  roundingIncrement: 30,
});
console.log(nearestHalfHour.toString()); // 12:30:00

const nextHour = time.round({ smallestUnit: "hour", roundingMode: "ceil" });
console.log(nextHour.toString()); // 13:00:00
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainTime")}}
