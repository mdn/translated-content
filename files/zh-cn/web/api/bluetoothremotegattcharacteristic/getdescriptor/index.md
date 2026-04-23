---
title: BluetoothRemoteGATTCharacteristic：getDescriptor() 方法
short-title: getDescriptor()
slug: Web/API/BluetoothRemoteGATTCharacteristic/getDescriptor
l10n:
  sourceCommit: 0eeaa04378b34bce70e618ee20434e1193cdec17
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{SecureContext_Header}}

**`BluetoothRemoteGATTCharacteristic.getDescriptor()`** 方法返回一个将会兑现为第一个具有给定描述符 UUID 的 {{domxref("BluetoothRemoteGATTDescriptor")}} 的 {{jsxref("Promise")}}。

## 语法

```js-nolint
getDescriptor(bluetoothDescriptorUUID)
```

### 参数

无。

## 返回值

{{jsxref("Promise")}}，将会兑现为第一个满足要求的 {{domxref("BluetoothRemoteGATTDescriptor")}}。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
