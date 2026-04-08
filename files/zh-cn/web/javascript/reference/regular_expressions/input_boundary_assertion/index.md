---
title: 输入边界断言：^、$
slug: Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**输入边界断言**检查字符串的当前位置是否为输入边界。输入边界为字符串的起始或终止，或者，如果设置了 `m` 标志，则为一行的起始或终止。

## 语法

```regex
^
$
```

## 描述

`^` 表示当前位置是输入的开头。`$` 表示当前位置是输入的结尾。两者都是*断言*，因此不会消耗任何字符。

更准确地说，`^` 表示左侧的字符超出了字符串的范围；`$` 表示右侧的字符超出了字符串的范围。如果设置了 [`m`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline) 标志，当左侧字符是[行终止符](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#行终止符) 时，`^` 也会匹配；当右侧字符是行结束符时，`$` 也会匹配。

除非设置了 `m` 标志，否则 `^` 和 `$` 断言仅在位于模式边界时才有意义，因为它们左侧或右侧的任何其他字符都会导致断言失败。

`y` 标志不会改变这些断言的含义——参见[锚定粘性标志](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky#锚定的_sticky_标志)。

## 示例

### 移除末尾的斜杠

以下示例用于从 URL 字符串中移除尾随斜杠：

```js
function removeTrailingSlash(url) {
  return url.replace(/\/$/, "");
}

removeTrailingSlash("https://example.com/"); // "https://example.com"
removeTrailingSlash("https://example.com/docs/"); // "https://example.com/docs"
```

### 匹配文件扩展名

以下示例通过匹配文件扩展名来检查文件类型，文件扩展名总是位于字符串的末尾：

```js
function isImage(filename) {
  return /\.(?:png|jpe?g|webp|avif|gif)$/i.test(filename);
}

isImage("image.png"); // true
isImage("image.jpg"); // true
isImage("image.pdf"); // false
```

### 匹配整个输入

有时，需要确保正则表达式匹配整个输入内容，而不仅仅是输入的子字符串。例如，如果您要判断一个字符串是否为有效的[标识符](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#标识符)，可以在模式的两端添加输入边界断言：

```js
function isValidIdentifier(str) {
  return /^[$_\p{ID_Start}][$_\p{ID_Continue}]*$/u.test(str);
}

isValidIdentifier("foo"); // true
isValidIdentifier("$1"); // true
isValidIdentifier("1foo"); // false
isValidIdentifier("  foo  "); // false
```

在进行代码生成（即使用代码生成代码）时，此函数非常有用，因为可以与其他字符串属性不同地使用有效的标识符，例如使用[点号表示法](/zh-CN/docs/Web/JavaScript/Reference/Operators/Property_accessors#点号表示法)代替[方括号表示法](/zh-CN/docs/Web/JavaScript/Reference/Operators/Property_accessors#方括号表示法)：

```js
const variables = ["foo", "foo:bar", "  foo  "];

function toAssignment(key) {
  if (isValidIdentifier(key)) {
    return `globalThis.${key} = undefined;`;
  }
  // JSON.stringify() 转义引号和其他特殊字符
  return `globalThis[${JSON.stringify(key)}] = undefined;`;
}

const statements = variables.map(toAssignment).join("\n");

console.log(statements);
// globalThis.foo = undefined;
// globalThis["foo:bar"] = undefined;
// globalThis["  foo  "] = undefined;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [断言](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions/Assertions)指南
- [正则表达式](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions)
- [单词边界断言：`\b`、`\B`](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
- [前向断言：`(?=...)`、`(?!...)`](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
- [后向断言：`(?<=...)`、`(?<!...)`](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
