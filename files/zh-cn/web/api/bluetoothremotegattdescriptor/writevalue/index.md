---
title: BluetoothRemoteGATTDescriptor：writeValue() 方法
short-title: writeValue()
slug: Web/API/BluetoothRemoteGATTDescriptor/writeValue
l10n:
  sourceCommit: 5fd5cc8885286bfa5bae8b3e9970e1eab26e941d
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{SecureContext_Header}}

**`BluetoothRemoteGATTDescriptor.writeValue()`** 方法将 value 属性设置为包含在 {{jsxref("ArrayBuffer")}}、{{jsxref("TypedArray")}} 或 {{jsxref("DataView")}} 中的字节，并返回 {{jsxref("Promise")}}。

## 语法

```js-nolint
writeValue(array)
```

### 参数

- `array`
  - : 使用缓冲区中包含的字节设置值。

## 返回值

{{jsxref("Promise")}}。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
