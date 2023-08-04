---
title: Intl.getCanonicalLocales()
slug: Web/JavaScript/Reference/Global_Objects/Intl/getCanonicalLocales
---

{{JSRef}}

La méthode **`Intl.getCanonicalLocales()`** renvoie un tableau contenant les noms canoniques des locales. Les doublons seront fusionnés et les éléments passés en arguments doivent être des étiquettes de langues valides.

{{EmbedInteractiveExample("pages/js/intl-getcanonicallocales.html")}}

## Syntaxe

```js
Intl.getCanonicalLocales(locales);
```

### Paramètres

- `locales`
  - : Une liste de chaînes ({{jsxref("String")}}) dont on veut obtenir les noms canoniques pour les locales correspondantes.

### Valeur de retour

Un tableau qui contient les noms canoniques des locales.

## Exemples

```js
Intl.getCanonicalLocales("EN-US"); // ["en-US"]
Intl.getCanonicalLocales(["EN-US", "Fr"]); // ["en-US", "fr"]

Intl.getCanonicalLocales("EN_US");
// RangeError:'EN_US' is not a structurally valid language tag
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("NumberFormat.supportedLocalesOf", "Intl.NumberFormat.supportedLocalesOf()")}}
- {{jsxref("DateTimeFormat.supportedLocalesOf", "Intl.DateTimeFormat.supportedLocalesOf()")}}
- {{jsxref("Collator.supportedLocalesOf", "Intl.Collator.supportedLocalesOf()")}}
