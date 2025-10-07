---
title: BluetoothRemoteGATTCharacteristic：writeValueWithoutResponse() 方法
short-title: writeValueWithoutResponse()
slug: Web/API/BluetoothRemoteGATTCharacteristic/writeValueWithoutResponse
l10n:
  sourceCommit: 5fd5cc8885286bfa5bae8b3e9970e1eab26e941d
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{SecureContext_Header}}

**`BluetoothRemoteGATTCharacteristic.writeValueWithoutResponse()`** 方法将 {{domxref("BluetoothRemoteGATTCharacteristic")}} 对象的 `value` 属性设置为给定的 {{jsxref("ArrayBuffer")}}、{{jsxref("TypedArray")}} 或 {{jsxref("DataView")}} 中包含的字节，[写入特性值而不返回响应](https://webbluetoothcg.github.io/web-bluetooth/#writecharacteristicvalue)，并返回表示结果的 {{JSxRef("Promise")}}。

## 语法

```js-nolint
writeValueWithoutResponse(value)
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
