---
title: String length
slug: Web/JavaScript/Reference/Global_Objects/String/length
---

{{JSRef}}

字符串的 **`length`** 只读属性包含字符串的长度（以 UTF-16 代码单元表示）。

{{js_property_attributes(0, 0, 0)}}

{{EmbedInteractiveExample("pages/js/string-length.html", "shorter")}}

## 描述

该属性返回字符串中的代码单元数量。JavaScript 使用 [UTF-16](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_字符、unicode_码位和字素簇（grapheme_clusters）) 编码，其中每个 Unicode 字符可以编码为一个或两个代码单元，因此 `length` 返回的值可能与字符串中 Unicode 字符的实际数量不匹配。对于拉丁文、西里尔文、众所周知的 CJK 字符等常见脚本，这应该不是问题，但如果你正在使用某些脚本，例如表情符号、[数学符号](https://zh.wikipedia.org/wiki/数学字母数字符号)或晦涩的汉字，你可能需要考虑代码单元和字符之间的差异。

语言规范要求字符串的最大长度为 2<sup>53</sup> - 1 个元素，这是[精确整数](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)的上限。但是，具有此长度的字符串需要 16384TB 的存储空间，这在任何合理的设备内存中都容纳不了，因此实现倾向于降低阈值，从而允许字符串的长度方便地存储在 32 位整数中。

- 在 V8（Chrome 和 Node 使用）中，最大长度为 2<sup>29</sup> - 24（\~1GB）。在 32 位系统上，最大长度为 2<sup>28</sup> - 16（\~512MB）。
- 在 Firefox 中，最大长度为 2<sup>30</sup> - 2（\~2GB）。在 Firefox 65 之前，最大长度为 2<sup>28</sup> - 1（\~512MB）。
- 在 Safari 中，最大长度为 2<sup>31</sup> - 1（\~4GB）。

对于空字符串，`length` 为 0。

静态属性 `String.length` 与字符串的长度无关。它是 `String` 函数的[参数数量](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/length)（简单地说，就是它有多少个形参），也就是 1。

由于 `length` 统计的是代码单元而不是字符，如果你想得到字符的数量，你可以首先用它的[迭代器](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator)分割字符串，它按字符进行迭代：

```js
function getCharacterLength(str) {
  // The string iterator that is used here iterates over characters,
  // not mere code units
  return [...str].length;
}

console.log(getCharacterLength("A\uD87E\uDC04Z")); // 3
```

## 示例

### 基本用法

```js
const x = "Mozilla";
const empty = "";

console.log(`${x} is ${x.length} code units long`);
// Mozilla is 7 code units long

console.log(`The empty string has a length of ${empty.length}`);
// The empty string has a length of 0
```

### 长度不等于字符数的字符串

```js
const emoji = "😄";
console.log(emoji.length); // 2
const adlam = "𞤲𞥋𞤣𞤫";
console.log(adlam.length); // 8
const formula = "∀𝑥∈ℝ,𝑥²≥0";
console.log(formula.length); // 11
```

### 指定长度

因为字符串是一个基本类型，所以尝试为字符串的 `length` 属性赋值没有可观察到的效果，并且在[严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)下会抛出。

```js
const myString = "bluebells";

myString.length = 4;
console.log(myString); // "bluebells"
console.log(myString.length); // 9
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [JavaScript `String.length` and Internationalizing Web Applications](https://downloads.teradata.com/blog/jasonstrimpel/2011/11/javascript-string-length-and-internationalizing-web-applications)
