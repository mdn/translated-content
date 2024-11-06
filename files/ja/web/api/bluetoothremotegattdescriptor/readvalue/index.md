---
title: "BluetoothRemoteGATTDescriptor: readValue() メソッド"
slug: Web/API/BluetoothRemoteGATTDescriptor/readValue
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}

**`BluetoothRemoteGATTDescriptor.readValue()`** メソッドは、利用可能で対応していれば `value` プロパティの複製が格納された {{JSxRef("ArrayBuffer")}} で解決する {{JSxRef("Promise")}} を返します。そうでない場合、エラーを投げます。

## 構文

```js-nolint
readValue()
```

### 引数

なし

### 返値

{{jsxref("ArrayBuffer")}} で解決する {{jsxref("Promise")}} です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
