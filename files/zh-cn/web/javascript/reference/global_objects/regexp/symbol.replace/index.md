---
title: RegExp.prototype[Symbol.replace]()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace
---

{{jsxref("RegExp")}} 实例的 **`[Symbol.replace]()`** 方法指定了 [`String.prototype.replace()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace) 和 [`String.prototype.replaceAll()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll) 在传入作为模式的正则表达式时的行为。

{{InteractiveExample("JavaScript Demo: RegExp.prototype[SYmbol.replace]()")}}

```js interactive-example
class RegExp1 extends RegExp {
  [Symbol.replace](str) {
    return RegExp.prototype[Symbol.replace].call(this, str, "#!@?");
  }
}

console.log("football".replace(new RegExp1("foo")));
// Expected output: "#!@?tball"
```

## 语法

```js-nolint
regexp[Symbol.replace](str, replacement)
```

### 参数

- `str`
  - : 正则替换的目标字符串。
- `newSubStr (replacement)`
  - : 类型为 {{jsxref("String")}} 的替换器。支持大多数特殊的替换匹配模式；见 `String.prototype.replace()` 的[指定字符串作为替换项](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace#指定字符串作为替换项)部分。
- `function (replacement)`
  - : 生成新的子字符串的回调函数替换器。作用于该函数的参数的详细描述见 `String.prototype.replace()` 的[指定函数作为替换项](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace#指定函数作为替换项)部分。

### 返回值

用替换器替换相应匹配项后的新字符串。

## 描述

该方法用于在 `RegExp` 子类中自定义替换行为。如果 `pattern` 参数是 {{jsxref("RegExp")}} 对象，它会在内部被 {{jsxref("String.prototype.replace()")}} 和 {{jsxref("String.prototype.replaceAll()")}} 调用。例如，下面的两个方法返回相同结果。

```js
"abc".replace(/a/, "A");

/a/[Symbol.replace]("abc", "A");
```

如果正则表达式是全局的（带有 `g` 标志），其 [`lastIndex`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) 会先被设置为 0，因此匹配总是从字符串开头开始。然后会重复调用正则表达式的 [`exec()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) 方法，直到 `exec()` 返回 `null`。如果当前匹配为空字符串，`lastIndex` 仍会递增——如果正则表达式是[支持 Unicode](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode_感知模式)的，则递增一个 Unicode 码位；否则递增一个 UTF-16 码元。

```js
console.log("😄".replace(/(?:)/g, " ")); // " \ud83d \ude04 "
console.log("😄".replace(/(?:)/gu, " ")); // " 😄 "
```

如果正则表达式不是全局的，则只会调用一次 `exec()`。

替换会在识别出所有匹配的子字符串后进行。对于每个成功的 `exec()` 结果，会根据 `replacement` 参数创建替换字符串，具体过程见 [`String.prototype.replace()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace#描述)。

`exec()` 方法会在最后一次匹配失败时自动将 `lastIndex` 重置为 0。因此，对于 `lastIndex` 从 0 开始的全局正则表达式，`[Symbol.replace]()` 通常不会产生副作用。但是，对于非全局的[粘性](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky)正则表达式，只会调用一次 `exec()`，如果匹配成功，`lastIndex` 就不会被重置。在这种情况下，每次调用 `replace()` 可能会返回不同的结果。

```js
const re = /a/y;
for (let i = 0; i < 5; i++) {
  console.log("aaa".replace(re, "b"), re.lastIndex);
}
// baa 1
// aba 2
// aab 3
// aaa 0
// baa 1
```

当正则表达式同时具有粘性和全局标志时，仍会执行粘性匹配，也就是说不会匹配 `lastIndex` 之后的任何内容。

```js
console.log("aa-a".replace(/a/gy, "b")); // "bb-a"
```

如果匹配模式不是一个{{jsxref("RegExp")}} 对象，{{jsxref("String.prototype.replace()")}} 就不会调用该方法，也不会创建一个 {{jsxref("RegExp")}}对象。

## 示例

### 直接调用

这个方法基本可以和 {{jsxref("String.prototype.replace()")}} 一样使用，不同之处是 `this` 和参数顺序。

```js
var re = /-/g;
var str = "2016-01-01";
var newstr = re[Symbol.replace](str, ".");
console.log(newstr); // 2016.01.01
```

### 在子类中使用 `[Symbol.replace]()`

{{jsxref("RegExp")}} 的子类可以覆写 `[Symbol.replace]()` 方法来修改默认行为。

```js
class MyRegExp extends RegExp {
  constructor(pattern, flags, count) {
    super(pattern, flags);
    this.count = count;
  }
  [Symbol.replace](str, replacement) {
    // 执行 [Symbol.replace]() |count| 次。
    var result = str;
    for (var i = 0; i < this.count; i++) {
      result = RegExp.prototype[Symbol.replace].call(this, result, replacement);
    }
    return result;
  }
}

var re = new MyRegExp("\\d", "", 3);
var str = "01234567";
var newstr = str.replace(re, "#"); // String.prototype.replace 调用 re[Symbol.replace]()。
console.log(newstr); // ###34567
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `RegExp.prototype[Symbol.replace]` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.replace()")}}
- {{jsxref("String.prototype.replaceAll()")}}
- [`RegExp.prototype[Symbol.match]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match)
- [`RegExp.prototype[Symbol.matchAll]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll)
- [`RegExp.prototype[Symbol.search]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search)
- [`RegExp.prototype[Symbol.split]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split)
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
- {{jsxref("Symbol.replace")}}
