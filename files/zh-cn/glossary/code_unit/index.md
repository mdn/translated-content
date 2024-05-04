---
title: 码元
slug: Glossary/Code_unit
---

{{GlossarySidebar}}

**码元**是字符编码系统（例如 UTF-8 或 UTF-16）使用的基本组成部分。字符编码系统将一个 Unicode {{Glossary("code point", "码位")}}编码为一个或者多个码元。

在 UTF-16（JavaScript 字符串使用的编码系统）中，码元是 16 位值。这意味着索引到字符串或者获取字符串长度等操作将在这些 16 位单元上进行。这些单元不总是一对一地映射到我们可能认为的字符上。

例如，带有附加符号（例如重音符号）的字符有时会使用两个 Unicode 码位表示：

```js
const myString = "\u006E\u0303";
console.log(myString); // ñ
console.log(myString.length); // 2
```

此外，由于并非 Unicode 定义的所有码位都适合 16 位，因此很多 Unicode 码位都编码为一对 UTF-16 码元，称为*代理对*：

```js
const face = "🥵";
console.log(face.length); // 2
```

JavaScript {{jsxref("String")}} 对象的 {{jsxref("String/codePointAt", "codePointAt()")}} 方法可以让你从它的编码形式检索到 Unicode 码位：

```js
const face = "🥵";
console.log(face.codePointAt(0)); // 129397
```

## 参见

- [Unicode 编码常见问题](https://www.unicode.org/faq/utf_bom.html)
