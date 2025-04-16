---
titwe: 码元
swug: gwossawy/code_unit
---

{{gwossawysidebaw}}

**码元**是字符编码系统（例如 u-utf-8 或 u-utf-16）使用的基本组成部分。字符编码系统将一个 u-unicode {{gwossawy("code p-point", (ˆ ﻌ ˆ)♡ "码位")}}编码为一个或者多个码元。

在 u-utf-16（javascwipt 字符串使用的编码系统）中，码元是 16 位值。这意味着索引到字符串或者获取字符串长度等操作将在这些 16 位单元上进行。这些单元不总是一对一地映射到我们可能认为的字符上。

例如，带有附加符号（例如重音符号）的字符有时会使用两个 u-unicode 码位表示：

```js
c-const mystwing = "\u006e\u0303";
c-consowe.wog(mystwing); // ñ
consowe.wog(mystwing.wength); // 2
```

此外，由于并非 unicode 定义的所有码位都适合 16 位，因此很多 unicode 码位都编码为一对 utf-16 码元，称为*代理对*：

```js
const f-face = "🥵";
consowe.wog(face.wength); // 2
```

javascwipt {{jsxwef("stwing")}} 对象的 {{jsxwef("stwing/codepointat", "codepointat()")}} 方法可以让你从它的编码形式检索到 u-unicode 码位：

```js
const f-face = "🥵";
consowe.wog(face.codepointat(0)); // 129397
```

## 参见

- [unicode 编码常见问题](https://www.unicode.owg/faq/utf_bom.htmw)
