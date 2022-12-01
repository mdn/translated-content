---
title: Number
slug: Web/JavaScript/Reference/Global_Objects/Number
---

{{JSRef}}

JavaScript 的 **`Number`** 对象是经过封装的能让你处理数字值的对象。`Number` 对象由 `Number()` 构造器创建。

JavaScript 的`Number`类型为[双精度 IEEE 754 64 位浮点](https://en.wikipedia.org/wiki/Floating-point_arithmetic)类型。

最近出了 stage3{{jsxref("BigInt")}} 任意精度数字类型，已经进入 stage3 规范

## 语法

```plain
new Number(value);
var a = new Number('123'); // a === 123 is false
var b = Number('123'); // b === 123 is true
a instanceof Number; // is true
b instanceof Number; // is false
```

### 参数

- `value`
  - : 被创建对象的数字值。

## 描述

`Number` 对象主要用于：

- 如果参数无法被转换为数字，则返回 {{jsxref("NaN")}}。
- 在非构造器上下文中 (如：没有 {{jsxref("Operators/new", "new")}} 操作符)，`Number` 能被用来执行类型转换。

## 属性

- {{jsxref("Number.EPSILON")}}
  - : 两个可表示 (representable) 数之间的最小间隔。
- {{jsxref("Number.MAX_SAFE_INTEGER")}}
  - : JavaScript 中最大的安全整数 (`2^53 - 1`)。
- {{jsxref("Number.MAX_VALUE")}}
  - : 能表示的最大正数。最小的负数是 `-MAX_VALUE`。
- {{jsxref("Number.MIN_SAFE_INTEGER")}}
  - : JavaScript 中最小的安全整数 (`-(2^53 - 1)`).
- {{jsxref("Number.MIN_VALUE")}}
  - : 能表示的最小正数即最接近 0 的正数 (实际上不会变成 0)。最大的负数是 `-MIN_VALUE`。
- {{jsxref("Number.NaN")}}
  - : 特殊的“非数字”值。
- {{jsxref("Number.NEGATIVE_INFINITY")}}
  - : 特殊的负无穷大值，在溢出时返回该值。
- {{jsxref("Number.POSITIVE_INFINITY")}}
  - : 特殊的正无穷大值，在溢出时返回该值。
- {{jsxref("Number.prototype")}}
  - : Number 对象上允许的额外属性。

## 方法

- {{jsxref("Number.isNaN()")}}
  - : 确定传递的值是否是 NaN。
- {{jsxref("Number.isFinite()")}}
  - : 确定传递的值类型及本身是否是有限数。
- {{jsxref("Number.isInteger()")}}
  - : 确定传递的值类型是“number”，且是整数。
- {{jsxref("Number.isSafeInteger()")}}
  - : 确定传递的值是否为安全整数 ( -`(2^53 - 1)` 至 `2^53 - 1`) 之间。
- {{jsxref("Number.toInteger()")}} {{Deprecated_Inline}}
  - : 计算传递的值并将其转换为整数 (或无穷大)。
- {{jsxref("Number.parseFloat()")}}
  - : 和全局对象 {{jsxref("parseFloat", "parseFloat()")}} 一样。
- {{jsxref("Number.parseInt()")}}
  - : 和全局对象 {{jsxref("parseInt", "parseInt()")}} 一样。

## `Number` 实例

所有 `Number` 实例都继承自 {{jsxref("Number.prototype")}}。`被修改的 Number` 构造器的原型对象对全部 `Number` 实例都生效。

### 方法

- {{jsxref("Number.prototype.toExponential()" ,"Number.prototype.toExponential(<var>fractionDigits</var>)")}}
  - : 返回使用指数表示法表示数字的字符串。
- {{jsxref("Number.prototype.toFixed()", "Number.prototype.toFixed(<var>digits</var>)")}}
  - : 返回使用定点表示法表示数字的字符串。
- {{jsxref("Number.prototype.toLocaleString()", "Number.prototype.toLocaleString([<var>locales</var> [, <var>options</var>]])")}}
  - : 返回数字在特定语言环境下表示的字符串。覆盖 {{jsxref("Object.prototype.toLocaleString()")}} 方法。
- {{jsxref("Number.prototype.toPrecision()", "Number.prototype.toPrecision(<var>precision</var>)")}}
  - : 返回数字使用定点表示法或指数表示法至指定精度的字符串。
- {{jsxref("Number.prototype.toString()", "Number.prototype.toString([<var>radix</var>])")}}
  - : 返回一个代表给定对象的字符串，基于指定的基数。覆盖 {{jsxref("Object.prototype.toString()")}} 方法。
- {{jsxref("Number.prototype.valueOf()")}}
  - : 返回指定对象的原始值。覆盖 {{jsxref("Object.prototype.valueOf()")}} 方法。

## 示例

### 使用 Number 对象给数字变量赋值

下例使用 `Number` 对象的属性给几个数字变量赋值：

```js
var biggestNum = Number.MAX_VALUE;
var smallestNum = Number.MIN_VALUE;
var infiniteNum = Number.POSITIVE_INFINITY;
var negInfiniteNum = Number.NEGATIVE_INFINITY;
var notANum = Number.NaN;
```

### 整数类型的范围

JavaScript 能够准确表示的整数范围在`-2^53`到`2^53`之间（不含两个端点），超过这个范围，无法精确表示这个整数。 (详情请参阅 ECMAScript standard, chapter _[6.1.6 The Number Type](https://www.ecma-international.org/ecma-262/#sec-ecmascript-language-types-number-type)_):

```js
var biggestInt = Number.MAX_SAFE_INTEGER;
//9007199254740991
var smallestInt = Number.MIN_SAFE_INTEGER;
//-9007199254740991
```

在解析序列化的 JSON 时，如果 JSON 解析器将它们强制转换为 Number 类型，那么超出此范围的整数值可能会被破坏。在工作中使用{{jsxref("String")}} 类型代替，是一个可行的解决方案。

### 使用 `Number` 转换 `Date` 对象

下例使用 Number 作为函数来转换 `Date` 对象为数字值：

```js
var d = new Date("December 17, 1995 03:24:00");
print(Number(d));
```

这将输出 "819199440000"。

### 转换数字字符串为数字

```js
Number('123')     // 123
Number('12.3')    // 12.3
Number('12.00')   // 12
Number('123e-1')  // 12.3
Number('')        // 0
Number(null)      // 0
Number('0x11')    // 17
Number('0b11')    // 3
Number('0o11')    // 9
Number('foo')     // NaN
Number('100a')    // NaN
Number('-Infinity') //-Infinity
```

## Specifications

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参阅

- {{jsxref("NaN")}}
- 全局对象 {{jsxref("Math")}}
- Integers with arbitrary precision: {{jsxref("BigInt")}}
- [Number type in details](https://medium.com/@maximus.koretskyi/javascripts-number-type-8d59199db1b6#.9whwe88tz)
