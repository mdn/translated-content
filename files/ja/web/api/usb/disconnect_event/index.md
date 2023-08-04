---
title: "USB: disconnect イベント"
slug: Web/API/USB/disconnect_event
l10n:
  sourceCommit: 6ccfd23bb58f9f973e8783934c69990df4e073fe
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}

{{DOMxRef("USB")}} インターフェイスの **`disconnect`** イベントは、ペア設定済みのデバイスが切断された時発火します。

## 構文

{{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドでイベント名を使うか､イベントハンドラープロパティを設定します｡

```js
addEventListener('disconnect', (event) => { })

ondisconnect = (event) => { }
```

## イベント型

{{domxref("USBConnectionEvent")}} です｡{{domxref("Event")}} を継承します｡

{{InheritanceDiagram("USBConnectionEvent")}}

## イベントプロパティ

_以下に挙げるプロパティに加え､親インターフェイス {{domxref("Event")}} のプロパティも利用できます｡_

- {{domxref("USBConnectionEvent.device", "device")}} {{ReadOnlyInline}}
  - : イベントが発火した対象の {{domxref("USBDevice")}} です｡

## 例

USB デバイスが切断された時､UI を更新したいかもしれません｡

```js
navigator.usb.addEventListener('disconnect', (event) => {
  // UI から event.device を取り除く
});
```

別の方法として､`USB.ondiscconnect` イベントハンドラープロパティを使用して `disconnect` イベント用のハンドラーを設定できます｡

```js
navigator.usb.ondisconnect = (event) => {
  // UI から event.device を取り除く
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
