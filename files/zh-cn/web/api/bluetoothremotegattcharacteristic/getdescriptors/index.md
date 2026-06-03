---
title: BluetoothRemoteGATTCharacteristic：getDescriptors() 方法
short-title: getDescriptors()
slug: Web/API/BluetoothRemoteGATTCharacteristic/getDescriptors
l10n:
  sourceCommit: bfc735c04506625c8c60054fe6f2f136bc43bbea
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{SecureContext_Header}}

**`BluetoothRemoteGATTCharacteristic.getDescriptors()`** 方法返回一个 {{jsxref("Promise")}}，其会兑现为包含所有给定描述符 UUID 的 {{domxref("BluetoothRemoteGATTDescriptor")}} 对象的数组（{{jsxref("Array")}}）。

## 语法

```js-nolint
getDescriptors(bluetoothDescriptorUUID)
```

### 参数

无。

## 返回值

{{jsxref("Promise")}}，其会兑现为包含 {{domxref("BluetoothRemoteGATTDescriptor")}} 对象的数组（{{jsxref("Array")}}）。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
