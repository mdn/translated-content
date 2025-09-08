---
title: BluetoothRemoteGATTDescriptor：writeValue() 方法
short-title: writeValue()
slug: Web/API/BluetoothRemoteGATTDescriptor/writeValue
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{SecureContext_Header}}

**`BluetoothRemoteGATTDescriptor.writeValue()`** 方法将 value 属性设置为包含在 {{jsxref("ArrayBuffer")}} 中的字节，并返回一个 {{jsxref("Promise")}}。

## 语法

```js-nolint
writeValue(array)
```

### 参数

- `array`
  - : 使用数组中包含的字节设置值。

## 返回值

{{jsxref("Promise")}}。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
