---
title: HIDConnectionEvent
slug: Web/API/HIDConnectionEvent
l10n:
  sourceCommit: 066257cb0d23e29e269703450e4b1216a65e3b26
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

{{domxref('WebHID API')}} の **`HIDConnectionEvent`** インターフェイスは、HID の接続イベントを表します。このイベント型は、Input レポートを受信した際に {{domxref("HID.connect_event", "HID.onconnect")}} や {{domxref("HID.disconnect_event", "HID.ondisconnect")}} に渡される型です。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("HIDConnectionEvent.HIDConnectionEvent", "HIDConnectionEvent()")}} {{Experimental_Inline}}
  - : 新しい `HIDConnectionEvent` オブジェクトを返します。通常は、イベントは Input レポートを受信した際に生成されるため、このコンストラクターは使用されません。

## インスタンスプロパティ

_{{domxref("Event")}} から継承したプロパティもあります。_

- {{domxref("HIDConnectionEvent.device")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : この接続イベントに関係する {{domxref("HIDDevice")}} のインスタンスを返します。

## 例

この例では、`connect` イベントと `disconnect` イベントにイベントリスナーを登録します。そして、コンソールに {{domxref("HIDDevice.productName")}} を出力します。

```js
navigator.hid.addEventListener("connect", ({ device }) => {
  console.log(`HID が接続されました : ${device.productName}`);
});

navigator.hid.addEventListener("disconnect", ({ device }) => {
  console.log(`HID が切断されました : ${device.productName}`);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
