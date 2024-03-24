---
title: "BluetoothRemoteGATTServer: getPrimaryServices() メソッド"
slug: Web/API/BluetoothRemoteGATTServer/getPrimaryServices
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}

**BluetoothRemoteGATTServer.getPrimaryServices()** メソッドは、Bluetooth デバイスが提供している指定の `BluetoothServiceUUID` に対応するプライマリー {{DOMxRef("BluetoothRemoteGATTService")}} オブジェクトのリストで解決するプロミスを返します。

## 構文

```js-nolint
getPrimaryServices(bluetoothServiceUUID)
```

### 引数

- `bluetoothServiceUUID`
  - : 指定のデバイス用の Bluetooth サービス universally unique identifier です。

### 返値

{{domxref("BluetoothRemoteGATTService")}} オブジェクトのリストで解決する {{jsxref("Promise")}} です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

{{APIRef("Web Bluetooth")}}
