---
title: "BluetoothRemoteGATTService: getCharacteristics() メソッド"
slug: Web/API/BluetoothRemoteGATTService/getCharacteristics
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}

**`BluetoothGATTService.getCharacteristics()`** メソッドは、指定の universally unique identifier (UUID) に対応する {{domxref("BluetoothRemoteGATTCharacteristic")}} のインスタンスのリストで解決する {{jsxref("Promise")}} を返します。

## 構文

```js-nolint
getCharacteristics(characteristics)
```

### 引数

- `characteristics`
  - : キャラクタリスティックの UUID です。たとえば、Heart Rate Measurement characteristic は `'00002a37-0000-1000-8000-00805f9b34fb'` です。

### 返値

{{domxref("BluetoothRemoteGATTCharacteristic")}} のインスタンスの {{jsxref("Array")}} で解決する {{jsxref("Promise")}} を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

{{APIRef("Web Bluetooth")}}
