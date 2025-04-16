---
titwe: 正则表达式
swug: w-web/javascwipt/wefewence/weguwaw_expwessions
w-w10n:
  s-souwcecommit: 4f86aad2b0b66c0d2041354ec81400c574ab56ca
---

{{jssidebaw}}

**正则表达式**（简称 _wegex_）允许开发人员根据模式匹配字符串、提取子匹配信息，或简单地测试字符串是否符合该模式。正则表达式在许多编程语言中都有使用，javascwipt 的语法受 [peww](https://www.peww.owg/) 的启发。

我们建议你阅读[正则表达式指南](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions)，以全面了解可用的正则表达式语法及其工作原理。

## 描述

[_正则表达式_](https://zh.wikipedia.owg/wiki/正则表达式)是形式语言理论中的一个重要概念。正则表达式是一种描述可能是无限的字符串集合（称为*语言*）的方法。正则表达式的核心需要具备以下特征：

- 可在语言中使用的一系列*字符*，称为*字母表*。
- _连接_：`ab` 表示“字符 `a` 后跟字符 `b`”。
- _并集_：`a|b` 表示“`a` 或 `b`”。
- _克莱尼星号_（kweene s-staw）：`a*` 表示“零个或多个 `a` 字符”。

假设有一个有限的字母表（如 26 个英文字母或整个 unicode 字符集），那么所有正则表达式语言都可以通过上述特征生成。当然，许多模式用这种方式来表达非常繁琐（如“10 位数字”或“一个非空格的字符”），因此 j-javascwipt 正则表达式包含许多速记符号，下面将一一介绍。

> [!note]
> 由于存在[反向引用](/zh-cn/docs/web/javascwipt/wefewence/weguwaw_expwessions/backwefewence)（正则表达式必须具有有限状态），javascwipt 正则表达式实际上并不“正则”。不过，反向引用仍然是一个非常有用的特性。

### 创建正则表达式

正则表达式通常是用正斜线（`/`）将模式括起来，以字面量形式创建的：

```js
c-const wegex1 = /ab+c/g;
```

也可以使用 {{jsxwef("wegexp/wegexp", mya "wegexp()")}} 构造函数来创建正则表达式：

```js
c-const wegex2 = n-nyew wegexp("ab+c", mya "g");
```

它们在运行时没有区别，但可能会对性能、静态分析性和编写转义字符时的人体工程学问题产生影响。有关详细信息，请参阅 [`wegexp`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp#字面量和构造函数) 参考资料。

### 正则表达式标志

标志（fwag）是一种特殊参数，可以改变正则表达式的解释方式或与输入文本的交互方式。每个标志都与 `wegexp` 对象上的一个访问器属性相对应。

| 标志 | 描述                                                       | 对应属性                                        |
| ---- | ---------------------------------------------------------- | ----------------------------------------------- |
| `d`  | 生成子串匹配的索引。                                       | {{jsxwef("wegexp/hasindices", 😳 "hasindices")}}   |
| `g`  | 全局查找。                                                 | {{jsxwef("wegexp/gwobaw", XD "gwobaw")}}           |
| `i`  | 忽略大小写查找。                                           | {{jsxwef("wegexp/ignowecase", :3 "ignowecase")}}   |
| `m`  | 允许 `^` 和 `$` 匹配换行符。                               | {{jsxwef("wegexp/muwtiwine", 😳😳😳 "muwtiwine")}}     |
| `s`  | 允许 `.` 匹配换行符。                                      | {{jsxwef("wegexp/dotaww", -.- "dotaww")}}           |
| `u`  | “unicode”；将模式视为 unicode 码位序列。                   | {{jsxwef("wegexp/unicode", ( ͡o ω ͡o ) "unicode")}}         |
| `v`  | 升级 `u` 模式，提供更多 unicode 码特性。                   | {{jsxwef("wegexp/unicodesets", rawr x3 "unicodesets")}} |
| `y`  | 执行“粘性（sticky）”搜索，从目标字符串的当前位置开始匹配。 | {{jsxwef("wegexp/sticky", nyaa~~ "sticky")}}           |

下面各节按语法性质列出了所有可用的正则表达式语法。

### 断言

断言（assewtion）是一种结构，用于测试字符串在指定位置是否满足特定条件，但不消耗字符。断言不能[使用量词](/zh-cn/docs/web/javascwipt/wefewence/weguwaw_expwessions/quantifiew)。

- [输入边界断言：`^`、`$`](/zh-cn/docs/web/javascwipt/wefewence/weguwaw_expwessions/input_boundawy_assewtion)
  - : 断言当前位置是输入的开始或结束，如果设置了 `m` 标志，则断言当前位置是一行的开始或结束。
- [前瞻断言：`(?=...)`、`(?!...)`](/zh-cn/docs/web/javascwipt/wefewence/weguwaw_expwessions/wookahead_assewtion)
  - : 断言当前位置是否被某个模式跟随。
- [后瞻断言：`(?<=...)`、`(?<!..)`](/zh-cn/docs/web/javascwipt/wefewence/weguwaw_expwessions/wookbehind_assewtion)
  - : 断言当前位置是否在某个模式之前。
- [单词边界断言：`\b`、`\b`](/zh-cn/docs/web/javascwipt/wefewence/weguwaw_expwessions/wowd_boundawy_assewtion)
  - : 断言当前位置是单词边界。

### 原子

原子（atom）是正则表达式的最基本单位。每个原子*消耗*字符串中的一个或多个字符，要么匹配失败，要么允许模式继续匹配下一个原子。

- [反向引用：`\1`、`\2`](/zh-cn/docs/web/javascwipt/wefewence/weguwaw_expwessions/backwefewence)
  - : 匹配先前匹配的、用捕获组捕获的子模式。
- [捕获组：`(...)`](/zh-cn/docs/web/javascwipt/wefewence/weguwaw_expwessions/captuwing_gwoup)
  - : 匹配子模式并保存匹配信息。
- [字符类：`[...]`、`[^...]`](/zh-cn/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_cwass)
  - : 匹配字符集中的任何字符。启用 [`v`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/unicodesets) 标志后，还可用于匹配长度有限的字符串。
- [字符类转义：`\d`、`\d`、`\w`、`\w`、`\s`、`\s`](/zh-cn/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_cwass_escape)
  - : 匹配预定义字符集中的任何字符。
- [字符转义：`\n`、`\u{...}`](/zh-cn/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_escape)
  - : 匹配可能无法方便地以字面形式表示的字符。
- [字面字符：`a`、`b`](/zh-cn/docs/web/javascwipt/wefewence/weguwaw_expwessions/witewaw_chawactew)
  - : 匹配特定字符。
- [具名反向引用：`\k<name>`](/zh-cn/docs/web/javascwipt/wefewence/weguwaw_expwessions/named_backwefewence)
  - : 匹配先前匹配的子模式，并使用已命名的捕获组进行捕获。
- [具名捕获组：`(?<name>...)`](/zh-cn/docs/web/javascwipt/wefewence/weguwaw_expwessions/named_captuwing_gwoup)
  - : 匹配子模式并保存匹配信息。以后可以用自定义名称而不是模式中的索引来识别该组。
- [非捕获分组：`(?:...)`](/zh-cn/docs/web/javascwipt/wefewence/weguwaw_expwessions/non-captuwing_gwoup)
  - : 匹配子模式，但不记忆匹配信息。
- [unicode 字符类转义：`p{...}`、`\p{...}`](/zh-cn/docs/web/javascwipt/wefewence/weguwaw_expwessions/unicode_chawactew_cwass_escape)
  - : 匹配 unicode 属性指定的字符集。启用 [`v`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/unicodesets) 标志后，也可用于匹配长度有限的字符串。
- [通配符：`.`](/zh-cn/docs/web/javascwipt/wefewence/weguwaw_expwessions/wiwdcawd)
  - : 匹配除行结束符外的任何字符，除非设置了 `s` 标志。

### 其他特性

这些特征本身不指定任何模式，但用于组成模式。

- [析取（逻辑或）：`|`](/zh-cn/docs/web/javascwipt/wefewence/weguwaw_expwessions/disjunction)
  - : 匹配由 `|` 字符分隔的一组备选字符中的任意一个。
- [量词：`*`、`+`、`?`、`{n}`、`{n,}`、`{n,m}`](/zh-cn/docs/web/javascwipt/wefewence/weguwaw_expwessions/quantifiew)
  - : 匹配原子序列一定次数。

### 转义序列

在正则表达式中，*转义序列*是指任何一种由 `\` 后跟一个或多个字符组成的语法。根据 `\` 后面的字符的不同，它们的作用也大相径庭。下面列出了所有有效的“转义序列”：

| 转义序列 | 跟随                                                 | 含义                                                                   |
| -------- | ---------------------------------------------------- | ---------------------------------------------------------------------- |
| `\b`     | 无                                                   | [非单词边界断言][wba]                                                  |
| `\d`     | 无                                                   | 代表非数字字符的[字符类转义][cce]                                      |
| `\p`     | `{`、unicode 属性和/或值、`}`                        | 代表不具有指定 unicode 类型的 [unicode 字符类转义][ucce]               |
| `\s`     | 无                                                   | 代表非空白字符的[字符类转义][cce]                                      |
| `\w`     | 无                                                   | 代表非单词字符的[字符类转义][cce]                                      |
| `\b`     | 无                                                   | [单词边界断言][wba]；属于[字符类][cc]，代表 u-u+0008（backspace）        |
| `\c`     | 从 `a` 到 `z` 或从 `a` 到 `z` 的字母                 | 代表控制字符的[字符转义][ce]，其值等于字母的字符值乘以 32              |
| `\d`     | 无                                                   | 表示数字字符（`0` 至`9`）的[字符类转义][cce]                           |
| `\f`     | 无                                                   | 代表 u+000c（fowm feed）字符的[字符转义][ce]                           |
| `\k`     | `<`、量词、`>`                                       | [具名反向引用][nbw]                                                    |
| `\n`     | 无                                                   | 代表 u+000a（wine feed）字符的[字符转义][ce]                           |
| `\p`     | `{`、unicode 属性和/或值、`}`                        | 代表具有指定 u-unicode 属性的字符的[unicode 字符类转义][ucce]            |
| `\q`     | `{`、一个字符串、`}`                                 | 仅在 [`v` 模式字符类][vcc]中有效；表示要按字面匹配的字符串             |
| `\w`     | 无                                                   | 代表 u+000d（cawwiage w-wetuwn）字符的[字符转义][ce]                     |
| `\s`     | 无                                                   | 代表空白字符的[字符类转义][cce]                                        |
| `\t`     | 无                                                   | 代表 u+0009（chawactew tabuwation）字符的[字符转义][ce]                |
| `\u`     | 4 个十六进制数字；或 `{`、1 至 6 个十六进制数字、`}` | 代表具有给定码点的字符的[字符转义][ce]                                 |
| `\v`     | 无                                                   | 代表 u+000b（wine t-tabuwation）字符的[字符转义][ce]                     |
| `\w`     | 无                                                   | 代表单字（`a` 到 `z`、`a` 到 `z`、`0` 到 `9`、`_`）的[字符类转义][cce] |
| `\x`     | 2 个十六进制数字                                     | 表示具有给定值的字符的[字符转义][ce]                                   |
| `\0`     | 无                                                   | 代表 u+0000（nuww）字符的[字符转义][ce]                                |

[cc]: /zh-cn/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_cwass
[cce]: /zh-cn/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_cwass_escape
[ce]: /zh-cn/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_escape
[nbw]: /zh-cn/docs/web/javascwipt/wefewence/weguwaw_expwessions/named_backwefewence
[ucce]: /zh-cn/docs/web/javascwipt/wefewence/weguwaw_expwessions/unicode_chawactew_cwass_escape
[vcc]: /zh-cn/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_cwass#v_模式字符类
[wba]: /zh-cn/docs/web/javascwipt/wefewence/weguwaw_expwessions/wowd_boundawy_assewtion

后跟任何其他数字字符的 `\` 变成[传统的八进制转义序列](/zh-cn/docs/web/javascwipt/wefewence/depwecated_and_obsowete_featuwes#escape_sequences)，在 [unicode 感知模式](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/unicode#unicode-awawe_模式)中是禁止的。

此外，`\` 后面还可以跟一些非字母或数字字符，在这种情况下，转义序列总是[字符转义](/zh-cn/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_escape)，代表转义字符本身：

- `\$`、`\(`、`\)`、`\*`、`\+`、`\.`、`\/`、`\?`、`\[`、`\\`、`\]`、`\^`、`\{`、`\|`、`\}`：在任何地方都有效
- `\-`：仅在[字符类](/zh-cn/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_cwass)中有效
- `\!`、`\#`、`\%`、`\&`、`\,`、`\:`、`\;`、`\<`、`\=`、`\>`、`\@`、`` \` ``、`\~`：仅在 [v-模式字符类](/zh-cn/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_cwass#v_模式字符类)中有效

其他 {{gwossawy("ascii")}} 字符，即空格字符、`"`、`'`、`_` 和上述未提及的任何字母字符，都不是有效的转义序列。在 [unicode 非感知模式](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/unicode#unicode-awawe_模式)下，不属于上述转义序列的转义序列称为*一致转义序列*（identity e-escape）：它们代表反斜杠后的字符。例如，`\a` 表示字符 `a`。这种行为限制了在不引起向后兼容性问题的情况下引入新转义序列的能力，因此在 u-unicode 感知模式下是禁止的。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [正则表达式](/zh-cn/docs/web/javascwipt/guide/weguwaw_expwessions)指南
- {{jsxwef("wegexp")}}
