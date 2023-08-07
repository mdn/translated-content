---
title: "Bluetooth: availabilitychanged イベント"
slug: Web/API/Bluetooth/availabilitychanged_event
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef("Bluetooth API")}}{{securecontext_header}}{{SeeCompatTable}}

`availabilitychanged` イベントは、{{Glossary("User Agent", "ユーザーエージェント")}}で Bluetooth システム全体が利用可能になるか利用不可能になったとき発火します。

## 構文

{{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドでイベント名を用いるか、イベントハンドラープロパティを設定します。

```js-nolint
addEventListener("availabilitychanged", (event) => { })

onavailabilitychanged = (event) => { }
```

## イベント型

汎用の {{domxref("Event")}} です。

## 例

Bluetooth の利用可能性の変化の通知を受け取るには、このように {{domxref("EventTarget.addEventListener", "addEventListener()")}} を用いて {{domxref("Bluetooth")}} インスタンスにハンドラーを追加するとよいです。

```js
Bluetooth.addEventListener("availabilitychanged", (event) => {
  const availability = event.value;
});
```

別の方法として、`Bluetooth.onavailabilitychanged` イベントハンドラープロパティを用いて `availabilitychanged` イベントのハンドラーを構築できます。

```js
Bluetooth.onavailabilitychanged = (event) => {
  const availability = event.value;
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("Bluetooth.getAvailability")}}
