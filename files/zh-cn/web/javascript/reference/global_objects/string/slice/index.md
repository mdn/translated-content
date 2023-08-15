---
title: String.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/String/slice
---

{{JSRef}}

**`slice()`** 方法提取字符串的一部分，并将其作为新字符串返回，而不修改原始字符串。

{{EmbedInteractiveExample("pages/js/string-slice.html", "taller")}}

## 语法

```js-nolint
slice(indexStart)
slice(indexStart, indexEnd)
```

### 参数

- `indexStart`
  - : 要返回的子字符串中包含的第一个字符的索引。
- `indexEnd` {{optional_inline}}
  - : 要返回的子字符串中排除的第一个字符的索引。

### 返回值

一个包含提取的字符串片段的新字符串。

## 描述

`slice()` 方法从一个字符串中提取文本并返回一个新的字符串。对它们中的一个的文本进行的更改不会影响另一个字符串。

`slice()` 方法提取直到但不包括 `indexEnd` 的文本。例如，`str.slice(1, 4)` 提取的是第二个字符到第四个字符（字符的索引为 `1`、`2` 和 `3`）。

- 如果 `indexStart >= str.length`，则返回一个空字符串。
- 如果 `indexStart < 0`，则索引从字符串末尾开始计数。更正式地说，在这种情况下，子字符串从 `max(indexStart + str.length, 0)` 开始。
- 如果 `indexStart` 被省略、为 undefined，或无法转换为数字（使用 {{jsxref('Number', 'Number(indexStart)')}}），则将其视为 `0`。
- 如果 `indexEnd` 被省略、为 undefined，或无法转换为数字（使用 {{jsxref('Number', 'Number(indexEnd)')}}），或者 `indexEnd >= str.length`，则 `slice()` 提取到字符串的末尾。
- 如果 `indexEnd < 0`，则索引从字符串末尾开始计数。更正式地说，在这种情况下，子字符串在 `max(indexEnd + str.length, 0)` 处结束。
- 在标准化负值后，如果 `indexEnd <= indexStart`（即 `indexEnd` 表示位于 `indexStart` 之前的字符），则返回一个空字符串。

## 示例

### 使用 slice() 创建一个新的字符串

以下示例使用 `slice()` 创建了一个新字符串。

```js
const str1 = "The morning is upon us."; // str1 的长度是 23。
const str2 = str1.slice(1, 8);
const str3 = str1.slice(4, -2);
const str4 = str1.slice(12);
const str5 = str1.slice(30);
console.log(str2); // he morn
console.log(str3); // morning is upon u
console.log(str4); // is upon us.
console.log(str5); // ""
```

### 使用负值索引调用 slice()

下面的例子在使用 `slice()` 时传入了负值作为索引。

```js
const str = "The morning is upon us.";
str.slice(-3); // 'us.'
str.slice(-3, -1); // 'us'
str.slice(0, -1); // 'The morning is upon us'
str.slice(4, -1); // 'morning is upon us'
```

这个例子通过从字符串末尾倒数 `11` 个字符来找到起始索引，并通过从字符串开头正数 `16` 个字符来找到结束索引。

```js
console.log(str.slice(-11, 16)); // "is u"
```

在这个例子中，它通过从字符串开头正数 `11` 个字符来找到起始索引，并通过从字符串末尾倒数 `7` 个字符来找到结束索引。

```js
console.log(str.slice(11, -7)); // " is u"
```

这些参数通过从字符串末尾倒数 `5` 个字符来找到起始索引，并通过从字符串末尾倒数 `1` 个字符来找到结束索引。

```js
console.log(str.slice(-5, -1)); // "n us"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("String.prototype.substr()")}}
- {{jsxref("String.prototype.substring()")}}
- {{jsxref("Array.prototype.slice()")}}
