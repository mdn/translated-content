---
title: "BluetoothRemoteGATTCharacteristic: getDescriptors() メソッド"
slug: Web/API/BluetoothRemoteGATTCharacteristic/getDescriptors
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}

**`BluetoothRemoteGATTCharacteristic.getDescriptors()`** メソッドは、指定のディスクリプター UUID に対応するすべての {{DOMxRef("BluetoothRemoteGATTDescriptor")}} オブジェクトの {{JSxRef("Array")}} で解決する {{JSxRef("Promise")}} を返します。

## 構文

```js-nolint
getDescriptors(bluetoothDescriptorUUID)
```

### 引数

なし

### 返値

{{domxref("BluetoothRemoteGATTDescriptor")}} オブジェクトの {{jsxref("Array")}} で解決する {{jsxref("Promise")}} です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

{{APIRef("Web Bluetooth")}}
