---
title: Intl.DisplayNames
slug: Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

L'objet **`Intl.DisplayNames`** permet la traduction cohérente des noms de langues, de régions et de systèmes d'écriture.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Intl.DisplayNames")}}

```js interactive-example
const regionNamesInFrench = new Intl.DisplayNames(["fr"], { type: "region" });
const regionNamesInTraditionalChinese = new Intl.DisplayNames(["zh-Hant"], {
  type: "region",
});

console.log(regionNamesInFrench.of("FR"));
// Expected output: "France"

console.log(regionNamesInTraditionalChinese.of("FR"));
// Expected output: "法國"
```

## Constructeur

- {{jsxref("Intl/DisplayNames/DisplayNames", "Intl.DisplayNames()")}}
  - : Crée un nouvel objet `Intl.DisplayNames`.

## Méthodes statiques

- {{jsxref("Intl/DisplayNames/supportedLocalesOf", "Intl.DisplayNames.supportedLocalesOf()")}}
  - : Retourne un tableau contenant les langues fournies qui sont supportées sans avoir à se rabattre sur la langue locale par défaut au moment de l'exécution.

## Propriétés d'instance

Ces propriétés sont définies sur `Intl.DisplayNames.prototype` et partagées par toutes les instances de `Intl.DisplayNames`.

- {{jsxref("Object/constructor", "Intl.DisplayNames.prototype.constructor")}}
  - : La fonction constructeur qui a créé l'objet instance. Pour les instances de `Intl.DisplayNames`, la valeur initiale est le constructeur {{jsxref("Intl/DisplayNames/DisplayNames", "Intl.DisplayNames")}}.
- `Intl.DisplayNames.prototype[Symbol.toStringTag]`
  - : La valeur initiale de la propriété [`[Symbol.toStringTag]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) est la chaîne de caractères `"Intl.DisplayNames"`. Cette propriété est utilisée dans {{jsxref("Object.prototype.toString()")}}.

## Méthodes d'instance

- {{jsxref("Intl/DisplayNames/of", "Intl.DisplayNames.prototype.of()")}}
  - : Cette méthode reçoit un `code` et retourne une chaine à partir de la langue et des options fournies lors de l'instanciation de `Intl.DisplayNames`.
- {{jsxref("Intl/DisplayNames/resolvedOptions", "Intl.DisplayNames.prototype.resolvedOptions()")}}
  - : Retourne un nouvel objet dont les propriété reflètent la langue et les options de formattage calculées lors de l'initialisation de l'objet.

## Exemples

### Affichage des noms de régions

Pour créer un objet `Intl.DisplayNames` pour une langue et obtenir le nom correspondant à un code de région dans cette langue.

```js
// Obtenir le nom d'une région en anglais
let nomsRegions = new Intl.DisplayNames(["en"], { type: "region" });
nomsRegions.of("419"); // "Latin America"
nomsRegions.of("BZ"); // "Belize"
nomsRegions.of("US"); // "United States"
nomsRegions.of("BA"); // "Bosnia & Herzegovina"
nomsRegions.of("MM"); // "Myanmar (Burma)"

// Obtenir le nom d'une région en chinois traditionnel
nomsRegions = new Intl.DisplayNames(["zh-Hant"], { type: "region" });
nomsRegions.of("419"); // "拉丁美洲"
nomsRegions.of("BZ"); // "貝里斯"
nomsRegions.of("US"); // "美國"
nomsRegions.of("BA"); // "波士尼亞與赫塞哥維納"
nomsRegions.of("MM"); // "緬甸"
```

### Affichage des noms de langues

Pour créer un objet `Intl.DisplayNames` pour une langue et obtenir le nom correspondant à un code de langue (possiblement suivi d'un code de système d'écriture ou de région) dans cette langue.

```js
// Obtenir le nom d'une langue en anglais
let nomsLangues = new Intl.DisplayNames(["en"], { type: "language" });
nomsLangues.of("fr"); // "French"
nomsLangues.of("de"); // "German"
nomsLangues.of("fr-CA"); // "Canadian French"
nomsLangues.of("zh-Hant"); // "Traditional Chinese"
nomsLangues.of("en-US"); // "American English"
nomsLangues.of("zh-TW"); // "Chinese (Taiwan)"

// Obtenir le nom d'une langue en chinois traditionnel
nomsLangues = new Intl.DisplayNames(["zh-Hant"], { type: "language" });
nomsLangues.of("fr"); // "法文"
nomsLangues.of("zh"); // "中文"
nomsLangues.of("de"); // "德文"
```

### Affichage des noms de systèmes d'écriture

Pour créer un objet `Intl.DisplayNames` pour une langue et obtenir le nom correspondant à un code de système d'écriture dans cette langue.

```js
// Obtenir le nom d'un système d'écriture en anglais
let nomsScript = new Intl.DisplayNames(["en"], { type: "script" });
nomsScript.of("Latn"); // "Latin"
nomsScript.of("Arab"); // "Arabic"
nomsScript.of("Kana"); // "Katakana"

// Obtenir le nom d'un système d'écriture en chinois traditionnel
nomsScript = new Intl.DisplayNames(["zh-Hant"], { type: "script" });
nomsScript.of("Latn"); // "拉丁文"
nomsScript.of("Arab"); // "阿拉伯文"
nomsScript.of("Kana"); // "片假名"
```

### Affichage des noms de devises

Pour créer un objet `Intl.DisplayNames` pour une langue et obtenir le nom correspondant au code d'une devise.

```js
// Obtenir le nom d'une devise en anglais
let nomsDevises = new Intl.DisplayNames(["en"], { type: "currency" });
nomsDevises.of("USD"); // "US Dollar"
nomsDevises.of("EUR"); // "Euro"
nomsDevises.of("TWD"); // "New Taiwan Dollar"
nomsDevises.of("CNY"); // "Chinese Yuan"

// Obtenir le nom d'une devise en chinois traditionnel
nomsDevises = new Intl.DisplayNames(["zh-Hant"], { type: "currency" });
nomsDevises.of("USD"); // "美元"
nomsDevises.of("EUR"); // "歐元"
nomsDevises.of("TWD"); // "新台幣"
nomsDevises.of("CNY"); // "人民幣"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation de `Intl.DisplayNames` dans FormatJS <sup>(angl.)</sup>](https://formatjs.github.io/docs/polyfills/intl-displaynames/)
- {{jsxref("Intl")}}
