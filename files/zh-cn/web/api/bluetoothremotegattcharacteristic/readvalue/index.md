---
title: BluetoothRemoteGATTCharacteristic：readValue() 方法
short-title: readValue()
slug: Web/API/BluetoothRemoteGATTCharacteristic/readValue
l10n:
  sourceCommit: 5fd5cc8885286bfa5bae8b3e9970e1eab26e941d
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{SecureContext_Header}}

**`BluetoothRemoteGATTCharacteristic.readValue()`** 方法返回一个 {{jsxref("Promise")}}，其会兑现为一个包含 `value` 属性的副本（如果可用且受支持）的 {{jsxref("DataView")}}。否则它将抛出一个错误。

## 语法

```js-nolint
readValue()
```

### 参数

无。

## 返回值

会兑现为 {{jsxref("DataView")}} 的 {{jsxref("Promise")}}。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
