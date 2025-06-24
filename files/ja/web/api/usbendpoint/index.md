---
title: USBEndpoint
slug: Web/API/USBEndpoint
l10n:
  sourceCommit: 3ca86db64959ed9dc6c8021dc3eb89e82a6628c7
---

{{APIRef("WebUSB API")}}{{securecontext_header}}{{SeeCompatTable}}

[WebUSB API](/ja/docs/Web/API/WebUSB_API) の `USBEndpoint` インターフェイスは、USB デバイスが提供するエンドポイントの情報を提供します。エンドポイントは、デバイスに送信またはデバイスから受信する単方向のデータストリームを表します。

## コンストラクター

- {{domxref("USBEndpoint.USBEndpoint", "USBEndpoint()")}} {{Experimental_Inline}}
  - : 渡された {{domxref('USBAlternateInterface')}} の指定のエンドポイント番号と転送方向のエンドポイントの情報が格納される新しい `USBEndpoint` オブジェクトを生成します。

## インスタンスプロパティ

- {{domxref("USBEndpoint.endpointNumber")}} {{Experimental_Inline}}
  - : このエンドポイントの「エンドポイント番号」を返します。これは、このエンドポイントを定義しているエンドポイントディスクリプターの `bEndpointAddress` フィールドから取り出した 1 から 15 までの値です。この値は、`USBDevice` のメソッドを呼ぶ際にエンドポイントを特定するのに用います。
- {{domxref("USBEndpoint.direction")}} {{Experimental_Inline}}
  - : このエンドポイントがデータを転送する方向を返します。以下のいずれかです。
    - `"in"` — データはデバイスからホストに転送されます。
    - `"out"` — データはホストからデバイスに転送されます。

- {{domxref("USBEndpoint.type")}} {{Experimental_Inline}}
  - : エンドポイントの種類を返します。以下のいずれかです。
    - `"bulk"` — 大きいペイロード向けの信頼性があるデータ転送を提供します。バルクエンドポイントで送信されるデータは、転送されるかエラーを発生させることが保証されますが、他のデータトラフィックに割り込まれる可能性があります。
    - `"interrupt"` — 小さいペイロード向けの信頼性があるデータ転送を提供します。インタラプトエンドポイントで送信されるデータは、転送されるかエラーを発生させることが保証され、さらに転送用に専用のバス時間が与えられます。
    - `"isochronous"` — 定期的に転送する必要があるペイロード向けの信頼性がないデータ転送を提供します。専用のバス時間が与えられますが、締切を過ぎるとデータは破棄されます。

- {{domxref("USBEndpoint.packetSize")}} {{Experimental_Inline}}
  - : このエンドポイントで送信されるデータが分割されるパケットのサイズを返します。

## 例

開発者はデバイスのエンドポイントの完全な配置を事前に知っていることもありますが、実行時に検出しなければならない場合もあります。たとえば、USB シリアルデバイスはバルク入力と出力のエンドポイントを提供しなければなりませんが、それらのエンドポイント番号はデバイスが提供する他のインターフェイスによって変わるでしょう。

このコードは、まず USB CDC インターフェイスクラスを実装しているインターフェイスを探し、続いて種類と方向を用いて候補となるエンドポイントを特定することにより、正しいエンドポイントを特定します。

```js
let inEndpoint = undefined;
let outEndpoint = undefined;

for (const { alternates } of device.configuration.interfaces) {
  // オルタネイトインターフェイスを複数持たないデバイスのみに対応します。
  const alternate = alternates[0];

  // USB CDC クラスを実装しているインターフェイスを特定します。
  const USB_CDC_CLASS = 10;
  if (alternate.interfaceClass !== USB_CDC_CLASS) {
    continue;
  }

  for (const endpoint of alternate.endpoints) {
    // バルク転送のエンドポイントを特定します。
    if (endpoint.type !== "bulk") {
      continue;
    }

    if (endpoint.direction === "in") {
      inEndpoint = endpoint.endpointNumber;
    } else if (endpoint.direction === "out") {
      outEndpoint = endpoint.endpointNumber;
    }
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
