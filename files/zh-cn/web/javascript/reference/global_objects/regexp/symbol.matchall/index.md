---
title: RegExp.prototype[Symbol.matchAll]()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll
---

{{jsxref("RegExp")}} 实例的 **`[Symbol.matchAll]`** 方法指定了 [`String.prototype.matchAll`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll) 的行为。

{{InteractiveExample("JavaScript Demo: RegExp.prototype[Symbol.matchAll]()", "taller")}}

```js interactive-example
class MyRegExp extends RegExp {
  [Symbol.matchAll](str) {
    const result = RegExp.prototype[Symbol.matchAll].call(this, str);
    if (!result) {
      return null;
    }
    return Array.from(result);
  }
}

const re = new MyRegExp("-[0-9]+", "g");
console.log("2016-01-02|2019-03-07".matchAll(re));
// Expected output: Array [Array ["-01"], Array ["-02"], Array ["-03"], Array ["-07"]]
```

## 语法

```js-nolint
regexp[Symbol.matchAll](str)
```

### 参数

- `str`
  - : 一个{{jsxref("String")}}的匹配对象。

### 返回值

一个[迭代器](/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_generators)。

## 描述

本方法用于在 `RegExp` 子类中自定义 `matchAll()` 的行为。它在内部被 {{jsxref("String.prototype.matchAll()")}} 调用。例如，以下两个示例返回相同的结果。

```js
"abc".matchAll(/a/);

/a/[Symbol.matchAll]("abc");
```

与 [`[Symbol.split]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split) 类似，[`[Symbol.matchAll]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll) 首先使用 [`[Symbol.species]`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.species) 构造一个新的正则表达式，从而避免以任何方式修改原始正则表达式。构造函数接收 `this` 和原始标志。 [`lastIndex`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) 从原始正则表达式的值开始。

```js
const regexp = /[a-c]/g;
regexp.lastIndex = 1;
const str = "abc";
console.log(
  Array.from(str.matchAll(regexp), (m) => `${regexp.lastIndex} ${m[0]}`),
);
// [ "1 b", "1 c" ]
```

如果正则表达式是全局的（带有 `g` 标志），每次调用返回迭代器的 `next()` 方法时，都会调用正则表达式的 [`exec()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) 方法并返回结果。如果当前匹配为空字符串，[`lastIndex`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) 仍会递增。如果正则表达式带有 [`u`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode) 标志，则递增一个 Unicode 码位；否则递增一个 UTF-16 码元。

```js
console.log(Array.from("😄".matchAll(/(?:)/g)));
// [ [ "" ], [ "" ], [ "" ] ]
console.log(Array.from("😄".matchAll(/(?:)/gu)));
// [ [ "" ], [ "" ] ]
```

如果正则表达式不是全局的，返回的迭代器会返回一次 [`exec()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) 的结果，然后结束。（输入是否为全局正则表达式由 [`String.prototype.matchAll()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll) 验证。`[Symbol.matchAll]()` 不会验证 `this` 的标志。）

当正则表达式同时具有粘性和全局标志时，仍会执行粘性匹配，也就是说不会匹配 `lastIndex` 之后的任何内容。

```js
console.log(Array.from("ab-c".matchAll(/[abc]/gy)));
// [ [ "a" ], [ "b" ] ]
```

## 示例

### 直接调用

本方法的使用方法几乎与 {{jsxref("String.prototype.matchAll()")}} 相同，除了 `this` 的不同以及参数顺序的差异。

```js
var re = /[0-9]+/g;
var str = "2016-01-02";
var result = re[Symbol.matchAll](str);

console.log(Array.from(result, (x) => x[0]));
// ["2016", "01", "02"]
```

### 在子类中使用 `[Symbol.matchAll]()`

{{jsxref("RegExp")}} 的子类可以重写 `[Symbol.matchAll]()` 方法来修改默认行为。例如，返回一个{{jsxref("Array", "数组", "", 1)}}而不是[迭代器](/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_generators)：

```js
class MyRegExp extends RegExp {
  [Symbol.matchAll](str) {
    var result = RegExp.prototype[Symbol.matchAll].call(this, str);
    if (!result) {
      return null;
    } else {
      return Array.from(result);
    }
  }
}

var re = new MyRegExp("([0-9]+)-([0-9]+)-([0-9]+)", "g");
var str = "2016-01-02|2019-03-07";
var result = str.matchAll(re);
console.log(result[0]); // [ "2016-01-02", "2016", "01", "02" ]
console.log(result[1]); // [ "2019-03-07", "2019", "03", "07" ]
```

## 浏览器兼容性

{{Compat}}

## 参见

- {{JSxRef("String.prototype.matchAll()")}}
- {{JSxRef("Symbol.matchAll")}}
