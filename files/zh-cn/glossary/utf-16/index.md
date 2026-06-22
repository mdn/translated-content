---
title: UTF-16
slug: Glossary/UTF-16
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

UTF-16 是一种用于 {{Glossary("Unicode")}} 的{{Glossary("character encoding", "字符编码")}}标准。它使用一个或两个 {{Glossary("code unit", "码元")}}来编码每个 Unicode {{Glossary("code point", "码位")}}。每个码元都是一个 16 位值。

值小于 2<sup>16</sup> 的码位会被编码成单个码元，该码元的数值与码位的值相等。这些码位构成了[基本多文种平面（BMP）](<https://en.wikipedia.org/wiki/Plane_(Unicode)#Basic_Multilingual_Plane>)，其中包括最常见的字符，例如拉丁字母、希腊字母、西里尔字母以及许多东亚字符。

例如，拉丁字母“A”在 Unicode 中被分配的码位是 `U+0041`，它在 UTF-16 中表示为单个码元 `41`。

值大于 2<sup>16</sup> 的码位会使用一对码元进行编码，这称为*代理对*。用于代理对的值不会用于 Unicode 码位，以避免产生歧义。

例如，表情字符“🦊”（狐狸脸）在 Unicode 中被分配的码位是 `U+1F98A`，它在 UTF-16 中表示为代理对 `d83e dd8a`。

## JavaScript 中的 UTF-16

JavaScript 中的字符串使用 UTF-16 表示，并且许多 {{jsxref("String")}} API 操作的是码元，而不是码位。例如，对于只包含一个不在 BMP 中的 Unicode 字符的字符串，{{jsxref("String.length")}} 会返回 `2`：

```js
const string = "🦊"; // U+1F98A
console.log(string.length); // 2
```

{{jsxref("String.charCodeAt()")}} 方法会返回给定索引处的码元，而 {{jsxref("String.codePointAt()")}} 方法会返回给定索引处的码位：

```js
const string = "🦊"; // U+1F98A

console.log(string.charCodeAt(0).toString(16)); // d83e
console.log(string.charCodeAt(1).toString(16)); // dd8a

console.log(string.codePointAt(0).toString(16)); // 1f98a
```

有关使用 UTF-16 字符串的更多信息，参见[UTF-16 字符、Unicode 码位和字素簇](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_字符、unicode_码位和字素簇)。

## UTF-16 和 UTF-8

{{Glossary("UTF-8")}} 是 Unicode 的另一种编码方式，它会为每个 Unicode 码位使用一到四个字节。对于 Web 上的文档而言，UTF-8 比 UTF-16 更常见。

## UTF-16 和 UCS-2

UCS-2 是一种已经过时的 Unicode 编码。它与 UTF-16 相同，只是它不支持代理对，因此无法编码 BMP 之外的码位。

## 参见

- [UTF-16 字符、Unicode 码位和字素簇](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_字符、unicode_码位和字素簇)
- {{Glossary("UTF-8")}}
- 维基百科上的 [UTF-16](https://zh.wikipedia.org/wiki/UTF-16)
