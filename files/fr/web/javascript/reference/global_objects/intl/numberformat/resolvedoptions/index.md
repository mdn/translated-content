---
title: Intl.NumberFormat.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions
tags:
  - Internationalisation
  - Intl
  - JavaScript
  - Méthode
  - NumberFormat
  - Prototype
  - Reference
  - i18n
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions
original_slug: Web/JavaScript/Reference/Objets_globaux/Intl/NumberFormat/resolvedOptions
---
{{JSRef}}

La méthode **`Intl.NumberFormat.prototype.resolvedOptions()`** renvoie un nouvel objet dont les propriétés correspondent aux options de locales et de format calculées à l'initialisation de l'objet {{jsxref("NumberFormat", "Intl.NumberFormat")}}.

{{EmbedInteractiveExample("pages/js/intl-numberformat-prototype-resolvedoptions.html")}}

## Syntaxe

```js
numberFormat.resolvedOptions()
```

### Valeur de retour

Un objet dont les propriétés correspondent aux options de locale et de format calculées lors de l'initialisation de l'objet {{jsxref("NumberFormat", "Intl.NumberFormat")}}.

## Description

Cette méthode renvoie un objet composé des propriétés suivantes :

- `locale`
  - : La balise de langue BCP 47 qui est utilisée. Si des extensions Unicode avaient été rajoutées à la balise BCP 47 demandée, les paires de clés-valeurs qui ont été demandées et qui sont supportées sont inscrites dans `locale`.
- `numberingSystem`
  - : La valeur requise via l'extension Unicode `"nu"` ou celle qui est utilisée par défaut.
- `style`, `useGrouping`
  - : Les valeurs fournies pour ces propriétés via l'argument `options` ou bien les valeurs par défaut.
- `currency`, `currencyDisplay`
  - : Les valeurs fournies pour ces propriétés via l'argument `options` ou bien les valeurs par défaut. Ces valeurs sont présentes uniquement si `style` vaut `"currency"`.

Un seul des deux groupes suivants est inclus dans les propriétés :

- `minimumIntegerDigits`,`minimumFractionDigits`, `maximumFractionDigits`
  - : Les valeurs fournies pour ces propriétés via l'argument `options` ou bien les valeurs par défaut. Ces propriétés ne sont présentes que si `minimumSignificantDigits` ou `maximumSignificantDigits` n'ont pas été fournies à l'argument `options`.
- `minimumSignificantDigits`,`maximumSignificantDigits`
  - : Les valeurs fournies pour ces propriétés via l'argument `options` ou bien les valeurs par défaut. Ces propriétés sont présentes si au moins une d'entre elles a été fournie via l'argument `options`.

## Exemples

### Utiliser la méthode `resolvedOptions()`

```js
var de = new Intl.NumberFormat('de-DE');
var usedOptions = de.resolvedOptions();

usedOptions.locale;                // "de-DE"
usedOptions.numberingSystem;       // "latn"
usedOption.style;                  // "decimal"
usedOptions.minimumIntegerDigits;  // 1
usedOptions.minimumFractionDigits; // 0
usedOptions.maximumFractionDigits; // 3
usedOptions.useGrouping;           // true
```

## Spécifications

| Spécification                                                                                                                                                            | État                             | Commentaires         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | -------------------- |
| {{SpecName('ES Int 1.0', '#sec-11.3.3', 'Intl.NumberFormat.prototype.resolvedOptions')}}                                                     | {{Spec2('ES Int 1.0')}} | Définition initiale. |
| {{SpecName('ES Int 2.0', '#sec-11.3.3', 'Intl.NumberFormat.prototype.resolvedOptions')}}                                                     | {{Spec2('ES Int 2.0')}} |                      |
| {{SpecName('ES Int Draft', '#sec-Intl.NumberFormat.prototype.resolvedOptions', 'Intl.NumberFormat.prototype.resolvedOptions')}} | {{Spec2('ES Int Draft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Intl.NumberFormat.resolvedOptions")}}

## Voir aussi

- {{jsxref("NumberFormat", "Intl.NumberFormat")}}
