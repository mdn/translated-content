---
title: BluetoothRemoteGATTServer：getPrimaryServices() 方法
short-title: getPrimaryServices()
slug: Web/API/BluetoothRemoteGATTServer/getPrimaryServices
l10n:
  sourceCommit: bfc735c04506625c8c60054fe6f2f136bc43bbea
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{SecureContext_Header}}

**BluetoothRemoteGATTServer.getPrimaryServices()** 方法返回一个 {{jsxref("Promise")}}，其会兑现为由蓝牙设备为指定 `BluetoothServiceUUID` 提供的主要 {{domxref("BluetoothRemoteGATTService")}} 对象列表。

## 语法

```js-nolint
getPrimaryServices(bluetoothServiceUUID)
```

### 参数

- `bluetoothServiceUUID`
  - : 指定设备的蓝牙服务通用唯一标识符。

## 返回值

{{jsxref("Promise")}}，且该 promise 将会兑现为 {{domxref("BluetoothRemoteGATTService")}} 对象的列表。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
