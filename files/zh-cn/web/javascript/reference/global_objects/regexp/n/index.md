---
title: RegExp.$1-$9
slug: Web/JavaScript/Reference/Global_Objects/RegExp/n
---

{{JSRef}} {{non-standard_header}}

非标准 **$1, $2, $3, $4, $5, $6, $7, $8, $9** 属性是包含括号子串匹配的正则表达式的静态和只读属性。

## 语法

```plain
RegExp.$1
RegExp.$2
RegExp.$3
RegExp.$4
RegExp.$5
RegExp.$6
RegExp.$7
RegExp.$8
RegExp.$9
```

## 描述

$1, ..., $9 属性是静态的，他不是独立的正则表达式属性。所以，我们总是像这样子使用他们`RegExp.$1`, ..., `RegExp.$9`.

属性的值是只读的而且只有在正确匹配的情况下才会改变。

括号匹配项是无限的，但是 RegExp 对象能捕获的只有九个。你可以通过返回一个数组索引来取得所有的括号匹配项。

这些属性可以在{{jsxref("String.replace")}} 方法中替换字符串。在这种情况下，不用在前面加上 RegExp。下面的例子将详细说明。当正则表达式中不包含括号，脚本中的 `$n`'s 就是字面上的意思 (当 n 是正整数).

## 示例

### `$n` 在 `String.replace 中的应用`

以下脚本用 {{jsxref("String.prototype.replace()", "replace()")}} 方法去匹配一个 first last 格式的 name{{jsxref("String")}} 实例 输出 last first 格式。在替换文本里，脚本用 `$1` 和 `$2` 表示正则表达式中的括号匹配项的结果。

```js
var re = /(\w+)\s(\w+)/;
var str = "John Smith";
str.replace(re, "$2, $1"); // "Smith, John"
RegExp.$1; // "John"
RegExp.$2; // "Smith"
```

## 技术指标

非标准。不属于当前的任何规范。

## 浏览器兼容性

{{Compat}}

## 参见

- {{non-standard_inline}} {{jsxref("RegExp.input", "RegExp.input ($_)")}}
- {{non-standard_inline}} {{jsxref("RegExp.lastMatch", "RegExp.lastMatch ($&amp;)")}}
- {{non-standard_inline}} {{jsxref("RegExp.lastParen", "RegExp.lastParen ($+)")}}
- {{non-standard_inline}} {{jsxref("RegExp.leftContext", "RegExp.leftContext ($`)")}}
- {{non-standard_inline}} {{jsxref("RegExp.rightContext", "RegExp.rightContext ($')")}}
