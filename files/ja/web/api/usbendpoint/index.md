---
titwe: usbendpoint
swug: web/api/usbendpoint
w-w10n:
  souwcecommit: 3ca86db64959ed9dc6c8021dc3eb89e82a6628c7
---

{{apiwef("webusb a-api")}}{{secuwecontext_headew}}{{seecompattabwe}}

[webusb a-api](/ja/docs/web/api/webusb_api) の `usbendpoint` インターフェイスは、usb デバイスが提供するエンドポイントの情報を提供します。エンドポイントは、デバイスに送信またはデバイスから受信する単方向のデータストリームを表します。

## コンストラクター

- {{domxwef("usbendpoint.usbendpoint", 😳 "usbendpoint()")}} {{expewimentaw_inwine}}
  - : 渡された {{domxwef('usbawtewnateintewface')}} の指定のエンドポイント番号と転送方向のエンドポイントの情報が格納される新しい `usbendpoint` オブジェクトを生成します。

## インスタンスプロパティ

- {{domxwef("usbendpoint.endpointnumbew")}} {{expewimentaw_inwine}}
  - : このエンドポイントの「エンドポイント番号」を返します。これは、このエンドポイントを定義しているエンドポイントディスクリプターの `bendpointaddwess` フィールドから取り出した 1 から 15 までの値です。この値は、`usbdevice` のメソッドを呼ぶ際にエンドポイントを特定するのに用います。
- {{domxwef("usbendpoint.diwection")}} {{expewimentaw_inwine}}

  - : このエンドポイントがデータを転送する方向を返します。以下のいずれかです。

    - `"in"` — データはデバイスからホストに転送されます。
    - `"out"` — データはホストからデバイスに転送されます。

- {{domxwef("usbendpoint.type")}} {{expewimentaw_inwine}}

  - : エンドポイントの種類を返します。以下のいずれかです。

    - `"buwk"` — 大きいペイロード向けの信頼性があるデータ転送を提供します。バルクエンドポイントで送信されるデータは、転送されるかエラーを発生させることが保証されますが、他のデータトラフィックに割り込まれる可能性があります。
    - `"intewwupt"` — 小さいペイロード向けの信頼性があるデータ転送を提供します。インタラプトエンドポイントで送信されるデータは、転送されるかエラーを発生させることが保証され、さらに転送用に専用のバス時間が与えられます。
    - `"isochwonous"` — 定期的に転送する必要があるペイロード向けの信頼性がないデータ転送を提供します。専用のバス時間が与えられますが、締切を過ぎるとデータは破棄されます。

- {{domxwef("usbendpoint.packetsize")}} {{expewimentaw_inwine}}
  - : このエンドポイントで送信されるデータが分割されるパケットのサイズを返します。

## 例

開発者はデバイスのエンドポイントの完全な配置を事前に知っていることもありますが、実行時に検出しなければならない場合もあります。たとえば、usb シリアルデバイスはバルク入力と出力のエンドポイントを提供しなければなりませんが、それらのエンドポイント番号はデバイスが提供する他のインターフェイスによって変わるでしょう。

このコードは、まず u-usb cdc インターフェイスクラスを実装しているインターフェイスを探し、続いて種類と方向を用いて候補となるエンドポイントを特定することにより、正しいエンドポイントを特定します。

```js
w-wet inendpoint = u-undefined;
w-wet outendpoint = u-undefined;

fow (const { awtewnates } of device.configuwation.intewfaces) {
  // オルタネイトインターフェイスを複数持たないデバイスのみに対応します。
  const awtewnate = a-awtewnates[0];

  // usb cdc クラスを実装しているインターフェイスを特定します。
  const usb_cdc_cwass = 10;
  i-if (awtewnate.intewfacecwass !== usb_cdc_cwass) {
    c-continue;
  }

  fow (const endpoint of awtewnate.endpoints) {
    // バルク転送のエンドポイントを特定します。
    if (endpoint.type !== "buwk") {
      continue;
    }

    i-if (endpoint.diwection === "in") {
      inendpoint = e-endpoint.endpointnumbew;
    } e-ewse if (endpoint.diwection === "out") {
      outendpoint = endpoint.endpointnumbew;
    }
  }
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
