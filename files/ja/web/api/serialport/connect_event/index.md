---
title: "SerialPort: connect イベント"
slug: Web/API/SerialPort/connect_event
l10n:
  sourceCommit: ba5931fadbcc3b79ffacbb442b58380c827fc0ae
---

{{APIRef("Serial API")}}{{SecureContext_Header}}{{SeeCompatTable}}

{{domxref("SerialPort")}} インターフェイスの **`connect`** イベントは、ポートがデバイスに接続された時、発火します。このイベントは、USB で接続されたデバイスなどの取り外し可能なデバイスに関連付いたポートに関してのみ発火します。

このイベントは、このインターフェイスを返した {{domxref("Serial")}} のインスタンスに伝搬します。

## 構文

{{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドでイベント名を用いるか、イベントハンドラープロパティを設定します。

```js
addEventListener("connect", (event) => {});

onconnect = (event) => {};
```

## 型

汎用の {{domxref("Event")}} です。

## バブリング

このイベントは {{domxref("Serial")}} に伝搬します。`event.target` プロパティはイベントを発生させた {{domxref('SerialPort')}} オブジェクトを指します。

詳しくは、[イベントのバブリングとキャプチャリング](/ja/docs/Learn/JavaScript/Building_blocks/Events#%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E3%81%AE%E3%83%90%E3%83%96%E3%83%AA%E3%83%B3%E3%82%B0%E3%81%A8%E3%82%AD%E3%83%A3%E3%83%97%E3%83%81%E3%83%A3%E3%83%AA%E3%83%B3%E3%82%B0)を参照してください。

## 例

### 特定のポートが接続された時通知する

{{domxref("Serial.requestPort()")}} メソッドは、ユーザーが選択した {{domxref("SerialPort")}} で解決する {{jsxref("Promise")}} を返します。

```js
// ユーザーにシリアルポートを選んでもらう
const port = await navigator.serial.requestPort();

port.addEventListener("connect", (event) => {
  // 選択されたポートが接続されたら通知する
});
```

### 新しく接続された任意のポートを監視する

`connect` イベントは {{domxref("Serial")}} オブジェクトに伝搬し、ここで新しく接続された任意のポートを監視することができます。

```js
navigator.serial.addEventListener("connect", (event) => {
  // 新しいポートが利用可能になったら通知する
  // 新しいポートを参照するには、`event.target` を使う
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SerialPort.disconnect_event", "disconnect")}} イベント
