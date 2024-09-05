---
title: Blob：bytes() 方法
short-title: bytes()
l10n:
  sourceCommit: de2ef1e9950eebbacdd55f072dfe03014d113bbd
---

{{APIRef("File API")}}{{AvailableInWorkers}}

{{domxref("Blob")}} 接口的 **`bytes()`** 方法返回一个 {{jsxref("Promise")}}，该 {{jsxref("Promise")}} 兑现为一个包含 blob 内容的字节数组的 {{jsxref("Uint8Array")}}。

## 语法

```js-nolint
bytes()
```

### 参数

无。

### 返回值

一个兑现包含 blob 数据的 {{jsxref("Uint8Array")}} 对象的 {{jsxref("Promise")}}。

### 异常

例如，如果用于获取 Blob 数据的读取器抛出异常，则该方法将拒绝返回的 {{jsxref("Promise")}}。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
