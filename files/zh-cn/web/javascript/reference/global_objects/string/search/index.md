---
title: String.prototype.search()
slug: Web/JavaScript/Reference/Global_Objects/String/search
---

{{JSRef}}

**`search()`** 方法执行正则表达式和 {{jsxref("String")}} 对象之间的一个搜索匹配。

{{EmbedInteractiveExample("pages/js/string-search.html")}}

## 语法

```plain
str.search(regexp)
```

### 参数

- `regexp`
  - : 一个{{jsxref("RegExp", "正则表达式（regular expression）")}}对象。如果传入一个非正则表达式对象 `regexp`，则会使用 `new RegExp(regexp)` 隐式地将其转换为正则表达式对象。

### 返回值

如果匹配成功，则 `search()` 返回正则表达式在字符串中首次匹配项的索引;否则，返回 `-1`。

## 描述

当你想要知道字符串中是否存在某个模式（pattern）时可使用 `search()`，类似于正则表达式的 {{jsxref("RegExp.test", "test()")}} 方法。当要了解更多匹配信息时，可使用 {{jsxref("String.match", "match()")}}（但会更慢一些），该方法类似于正则表达式的 {{jsxref("RegExp.exec", "exec()")}} 方法。

## 示例

### 示例：使用 `search()`

下面的例子中用两个不同的正则表达式对同一个字符串执行搜索匹配，得到一个成功匹配（正数返回值）和一个失败匹配（-1）。

```js
var str = "hey JudE";
var re = /[A-Z]/g;
var re2 = /[.]/g;
console.log(str.search(re)); // returns 4, which is the index of the first capital letter "J"
console.log(str.search(re2)); // returns -1 cannot find '.' dot punctuation
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [在 JavaScript 中使用正则表达式](/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions)
- {{jsxref("String.prototype.match()")}}
- {{jsxref("RegExp.prototype.exec()")}}
