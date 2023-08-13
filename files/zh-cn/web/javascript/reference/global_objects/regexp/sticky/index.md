---
title: RegExp.prototype.sticky
slug: Web/JavaScript/Reference/Global_Objects/RegExp/sticky
---

{{JSRef}}

**`sticky`** 属性反映了搜索是否具有粘性（仅从正则表达式的 {{jsxref("RegExp.lastIndex", "lastIndex")}} 属性表示的索引处搜索）。`sticky` 是正则表达式对象的只读属性。

{{EmbedInteractiveExample("pages/js/regexp-prototype-sticky.html", "taller")}}

{{js_property_attributes(0, 0, 1)}}

## 描述

`sticky` 的值是 {{jsxref("Boolean")}} ，并在 `y` 标志使用时为真; 否则为假。`y` 标志指示，仅从正则表达式的 {{jsxref("RegExp.lastIndex", "lastIndex")}} 属性表示的索引处为目标字符串匹配（并且不会尝试从后续索引匹配）。如果一个表达式同时指定了 `sticky` 和 `global`，其将会忽略 `global` 标志。

你不能直接更改这个属性，它是只读的。

## 示例

### 使用带 sticky 标志的正则表达式

```js
var str = "#foo#";
var regex = /foo/y;

regex.lastIndex = 1;
regex.test(str); // true（译注：此例仅当 lastIndex = 1 时匹配成功，这就是 sticky 的作用）
regex.lastIndex = 5;
regex.test(str); // false（lastIndex 被 sticky 标志考虑到，从而导致匹配失败）
regex.lastIndex; // 0（匹配失败后重置）
```

### 锚定的 sticky 标志

火狐的 SpiderMonkey 引擎的几个版本有一个 [bug](https://bugzilla.mozilla.org/show_bug.cgi?id=773687)，处理 `^` 断言和 sticky 标志时，会允许使用了 sticky 标志的表达式从 `^` 断言开始匹配，这是不对的。这个 bug 是在 Firefox 3.6 之后的某个版本引入的（which had the sticky flag but not the bug）并于 2015 年修复。可能正因为这个 bug，ES2015 规范 [特别指出](http://www.ecma-international.org/ecma-262/7.0/index.html#sec-assertion)：

> 当使用带有 `y` 标识的匹配模式时，^ 断言总是会匹配输入的开始位置或者（如果是多行模式）每一行的开始位置。

正确行为的示例：

```js
var regex = /^foo/y;
regex.lastIndex = 2;
regex.test("..foo"); // false - 索引 2 不是字符串的开始

var regex2 = /^foo/my;
regex2.lastIndex = 2;
regex2.test("..foo"); // false - 索引 2 不是字符串或行的开始
regex2.lastIndex = 2;
regex2.test(".\nfoo"); // true - 索引 2 是行的开始
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("RegExp.lastIndex")}}
- {{jsxref("RegExp.prototype.global")}}
- {{jsxref("RegExp.prototype.ignoreCase")}}
- {{jsxref("RegExp.prototype.multiline")}}
- {{jsxref("RegExp.prototype.source")}}
