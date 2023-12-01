---
title: "BluetoothUUID: getDescriptor() 静的メソッド"
slug: Web/API/BluetoothUUID/getDescriptor_static
l10n:
  sourceCommit: a0f6bf6f7d148f368f6965255058df1ed1f43839
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}

{{domxref("BluetoothUUID")}} インターフェイスの静的メソッド **`getDescriptor()`** は、名前、もしくは 16 ビットまたは 32 ビットの UUID エイリアスを受け取り、登録されたディスクリプターを表す 128 ビットの UUID を返します。

## 構文

```js-nolint
BluetoothUUID.getDescriptor(name)
```

### 引数

- `name`
  - : ディスクリプターの名前を表す文字列です。

### 返値

128 ビットの UUID です。

### 例外

- {{jsxref("TypeError")}}
  - : `name` がレジストリーで見つからないとき投げられます。

## 例

以下の例では、`time_trigger_setting` という名前のディスクリプターを表す UUID が返され、コンソールに出力されます。

```js
let result = BluetoothUUID.getDescriptor("time_trigger_setting");
console.log(result); // "0000290e-0000-1000-8000-00805f9b34fb"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
