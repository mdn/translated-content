---
title: "Intl.DurationFormat : méthode resolvedOptions()"
short-title: resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/resolvedOptions
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

La méthode **`resolvedOptions()`** des instances de {{JSxRef("Intl.DurationFormat")}} retourne un nouvel objet avec des propriétés reflétant les options calculées lors de l'initialisation de cet objet `DurationFormat`.

## Syntaxe

```js-nolint
resolvedOptions()
```

### Paramètres

Aucun.

### Valeur de retour

Un nouvel objet avec des propriétés reflétant les options calculées lors de l'initialisation de cet objet `DurationFormat`. L'objet possède les propriétés suivantes, dans l'ordre indiqué&nbsp;:

- `locale`
  - : Le {{Glossary("BCP 47 language tag", "balise BCP 47 language tag")}} pour la locale effectivement utilisée, déterminée par le processus de [négociation de la locale](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation). Seule la clé d'extension Unicode `nu`, si demandée, peut être incluse dans la sortie.
- `numberingSystem`
  - : La valeur fournie pour cette propriété dans l'argument `options`, ou en utilisant la clé d'extension Unicode `"nu"`, avec la valeur par défaut complétée si nécessaire. Il s'agit d'un [système de numérotation](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#types_de_systèmes_de_numérotation_pris_en_charge) pris en charge pour cette locale. La valeur par défaut dépend de la locale.
- `style`
  - : La valeur fournie pour cette propriété dans l'argument `options`, avec la valeur par défaut complétée si nécessaire. Elle peut être `"long"`, `"short"`, `"narrow"` ou `"digital"`. La valeur par défaut est `"short"`.
- `years`, `yearsDisplay`, `months`, `monthsDisplay`, `weeks`, `weeksDisplay`, `days`, `daysDisplay`, `hours`, `hoursDisplay`, `minutes`, `minutesDisplay`, `seconds`, `secondsDisplay`, `milliseconds`, `millisecondsDisplay`, `nanoseconds`, `nanosecondsDisplay`
  - : Les valeurs fournies pour ces propriétés dans l'argument `options`, avec les valeurs par défaut complétées si nécessaire. Pour les valeurs valides et les valeurs par défaut de chacune, voir l'argument [`options`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/DurationFormat#options) du constructeur.
- `fractionalDigits` {{Optional_Inline}}
  - : La valeur fournie pour cette propriété dans l'argument `options`. Elle n'est présente que si elle est définie dans `options`. Il s'agit d'un entier de 0 à 9 inclus.

## Exemples

### Utiliser la méthode `resolvedOptions()`

```js
const duration = new Intl.DurationFormat("en");
const usedOptions = duration.resolvedOptions();

usedOptions.locale; // "en"
usedOptions.numberingSystem; // "latn"
usedOptions.years; // "long"
usedOptions.yearsDisplay; // "auto"
usedOptions.style; // "long"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.DurationFormat")}}
- La méthode {{JSxRef("Intl.supportedValuesOf()")}}
- L'objet {{JSxRef("Intl")}}
