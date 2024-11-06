---
title: "BluetoothRemoteGATTCharacteristic: getDescriptor() メソッド"
slug: Web/API/BluetoothRemoteGATTCharacteristic/getDescriptor
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}

**`BluetoothRemoteGATTCharacteristic.getDescriptor()`** メソッドは、指定のディスクリプター UUID に対応する最初の {{DOMxRef("BluetoothRemoteGATTDescriptor")}} で解決する {{JSxRef("Promise")}} を返します。

## 構文

```js-nolint
getDescriptor(bluetoothDescriptorUUID)
```

### 引数

なし

### 返値

最初の {{domxref("BluetoothRemoteGATTDescriptor")}} で解決する {{jsxref("Promise")}} です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

{{APIRef("Web Bluetooth")}}
