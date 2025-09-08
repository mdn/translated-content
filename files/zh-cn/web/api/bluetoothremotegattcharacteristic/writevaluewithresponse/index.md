---
title: BluetoothRemoteGATTCharacteristic：writeValueWithResponse() 方法
short-title: writeValueWithResponse()
slug: Web/API/BluetoothRemoteGATTCharacteristic/writeValueWithResponse
l10n:
  sourceCommit: 0eeaa04378b34bce70e618ee20434e1193cdec17
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{SecureContext_Header}}

**`BluetoothRemoteGATTCharacteristic.writeValueWithResponse()`** 方法将 {{domxref("BluetoothRemoteGATTCharacteristic")}} 对象的 `value` 属性设置为给定的 {{JSxRef("ArrayBuffer")}} 中包含的字节，[写入需要响应的特性值](https://webbluetoothcg.github.io/web-bluetooth/#writecharacteristicvalue)，并返回兑现为设置结果的 {{JSxRef("Promise")}}。

## 语法

```js-nolint
writeValueWithResponse(value)
```

### 参数

- `value`
  - : {{jsxref("ArrayBuffer")}}。

## 返回值

{{jsxref("Promise")}}。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
