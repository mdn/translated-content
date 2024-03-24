---
title: "BluetoothRemoteGATTServer: getPrimaryService() メソッド"
slug: Web/API/BluetoothRemoteGATTServer/getPrimaryService
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}

**`BluetoothRemoteGATTServer.getPrimaryService()`** メソッドは、Bluetooth デバイスが提供している指定の Bluetooth サービス UUID に対応するプライマリー {{DOMxRef("BluetoothRemoteGATTService")}} で解決するプロミスを返します。

## 構文

```js-nolint
getPrimaryService(bluetoothServiceUUID)
```

### 引数

- `bluetoothServiceUUID`
  - : 指定のデバイス用の Bluetooth サービス universally unique identifier です。128 ビットの UUID か、16 ビットまたは 32 ビットの UUID エイリアスか、[GATT で割り当てられるサービス](https://github.com/WebBluetoothCG/registries/blob/master/gatt_assigned_services.txt)のキーのリストにある文字列です。

### 返値

{{domxref("BluetoothRemoteGATTService")}} オブジェクトで解決する {{jsxref("Promise")}} です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

{{APIRef("Web Bluetooth")}}
