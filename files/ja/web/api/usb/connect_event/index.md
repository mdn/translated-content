---
title: "USB: connect イベント"
slug: Web/API/USB/connect_event
l10n:
  sourceCommit: f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}

{{DOMxRef("USB")}} インターフェイスの **`connect`** イベントは、ペア設定済みのデバイスが接続された時発火します。

## 構文

{{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドでイベント名を使うか、イベントハンドラープロパティを設定します。

```js
addEventListener('connect', (event) => { })

onconnect = (event) => { }
```

## イベント型

{{domxref("USBConnectionEvent")}} です。{{domxref("Event")}} を継承します。

{{InheritanceDiagram("USBConnectionEvent")}}

## イベントプロパティ

_以下に挙げるプロパティに加え、親インターフェイス {{domxref("Event")}} のプロパティも利用できます。_

- {{domxref("USBConnectionEvent.device", "device")}} {{ReadOnlyInline}}
  - : イベントが発火した対象の {{domxref("USBDevice")}} です。

## 例

USB デバイスが接続された時、UI を更新したいかもしれません。

```js
navigator.usb.addEventListener('connect', (event) => {
  // event.device を UI に追加する
});
```

別の方法として、`USB.onconnect` イベントハンドラープロパティを使用して `connect` イベント用のハンドラーを設定できます。

```js
navigator.usb.onconnect = (event) => {
  // event.device を UI に追加する
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
