---
title: RegExp() 构造函数
short-title: RegExp()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/RegExp
---

**`RegExp`** 用于创建正则表达式对象，该对象用于将文本与一个模式匹配

阅读 [JavaScript 指南](/zh-CN/docs/Web/JavaScript/Guide)中的[正则表达式](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions)一节以了解正则表达式。

{{InteractiveExample("JavaScript 演示：RegExp() 构造函数")}}

```js interactive-example
const regex1 = /\w+/;
const regex2 = new RegExp("\\w+");

console.log(regex1);
// 期望的输出：/\w+/

console.log(regex2);
// 期望的输出：/\w+/

console.log(regex1 === regex2);
// 期望的输出：false
```

## 语法

可以使用字面量、构造函数和工厂方法来创建正则表达式

```js-nolint
new RegExp(pattern)
new RegExp(pattern, flags)
RegExp(pattern)
RegExp(pattern, flags)
```

### 参数

- `pattern`
  - : 正则表达式的文本。从 ES5 开始，这也可以是另一个 `RegExp` 对象或文字（仅用于两个 RegExp 构造函数符号）。模式可以包含[特殊字符](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions#使用特殊字符)来匹配比字面值字符串更广泛的值范围。
- `flags`
  - : 如果指定，`flags` 是包含要添加的标志的字符串。

    或者，如果为模式提供了一个对象，flags 字符串将替换该对象的任何标志 (并且`lastIndex`将重置为 0)(从 ES2015 开始)。

    如果没有指定`flags`并且提供了一个正则表达式对象，则该对象的 flags(和 lastIndex 值) 将被复制。

    `flags` 可包含下列任何字符的组合：
    - `g`（全局匹配）
      - : 找到所有的匹配，而不是在第一个匹配之后停止。
    - `i`（忽略大小写）
      - : 如果`u`标志也被启用，使用 Unicode 大小写折叠。
    - `m`（多行）
      - : 将开始和结束字符（`^` 和 `$`）视为在多行上工作。换句话说，匹配*每一*行的开头或结尾*（由`\n`或者`\r` 分隔），而不仅仅是整个输入字符串的开头或结尾。
    - `s`（点号匹配所有字符）
      - : 允许 `.` 去匹配新的行
    - `u`（unicode）
      - : 将 `pattern` 视为由 Unicode 码位组成的序列。
    - `y`（粘性匹配）
      - : 仅从目标字符串中该正则表达式 `lastIndex` 属性所指示的索引位置开始匹配。不会尝试从任何更靠后的索引位置开始匹配。

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

正则表达式对象的构造函数—例如，new RegExp('ab+c')—会导致正则表达式的运行时编译。当你知道正则表达式模式将发生变化时，或者你不知道该模式，但正在从其他来源 (如用户输入) 获取它时，请使用构造函数。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中具有许多现代 `RegExp` 特性（`dotAll`、`sticky` 标志、具名捕获组，等等）的 polyfill](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [正则表达式](/en-US/docs/Web/JavaScript/Guide/Regular_expressions)指南
- {{jsxref("String.prototype.match()")}}
- {{jsxref("String.prototype.replace()")}}
