---
title: Serial
slug: Web/API/Serial
l10n:
  sourceCommit: 06105598d11001e9f12d80ad05087f1df3c0634b
---

{{securecontext_header}}{{APIRef("Serial API")}}{{SeeCompatTable}}

{{domxref("Web_Serial_API", "Web Serial API")}} の `Serial` インターフェイスは、ウェブページがシリアルポートを検出し、接続するためのプロパティやメソッドを提供します。

{{InheritanceDiagram}}

## インスタンスメソッド

- {{domxref("Serial.requestPort()")}} {{Experimental_Inline}}

  - : ユーザーが選んだデバイスを表す {{domxref("SerialPort")}} のインスタンスで解決するか、デバイスが選択されなかった場合は拒否される {{jsxref("Promise")}} を返します。

    このメソッドは、ユーザーによる有効化に伴って呼ぶ必要があります。

- {{domxref("Serial.getPorts()")}} {{Experimental_Inline}}
  - : 接続されており、かつオリジンにアクセス許可があるシリアルポートを表す {{domxref("SerialPort")}} の配列で解決する {{jsxref("Promise")}} を返します。

## イベント

{{domxref("SerialPort")}} からのイベントバブリングにより、`Serial` では以下のイベントが利用可能です。

- `SerialPort` {{domxref("SerialPort.connect_event", "connect")}} イベント
  - : デバイスにポートが接続された時に発火するイベントです。
- `SerialPort` {{domxref("SerialPort.disconnect_event", "disconnect")}} イベント
  - : デバイスからポートが切断された時に発火するイベントです。

## 例

この例では、利用可能なポートを調べ、ユーザーが他のポートへのアクセスを許可できるようにする方法を示します。

`load` イベントの受信時に {{domxref("SerialPort.connect_event", "connect")}} および {{domxref("SerialPort.disconnect_event", "disconnect")}} イベントにリスナーを追加することで、デバイスが接続された時や切断された時にサイトが反応できるようにします。{{domxref("Serial.getPorts()","getPorts()")}} メソッドを呼ぶことで、接続されたポートが既にサイトからのアクセスが許可されたものかどうかを調べることができます。

接続されたポートの中にサイトからアクセスできるものが無い場合、ユーザーが有効化するのを待つ必要があります。この例では、このためにボタンの {{domxref("Element.click_event", "click")}} イベントハンドラーを用います。{{domxref("Serial.requestPort()","requestPort()")}} に USB ベンダー ID を入れたフィルターを渡し、ユーザーに提示するデバイスのリストを特定の生産者によって作られた USB デバイスのみに絞り込んでいます。

```js
navigator.serial.addEventListener("connect", (e) => {
  // `e.target` に接続する、すなわち利用可能なポートのリストに加えます。
});

navigator.serial.addEventListener("disconnect", (e) => {
  // `e.target` を利用可能なポートのリストから外します。
});

navigator.serial.getPorts().then((ports) => {
  // ページの読み込み時、`ports` を用いて利用可能なポートのリストを初期化します。
});

button.addEventListener("click", () => {
  const usbVendorId = 0xabcd;
  navigator.serial
    .requestPort({ filters: [{ usbVendorId }] })
    .then((port) => {
      // `port` に接続する、すなわち利用可能なポートのリストに加えます。
    })
    .catch((e) => {
      // ユーザーがポートを選択しませんでした。
    });
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
