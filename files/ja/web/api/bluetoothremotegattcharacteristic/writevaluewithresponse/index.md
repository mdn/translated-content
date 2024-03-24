---
title: "BluetoothRemoteGATTCharacteristic: writeValueWithResponse() メソッド"
slug: Web/API/BluetoothRemoteGATTCharacteristic/writeValueWithResponse
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}

**`BluetoothRemoteGATTCharacteristic.writeValueWithResponse()`** メソッドは、{{domxref("BluetoothRemoteGATTCharacteristic")}} オブジェクトの `value` プロパティを渡された {{JSxRef("ArrayBuffer")}} に格納されたバイト列に設定し、[`WriteCharacteristicValue`(_this_=`this`, _value=value_, _response_=`"required"`)](https://webbluetoothcg.github.io/web-bluetooth/#writecharacteristicvalue) を呼び出し、結果の {{JSxRef("Promise")}} を返します。

## 構文

```js-nolint
writeValueWithResponse(value)
```

### 引数

- `value`
  - : {{jsxref("ArrayBuffer")}} です。

### 返値

{{jsxref("Promise")}} です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

{{APIRef("Web Bluetooth")}}
