---
title: RegExp.prototype.test()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/test
---

{{jsxref("RegExp")}} 实例的 **`test()`** 方法使用正则表达式在指定字符串中执行搜索。如果存在匹配，则返回 `true`, 否则返回 `false`。

JavaScript 的 {{jsxref("RegExp")}} 对象在设置了 {{jsxref("RegExp/global", "global")}}（全局）或 {{jsxref("RegExp/sticky", "sticky")}}（粘性）标志时（例如 `/foo/g` 或 `/foo/y`），是**有状态的**。它们会从上一次匹配中保存一个 {{jsxref("RegExp/lastIndex", "lastIndex")}} 属性。利用这个特性，`test()` 方法可以用来在一段文本字符串中（配合捕获组）迭代查找多个匹配项。

{{InteractiveExample("JavaScript Demo: RegExp.prototype.test", "taller")}}

```js interactive-example
const str = "table football";

const regex = new RegExp("foo*");
const globalRegex = new RegExp("foo*", "g");

console.log(regex.test(str));
// Expected output: true

console.log(globalRegex.lastIndex);
// Expected output: 0

console.log(globalRegex.test(str));
// Expected output: true

console.log(globalRegex.lastIndex);
// Expected output: 9

console.log(globalRegex.test(str));
// Expected output: false
```

## 语法

```plain
regexObj.test(str)
```

### 参数

- `str`
  - : 用来与正则表达式匹配的字符串

### 返回值

如果正则表达式与指定的字符串匹配，返回`true`；否则`false`。

## 描述

当你想要知道一个正则表达式是否与指定的字符串匹配时，就可以使用 `test()`（类似于 {{jsxref("String.prototype.search()")}} 方法），差别在于 test 返回一个布尔值，而 search 返回索引（如果找到）或者 -1（如果没找到）；若想知道更多信息（然而执行比较慢），可使用{{jsxref("RegExp.prototype.exec()", "exec()")}} 方法（类似于 {{jsxref("String.prototype.match()")}} 方法）。和 {{jsxref("RegExp.prototype.exec()", "exec()")}} (或者组合使用),一样，在相同的全局正则表达式实例上多次调用`test`将会越过之前的匹配。

## 示例

### 使用 `test()`

一个简单的例子，测试 "hello" 是否包含在字符串的最开始，返回布尔值。

```js
let str = "hello world!";
let result = /^hello/.test(str);
console.log(result);
// true
```

下例打印一条信息，该信息内容取决于是否成功通过指定测试：

```js
function testinput(re, str) {
  var midstring;
  if (re.test(str)) {
    midstring = " contains ";
  } else {
    midstring = " does not contain ";
  }
  console.log(str + midstring + re.source);
}
```

### 当设置全局标志的正则使用`test()`

如果正则表达式设置了全局标志，`test()` 的执行会改变正则表达式 [`lastIndex`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex)属性。连续的执行`test()`方法，后续的执行将会从 lastIndex 处开始匹配字符串，({{jsxref("RegExp.prototype.exec()", "exec()")}} 同样改变正则本身的 `lastIndex 属性值`).

下面的实例表现了这种行为：

```js
var regex = /foo/g;

// regex.lastIndex is at 0
regex.test("foo"); // true

// regex.lastIndex is now at 3
regex.test("foo"); // false
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [JavaScript 指南](/zh-CN/docs/Web/JavaScript/Guide)的[正则表达式](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions)章节
- {{jsxref("RegExp")}}
