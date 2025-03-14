---
title: Intl.Locale.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/toString
---

{{JSRef}}

La méthode **`Intl.Locale.prototype.toString()`** renvoie [l'identifiant de locale complet](https://www.unicode.org/reports/tr35/#Unicode_locale_identifier) pour la locale courante.

{{InteractiveExample("JavaScript Demo: Intl.Locale.prototype.toString()")}}

```js interactive-example
const french = new Intl.Locale("fr-Latn-FR", {
  calendar: "gregory",
  hourCycle: "h12",
});
const korean = new Intl.Locale("ko-Kore-KR", {
  numeric: true,
  caseFirst: "upper",
});

console.log(french.toString());
// Expected output: "fr-Latn-FR-u-ca-gregory-hc-h12"

console.log(korean.toString());
// Expected output: "ko-Kore-KR-u-kf-upper-kn"
```

## Syntaxe

```js
locale.toString();
```

### Valeur de retour

La chaîne de caractères représentant l'identifiant complet de la locale.

## Description

Une instance de `Locale` est une représentation JavaScript d'une locale au sens Unicode. Les informations décrivant une locale donnée (la langue, le système d'écriture, le type de calendrier, etc.) peuvent être encodées en une chaîne de caractères qui est l'identifiant de la locale. Lorsqu'on appelle la méthode `toString()` sur une instance de `Locale`, on obtiendra l'identifiant complet de la locale.

## Exemples

```js
let maLocale = new Intl.Locale("fr-Latn-FR", {
  hourCycle: "h24",
  calendar: "gregory",
});
console.log(maLocale.baseName); // Affiche "fr-Latn-FR"
console.log(maLocale.toString()); // Affiche "fr-Latn-FR-u-ca-gregory-hc-h24"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Locale", "Intl.Locale")}}
- {{jsxref("Locale/baseName", "Intl.Locale.baseName")}}
