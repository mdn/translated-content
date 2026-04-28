---
title: "Intl.PluralRules : méthode resolvedOptions()"
short-title: resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/resolvedOptions
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

La méthode **`resolvedOptions()`** des instances de {{JSxRef("Intl.PluralRules")}} retourne un nouvel objet dont les propriétés reflètent les options calculées lors de l'initialisation de cet objet `PluralRules`.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Intl.PluralRules.prototype.resolvedOptions()")}}

```js interactive-example
const pluralRules1 = new Intl.PluralRules("uk");
const options1 = pluralRules1.resolvedOptions();

const pluralRules2 = new Intl.PluralRules("bn");
const options2 = pluralRules2.resolvedOptions();

console.log(options1.pluralCategories);
// Résultat attendu : Array ["few", "many", "one", "other"]

console.log(options2.pluralCategories);
// Résultat attendu : Array ["one", "other"]
```

## Syntaxe

```js-nolint
resolvedOptions()
```

### Paramètres

Aucun.

### Valeur de retour

Un nouvel objet dont les propriétés reflètent les options calculées lors de l'initialisation de cet objet `PluralRules`. L'objet possède les propriétés suivantes, dans l'ordre dans lequel elles sont listées&nbsp;:

- `locale`
  - : La {{Glossary("BCP 47 language tag", "balise de langue BCP 47")}} pour la locale réellement utilisée, déterminée par le processus de [négociation de la locale](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl#identification_et_négociation_de_locale). Aucune clé d'extension Unicode ne sera incluse dans la sortie.
- `type`
  - : La valeur fournie pour cette propriété dans l'argument `options`, avec les valeurs par défaut remplies si nécessaire. Il s'agit soit de `"cardinal"`, soit de `"ordinal"`. La valeur par défaut est `"cardinal"`.
- `minimumIntegerDigits`, `minimumFractionDigits`, `maximumFractionDigits` {{Optional_Inline}}
  - : La valeur fournie pour ces propriétés dans l'argument `options`, avec les valeurs par défaut remplies si nécessaire. Ces propriétés sont présentes uniquement si ni `minimumSignificantDigits` ni `maximumSignificantDigits` n'ont été fournis dans l'argument `options`.
- `minimumSignificantDigits`, `maximumSignificantDigits` {{Optional_Inline}}
  - : La valeur fournie pour ces propriétés dans l'argument `options`, avec les valeurs par défaut remplies si nécessaire. Ces propriétés sont présentes uniquement si au moins l'une d'entre elles a été fournie dans l'argument `options`.
- `pluralCategories`
  - : Un tableau ({{JSxRef("Array")}}) de catégories de pluriel utilisées par la locale donnée, sélectionnées parmi la liste `"zero"`, `"one"`, `"two"`, `"few"`, `"many"` et `"other"`.
- `roundingIncrement`
  - : La valeur fournie pour cette propriété dans l'argument `options`, avec la valeur par défaut renseignée si nécessaire. Elle peut prendre l'une des valeurs `1`, `2`, `5`, `10`, `20`, `25`, `50`, `100`, `200`, `250`, `500`, `1000`, `2000`, `2500` et `5000`. La valeur par défaut est `1`.
- `roundingMode`
  - : La valeur fournie pour cette propriété dans l'argument `options`, avec la valeur par défaut renseignée si nécessaire. Elle peut prendre l'une des valeurs `"ceil"`, `"floor"`, `"expand"`, `"trunc"`, `"halfCeil"`, `"halfFloor"`, `"halfExpand"`, `"halfTrunc"` et `"halfEven"`. La valeur par défaut est `"halfExpand"`.
- `roundingPriority`
  - : La valeur fournie pour cette propriété dans l'argument `options`, avec la valeur par défaut renseignée si nécessaire. Elle peut prendre l'une des valeurs `"auto"`, `"morePrecision"` ou `"lessPrecision"`. La valeur par défaut est `"auto"`.
- `trailingZeroDisplay`
  - : La valeur fournie pour cette propriété dans l'argument `options`, avec la valeur par défaut renseignée si nécessaire. Elle peut prendre l'une des valeurs `"auto"` ou `"stripIfInteger"`. La valeur par défaut est `"auto"`.

## Exemples

### Utiliser la méthode `resolvedOptions()`

Le code ci-dessous montre la construction d'un objet `PluralRules`, suivie de l'affichage de chacune des options résolues.

```js
// Créer une instance de PluralRules
const de = new Intl.PluralRules("de-DE", {
  maximumSignificantDigits: 2,
  trailingZeroDisplay: "auto",
});

// Résoudre les options
const usedOptions = de.resolvedOptions();
console.log(usedOptions.locale); // "de-DE"
console.log(usedOptions.pluralCategories); // Array ["one", "other"]
console.log(usedOptions.type); // "cardinal"
console.log(usedOptions.minimumIntegerDigits); // 1
console.log(usedOptions.minimumFractionDigits); // undefined (maximumSignificantDigits est défini)
console.log(usedOptions.maximumFractionDigits); // undefined (maximumSignificantDigits est défini)
console.log(usedOptions.minimumSignificantDigits); // 1
console.log(usedOptions.maximumSignificantDigits); // 2
console.log(usedOptions.roundingIncrement); // 1
console.log(usedOptions.roundingMode); // "halfExpand"
console.log(usedOptions.roundingPriority); // "auto"
console.log(usedOptions.trailingZeroDisplay); // "auto"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.PluralRules")}}
