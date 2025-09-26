---
title: USBConnectionEvent
slug: Web/API/USBConnectionEvent
l10n:
  sourceCommit: 579788ba8fe61b6c7dddaec09dee7b33d6548a4d
---

{{securecontext_header}}{{APIRef("WebUSB API")}}{{SeeCompatTable}}

{{domxref('WebUSB API','','',' ')}} の **`USBConnectionEvent`** は、ユーザーエージェントが新しい USB デバイスの接続や切断を検出したとき、{{domxref("USB.connect_event", "USB.onconnect")}} および {{domxref("USB.disconnect_event", "USB.ondisconnect")}} に渡されるイベント型です。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("USBConnectionEvent.USBConnectionEvent", "USBConnectionEvent()")}} {{Experimental_Inline}}
  - : `USBConnectionEvent` オブジェクトを返します。

## インスタンスプロパティ

- {{domxref("USBConnectionEvent.device")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 接続中または切断中のデバイスを表す {{domxref("USBDevice")}} を返します。

## 例

以下の例では、接続および切断のイベントを監視することで、アプリケーションのユーザーインターフェイスにデバイスを追加したり取り除いたりします。

```js
navigator.usb.addEventListener("connect", (event) => {
  // UI に event.device を追加する
});

navigator.usb.addEventListener("disconnect", (event) => {
  // UI から event.device を取り除く
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
