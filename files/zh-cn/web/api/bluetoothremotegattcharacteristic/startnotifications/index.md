---
title: BluetoothRemoteGATTCharacteristic：startNotifications() 方法
short-title: startNotifications()
slug: Web/API/BluetoothRemoteGATTCharacteristic/startNotifications
l10n:
  sourceCommit: bfc735c04506625c8c60054fe6f2f136bc43bbea
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{SecureContext_Header}}

**`BluetoothRemoteGATTCharacteristic.startNotifications()`** 方法在存在活动通知时返回一个 {{jsxref("Promise")}}，其会兑现为 BluetoothRemoteGATTCharacteristic 实例。

## 语法

```js-nolint
startNotifications()
```

### 参数

无。

## 返回值

{{jsxref("Promise")}}，且该 promise 将会兑现为 BluetoothRemoteGATTCharacteristic 实例。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
