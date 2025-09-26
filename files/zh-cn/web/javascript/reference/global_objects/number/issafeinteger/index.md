---
title: Number.isSafeInteger()
slug: Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger
---

{{JSRef}}

**`Number.isSafeInteger()`** 静态方法判断提供的值是否是一个*安全整数*。

{{InteractiveExample("JavaScript Demo: Number.isSafeInteger()")}}

```js interactive-example
function warn(x) {
  if (Number.isSafeInteger(x)) {
    return "Precision safe.";
  }
  return "Precision may be lost!";
}

console.log(warn(Math.pow(2, 53)));
// Expected output: "Precision may be lost!"

console.log(warn(Math.pow(2, 53) - 1));
// Expected output: "Precision safe."
```

## 语法

```js-nolint
Number.isSafeInteger(testValue)
```

### 参数

- `testValue`
  - : 要测试是否为安全整数的值。

### 返回值

如果给定的值是一个安全整数，则返回布尔值 `true`。否则返回 `false`。

## 描述

安全整数由 -(2<sup>53</sup> - 1) 到 2<sup>53</sup> - 1 的所有整数组成，包含（±9,007,199,254,740,991）。安全整数是符合以下条件的整数：

- 可以精确地表示为 IEEE-754 双精度数，并且
- 其 IEEE-754 表示形式不能是舍入任何其他整数以适应 IEEE-754 表示形式的结果。

例如，2<sup>53</sup> - 1 是一个安全整数：它可以精确地表示，并且在任何 IEEE-754 舍入模式下都没有其他整数舍入结果为该整数。相比之下，2<sup>53</sup> *不是*一个安全整数：它可以在 IEEE-754 中精确地表示，但整数 2<sup>53</sup> + 1 不能直接在 IEEE-754 中表示，而是采用就近舍入和向零舍入时，会舍入到 2<sup>53</sup>。

处理大约 9 千万亿左右的值时，需要使用[任意精度算术库](https://zh.wikipedia.org/wiki/高精度计算)来实现完全精确性。有关浮点数表示的更多信息，请参阅[程序员需要了解的浮点数算术知识](https://floating-point-gui.de/)。

对于更大的整数，请考虑使用 {{jsxref("BigInt")}} 类型。

## 示例

### 使用 isSafeInteger()

```js
Number.isSafeInteger(3); // true
Number.isSafeInteger(2 ** 53); // false
Number.isSafeInteger(2 ** 53 - 1); // true
Number.isSafeInteger(NaN); // false
Number.isSafeInteger(Infinity); // false
Number.isSafeInteger("3"); // false
Number.isSafeInteger(3.1); // false
Number.isSafeInteger(3.0); // true
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Number.isSafeInteger` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-number)
- {{jsxref("Number")}}
- {{jsxref("Number.MIN_SAFE_INTEGER")}}
- {{jsxref("Number.MAX_SAFE_INTEGER")}}
- {{jsxref("BigInt")}}
