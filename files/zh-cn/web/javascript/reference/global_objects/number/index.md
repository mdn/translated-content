---
title: Number
slug: Web/JavaScript/Reference/Global_Objects/Number
---

{{JSRef}}

**`Number`** 值表示像 `37` 或 `-9.25` 这样的浮点数。

`Number` 构造函数包含常量和处理数值的方法。其他类型的值可以使用 `Number()` 函数转换为数字。

## 描述

数值通常以字面量形式表示。如 `255` 或 `3.14159`。[词法语法](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#字面量)包含更详细的参考。

```js
255; // 二百五十五
255.0; // 相同的数字
255 === 255.0; // true
255 === 0xff; // true（十六进制表示）
255 === 0b11111111; // true（二进制表示）
255 === 0.255e3; // true（十进制指数记数法）
```

在 JavaScript 代码中，像 `37` 这样的数字字面量是浮点数值，而不是整数。在常见的日常使用中，JavaScript 没有单独的整数类型。（JavaScript 还有一个 {{jsxref("BigInt")}} 类型，但它并不是为了取代 Number 而设计的，`37` 仍然是一个数字，而不是一个 BigInt。）

当作为一个函数使用时，`Number(value)` 将字符串或者其他值转换到 Number 类型。如果该值不能被转换，它会返回 {{jsxref("NaN")}}。

```js
Number("123"); // 返回数字 123
Number("123") === 123; // true

Number("unicorn"); // NaN
Number(undefined); // NaN
```

### Number 编码

JavaScript 的 `Number` 类型是一个[双精度 64 位二进制格式 IEEE 754](https://zh.wikipedia.org/wiki/雙精度浮點數) 值，类似于 Java 或者 C# 中的 `double`。这意味着它可以表示小数值，但是存储的数字的大小和精度有一些限制。简而言之，IEEE 754 双精度浮点数使用 64 位来表示 3 个部分：

- 1 位用于表示*符号（sign）*（正数或者负数）
- 11 位用于表示*指数（exponent）*（-1022 到 1023）
- 52 位用于表示*尾数（mantissa）*（表示 0 和 1 之间的数值）

尾数（也称为*有效数*）是表示实际值（有效数字）的数值部分。指数是尾数应乘以的 2 的幂次。将其视为科学计数法：

<math display="block"><semantics><mrow><mtext>Number</mtext><mo>=</mo><mo stretchy="false">(</mo><mrow><mo>−</mo><mn>1</mn></mrow><msup><mo stretchy="false">)</mo><mtext>sign</mtext></msup><mo>⋅</mo><mo stretchy="false">(</mo><mn>1</mn><mo>+</mo><mtext>mantissa</mtext><mo stretchy="false">)</mo><mo>⋅</mo><msup><mn>2</mn><mtext>exponent</mtext></msup></mrow><annotation encoding="TeX">\text{Number} = ({-1})^{\text{sign}} \cdot (1 + \text{mantissa}) \cdot 2^{\text{exponent}}</annotation></semantics></math>

尾数使用 52 比特存储，在二进制小数中解释为 `1.…` 之后的数字。因此，尾数的精度是 2<sup>-52</sup>（可以通过 {{jsxref("Number.EPSILON")}} 获得），或者十进制数小数点后大约 15 到 17 位；超过这个精度的算术会受到[舍入](https://zh.wikipedia.org/wiki/浮点数#准确性)的影响。

一个数值可以容纳的最大值是 2<sup>1024</sup> - 1（指数为 1023，尾数为基于二进制的 0.1111…），可以通过 {{jsxref("Number.MAX_VALUE")}} 获得。超过这个值的数会被替换为特殊的数值常量 {{jsxref("Infinity")}}。

只有在 -2<sup>53</sup> + 1 到 2<sup>53</sup> - 1 范围内（闭区间）的整数才能在不丢失精度的情况下被表示（可通过 {{jsxref("Number.MIN_SAFE_INTEGER")}} 和 {{jsxref("Number.MAX_SAFE_INTEGER")}} 获得），因为尾数只能容纳 53 位（包括前导 1）。

有关这部份的更多详细信息，请参阅 [ECMAScript 标准](https://tc39.es/ecma262/multipage/ecmascript-data-types-and-values.html#sec-ecmascript-language-types-number-type)。

### Number 强制转换

许多期望数值的内置操作首先将其参数转换为数字（这在很大程度上解释了为什么 `Number` 对象的行为类似于数字原始值）。[该操作](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-tonumber)可以总结如下：

- Number 将按原样返回
- [`undefined`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined) 转换为 [`NaN`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN)。
- [`null`](/zh-CN/docs/Web/JavaScript/Reference/Operators/null) 转换为 `0`。
- `true` 转换为 `1`；`false` 转换为 `0`。
- 字符串将被假定为包含[数字字面量](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#数字字面量)，并通过解析它们来转换。解析失败会得到 `NaN`。与实际数字字面量相比，它们有一些细微的差别：
  - 前导和尾随的空格/换行符会被忽略。
  - 前导的数字 `0` 不会导致该数值成为八进制字面量（或在严格模式下被拒绝）。
  - `+` 和 `-` 允许出现在字符串的开头以指示其符号。（在实际代码中，它们“看起来像”文字的一部分，但实际上是独立的一元运算符。）然而，该标志只能出现一次，并且后面不能跟空格。
  - `Infinity` 和 `-Infinity` 被当作是字面量。在实际代码中，它们是全局变量。
  - 空字符串或仅包含空格的字符串转换为 `0`。
  - 不允许使用[数字分隔符](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#数值分隔符)。
- [BigInt](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt) 抛出 {{jsxref("TypeError")}}，以防止意外的强制隐式转换导致精度损失。
- [Symbol](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol) 抛出 {{jsxref("TypeError")}}。
- 对象首先通过按顺序调用它们的 [`[Symbol.toPrimitive]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive)（使用 `"number"` 提示）、`valueOf()` 和 `toString()` 方法将其[转换为原始值](/zh-CN/docs/Web/JavaScript/Data_structures#强制原始值转换)。然后将得到的原始值转换为数字。

有两种方法可以在 JavaScript 中实现几乎相同的效果。

- [一元加](/zh-CN/docs/Web/JavaScript/Reference/Operators/Unary_plus)：`+x` 完全按照上面的数值强制转换步骤来转换 `x`。
- [`Number()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/Number) 函数：`Number(x)` 使用相同的算法转换 `x`，除了 [BigInt](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt) 不会抛出 {{jsxref("TypeError")}}，而是返回其数字值，并且可能导致精度损失。

{{jsxref("Number.parseFloat()")}} 和 {{jsxref("Number.parseInt()")}} 与 `Number()` 相似，但只能转换字符串，并且解析规则略有不同。例如，`parseInt()` 无法识别小数点，`parseFloat()` 无法识别 `0x` 前缀。

#### 整数转换

某些操作需要整数作为参数，尤其是那些与数组/字符串索引、日期/时间组件和数字进制相关的操作。在执行上述数值强制转换步骤后，结果将被[截断](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc)为整数（即舍弃小数部份）。如果数值为 ±Infinity，则按原样返回。如果数值是 `NaN` 或 `-0`，则返回为 `0`。因此，结果总是整数（不包括 `-0`）或 ±Infinity。

值得注意的是，当转换到整数时，`undefined` 和 `null` 都会变成 `0`，因为 `undefined` 被转换为 `NaN`，`NaN` 也变成了 `0`。

#### 固定宽度数值转换

JavaScript 有一些较低级别的函数，用于处理整数的二进制编码，最值得注意的是[按位运算](/zh-CN/docs/Web/JavaScript/Reference/Operators#位移运算符)和 {{jsxref("TypedArray")}} 对象。按位运算总是将操作数转换为 32 位整数。在这些情况下，将值转换为数字后，数字将首先[截断](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc)小数部分，然后再取整数的二进制的补码编码中的最低几位来将数值标准化为给定的宽度。

```js
new Int32Array([1.1, 1.9, -1.1, -1.9]); // Int32Array(4) [ 1, 1, -1, -1 ]

new Int8Array([257, -257]); // Int8Array(2) [ 1, -1 ]
// 257 = 0001 0000 0001
//     =      0000 0001（模 2^8）
//     = 1
// -257 = 1110 1111 1111
//      =      1111 1111（模 2^8）
//      = -1（带符号整数）

new Uint8Array([257, -257]); // Uint8Array(2) [ 1, 255 ]
// -257 = 1110 1111 1111
//      =      1111 1111（模 2^8）
//      = 255（无符号整数）
```

## 构造函数

- {{jsxref("Number/Number", "Number()")}}
  - : 创建一个新的 `Number` 值。

当 `Number` 作为一个构造函数（用 `new`）被调用时，它会创建一个 {{jsxref("Number")}} 对象，该对象**不是**一个原始值。例如，`typeof new Number(42) === "object"`，并且 `new Number(42) !== 42`（尽管 `new Number(42) == 42`）。

> [!WARNING]
> 你应该很少发现自己将 `Number` 作为构造函数使用。

## 静态属性

- {{jsxref("Number.EPSILON")}}
  - : 两个可表示数之间的最小间隔。
- {{jsxref("Number.MAX_SAFE_INTEGER")}}
  - : JavaScript 中最大的安全整数（2<sup>53</sup> - 1）。
- {{jsxref("Number.MAX_VALUE")}}
  - : 能表示的最大正数。
- {{jsxref("Number.MIN_SAFE_INTEGER")}}
  - : JavaScript 中最小的安全整数（-(2<sup>53</sup> - 1)）。
- {{jsxref("Number.MIN_VALUE")}}
  - : 能表示的最小正数即最接近 0 的正数（实际上不会变成 0）。
- {{jsxref("Number.NaN")}}
  - : 特殊的“**N**ot **a** **N**umber”（非数字）值。
- {{jsxref("Number.NEGATIVE_INFINITY")}}
  - : 特殊的负无穷大值，在溢出时返回该值。
- {{jsxref("Number.POSITIVE_INFINITY")}}
  - : 特殊的正无穷大值，在溢出时返回该值。

## 静态方法

- {{jsxref("Number.isFinite()")}}
  - : 判断传入的值是否是有限数。
- {{jsxref("Number.isInteger()")}}
  - : 判断传入的值是否为整数
- {{jsxref("Number.isNaN()")}}
  - : 判断传入的值是否为 `NaN`。
- {{jsxref("Number.isSafeInteger()")}}
  - : 判断传入的值是否为安全整数（数值在 -(2<sup>53</sup> - 1) 到 2<sup>53</sup> - 1 之间）。
- {{jsxref("Number.parseFloat()")}}
  - : 和全局函数 {{jsxref("parseFloat", "parseFloat()")}} 相同。
- {{jsxref("Number.parseInt()")}}
  - : 和全局函数 {{jsxref("parseInt", "parseInt()")}} 相同。

## 实例属性

这些属性是在 `Number.prototype` 上定义的，并由所有 `Number` 实例共享。

- {{jsxref("Object/constructor", "Number.prototype.constructor")}}
  - : 创建实例对象的构造函数。对于 `Number` 实例，初始值为 {{jsxref("Number/Number", "Number")}} 构造函数。

## 实例方法

- {{jsxref("Number.prototype.toExponential()")}}
  - : 返回使用指数表示法表示数值的字符串。
- {{jsxref("Number.prototype.toFixed()")}}
  - : 返回使用定点表示法表示数值的字符串。
- {{jsxref("Number.prototype.toLocaleString()")}}
  - : 返回数值在特定语言环境下表示的字符串。重写了 {{jsxref("Object.prototype.toLocaleString()")}} 方法。
- {{jsxref("Number.prototype.toPrecision()")}}
  - : 返回数值使用定点表示法或指数表示法至指定精度的字符串。
- {{jsxref("Number.prototype.toString()")}}
  - : 返回一个代表给定对象的字符串，基于指定的*基数*（radix）。重写了 {{jsxref("Object.prototype.toString()")}} 方法。
- {{jsxref("Number.prototype.valueOf()")}}
  - : 返回指定对象的原始值。重写了 {{jsxref("Object.prototype.valueOf()")}} 方法。

## 示例

### 使用 Number 对象给数字变量赋值

下例使用 `Number` 对象的属性给几个数字变量赋值：

```js
const biggestNum = Number.MAX_VALUE;
const smallestNum = Number.MIN_VALUE;
const infiniteNum = Number.POSITIVE_INFINITY;
const negInfiniteNum = Number.NEGATIVE_INFINITY;
const notANum = Number.NaN;
```

### 整数类型的范围

以下示例显示了可以表示为 `Number` 对象的最小和最大整数值。

```js
const biggestInt = Number.MAX_SAFE_INTEGER; // (2**53 - 1) => 9007199254740991
const smallestInt = Number.MIN_SAFE_INTEGER; // -(2**53 - 1) => -9007199254740991
```

当解析已序列化为 JSON 的数据时，如果 JSON 解析器将它们强制为 `Number` 类型，超出此范围的整数值可能会被损坏。

一个可能的变通办法是使用 {{jsxref("String")}}。

较大的数值可以使用 {{jsxref("BigInt")}} 类型表示。

### 使用 Number() 转换 Date 对象

以下示例使用 `Number` 作为函数将 {{jsxref("Date")}} 对象转换为数值：

```js
const d = new Date("December 17, 1995 03:24:00");
console.log(Number(d));
```

这将输出 `819199440000`。

### 将数字字符串和 null 转换为数值

```js
Number("123"); // 123
Number("123") === 123; // true
Number("12.3"); // 12.3
Number("12.00"); // 12
Number("123e-1"); // 12.3
Number(""); // 0
Number(null); // 0
Number("0x11"); // 17
Number("0b11"); // 3
Number("0o11"); // 9
Number("foo"); // NaN
Number("100a"); // NaN
Number("-Infinity"); // -Infinity
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [在 `core-js` 中现代 `Number` 行为的 Polyfill（支持二进制和八进制字面量）](https://github.com/zloirock/core-js#ecmascript-number)
- {{jsxref("NaN")}}
- [算术运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators#算术运算符)
- {{jsxref("Math")}}
- {{jsxref("BigInt")}}
