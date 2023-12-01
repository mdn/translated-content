---
title: "BluetoothRemoteGATTDescriptor: writeValue() メソッド"
slug: Web/API/BluetoothRemoteGATTDescriptor/writeValue
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}

**`BluetoothRemoteGATTDescriptor.writeValue()`** メソッドは、`value` プロパティを {{JSxRef("ArrayBuffer")}} に格納されたバイト列に設定し、{{JSxRef("Promise")}} を返します。

## 構文

```js-nolint
writeValue(array)
```

### 引数

- `array`
  - : `value` をこの配列に格納されたバイト列に設定します。

### 返値

{{jsxref("Promise")}} です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
