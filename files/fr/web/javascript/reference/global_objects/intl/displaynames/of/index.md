---
title: "Intl.DisplayNames : méthode of()"
short-title: of()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/of
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

La méthode **`of()`** des instances de {{JSxRef("Intl.DisplayNames")}} reçoit un code et retourne une chaîne de caractères selon la locale et les options définies lors de l'instanciation de cet objet `Intl.DisplayNames`.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Intl.DisplayNames.prototype.of()")}}

```js interactive-example
const regionNamesInEnglish = new Intl.DisplayNames(['en'], { type: 'region' });
const regionNamesInTraditionalChinese = new Intl.DisplayNames(['zh-Hant'], {
  type: 'region',
});

console.log(regionNamesInEnglish.of('US'));
// Résultat attendu : "United States"

console.log(regionNamesInTraditionalChinese.of('US'));
// Résultat attendu : "美國"
```

## Syntaxe

```js-nolint
of(code)
```

### Paramètres

- `code`
  - : Le `code` à fournir dépend du `type`&nbsp;:
    - Si le type est une «&nbsp;région&nbsp;», `code` doit être soit un [code de région ISO 3166 à deux lettres <sup>(angl.)</sup>](https://www.iso.org/iso-3166-country-codes.html), soit un [code de région géographique UN M49 à trois chiffres <sup>(angl.)</sup>](https://unstats.un.org/unsd/methodology/m49/). Il est nécessaire de suivre la grammaire [`unicode_region_subtag` <sup>(angl.)</sup>](https://unicode.org/reports/tr35/#unicode_region_subtag). Utilisez des codes en majuscules (par exemple, `"US"`), car les codes en minuscules (par exemple, `"us"`) peuvent ne pas fonctionner de manière fiable partout.
    - Si le type est un «&nbsp;script&nbsp;», `code` doit être un [code de script ISO 15924 à quatre lettres <sup>(angl.)</sup>](https://unicode.org/iso15924/iso15924-codes.html). Il est nécessaire de suivre la grammaire [`unicode_script_subtag` <sup>(angl.)</sup>](https://unicode.org/reports/tr35/#unicode_script_subtag).
    - Si le type est une «&nbsp;langue&nbsp;», le `code` doit correspondre au non-terminal [`unicode_language_id`](https://unicode.org/reports/tr35/#Unicode_language_identifier).
    - Si le type est une valeur «&nbsp;monétaire&nbsp;», le `code` doit être un [code de devise 4217 à trois lettres <sup>(angl.)</sup>](https://www.iso.org/iso-4217-currency-codes.html). Il doit comporter exactement trois caractères alphabétiques.
    - Si le type est un «&nbsp;champs de date et heure&nbsp;», `code` doit être l'une des valeurs suivantes&nbsp;: `"era"`, `"year"`, `"quarter"`, `"month"`, `"weekOfYear"`, `"weekday"`, `"day"`, `"dayPeriod"`, `"hour"`, `"minute"`, `"second"`, `"timeZoneName"`.
    - Si le type est un «&nbsp;calendrier&nbsp;», le `code` doit être une [clé de calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar). Il doit respecter la grammaire `type` d'un [identifiant de locale Unicode <sup>(angl.)</sup>](https://unicode.org/reports/tr35/#32-unicode-locale-identifier).

### Valeur de retour

Une chaîne de caractères formatée spécifique à une langue, ou `undefined` s'il n'y a pas de données pour l'entrée et que `fallback` est `"none"`.

> [!NOTE]
> `fallback` n'est utilisé que si `code` est structurellement valide. Voir [utiliser une fonction de repli](#utiliser_une_fonction_de_repli).

## Exemples

### Utiliser la méthode `of()`

```js
const regionNames = new Intl.DisplayNames("en", { type: "region" });
regionNames.of("419"); // "Latin America"

const languageNames = new Intl.DisplayNames("en", { type: "language" });
languageNames.of("fr"); // "French"

const currencyNames = new Intl.DisplayNames("en", { type: "currency" });
currencyNames.of("EUR"); // "Euro"

const languageNamesStandard = new Intl.DisplayNames("fr", {
  type: "language",
  languageDisplay: "standard",
});
languageNamesStandard.of("fr-CA"); // "français (Canada)"

const languageNamesDialect = new Intl.DisplayNames("fr", {
  type: "language",
  languageDisplay: "dialect",
});
languageNamesDialect.of("fr-CA"); // "français canadien"
```

### Utiliser une fonction de repli

Quand le `Intl.DisplayNames` est construit avec `fallback: "code"`, la méthode `of()` retourne le `code` si l'entrée est structurellement valide mais qu'aucune donnée n'est disponible pour cette entrée. Si `fallback` est `"none"`, `undefined` est retourné.

```js
console.log(
  new Intl.DisplayNames("en", { type: "region", fallback: "code" }).of("ZL"),
); // "ZL"

console.log(
  new Intl.DisplayNames("en", { type: "region", fallback: "none" }).of("ZL"),
); // undefined
```

Cependant, cela ne s'applique que si le `code` est structurellement valide. Par exemple, si `type` est `"region"` mais que `code` ne suit pas la grammaire `unicode_region_subtag` (2 caractères alphabétiques ou 3 caractères numériques), un {{JSxRef("RangeError")}} est directement levé au lieu d'utiliser la fonction de repli.

```js
console.log(
  new Intl.DisplayNames("en", { type: "region", fallback: "code" }).of("ZLC"),
); // lève RangeError: invalid value "ZLC" for option region
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.DisplayNames")}}
