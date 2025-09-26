---
title: Constructeur Intl.Locale()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/Locale
---

{{JSRef}}

Le constructeur **`Intl.Locale`** est une propriété native de l'objet `Intl` qui permet de créer des objets qui représentent des locales Unicode.

{{InteractiveExample("JavaScript Demo: Intl.Locale")}}

```js interactive-example
const korean = new Intl.Locale("ko", {
  script: "Kore",
  region: "KR",
  hourCycle: "h23",
  calendar: "gregory",
});

const japanese = new Intl.Locale("ja-Jpan-JP-u-ca-japanese-hc-h12");

console.log(korean.baseName, japanese.baseName);
// Expected output: "ko-Kore-KR" "ja-Jpan-JP"

console.log(korean.hourCycle, japanese.hourCycle);
// Expected output: "h23" "h12"
```

## Syntaxe

```js
new Intl.Locale(tag);
new Intl.Locale(tag, options);
```

### Paramètres

- `tag`
  - : La balise Unicode qui représente une locale.
- `options`
  - : Un objet qui contient la configuration à utiliser pour la locale. Les propriétés sont des balises de locale Unicode et les valeurs de ces propriétés sont les valeurs autorisées pour ces balises.

## Exemples

### Usage simple

Sous sa forme la plus simple, le constructeur [`Intl.Locale`] prend comme argument une chaîne de caractères représentant un identifiant de locale&nbsp;:

```js
let us = new Intl.Locale("en-US");
```

### Utiliser le constructeur Locale avec un objet options

Le constructeur prend un deuxième argument qui permet de configurer la locale et d'indiquer plusieurs types d'extensions. Ainsi, la propriété [`hourCycle`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle) utilisée sur l'objet de configuration permettra d'indiquer le type de cycle horaire souhaité&nbsp;:

```js
let locale = new Intl.Locale("en-US", { hourCycle: "h12" });
console.log(locale.hourCycle); // affiche "h12"
```

## Prothèse d'émulation (<i lang="en">polyfill</i>)

[Prothèse formatjs pour `Intl.Locale`](https://formatjs.io/docs/polyfills/intl-locale)

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Intl.Collator`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator)
- [Spécification Unicode sur les identifiants de locale](https://www.unicode.org/reports/tr35/#Canonical_Unicode_Locale_Identifiers)
