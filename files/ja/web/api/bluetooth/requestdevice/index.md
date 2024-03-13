---
title: "Bluetooth: requestDevice() メソッド"
slug: Web/API/Bluetooth/requestDevice
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef("Bluetooth API")}} {{securecontext_header}}{{SeeCompatTable}}

{{domxref("Bluetooth")}} インターフェイスの **`Bluetooth.requestDevice()`** メソッドは、指定のオプションに合致する {{domxref("BluetoothDevice")}} オブジェクトで解決する {{jsxref("Promise")}} を返します。選択用の UI が無い場合は、このメソッドは基準に合致する最初のデバイスを返します。

## 構文

```js-nolint
requestDevice()
requestDevice(options)
```

### 引数

- `options` {{optional_inline}}
  - : デバイスの要求に関するオプションを設定するオブジェクトです。以下のオプションが利用可能です。
    - `filters[]`
      - `BluetoothScanFilters` の配列です。このフィルタは、`BluetoothServiceUUID` の配列、`name` パラメーター、`namePrefix` パラメーターからなります。
    - `optionalServices[]`
      - : `BluetoothServiceUUID` の配列です。
    - `acceptAllDevices`
      - : 要求を出しているスクリプトがすべての Bluetooth デバイスを受け入れるかを表す {{jsxref("boolean")}} 値です。デフォルトは `false` です。

### 返値

{{domxref("BluetoothDevice")}} オブジェクトで解決する {{jsxref("Promise")}} を返します。

### 例外

- {{jsxref("TypeError")}}
  - : 指定された `options` が意味をなさないとき投げられます。
    たとえば、`options.filters` が存在して、かつ `options.acceptAllDevices` が `true` に設定されている場合や、`options.filters` が存在せず、かつ `options.acceptAllDevices` が `false` に設定されている場合に投げられます。
    `options.filters` が `[]` に設定されている場合も投げられます。
- `NotFoundError` {{domxref("DOMException")}}
  - : 指定のオプションに合致する Bluetooth デバイスが存在しないとき投げられます。
- `SecurityError` {{domxref("DOMException")}}
  - : 安全でないオリジンで呼び出されたときなど、現在のコンテキストでセキュリティの懸念によりこの操作が許可されないとき投げられます。

## 例

```js
// 以下のアドバタイズをしているデバイスにマッチする検索オプションを使用します。
// ・標準の心拍数サービス
// ・16 ビットのサービス ID が 0x1802 と 0x1803
// ・プロプライエタリーの 128 ビット UUID c48e6067-5295-48d3-8d5c-0395f61792b1 を持つサービス
// ・名前 "ExampleName" を持つデバイス
// ・名前が "Prefix" で始まるデバイス
//
// そして、デバイスが該当のサービスをアドバタイズしていない場合でも、
// デバイスに存在すれば、バッテリーサービスへのアクセスを有効化します。
let options = {
  filters: [
    { services: ["heart_rate"] },
    { services: [0x1802, 0x1803] },
    { services: ["c48e6067-5295-48d3-8d5c-0395f61792b1"] },
    { name: "ExampleName" },
    { namePrefix: "Prefix" },
  ],
  optionalServices: ["battery_service"],
};

navigator.bluetooth
  .requestDevice(options)
  .then((device) => {
    console.log(`名前: ${device.name}`);
    // デバイスに何かをする
  })
  .catch((error) => console.error(`何かがうまくいきませんでした。 ${error}`));
```

[詳細な例](https://webbluetoothcg.github.io/web-bluetooth/#example-filter-by-services)が仕様書にあります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
