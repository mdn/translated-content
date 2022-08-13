---
title: RegExp.lastMatch ($&)
slug: Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch
original_slug: Web/JavaScript/Referencje/Obiekty/RegExp/lastMatch
---
{{JSRef}} {{non-standard_header}}

Niestandardowa właściwość **lastMatch** jest właściwością statyczną, tylko do odczytu wyrażeń regularnych, który zawiera ostatnie dopasowane znaki. `RegExp.$&` jest aliasem tej właściwości.

## Syntax

    RegExp.lastMatch
    RegExp['$&']

## Description

The `lastMatch` property is static, it is not a property of an individual regular expression object. Instead, you always use it as `RegExp.lastMatch` or `RegExp['$&'].`

The value of the `lastMatch` property is read-only and modified whenever a successful match is made.

You can not use the shorthand alias with the dot property accessor (`RegExp.$&`), because the parser expects an expression with "&" in that case and a {{jsxref("SyntaxError")}} is thrown. Use the [bracket notation for property access](/pl/docs/Web/JavaScript/Reference/Operators/Property_Accessors).

## Examples

### Using `lastMatch` and `$&`

```js
var re = /hi/g;
re.test('hi there!');
RegExp.lastMatch; // "hi"
RegExp['$&'];     // "hi"
```

## Specifications

Niestandardowe. Nie jest częścią aktualnej specyfikacji.

## Browser compatibility

{{Compat("javascript.builtins.RegExp.lastMatch")}}

## See also

- {{non-standard_inline}} {{jsxref("RegExp.input", "RegExp.input ($_)")}}
- {{non-standard_inline}} {{jsxref("RegExp.lastParen", "RegExp.lastParen ($+)")}}
- {{non-standard_inline}} {{jsxref("RegExp.leftContext", "RegExp.leftContext ($`)")}}
- {{non-standard_inline}} {{jsxref("RegExp.rightContext", "RegExp.rightContext ($')")}}
- {{non-standard_inline}} {{jsxref("RegExp.n", "RegExp.$1-$9")}}
