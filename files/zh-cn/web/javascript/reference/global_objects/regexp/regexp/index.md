---
title: RegExp() constructor
slug: Web/JavaScript/Reference/Global_Objects/RegExp/RegExp
---

{{JSRef}}

**`RegExp`** 用于创建正则表达式对象，该对象用于将文本与一个模式匹配

阅读[JavaScript 指南](/zh-CN/docs/Web/JavaScript/Guide)中的[正则表达式](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions)一节以了解正则表达式。

{{EmbedInteractiveExample("pages/js/regexp-constructor.html")}}

## 语法

可以使用字面量、构造函数和工厂方法来创建正则表达式

```plain
/pattern/flags
new RegExp(pattern[, flags])
RegExp(pattern[, flags])
```

### 参数

- `pattern`
  - : 正则表达式的文本。从 ES5 开始，这也可以是另一个 `RegExp` 对象或文字（仅用于两个 RegExp 构造函数符号）。模式可以包含[特殊字符](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions#使用特殊字符)来匹配比字面值字符串更广泛的值范围。
- `flags`

  - : 如果指定，`flags` 是包含要添加的标志的字符串。

    或者，如果为模式提供了一个对象，flags 字符串将替换该对象的任何标志 (并且`lastIndex`将重置为 0)(从 ES2015 开始)。

    如果没有指定`flags`并且提供了一个正则表达式对象，则该对象的 flags(和 lastIndex 值) 将被复制。

    `flags` 可包含下列任何字符的组合：

    - `g` （全局匹配）
      - : 找到所有的匹配，而不是在第一个匹配之后停止。
    - `i` （忽略大小写）
      - : 如果`u`标志也被启用，使用 Unicode 大小写折叠。
    - `m` （多行匹配）
      - : 将开始和结束字符 (`^` and `$`) 视为在多行上工作。换句话说，匹配每一行的开头或结尾*each* line (由`\n`或者`\r` 分隔)，而不仅仅是整个输入字符串的开头或结尾。
    - `s` （点号匹配所有字符）
      - : 允许`.` 去匹配新的行
    - `u` （unicode）
      - : Treat `pattern` as a sequence of Unicode code points. (See also [Binary strings](/zh-CN/docs/Web/API/DOMString/Binary)).
    - `y` （sticky，粘性匹配）
      - : Matches only from the index indicated by the `lastIndex` property of this regular expression in the target string. Does not attempt to match from any later indexes.

## 示例

### 字面量和构造函数

这里有两种方法创建`RegExp` 对象：_字面量_ 和 _构造函数_.

- **文字符号的** 参数用斜杠括起来，不使用引号。
- **构造函数的** 参数不包含在斜杠之间，但使用引号。

以下三个表达式创建相同的正则表达式：

```js
/ab+c/i;
new RegExp(/ab+c/, "i"); // 字面量
new RegExp("ab+c", "i"); // 构造函数
```

当表达式被求值时，文字表示法会导致对正则表达式的编译。当正则表达式保持不变时，请使用字面量表示法。例如，如果使用字面量表示法来构造循环中使用的正则表达式，则不会在每次迭代时重新编译正则表达式。

正则表达式对象的构造函数—例如，new RegExp('ab+c')—会导致正则表达式的运行时编译。当您知道正则表达式模式将发生变化时，或者您不知道该模式，但正在从其他来源 (如用户输入) 获取它时，请使用构造函数。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [JavaScript 指南中的](/zh-CN/docs/Web/JavaScript/Guide)
- [正则表达式一节](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions)
- {{jsxref("String.prototype.match()")}}
- {{jsxref("String.prototype.replace()")}}
