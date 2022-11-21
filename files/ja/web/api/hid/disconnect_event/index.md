---
title: "HID: disconnect イベント"
slug: Web/API/HID/disconnect_event
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

{{domxref("HID")}} インターフェイスの **`disconnect`** イベントは、ユーザーエージェントが HID デバイスを切断した時発火します。

## 構文

イベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドで使うか、イベントハンドラープロパティを設定します。

```js
addEventListener('disconnect', (event) => { })

ondisconnect = (event) => { }
```

## イベント型

{{domxref("HIDConnectionEvent")}} です。 {{domxref("Event")}} を継承しています。

{{InheritanceDiagram("HIDConnectionEvent")}}

## イベントプロパティ

_以下のプロパティに加え、親の {{domxref("Event")}} インターフェイスから継承したプロパティが使用可能です。_

- {{domxref("HIDConnectionEvent.device", "device")}} {{ReadOnlyInline}}
  - : イベントが発火した原因の {{domxref("HIDDevice")}} です。

## 例

この例では、デバイスの切断を監視するためにイベントリスナーを登録します。切断時、デバイス名が {{domxref("HIDDevice.productName")}} を用いてコンソールに出力されます。

```js
navigator.hid.addEventListener('connect', ({device}) => {
  console.log(`HID connected: ${device.productName}`);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
