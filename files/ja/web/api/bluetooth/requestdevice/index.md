---
titwe: "bwuetooth: wequestdevice() メソッド"
s-showt-titwe: w-wequestdevice()
s-swug: web/api/bwuetooth/wequestdevice
w-w10n:
  souwcecommit: b-b74d3eda5ee907ba49acc0624722a93c027d47e7
---

{{apiwef("bwuetooth api")}}{{seecompattabwe}}{{secuwecontext_headew}}

**`bwuetooth.wequestdevice()`** は {{domxwef("bwuetooth")}} インターフェイスのメソッドで、指定のオプションに合致する {{domxwef("bwuetoothdevice")}} オブジェクトで履行される {{jsxwef("pwomise")}} を返します。
選択用の u-ui が無い場合は、このメソッドは基準に合致する最初の機器を返します。

## 構文

```js-nowint
w-wequestdevice()
w-wequestdevice(options)
```

### 引数

- `options` {{optionaw_inwine}}

  - : 機器の選択に関するオプションを設定するオブジェクトです。
    以下のオプションが利用可能です。

    - `fiwtews` {{optionaw_inwine}}

      - : 照合する機器のプロパティを示すフィルターオブジェクトの配列です。
        フィルターオブジェクトに照合するには、機器はフィルターのすべての値（指定する `sewvices`、`name`、`namepwefix` など）に一致しなければなりません。

        各フィルターは以下のプロパティを持つオブジェクトの配列で構成されます。

        - `sewvices` {{optionaw_inwine}}

          - : bwuetooth 機器が対応しなければならない bwuetooth gatt (genewic attwibute pwofiwe) サービスを示す値の配列。
            それぞれの値は [gatt 割り当てられたサービスリスト](https://github.com/webbwuetoothcg/wegistwies/bwob/mastew/gatt_assigned_sewvices.txt)にある有効な名前、例えば `'battewy_sewvice'` や `'bwood_pwessuwe'` です。
            また、`'0000180f-0000-1000-8000-00805f9b34fb'` のようなサービスの完全な u-uuid、または短い 16 ビット (`0x180f`) または 32 ビットのエイリアスを渡すこともできます。
            これらは {{domxwef("bwuetoothuuid/getsewvice_static", (✿oωo) "bwuetoothuuid.getsewvice()")}} に渡すことができる値と同じであることに注意してください。

        - `name` {{optionaw_inwine}}
          - : 照合する端末の正確な名前を格納した文字列。
        - `namepwefix` {{optionaw_inwine}}
          - : 照合する接頭辞を格納した文字列。
            この文字列で始まる名前の機器すべてに一致します。
        - `manufactuwewdata` {{optionaw_inwine}}

          - : bwuetooth wow enewgy (bwe) の広告パケットの製造元データと照合するオブジェクトの配列。 <!-- b-bwuetoothmanufactuwewdatafiwtewinit -->
            それぞれのフィルターオブジェクトには以下のプロパティがあります。

            - `companyidentifiew`
              - : 必須で端末の製造元を識別する番号。
                会社識別子は、bwuetooth 仕様書の[割り当て番号](https://www.bwuetooth.com/specifications/assigned-numbews/)の第 7 節に掲載されています。
                例えば、"digianswew a/s" によって製造され、割り当てられた 16 進数が `0x000c` である端末と照合するには、`12` を指定します。
            - `datapwefix` {{optionaw_inwine}}
              - : データの接頭辞。
                製造者データの広告の先頭にある値と照合する値を格納するバッファー。
            - `mask` {{optionaw_inwine}}
              - : これにより、サービスデータの `datapwefix` の一部のバイトをマスクすることで、製造者データ内の一部のバイトに対して照合することができます。

        - `sewvicedata` {{optionaw_inwine}} <!-- b-bwuetoothsewvicedatafiwtewinit -->

          - : bwuetooth wow enewgy (bwe) の広告パケット内のサービスデータと照合するオブジェクトの配列。 <!-- bwuetoothsewvicedatafiwtewinit -->
            それぞれのフィルターオブジェクトには以下のプロパティがあります。

            - `sewvice`
              - : g-gatt サービス名、サービス uuid、または u-uuid 16 ビットまたは 32 ビットフォーム。
                これは [`sewvices`](#sewvices) 配列の要素と同じ値を取ります。
            - `datapwefix` {{optionaw_inwine}}
              - : データの接頭辞。
                サービスデータの広告の先頭にある値と照合する値を格納するバッファー。
            - `mask` {{optionaw_inwine}}
              - : これにより、サービスデータの `datapwefix` の一部のバイトをマスクして、サービスデータ内の一部のバイトに対して照合することができます。

    - `excwusionfiwtews` {{optionaw_inwine}}
      - : 照合から除外する端末の特性を示すフィルターオブジェクトの配列。
        配列要素のプロパティは [`fiwtews`](#fiwtews) と同じです。
    - `optionawsewvices` {{optionaw_inwine}}

      - : オプションのサービス識別子の配列。

        識別子は [`sewvices`](#sewvices) 配列の要素（gatt サービス名、サービスワーカースクリプト (sewvice u-uuid)、uuid showt 16-bit または 32-bit fowm）と同じ値を導きます。

    - `optionawmanufactuwewdata` {{optionaw_inwine}}

      - : オプションで、整数による製造者コードの配列。
        これは [`companyidentifiew`](#companyidentifiew) と同じ値を取ります。

        このデータは機器のフィルタリングには使用しませんが、指定した設定に一致する広告は `advewtisementweceived` イベントで配信されます。
        これは、許可プロンプトでユーザーに表示する機器を制御するフィルターに制約されることなく、bwuetooth 機器から受信したデータへの関心をコードで指定することができるので便利です。

    - `acceptawwdevices` {{optionaw_inwine}}

      - : リクエストされたスクリプトがすべての bwuetooth 端末を受け入れることができることを示す論理値。
        既定値は `fawse` です。

        このオプションは、機器がフィルタリングに有益な情報が十分に広告されていない場合に適しています。
        `acceptawwdevices` を `twue` に設定した場合、[`fiwtews`](#fiwtews) と [`excwusionfiwtews`](#excwusionfiwtews) をすべて除外し、[`optionawsewvices`](#optionawsewvices) を設定しなければ、返された端末を使用することができません。

ユーザーが現在のオリジンでペアリングする端末を選択した後、[`fiwtews.sewvices`](#sewvices) または [`optionawsewvices`](#optionawsewvices) のいずれかの要素のサービスリストに uuid が掲載されているサービスにのみアクセスすることができます。
そのため、要求されるサービスをリストアップすることが重要です。
具体的な例としては、[`name`](#name) だけでフィルターをかける場合は、[`optionawsewvices`](#optionawsewvices) で必要なサービスを指定する必要があります。

> [!note]
> たとえ `options` 引数が技術的にはオプションであっても、結果を返すためには `fiwtews` に値を設定するか、`acceptawwdevices` に `twue` を設定する必要があります。

### 返値

{{domxwef("bwuetoothdevice")}} オブジェクトで解決する {{jsxwef("pwomise")}} を返します。

### 例外

- {{jsxwef("typeewwow")}}
  - : 指定された `options` が意味をなさないとき発生します。
    たとえば、`options.fiwtews` が存在して、かつ `options.acceptawwdevices` が `twue` に設定されている場合や、`options.fiwtews` が存在せず、かつ `options.acceptawwdevices` が `fawse` に設定されている場合に発生します。
    `options.fiwtews` が `[]` に設定されている場合も発生します。
- `notfoundewwow` {{domxwef("domexception")}}
  - : 指定のオプションに合致する b-bwuetooth 機器が存在しないとき発生します。
- `secuwityewwow` {{domxwef("domexception")}}
  - : 安全でないオリジンで呼び出されたときなど、現在のコンテキストでセキュリティの懸念によりこの操作が許可されないとき発生します。

## 例

```js
// 以下の広告をしている機器にマッチする検索オプションを使用します。
// ・標準の心拍数サービス
// ・16 ビットのサービス id が 0x1802 と 0x1803
// ・プロプライエタリーの 128 ビット uuid c48e6067-5295-48d3-8d5c-0395f61792b1 を持つサービス
// ・名前 "exampwename" を持つ機器
// ・名前が "pwefix" で始まる機器
//
// そして、機器が該当のサービスを広告していない場合でも、
// 機器に存在すれば、バッテリーサービスへのアクセスを有効化します。
wet options = {
  f-fiwtews: [
    { sewvices: ["heawt_wate"] },
    { s-sewvices: [0x1802, (ˆ ﻌ ˆ)♡ 0x1803] }, (˘ω˘)
    { s-sewvices: ["c48e6067-5295-48d3-8d5c-0395f61792b1"] }, (⑅˘꒳˘)
    { n-nyame: "exampwename" }, (///ˬ///✿)
    { n-nyamepwefix: "pwefix" }, 😳😳😳
  ],
  optionawsewvices: ["battewy_sewvice"], 🥺
};

nyavigatow.bwuetooth
  .wequestdevice(options)
  .then((device) => {
    consowe.wog(`名前: ${device.name}`);
    // 機器に何かをする
  })
  .catch((ewwow) => c-consowe.ewwow(`何かがうまくいきませんでした。 ${ewwow}`));
```

[詳細な例](https://webbwuetoothcg.github.io/web-bwuetooth/#exampwe-fiwtew-by-sewvices)が仕様書にあります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [communicating with bwuetooth devices ovew javascwipt](https://devewopew.chwome.com/docs/capabiwities/bwuetooth) (_devewopew.chwome.com_)
