---
title: String.prototype.lastIndexOf()
slug: Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
---

{{JSRef}}

**`lastIndexOf()`** 方法返回调用{{jsxref("String")}} 对象的指定值最后一次出现的索引，在一个字符串中的指定位置 `fromIndex`处从后向前搜索。如果没找到这个特定值则返回 -1。

该方法将从尾到头地检索字符串 _str_，看它是否含有子串 _searchValue_。开始检索的位置在字符串的 _fromIndex_ 处或字符串的结尾（没有指定 _fromIndex_ 时）。如果找到一个 _searchValue_，则返回 _searchValue_ 的第一个字符在 _str_ 中的位置。*str*中的字符位置是从 0 开始的。

## 语法

```plain
str.lastIndexOf(searchValue[, fromIndex])
```

### 参数

- `searchValue`
  - : 一个字符串，表示被查找的值。如果`searchValue`是空字符串，则返回`fromIndex`。
- `fromIndex`{{optional_inline}}
  - : 待匹配字符串 searchValue 的开头一位字符从 str 的第 fromIndex 位开始向左回向查找。`fromIndex`默认值是 `+Infinity`。如果 `fromIndex >= str.length` ，则会搜索整个字符串。如果 `fromIndex < 0` ，则等同于 `fromIndex == 0`。

### 返回值

返回指定值最后一次出现的索引 (该索引仍是以从左至右 0 开始记数的)，如果没找到则返回 -1。

## 描述

字符串中的字符被从左向右索引。首字符的索引（index）是 0，最后一个字符的索引是 `stringName.length - 1`。

```plain
'canal'.lastIndexOf('a');     // returns 3（没有指明 fromIndex 则从末尾 l 处开始反向检索到的第一个 a 出现在 l 的后面，即 index 为 3 的位置）
'canal'.lastIndexOf('a', 2);  // returns 1（指明 fromIndex 为 2 则从 n 处反向向回检索到其后面就是 a，即 index 为 1 的位置）
'canal'.lastIndexOf('a', 0);  // returns -1(指明 fromIndex 为 0 则从 c 处向左回向检索 a 发现没有，故返回 -1)
'canal'.lastIndexOf('x');     // returns -1
'canal'.lastIndexOf('c', -5); // returns 0（指明 fromIndex 为 -5 则视同 0，从 c 处向左回向查找发现自己就是，故返回 0）
'canal'.lastIndexOf('c', 0);  // returns 0（指明 fromIndex 为 0 则从 c 处向左回向查找 c 发现自己就是，故返回自己的索引 0）
'canal'.lastIndexOf('');      // returns 5
'canal'.lastIndexOf('', 2);   // returns 2
```

> **备注：** `'abab'.lastIndexOf('ab', 2)` 将返回 2 而不是 0，因为 fromIndex 只限制待匹配字符串的开头。

(例如'abadefgabm'.lastIndexOf('ab', 7) 返回 7，虽然查找的'ab'中的 b 已经在 index=8 的位置了从 index=7 的 a 处向左查找仍是能找到自身 a 加上其后连成 ab，因为 fromIndex 指的是待匹配字符串的开头那一个)

### 区分大小写

`lastIndexOf` 方法区分大小写。例如，下面的表达式返回 -1：

```js
"Blue Whale, Killer Whale".lastIndexOf("blue"); // returns -1
```

## 示例

### 示例：使用 `indexOf` 和 `lastIndexOf`

下例使用 `indexOf` 和 `lastIndexOf` 方法来定位字符串 "`Brave new world`" 中的值。

```js
var anyString = "Brave new world";

console.log("The index of the first w from the beginning is " + anyString.indexOf("w"));
// Displays 8
console.log("The index of the first w from the end is " + anyString.lastIndexOf("w"));
// Displays 10

console.log("The index of 'new' from the beginning is " + anyString.indexOf("new"));
// Displays 6
console.log("The index of 'new' from the end is " + anyString.lastIndexOf("new"));
// Displays 6
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.split()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("Array.prototype.lastIndexOf()")}}
