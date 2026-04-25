---
title: "Intl.Locale : propriété baseName"
short-title: baseName
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/baseName
l10n:
  sourceCommit: e509776556a47f12843b91ab5c6e9be6585698c6
---

La propriété d'accesseur **`baseName`** des instances de {{JSxRef("Intl.Locale")}} retourne une sous-chaîne de caractères de la représentation textuelle de cette locale, contenant les informations essentielles à propos de cette locale, y compris la langue, le script, la région et les variantes, si disponibles.

## Description

`baseName` retourne la sous-chaîne de caractères `language ["-" script] ["-" region] *("-" variant)` de la [grammaire `unicode_language_id` <sup>(angl.)</sup>](https://www.unicode.org/reports/tr35/#Identifiers). Elle inclut uniquement les informations spécifiquement indiquées dans le constructeur, soit par la chaîne d'identifiant de locale, soit par l'objet d'options.

Le mutateur d'accesseur de `baseName` est `undefined`. Vous ne pouvez pas modifier cette propriété directement.

## Exemples

### Exemple simple

```js
const myLoc = new Intl.Locale("fr-Latn-CA"); // Définit la locale sur le français canadien
console.log(myLoc.toString()); // Affiche "fr-Latn-CA-u-ca-gregory"
console.log(myLoc.baseName); // Affiche "fr-Latn-CA"
```

### Exemple avec certaines options

```js
// Définit la langue sur le japonais, la région sur le Japon,
// calendrier sur grégorien, cycle horaire sur 24 heures
const japan = new Intl.Locale("ja-JP-u-ca-gregory-hc-24");
console.log(japan.toString()); // Affiche "ja-JP-u-ca-gregory-hc-h24"
console.log(japan.baseName); // Affiche "ja-JP"
```

### Exemple avec options qui surchargent

```js
// La chaîne de caractères d'entrée indique la langue comme néerlandais
// et la région comme Belgique, mais l'objet d'options remplace la région
// et la définit sur les Pays-Bas
const dutch = new Intl.Locale("nl-Latn-BE", { region: "NL" });

console.log(dutch.baseName); // Affiche "nl-Latn-NL"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.Locale")}}
