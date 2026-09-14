---
title: RegExp.prototype[Symbol.match]()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match
---

{{jsxref("RegExp")}} 实例的 **`[Symbol.match]()`** 方法指定了 [`String.prototype.match()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match) 的行为。此外，它的存在（或不存在）可能会影响对象是否被视为正则表达式。

{{InteractiveExample("JavaScript Demo: RegExp.prototype[Symbol.match]()")}}

```js interactive-example
class RegExp1 extends RegExp {
  [Symbol.match](str) {
    const result = RegExp.prototype[Symbol.match].call(this, str);
    if (result) {
      return "VALID";
    }
    return "INVALID";
  }
}

console.log("2012-07-02".match(new RegExp1("([0-9]+)-([0-9]+)-([0-9]+)")));
// Expected output: "VALID"
```

## 语法

```js-nolint
regexp[Symbol.match](str)
```

### 参数

- `str`
  - : match 的目标参数是{{jsxref("String")}}

### 返回值

match 方法会返回一个数组，它包括整个匹配结果，和通过捕获组匹配到的结果，如果没有匹配到则返回 null

## 描述

此方法用于在 `RegExp` 子类中自定义匹配行为。它在内部被 {{jsxref("String.prototype.match()")}} 调用。例如，下面的两个方法返回相同结果。

```js
"abc".match(/a/);

/a/[Symbol.match]("abc");
```

如果正则表达式是全局的（带有 `g` 标志），其 [`lastIndex`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) 会先被设置为 0，因此匹配总是从字符串开头开始。然后会重复调用正则表达式的 [`exec()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) 方法，直到 `exec()` 返回 `null`。如果当前匹配为空字符串，`lastIndex` 仍会递增——如果正则表达式是[支持 Unicode](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode_感知模式)的，则递增一个 Unicode 码位；否则递增一个 UTF-16 码元。

```js
console.log("😄".match(/(?:)/g)); // [ '', '', '' ]
console.log("😄".match(/(?:)/gu)); // [ '', '' ]
```

如果正则表达式不是全局的，则只会调用一次 `exec()`，其结果将成为 `[Symbol.match]()` 的返回值。

`exec()` 方法会在最后一次匹配失败时自动将 `lastIndex` 重置为 0。因此，对于 `lastIndex` 从 0 开始的全局正则表达式，`[Symbol.match]()` 通常不会产生副作用。但是，对于非全局的[粘性](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky)正则表达式，只会调用一次 `exec()`，如果匹配成功，`lastIndex` 就不会被重置。在这种情况下，每次调用 `match()` 可能会返回不同的结果。

```js
const re = /[abc]/y;
for (let i = 0; i < 5; i++) {
  console.log("abc".match(re), re.lastIndex);
}
// [ 'a' ] 1
// [ 'b' ] 2
// [ 'c' ] 3
// null 0
// [ 'a' ] 1
```

当正则表达式同时具有粘性和全局标志时，仍会执行粘性匹配，也就是说不会匹配 `lastIndex` 之后的任何内容。

```js
console.log("ab-c".match(/[abc]/gy)); // [ 'a', 'b' ]
```

## 示例

### 直接调用

这个方法的使用方式和 {{jsxref("String.prototype.match()")}} 相同，不同之处是 `this` 和参数顺序。

```js
var re = /[0-9]+/g;
var str = "2016-01-02";
var result = re[Symbol.match](str);
console.log(result); // ["2016", "01", "02"]
```

### 在子类中使用 `[Symbol.match]()`

{{jsxref("RegExp")}} 的子类可以覆写 `[Symbol.match]()` 方法来修改默认行为。

```js
class MyRegExp extends RegExp {
  [Symbol.match](str) {
    var result = RegExp.prototype[Symbol.match].call(this, str);
    if (!result) return null;
    return {
      group(n) {
        return result[n];
      },
    };
  }
}

var re = new MyRegExp("([0-9]+)-([0-9]+)-([0-9]+)");
var str = "2016-01-02";
var result = str.match(re); // String.prototype.match 调用 re[Symbol.match]()。
console.log(result.group(1)); // 2016
console.log(result.group(2)); // 01
console.log(result.group(3)); // 02
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `RegExp.prototype[Symbol.match]` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.match()")}}
- [`RegExp.prototype[Symbol.matchAll]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll)
- [`RegExp.prototype[Symbol.replace]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace)
- [`RegExp.prototype[Symbol.search]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search)
- [`RegExp.prototype[Symbol.split]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split)
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
- {{jsxref("Symbol.match")}}
