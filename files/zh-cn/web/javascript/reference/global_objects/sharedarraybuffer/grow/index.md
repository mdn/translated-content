---
title: SharedArrayBuffer.prototype.grow()
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/grow
l10n:
  sourceCommit: 509fde687ed349da8017a546f9cf094163f24844
---

{{JSRef}}

{{jsxref("SharedArrayBuffer")}} 实例的 **`grow()`** 方法将 `SharedArrayBuffer` 增大到以字节为单位的指定大小。

## 语法

```js-nolint
grow(newLength)
```

### 参数

- `newLength`
  - : 新的长度，以字节为单位，`SharedArrayBuffer` 调整后的大小。

### 返回值

无（{{jsxref("undefined")}}）。

### 异常

- {{jsxref("TypeError")}}
  - : 如果当前的 `SharedArrayBuffer` 不可增大，则抛出该异常。
- {{jsxref("RangeError")}}
  - : 如果 `newLength` 大于当前 `SharedArrayBuffer` 的 {{jsxref("SharedArrayBuffer/maxByteLength", "maxByteLength")}} 或小于 {{jsxref("SharedArrayBuffer/byteLength", "byteLength")}}，则抛出该异常。

## 描述

`grow()` 方将 `SharedArrayBuffer` 增大到 `newLength` 参数指定的大小，前提是 `SharedArrayBuffer` 是[可增大的](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/growable)，并且新的大小小于等于当前 `SharedArrayBuffer` 的 {{jsxref("SharedArrayBuffer/maxByteLength", "maxByteLength")}}。新字节被初始化为 0。

## 示例

### 使用 grow()

在这个示例中，我们创建一个 8 字节缓冲区，该缓冲区可调整大小到的最大长度是 16 字节，然后检查其 {{jsxref("SharedArrayBuffer/growable", "growable")}} 属性，如果 `growable` 返回 `true`，则将其增大：

```js
const buffer = new SharedArrayBuffer(8, { maxByteLength: 16 });

if (buffer.growable) {
  console.log("SAB 是可增大的！");
  buffer.grow(12);
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("SharedArrayBuffer")}}
- {{jsxref("SharedArrayBuffer.prototype.growable")}}
- {{jsxref("SharedArrayBuffer.prototype.maxByteLength")}}
