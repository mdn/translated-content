---
title: "Temporal.Instant : méthode round()"
short-title: round()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/round
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`round()`** des instances de {{JSxRef("Temporal.Instant")}} retourne un nouvel objet `Temporal.Instant` représentant cet instant arrondi à l'unité donnée.

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
      - : Un nombre (tronqué à un entier) représentant l'incrément d'arrondi dans l'unité `smallestUnit` donnée. Par défaut, il est égal à `1`. L'incrément et `smallestUnit` doivent diviser uniformément 24 heures&nbsp;; par exemple, 45 secondes est un diviseur de 86400 secondes, et 100 minutes est un diviseur de 3600 minutes. Cela est légèrement moins strict que la méthode `round()` des autres classes, qui exigent toutes que l'incrément soit un diviseur de la valeur maximale de l'unité.
    - `roundingMode` {{Optional_Inline}}
      - : Une chaîne de caractères définissant comment arrondir la partie fractionnaire de `smallestUnit`. Voir [`Intl.NumberFormat()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingmode). Par défaut, `"halfExpand"`.
    - `smallestUnit`
      - : Une chaîne de caractères représentant l'unité la plus petite à inclure dans la sortie. La valeur doit être l'une des suivantes&nbsp;: `"hour"`, `"minute"`, `"second"`, `"millisecond"`, `"microsecond"`, `"nanosecond"`, ou leurs formes plurielles. Pour les unités supérieures à `"nanosecond"`, les parties fractionnaires de `smallestUnit` seront arrondies selon les paramètres `roundingIncrement` et `roundingMode`.

### Valeur de retour

Un nouvel objet {{JSxRef("Temporal.Instant")}} représentant cet instant arrondi à l'unité donnée, où toutes les unités inférieures à `smallestUnit` sont mises à zéro.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si l'une des options est invalide.

## Exemples

### Arrondir les petites unités

```js
const instant = Temporal.Instant.fromEpochMilliseconds(1000);
const roundedInstant = instant.round("second");
console.log(roundedInstant.epochMilliseconds); // 1000

const instant2 = instant.round("minute");
console.log(instant2.epochMilliseconds); // 0
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.Instant")}}
