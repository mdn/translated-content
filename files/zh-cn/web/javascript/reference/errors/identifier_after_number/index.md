---
title: "SyntaxError: identifier starts immediately after numeric literal"
slug: Web/JavaScript/Reference/Errors/Identifier_after_number
---

{{JSSidebar("Errors")}}

## Message

```plain
SyntaxError: identifier starts immediately after numeric literal (Firefox)
SyntaxError: Unexpected number (Chrome)
```

## Error type

{{jsxref("SyntaxError")}}

## What went wrong?

变量名叫{{Glossary("Identifier", "identifiers")}}，它符合某些规则，而你打破了这些规则！

一个 JavaScript 标识符必须以字母开头，下划线（\_）或美元符号（$）。他们不能以数字开头。只有后续字符可以是数字（0-9）。

## Examples

### Variable names starting with numeric literals

Variable names can't start with numbers in JavaScript. The following fails:

```js example-bad
var 1life = 'foo';
// SyntaxError: identifier starts immediately after numeric literal

var foo = 1life;
// SyntaxError: identifier starts immediately after numeric literal
```

You will need to rename your variable to avoid the leading number.

```js example-good
var life1 = "foo";
var foo = life1;
```

## See also

- [Lexical grammar](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar)
- [Variables](/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types#Variables) in the [JavaScript Guide](/zh-CN/docs/Web/JavaScript/Guide)
