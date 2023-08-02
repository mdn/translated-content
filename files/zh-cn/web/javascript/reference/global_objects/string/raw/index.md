---
title: String.raw()
slug: Web/JavaScript/Reference/Global_Objects/String/raw
---

{{JSRef()}}

**`String.raw()`** 静态方法是[模板字符串](/zh-CN/docs/Web/JavaScript/Reference/template_strings)的标签函数。它的作用类似于 Python 中的 `r` 前缀或 C# 中用于字符串字面量的 `@` 前缀。它用于获取模板字符串的原始字符串形式——即，替换表达式（例如 `${foo}`）会被替换处理，但转义序列（例如 `\n`）不会被处理。

{{EmbedInteractiveExample("pages/js/string-raw.html")}}

## 语法

```js-nolint
String.raw(strings, ...substitutions)

String.raw`templateString`
```

### 参数

- `strings`
  - : 格式正确的模板字符串数组对象，例如 `{ raw: ['foo', 'bar', 'baz'] }`，应该是一个具有 `raw` 属性的对象，其值是一个类数组的字符串对象。
- `...substitutions`
  - : 包含的替换表达式对应的值。
- `templateString`
  - : 一个[模板字符串](/zh-CN/docs/Web/JavaScript/Reference/template_strings)，可以包含替换表达式（`${...}`）。

### 返回值

给定模板字符串的原始字符串。

### 异常

- {{jsxref("TypeError")}}
  - : 如果第一个参数没有 `raw` 属性，或者 `raw` 属性的值为 `undefined` 或 `null`，则会抛出异常。

## 描述

在大多数情况下，`String.raw()` 与模板字符串一起使用。上面提到的第一种语法很少使用，因为 JavaScript 引擎会自动为你调用它并传入适当的参数（就像其他[标记函数](/zh-CN/docs/Web/JavaScript/Reference/Template_literals#带标签的模版)一样）。

`String.raw()` 是唯一一个内置的模板字符串标签函数，因为它太常用了。不过它并没有什么特殊能力，你自己也可以实现一个和它功能一模一样的标签函数。

> **警告：** 不应直接将 `String.raw` 作为“标识”标签。请参见[构建标识标签](#构建标识标签)以了解如何实现此操作。

如果使用没有 `length` 属性或 `length` 为非正数的 `raw` 属性的对象调用 `String.raw()` 方法，它将返回一个空字符串 `""`。如果 `substitutions.length < strings.raw.length - 1`（即没有足够的替换项来填充占位符——这在一个格式正确的标记模板字面量中是不可能发生的），则其余的占位符将被填充为空字符串。

## 示例

### 使用 String.raw()

```js
String.raw`Hi\n${2 + 3}!`;
// 'Hi\\n5!'，'Hi' 后面的字符不是换行符，'\' 和 'n' 是两个不同的字符。

String.raw`Hi\u000A!`;
// 'Hi\\u000A!'，同上，这里得到的会是 \、u、0、0、0、A，6 个字符。
// 任何类型的转义形式都会失效，保留原样输出。
// 你可以通过检查 string 的 .length 属性来确认这一点。

const name = "Bob";
String.raw`Hi\n${name}!`;
// 'Hi\\nBob!'，内插表达式还可以正常替换。

String.raw`Hi \${name}!`;
// 'Hi \\${name}!'，美元符号被转义；这里没有插值。
```

### 构建标识标签

许多工具会对由特定名称标记的字面量进行特殊处理。

```js-nolint
// 一些格式化工具将会将这个字面量的内容格式化为 HTML
const doc = html`<!DOCTYPE html>
<html lang="en-US">
  <head>
    <title>Hello</title>
  </head>
  <body>
    <h1>Hello world!</h1>
  </body>
</html>
`;
```

一个天真的实现 `html` 标签的方式可能是：

```js
const html = String.raw;
```

实际上，这对于上面的情况是有效的。然而，因为 `String.raw` 方法将连接*原始*的字符串字面量而不是“处理过”的字符串字面量，所以转义序列将不会被处理。

```js-nolint
const doc = html`<canvas>\n</canvas>`;
// "<canvas>\\n</canvas>"
```

对于“真实的标识”标签而言，这可能并不是你想要的，因为这种情况下标签纯粹用于标记化，不会改变字面量的值。在这种情况下，你可以创建一个自定义标签，并将“处理过”的字面量数组传递给 `String.raw`，假装它们是原始字符串。

```js-nolint
const html = (strings, ...values) => String.raw({ raw: strings }, ...values);
// 一些格式化工具将会将这个字面量的内容格式化为 HTML
const doc = html`<canvas>\n</canvas>`;
// "<canvas>\n</canvas>"; "\n" 变成了换行符
```

请注意，第一个参数是一个带有 `raw` 属性的对象，其值是一个类数组对象（具有 `length` 属性和整数索引），表示模板字面量中分隔的字符串。其余的参数是替换项。由于 `raw` 值可以是任何类数组对象，它甚至可以是一个字符串！例如，`'test'` 被视为 `['t', 'e', 's', 't']`。以下代码与 `` `t${0}e${1}s${2}t` `` 等效：

```js
String.raw({ raw: "test" }, 0, 1, 2); // 't0e1s2t'
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `String.raw` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [模版字符串](/zh-CN/docs/Web/JavaScript/Reference/Template_literals)
- {{jsxref("String")}}
- [词法文法](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar)
