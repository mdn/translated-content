---
title: Number.MIN_VALUE
slug: Web/JavaScript/Reference/Global_Objects/Number/MIN_VALUE
---

{{JSRef}}

**`Number.MIN_VALUE`** 静态数据属性表示在 JavaScript 中可表示的最小正数值。

{{InteractiveExample("JavaScript Demo: Number.MIN_VALUE")}}

```js interactive-example
function divide(x, y) {
  if (x / y < Number.MIN_VALUE) {
    return "Process as 0";
  }
  return x / y;
}

console.log(divide(5e-324, 1));
// Expected output: 5e-324

console.log(divide(5e-324, 2));
// Expected output: "Process as 0"
```

## 值

2<sup>-1074</sup>，或 `5E-324`。

{{js_property_attributes(0, 0, 0)}}

## 描述

`Number.MIN_VALUE` 是能够在浮点精度范围内表示的最小正数（不是最小负数），换句话说，它是最接近 0 的数。ECMAScript 规范并没有定义引擎实现必须支持的精确值，而是规定：_“必须是实现实际上可以表示的最小非零正值”_。这是因为小的 IEEE-754 浮点数是[非正规数](https://en.wikipedia.org/wiki/Subnormal_number)，但是实现并不要求支持这种表示方式，这种情况下 `Number.MIN_VALUE` 可能会更大。

在实践中，在主流引擎（如 Chrome、Edge、Node.js 使用的 V8 引擎，Firefox 使用的 SpiderMonkey 引擎，以及 Safari 使用的 JavaScriptCore 引擎）中，`Number.MIN_VALUE` 的精确值为 2<sup>-1074</sup>，即 `5E-324`。

由于 `MIN_VALUE` 是 `Number` 对象的静态属性，你应该始终将其用作 `Number.MIN_VALUE`，而不是作为一个数字值的属性。

## 示例

### 使用 MIN_VALUE

下面的代码对两个数值进行除法运算。如果结果大于或等于 `MIN_VALUE`，则调用函数 `func1`；否则，调用函数 `func2`。

```js
if (num1 / num2 >= Number.MIN_VALUE) {
  func1();
} else {
  func2();
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Number.MAX_VALUE")}}
