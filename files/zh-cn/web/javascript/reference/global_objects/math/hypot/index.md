---
title: Math.hypot()
slug: Web/JavaScript/Reference/Global_Objects/Math/hypot
---

**`Math.hypot()`** 函数返回所有参数的平方和的平方根，即：

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚑𝚢𝚙𝚘𝚝</mo><mo stretchy="false">(</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><msub><mi>v</mi><mn>2</mn></msub><mo>,</mo><mo>…</mo><mo>,</mo><msub><mi>v</mi><mi>n</mi></msub><mo stretchy="false">)</mo></mstyle><mo>=</mo><msqrt><mrow><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msubsup><mi>v</mi><mi>i</mi><mn>2</mn></msubsup></mrow></msqrt><mo>=</mo><msqrt><mrow><msubsup><mi>v</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>v</mi><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><mo>…</mo><mo>+</mo><msubsup><mi>v</mi><mi>n</mi><mn>2</mn></msubsup></mrow></msqrt></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.hypot}(v_1, v_2, \dots, v_n)} = \sqrt{\sum\_{i=1}^n v_i^2} = \sqrt{v_1^2 + v_2^2 + \dots + v_n^2}</annotation></semantics></math>

{{InteractiveExample("JavaScript Demo: Math.hypot()")}}

```js interactive-example
console.log(Math.hypot(3, 4));
// Expected output: 5

console.log(Math.hypot(5, 12));
// Expected output: 13

console.log(Math.hypot(3, 4, 5));
// Expected output: 7.0710678118654755

console.log(Math.hypot(-5));
// Expected output: 5
```

## 语法

```plain
Math.hypot([value1[,value2, ...]])
```

### 参数

- `value1, value2, ...`
  - : 任意个数字。

### 返回值

将所提供的参数求平方和后开平方根。如果有参数不能转换为数字，则返回 {{jsxref("NaN")}}。

## 描述

计算直角三角形的斜边，或复数的幅值时可以使用函数 `Math.sqrt(v1*v1 + v2*v2)` ，其中 v1 和 v2 是三角形的两个直角边或复数的实部和虚部。如果想计算更多维度，那么只需要在后面添加更多的数的平方就可以了，比如 `Math.sqrt(v1*v1 + v2*v2 + v3*v3 + v4*v4)`。

本函数比 `Math.sqrt()` 更简单也更快，你只需要调用 `Math.hypot(v1, v2)` 或 `Math.hypot(v1, v2, v3, v4, ...)`。

它还避免了幅值过大的问题。JS 中最大的双精度浮点数是 `Number.MAX_VALUE = 1.797...e+308`。如果你的数字比约 1e154 大，计算其平方值会返回 Infinity，使你的结果出现问题。比如，`Math.sqrt(1e200*1e200 + 1e200*1e200) = Infinity`。如果你改用 `hypot()` 函数，你可以得到正确的答案：`Math.hypot(1e200, 1e200) = 1.4142...e+200`。在数字非常小的时候同样如此，比如 `Math.sqrt(1e-200*1e-200 + 1e-200*1e-200) = 0`，但 `Math.hypot(1e-200, 1e-200) = 1.4142...e-200` 则是正确的结果。

由于 `hypot` 是 `Math` 的静态方法，所以应该以 `Math.hypot()`的方式使用，而不是作为你创建的 `Math` 对象的属性（`Math` 不是一个构造函数）。

如果不传入任何参数，则返回 +0。

如果参数列表中有至少一个参数不能被转换为数字，则返回 {{jsxref("NaN")}}。

如果只传入一个参数，`Math.hypot(x)` 等同于 `Math.abs(x)`。

## 示例

### Using `Math.hypot()`

```js
Math.hypot(3, 4); // 5
Math.hypot(3, 4, 5); // 7.0710678118654755
Math.hypot(); // 0
Math.hypot(NaN); // NaN
Math.hypot(3, 4, "foo"); // NaN, +'foo' => NaN
Math.hypot(3, 4, "5"); // 7.0710678118654755, +'5' => 5
Math.hypot(-3); // 3, the same as Math.abs(-3)
```

## 向下兼容

此函数可以使用如下代码模拟：

```js
if (!Math.hypot)
  Math.hypot = function () {
    var y = 0,
      i = arguments.length;
    while (i--) y += arguments[i] * arguments[i];
    return Math.sqrt(y);
  };
```

另一种避免结果溢出的实现：

```js
if (!Math.hypot)
  Math.hypot = function (x, y) {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=896264#c28
    var max = 0;
    var s = 0;
    for (var i = 0; i < arguments.length; i += 1) {
      var arg = Math.abs(Number(arguments[i]));
      if (arg > max) {
        s *= (max / arg) * (max / arg);
        max = arg;
      }
      s += arg === 0 && max === 0 ? 0 : (arg / max) * (arg / max);
    }
    return max === 1 / 0 ? 1 / 0 : max * Math.sqrt(s);
  };
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Math.abs()")}}
- {{jsxref("Math.pow()")}}
- {{jsxref("Math.sqrt()")}}
