---
title: Intl.Locale
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale
---

{{JSRef}}{{SeeCompatTable}}

Le constructeur **`Intl.Locale`** est une propriété native de l'objet `Intl` représentant l'identifiant d'une locale Unicode.

{{EmbedInteractiveExample("pages/js/intl-locale.html")}}

## Syntaxe

```js
new Intl.Locale([tag[, options]])
```

### Paramètres

- `tag`
  - : La chaîne de caractère représentant l'identifiant d'une locale Unicode.
- `options`
  - : Un objet contenant la configuration pour la locale. Les clés (noms des propriétés) de cet objets sont des balises Unicode et les valeurs de ces propriétés doivent être des valeurs de balises Unicode valides.

## Description

L'objet `Intl.locale` a été conçu afin de manipuler des locales Unicode. Les locales Unicode sont représentées par une chaîne de caractères qu'on appelle « identifiant de locale ». L'identifant de locale se compose d'un identifiant de langue et d'extensions. Les identifiants de langue sont la composante principale d'une locale et contiennent une langue, un système d'écriture et des extensions régionales. Les informations complémentaires sont stockées via les extensions. Ces extensions peuvent fournir des informations quant au type de calendrier utilisé, le format d'heure utilisé ou la numération utilisée.

L'objet `Intl.Locale` possède les propriétés et méthodes suivantes.

### Propriétés

- {{jsxref("Locale.prototype","Intl.Locale.prototype")}}
  - : Le prototype pour le constructeur `Locale`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation (_polyfill_) pour `Intl.Locale`](https://github.com/zbraniecki/Intl.js/tree/intllocale)
- [La spécification Unicode pour les identifiants de locale](https://www.unicode.org/reports/tr35/#Canonical_Unicode_Locale_Identifiers)
