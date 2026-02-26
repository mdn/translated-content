---
title: "Intl : méthode statique getCanonicalLocales()"
short-title: getCanonicalLocales()
slug: Web/JavaScript/Reference/Global_Objects/Intl/getCanonicalLocales
l10n:
  sourceCommit: 6356aa3911fe6cf953e0b04c3b285fe95e4b5355
---

La méthode statique **`getCanonicalLocales()`** des instances de {{JSxRef("Intl")}} retourne un tableau contenant les noms canoniques des locales. Les doublons sont omis et les éléments sont validés comme des balises de langue structurellement valides.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Intl.getCanonicalLocales()")}}

```js interactive-example
console.log(Intl.getCanonicalLocales("EN-US"));
// Résultat attendu : Array ["en-US"]

console.log(Intl.getCanonicalLocales(["EN-US", "Fr"]));
// Résultat attendu : Array ["en-US", "fr"]

try {
  Intl.getCanonicalLocales("EN_US");
} catch (err) {
  console.log(err.toString());
  // Résultat attendu (Firefox/Safari) : RangeError: invalid language tag: "EN_US"
  // Résultat attendu (Chrome) : RangeError: Incorrect locale information provided
}
```

## Syntaxe

```js-nolint
Intl.getCanonicalLocales(locales)
```

### Paramètres

- `locales`
  - : Une liste de chaînes ({{JSxRef("String")}}) dont on veut obtenir les noms canoniques pour les locales correspondantes.

### Valeur de retour

Un tableau qui contient les noms canoniques des locales.

## Exemples

### Utiliser la méthode `getCanonicalLocales()`

```js
Intl.getCanonicalLocales("EN-US"); // ["en-US"]
Intl.getCanonicalLocales(["EN-US", "Fr"]); // ["en-US", "fr"]

Intl.getCanonicalLocales("EN_US");
// RangeError: invalid language tag: "EN_US"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation de `Intl.getCanonicalLocales` dans FormatJS <sup>(angl.)</sup>](https://formatjs.github.io/docs/polyfills/intl-getcanonicallocales/)
- La méthode {{JSxRef("Intl/NumberFormat/supportedLocalesOf", "Intl.NumberFormat.supportedLocalesOf()")}}
- La méthode {{JSxRef("Intl/DateTimeFormat/supportedLocalesOf", "Intl.DateTimeFormat.supportedLocalesOf()")}}
- La méthode {{JSxRef("Intl/Collator/supportedLocalesOf", "Intl.Collator.supportedLocalesOf()")}}
