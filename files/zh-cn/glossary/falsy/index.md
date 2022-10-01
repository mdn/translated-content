---
title: Falsy
slug: Glossary/Falsy
---

**falsy** 值（虚值）是在 {{Glossary("Boolean")}} 上下文中认定为 false 的值。

{{Glossary("JavaScript")}} 在需要用到布尔类型值的上下文中使用强制类型转换 ({{Glossary("Type_Conversion", "Type Conversion")}} ) 将值转换为布尔值，例如[条件语句](/zh-CN/docs/learn/JavaScript/Building_blocks/conditionals)和循环语句。

在 JavaScript 中只有 8 个 **falsy** 值。

> **备注：** 这意味着当 JavaScript 期望一个布尔值，并被给与下面值中的一个时，它总是会被当做 false。

| 值                               | 说明                                                                                                                                                                                  |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `false`                          | [false](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#Future_reserved_keywords_in_older_standards) 关键字                                                                      |
| 0                                | 数值 [zero](/zh-CN/docs/Web/JavaScript/Data_structures#Number_type)                                                                                                                   |
| -0                               | 数值 负 [zero](/zh-CN/docs/Web/JavaScript/Data_structures#Number_type)                                                                                                                |
| 0n                               | 当 [BigInt](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt) 作为布尔值使用时，遵从其作为数值的规则。`0n` 是 _falsy_ 值。                                                  |
| "", '', \`\`                       | 这是一个空字符串 (字符串的长度为零). JavaScript 中的字符串可用双引号 **`""`**, 单引号 `''`, 或 [模板字面量](/zh-CN/docs/Web/JavaScript/Reference/Template_literals) **` `` `** 定义。 |
| {{Glossary("null")}}     | [null](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null) - 缺少值                                                                                                             |
| {{Glossary("undefined")}} | [undefined](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined) - 原始值                                                                                                   |
| {{Glossary("NaN")}}         | [NaN](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN) - 非数值                                                                                                               |

## 示例

JavaScript 中 _falsy_ 值的例子 (在布尔值上下文中被转换为 false，从而*绕过*了 `if` 代码块):

```js
if (false)
if (null)
if (undefined)
if (0)
if (0n)
if (NaN)
if ('')
if ("")
if (``)
if (document.all)
```

### 逻辑与操作符 &&

如果第一个对象（译注：原文如此）是 falsy 值，则返回那个对象：

```js
let pet = false && "dog";

// ↪ false
```

> **备注：** `document.all` 在过去被用于浏览器检测，是 [HTML 规范在此定义了](https://www.whatwg.org/specs/web-apps/current-work/multipage/obsolete.html#dom-document-all)故意与 ECMAScript 标准相违背的（译者注：`document.all` 虽然是一个对象，但其转换为 boolean 类型是 false），以保持与历史代码的兼容性 (`if (document.all) { // Internet Explorer code here }` 或使用 `document.all` 而不先检查它的存在：`document.all.foo`).

falsy 有时会写作 **falsey**，虽然在英语中，将一个单词转换成形容词时，通常会去掉末尾的字母 e，加上后缀 y。(noise => noisy, ice => icy, shine => shiny)

## 更多

- {{Glossary("Truthy")}}
- {{Glossary("Boolean")}}
