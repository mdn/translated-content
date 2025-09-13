---
title: BluetoothRemoteGATTServer：getPrimaryService() 方法
short-title: getPrimaryService()
slug: Web/API/BluetoothRemoteGATTServer/getPrimaryService
l10n:
  sourceCommit: bfc735c04506625c8c60054fe6f2f136bc43bbea
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{SecureContext_Header}}

**`BluetoothRemoteGATTServer.getPrimaryService()`** 方法返回一个 Promise，其将兑现为由蓝牙设备提供的、指定蓝牙服务 UUID 的主 {{domxref("BluetoothRemoteGATTService")}}。

## 语法

```js-nolint
getPrimaryService(bluetoothServiceUUID)
```

### 参数

- `bluetoothServiceUUID`
  - : 指定设备的蓝牙服务通用唯一标识符，可以是 128 位 UUID、16 位或 32 位 UUID 别名，也可以是 [GATT 已分配服务](https://github.com/WebBluetoothCG/registries/blob/master/gatt_assigned_services.txt)键列表中的字符串。

## 返回值

{{jsxref("Promise")}}，且该 promise 将会兑现为 {{domxref("BluetoothRemoteGATTService")}} 对象。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
