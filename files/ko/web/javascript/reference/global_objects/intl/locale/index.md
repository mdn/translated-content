---
title: Intl.Locale
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale
---

{{JSRef}}

The **`Intl.Locale`** constructor is a standard built-in property of the Intl object that represents a Unicode locale identifier.

{{EmbedInteractiveExample("pages/js/intl-locale.html")}}

## Syntax

```js
    new Intl.Locale(tag [, options])
```

### Parameters

- `tag`
  - : The Unicode locale identifier string.
- `options`
  - : An object that contains configuration for the Locale. Keys are Unicode locale tags, values are valid Unicode tag values.

## Description

The **`Intl.Locale`** object was created to allow for easier manipulation of Unicode locales. Unicode represents locales with a string, called a _locale identifier_. The locale identifier consists of a _language identifier_ and _extension tags_. Language identifiers are the core of the locale, consisting of _language_, _script_, and _region subtags_. Additional information about the locale is stored in the optional _extension tags_. Extension tags hold information about locale aspects such as calendar type, clock type, and numbering system type.

Traditionally, the Intl API used strings to represent locales, just as Unicode does. This is a simple and lightweight solution that works well. Adding a Locale class, however, adds ease of parsing and manipulating the language, script, and region, as well as extension tags.

The Intl.Locale object has the following properties and methods:

### Properties

- {{jsxref("Locale.prototype", "Intl.Locale.prototype")}}
  - : The prototype object for the `Locale` constructor.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- [The Intl.Locale Polyfill](https://github.com/zbraniecki/Intl.js/tree/intllocale)
- [Unicode locale identifiers spec](https://www.unicode.org/reports/tr35/#Canonical_Unicode_Locale_Identifiers)
