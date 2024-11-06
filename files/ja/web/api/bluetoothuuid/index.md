---
title: BluetoothUUID
slug: Web/API/BluetoothUUID
l10n:
  sourceCommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

{{APIRef("Bluetooth API")}}

{{domxref('Web Bluetooth API')}} の **`BluetoothUUID`** インターフェイスは、Bluetooth SIG が管理している[レジストリー](https://www.bluetooth.com/specifications/assigned-numbers/)から Universally Unique Identifier (UUID) の値を名前で検索する方法を提供します。

## 説明

UUID 文字列は、`00001818-0000-1000-8000-00805f9b34fb` などの 128 ビットの UUID です。
Bluetooth レジストリーには、16 ビットおよび 32 ビットのエイリアスと名前に加え、UUID で識別されるディスクリプター、サービス、キャラクタリスティックのリストも格納されています。

`BluetoothUUID` インターフェイスは、これらの 128 ビットの UUID を取得するメソッドを提供します。

## 静的メソッド

- [`BluetoothUUID.canonicalUUID()`](/ja/docs/Web/API/BluetoothUUID/canonicalUUID_static) {{Experimental_Inline}}
  - : 16 ビットまたは 32 ビットの UUID エイリアスを受け取り、128 ビットの UUID を返します。
- [`BluetoothUUID.getCharacteristic()`](/ja/docs/Web/API/BluetoothUUID/getCharacteristic_static) {{Experimental_Inline}}
  - : 名前、もしくは 16 ビットまたは 32 ビットの UUID エイリアスを受け取り、登録されたキャラクタリスティックを表す 128 ビットの UUID を返します。
- [`BluetoothUUID.getDescriptor()`](/ja/docs/Web/API/BluetoothUUID/getDescriptor_static) {{Experimental_Inline}}
  - : 名前、もしくは 16 ビットまたは 32 ビットの UUID エイリアスを受け取り、登録されたディスクリプターを表す 128 ビットの UUID を返します。
- [`BluetoothUUID.getService()`](/ja/docs/Web/API/BluetoothUUID/getService_static) {{Experimental_Inline}}
  - : 名前、もしくは 16 ビットまたは 32 ビットの UUID エイリアスを受け取り、登録されたサービスを表す 128 ビットの UUID を返します。

## 例

この例では、`device_information` という名前のサービスを表す UUID が返され、コンソールに出力されます。

```js
let result = BluetoothUUID.getService("device_information");
console.log(result); // "0000180a-0000-1000-8000-00805f9b34fb"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
