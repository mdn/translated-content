---
title: "BluetoothRemoteGATTCharacteristic: readValue() メソッド"
slug: Web/API/BluetoothRemoteGATTCharacteristic/readValue
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}

**`BluetoothRemoteGATTCharacteristic.readValue()`** メソッドは、利用可能で対応していれば、`value` プロパティの複製が格納された {{JSxRef("DataView")}} で解決する {{JSxRef("Promise")}} を返します。そうでない場合は、エラーを投げます。

## 構文

```js-nolint
readValue()
```

### 引数

なし

### 返値

{{jsxref("DataView")}} で解決する {{jsxref("Promise")}} です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

{{APIRef("Web Bluetooth")}}
