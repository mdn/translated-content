---
title: String
slug: Web/JavaScript/Reference/Global_Objects/String
---

{{JSRef}}

**`String`** 对象用于表示和操作字符序列。

## 描述

字符串对于保存以文本形式表示的数据很有用。一些最常用的字符串操作是检查他们的{{jsxref("String/length","长度")}}，使用 [+ 和 += 字符串操作符](/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators)构建和连接它们，使用 {{jsxref("String.prototype.indexOf()", "indexOf()")}} 方法检查子字符串的存在或者位置，或使用 {{jsxref("String.prototype.substring()", "substring()")}} 方法提取子字符串。

### 创建字符串

从字符串字面量将字符串创建为原始值或使用 {{jsxref("String/String", "String()")}} 构造函数将字符串创建为对象。

```js
const string1 = "A string primitive";
const string2 = "Also a string primitive";
const string3 = `Yet another string primitive`;
```

```js
const string4 = new String("A String object");
```

字符串原始值和字符串对象共享很多行为，但也有其他重要的区别和注意事项。请参阅下面的[字符串原始值和字符串对象](#字符串原始值和字符串对象)。

字符串字面量可以使用单引号或者双引号指定，它们的处理方式相同，或者使用反引号字符 <kbd>`</kbd>。最后一种形式指定了[模板字符串](/zh-CN/docs/Web/JavaScript/Reference/Template_literals)：这种方式可以让你插入表达式。

### 访问字符

有两种方式访问字符串中的单个字符。首先是 {{jsxref("String.prototype.charAt()", "charAt()")}} 方法：

```js
"cat".charAt(1); // gives value "a"
```

另一个方式是将字符串视为类数组对象，其中各个字符对应于一个数字索引：

```js
"cat"[1]; // gives value "a"
```

当使用方括号表示法进行字符串访问时，尝试删除或为其复制的行为将不成功。涉及的属性既不可写（writable）也不可配置（configurable）（更多细节，请参见 {{jsxref("Object.defineProperty()")}}）。

### 比较字符串

在 C 中，`strcmp()` 函数用于比较字符串。在 JavaScript 中，你只需要使用[小于和大于运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators)：

```js
const a = "a";
const b = "b";
if (a < b) {
  // true
  console.log(`${a} is less than ${b}`);
} else if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} and ${b} are equal.`);
}
```

注意，所有的比较运算符（包括 [`===`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Strict_equality) 和 [`==`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Equality)）在比较字符串时都区分大小写。不区分大小写地比较字符串的常见方式是在比较它们之前将它们转为相同的大小写（大写或者小写）。

```js
function areEqualCaseInsensitive(str1, str2) {
  return str1.toUpperCase() === str2.toUpperCase();
}
```

通过 [`toUpperCase()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase) 或 [`toLowerCase()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) 进行转换的选择大多是任意的，并且在扩展到拉丁字母之外时，两者都不是完全可靠的。例如，德语小写字母 `ß` 和 `ss` 都被 `toUpperCase()` 转换为 `SS`，而土耳其字母 `ı` 会被 `toLowerCase()` 错误地报告为不等于 `I`，除非使用 [`toLocaleLowerCase("tr")`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase)。

```js
const areEqualInUpperCase = (str1, str2) =>
  str1.toUpperCase() === str2.toUpperCase();
const areEqualInLowerCase = (str1, str2) =>
  str1.toLowerCase() === str2.toLowerCase();

areEqualInUpperCase("ß", "ss"); // true; should be false
areEqualInLowerCase("ı", "I"); // false; should be true
```

用于测试不区分大小写的相等性的区域感知且可靠的解决方案是使用 {{jsxref("Intl.Collator")}} API 或者字符串的 [`localeCompare()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare) 方法——它们共享相同的接口——[`sensitivity`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator#sensitivity) 选项设置为 `"accent"` 或 `"base"`。

```js
const areEqual = (str1, str2, locale = "en-US") =>
  str1.localeCompare(str2, locale, { sensitivity: "accent" }) === 0;

areEqual("ß", "ss", "de"); // false
areEqual("ı", "I", "tr"); // true
```

`localeCompare()` 方法以与 `strcmp()` 类似的方式启用字符串比较——它允许以区域感知的方式进行对字符串进行排序。

### 字符串原始值和字符串对象

注意，JavaScript 区分 `String` 对象和{{Glossary("Primitive", "原始字符串")}}值（{{jsxref("Boolean")}} 和 {{jsxref("Global_Objects/Number", "Number")}} 也是如此）。

字符串字面量（使用单引号或者双引号表示）和从非构造函数上下文中的 `String` 调用返回的字符串（即在不使用 {{jsxref("Operators/new", "new")}} 关键字的情况下调用）是原始字符串。在要对原始字符串调用方法或者发生属性查找的上下文中，JavaScript 将自动的包装原始字符串并调用方法或在包装对象上执行属性查找。

```js
const strPrim = "foo"; // A literal is a string primitive
const strPrim2 = String(1); // Coerced into the string primitive "1"
const strPrim3 = String(true); // Coerced into the string primitive "true"
const strObj = new String(strPrim); // String with new returns a string wrapper object.

console.log(typeof strPrim); // "string"
console.log(typeof strPrim2); // "string"
console.log(typeof strPrim3); // "string"
console.log(typeof strObj); // "object"
```

> **警告：** 你应该发现你自己很少使用 `String` 构造函数。

使用 {{jsxref("Global_Objects/eval", "eval()")}} 时，字符串原始值和 `String` 对象也会给出不同的结果。传递给 `eval` 的原始值被当作源代码处理；而 `String` 对象则被当作对象处理，返回对象。例如：

```js
const s1 = "2 + 2"; // creates a string primitive
const s2 = new String("2 + 2"); // creates a String object
console.log(eval(s1)); // returns the number 4
console.log(eval(s2)); // returns the string "2 + 2"
```

由于上述原因，当一段代码在需要使用基本字符串的时候却使用了 `String` 对象就会导致执行失败（虽然一般情况下程序员们并不需要考虑这样的问题）。

`String` 对象始终可以使用 {{jsxref("String.prototype.valueOf()", "valueOf()")}} 方法将其转换为它的原始值（字面量）。

```js
console.log(eval(s2.valueOf())); // returns the number 4
```

### 字符串强制转换

许多期望字符串的内置操作首先将它们的参数强制转换为字符串（这也就是为什么 `String` 对象的行为类似于字符串原始值）。[这些操作](https://tc39.es/ecma262/#sec-tostring)可以总结为以下几点：

- 字符串按原样返回。
- [`undefined`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined) 转换成 `"undefined"`。
- [`null`](/zh-CN/docs/Web/JavaScript/Reference/Operators/null) 转换成 `"null"`。
- `true` 转换成 `"true"`；`false` 转换成 `"false"`。
- 使用与 [`toString(10)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) 相同的算法转换数字。
- 使用与 [`toString(10)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt/toString) 相同的算法转换 [BigInt](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt)。
- [Symbol](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol) 抛出 {{jsxref("TypeError")}}。
- 首先，对象通过依次调用 [`[@@toPrimitive]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive)（hint 为 `"string"`）、`toString()` 和 `valueOf()` 方法将其[转换为原始值](/zh-CN/docs/Web/JavaScript/Data_structures#强制原始值转换)。然后将生成的原始值转换为一个字符串。

有几种方法可以在 JavaScript 中实现几乎相同的效果。

- [模板字符串](/zh-CN/docs/Web/JavaScript/Reference/Template_literals)：`` `${x}` `` 为嵌入的表达式执行上面的字符串强制转换步骤。
- [`String()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/String) 函数：`String(x)` 使用相同的算法去转换 `x`，只是 [Symbol](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol) 不会抛出 {{jsxref("TypeError")}}，而是返回 `"Symbol(description)"`，其中 `description` 是对 Symbol 的[描述](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description)。
- 使用 [`+` 运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Addition)：`"" + x` 将其操作数强制转为*原始值*，而不是*字符串*，并且对于某些对象，其行为与普通字符串强制转换完全不同。有关更多细节，请参见其[参考页](/zh-CN/docs/Web/JavaScript/Reference/Operators/Addition)。

根据你使用的情况，你可能想要使用 `` `${x}` ``（模拟内置行为）或 `String(x)`（处理 symbol 值而不抛出错误），但你不应该使用 `"" + x`。

### 转义序列

可以使用转义序列对特殊字符进行编码：

| 转义序列                                                                                                                                   | Unicode 代码流                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| `\0`                                                                                                                                       | null 字符（U+0000 NULL）                                                                             |
| `\'`                                                                                                                                       | 单引号（U+0027 APOSTROPHE）                                                                          |
| `\"`                                                                                                                                       | 双引号（U+0022 QUOTATION MARK）                                                                      |
| `\\`                                                                                                                                       | 反斜杠（U+005C REVERSE SOLIDUS）                                                                     |
| `\n`                                                                                                                                       | 换行符（U+000A LINE FEED; LF）                                                                       |
| `\r`                                                                                                                                       | 回车符（U+000D CARRIAGE RETURN; CR）                                                                 |
| `\v`                                                                                                                                       | 垂直制表符（U+000B LINE TABULATION）                                                                 |
| `\t`                                                                                                                                       | 制表符（U+0009 CHARACTER TABULATION）                                                                |
| `\b`                                                                                                                                       | 退格键（U+0008 BACKSPACE）                                                                           |
| `\f`                                                                                                                                       | 换页符（U+000C FORM FEED）                                                                           |
| `\uXXXX` …其中 `XXXX` 恰好是 `0000`–`FFFF` 范围内的 4 个十六进制；例如，`\u000A` 与 `\n`（换行）相同；`\u0021` 是 `!`                      | `U+0000` 和 `U+FFFF` 之间的 Unicode 码位（Unicode 基于多平台语言）                                   |
| `\u{X}`…`\u{XXXXXX}` …其中 `X`…`XXXXXX` 是 `0`–`10FFFF` 范围内的 1-6 个十六进制数字；例如，`\u{A}` 与 `\n`（换行符）相同； `\u{21}` 是 `!` | `U+0000` 和 `U+10FFFF` 之间的 Unicode 码位（整个 Unicode）                                           |
| `\xXX` …其中 `XX` 恰好是 `00`–`FF` 范围内的 2 个十六进制数字；例如，`\x0A` 与 `\n`（换行符）相同；`\x21` 是 `!`                            | `U+0000` 和 `U+00FF` 之间的 Unicode 码位 （Basic Latin 和 Latin-1 Supplement 块；相当于 ISO-8859-1） |

### 长字符串文字

有时，你的代码将包含非常长的字符串。你可能希望在不影响实际字符串内容的情况下，在源代码中专门将字符串分成很多行，而不是无休止的继续下去，或者随编辑器的心血来潮换行。

你可以使用 [`+`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Addition) 运算符去增加多行字符串，像这样：

```js
const longString =
  "This is a very long string which needs " +
  "to wrap across multiple lines because " +
  "otherwise my code is unreadable.";
```

或者你可以在每行的末尾使用反斜杠字符（`\`）来指示该字符串将在下一行继续。确保没有空格或者任何其他字符在反斜杠或缩进之后，否则它将不工作。

```js
const longString =
  "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.";
```

上述两种方法都会产生相同的字符串。

### UTF-16 字符、Unicode 码位和字素簇（grapheme clusters）

字符串基本上表示为 [UTF-16 码元](https://zh.wikipedia.org/wiki/UTF-16)的序列。在 UTF-16 编码中，每个码元都是 16 位长。这意味着最多有 2<sup>16</sup> 个或 65536 个可能的字符可表示为单个 UTF-16 码元。该字符集称为[基本多语言平面（BMP）](<https://en.wikipedia.org/wiki/Plane_(Unicode)#Basic_Multilingual_Plane>)，包含最常见的字符，如拉丁字母、希腊字母、西里尔字母以及许多东亚字符。每个码元都可以写成一个字符串，其中 `\u` 之后跟四个十六进制数字。

然而，整个 Unicode 字符集比 65536 大得多。额外的字符作为*代理对*（surrogate pairs）存储在 UTF-16 中，代理对是表示单个字符的 16 位码元对。为了避免起义，该对的两个部分必须介于 `0xD800` 和 `0xDFFF` 之间，并且这些码元不用于对单码元（single-code-unit）进行编码。因此，“单独的代理项”通常不是操作字符串的有效值——例如 [`encodeURI()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURI) 将为单独的代理项抛出 {{jsxref("URIError")}}。每个 Unicode 字符由一个或者两个 UTF-16 码元组成，也称为 _Unicode 码位_（codepoint）。每个 Unicode 码位都可以使用 `\u{xxxxxx}` 写成一个字符串，其中 `xxxxxx` 表示 1–6 个十六进制数字。

在 Unicode 字符之上，有一些 Unicode 字符序列应该被视为一个视觉单元，被称为*字素簇*（grapheme cluster）。更通常的案列是 emoji：很多具有一系列变化的 emoji 实际上是由多个 emoji组成的，通常由 \<ZWJ>（`U+200D`）字符连接。

你必须小心迭代字符级别。例如，[`split("")`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split) 将按照 UTF-16 码元分割并强代理对分开。字符串索引也是指的每个 UTF-16 码元的索引。在另一方面，[`@@iterator()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator) 按 Unicode 码位迭代。遍历字素簇将需要一些自定义代码。

```js
"😄".split(""); // ['\ud83d', '\ude04']; splits into two lone surrogates

// "Backhand Index Pointing Right: Dark Skin Tone"
[..."👉🏿"]; // ['👉', '🏿']
// splits into the basic "Backhand Index Pointing Right" emoji and
// the "Dark skin tone" emoji

// "Family: Man, Boy"
[..."👨‍👦"]; // [ '👨', '‍', '👦' ]
// splits into the "Man" and "Boy" emoji, joined by a ZWJ

// The United Nations flag
[..."🇺🇳"]; // [ '🇺', '🇳' ]
// splits into two "region indicator" letters "U" and "N".
// All flag emojis are formed by joining two region indicator letters
```

## 构造函数

- {{jsxref("String/String", "String()")}}
  - : 创建一个新的 `String` 对象。它在作为函数调用时执行类型转换，而不是作为构造函数调用，后者通常更有用。

## 静态方法

- {{jsxref("String.fromCharCode()")}}
  - : 返回使用指定的 Unicode 值序列创建的字符串。
- {{jsxref("String.fromCodePoint()")}}
  - : 返回使用指定的码位序列创建的字符串。
- {{jsxref("String.raw()")}}
  - : 返回从原始模板字符串创建的字符串。

## 实例属性

- {{jsxref("String.prototype.length")}}
  - : 反映字符串的 `length`。只读。

## 实例方法

- {{jsxref("String.prototype.at()")}}
  - : 返回指定索引处的字符（正好是一个 UTF-16 码元）。接受负整数，从最后一个字符串字符开始倒数。
- {{jsxref("String.prototype.charAt()")}}
  - : 返回指定 `index` 处的字符（正好是一个 UTF-16 码元）。
- {{jsxref("String.prototype.charCodeAt()")}}
  - : 返回一个数字，它是给定 `index` 处的 UTF-16 码元值。
- {{jsxref("String.prototype.codePointAt()")}}
  - : 返回一个非负整数值，它是从指定位置（`pos`）开始的 UTF-16 编码码位的码位值。
- {{jsxref("String.prototype.concat()")}}
  - : 合并两个（或更多）字符串的文本并返回一个新字符串。
- {{jsxref("String.prototype.includes()")}}
  - : 确定调用字符串是否包含 `searchString`。
- {{jsxref("String.prototype.endsWith()")}}
  - : 确定字符串是否以字符串 `searchString` 的字符结尾。
- {{jsxref("String.prototype.indexOf()")}}
  - : 返回在调用 {{jsxref("String")}} 对象中第一次出现的 `searchValue` 的索引，如果未找到则返回 `-1`。
- {{jsxref("String.prototype.lastIndexOf()")}}
  - : 返回在调用 {{jsxref("String")}} 对象中最后一次出现的 `searchValue` 的索引，如果未找到则返回 `-1`。
- {{jsxref("String.prototype.localeCompare()")}}
  - : 返回一个数字，用于指示一个参考字符串 `compareString` 是否在排序顺序前面或之后或与给定字符串相同。
- {{jsxref("String.prototype.match()")}}
  - : 用于将正则表达式 `regexp` 与字符串匹配。
- {{jsxref("String.prototype.matchAll()")}}
  - : 返回所有 `regexp` 的匹配项的迭代器。
- {{jsxref("String.prototype.normalize()")}}
  - : 返回调用字符串值的 Unicode 规范化形式。
- {{jsxref("String.prototype.padEnd()")}}
  - : 用给定字符串从末尾填充当前字符串并返回长度为 `targetLength` 的新字符串。
- {{jsxref("String.prototype.padStart()")}}
  - : 用给定字符串从开头填充当前字符串并返回长度为 `targetLength` 的新字符串。
- {{jsxref("String.prototype.repeat()")}}
  - : 返回由对象的元素重复 `count` 次组成的字符串。
- {{jsxref("String.prototype.replace()")}}
  - : 用于使用 `replaceWith` 替换出现的 `searchFor`。`searchFor` 可以是字符串或正则表达式，`replaceWith` 可以是字符串或函数。
- {{jsxref("String.prototype.replaceAll()")}}
  - : 用于使用 `replaceWith` 替换所有出现的 `searchFor`。`searchFor` 可以是字符串或正则表达式，`replaceWith` 可以是字符串或函数。
- {{jsxref("String.prototype.search()")}}
  - : 搜索正则表达式 `regexp` 和调用字符串之间的匹配项。
- {{jsxref("String.prototype.slice()")}}
  - : 提取字符串的一部分并返回一个新字符串。
- {{jsxref("String.prototype.split()")}}
  - : 返回一个由在出现子字符串 `sep` 时拆分调用的字符串然后填充的字符串数组。
- {{jsxref("String.prototype.startsWith()")}}
  - : 确定调用字符串是否以字符串 `searchString` 的字符开头。
- {{jsxref("String.prototype.substring()")}}
  - : 返回一个新字符串，其中包含来自（或之间）指定索引（或多个索引）的调用字符串的字符。
- {{jsxref("String.prototype.toLocaleLowerCase()")}}

  - : 字符串中的字符将转换为小写，同时尊重当前语言环境。

    对于大多数语言，这将返回与 {{jsxref("String.prototype.toLowerCase()", "toLowerCase()")}} 相同的结果。

- {{jsxref("String.prototype.toLocaleUpperCase()",
    "String.prototype.toLocaleUpperCase( [<var>locale</var>, ...<var>locales</var>])")}}

  - : 字符串中的字符将转换为大写，同时尊重当前语言环境。

    对于大多数语言，这将返回与 {{jsxref("String.prototype.toUpperCase()", "toUpperCase()")}} 相同的结果。

- {{jsxref("String.prototype.toLowerCase()")}}
  - : 返回转换为小写的调用字符串值。
- {{jsxref("String.prototype.toString()")}}
  - : 返回表示指定对象的字符串。覆盖 {{jsxref("Object.prototype.toString()")}} 方法。
- {{jsxref("String.prototype.toUpperCase()")}}
  - : 返回转换为大写的调用字符串值。
- {{jsxref("String.prototype.trim()")}}
  - : 修剪字符串开头和结尾的空格。
- {{jsxref("String.prototype.trimStart()")}}
  - : 修剪字符串开头的空格。
- {{jsxref("String.prototype.trimEnd()")}}
  - : 修剪字符串结尾的空格。
- {{jsxref("String.prototype.valueOf()")}}
  - : 返回指定对象的原始值。覆盖 {{jsxref("Object.prototype.valueOf()")}} 方法。
- {{jsxref("String.prototype.@@iterator()", "String.prototype[@@iterator]()")}}
  - : 返回一个新的迭代器对象，该对象迭代 String 值的码位，将每个码位作为 String 值返回。

## HTML 包装器方法

> **警告：** 已弃用。请避免使用这些方法。
>
> 它们的用途有限，因为它们基于非常古老的 HTML 标准并且仅提供当前可用的 HTML 标记和属性的一个子集。现在已经为它们创建了已弃用或非标准的标记。此外，它们在没有任何验证或清理的情况下进行简单的字符串连接，这使得它们在使用 [`innerHTML`](/zh-CN/docs/Web/API/Element/innerHTML) 直接插入时成为潜在的安全威胁。请改用 [DOM API](/zh-CN/docs/Web/API/Document_Object_Model)，例如 [`document.createElement()`](/zh-CN/docs/Web/API/Document/createElement)。

- {{jsxref("String.prototype.anchor()")}} {{Deprecated_Inline}}
  - : {{htmlattrxref("name", "a", "&lt;a name=\"name\"&gt;")}}（超文本目标）
- {{jsxref("String.prototype.big()")}} {{Deprecated_Inline}}
  - : {{HTMLElement("big")}}
- {{jsxref("String.prototype.blink()")}} {{Deprecated_Inline}}
  - : {{HTMLElement("blink")}}
- {{jsxref("String.prototype.bold()")}} {{Deprecated_Inline}}
  - : {{HTMLElement("b")}}
- {{jsxref("String.prototype.fixed()")}} {{Deprecated_Inline}}
  - : {{HTMLElement("tt")}}
- {{jsxref("String.prototype.fontcolor()")}} {{Deprecated_Inline}}
  - : {{htmlattrxref("color", "font", "&lt;font color=\"color\"&gt;")}}
- {{jsxref("String.prototype.fontsize()")}} {{Deprecated_Inline}}
  - : {{htmlattrxref("size", "font", "&lt;font size=\"size\"&gt;")}}
- {{jsxref("String.prototype.italics()")}} {{Deprecated_Inline}}
  - : {{HTMLElement("i")}}
- {{jsxref("String.prototype.link()")}} {{Deprecated_Inline}}
  - : {{htmlattrxref("href", "a", "&lt;a href=\"url\"&gt;")}}（链接 URL）
- {{jsxref("String.prototype.small()")}} {{Deprecated_Inline}}
  - : {{HTMLElement("small")}}
- {{jsxref("String.prototype.strike()")}} {{Deprecated_Inline}}
  - : {{HTMLElement("strike")}}
- {{jsxref("String.prototype.sub()")}} {{Deprecated_Inline}}
  - : {{HTMLElement("sub")}}
- {{jsxref("String.prototype.sup()")}} {{Deprecated_Inline}}
  - : {{HTMLElement("sup")}}

请注意，这些方法不会检查字符串本身是否包含 HTML 标记，因此可能会创建无效的 HTML：

```js
"</b>".bold(); // <b></b></b>
```

它们所做的唯一转义是将属性值中的 `"`（例如 {{jsxref("String/anchor", "anchor()")}}、{{jsxref("String/fontcolor", "fontcolor()")}}、{{jsxref("String/fontsize", "fontsize()")}} 和 {{jsxref("String/link", "link()")}}）替换为 `&quot;`。

```js
"foo".anchor('"Hello"'); // <a name="&quot;Hello&quot;">foo</a>
```

## 示例

### 字符串转换

可以使用 `String` 作为 {{jsxref("String.prototype.toString()", "toString()")}} 更可靠的代替方法，因为它在用于 [`null`](/zh-CN/docs/Web/JavaScript/Reference/Operators/null) 和 {{jsxref("undefined")}} 时仍然有效。例如：

```js
const nullVar = null;
nullVar.toString(); // TypeError: nullVar is null
String(nullVar); // "null"

const undefinedVar = undefined;
undefinedVar.toString(); // TypeError: undefinedVar is undefined
String(undefinedVar); // "undefined"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [JavaScript 指南中的文本格式化](/zh-CN/docs/Web/JavaScript/Guide/Text_formatting)
- {{jsxref("RegExp")}}
