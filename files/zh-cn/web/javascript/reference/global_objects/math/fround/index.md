---
title: Math.fround()
slug: Web/JavaScript/Reference/Global_Objects/Math/fround
---

{{JSRef("Global_Objects", "Math")}}

## 概述

**`Math.fround()`** 可以将任意的数字转换为离它最近的[单精度浮点数](https://en.wikipedia.org/wiki/Single-precision_floating-point_format)形式的数字。

## 语法

```js-nolint
Math.fround(doubleFloat)
```

### 参数

- `doubleFloat`
  - : 一个 {{jsxref("Number")}}。若参数为非数字类型，则会被转投成数字。无法转换时，设置成{{jsxref("NaN")}}。

### 返回值

指定数字最接近的 [32 位单精度](https://en.wikipedia.org/wiki/Single-precision_floating-point_format)浮点数表示。

## 描述

JavaScript 内部使用 64 位的双浮点数字，支持很高的精度。但是，有时你需要用 32 位浮点数字，比如你从一个{{jsxref("Float32Array")}} 读取值时。这时会产生混乱：检查一个 64 位浮点数和一个 32 位浮点数是否相等会失败，即使二个数字几乎一模一样。

要解决这个问题，可以使用 `Math.fround()` 来将 64 位的浮点数转换为 32 位浮点数。在内部，JavaScript 继续把这个数字作为 64 位浮点数看待，仅仅是在尾数部分的第 23 位执行了“舍入到偶数”的操作，并将后续的尾数位设置为 0。如果数字超出 32 位浮点数的范围，则返回 {{jsxref("Infinity")}} 或 `-Infinity`。

因为`fround()` 是`Math` 的静态方法，你必须通过 `Math.fround()` 来使用，而不是调用你创建的`Math` 对象的一个实例方法（`Math`不是一个构造函数）。

## 示例

### 使用 Math.fround()

数字 1.5 可以在二进制数字系统中精确表示，32 位和 64 位的值相同：

```js
Math.fround(1.5); // 1.5
Math.fround(1.5) === 1.5; // true
```

但是，数字 1.337 却无法在二进制数字系统中精确表示，所以 32 位和 64 位的值是不同的：

```js
Math.fround(1.337); // 1.3370000123977661
Math.fround(1.337) === 1.337; // false
```

2^150 超出 32 位浮点，所以返回`Infinity`：

```js
2 ** 150; // 1.42724769270596e+45
Math.fround(2 ** 150); // Infinity
```

如果参数无法转换成数字，或者为 {{jsxref("NaN")}}（`NaN`），`Math.fround()` 会返回 `NaN`：

```js
Math.fround("abc"); // NaN
Math.fround(NaN); // NaN
```

在某些精度不高的场合下，可以通过将二个浮点数转换成 32 位浮点数进行比较，以解决 64 位浮点数比较结果不正确的问题：

```js
0.1 + 0.2 == 0.3; //false

function equal(v1, v2) {
  return Math.fround(v1) == Math.fround(v2);
}

equal(0.1 + 0.2, 0.3); //true
```

## Polyfill

下面的函数可以模拟这个 API，前提是浏览器必须已经支持 {{jsxref("Float32Array")}}：

```js
Math.fround =
  Math.fround ||
  (function (array) {
    return function (x) {
      return (array[0] = x), array[0];
    };
  })(new Float32Array(1));
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Math.round()")}}
