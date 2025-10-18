---
title: BluetoothRemoteGATTCharacteristic：writeValue() 方法
short-title: writeValue()
slug: Web/API/BluetoothRemoteGATTCharacteristic/writeValue
l10n:
  sourceCommit: 5fd5cc8885286bfa5bae8b3e9970e1eab26e941d
---

{{APIRef("Bluetooth API")}}{{Deprecated_header}}{{SecureContext_Header}}

请改用 {{DOMxRef("BluetoothRemoteGATTCharacteristic.writeValueWithResponse()")}} 和 {{DOMxRef("BluetoothRemoteGATTCharacteristic.writeValueWithoutResponse()")}}。

**`BluetoothRemoteGATTCharacteristic.writeValue()`** 方法将一个 {{domxref("BluetoothRemoteGATTCharacteristic")}} 对象的 `value` 属性设置为给定的 {{JSxRef("ArrayBuffer")}} 中包含的字节，[使用可选响应写入特性值](https://webbluetoothcg.github.io/web-bluetooth/#writecharacteristicvalue)，并返回 {{JSxRef("Promise")}}。

## 语法

```js-nolint
writeValue(value)
```

### 参数

- `value`
  - : {{jsxref("ArrayBuffer")}}、{{jsxref("TypedArray")}} 或 {{jsxref("DataView")}}。

## 返回值

{{jsxref("Promise")}}。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
