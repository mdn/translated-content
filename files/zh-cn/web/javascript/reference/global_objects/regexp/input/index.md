---
title: RegExp.input ($_)
slug: Web/JavaScript/Reference/Global_Objects/RegExp/input
---

{{JSRef}} {{non-standard_header}}

**`input`** 非标准属性是正则表达式静态属性，含有正则表达式所匹配的字符串。`RegExp.$_`是这个属性的别名。

## 语法

```plain
RegExp.input
RegExp.$_
```

## 描述

`input` 属性是静态的，并不是正则表达式独立对象的属性。反之，你应始终将其使用为 `RegExp.input` 或者 `RegExp.$_`。

当正则表达式上搜索的字符串发生改变，并且字符串匹配时，**`input`** 属性的值会修改。

## 示例

### 使用 `input` 和 `$_`

```js
var re = /hi/g;
re.test("hi there!");
RegExp.input; // "hi there!"
re.test("foo"); // 新测试，不匹配
RegExp.$_; // "hi there!"
re.test("hi world!"); // 新测试，匹配
RegExp.$_; // "hi world!"
```

## 规范

非标准。并不是任何现行规范的一部分。

## 浏览器兼容性

{{Compat}}

## 另见

- {{non-standard_inline}} {{jsxref("RegExp.lastMatch", "RegExp.lastMatch ($&amp;)")}}
- {{non-standard_inline}} {{jsxref("RegExp.lastParen", "RegExp.lastParen ($+)")}}
- {{non-standard_inline}} {{jsxref("RegExp.leftContext", "RegExp.leftContext ($`)")}}
- {{non-standard_inline}} {{jsxref("RegExp.rightContext", "RegExp.rightContext ($')")}}
- {{non-standard_inline}} {{jsxref("RegExp.n", "RegExp.$1-$9")}}
