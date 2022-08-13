---
title: Intl.PluralRules
slug: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules
tags:
  - Internationalization
  - Intl
  - JavaScript
  - NeedsTranslation
  - PluralRules
  - TopicStub
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules
---
{{JSRef}}

The **`Intl.PluralRules`** object is a constructor for objects that enable plural sensitive formatting and plural language language rules.

## Syntax

    new Intl.PluralRules([locales[, options]])
    Intl.PluralRules.call(this[, locales[, options]])

### Parameters

- `locales`
  - : Optional. A string with a BCP 47 language tag, or an array of such strings. For the general form and interpretation of the `locales` argument, see the {{jsxref("Intl", "Intl page", "#Locale_identification_and_negotiation", 1)}}.
- `options`
  - : Optional. An object with some or all of the following properties:_ `localeMatcher`
    _ : The locale matching algorithm to use. Possible values are `"lookup"` and `"best fit"`; the default is `"best fit"`. For information about this option, see the {{jsxref("Global_Objects/Intl", "Intl page", "#Locale_negotiation", 1)}}.
    - `type`
      - : The type to use. Possible values are:\* `"cardinal"` for cardinal numbers (refering to the quantity of things). This is the default value.
        - `"ordinal"` for ordinal number (refering to the ordering or ranking of things, e.g. "1st", "2nd", "3rd" in English).

## Description

### Properties

- {{jsxref("PluralRules.prototype", "Intl.PluralRules.prototype")}}
  - : Allows the addition of properties to all objects.

### Methods

- {{jsxref("PluralRules.supportedLocalesOf", "Intl.PluralRules.supportedLocalesOf()")}}
  - : Returns an array containing those of the provided locales that are supported without having to fall back to the runtime's default locale.

## `PluralRules` instances

### Properties

`PluralRules` instances inherit the following properties from their prototype:

{{page('/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules/prototype', 'Properties')}}

### Methods

`PluralRules` instances inherit the following methods from their prototype:

{{page('/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules/prototype', 'Methods')}}

## Examples

### Basic usage

In basic use without specifying a locale, a formatted string in the default locale and with default options is returned. This is useful to distinguish between singular and plural forms, e.g. "dog" and "dogs".

```js
var pr = new Intl.PluralRules();

pr.select(0);
// → 'other' if in US English locale

pr.select(1);
// → 'one' if in US English locale

pr.select(2);
// → 'other' if in US English locale
```

### Using `locales`

This example shows some of the variations in localized plural rules. In order to get the format of the language used in the user interface of your application, make sure to specify that language (and possibly some fallback languages) using the `locales` argument:

```js
// Arabic has different plural rules

new Intl.PluralRules('ar-EG').select(0);
// → 'zero'
new Intl.PluralRules('ar-EG').select(1);
// → 'one'
new Intl.PluralRules('ar-EG').select(2);
// → 'two'
new Intl.PluralRules('ar-EG').select(6);
// → 'few'
new Intl.PluralRules('ar-EG').select(18);
// → 'many'
```

### Using `options`

The results can be customized using the `options` argument, which has one property called `type` which you can set to `ordinal`. This is useful to figure out the ordinal indicator, e.g. "1st", "2nd", "3rd", "4th", "42nd" and so forth.

```js
var pr = new Intl.PluralRules('en-US', { type: 'ordinal' });

pr.select(0);
// → 'other'
pr.select(1);
// → 'one'
pr.select(2);
// → 'two'
pr.select(3);
// → 'few'
pr.select(4);
// → 'other'
pr.select(42);
// → 'two'
```

## Specifications

| Specification                                                                                 | Status                           | Comment            |
| --------------------------------------------------------------------------------------------- | -------------------------------- | ------------------ |
| [Intl Plural Rules Draft](https://rawgit.com/caridy/intl-plural-rules-spec/master/index.html) | {{Spec2('ES Int Draft')}} | Initial definition |

## Browser compatibility

{{Compat("javascript.builtins.Intl.PluralRules")}}

## See also

{{page('/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl', 'See_also')}}
