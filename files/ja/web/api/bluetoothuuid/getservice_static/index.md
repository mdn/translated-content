---
title: "BluetoothUUID: getService() 静的メソッド"
slug: Web/API/BluetoothUUID/getService_static
l10n:
  sourceCommit: a0f6bf6f7d148f368f6965255058df1ed1f43839
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}

{{domxref("BluetoothUUID")}} インターフェイスの静的メソッド **`getService()`** は、名前、もしくは 16 ビットまたは 32 ビットの UUID エイリアスを受け取り、登録されたサービスを表す 128 ビットの UUID を返します。

## 構文

```js-nolint
BluetoothUUID.getService(name)
```

### 引数

- `name`
  - : サービスの名前を表す文字列です。

### 返値

128 ビットの UUID です。

### 例外

- {{jsxref("TypeError")}}
  - : `name` がレジストリーで見つからないとき投げられます。

## 例

以下の例では、`device_information` という名前のサービスを表す UUID が返され、コンソールに出力されます。

```js
let result = BluetoothUUID.getService("device_information");
console.log(result); // "0000180a-0000-1000-8000-00805f9b34fb"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
