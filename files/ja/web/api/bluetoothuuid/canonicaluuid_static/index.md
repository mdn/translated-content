---
title: "BluetoothUUID: canonicalUUID() 静的メソッド"
slug: Web/API/BluetoothUUID/canonicalUUID_static
l10n:
  sourceCommit: a0f6bf6f7d148f368f6965255058df1ed1f43839
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}

{{domxref("BluetoothUUID")}} インターフェイスの静的メソッド **`canonicalUUID()`** は、16 ビットまたは 32 ビットの UUID エイリアスを受け取り、128 ビットの UUID を返します。

## 構文

```js-nolint
BluetoothUUID.canonicalUUID(alias)
```

### 引数

- `alias`
  - : 16 ビットまたは 32 ビットの UUID エイリアスを表す文字列です。

### 返値

128 ビットの UUID です。

## 例

以下の例では、エイリアス `0x110A` で表される UUID が返され、コンソールに出力されます。

```js
let result = BluetoothUUID.canonicalUUID("0x110A");
console.log(result); // "0000110a-0000-1000-8000-00805f9b34fb"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
