---
title: Intl.Locale.prototype.baseName
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/baseName
---

{{JSRef}}

La propriété **`Intl.Locale.prototype.baseName`** renvoie un extrait de la chaîne de caractères représentant l'objet `Locale`. Cet extrait contient les informations essentielles à propos de l'objet `Locale`.

## Description

Un objet `Intl.Locale` représente une locale ainsi que des options qui lui sont associées. La propriété `baseName` renvoie des informations essentielles quant à la locale sous la forme d'une chaîne de caractères. Cette chaîne est un extrait de la représentation textuelle complète de l'objet `Locale`. Cet extrait contient notamment la langue, le script utilisé ainsi que la région (s'ils sont disponibles).

Si on utilise [la grammaire Unicode](https://www.unicode.org/reports/tr35/#Identifiers), `baseName` renvoie la sous-séquence `language ["-" script] ["-" region] *("-" variant)`.

## Exemples

### Exemple simple

```js
let myLoc = new Intl.Locale("fr-Latn-CA"); // Sets locale to Candanian French
console.log(myLoc.toString()); // Prints out "fr-Latn-CA-u-ca-gregory"
console.log(myLoc.baseName); // Prints out "fr-Latn-CA"
```

### Exemple avec certaines options

```js
// Sets language to Japanese, region to Japan,

// calendar to Gregorian, hour cycle to 24 hours
let japan = new Intl.Locale("ja-JP-u-ca-gregory-hc-24");
console.log(japan.toString()); // Prints out "ja-JP-u-ca-gregory-hc-h24"
console.log(japan.baseName); // Prints out "ja-JP"
```

### Exemple avec options qui surchargent

```js
// Input string indicates language as Dutch and region as Belgium,

// but options object overrides the region and sets it to the Netherlands
let dutch = new Intl.Locale("nl-Latn-BE", { region: "NL" });

console.log(dutch.baseName); // Prints out "nl-Latn-NL"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Locale", "Intl.Locale")}}
