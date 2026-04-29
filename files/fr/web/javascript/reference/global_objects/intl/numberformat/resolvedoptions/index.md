---
title: "Intl.NumberFormat : méthode resolvedOptions()"
short-title: resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

La méthode **`resolvedOptions()`** des instances de {{JSxRef("Intl.NumberFormat")}} retourne un nouvel objet dont les propriétés reflètent les options calculées lors de l'initialisation de cet objet `NumberFormat`.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Intl.NumberFormat.prototype.resolvedOptions()")}}

```js interactive-example
const numberFormat = new Intl.NumberFormat("de-DE");
const options = numberFormat.resolvedOptions();

console.log(options.locale);
// Résultat attendu : "de-DE"

console.log(options.numberingSystem);
// Résultat attendu : "latn"

console.log(options.style);
// Résultat attendu : "decimal"
```

## Syntaxe

```js-nolint
resolvedOptions()
```

### Paramètres

Aucun.

### Valeur de retour

Un nouvel objet dont les propriétés reflètent les options calculées lors de l'initialisation de cet objet `NumberFormat`. L'objet possède les propriétés suivantes, dans l'ordre dans lequel elles sont listées&nbsp;:

- `locale`
  - : La {{Glossary("BCP 47 language tag", "balise de langue BCP 47")}} pour la locale réellement utilisée, déterminée par le processus de [négociation de la locale](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl#identification_et_négociation_de_locale). Seule la clé d'extension Unicode `nu`, si elle est demandée, peut être incluse dans la sortie.
- `numberingSystem`
  - : La valeur fournie pour cette propriété dans l'argument `options`, ou en utilisant la clé d'extension Unicode `"nu"`, avec la valeur par défaut remplie si nécessaire. Il s'agit d'un [système de numération](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#types_de_systèmes_de_numération_pris_en_charge) pris en charge pour cette locale. La valeur par défaut dépend de la locale.
- `style`
  - : La valeur fournie pour cette propriété dans l'argument `options`, avec la valeur par défaut remplie si nécessaire. Il s'agit soit de `"decimal"`, `"percent"`, `"currency"`, ou `"unit"`. La valeur par défaut est `"decimal"`.
- `currency` {{Optional_Inline}}
  - : La valeur fournie pour cette propriété dans l'argument `options`. Elle n'est présente que si `style` est `"currency"`. Il s'agit d'un code de devise ISO 4217&nbsp;; voir [`Intl.supportedValuesOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#identifiants_de_monnaies_pris_en_charge). Elle est requise si `style` est `"currency"`, donc il n'y a pas de valeur par défaut.
- `currencyDisplay` {{Optional_Inline}}
  - : La valeur fournie pour cette propriété dans l'argument `options`, avec la valeur par défaut remplie si nécessaire. Elle n'est présente que si `style` est `"currency"`. Il s'agit soit de `"code"`, `"symbol"`, `"narrowSymbol"` ou `"name"`. La valeur par défaut est `"symbol"`.
- `currencySign` {{Optional_Inline}}
  - : La valeur fournie pour cette propriété dans l'argument `options`, avec la valeur par défaut remplie si nécessaire. Elle n'est présente que si `style` est `"currency"`. Il s'agit soit de `"standard"` ou `"accounting"`. La valeur par défaut est `"standard"`.
- `unit` {{Optional_Inline}}
  - : La valeur fournie pour cette propriété dans l'argument `options`. Elle n'est présente que si `style` est `"unit"`. Il s'agit d'un [identifiant d'unité sanctionné <sup>(angl.)</sup>](https://tc39.es/ecma402/#table-sanctioned-single-unit-identifiers) de la [liste complète CLDR <sup>(angl.)</sup>](https://github.com/unicode-org/cldr/blob/main/common/validity/unit.xml). Elle est requise si `style` est `"unit"`, donc il n'y a pas de valeur par défaut.
- `unitDisplay` {{Optional_Inline}}
  - : La valeur fournie pour cette propriété dans l'argument `options`, avec la valeur par défaut remplie si nécessaire. Elle n'est présente que si `style` est `"unit"`. Il s'agit soit de `"short"`, `"narrow"` ou `"long"`. La valeur par défaut est `"short"`.
- `minimumIntegerDigits`
  - : La valeur fournie pour cette propriété dans l'argument `options`, avec la valeur par défaut remplie si nécessaire. Il s'agit d'un entier compris entre `1` et `21`. La valeur par défaut est `1`.
- `minimumFractionDigits`, `maximumFractionDigits` {{Optional_Inline}}
  - : La valeur fournie pour ces propriétés dans l'argument `options`, avec les valeurs par défaut remplies si nécessaire. Elles ne sont présentes que si nécessaire&nbsp;; voir [options de chiffres](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options_de_chiffres). Il s'agit d'un entier compris entre `0` et `100`.
- `minimumSignificantDigits`, `maximumSignificantDigits` {{Optional_Inline}}
  - : La valeur fournie pour ces propriétés dans l'argument `options`, avec les valeurs par défaut remplies si nécessaire. Elles ne sont présentes que si nécessaire&nbsp;; voir [options de chiffres](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options_de_chiffres). Il s'agit d'un entier compris entre `1` et `21`.
- `useGrouping`
  - : La valeur fournie pour cette propriété dans l'argument `options`, avec la valeur par défaut remplie si nécessaire, et avec certaines valeurs normalisées. Il s'agit soit de `"always"`, `"auto"`, `"min2"`, ou du booléen `false`. La valeur par défaut est `"min2"` si `notation` est `"compact"`, et sinon `"auto"`.
- `notation`
  - : La valeur fournie pour cette propriété dans l'argument `options`, avec la valeur par défaut remplie si nécessaire. Il s'agit soit de `"standard"`, `"scientific"`, `"engineering"` ou `"compact"`. La valeur par défaut est `"standard"`.
- `compactDisplay` {{Optional_Inline}}
  - : La valeur fournie pour cette propriété dans l'argument `options`, avec la valeur par défaut remplie si nécessaire. Elle n'est présente que si `notation` est `"compact"`. Il s'agit soit de `"short"` ou `"long"`. La valeur par défaut est `"short"`.
- `signDisplay`
  - : La valeur fournie pour cette propriété dans l'argument `options`, avec la valeur par défaut remplie si nécessaire. Il s'agit soit de `"auto"`, `"always"`, `"exceptZero"`, `"negative"` ou `"never"`. La valeur par défaut est `"auto"`.
- `roundingIncrement`
  - : La valeur fournie pour cette propriété dans l'argument `options`, avec la valeur par défaut remplie si nécessaire. Il s'agit de l'une des valeurs suivantes&nbsp;: `1`, `2`, `5`, `10`, `20`, `25`, `50`, `100`, `200`, `250`, `500`, `1000`, `2000`, `2500` ou `5000`. La valeur par défaut est `1`.
- `roundingMode`
  - : La valeur fournie pour cette propriété dans l'argument `options`, avec la valeur par défaut remplie si nécessaire. Il s'agit soit de `"ceil"`, `"floor"`, `"expand"`, `"trunc"`, `"halfCeil"`, `"halfFloor"`, `"halfExpand"`, `"halfTrunc"` ou `"halfEven"`. La valeur par défaut est `"halfExpand"`.
- `roundingPriority`
  - : La valeur fournie pour cette propriété dans l'argument `options`, avec la valeur par défaut remplie si nécessaire. Il s'agit soit de `"auto"`, `"morePrecision"` ou `"lessPrecision"`. La valeur par défaut est `"auto"`.
- `trailingZeroDisplay`
  - : La valeur fournie pour cette propriété dans l'argument `options`, avec la valeur par défaut remplie si nécessaire. Il s'agit soit de `"auto"` ou `"stripIfInteger"`. La valeur par défaut est `"auto"`.

## Exemples

### Utiliser la méthode `resolvedOptions()`

```js
// Créer un NumberFormat
const de = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
  roundingIncrement: 5,
  roundingMode: "halfCeil",
});

// Résoudre les options
const usedOptions = de.resolvedOptions();
console.log(usedOptions.locale); // "de-DE"
console.log(usedOptions.numberingSystem); // "latn"
console.log(usedOptions.compactDisplay); // undefined ("notation" n'est pas défini sur "compact")
console.log(usedOptions.currency); // "USD"
console.log(usedOptions.currencyDisplay); // "symbol"
console.log(usedOptions.currencySign); // "standard"
console.log(usedOptions.minimumIntegerDigits); // 1
console.log(usedOptions.minimumFractionDigits); // 2
console.log(usedOptions.maximumFractionDigits); // 2
console.log(usedOptions.minimumSignificantDigits); // undefined (maximumFractionDigits est défini)
console.log(usedOptions.maximumSignificantDigits); // undefined (maximumFractionDigits est défini)
console.log(usedOptions.notation); // "standard"
console.log(usedOptions.roundingIncrement); // 5
console.log(usedOptions.roundingMode); // halfCeil
console.log(usedOptions.roundingPriority); // auto
console.log(usedOptions.signDisplay); // "auto"
console.log(usedOptions.style); // "currency"
console.log(usedOptions.trailingZeroDisplay); // auto
console.log(usedOptions.useGrouping); // auto
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.NumberFormat")}}
