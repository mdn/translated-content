---
title: "ScreenOrientation: change イベント"
slug: Web/API/ScreenOrientation/change_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Screen Orientation API")}}

`change` イベントは {{domxref("ScreenOrientation")}} インターフェイスのイベントで、ユーザーがモバイル端末を回転させたときなど、画面の向きが変更されたときに発生します。

## 構文

{{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドでイベント名を使用するか、イベントハンドラープロパティを設定します。

```js-nolint
addEventListener("change", (event) => { })

onchange = (event) => { }
```

## イベント型

汎用的な {{domxref("Event")}} です。

## 例

以下の例では、`change` コールバックが新しい {{DOMxRef("ScreenOrientation.type", "画面の向き", "", "nocode")}} と {{DOMxRef("ScreenOrientation.angle", "角度", "", "nocode")}} を出力します。

```js
screen.orientation.addEventListener("change", (event) => {
  const type = event.target.type;
  const angle = event.target.angle;
  console.log(`ScreenOrientation change: ${type}, ${angle} degrees.`);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
