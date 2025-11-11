---
title: "Bluetooth: requestDevice() メソッド"
short-title: requestDevice()
slug: Web/API/Bluetooth/requestDevice
l10n:
  sourceCommit: b74d3eda5ee907ba49acc0624722a93c027d47e7
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{securecontext_header}}

**`Bluetooth.requestDevice()`** は {{domxref("Bluetooth")}} インターフェイスのメソッドで、指定のオプションに合致する {{domxref("BluetoothDevice")}} オブジェクトで履行される {{jsxref("Promise")}} を返します。
選択用の UI が無い場合は、このメソッドは基準に合致する最初の機器を返します。

## 構文

```js-nolint
requestDevice()
requestDevice(options)
```

### 引数

- `options` {{optional_inline}}
  - : 機器の選択に関するオプションを設定するオブジェクトです。
    以下のオプションが利用可能です。
    - `filters` {{optional_inline}}
      - : 照合する機器のプロパティを示すフィルターオブジェクトの配列です。
        フィルターオブジェクトに照合するには、機器はフィルターのすべての値（指定する `services`、`name`、`namePrefix` など）に一致しなければなりません。

        各フィルターは以下のプロパティを持つオブジェクトの配列で構成されます。
        - `services` {{optional_inline}}
          - : Bluetooth 機器が対応しなければならない Bluetooth GATT (Generic Attribute Profile) サービスを示す値の配列。
            それぞれの値は [GATT 割り当てられたサービスリスト](https://github.com/WebBluetoothCG/registries/blob/master/gatt_assigned_services.txt)にある有効な名前、例えば `'battery_service'` や `'blood_pressure'` です。
            また、`'0000180F-0000-1000-8000-00805f9b34fb'` のようなサービスの完全な UUID、または短い 16 ビット (`0x180F`) または 32 ビットのエイリアスを渡すこともできます。
            これらは {{domxref("BluetoothUUID/getService_static", "BluetoothUUID.getService()")}} に渡すことができる値と同じであることに注意してください。

        - `name` {{optional_inline}}
          - : 照合する端末の正確な名前を格納した文字列。
        - `namePrefix` {{optional_inline}}
          - : 照合する接頭辞を格納した文字列。
            この文字列で始まる名前の機器すべてに一致します。
        - `manufacturerData` {{optional_inline}}
          - : Bluetooth Low Energy (BLE) の広告パケットの製造元データと照合するオブジェクトの配列。 <!-- BluetoothManufacturerDataFilterInit -->
            それぞれのフィルターオブジェクトには以下のプロパティがあります。
            - `companyIdentifier`
              - : 必須で端末の製造元を識別する番号。
                会社識別子は、Bluetooth 仕様書の[割り当て番号](https://www.bluetooth.com/specifications/assigned-numbers/)の第 7 節に掲載されています。
                例えば、"Digianswer A/S" によって製造され、割り当てられた 16 進数が `0x000C` である端末と照合するには、`12` を指定します。
            - `dataPrefix` {{optional_inline}}
              - : データの接頭辞。
                製造者データの広告の先頭にある値と照合する値を格納するバッファー。
            - `mask` {{optional_inline}}
              - : これにより、サービスデータの `dataPrefix` の一部のバイトをマスクすることで、製造者データ内の一部のバイトに対して照合することができます。

        - `serviceData` {{optional_inline}} <!-- BluetoothServiceDataFilterInit -->
          - : Bluetooth Low Energy (BLE) の広告パケット内のサービスデータと照合するオブジェクトの配列。 <!-- BluetoothServiceDataFilterInit -->
            それぞれのフィルターオブジェクトには以下のプロパティがあります。
            - `service`
              - : GATT サービス名、サービス UUID、または UUID 16 ビットまたは 32 ビットフォーム。
                これは [`services`](#services) 配列の要素と同じ値を取ります。
            - `dataPrefix` {{optional_inline}}
              - : データの接頭辞。
                サービスデータの広告の先頭にある値と照合する値を格納するバッファー。
            - `mask` {{optional_inline}}
              - : これにより、サービスデータの `dataPrefix` の一部のバイトをマスクして、サービスデータ内の一部のバイトに対して照合することができます。

    - `exclusionFilters` {{optional_inline}}
      - : 照合から除外する端末の特性を示すフィルターオブジェクトの配列。
        配列要素のプロパティは [`filters`](#filters) と同じです。
    - `optionalServices` {{optional_inline}}
      - : オプションのサービス識別子の配列。

        識別子は [`services`](#services) 配列の要素（GATT サービス名、サービスワーカースクリプト (service UUID)、UUID short 16-bit または 32-bit form）と同じ値を導きます。

    - `optionalManufacturerData` {{optional_inline}}
      - : オプションで、整数による製造者コードの配列。
        これは [`companyIdentifier`](#companyidentifier) と同じ値を取ります。

        このデータは機器のフィルタリングには使用しませんが、指定した設定に一致する広告は `advertisementreceived` イベントで配信されます。
        これは、許可プロンプトでユーザーに表示する機器を制御するフィルターに制約されることなく、Bluetooth 機器から受信したデータへの関心をコードで指定することができるので便利です。

    - `acceptAllDevices` {{optional_inline}}
      - : リクエストされたスクリプトがすべての Bluetooth 端末を受け入れることができることを示す論理値。
        既定値は `false` です。

        このオプションは、機器がフィルタリングに有益な情報が十分に広告されていない場合に適しています。
        `acceptAllDevices` を `true` に設定した場合、[`filters`](#filters) と [`exclusionFilters`](#exclusionfilters) をすべて除外し、[`optionalServices`](#optionalservices) を設定しなければ、返された端末を使用することができません。

ユーザーが現在のオリジンでペアリングする端末を選択した後、[`filters.services`](#services) または [`optionalServices`](#optionalservices) のいずれかの要素のサービスリストに UUID が掲載されているサービスにのみアクセスすることができます。
そのため、要求されるサービスをリストアップすることが重要です。
具体的な例としては、[`name`](#name) だけでフィルターをかける場合は、[`optionalServices`](#optionalservices) で必要なサービスを指定する必要があります。

> [!NOTE]
> たとえ `options` 引数が技術的にはオプションであっても、結果を返すためには `filters` に値を設定するか、`acceptAllDevices` に `true` を設定する必要があります。

### 返値

{{domxref("BluetoothDevice")}} オブジェクトで解決する {{jsxref("Promise")}} を返します。

### 例外

- {{jsxref("TypeError")}}
  - : 指定された `options` が意味をなさないとき発生します。
    たとえば、`options.filters` が存在して、かつ `options.acceptAllDevices` が `true` に設定されている場合や、`options.filters` が存在せず、かつ `options.acceptAllDevices` が `false` に設定されている場合に発生します。
    `options.filters` が `[]` に設定されている場合も発生します。
- `NotFoundError` {{domxref("DOMException")}}
  - : 指定のオプションに合致する Bluetooth 機器が存在しないとき発生します。
- `SecurityError` {{domxref("DOMException")}}
  - : 安全でないオリジンで呼び出されたときなど、現在のコンテキストでセキュリティの懸念によりこの操作が許可されないとき発生します。

## 例

```js
// 以下の広告をしている機器にマッチする検索オプションを使用します。
// ・標準の心拍数サービス
// ・16 ビットのサービス ID が 0x1802 と 0x1803
// ・プロプライエタリーの 128 ビット UUID c48e6067-5295-48d3-8d5c-0395f61792b1 を持つサービス
// ・名前 "ExampleName" を持つ機器
// ・名前が "Prefix" で始まる機器
//
// そして、機器が該当のサービスを広告していない場合でも、
// 機器に存在すれば、バッテリーサービスへのアクセスを有効化します。
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
    // 機器に何かをする
  })
  .catch((error) => console.error(`何かがうまくいきませんでした。 ${error}`));
```

[詳細な例](https://webbluetoothcg.github.io/web-bluetooth/#example-filter-by-services)が仕様書にあります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Communicating with Bluetooth devices over JavaScript](https://developer.chrome.com/docs/capabilities/bluetooth) (_developer.chrome.com_)
