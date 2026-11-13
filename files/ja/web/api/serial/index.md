---
title: Serial
slug: Web/API/Serial
l10n:
  sourceCommit: 6fe7a18b80e55d9d25dcc16dfb010eec09460bb8
---

{{APIRef("Web Serial API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

`Serial` は[ウェブシリアル API](/ja/docs/Web/API/Web_Serial_API) のインターフェイスは、ウェブページがシリアルポートを検出し、接続するためのプロパティやメソッドを提供します。

{{InheritanceDiagram}}

## インスタンスメソッド

- {{domxref("Serial.requestPort()")}}
  - : ユーザーが選んだデバイスを表す {{domxref("SerialPort")}} のインスタンスで解決するプロミス ({{jsxref("Promise")}}) を返します。
    このメソッドは、[一時的な有効化](/ja/docs/Glossary/Transient_activation)に伴って呼び出す必要があります。

- {{domxref("Serial.getPorts()")}}
  - : 接続されており、かつそのオリジンにアクセス許可があるシリアルポートを表す {{domxref("SerialPort")}} の配列で解決するプロミス ({{jsxref("Promise")}}) を返します。

## イベント

`Serial` では {{domxref("SerialPort")}} からのイベントバブリングにより、以下のイベントが利用可能です。

- `SerialPort` {{domxref("SerialPort.connect_event", "connect")}} イベント
  - : デバイスにポートが接続された時に発生するイベントです。
- `SerialPort` {{domxref("SerialPort.disconnect_event", "disconnect")}} イベント
  - : デバイスからポートが切断された時に発生するイベントです。

## 例

### 基本的な例

この例では、利用可能なポートを調べ、ユーザーが他のポートへのアクセスを許可できるようにする方法を示します。

`load` イベントの受信時に {{domxref("SerialPort.connect_event", "connect")}} および {{domxref("SerialPort.disconnect_event", "disconnect")}} イベントにリスナーを追加することで、デバイスが接続された時や切断された時にサイトが反応できるようにします。{{domxref("Serial.getPorts()","getPorts()")}} メソッドを呼ぶことで、接続されたポートが既にサイトからのアクセスが許可されたものかどうかを調べることができます。

接続されたポートの中にサイトからアクセスできるものが無い場合、ユーザーが有効化するのを待つ必要があります。
この例では、このためにボタンの {{domxref("Element.click_event", "click")}} イベントハンドラーを用います。
{{domxref("Serial.requestPort()","requestPort()")}} に USB ベンダー ID を入れたフィルターを渡し、ユーザーに提示するデバイスのリストを特定の生産者によって作られた USB デバイスのみに絞り込んでいます。

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
