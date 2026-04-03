---
title: "Temporal.ZonedDateTime : méthode round()"
short-title: round()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/round
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`round()`** des instances de {{JSxRef("Temporal.ZonedDateTime")}} retourne un nouvel objet `Temporal.ZonedDateTime` représentant cette date et heure arrondie à l'unité donnée.

## Syntaxe

```js-nolint
round(smallestUnit)
round(options)
```

### Paramètres

- `smallestUnit`
  - : Une chaîne de caractères représentant l'option [`smallestUnit`](#smallestunit_2). Il s'agit d'une surcharge de commodité, donc `round(smallestUnit)` est équivalent à `round({ smallestUnit })`, où `smallestUnit` est une chaîne de caractères.
- `options`
  - : Un objet contenant tout ou partie des propriétés suivantes (dans l'ordre où elles sont récupérées et validées)&nbsp;:
    - `roundingIncrement` {{Optional_Inline}}
      - : Un nombre (tronqué à un entier) représentant l'incrément d'arrondi dans l'unité `smallestUnit` donnée. La valeur par défaut est `1`. Pour toutes les valeurs de `smallestUnit` sauf `"day"`, l'incrément doit être un diviseur de la valeur maximale de l'unité&nbsp;; par exemple, si l'unité est l'heure, l'incrément doit être un diviseur de 24 et ne doit pas être 24 lui-même, ce qui signifie qu'il peut être 1, 2, 3, 4, 6, 8 ou 12. Pour `"day"`, l'incrément doit être 1.
    - `roundingMode` {{Optional_Inline}}
      - : Une chaîne de caractères indiquant comment arrondir la partie fractionnaire de `smallestUnit`. Voir [`Intl.NumberFormat()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingmode). La valeur par défaut est `"halfExpand"`.
    - `smallestUnit`
      - : Une chaîne de caractères représentant la plus petite unité à inclure dans le résultat. La valeur doit être l'une des suivantes&nbsp;: `"day"`, `"hour"`, `"minute"`, `"second"`, `"millisecond"`, `"microsecond"`, `"nanosecond"` ou leurs formes plurielles. Pour les unités supérieures à `"nanosecond"`, les parties fractionnaires de `smallestUnit` seront arrondies selon les paramètres `roundingIncrement` et `roundingMode`.

### Valeur de retour

Un nouvel objet {{JSxRef("Temporal.ZonedDateTime")}} représentant cette date et heure arrondie à l'unité donnée, où toutes les unités inférieures à `smallestUnit` sont mises à zéro.

Si `smallestUnit` vaut `"day"`, la date et heure retournée sera le [début de la journée](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/startOfDay) de cette date ou du jour suivant, selon la valeur de `roundingMode` et la distance à ces deux instants. Sinon, l'arrondi est d'abord effectué sur son `PlainDateTime` (comme {{JSxRef("Temporal/PlainDateTime/round", "Temporal.PlainDateTime.prototype.round()")}}), puis réinterprété dans le même fuseau horaire, avec `disambiguation: "compatible", offset: "prefer"`. Voir [ambiguïté et écarts entre l'heure locale et l'heure UTC](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#ambiguïté_et_écarts_lors_du_passage_de_lheure_locale_à_lutc) et [ambiguïté du décalage](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#ambiguïté_du_décalage).

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si l'une des options est invalide.

## Exemples

### Arrondir les petites unités

```js
const zdt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:34:56.123456789[America/New_York]",
);
const nearestMillisecond = zdt.round("millisecond");
console.log(nearestMillisecond.toString()); // 2021-07-01T12:34:56.123-04:00[America/New_York]

const nearestHalfHour = zdt.round({
  smallestUnit: "minute",
  roundingIncrement: 30,
});
console.log(nearestHalfHour.toString()); // 2021-07-01T12:30:00-04:00[America/New_York]

const nextDay = zdt.round({ smallestUnit: "day", roundingMode: "ceil" });
console.log(nextDay.toString()); // 2021-07-02T00:00:00-04:00[America/New_York]
```

### Ambiguïté après l'arrondi

Il est possible que la date et heure arrondie soit ambiguë dans le fuseau horaire donné. L'ambiguïté est toujours résolue avec `disambiguation: "compatible", offset: "prefer"`. Voici un exemple rapide&nbsp;:

```js
const zdt = Temporal.ZonedDateTime.from(
  "2024-03-10T01:00:00-05:00[America/New_York]",
);
const rounded = zdt.round({ smallestUnit: "hour", roundingIncrement: 2 });
// Le résultat devrait être 2024-03-10T02:00:00-05:00[America/New_York],
// mais cette heure n'existe pas. `disambiguation: "compatible"` indique
// de se déplacer d'une heure en avant.
console.log(rounded.toString()); // 2024-03-10T03:00:00-04:00[America/New_York]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.ZonedDateTime")}}
