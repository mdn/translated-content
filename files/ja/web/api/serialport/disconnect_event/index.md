---
title: "SerialPort: disconnect イベント"
slug: Web/API/SerialPort/disconnect_event
l10n:
  sourceCommit: ba5931fadbcc3b79ffacbb442b58380c827fc0ae
---

{{SecureContext_Header}}{{APIRef("Serial API")}}{{SeeCompatTable}}

{{domxref("SerialPort")}} インターフェイスの **`disconnect`** イベントは、ポートがデバイスから切断された時、発火します。このイベントは、USB で接続されたデバイスなどの取り外し可能なデバイスに関連付いたポートに関してのみ発火します。

このイベントは、このインターフェイスを返した {{domxref("Serial")}} のインスタンスに伝搬します。

## 構文

{{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドでイベント名を用いるか、イベントハンドラープロパティを設定します。

```js
addEventListener("disconnect", (event) => {});

ondisconnect = (event) => {};
```

## 型

汎用の {{domxref("Event")}} です。

## バブリング

このイベントは {{domxref("Serial")}} に伝搬します。`event.target` プロパティはイベントを発生させた {{domxref('SerialPort')}} オブジェクトを指します。

詳しくは、[イベントのバブリングとキャプチャリング](/ja/docs/Learn/JavaScript/Building_blocks/Events#%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E3%81%AE%E3%83%90%E3%83%96%E3%83%AA%E3%83%B3%E3%82%B0%E3%81%A8%E3%82%AD%E3%83%A3%E3%83%97%E3%83%81%E3%83%A3%E3%83%AA%E3%83%B3%E3%82%B0)を参照してください。

## 例

### 特定のポートが切断された時通知する

ここでは、イベントリスナーを特定の {{domxref("SerialPort")}} オブジェクトに設定します。

```js
port.addEventListener("disconnect", (event) => {
  // このポートが利用不可能になったことを通知する
});
```

### 利用不可能になった任意のポートを監視する

`disconnect` イベントは {{domxref("Serial")}} オブジェクトに伝搬し、ここで利用不可能になった任意のポートを監視することができます。

```js
navigator.serial.addEventListener("disconnect", (event) => {
  // ポートが利用不可能になったら通知する
  // 利用不可能になったポートを参照するには、`event.target` を使う
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SerialPort.connect_event", "connect")}} イベント
