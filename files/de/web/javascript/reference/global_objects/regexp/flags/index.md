---
title: RegExp.prototype.flags
slug: Web/JavaScript/Reference/Global_Objects/RegExp/flags
tags:
  - ECMAScript 2015
  - Eigenschaft
  - JavaScript
  - Prototyp
  - Referenz
  - RegExp
  - Regular Expressions
  - Reguläre Expressionen
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp/flags
---
{{JSRef}}

Die **`flags`** Eigenschaft gibt einen String mit den Flags des RegExp-Objektes zurück.

{{EmbedInteractiveExample("pages/js/regexp-prototype-flags.html")}}{{js_property_attributes(0, 0, 1)}}

## Beschreibung

Flags in der `flags` Eigenschaft sind alphabetisch sortiert (von links nach rechts, z.B. `"gimuy"`).

## Beispiele

### Die `flags` benutzen

```js
/foo/ig.flags;   // "gi"
/bar/myu.flags;  // "muy"
```

## Polyfill

```js
if (RegExp.prototype.flags === undefined) {
  Object.defineProperty(RegExp.prototype, 'flags', {
    configurable: true,
    get: function() {
      return this.toString().match(/[gimuy]*$/)[0];
    }
  });
}
```

## Spezifikationen

| Spezifikation                                                                                                    | Status                       | Kommentar             |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------- | --------------------- |
| {{SpecName('ES2015', '#sec-get-regexp.prototype.flags', 'RegExp.prototype.flags')}} | {{Spec2('ES2015')}}     | Initielle Definition. |
| {{SpecName('ESDraft', '#sec-get-regexp.prototype.flags', 'RegExp.prototype.flags')}} | {{Spec2('ESDraft')}} |                       |

## Browser-Kompatiblität

{{Compat("javascript.builtins.RegExp.flags")}}

## Siehe auch

- {{jsxref("RegExp.prototype.source")}}
