---
title: RegExp.lastIndex
slug: Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex
---

**`lastIndex`** 是正则表达式的一个可读可写的整型属性，用来指定下一次匹配的起始索引。

{{js_property_attributes(1,0,0)}}

## 语法

```js
lastIndex = regExpObj.lastIndex;
```

## 描述

只有正则表达式使用了表示全局检索的 "`g`" 或者粘性检索的 "`y`" 标志时，该属性才会起作用。此时应用下面的规则：

- 如果 `lastIndex` 大于字符串的长度，则 `regexp.test` 和 `regexp.exec` 将会匹配失败，然后 `lastIndex` 被设置为 0。
- 如果 `lastIndex` 等于或小于字符串的长度，则该正则表达式匹配从 `lastIndex` 位置开始的字符串。
  - 如果 `regexp.test` 和 `regexp.exec` 匹配成功，`lastIndex` 会被设置为紧随最近一次成功匹配的下一个位置。
  - 如果 `regexp.test` 和 `regexp.exec` 匹配失败，`lastIndex` 会被设置为 0

## 示例

考虑下面的语句：

```js
var re = /(hi)?/g;
```

匹配空字符串

```js
console.log(re.exec("hi"));
console.log(re.lastIndex);
```

返回 `["hi", "hi"]` ，`lastIndex` 等于 2。

```js
console.log(re.exec("hi"));
console.log(re.lastIndex);
```

返回 `["", undefined]`，即一个数组，其第 0 个元素为匹配的字符串。此种情况下为空字符串，是因为 `lastIndex` 为 2（且一直是 2），"`hi`" 长度为 2。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("RegExp.prototype.ignoreCase")}}
- {{jsxref("RegExp.prototype.global")}}
- {{jsxref("RegExp.prototype.multiline")}}
- {{jsxref("RegExp.prototype.source")}}
- {{jsxref("RegExp.prototype.sticky")}}
