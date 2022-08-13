---
title: Intl.getCanonicalLocales()
slug: Web/JavaScript/Reference/Global_Objects/Intl/getCanonicalLocales
tags:
  - Internationalization
  - Intl
  - JavaScript
  - Method
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/getCanonicalLocales
---
{{JSRef}}

Die **`Intl.getCanonicalLocales()`** Methode gibt ein Array mit den anerkannten Gebietsnamen zurück. Duplikate werden verhindert und Elemente werden auf valide Sprach-Tag-Struktur geprüft.

{{EmbedInteractiveExample("pages/js/intl-getcanonicallocales.html")}}

## Syntax

    Intl.getCanonicalLocales(locales)

### Parameter

- `locales`
  - : Eine List von {{jsxref("String")}} Werten, von welchen die anerkannten Gebietsnamen gesucht werden.

### Rückgabewert

Ein Array mit den anerkannten Gebietsnamen.

## Beispiele

```js
Intl.getCanonicalLocales('EN-US'); // ["en-US"]
Intl.getCanonicalLocales(['EN-US', 'Fr']); // ["en-US", "fr"]

Intl.getCanonicalLocales('EN_US');
// RangeError:'EN_US' is not a structurally valid language tag
```

## Spezifikationen

| Spezifikation                                                                                                            | Status                           | Kommentar           |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------- |
| {{SpecName('ES Int Draft', '#sec-intl.getcanonicallocales', 'Intl.getCanonicalLocales')}} | {{Spec2('ES Int Draft')}} | Initiale Definition |

## Browserkompatibilität

{{Compat("javascript.builtins.Intl.getCanonicalLocales")}}

## Siehe auch

- {{jsxref("NumberFormat.supportedLocalesOf", "Intl.NumberFormat.supportedLocalesOf()")}}
- {{jsxref("DateTimeFormat.supportedLocalesOf", "Intl.DateTimeFormat.supportedLocalesOf()")}}
- {{jsxref("Collator.supportedLocalesOf", "Intl.Collator.supportedLocalesOf()")}}
