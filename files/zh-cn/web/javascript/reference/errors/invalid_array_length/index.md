---
title: "RangeError: invalid array length"
slug: Web/JavaScript/Reference/Errors/Invalid_array_length
---

{{jsSidebar("Errors")}}

## 错误信息

```plain
RangeError: invalid array length (Firefox)
RangeError: Invalid array length (Chrome)
RangeError: Invalid array buffer length (Chrome)
```

## 错误类型

{{jsxref("RangeError")}}

## 什么地方出错了？

无效的数组错误长度通常会在以下情形中出现：

- 当创建一个长度为负数或者长度大于等于 2^32 的{{jsxref("Array")}} 或者 {{jsxref("ArrayBuffer")}} 时。
- 当设置 {{jsxref("Array.length")}} 属性为负数或者长度大于等于 2^32 时。

为什么 Array（数组）和 ArrayBuffer（数组缓冲区）的长度会受到限制？因为 Array 和 ArrayBuffer 的 length（长度）属性被定义为一个 32 位无符号整形（unsigned 32-bit integer）的值，所以它只能存储 0 - 2^32 - 1 之间的数。

当你使用构造函数来创建一个数组的时候，你可能想使用字面值的形式，第一个参数会被解释为数组的长度。

或者说，你想要在设置数组之前确定它的长度，或把它作为一个构造函数的参数。

## 示例

### 错误的示例

```js example-bad
new Array(Math.pow(2, 40));
new Array(-1);
new ArrayBuffer(Math.pow(2, 32)); // 32 位系统
new ArrayBuffer(-1);

const a = [];
a.length = a.length - 1; // 将 length 属性的值设置为 -1

const b = new Array(Math.pow(2, 32) - 1);
b.length = b.length + 1; // 将 length 属性的值设置为 2^32
b.length = 2.5; // 将 length 属性设置为浮点数

const c = new Array(2.5); // 传入浮点数
```

### 正确的示例

```js example-good
[Math.pow(2, 40)]; // [ 1099511627776 ]
[-1]; // [ -1 ]
new ArrayBuffer(Math.pow(2, 32) - 1);
new ArrayBuffer(Math.pow(2, 33)); // 64-bit systems after Firefox 89
new ArrayBuffer(0);

const a = [];
a.length = Math.max(0, a.length - 1);

const b = new Array(Math.pow(2, 32) - 1);
b.length = Math.min(0xffffffff, b.length + 1);
// 0xffffffff 0xffffffff 是 2^32 - 1 的十六进制表示方式
// 它也可以被写作 (-1 >>> 0)

b.length = 3;

const c = new Array(3);
```

## 参见

- {{jsxref("Array")}}
- {{jsxref("Array.length")}}
- {{jsxref("ArrayBuffer")}}
