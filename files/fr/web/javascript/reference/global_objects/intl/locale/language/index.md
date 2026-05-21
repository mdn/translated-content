---
title: "Intl.Locale : propriété language"
short-title: language
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/language
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

La propriété d'accesseur **`language`** des instances de {{JSxRef("Intl.Locale")}} retourne la langue associée à cette locale.

## Description

La langue est l'une des caractéristiques majeures d'une locale. La spécification Unicode considère l'identifiant de langue d'une locale comme comprenant à la fois la langue et la région (pour distinguer les dialectes et les variations, par exemple l'anglais britannique et l'anglais américain). La propriété `language` d'une instance de {{JSxRef("Intl.Locale")}} retourne strictement le sous-balise de langue de la locale.

La valeur de la propriété `language` est définie au moment de la construction, soit par la première partie de l'identifiant de la locale, soit par l'option `language` du constructeur {{JSxRef("Intl/Locale/Locale", "Intl.Locale()")}}. Cette dernière prend le pas si les deux sont présentes.

Le mutateur d'accesseur de `language` est `undefined`. Vous ne pouvez pas modifier cette propriété directement.

## Exemples

Comme pour d'autres sous-balises de locale, la langue peut être ajoutée à l'objet {{JSxRef("Intl.Locale")}} par le biais de la chaîne de caractères représentant la locale, ou avec un objet de configuration passé en argument au constructeur.

### Définir la langue par le biais de la chaîne de caractères représentant la locale

Afin de pouvoir représenter une locale Unicode correctement, une chaîne de caractères doit commencer par un identifiant de langue. Le principal argument du constructeur {{JSxRef("Intl/Locale/Locale", "Intl.Locale()")}} doit être un identifiant valide et doit donc contenir la composante liée à la langue.

```js
const locale = new Intl.Locale("en-Latn-US");
console.log(locale.language); // "en"
```

### Surcharger la langue par le biais de l'objet de configuration

Bien que la sous-balise de langue doive être définie, le constructeur {{JSxRef("Intl/Locale/Locale", "Intl.Locale()")}} accepte un argument optionnel sous forme d'objet de configuration, qui peut remplacer la sous-balise de langue.

```js
const locale = new Intl.Locale("en-Latn-US", { language: "es" });
console.log(locale.language); // "es"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.Locale")}}
- [Sous-balise de langue Unicode <sup>(angl.)</sup>](https://www.unicode.org/reports/tr35/#unicode_language_subtag_validity) dans la spécification du langage de balisage des données de locale Unicode
