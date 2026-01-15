---
title: 字符转义：\\n、\\u{...}
slug: Web/JavaScript/Reference/Regular_expressions/Character_escape
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**字符转义**表示一种可能无法以字面形式方便地表示的字符。

## 语法

```regex
\f, \n, \r, \t, \v
\cA, \cB, …, \cz
\0
\^, \$, \\, \., \*, \+, \?, \(, \), \[, \], \\{, \\}, \|, \/

\xHH
\uHHHH
\u{HHH}
```

> [!NOTE]
> `,` 不属于语法。

### 参数

- `HHH`
  - : 表示字符的 Unicode 码位的十六进制数。`\xHH` 形式必须包含两位十六进制数字；`\uHHHH` 形式必须包含四位；`\u{HHH}` 形式可包含 1 到 6 位十六进制数字。

## 描述

正则表达式中支持以下字符转义：

- `\f`、`\n`、`\r`、`\t`、`\v`
  - : 与[字符串字面量](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#转义序列)中的相同，但 `\b` 除外——在正则表达式中它表示[词边界](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)，除非位于[字符类](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)内部。
- `\c` 后跟随从 `A` 到 `Z` 或从 `a` 到 `z` 的字母
  - : 表示控制字符，其值等于字母字符值模 32 的余数。例如，`\cJ` 表示换行符（`\n`），因为字母 `J` 的码位为 74，而 74 模 32 等于 10，即换行符的码位。由于大写字母与其小写形式相差 32，因此 `\cJ` 和 `\cj` 具有相同效果。此形式可用于表示码位为 1 至 26 的控制字符。
- `\0`
  - : 表示 U+0000 NUL 字符。其后不能跟数字（否则会形成[遗留八进制转义序列](/zh-CN/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#转义序列)）。
- `\^`、`\$`、`\\`、`\.`、`\*`、`\+`、`\?`、`\(`、`\)`、`\[`、`\]`、`\\{`、`\\}`、`\|`、`\/`
  - : 表示字符本身。例如，`\\` 表示反斜杠，`\(` 表示左括号。这些是正则表达式中的[语法字符](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character)（`/` 是正则表达式字面量的分隔符），因此除非位于[字符类](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)中，否则需要转义。
- `\xHH`
  - : 表示具有给定十六进制 Unicode 码位的字符。该十六进制数必须恰好为两位长度。
- `\uHHHH`
  - : 表示具有给定十六进制 Unicode 码位的字符。该十六进制数必须恰好为四位长度。在 [Unicode 感知模式](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode_感知模式)中，两个此类转义序列可用于表示代理对。（在非 Unicode 感知模式下，它们始终表示两个独立字符。）
- `\u{HHH}`
  - : 表示具有给定十六进制 Unicode 码位的字符。该十六进制数长度可为 1 至 6 位。（仅限于 [Unicode 感知模式](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode_感知模式)。）

在[非 Unicode 感知模式](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode_感知模式)下，不符合上述规则的转义序列将变为*一致转义序列*：它们表示反斜杠后跟的字符。例如，`\a` 表示字符 `a`。这种行为限制了在不引发向后兼容性问题的情况下引入新转义序列的能力，因此在 Unicode 感知模式下被禁止。

在非 Unicode 感知模式下，若无法将 `]`、`{` 和 `}` 解析为字符类结束符或量词分隔符，则允许其[解释为字面字符](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character)。此为[为 web 兼容性而保留的过时语法](/zh-CN/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp)，不应依赖此特性。

在非 Unicode 感知模式下，字符类中的转义序列 `\cX`（其中 `X` 为数字或 `_`）将按与 {{Glossary("ASCII")}} 字母相同的方式解码：`\c0` 与 `\cP` 经模 32 运算后结果相同。此外，若在任何位置遇到 `\cX` 形式且 `X` 并非已识别字符时，反斜杠将被视为字面字符。这些语法同样已弃用。

```js
/[\c0]/.test("\x10"); // true
/[\c_]/.test("\x1f"); // true
/[\c*]/.test("\\"); // true
/\c/.test("\\c"); // true
/\c0/.test("\\c0"); // true（\c0 语法只在字符类中支持）
```

## 示例

### 使用字符转义

当需要匹配无法直接表示的字符时，字符转义非常有用。例如，在正则表达式字面量中无法直接使用换行符，因此必须使用字符转义：

```js
const pattern = /a\nb/;
const string = `a
b`;
console.log(pattern.test(string)); // true
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [字符类](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)指南
- [正则表达式](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions)
- [字符类：`[...]`、`[^...]`](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
- [字符类转义：`\d`、`\D`、`\w`、`\W`、`\s`、`\S`](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
- [字面字符：`a`、`b`](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character)
- [Unicode 字符类转义：`\p{...}`、`\P{...}`](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)
- [反向引用：`\1`、`\2`](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)
- [具名反向引用：`\k<name>`](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
- [单词边界断言：`\b`、`\B`](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
