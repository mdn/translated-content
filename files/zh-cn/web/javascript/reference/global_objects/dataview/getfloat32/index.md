---
title: DataView.prototype.getFloat32()
short-title: getFloat32()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getFloat32
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{jsxref("DataView")}} 实例的 **`getFloat32()`** 方法从该 `DataView` 中指定的字节偏移位置开始读取 4 个字节，并将其解释为一个 32 位浮点数。该方法没有对齐限制；多字节值可以从任意边界内的偏移位置读取。

{{InteractiveExample("JavaScript 演示：DataView.prototype.getFloat32()")}}

```js interactive-example
// 创建一个以字节为单位指定大小的 ArrayBuffer
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer);
view.setFloat32(1, Math.PI);

console.log(view.getFloat32(1));
// 期望输出：3.1415927410125732
```

## 语法

```js-nolint
getFloat32(byteOffset)
getFloat32(byteOffset, littleEndian)
```

### 参数

- `byteOffset`
  - : 表示从视图起始位置开始读取数据的偏移量（以字节为单位）。
- `littleEndian` {{optional_inline}}
  - : 指示数据的存储格式是[小端序还是大端序](/zh-CN/docs/Glossary/Endianness)。如果为 `false` 或 `undefined`，则按大端序读取值。

### 返回值

一个取值范围为 `-3.4e38` 到 `3.4e38` 的浮点数。

### 异常

- {{jsxref("RangeError")}}
  - : 当设置的 `byteOffset` 导致读取超出视图末尾时，会抛出此异常。

## 示例

### 使用 getFloat32()

```js
const { buffer } = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
const dataview = new DataView(buffer);
console.log(dataview.getFloat32(1)); // 2.387939260590663e-38
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [JavaScript 类型化数组](/zh-CN/docs/Web/JavaScript/Guide/Typed_arrays)指南
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("Float32Array")}}
