---
title: 正则表达式
slug: Web/JavaScript/Reference/Regular_expressions
l10n:
  sourceCommit: 4f86aad2b0b66c0d2041354ec81400c574ab56ca
---

**正则表达式**（简称 _regex_）允许开发人员根据模式匹配字符串、提取子匹配信息，或简单地测试字符串是否符合该模式。正则表达式在许多编程语言中都有使用，JavaScript 的语法受 [Perl](https://www.perl.org/) 的启发。

我们建议你阅读[正则表达式指南](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions)，以全面了解可用的正则表达式语法及其工作原理。

## 描述

[_正则表达式_](https://zh.wikipedia.org/wiki/正则表达式)是形式语言理论中的一个重要概念。正则表达式是一种描述可能是无限的字符串集合（称为*语言*）的方法。正则表达式的核心需要具备以下特征：

- 可在语言中使用的一系列*字符*，称为*字母表*。
- _连接_：`ab` 表示“字符 `a` 后跟字符 `b`”。
- _并集_：`a|b` 表示“`a` 或 `b`”。
- _克莱尼星号_（Kleene star）：`a*` 表示“零个或多个 `a` 字符”。

假设有一个有限的字母表（如 26 个英文字母或整个 Unicode 字符集），那么所有正则表达式语言都可以通过上述特征生成。当然，许多模式用这种方式来表达非常繁琐（如“10 位数字”或“一个非空格的字符”），因此 JavaScript 正则表达式包含许多速记符号，下面将一一介绍。

> [!NOTE]
> 由于存在[反向引用](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)（正则表达式必须具有有限状态），JavaScript 正则表达式实际上并不“正则”。不过，反向引用仍然是一个非常有用的特性。

### 创建正则表达式

正则表达式通常是用正斜线（`/`）将模式括起来，以字面量形式创建的：

```js
const regex1 = /ab+c/g;
```

也可以使用 {{jsxref("RegExp/RegExp", "RegExp()")}} 构造函数来创建正则表达式：

```js
const regex2 = new RegExp("ab+c", "g");
```

它们在运行时没有区别，但可能会对性能、静态分析性和编写转义字符时的人体工程学问题产生影响。有关详细信息，请参阅 [`RegExp`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp#字面量和构造函数) 参考资料。

### 正则表达式标志

标志（flag）是一种特殊参数，可以改变正则表达式的解释方式或与输入文本的交互方式。每个标志都与 `RegExp` 对象上的一个访问器属性相对应。

| 标志 | 描述                                                       | 对应属性                                        |
| ---- | ---------------------------------------------------------- | ----------------------------------------------- |
| `d`  | 生成子串匹配的索引。                                       | {{jsxref("RegExp/hasIndices", "hasIndices")}}   |
| `g`  | 全局查找。                                                 | {{jsxref("RegExp/global", "global")}}           |
| `i`  | 忽略大小写查找。                                           | {{jsxref("RegExp/ignoreCase", "ignoreCase")}}   |
| `m`  | 允许 `^` 和 `$` 匹配换行符。                               | {{jsxref("RegExp/multiline", "multiline")}}     |
| `s`  | 允许 `.` 匹配换行符。                                      | {{jsxref("RegExp/dotAll", "dotAll")}}           |
| `u`  | “Unicode”；将模式视为 Unicode 码位序列。                   | {{jsxref("RegExp/unicode", "unicode")}}         |
| `v`  | 升级 `u` 模式，提供更多 Unicode 码特性。                   | {{jsxref("RegExp/unicodeSets", "unicodeSets")}} |
| `y`  | 执行“粘性（sticky）”搜索，从目标字符串的当前位置开始匹配。 | {{jsxref("RegExp/sticky", "sticky")}}           |

下面各节按语法性质列出了所有可用的正则表达式语法。

### 断言

断言（assertion）是一种结构，用于测试字符串在指定位置是否满足特定条件，但不消耗字符。断言不能[使用量词](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)。

- [输入边界断言：`^`、`$`](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
  - : 断言当前位置是输入的开始或结束，如果设置了 `m` 标志，则断言当前位置是一行的开始或结束。
- [前瞻断言：`(?=...)`、`(?!...)`](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
  - : 断言当前位置是否被某个模式跟随。
- [后瞻断言：`(?<=...)`、`(?<!..)`](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
  - : 断言当前位置是否在某个模式之前。
- [单词边界断言：`\b`、`\B`](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
  - : 断言当前位置是单词边界。

### 原子

原子（atom）是正则表达式的最基本单位。每个原子*消耗*字符串中的一个或多个字符，要么匹配失败，要么允许模式继续匹配下一个原子。

- [反向引用：`\1`、`\2`](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)
  - : 匹配先前匹配的、用捕获组捕获的子模式。
- [捕获组：`(...)`](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
  - : 匹配子模式并保存匹配信息。
- [字符类：`[...]`、`[^...]`](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
  - : 匹配字符集中的任何字符。启用 [`v`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) 标志后，还可用于匹配长度有限的字符串。
- [字符类转义：`\d`、`\D`、`\w`、`\W`、`\s`、`\S`](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
  - : 匹配预定义字符集中的任何字符。
- [字符转义：`\n`、`\u{...}`](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
  - : 匹配可能无法方便地以字面形式表示的字符。
- [字面字符：`a`、`b`](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character)
  - : 匹配特定字符。
- [具名反向引用：`\k<name>`](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
  - : 匹配先前匹配的子模式，并使用已命名的捕获组进行捕获。
- [具名捕获组：`(?<name>...)`](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
  - : 匹配子模式并保存匹配信息。以后可以用自定义名称而不是模式中的索引来识别该组。
- [非捕获分组：`(?:...)`](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
  - : 匹配子模式，但不记忆匹配信息。
- [Unicode 字符类转义：`p{...}`、`\P{...}`](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)
  - : 匹配 Unicode 属性指定的字符集。启用 [`v`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) 标志后，也可用于匹配长度有限的字符串。
- [通配符：`.`](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard)
  - : 匹配除行结束符外的任何字符，除非设置了 `s` 标志。

### 其他特性

这些特征本身不指定任何模式，但用于组成模式。

- [析取（逻辑或）：`|`](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
  - : 匹配由 `|` 字符分隔的一组备选字符中的任意一个。
- [量词：`*`、`+`、`?`、`{n}`、`{n,}`、`{n,m}`](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)
  - : 匹配原子序列一定次数。

### 转义序列

在正则表达式中，*转义序列*是指任何一种由 `\` 后跟一个或多个字符组成的语法。根据 `\` 后面的字符的不同，它们的作用也大相径庭。下面列出了所有有效的“转义序列”：

| 转义序列 | 跟随                                                 | 含义                                                                   |
| -------- | ---------------------------------------------------- | ---------------------------------------------------------------------- |
| `\B`     | 无                                                   | [非单词边界断言][WBA]                                                  |
| `\D`     | 无                                                   | 代表非数字字符的[字符类转义][CCE]                                      |
| `\P`     | `{`、Unicode 属性和/或值、`}`                        | 代表不具有指定 Unicode 类型的 [Unicode 字符类转义][UCCE]               |
| `\S`     | 无                                                   | 代表非空白字符的[字符类转义][CCE]                                      |
| `\W`     | 无                                                   | 代表非单词字符的[字符类转义][CCE]                                      |
| `\b`     | 无                                                   | [单词边界断言][WBA]；属于[字符类][CC]，代表 U+0008（BACKSPACE）        |
| `\c`     | 从 `A` 到 `Z` 或从 `a` 到 `z` 的字母                 | 代表控制字符的[字符转义][CE]，其值等于字母的字符值乘以 32              |
| `\d`     | 无                                                   | 表示数字字符（`0` 至`9`）的[字符类转义][CCE]                           |
| `\f`     | 无                                                   | 代表 U+000C（FORM FEED）字符的[字符转义][CE]                           |
| `\k`     | `<`、量词、`>`                                       | [具名反向引用][NBR]                                                    |
| `\n`     | 无                                                   | 代表 U+000A（LINE FEED）字符的[字符转义][CE]                           |
| `\p`     | `{`、Unicode 属性和/或值、`}`                        | 代表具有指定 Unicode 属性的字符的[Unicode 字符类转义][UCCE]            |
| `\q`     | `{`、一个字符串、`}`                                 | 仅在 [`v` 模式字符类][VCC]中有效；表示要按字面匹配的字符串             |
| `\r`     | 无                                                   | 代表 U+000D（CARRIAGE RETURN）字符的[字符转义][CE]                     |
| `\s`     | 无                                                   | 代表空白字符的[字符类转义][CCE]                                        |
| `\t`     | 无                                                   | 代表 U+0009（CHARACTER TABULATION）字符的[字符转义][CE]                |
| `\u`     | 4 个十六进制数字；或 `{`、1 至 6 个十六进制数字、`}` | 代表具有给定码点的字符的[字符转义][CE]                                 |
| `\v`     | 无                                                   | 代表 U+000B（LINE TABULATION）字符的[字符转义][CE]                     |
| `\w`     | 无                                                   | 代表单字（`A` 到 `Z`、`a` 到 `z`、`0` 到 `9`、`_`）的[字符类转义][CCE] |
| `\x`     | 2 个十六进制数字                                     | 表示具有给定值的字符的[字符转义][CE]                                   |
| `\0`     | 无                                                   | 代表 U+0000（NULL）字符的[字符转义][CE]                                |

[CC]: /zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Character_class
[CCE]: /zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape
[CE]: /zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape
[NBR]: /zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference
[UCCE]: /zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape
[VCC]: /zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v_模式字符类
[WBA]: /zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion

后跟任何其他数字字符的 `\` 变成[传统的八进制转义序列](/zh-CN/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#escape_sequences)，在 [Unicode 感知模式](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_模式)中是禁止的。

此外，`\` 后面还可以跟一些非字母或数字字符，在这种情况下，转义序列总是[字符转义](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)，代表转义字符本身：

- `\$`、`\(`、`\)`、`\*`、`\+`、`\.`、`\/`、`\?`、`\[`、`\\`、`\]`、`\^`、`\{`、`\|`、`\}`：在任何地方都有效
- `\-`：仅在[字符类](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)中有效
- `\!`、`\#`、`\%`、`\&`、`\,`、`\:`、`\;`、`\<`、`\=`、`\>`、`\@`、`` \` ``、`\~`：仅在 [v-模式字符类](/zh-CN/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v_模式字符类)中有效

其他 {{Glossary("ASCII")}} 字符，即空格字符、`"`、`'`、`_` 和上述未提及的任何字母字符，都不是有效的转义序列。在 [Unicode 非感知模式](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_模式)下，不属于上述转义序列的转义序列称为*一致转义序列*（identity escape）：它们代表反斜杠后的字符。例如，`\a` 表示字符 `a`。这种行为限制了在不引起向后兼容性问题的情况下引入新转义序列的能力，因此在 Unicode 感知模式下是禁止的。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [正则表达式](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions)指南
- {{jsxref("RegExp")}}
