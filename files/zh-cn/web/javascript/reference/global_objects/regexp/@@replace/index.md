---
title: RegExp.prototype[@@replace]()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/@@replace
---

{{JSRef}}

**`[@@replace]()`** 方法会在一个字符串中用给定的替换器，替换所有符合正则模式的匹配项，并返回替换后的新字符串结果。用来替换的参数可以是一个字符串或是一个针对每次匹配的回调函数。

{{EmbedInteractiveExample("pages/js/regexp-prototype-@@replace.html")}}

## 语法

```plain
regexp[Symbol.replace](str, newSubStr|function)
```

### 参数

- `str`
  - : 正则替换的目标字符串。
- `newSubStr (replacement)`
  - : 类型为 {{jsxref("String")}} 的替换器。支持大多数特殊的替换匹配模式；见{{jsxref("String.prototype.replace()")}}页的{{jsxref("String.prototype.replace", "Specifying a string as a parameter", "#Specifying_a_string_as_a_parameter", 1)}}部分。
- `function (replacement)`
  - : 生成新的子字符串的回调函数替换器。作用于该函数的参数的详细描述见{{jsxref("String.prototype.replace()")}}页的 {{jsxref("String.prototype.replace", "Specifying a function as a parameter", "#Specifying_a_function_as_a_parameter", 1)}} 部分。

### 返回值

用替换器替换相应匹配项后的新字符串。

## 描述

如果匹配模式也是{{jsxref("RegExp")}}对象，这个方法在 {{jsxref("String.prototype.replace()")}} 的内部调用。例如，下面的两个方法返回相同结果。

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

### 在子类中使用 @@replace

{{jsxref("RegExp")}} 的子类可以覆写 `[@@replace]()`方法来修改默认行为。

```js
class MyRegExp extends RegExp {
  constructor(pattern, flags, count) {
    super(pattern, flags);
    this.count = count;
  }
  [Symbol.replace](str, replacement) {
    // Perform @@replace |count| times.
    var result = str;
    for (var i = 0; i < this.count; i++) {
      result = RegExp.prototype[Symbol.replace].call(this, result, replacement);
    }
    return result;
  }
}

var re = new MyRegExp("\\d", "", 3);
var str = "01234567";
var newstr = str.replace(re, "#"); // String.prototype.replace calls re[@@replace].
console.log(newstr); // ###34567
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- {{jsxref("String.prototype.replace()")}}
- {{jsxref("RegExp.prototype.@@match()", "RegExp.prototype[@@match]()")}}
- {{jsxref("RegExp.prototype.@@search()", "RegExp.prototype[@@search]()")}}
- {{jsxref("RegExp.prototype.@@split()", "RegExp.prototype[@@split]()")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
