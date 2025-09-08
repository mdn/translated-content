---
title: BluetoothRemoteGATTCharacteristic：readValue() 方法
short-title: readValue()
slug: Web/API/BluetoothRemoteGATTCharacteristic/readValue
l10n:
  sourceCommit: bfc735c04506625c8c60054fe6f2f136bc43bbea
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{SecureContext_Header}}

**`BluetoothRemoteGATTCharacteristic.readValue()`** 方法返回一个{{jsxref("Promise")}}，且其会兑现为一个包含 `value` 属性的副本（如果可用且受支持）的 {{jsxref("DataView")}}。否则该 promise 会以错误拒绝。

## 语法

```js-nolint
readValue()
```

### 参数

无。

## 返回值

{{jsxref("Promise")}}，且该 promise 将会在成功时兑现为 {{jsxref("DataView")}}。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
