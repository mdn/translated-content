---
title: Intl.DisplayNames
slug: Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames
tags:
  - Class
  - DisplayNames
  - Internationalization
  - Intl
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames
---
{{JSRef}}

L'objet **`Intl.DisplayNames`** est un constructeur d'objets qui permettent de fournir des traductions des noms de langues, régions et systèmes d'écriture.

{{EmbedInteractiveExample("pages/js/intl-displaynames.html")}}

## Constructeur

- [`Intl.DisplayNames()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/DisplayNames)
  - : Crée un nouvel objet `Intl.DisplayNames`.

## Méthodes statiques

- [`Intl.DisplayNames.supportedLocalesOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/supportedLocalesOf)
  - : Retourne un tableau contenant les langues fournies qui sont supportées sans avoir à se rabattre sur la langue locale par défaut au moment de l'exécution.

## Méthodes des instances

- [`Intl.DisplayNames.prototype.of()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/of)
  - : Cette méthodes reçoit un `code` et retourne une chaine à partir sur la langue et les options fournies lors de l'instanciation de [`Intl.DisplayNames`](#).
- [`Intl.DisplayNames.prototype.resolvedOptions()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/resolvedOptions)
  - : Retourne un nouvel objet dont les propriété feflètent la langue et les options de formattage calculées lors de l'initialisation de l'objet.

## Exemples

### Affichage des noms de régions

Pour créer un objet `Intl.DisplayNames` pour une langue et obtenir le nom correspondant à un code de région dans cette langue.

```js
// Obtenir le nom d'une région en anglais
let nomsRégions = new Intl.DisplayNames(['en'], {type: 'region'});
nomsRégions.of('419'); // "Latin America"
nomsRégions.of('BZ');  // "Belize"
nomsRégions.of('US');  // "United States"
nomsRégions.of('BA');  // "Bosnia & Herzegovina"
nomsRégions.of('MM');  // "Myanmar (Burma)"

// Obtenir le nom d'une région en chinois traditionnel
nomsRégions = new Intl.DisplayNames(['zh-Hant'], {type: 'region'});
nomsRégions.of('419'; // "拉丁美洲"
nomsRégions.of('BZ'); // "貝里斯"
nomsRégions.of('US'); // "美國"
nomsRégions.of('BA'); // "波士尼亞與赫塞哥維納"
nomsRégions.of('MM'); // "緬甸"
```

### Affichage des noms de langues

Pour créer un objet `Intl.DisplayNames` pour une langue et obtenir le nom correspondant à un code de langue (possiblement suivi d'un code de système d'écriture ou de région) dans cette langue.

```js
// Obtenir le nom d'une langue en anglais
let nomsLangues= new Intl.DisplayNames(['en'], {type: 'language'});
nomsLangues.of('fr');      // "French"
nomsLangues.of('de');      // "German"
nomsLangues.of('fr-CA');   // "Canadian French"
nomsLangues.of('zh-Hant'); // "Traditional Chinese"
nomsLangues.of('en-US');   // "American English"
nomsLangues.of('zh-TW');   // "Chinese (Taiwan)"

// Obtenir le nom d'une langue en chinois traditionnel
nomsLangues = new Intl.DisplayNames(['zh-Hant'], {type: 'language'});
nomsLangues.of('fr'); // "法文"
nomsLangues.of('zh'); // "中文"
nomsLangues.of('de'); // "德文"
```

### Affichage des noms de systèmes d'écriture

To create an `Intl.DisplayNames` for a locale and get the display name for a script code.

Pour créer un objet `Intl.DisplayNames` pour une langue et obtenir le nom correspondant à un code de système d'écriture dans cette langue.

```js
// Obtenir le nom d'un système d'écriture en anglais
let nomsSystèmes = new Intl.DisplayNames(['en'], {type: 'script'});
nomsSystèmes.of('Latn'); // "Latin"
nomsSystèmes.of('Arab'); // "Arabic"
nomsSystèmes.of('Kana'); // "Katakana"

// Obtenir le nom d'un système d'écriture en chinois traditionnel
nomsSystèmes = new Intl.DisplayNames(['zh-Hant'], {type: 'script'});
nomsSystèmes.of('Latn'); // "拉丁文"
nomsSystèmes.of('Arab'); // "阿拉伯文"
nomsSystèmes.of('Kana'); // "片假名"
```

### Affichage des noms de devises

Pour créer un objet `Intl.DisplayNames` pour une langue et obtenir le nom correspondant au code d'une devise.

```js
// Obtenir le nom d'une devise in English
let nomsDevises = new Intl.DisplayNames(['en'], {type: 'currency'});
nomsDevises.of('USD'); // "US Dollar"
nomsDevises.of('EUR'); // "Euro"
nomsDevises.of('TWD'); // "New Taiwan Dollar"
nomsDevises.of('CNY'); // "Chinese Yuan"

// Obtenir le nom d'une devise in Traditional Chinese
nomsDevises = new Intl.DisplayNames(['zh-Hant'], {type: 'currency'});
nomsDevises.of('USD'); // "美元"
nomsDevises.of('EUR'); // "歐元"
nomsDevises.of('TWD'); // "新台幣"
nomsDevises.of('CNY'); // "人民幣"
```

## Spécifications

| Spécification                                                                                            |
| -------------------------------------------------------------------------------------------------------- |
| {{SpecName('Intl.DisplayNames', '#intl-displaynames-objects', 'DisplayNames')}} |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Intl.DisplayNames")}}

## Voir aussi

- {{jsxref("Intl")}}
