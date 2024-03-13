---
title: Web Serial API
slug: Web/API/Web_Serial_API
l10n:
  sourceCommit: f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{DefaultAPISidebar("Web Serial API")}}{{SecureContext_Header}}{{SeeCompatTable}}

**Web Serial API** は、ウェブサイトがシリアルデバイスからデータを受信したり、シリアルデバイスにデータを送信したりする方法を提供します。対象は、シリアルポートで接続されたデバイスのことも、シリアルポートとして振る舞う USB や Bluetooth のデバイスのこともあります。

## 概念と使用方法

Web Serial API は、ウェブサイトがユーザーのコンピューターに接続された周辺機器とやり取りをできるようにする API セットの一つです。{{domxref("WebUSB API")}} でアクセス可能な USB デバイスや、{{domxref("WebHID API")}} でアクセス可能な入力デバイスではなく、オペレーティングシステムによりシリアル通信の API でアクセスすることが要求されるデバイスへの接続を可能にします。

シリアルデバイスの例として、3D プリンターや、[BBC micro:bit board](https://microbit.org/) などのマイクロコントローラーがあります。

## インターフェイス

- {{domxref("Serial")}}
  - : ウェブページがシリアルポートを検出し、接続するためのプロパティやメソッドを提供します。
- {{domxref("SerialPort")}}
  - : ホストデバイスのシリアルポートへのアクセスを提供します。

## 例

以下の例で、Web Serial API が提供する機能のうちいくつかを示します。

### 利用可能なポートを調べる

この例では、利用可能なポートを調べ、ユーザーが他のポートへのアクセスを許可できるようにする方法を示します。

`connect` および `disconnect` イベントは、デバイスが接続された時や切断された時にサイトが反応できるようにします。{{domxref("Serial.getPorts()","getPorts()")}} メソッドを呼ぶことで、接続されたポートが既にサイトからのアクセスが許可されたものかどうかを調べることができます。

接続されたポートの中にサイトからアクセスできるものが無い場合、ユーザーが有効化するのを待つ必要があります。この例では、このためにボタンの {{domxref("Element.click_event", "click")}} イベントハンドラーを用います。{{domxref("Serial.requestPort()","requestPort()")}} に USB ベンダー ID を入れたフィルターを渡し、ユーザーに提示するデバイスのリストを特定の製造元によって作られた USB デバイスのみに絞り込んでいます。

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

### ポートからデータを受信する

この例は、ポートからデータを受信する方法を示します。外側のループは致命的なエラーが発生して {{domxref("SerialPort.readable")}} が `null` になるまで新しい `reader` を生成し続けることで、致命的でないエラーを処理します。

```js
while (port.readable) {
  const reader = port.readable.getReader();
  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) {
        // |reader| がキャンセルされました。
        break;
      }
      // |value| について何かをする
    }
  } catch (error) {
    // |error| を処理する
  } finally {
    reader.releaseLock();
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [シリアルポートとの読み書き](https://web.dev/serial/)
- [Getting started with the Web Serial API](https://codelabs.developers.google.com/codelabs/web-serial#0)
