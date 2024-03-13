---
title: "BluetoothUUID: getCharacteristic() 静的メソッド"
slug: Web/API/BluetoothUUID/getCharacteristic_static
l10n:
  sourceCommit: a0f6bf6f7d148f368f6965255058df1ed1f43839
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}

{{domxref("BluetoothUUID")}} インターフェイスの静的メソッド **`getCharacteristic()`** は、名前、もしくは 16 ビットまたは 32 ビットの UUID エイリアスを受け取り、登録されたキャラクタリスティックを表す 128 ビットの UUID を返します。

## 構文

```js-nolint
BluetoothUUID.getCharacteristic(name)
```

### 引数

- `name`
  - : キャラクタリスティックの名前を表す文字列です。

### 返値

128 ビットの UUID です。

### 例外

- {{jsxref("TypeError")}}
  - : `name` がレジストリーで見つからないとき投げられます。

## 例

以下の例では、`apparent_wind_direction` という名前のキャラクタリスティックを表す UUID が返され、コンソールに出力されます。

```js
let result = BluetoothUUID.getCharacteristic("apparent_wind_direction");
console.log(result); // "00002a73-0000-1000-8000-00805f9b34fb"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
