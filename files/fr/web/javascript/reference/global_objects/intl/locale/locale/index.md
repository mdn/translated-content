---
title: Constructeur Intl.Locale()
short-title: Intl.Locale()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/Locale
l10n:
  sourceCommit: e509776556a47f12843b91ab5c6e9be6585698c6
---

Le constructeur **`Intl.Locale()`** crée des objets {{JSxRef("Intl.Locale")}}.

{{InteractiveExample("Démonstration JavaScript&nbsp;: constructeur Intl.Locale()")}}

```js interactive-example
const korean = new Intl.Locale("ko", {
  script: "Kore",
  region: "KR",
  hourCycle: "h23",
  calendar: "gregory",
});

const japanese = new Intl.Locale("ja-Jpan-JP-u-ca-japanese-hc-h12");

console.log(korean.baseName, japanese.baseName);
// Résultat attendu : "ko-Kore-KR" "ja-Jpan-JP"

console.log(korean.hourCycle, japanese.hourCycle);
// Résultat attendu : "h23" "h12"
```

## Syntaxe

```js-nolint
new Intl.Locale(tag)
new Intl.Locale(tag, options)
```

> [!NOTE]
> `Intl.Locale()` ne peut être construit qu'avec {{JSxRef("Operators/new", "new")}}. Tenter de l'appeler sans `new` génère une {{JSxRef("TypeError")}}.

### Paramètres

- `tag`
  - : La chaîne de caractères identifiant la locale Unicode. Pour la syntaxe des chaînes de caractères d'identifiant de locale, voir la [page principale d'Intl](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl#argument_locales). Notez que le constructeur `Intl.Locale`, contrairement à la plupart des autres constructeurs `Intl`, n'accepte pas un tableau de locales ni `undefined`.
- `options`
  - : Un objet contenant la configuration pour la locale. Les valeurs des options ici prennent le pas sur les clés d'extension dans l'identifiant de la locale. Les propriétés possibles sont&nbsp;:
    - `language`
      - : La [langue](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/language). Toute chaîne de caractères syntaxiquement valide suivant la grammaire [`unicode_language_subtag` <sup>(angl.)</sup>](https://unicode.org/reports/tr35/#unicode_language_subtag) (2 à 3 ou 5 à 8 lettres) est acceptée, mais l'implémentation ne reconnaît que certains types.
    - `script`
      - : Le [script](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/script). Toute chaîne de caractères syntaxiquement valide suivant la grammaire [`unicode_script_subtag` <sup>(angl.)</sup>](https://unicode.org/reports/tr35/#unicode_script_subtag) (4 lettres) est acceptée, mais l'implémentation ne reconnaît que certains types.
    - `region`
      - : La [région](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/region). Toute chaîne de caractères syntaxiquement valide suivant la grammaire [`unicode_region_subtag` <sup>(angl.)</sup>](https://unicode.org/reports/tr35/#unicode_region_subtag) (soit 2 lettres, soit 3 chiffres) est acceptée, mais l'implémentation ne reconnaît que certains types.
    - `variants`
      - : Les [variantes](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/variants). Il s'agit d'une liste de balises de variantes _uniques_ séparées par des tirets (`-`), où chaque balise est une chaîne de caractères syntaxiquement valide suivant la grammaire [`unicode_variant_subtag` <sup>(angl.)</sup>](https://unicode.org/reports/tr35/#unicode_variant_subtag) (soit 5 à 8 caractères alphanumériques, soit un chiffre suivi de 3 caractères alphanumériques), mais l'implémentation ne reconnaît que certains types.
    - `calendar`
      - : Le [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar). Toute chaîne de caractères syntaxiquement valide suivant la grammaire [`type` <sup>(angl.)</sup>](https://unicode.org/reports/tr35/#Unicode_locale_identifier) (un ou plusieurs segments de 3 à 8 caractères alphanumériques, séparés par des tirets) est acceptée, mais l'implémentation ne reconnaît que certains types, qui sont listés dans [`Intl.supportedValuesOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#types_de_calendriers_pris_en_charge).
    - `collation`
      - : La [collation](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/collation). Toute chaîne de caractères syntaxiquement valide suivant la grammaire [`type` <sup>(angl.)</sup>](https://unicode.org/reports/tr35/#Unicode_locale_identifier) est acceptée, mais l'implémentation ne reconnaît que certains types, qui sont listés dans [`Intl.supportedValuesOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#types_de_collation_pris_en_charge).
    - `numberingSystem`
      - : Le [système de numération](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/numberingSystem). Toute chaîne de caractères syntaxiquement valide suivant la grammaire [`type` <sup>(angl.)</sup>](https://unicode.org/reports/tr35/#Unicode_locale_identifier) est acceptée, mais l'implémentation ne reconnaît que certains types, qui sont listés dans [`Intl.supportedValuesOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#types_de_systèmes_de_numération_pris_en_charge).
    - `caseFirst`
      - : [L'option de tri de case en premier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/caseFirst). Les valeurs possibles sont `"upper"`, `"lower"` ou `"false"`.
    - `hourCycle`
      - : Le [cycle horaire](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle). Les valeurs possibles sont `"h23"`, `"h12"`, `"h11"`, ou le `"h24"` pratiquement inutilisé, qui sont expliqués dans [`Intl.Locale.prototype.getHourCycles`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getHourCycles#types_de_cycles_horaires_pris_en_charge).
    - `numeric`
      - : [L'option de tri numérique](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/numeric). Un booléen.

## Exemples

### Usage simple

Sous sa forme la plus simple, le constructeur `Intl.Locale()` prend comme argument une chaîne de caractères représentant un identifiant de locale&nbsp;:

```js
const us = new Intl.Locale("en-US");
```

### Utiliser le constructeur Locale avec un objet options

Le constructeur prend un deuxième argument qui permet de configurer la locale et d'indiquer plusieurs types d'extensions. Ainsi, la propriété {{JSxRef("Intl/Locale/hourCycle", "hourCycle")}} utilisée sur l'objet de configuration permettra d'indiquer le type de cycle horaire souhaité&nbsp;:

```js
const locale = new Intl.Locale("en-US", { hourCycle: "h12" });
console.log(locale.hourCycle); // "h12"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.Collator")}}
- [Les identifiants de locale Unicode canoniques <sup>](https://www.unicode.org/reports/tr35/#Canonical_Unicode_Locale_Identifiers) dans la spécification du langage de balisage des données de locale Unicode
