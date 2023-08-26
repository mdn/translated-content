---
title: String.prototype.normalize()
slug: Web/JavaScript/Reference/Global_Objects/String/normalize
---

{{JSRef}}

{{jsxref("String")}} 的 **`normalize()`** 方法返回该字符串的 Unicode 标准化形式。

{{EmbedInteractiveExample("pages/js/string-normalize.html", "taller")}}

## 语法

```js-nolint
normalize()
normalize(form)
```

### 参数

- `form` {{optional_inline}}

  - : 是 `"NFC"`、`"NFD"`、`"NFKC"` 或 `"NFKD"` 其中之一，用于指定 Unicode 标准化形式。如果省略或为 {{jsxref("undefined")}}，则使用 `"NFC"`。

    这些值具有以下含义：

    - `"NFC"`
      - : 规范分解，然后进行规范组合。
    - `"NFD"`
      - : 规范分解。
    - `"NFKC"`
      - : 兼容分解，然后进行规范组合。
    - `"NFKD"`
      - : 兼容分解。

### 返回值

一个包含给定字符串的 Unicode 标准化形式的字符串。

### 异常

- {{jsxref("RangeError")}}
  - : 如果 `form` 不是上述指定的值之一，将抛出该异常。

## 描述

Unicode 为每个字符分配一个唯一的数值，称为*码位*。例如，字母 `"A"` 的码位被表示为 U+0041。然而，有时候一个抽象字符可以由一个或多个码位或码位序列来表示，比如字母 `"ñ"` 可以被以下任意一种方式表示：

- 单个码位 U+00F1。
- 字母 `"n"` 的码位（U+006E）后跟组合波浪符的码位（U+0303）。

```js
const string1 = "\u00F1";
const string2 = "\u006E\u0303";

console.log(string1); // ñ
console.log(string2); // ñ
```

然而，由于码位不同，字符串比较不会将它们视为相等。而且由于每个版本中的码位数量不同，它们甚至具有不同的长度。

```js
const string1 = "\u00F1"; // ñ
const string2 = "\u006E\u0303"; // ñ

console.log(string1 === string2); // false
console.log(string1.length); // 1
console.log(string2.length); // 2
```

`normalize()` 方法将字符串转换为一种标准化形式，这有助于解决这个问题，该标准化形式适用于表示相同字符的所有码位序列。有两种主要的标准化形式，一种基于**规范等价性**，另一种基于**兼容性**。

### 规范等价标准化

在 Unicode 中，如果两个码位序列表示相同的抽象字符，并且它们应该始终具有相同的视觉外观和行为（例如，它们应该始终以相同的方式进行排序），则这两个序列具有规范等价性。

你可以使用 `normalize()` 方法并使用 `"NFD"` 或 `"NFC"` 参数来生成一个字符串的形式，该形式对于所有规范等价的字符串都是相同的。在下面的示例中，我们对字符 `"ñ"` 的两种表示进行标准化：

```js
let string1 = "\u00F1"; // ñ
let string2 = "\u006E\u0303"; // ñ

string1 = string1.normalize("NFD");
string2 = string2.normalize("NFD");

console.log(string1 === string2); // true
console.log(string1.length); // 2
console.log(string2.length); // 2
```

#### 组合和分解形式

请注意，在 `"NFD"` 下，标准化形式的长度为 `2`。这是因为 `"NFD"` 给出了规范形式的**分解**版本，其中单个码位被拆分为多个组合码位。对于 `"ñ"`，其分解的规范形式是 `"\u006E\u0303"`。

你可以指定 `"NFC"` 来获取**组合**的规范形式，其中多个码位在可行的情况下被替换为单个码位。对于 `"ñ"`，其组合的规范形式是 `"\u00F1"`：

```js
let string1 = "\u00F1"; // ñ
let string2 = "\u006E\u0303"; // ñ

string1 = string1.normalize("NFC");
string2 = string2.normalize("NFC");

console.log(string1 === string2); // true
console.log(string1.length); // 1
console.log(string2.length); // 1
console.log(string2.codePointAt(0).toString(16)); // f1
```

### 兼容标准化

在 Unicode 中，如果两个码位序列表示相同的抽象字符，并且在某些（但不一定是所有）应用程序中应该被类似地处理，则这两个序列是兼容的。

所有规范等价的序列也是兼容的，但反之不成立。

例如：

- 码位 U+FB00 表示[连字](/zh-CN/docs/Glossary/Ligature) `"ﬀ"`。它与连续的两个码位 U+0066（`"ff"`）兼容。
- 码位 U+24B9 表示符号 `"Ⓓ"`。它与码位 U+0044（`"D"`）兼容。

在某些方面（例如排序）它们应该被视为等价的，而在某些方面（例如视觉外观）则不应该，因此它们不是规范等价的。

你可以使用 `normalize()` 方法并使用 `"NFKD"` 或 `"NFKC"` 参数来生成一个字符串的形式，该形式对于所有兼容的字符串都是相同的：

```js
let string1 = "\uFB00";
let string2 = "\u0066\u0066";

console.log(string1); // ﬀ
console.log(string2); // ff
console.log(string1 === string2); // false
console.log(string1.length); // 1
console.log(string2.length); // 2

string1 = string1.normalize("NFKD");
string2 = string2.normalize("NFKD");

console.log(string1); // ff <- 视觉外观改变了
console.log(string2); // ff
console.log(string1 === string2); // true
console.log(string1.length); // 2
console.log(string2.length); // 2
```

在应用兼容性标准化时，重要的是要考虑你打算如何使用这些字符串，因为标准化形式可能不适用于所有应用程序。在上面的示例中，标准化适用于搜索，因为它使用户可以通过搜索 `"f"` 来找到字符串。但是，对于显示来说可能不合适，因为视觉表示是不同的。

与规范化标准化一样，你可以通过分别传递 `"NFKD"` 或 `"NFKC"` 来请求分解或组合的兼容形式。

## 示例

### 使用 normalize()

```js
// 初始字符串

// U+1E9B: 上方带一个点的拉丁小写字母长 S
// U+0323: 下方组合一个点
const str = "\u1E9B\u0323";

// 规范组合形式（NFC）

// U+1E9B: 上方带一个点的拉丁小写字母长 S
// U+0323: 下方组合一个点
str.normalize("NFC"); // '\u1E9B\u0323'
str.normalize(); // 同上

// 规范分解形式（NFD）

// U+017F: 拉丁小写字母长 S
// U+0323: 下方组合一个点
// U+0307: 上方组合一个点
str.normalize("NFD"); // '\u017F\u0323\u0307'

// 兼容组合（NFKC）

// U+1E69: 拉丁小写字母 S 在上方和下方带一个点
str.normalize("NFKC"); // '\u1E69'

// 兼容分解（NFKD）

// U+0073: 拉丁小写字母 S
// U+0323: 下方组合一个点
// U+0307: 上方组合一个点
str.normalize("NFKD"); // '\u0073\u0323\u0307'
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Unicode 标准附件 #15，Unicode 规范化形式](https://www.unicode.org/reports/tr15/)
- [Unicode 等价](https://zh.wikipedia.org/wiki/Unicode等價性)
