---
title: RegExp.prototype[Symbol.replace]()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace
---

{{JSRef}}

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

如果匹配模式也是 {{jsxref("RegExp")}} 对象，这个方法在 {{jsxref("String.prototype.replace()")}} 的内部调用。例如，下面的两个方法返回相同结果。

```js
"abc".replace(/a/, "A");

/a/[Symbol.replace]("abc", "A");
```

该方法是为了在 RegExp 子类中自定义匹配的替换模式。

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
