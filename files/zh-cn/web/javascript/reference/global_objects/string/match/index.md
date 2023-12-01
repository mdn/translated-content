---
title: String.prototype.match()
slug: Web/JavaScript/Reference/Global_Objects/String/match
---

{{JSRef}}

**`match()`** 方法检索字符串与[正则表达式](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions)进行匹配的结果。

{{EmbedInteractiveExample("pages/js/string-match.html", "shorter")}}

## 语法

```js-nolint
match(regexp)
```

### 参数

- `regexp`

  - : 一个正则表达式对象或者任何具有 [`Symbol.match`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/match) 方法的对象。

    如果 `regexp` 不是 `RegExp` 对象并且对象上无 `Symbol.match` 方法，则会使用 `new RegExp(regexp)` 将其隐式地转换为 {{jsxref("RegExp")}}。

    如果你没有给出任何参数并直接使用 `match()` 方法，你将会得到一个包含空字符串的{{jsxref("Array", "数组", "", 1)}}：`[""]`，因为这等价于 `match(/(?:)/)`。

### 返回值

一个 {{jsxref("Array")}}，其内容取决于是否存在全局（`g`）标志，如果没有匹配，则返回 [`null`](/zh-CN/docs/Web/JavaScript/Reference/Operators/null)。

- 如果使用 `g` 标志，则将返回与完整正则表达式匹配的所有结果，但不会返回捕获组。
- 如果没有使用 `g` 标志，则只返回第一个完整匹配及其相关捕获组。在这种情况下，`match()` 方法将返回与 {{jsxref("RegExp.prototype.exec()")}} 相同的结果（一个带有一些额外属性的数组）。

## 描述

`String.prototype.match` 方法本身的实现非常简单，它只是使用字符串作为第一个参数调用了参数的 `Symbol.match` 方法。实际的实现来自于 [`RegExp.prototype[@@match]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@match)。

- 如果你需要知道一个字符串是否与一个正则表达式 {{jsxref("RegExp")}} 匹配，请使用 {{jsxref("RegExp.prototype.test()")}}。
- 如果你只想获取第一个匹配项，你可能需要使用 {{jsxref("RegExp.prototype.exec()")}}。
- 如果你想要获取捕获组，并且全局标志已设置，你需要使用 {{jsxref("RegExp.prototype.exec()")}} 或 {{jsxref("String.prototype.matchAll()")}}。

有关传入正则表达式时 `match()` 方法的语义更多信息，请参阅 [`RegExp.prototype[@@match]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@match)。

## 示例

### 使用 match()

在下例中，使用 `match` 查找 `"Chapter"` 紧跟着 1 个或多个数值字符，再紧跟着一个小数点和数值字符 0 次或多次。正则表达式包含 `i` 标志，因此大小写会被忽略。

```js
const str = "For more information, see Chapter 3.4.5.1";
const re = /see (chapter \d+(\.\d)*)/i;
const found = str.match(re);

console.log(found);
// [
//   'see Chapter 3.4.5.1',
//   'Chapter 3.4.5.1',
//   '.1',
//   index: 22,
//   input: 'For more information, see Chapter 3.4.5.1',
//   groups: undefined
// ]
```

在上面的匹配结果中，`'see Chapter 3.4.5.1'` 是整个匹配。`'Chapter 3.4.5.1'` 被 `(chapter \d+(\.\d)*)` 捕获。`.1` 是由 `(\.\d)` 最后捕获的值。`index` 属性 (`22`) 是整个匹配的零基索引。`input` 属性是解析的原始字符串。

### 将全局标志和忽略大小写标志与 match() 一起使用

下面的示例演示了在 `match()` 中使用全局标志和忽略大小写标志。所有从 `A` 到 `E` 和从 `a` 到 `e` 的字母都将作为数组中的一个元素返回。

```js
const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const regexp = /[A-E]/gi;
const matches = str.match(regexp);

console.log(matches);
// ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']
```

> **备注：** 参见 {{jsxref("String.prototype.matchAll()")}} 和[通过标志进行高级搜索](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions#通过标志进行高级搜索)。

### 使用命名捕获组

在支持命名捕获组的浏览器中，以下代码将 `"fox"` 或 `"cat"` 捕获到一个名为 `animal` 的组中：

```js
const paragraph = "The quick brown fox jumps over the lazy dog. It barked.";

const capturingRegex = /(?<animal>fox|cat) jumps over/;
const found = paragraph.match(capturingRegex);
console.log(found.groups); // {animal: "fox"}
```

### 不传参数使用 match()

```js
const str = "空即是空";

str.match(); // 返回 [""]
```

### 使用实现了 @@match 的非 RegExp 对象调用 match()

如果一个对象有一个名为 `Symbol.match` 的方法，那么它可以被用作自定义匹配器。`Symbol.match` 的返回值将成为 `match()` 方法的返回值。

```js
const str = "Hmm, this is interesting.";

str.match({
  [Symbol.match](str) {
    return ["Yes, it's interesting."];
  },
}); // returns ["Yes, it's interesting."]
```

### 将非正则表达式对象作为参数

当 `regexp` 参数是一个字符串或一个数字，它会使用 `new RegExp(regexp)` 来隐式转换成一个 {{jsxref("RegExp")}}。

```js
const str1 =
  "NaN 表示不是一个数字。在 JavaScript 中 Infinity 包括了 -Infinity 和 +Infinity。";
const str2 = "我的爷爷已经 65 岁了，我的奶奶已经 63 岁";
const str3 = "该合同被声明为 null 且 void。";
str1.match("数字"); // “数字”是一个字符串。返回 ["数字"]
str1.match(NaN); // NaN 的类型是数字。返回 ["NaN"]
str1.match(Infinity); // Infinity 的类型是数字。返回 ["Infinity"]
str1.match(+Infinity); // 返回 ["Infinity"]
str1.match(-Infinity); // 返回 ["-Infinity"]
str2.match(65); // 返回 ["65"]
str2.match(+65); // 带正号的数字。返回 ["65"]
str3.match(null); // 返回 ["null"]
```

如果特殊字符没有被正确转义，这可能会导致意想不到的结果。

```js
console.log("123".match("1.3")); // [ "123" ]
```

这是一个匹配，因为正则表达式中的 `.` 可以匹配任何字符。为了仅匹配一个点字符，需要对输入进行转义。

```js
console.log("123".match("1\\.3")); // null
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [在 `core-js` 中实现 `String.prototype.match` 的 polyfill，包括修复和实现现代行为，例如 `Symbol.match` 支持](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.matchAll()")}}
- {{jsxref("RegExp")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
